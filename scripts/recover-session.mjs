#!/usr/bin/env node
/**
 * Recovery: load a stuck `assessment_sessions` row by resume code, finish the
 * pipeline (score-tier3 + generate-profile), and write a JSON file in the same
 * shape `export-pdf.mjs` consumes.
 *
 * Usage:
 *   node scripts/recover-session.mjs <RESUME_CODE> [base-url]
 *
 * Defaults to https://wkpath.com if base-url is omitted. Read-only against
 * Supabase (loads the session row but does not modify it).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// Load .env.local
const envPath = path.join(ROOT, '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}

const resumeCode = process.argv[2];
if (!resumeCode) {
  console.error('Usage: node scripts/recover-session.mjs <RESUME_CODE> [base-url]');
  process.exit(1);
}
const BASE_URL = (process.argv[3] || 'https://wkpath.com').replace(/\/$/, '');

// ── Helpers ───────────────────────────────────────────────────────────────────

async function callApi(endpoint, body, label) {
  const url = `${BASE_URL}${endpoint}`;
  const t0 = Date.now();
  process.stdout.write(`  → POST ${endpoint}${label ? ` [${label}]` : ''} ... `);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(300_000),
  });
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  if (!res.ok) {
    console.log(`FAILED (${elapsed}s)`);
    const text = await res.text();
    throw new Error(`${endpoint} returned ${res.status}: ${text.slice(0, 300)}`);
  }
  console.log(`${elapsed}s`);
  return res.json();
}

function extractJsonBlock(md, startMarker, endMarker) {
  const start = md.indexOf(startMarker);
  const end = md.indexOf(endMarker, start);
  if (start === -1 || end === -1) return null;
  const block = md.slice(start + startMarker.length, end).trim();
  const inner = block.replace(/^```json\s*/m, '').replace(/\s*```\s*$/m, '');
  return JSON.parse(inner);
}

function parseFrontMatter(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return {};
  const fm = m[1];
  const grab = (k) => {
    const r = fm.match(new RegExp(`^${k}:\\s*"([^"]*)"`, 'm'));
    return r ? r[1] : '';
  };
  return {
    roleLabel: grab('role_label'),
    sponsor: grab('sponsor'),
    roleDescription: grab('role_description'),
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error('Missing Supabase env vars');
  process.exit(1);
}
const sb = createClient(url, key);

console.log(`\nRecovering session: ${resumeCode}`);
console.log(`Base URL: ${BASE_URL}\n`);

const { data: row, error: loadErr } = await sb
  .from('assessment_sessions')
  .select('resume_code, role_profile, updated_at, state')
  .eq('resume_code', resumeCode)
  .maybeSingle();

if (loadErr || !row) {
  console.error('Session not found:', loadErr || 'no row');
  process.exit(1);
}

const state = row.state;
const slug = row.role_profile;
console.log(`  Loaded session for "${state.userName}" (role=${slug}, last updated ${row.updated_at})`);
console.log(`  t1=${Object.keys(state.t1Responses || {}).length} t2=${Object.keys(state.t2Responses || {}).length} t3=${Object.keys(state.t3Responses || {}).length} t3scored=${(state.t3Scores || []).length}`);

// Load role profile markdown to recover Tier 1/2 questions and org context
const profilePath = path.join(ROOT, 'data', `job-role-profile-${slug}.md`);
if (!fs.existsSync(profilePath)) {
  throw new Error(`Profile not found: ${profilePath}`);
}
const profileMd = fs.readFileSync(profilePath, 'utf8');
const t1Data = extractJsonBlock(profileMd, '<!-- tier1-questions-start -->', '<!-- tier1-questions-end -->');
const t2Data = extractJsonBlock(profileMd, '<!-- tier2-questions-start -->', '<!-- tier2-questions-end -->');
if (!t1Data || !t2Data) throw new Error('Could not extract question JSON from profile');
const fm = parseFrontMatter(profileMd);
const contextEnd = profileMd.indexOf('## Tier 1 Questions');
const orgFluencyRaw = contextEnd >= 0 ? profileMd.substring(0, contextEnd).trim() : profileMd;
const orgName = fm.roleLabel || '';

const tier1Questions = t1Data.questions;
const tier2Questions = t2Data.questions;
const tier3QuestionsRaw = state.t3QuestionsRaw || [];

// ── Step 1: Score Tier 3 (if not already scored) ──────────────────────────────
let t3Scores = state.t3Scores || [];
if (t3Scores.length === 0) {
  console.log('\nStep 1: Score Tier 3 (missing from session)');
  const t3QuestionsForScoring = tier3QuestionsRaw.map((q) => ({
    id: q.id,
    scenario: q.scenario,
    prompt: q.prompt,
    rubric: q.rubric,
  }));
  const scoreData = await callApi('/api/score-tier3', {
    responses: state.t3Responses,
    questions: t3QuestionsForScoring,
  });
  t3Scores = scoreData.scores;
  console.log(`  ✓ ${t3Scores.length} questions scored`);
} else {
  console.log('\nStep 1: Skipping T3 scoring (already in session)');
}

// ── Step 2: Build enriched scored_responses payload ───────────────────────────
// Mirrors hooks/use-assessment-scoring.ts:239-287
const allScores = [...(state.t1Scores || []), ...(state.t2Scores || []), ...t3Scores];

const enrichedResponses = allScores.map((score) => {
  const qid = score.question_id;
  let scenario = '', prompt = '', response = '';
  let tier = 1;
  let dol_content_area = '';
  let human_function_activated = '';

  if (qid.startsWith('t1_')) {
    tier = 1;
    const q = tier1Questions.find((q) => q.id === qid);
    scenario = q?.scenario || '';
    prompt = q?.prompt || '';
    response = state.t1Responses[qid] || '';
    dol_content_area = q?.dol_content_area || '';
    human_function_activated = q?.human_function_activated || '';
  } else if (qid.startsWith('t2_')) {
    tier = 2;
    const q = tier2Questions.find((q) => q.id === qid);
    scenario = q?.scenario || '';
    prompt = q?.prompt || '';
    response = state.t2Responses[qid] || '';
    dol_content_area = q?.dol_content_area || '';
    human_function_activated = q?.human_function_activated || '';
  } else if (qid.startsWith('t3_')) {
    tier = 3;
    const q = tier3QuestionsRaw.find((q) => q.id === qid);
    scenario = q?.scenario || '';
    prompt = q?.prompt || '';
    response = state.t3Responses[qid] || '';
    dol_content_area = q?.dol_content_area || '';
    human_function_activated = q?.human_function_activated || '';
  }

  return {
    question_id: qid,
    tier,
    dol_content_area,
    human_function_activated,
    scenario,
    prompt,
    response,
    orientation_level: score.orientation_level,
    integration_level: score.integration_level,
    judgment_level: score.judgment_level,
    evidence_notes: score.evidence_notes,
  };
});

// ── Step 3: Generate profile ──────────────────────────────────────────────────
console.log('\nStep 2: Generate profile');
const { profile } = await callApi('/api/generate-profile', {
  scored_responses: enrichedResponses,
  respondent_name: state.userName || 'Anonymous',
  intake_answers: state.intakeAnswers || null,
  org_name: orgName || null,
  org_fluency: orgFluencyRaw || null,
});
console.log('  ✓ Profile generated');

// ── Step 4: Write output JSON in export-pdf.mjs format ────────────────────────
// export-pdf.mjs reads `data.profile`, `data.meta.persona`, `data.meta.profile`,
// `data.all_scored_responses[].{tier,scenario,user_response}`.
const allScoredForExport = enrichedResponses.map((r) => ({
  ...r,
  user_response: r.response,
}));

const outputDir = path.join(ROOT, 'regeneration-output');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outPath = path.join(outputDir, `recovery-${resumeCode}-${ts}.json`);

const output = {
  meta: {
    persona: state.userName || '',
    profile: slug,
    timestamp: new Date().toISOString(),
    base_url: BASE_URL,
    recovered_from_resume_code: resumeCode,
  },
  t1_scores: state.t1Scores || [],
  t2_scores: state.t2Scores || [],
  t3_questions: tier3QuestionsRaw,
  t3_responses: state.t3Responses,
  t3_scores: t3Scores,
  profile,
  all_scored_responses: allScoredForExport,
};

fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`\nOutput JSON: ${path.relative(ROOT, outPath)}`);
console.log(`\nNext step — generate the PDF:`);
console.log(`  node scripts/export-pdf.mjs ${path.relative(ROOT, outPath)}`);
