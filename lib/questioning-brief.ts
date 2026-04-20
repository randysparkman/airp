/**
 * Derives a compact "questioning brief" from the full performanceSummary
 * produced by score-tier2.
 *
 * Phase 1 (log-only): this brief is computed on every real run and logged
 * alongside the full performanceSummary so we can eyeball the derivation
 * against real data before Phase 3 makes it the input to generate-tier3.
 *
 * Nothing in the API contract depends on this function yet.
 */

export type ReadinessBand = "emerging" | "developing" | "demonstrating";
export type Confidence = "low" | "medium" | "high";
export type DifficultyTarget = "baseline" | "stretch" | "pressure";

export interface QuestioningBrief {
  placement_estimate: ReadinessBand;
  confidence: Confidence;
  strengths: string[];
  gaps: string[];
  dol_coverage: {
    underweight: string[];
    adequate: string[];
  };
  function_targets: string[];
  difficulty_target: DifficultyTarget;
  adaptive_priorities: string[];
}

const BAND_RANK: Record<ReadinessBand, number> = {
  emerging: 0,
  developing: 1,
  demonstrating: 2,
};

/**
 * Modal band across orientation, integration, judgment.
 * Ties break toward the lower band (conservative — don't over-place).
 */
function modalBand(bands: ReadinessBand[]): ReadinessBand {
  const counts: Record<ReadinessBand, number> = { emerging: 0, developing: 0, demonstrating: 0 };
  for (const b of bands) counts[b]++;
  const max = Math.max(...Object.values(counts));
  const winners = (Object.keys(counts) as ReadinessBand[]).filter((b) => counts[b] === max);
  // Conservative tie-break: pick the lowest-rank band among winners.
  winners.sort((a, b) => BAND_RANK[a] - BAND_RANK[b]);
  return winners[0];
}

/**
 * Explicit rule table for difficulty_target. See the rule table in the
 * commit message accompanying Phase 1 for reasoning on boundary cases.
 */
function deriveDifficultyTarget(
  placement: ReadinessBand,
  confidence: Confidence,
): DifficultyTarget {
  if (placement === "emerging") return "baseline";
  if (placement === "developing") {
    return confidence === "high" ? "pressure" : "stretch";
  }
  // demonstrating
  return confidence === "low" ? "stretch" : "pressure";
}

const DOL_LABEL: Record<string, string> = {
  understand_principles: "#1 Understand AI Principles",
  explore_uses: "#2 Explore AI Uses",
  direct_effectively: "#3 Direct AI Effectively",
  evaluate_outputs: "#4 Evaluate AI Outputs",
  use_responsibly: "#5 Use AI Responsibly",
};

const WEAK_SIGNALS = new Set(["weak_signal", "no_signal"]);
const ADEQUATE_SIGNALS = new Set(["strong_signal", "moderate_signal"]);

function splitDolCoverage(dol: Record<string, string> | undefined): {
  underweight: string[];
  adequate: string[];
} {
  const underweight: string[] = [];
  const adequate: string[] = [];
  if (!dol) return { underweight, adequate };
  for (const [key, val] of Object.entries(dol)) {
    if (key === "coverage_notes" || typeof val !== "string") continue;
    const label = DOL_LABEL[key] ?? key;
    if (WEAK_SIGNALS.has(val)) underweight.push(label);
    else if (ADEQUATE_SIGNALS.has(val)) adequate.push(label);
  }
  return { underweight, adequate };
}

function asArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string");
  return [];
}

export function deriveQuestioningBrief(performanceSummary: any): QuestioningBrief {
  const op = performanceSummary?.overall_placement ?? {};
  const ip = performanceSummary?.integration_profile ?? {};
  const jp = performanceSummary?.judgment_profile ?? {};
  const eg = performanceSummary?.evidence_gaps ?? {};
  const tp = performanceSummary?.tier3_priorities ?? {};

  const orientationBand = (op.orientation_band ?? "developing") as ReadinessBand;
  const integrationBand = (ip.modal_level ?? "developing") as ReadinessBand;
  const judgmentBand = (jp.modal_level ?? "developing") as ReadinessBand;

  const placement = modalBand([orientationBand, integrationBand, judgmentBand]);
  const confidence = (op.orientation_confidence ?? "medium") as Confidence;
  const difficulty = deriveDifficultyTarget(placement, confidence);

  const strengths: string[] = [];
  if (op.orientation_notes) strengths.push(`Orientation: ${op.orientation_notes}`);
  if (ip.integration_notes) strengths.push(`Integration: ${ip.integration_notes}`);
  if (jp.judgment_notes) strengths.push(`Judgment: ${jp.judgment_notes}`);

  const dolSplit = splitDolCoverage(performanceSummary?.dol_coverage);

  const gaps: string[] = [
    ...asArray(eg.untested_conditions),
    ...dolSplit.underweight.map((a) => `Weak DOL signal: ${a}`),
    ...asArray(eg.undemonstrated_functions).map((f) => `Undemonstrated function: ${f}`),
  ];

  return {
    placement_estimate: placement,
    confidence,
    strengths,
    gaps,
    dol_coverage: dolSplit,
    function_targets: asArray(eg.undemonstrated_functions),
    difficulty_target: difficulty,
    adaptive_priorities: asArray(tp.probe_targets),
  };
}
