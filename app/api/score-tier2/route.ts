import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { parseAIJson } from "@/lib/parse-ai-json";
import { logApiTiming } from "@/lib/api-timing";
import { deriveQuestioningBrief } from "@/lib/questioning-brief";

export const maxDuration = 120;

// Fewer retries so backoff doesn't compound the timeout.
const anthropic = new Anthropic({ maxRetries: 1 });

const SCORE_ONLY_SYSTEM = `You are scoring 5 responses to an AI-readiness assessment. For each question assign orientation_level, integration_level, and judgment_level (each one of emerging/developing/demonstrating) and 2-3 sentences of evidence_notes. Be calibrated. Most people fall in the "developing" range. "Demonstrating" requires specific, nuanced reasoning — not just mentioning the right concepts. "Emerging" means genuine lack of awareness, not just brevity. Return JSON: {"scores": [5 objects with question_id, orientation_level, integration_level, judgment_level, evidence_notes]}.`;

function buildQuestionsBlock(questions: any[], responses: Record<string, string>): string {
  return questions.map((q: any, i: number) => {
    const userResponse = responses[q.id] || "(no response)";
    return `
--- Question ${i + 1} (${q.id}) ---
Scenario: ${q.scenario}
Prompt: ${q.prompt}
User's response: "${userResponse}"

Rubric:
Orientation:
  - Emerging: ${q.rubric.orientation.emerging}
  - Developing: ${q.rubric.orientation.developing}
  - Demonstrating: ${q.rubric.orientation.demonstrating}
Integration:
  - Emerging: ${q.rubric.integration.emerging}
  - Developing: ${q.rubric.integration.developing}
  - Demonstrating: ${q.rubric.integration.demonstrating}
Judgment:
  - Emerging: ${q.rubric.judgment.emerging}
  - Developing: ${q.rubric.judgment.developing}
  - Demonstrating: ${q.rubric.judgment.demonstrating}
`;
  }).join("\n");
}

type ConstructKey = "orientation" | "integration" | "judgment";
type Level = "emerging" | "developing" | "demonstrating";

interface ConstructCounts {
  t1: Record<Level, number>;
  t2: Record<Level, number>;
  combined: Record<Level, number>;
  modal: Level;
  t1_question_levels: Array<{ question_id: string; level: Level }>;
  t2_question_levels: Array<{ question_id: string; level: Level }>;
}

function zeroCounts(): Record<Level, number> {
  return { emerging: 0, developing: 0, demonstrating: 0 };
}

function tallyConstruct(
  key: ConstructKey,
  t1Scores: any[],
  t2Scores: any[],
): ConstructCounts {
  const field = `${key}_level` as const;
  const t1 = zeroCounts();
  const t2 = zeroCounts();
  const t1_question_levels: Array<{ question_id: string; level: Level }> = [];
  const t2_question_levels: Array<{ question_id: string; level: Level }> = [];

  for (const s of t1Scores) {
    const lvl = (s?.[field] as Level) || "developing";
    if (lvl in t1) t1[lvl] += 1;
    t1_question_levels.push({ question_id: s?.question_id || "unknown", level: lvl });
  }
  for (const s of t2Scores) {
    const lvl = (s?.[field] as Level) || "developing";
    if (lvl in t2) t2[lvl] += 1;
    t2_question_levels.push({ question_id: s?.question_id || "unknown", level: lvl });
  }

  const combined: Record<Level, number> = {
    emerging: t1.emerging + t2.emerging,
    developing: t1.developing + t2.developing,
    demonstrating: t1.demonstrating + t2.demonstrating,
  };

  const modal = (["demonstrating", "developing", "emerging"] as Level[]).reduce(
    (best, cur) => (combined[cur] > combined[best] ? cur : best),
    "developing" as Level,
  );

  return { t1, t2, combined, modal, t1_question_levels, t2_question_levels };
}

function formatCountLine(c: ConstructCounts, label: string): string {
  const q = (arr: { question_id: string; level: Level }[], lvl: Level) =>
    arr.filter((x) => x.level === lvl).map((x) => x.question_id).join(", ") || "none";
  return (
    `${label}:\n` +
    `  Combined (10 responses): ${c.combined.demonstrating} demonstrating, ${c.combined.developing} developing, ${c.combined.emerging} emerging (modal: ${c.modal})\n` +
    `  Tier 1 (5): ${c.t1.demonstrating} dem / ${c.t1.developing} dev / ${c.t1.emerging} emerg — ` +
    `dem=[${q(c.t1_question_levels, "demonstrating")}], dev=[${q(c.t1_question_levels, "developing")}], emerg=[${q(c.t1_question_levels, "emerging")}]\n` +
    `  Tier 2 (5): ${c.t2.demonstrating} dem / ${c.t2.developing} dev / ${c.t2.emerging} emerg — ` +
    `dem=[${q(c.t2_question_levels, "demonstrating")}], dev=[${q(c.t2_question_levels, "developing")}], emerg=[${q(c.t2_question_levels, "emerging")}]`
  );
}

function buildPrecomputedFactsBlock(
  orientation: ConstructCounts,
  integration: ConstructCounts,
  judgment: ConstructCounts,
): string {
  return (
    `=== PRE-COMPUTED SCORE TALLIES (AUTHORITATIVE) ===\n` +
    `These counts were computed deterministically in code from the scored_responses array. ` +
    `When your performance summary narrative references tallies, proportions, or "N of 10" counts on any construct, ` +
    `you MUST use these numbers exactly. Do not recalculate. Do not restate them differently. ` +
    `Do not invent counts the data doesn't support. If your narrative contradicts these counts, rewrite the narrative — the counts are ground truth.\n\n` +
    formatCountLine(orientation, "ORIENTATION") +
    `\n\n` +
    formatCountLine(integration, "INTEGRATION") +
    `\n\n` +
    formatCountLine(judgment, "JUDGMENT") +
    `\n`
  );
}

function makeAbortController(timeoutMs: number = 110_000) {
  const abort = new AbortController();
  const timeoutId = setTimeout(() => abort.abort(), timeoutMs);
  return { signal: abort.signal, clear: () => clearTimeout(timeoutId) };
}

function isAbortError(e: any): boolean {
  return (
    e?.name === "AbortError" ||
    e?.code === "ERR_CANCELED" ||
    e?.message?.includes("aborted") ||
    e?.message?.includes("timed out")
  );
}

async function scoreTier2Only(questionsBlock: string, signal: AbortSignal) {
  return anthropic.messages.create(
    {
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: [
        {
          type: "text",
          text: SCORE_ONLY_SYSTEM,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: questionsBlock }],
    },
    { signal },
  );
}

export async function POST(request: Request) {
  const startedAt = Date.now();
  try {
    const {
      responses,
      questions,
      t1Scores,
      t1Questions,
      t1Responses,
      summaryPromptTemplate,
    } = await request.json();

    if (!responses || !questions || questions.length === 0) {
      return NextResponse.json({ error: "Missing responses or questions" }, { status: 400 });
    }

    const canSummarize =
      Array.isArray(t1Scores) &&
      Array.isArray(t1Questions) &&
      t1Responses &&
      typeof summaryPromptTemplate === "string" &&
      summaryPromptTemplate.length > 0;

    const questionsBlock = buildQuestionsBlock(questions, responses);

    // ====== Call 1: Score Tier 2 (always) ======
    const t2Abort = makeAbortController(60_000);
    const tScore = Date.now();
    let scoreMessage: Awaited<ReturnType<typeof anthropic.messages.create>>;
    try {
      scoreMessage = await scoreTier2Only(questionsBlock, t2Abort.signal);
    } finally {
      t2Abort.clear();
    }
    const scoreElapsedMs = Date.now() - tScore;
    const scoreText = scoreMessage.content.find((c) => c.type === "text");
    if (!scoreText || scoreText.type !== "text") {
      throw new Error("No text content in Tier 2 scoring response");
    }
    const scoreParsed = parseAIJson(scoreText.text);
    const scores = scoreParsed.scores || scoreParsed;

    // If we lack the inputs to summarize, return scores only.
    if (!canSummarize) {
      logApiTiming({
        route: "score-tier2",
        startedAt,
        modelElapsedMs: scoreElapsedMs,
        usage: scoreMessage.usage,
        extra: { mode: "score_only" },
      });
      return NextResponse.json({ scores });
    }

    // ====== Deterministic tally (between the two calls) ======
    const orientation = tallyConstruct("orientation", t1Scores, scores);
    const integration = tallyConstruct("integration", t1Scores, scores);
    const judgment = tallyConstruct("judgment", t1Scores, scores);
    const precomputedFactsBlock = buildPrecomputedFactsBlock(orientation, integration, judgment);
    console.log(
      "[counts] route=score-tier2 " +
        JSON.stringify({
          orientation: orientation.combined,
          integration: integration.combined,
          judgment: judgment.combined,
        }),
    );

    // Build T1 context enriched the way the summary expects.
    const t1Context = t1Scores.map((s: any, i: number) => ({
      ...s,
      tier: 1,
      question_angle: t1Questions[i]?.angle || "unknown",
      dol_content_area: s.dol_content_area || t1Questions[i]?.dol_content_area || "",
      human_function_activated: s.human_function_activated || t1Questions[i]?.human_function_activated || "",
      scenario: t1Questions[i]?.scenario?.substring(0, 100) || "",
      user_response: t1Responses[t1Questions[i]?.id] || "",
    }));

    // Build T2 context merging the Tier 2 scores we just produced.
    const t2Context = questions.map((q: any, i: number) => {
      const s = scores[i] || {};
      return {
        ...s,
        question_id: q.id,
        tier: 2,
        question_angle: q.angle || "unknown",
        dol_content_area: q.dol_content_area || "",
        human_function_activated: q.human_function_activated || "",
        scenario: q.scenario?.substring(0, 100) || "",
        user_response: responses[q.id] || "",
      };
    });

    // ====== Call 2: Performance Summary (counts injected) ======
    const summarySystem =
      `You are an AI-readiness assessment engine generating a performance summary across 10 scored responses (5 Tier 1 + 5 Tier 2).\n\n` +
      `=== SUMMARY INSTRUCTIONS ===\n` +
      summaryPromptTemplate +
      `\n\nReturn a single JSON object matching the schema above.`;

    const summaryUser =
      precomputedFactsBlock +
      `\n\n=== TIER 1 SCORED RESPONSES ===\n${JSON.stringify(t1Context, null, 2)}\n\n` +
      `=== TIER 2 SCORED RESPONSES ===\n${JSON.stringify(t2Context, null, 2)}`;

    const sumAbort = makeAbortController(110_000);
    const tSum = Date.now();
    let summaryMessage: Awaited<ReturnType<typeof anthropic.messages.create>>;
    try {
      summaryMessage = await anthropic.messages.create(
        {
          model: "claude-sonnet-4-6",
          max_tokens: 4096,
          system: [
            {
              type: "text",
              text: summarySystem,
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: [{ role: "user", content: summaryUser }],
        },
        { signal: sumAbort.signal },
      );
    } finally {
      sumAbort.clear();
    }
    const summaryElapsedMs = Date.now() - tSum;

    const summaryText = summaryMessage.content.find((c) => c.type === "text");
    if (!summaryText || summaryText.type !== "text") {
      throw new Error("No text content in summary response");
    }
    const summaryParsed = parseAIJson(summaryText.text);
    const performanceSummary = summaryParsed.performanceSummary || summaryParsed;

    if (!scores || !performanceSummary) {
      throw new Error("Combined scoring response missing scores or performanceSummary");
    }

    logApiTiming({
      route: "score-tier2",
      startedAt,
      modelElapsedMs: scoreElapsedMs + summaryElapsedMs,
      usage: {
        input_tokens: (scoreMessage.usage?.input_tokens || 0) + (summaryMessage.usage?.input_tokens || 0),
        output_tokens: (scoreMessage.usage?.output_tokens || 0) + (summaryMessage.usage?.output_tokens || 0),
        cache_read_input_tokens:
          (scoreMessage.usage?.cache_read_input_tokens || 0) + (summaryMessage.usage?.cache_read_input_tokens || 0),
        cache_creation_input_tokens:
          (scoreMessage.usage?.cache_creation_input_tokens || 0) + (summaryMessage.usage?.cache_creation_input_tokens || 0),
      } as any,
      extra: { mode: "score_plus_summary_split", score_ms: scoreElapsedMs, summary_ms: summaryElapsedMs },
    });

    // Phase 1 (log-only): derive questioning_brief from performanceSummary
    // and log it alongside the source so we can eyeball the derivation
    // against real runs. Not yet returned in the API response.
    try {
      const brief = deriveQuestioningBrief(performanceSummary);
      console.log("[brief-draft] route=score-tier2 brief=" + JSON.stringify(brief));
      console.log("[brief-source] route=score-tier2 summary=" + JSON.stringify(performanceSummary));
    } catch (logErr) {
      console.log("[brief-draft] route=score-tier2 error=" + (logErr as Error).message);
    }

    return NextResponse.json({ scores, performanceSummary });
  } catch (e: any) {
    console.error("score-tier2 error:", e);
    if (isAbortError(e)) {
      return NextResponse.json(
        { error: "Scoring timed out. Please try again." },
        { status: 504 },
      );
    }
    if (e?.status === 429) {
      return NextResponse.json({ error: "Rate limit exceeded. Please try again in a moment." }, { status: 429 });
    }
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 });
  }
}
