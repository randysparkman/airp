# WorkPath — Backlog

## Performance & Scaling (pre-launch: 100 students)

- [ ] Add retry logic with backoff to API calls — gracefully handle rate limits instead of showing errors
- [ ] Check Anthropic rate limit tier and upgrade if needed for 25 concurrent users
- [ ] Monitor Vercel Hobby plan limits — serverless function invocations and execution time
- [ ] Time the Sonnet/Opus split in production and tune time estimates on AnalyzingScreen
- [ ] Consider Vercel Pro if Hobby limits are too tight for student load

## Cleanup

- [ ] Remove old `brochure/` directory (content now lives at `public/brochure.html`)
