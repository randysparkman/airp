/** Shared types for the assessment system. */

/** A scenario question as displayed to the user (no rubric). */
export interface ScenarioQuestion {
  id: string;
  sequence: number;
  label: string;
  scenario: string;
  prompt: string;
}

/** Readiness level used throughout scoring. */
export type ReadinessLevel = "emerging" | "developing" | "demonstrating";

/** A rubric dimension with level descriptions. */
export interface RubricDimension {
  emerging: string;
  developing: string;
  demonstrating: string;
}

/** Full rubric attached to a raw question. */
export interface QuestionRubric {
  orientation: RubricDimension;
  integration: RubricDimension;
  judgment: RubricDimension;
}

/** A raw question as parsed from a job-role-profile markdown file. */
export interface RawQuestion {
  id: string;
  sequence: number;
  scenario: string;
  prompt: string;
  rubric: QuestionRubric;
  dol_content_area: string;
  human_function_activated: string;
}

/** Result of scoring a single question across all three constructs. */
export interface ScoredResponse {
  question_id: string;
  orientation_level: ReadinessLevel;
  integration_level: ReadinessLevel;
  judgment_level: ReadinessLevel;
  evidence_notes: string;
}
