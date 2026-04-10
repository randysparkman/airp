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
```bash
# Full pipeline (replay mode — uses actual T3 Q&A from response file)
node harness.js \
  --profile /Users/randysparkman/Desktop/AI-assessment-tool/job-role-profile-medical-billing.md \
  --responses responses/jane-maples-medical.json \
  --replay

# Regenerate profile only (uses existing scored output JSON)
node regen-profile.js \
  output/<existing>.json \
  /Users/randysparkman/Desktop/AI-assessment-tool/profile-generation-prompt-v6.md \
  /Users/randysparkman/Desktop/AI-assessment-tool/job-role-profile-medical-billing.md \
  responses/jane-maples-medical.json

# Generate PDF from output JSON
python3 generate_pdf.py output/<file>.json
```

## Models
- Default: `claude-sonnet-4-20250514`
- High-fidelity: `claude-opus-4-6` (pass `--model claude-opus-4-6`)

## API Key
Stored in `~/.zshrc` as `ANTHROPIC_API_KEY`. Claude Code sessions need `source ~/.zshrc` if the key isn't in environment.

## Reference Assets (in AI-assessment-tool/)
- `job-role-profile-medical-billing.md` — job role profile with embedded T1/T2 questions + rubrics
- `profile-generation-prompt-v6.md` — current profile generation prompt
- `org-fluency-files/` — org context files

## Reference Respondent
Jane Maples — Medical Billing Specialist. Full 15 Q&A in `responses/jane-maples-medical.json`. Opus run output: `output/jane-maples-2026-04-02T23-39-55.json`.
