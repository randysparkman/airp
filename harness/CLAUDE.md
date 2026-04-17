# AI Readiness Profile — Project Context

## What This Is
A Node.js test harness that runs respondents through an AI literacy assessment pipeline and generates a scored profile + PDF report.

## Pipeline Overview
T1 scoring (5 baseline Q&A) → T2 scoring (5 contextualized Q&A) → T3 summary → T3 rubric generation → T3 scoring (5 adaptive Q&A) → profile generation → PDF

Three scoring constructs: **Orientation**, **Integration**, **Judgment** — each at Emerging / Developing / Demonstrating

DOL AI Literacy Framework — 5 content areas embedded in questions and rubrics.

## Key Files
- `harness.js` — main pipeline CLI
- `regen-profile.js` — regenerate profile only from existing scored output (cheap: ~$0.14 vs ~$0.49 full run)
- `generate_pdf.py` — converts harness JSON output to PDF
- `responses/` — respondent Q&A JSON files
- `output/` — scored JSON outputs and PDFs
- `cache/` — SHA256-keyed API response cache (avoids re-billing for same inputs)

## Running the Harness
> ⚠️ **Harness is currently non-functional.** `harness.js` has a hardcoded `ASSESSMENT_DIR = '/Users/randysparkman/Desktop/AI-assessment-tool'` (folder does not exist) and references versioned files (`profile-generation-prompt-v5.md`, `tier3-*-template-v2.json`) that live in `~/Desktop/AI-assessment-tool-claude-chat/` and are diverged from the app's canonical artifacts. See the "Revisit harness concept" item in `BACKLOG.md`. The commands below are preserved for reference only.

```bash
# Full pipeline (replay mode — uses actual T3 Q&A from response file)
node harness.js \
  --profile ../data/job-role-profile-medical-billing.md \
  --responses responses/jane-maples-medical.json \
  --replay

# Regenerate profile only (uses existing scored output JSON)
node regen-profile.js \
  output/<existing>.json \
  <path-to-profile-generation-prompt.md> \
  ../data/job-role-profile-medical-billing.md \
  responses/jane-maples-medical.json

# Generate PDF from output JSON
python3 generate_pdf.py output/<file>.json
```

## Models
- Default: `claude-sonnet-4-20250514`
- High-fidelity: `claude-opus-4-6` (pass `--model claude-opus-4-6`)

## API Key
Stored in `~/.zshrc` as `ANTHROPIC_API_KEY`. Claude Code sessions need `source ~/.zshrc` if the key isn't in environment.

## Reference Assets
Canonical build artifacts live in the app repo:
- `../data/job-role-profile-*.md` — job role profiles with embedded T1/T2 questions + rubrics
- `../lib/prompts/generate-profile-prompt.ts` — current profile generation prompt (app-canonical; TypeScript)
- `generate_profile_pdf.py` — PDF renderer (imported by `generate_pdf.py`)

Historical/design-era assets (older prompt versions, org-fluency source files, Lovable changelogs, prototype) live outside the repo at `~/Desktop/AI-assessment-tool-claude-chat/`. Reference-only.

## Reference Respondent
Jane Maples — Medical Billing Specialist. Full 15 Q&A in `responses/jane-maples-medical.json`. Opus run output: `output/jane-maples-2026-04-02T23-39-55.json`.
