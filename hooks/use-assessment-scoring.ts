import { useState } from "react";
import type { ProfileData } from "@/data/mock-profile";
import type { IntakeAnswers } from "@/data/intake-questions";
import tier3SummaryTemplate from "@/data/tier3-summary-template.json";
import tier3QuestionTemplate from "@/data/tier3-question-template.json";
import type { ScenarioQuestion, RawQuestion, ScoredResponse } from "@/data/assessment-types";

export type { ScoredResponse };

type ScoringStep =
  | "idle"
  | "scoring_t1"
  | "scoring_t2"
  | "generating_t3"
  | "waiting_t3"
  | "scoring_t3"
  | "generating_profile"
  | "done"
  | "error";

// Retry transient failures: network drops (TypeError "Failed to fetch") and
// 5xx-class responses. External users on coffee-shop wifi / iPhone hotspots
// see brief drops constantly — without retry, one blip kills the whole flow.
class RetryableError extends Error {}
const RETRY_DELAYS_MS = [1000, 3000];
const RETRYABLE_STATUSES = new Set([408, 502, 503, 504]);

async function callApi(endpoint: string, body: any): Promise<any> {
  const url = `/api/${endpoint}`;
  const init: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  let lastError: unknown;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    try {
      const response = await fetch(url, init);
      const text = await response.text();
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        // Vercel killed the function (timeout/OOM) and returned a non-JSON page.
        // 5xx non-JSON is retryable; anything else surfaces immediately.
        if (response.status >= 500) {
          throw new RetryableError(
            `Request to ${endpoint} failed (${response.status}) — non-JSON response`
          );
        }
        throw new Error(
          `Request to ${endpoint} failed (${response.status}) — the server returned an unexpected response.`
        );
      }

      if (!response.ok) {
        if (RETRYABLE_STATUSES.has(response.status) || response.status >= 500) {
          throw new RetryableError(data?.error || `${endpoint} returned ${response.status}`);
        }
        throw new Error(data?.error || `API call to ${endpoint} failed (${response.status})`);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (err) {
      lastError = err;
      const isNetwork = err instanceof TypeError; // browser "Failed to fetch"
      const isRetryable = isNetwork || err instanceof RetryableError;
      const hasMoreAttempts = attempt < RETRY_DELAYS_MS.length;
      if (isRetryable && hasMoreAttempts) {
        console.warn(
          `Transient failure on ${endpoint} (attempt ${attempt + 1}/${RETRY_DELAYS_MS.length + 1}). Retrying in ${RETRY_DELAYS_MS[attempt]}ms.`,
          err,
        );
        await new Promise((r) => setTimeout(r, RETRY_DELAYS_MS[attempt]));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

export function useAssessmentScoring() {
  const [isScoring, setIsScoring] = useState(false);
  const [scoringStep, setScoringStep] = useState<ScoringStep>("idle");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [t1Scores, setT1Scores] = useState<ScoredResponse[]>([]);
  const [t2Scores, setT2Scores] = useState<ScoredResponse[]>([]);
  const [performanceSummary, setPerformanceSummary] = useState<any>(null);
  const [t3Questions, setT3Questions] = useState<ScenarioQuestion[]>([]);
  const [t3QuestionsRaw, setT3QuestionsRaw] = useState<RawQuestion[]>([]);
  const [t3Scores, setT3Scores] = useState<ScoredResponse[]>([]);

  const scoreTier1 = async (t1Responses: Record<string, string>, tier1QuestionsRaw: RawQuestion[]) => {
    setIsScoring(true);
    setScoringStep("scoring_t1");
    setError(null);

    try {
      const questions = tier1QuestionsRaw.map((q) => ({
        id: q.id,
        scenario: q.scenario,
        prompt: q.prompt,
        rubric: q.rubric,
      }));

      const data = await callApi("score-tier1", { responses: t1Responses, questions });

      setT1Scores(data.scores);
      setScoringStep("idle");
      setIsScoring(false);
      return data;
    } catch (e) {
      console.error("Tier 1 scoring error:", e);
      setError(e instanceof Error ? e.message : "Something went wrong");
      setScoringStep("error");
      setIsScoring(false);
      throw e;
    }
  };

  const scoreTier2 = async (
    t2Responses: Record<string, string>,
    tier2QuestionsRaw: RawQuestion[],
    t1Responses: Record<string, string>,
    tier1QuestionsRaw: RawQuestion[],
    storedT1Scores?: ScoredResponse[]
  ) => {
    setIsScoring(true);
    setScoringStep("scoring_t2");
    setError(null);

    try {
      const questions = tier2QuestionsRaw.map((q) => ({
        id: q.id,
        scenario: q.scenario,
        prompt: q.prompt,
        rubric: q.rubric,
        dol_content_area: q.dol_content_area,
        human_function_activated: q.human_function_activated,
      }));

      const usedT1Scores = storedT1Scores || t1Scores;
      const enrichedT1Scores = usedT1Scores.map((s) => {
        const q = tier1QuestionsRaw.find((q) => q.id === s.question_id);
        return {
          ...s,
          dol_content_area: q?.dol_content_area || "",
          human_function_activated: q?.human_function_activated || "",
        };
      });

      const data = await callApi("score-tier2", {
        responses: t2Responses,
        questions,
        t1Scores: enrichedT1Scores,
        t1Questions: tier1QuestionsRaw,
        t1Responses,
        summaryPromptTemplate: tier3SummaryTemplate.prompt_template,
      });

      setT2Scores(data.scores);
      if (data.performanceSummary) {
        setPerformanceSummary(data.performanceSummary);
      }
      setScoringStep("idle");
      setIsScoring(false);
      return data;
    } catch (e) {
      console.error("Tier 2 scoring error:", e);
      setError(e instanceof Error ? e.message : "Something went wrong");
      setScoringStep("error");
      setIsScoring(false);
      throw e;
    }
  };

  const generateTier3Questions = async (
    orgFluencyRaw: string,
    storedPerformanceSummary?: any
  ) => {
    setIsScoring(true);
    setScoringStep("generating_t3");
    setError(null);

    try {
      const summary = storedPerformanceSummary || performanceSummary;
      if (!summary) {
        throw new Error("Performance summary unavailable — score Tier 2 first");
      }

      // Phase 3: split generation — stems first (serial), then rubrics (parallel)
      const stemsData = await callApi("generate-tier3-stems", {
        performanceSummary: summary,
        orgFluencyContent: orgFluencyRaw,
        stemsPromptTemplate: tier3QuestionTemplate.stems_prompt_template,
      });

      const stems = stemsData.stems as Array<Omit<RawQuestion, "rubric">>;
      if (!Array.isArray(stems) || stems.length === 0) {
        throw new Error("Stem generation returned no questions");
      }

      const rubricResults = await Promise.all(
        stems.map((stem) =>
          callApi("generate-tier3-rubric", {
            stem,
            rubricPromptTemplate: tier3QuestionTemplate.rubric_prompt_template,
          }),
        ),
      );

      const fullQuestions: RawQuestion[] = stems.map((stem, i) => ({
        ...(stem as RawQuestion),
        rubric: rubricResults[i].rubric,
      }));

      const generated: ScenarioQuestion[] = fullQuestions.map((q, i) => ({
        id: q.id,
        sequence: i + 1,
        label: `Scenario ${i + 1} of 5`,
        scenario: q.scenario,
        prompt: q.prompt,
      }));

      setT3Questions(generated);
      setT3QuestionsRaw(fullQuestions);
      setScoringStep("waiting_t3");
      setIsScoring(false);
      return { questions: generated };
    } catch (e) {
      console.error("Tier 3 generation error:", e);
      setError(e instanceof Error ? e.message : "Something went wrong");
      setScoringStep("error");
      setIsScoring(false);
      throw e;
    }
  };

  const scoreTier3AndGenerateProfile = async (
    t1Responses: Record<string, string>,
    t2Responses: Record<string, string>,
    t3Responses: Record<string, string>,
    intakeAnswers: IntakeAnswers,
    orgName: string,
    orgFluencyRaw: string,
    tier1QuestionsRaw: RawQuestion[],
    tier2QuestionsRaw: RawQuestion[],
    respondentName?: string
  ) => {
    setIsScoring(true);
    setError(null);

    try {
      // Skip T3 scoring on retry if it already succeeded — saves ~30s and
      // avoids a duplicate Anthropic charge when only generate-profile failed.
      const t3Ids = Object.keys(t3Responses);
      const alreadyScored =
        t3Scores.length === t3Ids.length &&
        t3Ids.every((qid) => t3Scores.some((s) => s.question_id === qid));

      let resolvedT3Scores: ScoredResponse[];
      if (alreadyScored) {
        resolvedT3Scores = t3Scores;
      } else {
        setScoringStep("scoring_t3");
        const questions = t3QuestionsRaw.map((q) => ({
          id: q.id,
          scenario: q.scenario,
          prompt: q.prompt,
          rubric: q.rubric,
        }));
        const scoreData = await callApi("score-tier3", { responses: t3Responses, questions });
        setT3Scores(scoreData.scores);
        resolvedT3Scores = scoreData.scores;
      }

      setScoringStep("generating_profile");
      const allScores = [...t1Scores, ...t2Scores, ...resolvedT3Scores];

      const enrichedResponses = allScores.map((score: ScoredResponse) => {
        const qid = score.question_id;
        let scenario = "";
        let prompt = "";
        let response = "";
        let tier: 1 | 2 | 3 = 1;
        let dol_content_area = "";
        let human_function_activated = "";

        if (qid.startsWith("t1_")) {
          tier = 1;
          const q = tier1QuestionsRaw.find((q) => q.id === qid);
          scenario = q?.scenario || "";
          prompt = q?.prompt || "";
          response = t1Responses[qid] || "";
          dol_content_area = q?.dol_content_area || "";
          human_function_activated = q?.human_function_activated || "";
        } else if (qid.startsWith("t2_")) {
          tier = 2;
          const q = tier2QuestionsRaw.find((q) => q.id === qid);
          scenario = q?.scenario || "";
          prompt = q?.prompt || "";
          response = t2Responses[qid] || "";
          dol_content_area = q?.dol_content_area || "";
          human_function_activated = q?.human_function_activated || "";
        } else if (qid.startsWith("t3_")) {
          tier = 3;
          const q = t3QuestionsRaw.find((q) => q.id === qid);
          scenario = q?.scenario || "";
          prompt = q?.prompt || "";
          response = t3Responses[qid] || "";
          dol_content_area = q?.dol_content_area || "";
          human_function_activated = q?.human_function_activated || "";
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

      const profileData = await callApi("generate-profile", {
        scored_responses: enrichedResponses,
        respondent_name: respondentName || "Anonymous",
        intake_answers: intakeAnswers,
        org_name: orgName || null,
        org_fluency: orgFluencyRaw || null,
      });

      setProfile(profileData.profile as ProfileData);
      setScoringStep("done");
      setIsScoring(false);
    } catch (e) {
      console.error("Final scoring error:", e);
      setError(e instanceof Error ? e.message : "Something went wrong");
      setScoringStep("error");
      setIsScoring(false);
    }
  };

  return {
    isScoring,
    scoringStep,
    profile,
    error,
    t1Scores,
    t2Scores,
    t3Scores,
    t3Questions,
    t3QuestionsRaw,
    hydrate: (partial: {
      t1Scores?: ScoredResponse[];
      t2Scores?: ScoredResponse[];
      t3Scores?: ScoredResponse[];
      t3Questions?: ScenarioQuestion[];
      t3QuestionsRaw?: RawQuestion[];
    }) => {
      if (partial.t1Scores) setT1Scores(partial.t1Scores);
      if (partial.t2Scores) setT2Scores(partial.t2Scores);
      if (partial.t3Scores) setT3Scores(partial.t3Scores);
      if (partial.t3Questions) setT3Questions(partial.t3Questions);
      if (partial.t3QuestionsRaw) setT3QuestionsRaw(partial.t3QuestionsRaw);
    },
    scoreTier1,
    scoreTier2,
    generateTier3Questions,
    scoreTier3AndGenerateProfile,
  };
}
