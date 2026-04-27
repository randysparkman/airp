#!/usr/bin/env node
// One-off: list assessment_sessions updated in the last 24h whose state is on
// `analyzing_profile` (or any non-terminal screen with all three response sets
// populated). Read-only.
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i), l.slice(i + 1)];
    }),
);

const url = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Missing Supabase env vars");
  process.exit(1);
}

const sb = createClient(url, key);
const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();

const { data, error } = await sb
  .from("assessment_sessions")
  .select("resume_code, role_profile, updated_at, state")
  .gte("updated_at", since)
  .order("updated_at", { ascending: false });

if (error) {
  console.error("Query failed:", error);
  process.exit(1);
}

console.log(`Found ${data.length} session rows updated in last 24h\n`);
for (const row of data) {
  const s = row.state || {};
  const t1n = Object.keys(s.t1Responses || {}).length;
  const t2n = Object.keys(s.t2Responses || {}).length;
  const t3n = Object.keys(s.t3Responses || {}).length;
  const t3scoresN = (s.t3Scores || []).length;
  const flagStuck = s.screen === "analyzing_profile" || (t3n > 0 && t3scoresN > 0);
  console.log(
    [
      flagStuck ? "★" : " ",
      row.updated_at,
      row.resume_code,
      `role=${row.role_profile || "-"}`,
      `screen=${s.screen || "-"}`,
      `name="${s.userName || ""}"`,
      `t1=${t1n} t2=${t2n} t3=${t3n} t3scored=${t3scoresN}`,
    ].join("  "),
  );
}
