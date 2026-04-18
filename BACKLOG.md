# WorkPath — Backlog

## Performance & Scaling (pre-launch: 100 students)

- [x] Add retry logic with backoff to API calls (SDK maxRetries bumped from 2 to 4 — covers 429s, 5xx, and connection errors with exponential backoff)
- [ ] Check Anthropic rate limit tier and upgrade if needed for 25 concurrent users
- [x] Raise Vercel function timeout (maxDuration = 60s on all API routes — Hobby default of 10s was blocking Opus profile generation)
- [ ] Monitor Vercel Hobby plan limits — serverless function invocations (still watch GB-hours and 100k invocation cap)
- [ ] Time the Sonnet/Opus split in production and tune time estimates on AnalyzingScreen
- [ ] Consider Vercel Pro if Hobby limits are too tight for student load
- [ ] Purchase Supabase Pro license before student launch (unpauses free-tier project, enables daily backups, removes row/egress caps)

## Content & Profile Quality

- [ ] Tighten profile summary — currently too verbose, needs to be more concise
- [ ] Reduce inferred thinking — profile attributes reasoning to the respondent that wasn't explicitly stated; stay closer to what they actually said
- [ ] Build 3–4 new job-role profiles (TBD which roles)
- [ ] Update `lib/generatePdf.ts` — replace "AI Readiness Profile" references with WorkPath branding
- [ ] Update `lib/prompts/generate-profile-prompt.ts` — align profile generation language with WorkPath brand voice (see `public/brochure.html` as reference)

## Licensing / Assessment Caps

- [ ] Add `assessment_limit` field to job-role profile `.md` files (e.g. `assessment_limit: 250`)
- [ ] On app load, query `assessment_completions` count for the role_profile
- [ ] Compare against limit — if at capacity, show "assessment unavailable" screen instead of welcome
- [ ] Build as a server-side API route (e.g. `/api/check-capacity`) — uses `SUPABASE_SERVICE_ROLE_KEY` (not public) to read count, keeps anon key insert-only
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY` to Vercel env vars (find in Supabase → Settings → API → Service role key)

## Wait Screen UX

- [ ] **Phase 1 — Informational cards on `analyzing_t2t3`:** Show two phases while Tier 3 questions generate: (1) brief explanation that T3 questions are personalized based on their answers, (2) cards describing the three assessment tiers (Orientation, Integration, Judgment). Progress bar underneath runs on a time-based estimate (not wired to actual API progress). Copy must follow brand language conventions in CLAUDE.md.
- [ ] **Phase 2 (future) — Streaming progress:** Convert `generate-tier3/route.ts` to a streaming response and consume it on the client to drive a real progress signal. Defer until performance is otherwise optimized — wiring is non-trivial and the problem may be solved at the infrastructure level first.

## Framework

- [ ] Revisit the AI literacy framework "constitution" — foundational document defining the dimensions, levels, and underlying theory of AI readiness that the assessment is built on

## Save & Resume

- [x] Implement save/resume for in-progress assessments
- [x] New Supabase table `assessment_sessions` — stores serialized state + 6-char resume code
- [x] Auto-save after each question submission (debounced)
- [x] "Save My Progress" button in header after intake — shows resume code + copyable link
- [x] Resume via URL param (`?resume=CODE`) or code entry on welcome screen
- [x] 7-day session expiry
- [ ] **Prune stale `assessment_sessions` rows** — silent partial assessments accumulate as respondents abandon mid-flow. Add a scheduled cleanup (Supabase cron or manual SQL) to delete rows where `updated_at < now() - interval '7 days'`. Not urgent at low volume, but revisit before the student launch scales past a couple hundred rows.

## Backup & Recovery

- [ ] **Vendor config runbook** — single markdown file (gitignored or outside repo) documenting Vercel project settings + env var names, Supabase project ID + key roles + RLS policy, GoDaddy DNS records for `wkpath.com`, API key locations (Apple Passwords, `~/.zshrc`). The "how do I rebuild this deployment from scratch" doc.
- [ ] **Pre-launch: Supabase backup posture** — confirm whether the free tier's automatic backups are sufficient for student data, or set up scheduled exports. Zero urgency now (0 rows); real once students start completing.
- [ ] **Quarterly cold tarball** — `tar czf workpath-cold-YYYYMMDD.tar.gz` of the full repo dropped into Google Drive. Catches anything that somehow didn't make it into Git.
- [ ] **Re-sync memory folder to Drive when it changes meaningfully** — the `~/.claude/projects/.../memory/` folder isn't in Git; re-upload the zipped copy after notable memory updates.

## Structured Output (tool_use)

- [ ] Migrate scoring routes to Claude `tool_use` structured output
- [ ] Priority 1: score-tier1/2/3 — eliminate `parseAIJson` fallback logic
- [ ] Priority 2: score-tier2 `performanceSummary` output (merged from old generate-tier3 step 1) — prevent cascade failures into Tier 3 question generation
- [ ] Priority 3: generate-tier3 (adaptive question generation) — shrink prompt template, enforce nested rubric schema
- [ ] Priority 4 (optional): generate-profile — add schema enforcement, keep prose guidance

