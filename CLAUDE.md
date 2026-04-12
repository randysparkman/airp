# WorkPath — Project Context for Claude

## What This Is
WorkPath is Randy Sparkman's AI readiness assessment product. It has three components:
1. **Assessment App** — a Next.js App Router application, live on Vercel (migrated from Lovable, April 2026)
2. **Brochure** — a static marketing page served from `public/brochure.html`
3. **Harness** — a Node.js pipeline that runs respondents through the assessment offline and generates a scored PDF profile

---

## Repo Structure
```
workpath/
  app/                            # Next.js App Router
    layout.tsx, globals.css
    page.tsx                      # Assessment at /
    [slug]/page.tsx               # Assessment at /:slug
    api/
      score-tier1/route.ts        # Sonnet — rubric scoring
      score-tier2/route.ts        # Sonnet — rubric scoring
      score-tier3/route.ts        # Sonnet — rubric scoring
      generate-tier3/route.ts     # Sonnet (summary) + Opus (questions)
      generate-profile/route.ts   # Opus — narrative profile
  components/
    AssessmentPage.tsx            # Main page component
    assessment/                   # 17 screen + shared components
  data/                           # Job-role profiles, questions, templates
  hooks/                          # useAssessmentFlow, useAssessmentScoring
  lib/
    anthropic.ts                  # Shared Anthropic SDK client
    supabase.ts                   # Lazy Supabase client (getSupabase())
    generatePdf.ts                # Client-side jsPDF generation
    parse-ai-json.ts              # JSON extraction from Claude responses
    utils.ts                      # cn() utility
    prompts/
      generate-profile-prompt.ts  # ~440-line profile generation system prompt
  public/
    brochure.html                 # Static brochure (served via rewrite at /brochure)
  harness/                        # Offline scoring pipeline (see harness/CLAUDE.md)
  responses/                      # Respondent Q&A JSON files
  profiles/                       # Scored JSON outputs and generated PDFs
  BACKLOG.md                      # Project backlog and pre-launch items
```

---

## GitHub & Deployment
- **GitHub repo:** `https://github.com/randysparkman/workpath`
- **Vercel project:** `workpath` (Framework Preset: Next.js, auto-deploys on push to `main`)
- **Live URLs:**
  - `https://workpath-one.vercel.app/` — assessment app
  - `https://workpath-one.vercel.app/brochure` — static brochure
  - `https://workpath-one.vercel.app/medical-billing` — Medical Billing context
  - `https://workpath-one.vercel.app/cie499` — CIE499 context
- **Future custom domain:** TBD — not yet configured
- **Git remote:** `git@github.com:randysparkman/workpath.git` (SSH)

### Deploy workflow
```bash
cd /Users/randysparkman/Desktop/workpath
git add <files>
git commit -m "message"
git push   # Vercel auto-deploys in ~30 seconds
```

### Environment Variables (Vercel)
- `ANTHROPIC_API_KEY` — for API routes
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key (insert-only RLS)

---

## Assessment App Architecture

### Model Strategy
| Route | Model | Why |
|-------|-------|-----|
| score-tier1/2/3 | `claude-sonnet-4-20250514` | Structured rubric scoring — fast, cheap |
| generate-tier3 step 1 | `claude-sonnet-4-20250514` | Performance summary — structured analysis |
| generate-tier3 step 2 | `claude-opus-4-6` | Adaptive question design — creative |
| generate-profile | `claude-opus-4-6` | Narrative synthesis — the deliverable |

**Cost:** ~$0.20–0.25 per full assessment.

### Assessment Flow (14 screens)
welcome → name_input → intake → playback → transition1 → tier1 → analyzing_t1 → transition2 → tier2 → analyzing_t2t3 → transition3 → tier3 → complete → analyzing_profile → profile

### Database
- Fresh Supabase project (Postgres only, no edge functions)
- One table: `assessment_completions` (insert-only, anon RLS policy)
- Client uses lazy `getSupabase()` — returns null if env vars not set

---

## The Brochure (`public/brochure.html`)

### Brand & Design System
- **Product name:** The WorkPath Assessment
- **Eyebrow:** Intelligence Applied
- **Fonts:** Playfair Display (headings, serif) + Inter (body, sans-serif)
- **Colors:**
  - Navy: `#0C2D48`
  - Navy mid: `#1A4A6B`
  - Gold: `#C9983A`
  - Light: `#F7F8FA`
  - Muted: `#6B7F8E`
- **Contact button:** always links to `https://rsparkman.net`

### Language Conventions
- "The WorkPath Assessment" — always use full name with "The"
- Dimensions are "Orientation," "Integration," and "Judgment"
- Levels are "Emerging," "Developing," "Demonstrating"
- Avoid "listens for how they think" — use "reveals how they think"
- "differently from" not "differently than"
- "three dimensions" not "three constructs"

---

## The Harness (`harness/`)

See `harness/CLAUDE.md` for full technical detail. Summary:

### Pipeline
T1 scoring (5 baseline Q&A) → T2 scoring (5 contextualized Q&A) → T3 rubric generation → T3 scoring (5 adaptive Q&A) → profile generation → PDF

### Key Commands
```bash
cd /Users/randysparkman/Desktop/workpath

# Full pipeline run (replay mode)
node harness/harness.js \
  --profile <path-to-job-role-profile.md> \
  --responses responses/<respondent>.json \
  --replay

# Regenerate profile only from existing scored JSON (~$0.14 vs ~$0.49)
node harness/regen-profile.js \
  profiles/<existing>.json \
  <path-to-profile-generation-prompt.md> \
  <path-to-job-role-profile.md> \
  responses/<respondent>.json

# Generate PDF from scored JSON
python3 harness/generate_pdf.py profiles/<file>.json
```

### Models
- Default: `claude-sonnet-4-20250514`
- High-fidelity: `claude-opus-4-6` (pass `--model claude-opus-4-6`)

### API Key
Stored in `~/.zshrc` as `ANTHROPIC_API_KEY`. Run `source ~/.zshrc` if not in environment.

### Respondents on File
| File | Person | Role |
|------|--------|------|
| `responses/james-wells-general.json` | James Wells | General |
| `responses/jane-maples-medical.json` | Jane Maples | Medical Billing Specialist |
| `responses/robert-howell-cie499.json` | Robert Howell | CIE499 profile |

### Reference Assets
Job role profiles and profile generation prompts live in a separate folder outside this repo:
`/Users/randysparkman/Desktop/AI-assessment-tool/`
- `job-role-profile-medical-billing.md`
- `profile-generation-prompt-v6.md`

---

## What's Next
- [ ] Set up custom domain (name TBD) in GoDaddy → Vercel
- [ ] Remove old `brochure/` directory from repo root
- [ ] See `BACKLOG.md` for performance optimization and student launch prep
