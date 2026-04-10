#!/usr/bin/env node
/**
 * Regenerate profile from existing harness output using a specified prompt version.
 * Usage: node regen-profile.js <existing-output.json> <profile-prompt.md>
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const CACHE_DIR = path.join(process.cwd(), '.cache');

function cacheKey(systemPrompt, userMessage, model) {
  return crypto.createHash('sha256')
    .update(JSON.stringify({ systemPrompt, userMessage, model }))
    .digest('hex').slice(0, 20);
}

async function callClaude(systemPrompt, userMessage, model) {
  const key = cacheKey(systemPrompt, userMessage, model);
  const cacheFile = path.join(CACHE_DIR, `${key}.json`);
  if (fs.existsSync(cacheFile)) {
    process.stdout.write(' [cached]');
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }
  const data = await res.json();
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(cacheFile, JSON.stringify(data));
  return data;
}

function extractText(result) {
  return result?.content?.find(b => b.type === 'text')?.text ?? '';
}

function extractJSON(text) {
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fence ? fence[1] : text;
  const start = raw.search(/[{[]/);
  const end = Math.max(raw.lastIndexOf('}'), raw.lastIndexOf(']'));
  if (start === -1 || end === -1) throw new Error('No JSON found in response');
  return JSON.parse(raw.slice(start, end + 1));
}

// ── main ────────────────────────────────────────────────────────────────────

const [,, inputFile, promptFile, profileFile, responsesFile] = process.argv;
if (!inputFile || !promptFile) {
  console.error('Usage: node regen-profile.js <existing-output.json> <profile-prompt.md> [<job-role-profile.md>]');
  process.exit(1);
}

const existing = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
const profileGenPrompt = fs.readFileSync(promptFile, 'utf8');

const model = existing.meta.model;

// Load intake_answers from responses file if provided
let intakeAnswers = null;
if (responsesFile) {
  const resp = JSON.parse(fs.readFileSync(responsesFile, 'utf8'));
  intakeAnswers = resp.intake_answers ?? null;
}

// Extract org fluency from profile markdown if provided
let orgFluency = null;
if (profileFile) {
  const profileContent = fs.readFileSync(profileFile, 'utf8');
  orgFluency = profileContent
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .split(/\n## Tier 1/)[0]
    .trim();
}

const allScored = [
  ...existing.tier1_scored,
  ...existing.tier2_scored,
  ...existing.tier3_scored,
];

const profileUserMsg = JSON.stringify({
  scored_responses: allScored,
  respondent_name: existing.meta.respondent_name,
  intake_answers: intakeAnswers ?? existing.responses?.intake_answers ?? null,
  org_name: 'Medical Billing Specialist',
  org_fluency: orgFluency ?? existing.org_fluency ?? null,
}, null, 2);

console.log(`\nRegenerating profile for ${existing.meta.respondent_name}`);
console.log(`Model:  ${model}`);
console.log(`Prompt: ${path.basename(promptFile)}`);
console.log(`Input:  ${path.basename(inputFile)}`);
console.log('\nCalling Claude...');
process.stdout.write('  Generating profile...');

callClaude(profileGenPrompt, profileUserMsg, model).then(result => {
  const text = extractText(result);
  const profile = extractJSON(text);
  console.log(' done.\n');

  // Save alongside original with a suffix
  const base = inputFile.replace(/\.json$/, '');
  const outFile = `${base}-v6-profile.json`;
  fs.writeFileSync(outFile, JSON.stringify({ meta: existing.meta, profile }, null, 2));
  console.log(`Saved: ${outFile}`);
  console.log(`\nBand:        ${profile.band}`);
  console.log(`Orientation: ${profile.dimensions?.orientation?.level}`);
  console.log(`Integration: ${profile.dimensions?.integration?.level}`);
  console.log(`Judgment:    ${profile.dimensions?.judgment?.level}`);
  console.log(`\nSummary:\n${profile.summary}`);
  console.log(`\nPrimary next step:\n${profile.primary_next_step}`);
}).catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
