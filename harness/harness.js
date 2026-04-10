#!/usr/bin/env node

/**
 * AI Readiness Assessment Harness
 *
 * Usage:
 *   node harness.js --profile job-role-profile-medical-billing.md \
 *                   --responses responses/jane-maples-medical.json \
 *                   [--model claude-sonnet-4-20250514] \
 *                   [--replay]
 *
 * --replay   Use the T3 questions already in the response file (e.g. from a
 *            prior live run). Generates rubrics for those questions instead of
 *            generating new adaptive questions. Fixes the mismatch that occurs
 *            when scoring real answers against freshly-generated questions.
 *
 * Requires: ANTHROPIC_API_KEY environment variable
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ─── Paths ─────────────────────────────────────────────────────────────────

const ASSESSMENT_DIR = '/Users/randysparkman/Desktop/AI-assessment-tool';
const CACHE_DIR = path.join(__dirname, 'cache');
const OUTPUT_DIR = path.join(__dirname, 'output');

const TIER3_SUMMARY_TEMPLATE = path.join(ASSESSMENT_DIR, 'tier3-summary-template-v2.json');
const TIER3_QUESTION_TEMPLATE = path.join(ASSESSMENT_DIR, 'tier3-question-template-v2.json');
const PROFILE_GEN_PROMPT = path.join(ASSESSMENT_DIR, 'profile-generation-prompt-v5.md');

// ─── CLI Args ───────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { profile: null, responses: null, model: 'claude-sonnet-4-20250514', replay: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--profile'   && args[i + 1]) opts.profile   = args[++i];
    if (args[i] === '--responses' && args[i + 1]) opts.responses = args[++i];
    if (args[i] === '--model'     && args[i + 1]) opts.model     = args[++i];
    if (args[i] === '--replay')                   opts.replay    = true;
  }
  return opts;
}

// ─── Profile Parser ─────────────────────────────────────────────────────────

function parseProfile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // YAML front matter
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  const yaml = {};
  if (yamlMatch) {
    for (const line of yamlMatch[1].split('\n')) {
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;
      const key = line.slice(0, colonIdx).trim();
      const val = line.slice(colonIdx + 1).trim().replace(/^"|"$/g, '');
      yaml[key] = val;
    }
  }

  // Tier 1 question JSON
  const t1Match = content.match(/<!-- tier1-questions-start -->\n```json\n([\s\S]*?)\n```\n<!-- tier1-questions-end -->/);
  if (!t1Match) throw new Error('Could not find Tier 1 questions in profile');
  const tier1 = JSON.parse(t1Match[1]);

  // Tier 2 question JSON
  const t2Match = content.match(/<!-- tier2-questions-start -->\n```json\n([\s\S]*?)\n```\n<!-- tier2-questions-end -->/);
  if (!t2Match) throw new Error('Could not find Tier 2 questions in profile');
  const tier2 = JSON.parse(t2Match[1]);

  // Org fluency = everything before the first Tier section
  const orgFluency = content
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .split(/\n## Tier 1/)[0]
    .trim();

  return { yaml, tier1, tier2, orgFluency };
}

// ─── Cache ──────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function cacheKey(systemPrompt, userMessage, model) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify({ systemPrompt, userMessage, model }))
    .digest('hex')
    .slice(0, 20);
}

function getCached(key) {
  const file = path.join(CACHE_DIR, `${key}.json`);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

function saveCache(key, data) {
  ensureDir(CACHE_DIR);
  fs.writeFileSync(path.join(CACHE_DIR, `${key}.json`), JSON.stringify(data, null, 2));
}

// ─── API ────────────────────────────────────────────────────────────────────

async function callClaude(systemPrompt, userMessage, model) {
  const key = cacheKey(systemPrompt, userMessage, model);
  const cached = getCached(key);
  if (cached) {
    process.stdout.write(' [cached]\n');
    return cached;
  }

  process.stdout.write(' [api]');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 8096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Anthropic API ${res.status}: ${body}`);
  }

  const data = await res.json();
  saveCache(key, data);
  process.stdout.write('\n');
  return data;
}

function extractText(apiResponse) {
  return apiResponse.content[0].text;
}

function extractJSON(text) {
  // Strip markdown code fences if present
  const fenced = text.match(/```(?:json)?\n?([\s\S]*?)\n?```/);
  const raw = fenced ? fenced[1] : text.trim();
  return JSON.parse(raw);
}

// ─── Rubric generation (replay mode) ────────────────────────────────────────

async function generateRubricsForExistingT3(orgFluency, t3Responses, model) {
  const systemPrompt =
    'You are generating scoring rubrics for an AI-readiness assessment. ' +
    'You will receive job role context and a list of Tier 3 questions. ' +
    'For each question generate a 3×3 rubric with Orientation, Integration, and Judgment constructs, ' +
    'each at Emerging, Developing, and Demonstrating levels. ' +
    'Descriptors must be specific to the scenario and grounded in the job role context. ' +
    'Return only valid JSON — an array of rubric objects in the same order as the input questions.';

  const questions = t3Responses.map((r, i) => ({
    sequence: i + 1,
    scenario: r.scenario,
    prompt: r.prompt,
  }));

  const userMsg =
    `JOB ROLE CONTEXT:\n${orgFluency}\n\n` +
    `QUESTIONS:\n${JSON.stringify(questions, null, 2)}\n\n` +
    'Return a JSON array of objects, one per question, each with this structure:\n' +
    '{"orientation":{"emerging":"...","developing":"...","demonstrating":"..."},' +
    '"integration":{"emerging":"...","developing":"...","demonstrating":"..."},' +
    '"judgment":{"emerging":"...","developing":"...","demonstrating":"..."}}';

  process.stdout.write('  Generating rubrics for existing T3 questions...');
  const result = await callClaude(systemPrompt, userMsg, model);
  return extractJSON(extractText(result));
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

async function scoreOne(scoringPrompt, scenario, prompt, response, rubric, model) {
  const userMsg = [
    `SCENARIO:\n${scenario}`,
    `PROMPT:\n${prompt}`,
    `RESPONSE:\n${response}`,
    `RUBRIC:\n${JSON.stringify(rubric, null, 2)}`,
  ].join('\n\n');

  const result = await callClaude(scoringPrompt, userMsg, model);
  return extractJSON(extractText(result));
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();

  if (!opts.profile || !opts.responses) {
    console.error(
      'Usage: node harness.js --profile <profile-file> --responses <responses-file> [--model <model>]'
    );
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable not set');
    process.exit(1);
  }

  // Resolve paths
  const profilePath = path.isAbsolute(opts.profile)
    ? opts.profile
    : path.join(ASSESSMENT_DIR, opts.profile);

  const responsesPath = path.isAbsolute(opts.responses)
    ? opts.responses
    : path.join(__dirname, opts.responses);

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   AI Readiness Assessment Harness        ║');
  console.log('╚══════════════════════════════════════════╝\n');
  console.log(`Profile:   ${profilePath}`);
  console.log(`Responses: ${responsesPath}`);
  console.log(`Model:     ${opts.model}\n`);

  // Load inputs
  const profile   = parseProfile(profilePath);
  const responses = JSON.parse(fs.readFileSync(responsesPath, 'utf8'));
  const t3SummaryTemplate  = JSON.parse(fs.readFileSync(TIER3_SUMMARY_TEMPLATE, 'utf8'));
  const t3QuestionTemplate = JSON.parse(fs.readFileSync(TIER3_QUESTION_TEMPLATE, 'utf8'));
  const profileGenPrompt   = fs.readFileSync(PROFILE_GEN_PROMPT, 'utf8');

  const scoringPrompt = profile.tier1.scoring.scoring_prompt_template;
  const model = opts.model;

  // ── TIER 1 ──────────────────────────────────────────────────────────────

  console.log('─── TIER 1: Baseline Scoring ───────────────');
  const tier1Scored = [];

  for (const q of profile.tier1.questions) {
    const r = responses.tier1_responses.find(x => x.question_id === q.id);
    if (!r) throw new Error(`Missing Tier 1 response for ${q.id}`);
    process.stdout.write(`  ${q.id} (${q.angle})...`);

    const scores = await scoreOne(scoringPrompt, q.scenario, q.prompt, r.response, q.rubric, model);

    tier1Scored.push({
      question_id: q.id,
      question_angle: q.angle,
      tier: 1,
      dol_content_area: q.dol_content_area,
      human_function_activated: q.human_function_activated,
      scenario: q.scenario,
      prompt: q.prompt,
      user_response: r.response,
      orientation_level: scores.orientation_level,
      integration_level: scores.integration_level,
      judgment_level: scores.judgment_level,
      evidence_notes: scores.evidence_notes,
    });

    console.log(
      `    O:${scores.orientation_level.padEnd(13)} I:${scores.integration_level.padEnd(13)} J:${scores.judgment_level}`
    );
  }

  // ── TIER 2 ──────────────────────────────────────────────────────────────

  console.log('\n─── TIER 2: Contextualized Scoring ─────────');
  const tier2Scored = [];

  for (const q of profile.tier2.questions) {
    const r = responses.tier2_responses.find(x => x.question_id === q.id);
    if (!r) throw new Error(`Missing Tier 2 response for ${q.id}`);
    process.stdout.write(`  ${q.id} (${q.angle})...`);

    const scores = await scoreOne(scoringPrompt, q.scenario, q.prompt, r.response, q.rubric, model);

    tier2Scored.push({
      question_id: q.id,
      question_angle: q.angle,
      tier: 2,
      dol_content_area: q.dol_content_area,
      human_function_activated: q.human_function_activated,
      scenario: q.scenario,
      prompt: q.prompt,
      user_response: r.response,
      orientation_level: scores.orientation_level,
      integration_level: scores.integration_level,
      judgment_level: scores.judgment_level,
      evidence_notes: scores.evidence_notes,
    });

    console.log(
      `    O:${scores.orientation_level.padEnd(13)} I:${scores.integration_level.padEnd(13)} J:${scores.judgment_level}`
    );
  }

  // ── TIER 3 SUMMARY ──────────────────────────────────────────────────────

  console.log('\n─── TIER 3: Summary Generation ─────────────');
  process.stdout.write('  Generating performance summary...');

  const allTier12 = [...tier1Scored, ...tier2Scored];
  const t3SummaryUserMsg = t3SummaryTemplate.prompt_template.replace(
    '[scored responses array inserted here]',
    JSON.stringify(allTier12, null, 2)
  );

  const t3SummaryResult = await callClaude(
    'You are an AI-readiness assessment analyst. Analyze the scored responses and return only valid JSON matching the specified structure.',
    t3SummaryUserMsg,
    model
  );
  const t3Summary = extractJSON(extractText(t3SummaryResult));

  console.log(
    `  Placement bands → O:${t3Summary.overall_placement?.orientation_band}  ` +
    `I:${t3Summary.integration_profile?.modal_level}  ` +
    `J:${t3Summary.judgment_profile?.modal_level}`
  );

  // ── TIER 3 QUESTION GENERATION (or rubric generation in replay mode) ────

  let t3Questions = null;
  let t3Rubrics   = null;

  if (opts.replay) {
    console.log('\n─── TIER 3: Replay Mode — Rubric Generation ─');
    if (!responses.tier3_responses?.length) {
      throw new Error('--replay requires tier3_responses in the response file');
    }
    t3Rubrics = await generateRubricsForExistingT3(profile.orgFluency, responses.tier3_responses, model);
    console.log(`  Generated rubrics for ${t3Rubrics.length} existing T3 questions`);
  } else {
    console.log('\n─── TIER 3: Adaptive Question Generation ───');
    process.stdout.write('  Generating 5 adaptive questions...');

    const t3QuestionUserMsg = t3QuestionTemplate.prompt_template
      .replace(
        '[structured performance summary JSON inserted here]',
        JSON.stringify(t3Summary, null, 2)
      )
      .replace(
        "[org-fluency.md content inserted here, or 'No org-fluency context provided — generate context-independent scenarios']",
        profile.orgFluency
      );

    const t3QuestionsResult = await callClaude(
      'You are an AI-readiness adaptive question generator. Generate 5 adaptive assessment questions and return only valid JSON matching the specified structure.',
      t3QuestionUserMsg,
      model
    );
    t3Questions = extractJSON(extractText(t3QuestionsResult));

    console.log(`  Generated ${t3Questions.questions?.length ?? 0} questions`);
    console.log(`  Primary goal: ${t3Summary.tier3_priorities?.primary_goal}`);
  }

  // ── TIER 3 SCORING ──────────────────────────────────────────────────────

  console.log('\n─── TIER 3: Scoring ─────────────────────────');
  const tier3Scored = [];

  const t3Count = opts.replay
    ? responses.tier3_responses.length
    : (t3Questions.questions?.length ?? 0);

  for (let i = 0; i < t3Count; i++) {
    const r = responses.tier3_responses[i];
    if (!r) {
      console.log(`  t3_q${i + 1}: no response provided — skipping`);
      continue;
    }

    let rubric, angle, strategy, dolArea, humanFn;

    if (opts.replay) {
      // Use generated rubric for the actual question Jane answered
      rubric   = t3Rubrics[i];
      angle    = `replay_q${i + 1}`;
      strategy = 'replay';
      dolArea  = 'from_response_file';
      humanFn  = 'from_response_file';
    } else {
      const genQ = t3Questions.questions[i];
      rubric   = genQ.rubric;
      angle    = genQ.angle;
      strategy = genQ.adaptive_strategy;
      dolArea  = genQ.dol_content_area;
      humanFn  = genQ.human_function_activated;
    }

    process.stdout.write(`  t3_q${i + 1} (${angle})...`);

    const scores = await scoreOne(scoringPrompt, r.scenario, r.prompt, r.response, rubric, model);

    tier3Scored.push({
      question_id: `t3_q${i + 1}`,
      question_angle: angle,
      adaptive_strategy: strategy,
      tier: 3,
      dol_content_area: dolArea,
      human_function_activated: humanFn,
      scenario: r.scenario,
      prompt: r.prompt,
      user_response: r.response,
      orientation_level: scores.orientation_level,
      integration_level: scores.integration_level,
      judgment_level: scores.judgment_level,
      evidence_notes: scores.evidence_notes,
    });

    console.log(
      `    O:${scores.orientation_level.padEnd(13)} I:${scores.integration_level.padEnd(13)} J:${scores.judgment_level}`
    );
  }

  // ── PROFILE GENERATION ──────────────────────────────────────────────────

  console.log('\n─── Profile Generation ──────────────────────');
  process.stdout.write('  Generating final profile...');

  const allScored = [...tier1Scored, ...tier2Scored, ...tier3Scored];

  const profileUserMsg = JSON.stringify({
    scored_responses: allScored,
    respondent_name: responses.respondent_name,
    intake_answers: responses.intake_answers,
    org_name: profile.yaml.role_label,
    org_fluency: profile.orgFluency,
  }, null, 2);

  const profileResult = await callClaude(profileGenPrompt, profileUserMsg, model);
  const finalProfile  = extractJSON(extractText(profileResult));

  // ── OUTPUT ───────────────────────────────────────────────────────────────

  ensureDir(OUTPUT_DIR);
  const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const slug = responses.respondent_name.replace(/\s+/g, '-').toLowerCase();
  const outputFile = path.join(OUTPUT_DIR, `${slug}-${ts}.json`);

  const fullOutput = {
    meta: {
      respondent_name: responses.respondent_name,
      profile: opts.profile,
      model,
      mode: opts.replay ? 'replay' : 'adaptive',
      run_at: new Date().toISOString(),
    },
    tier1_scored: tier1Scored,
    tier2_scored: tier2Scored,
    tier3_summary: t3Summary,
    ...(opts.replay
      ? { tier3_rubrics_generated: t3Rubrics }
      : { tier3_questions_generated: t3Questions }),
    tier3_scored: tier3Scored,
    profile: finalProfile,
  };

  fs.writeFileSync(outputFile, JSON.stringify(fullOutput, null, 2));

  // ── Console summary ──────────────────────────────────────────────────────

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   ASSESSMENT COMPLETE                    ║');
  console.log('╚══════════════════════════════════════════╝\n');
  console.log(`Respondent:  ${responses.respondent_name}`);
  console.log(`Placement:   ${finalProfile.band}`);
  console.log(`Orientation: ${finalProfile.dimensions?.orientation?.level}`);
  console.log(`Integration: ${finalProfile.dimensions?.integration?.level}`);
  console.log(`Judgment:    ${finalProfile.dimensions?.judgment?.level}`);
  console.log(`\nSummary:\n${finalProfile.summary}`);
  console.log(`\nPrimary next step:\n${finalProfile.primary_next_step}`);
  console.log(`\nOutput: ${outputFile}\n`);
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
