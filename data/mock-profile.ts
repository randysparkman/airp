export interface ProfileData {
  band: "Emerging" | "Developing" | "Demonstrating";
  summary: string;
  dimensions: {
    orientation: { level: string; detail: string };
    integration: { level: string; detail: string };
    judgment: { level: string; detail: string };
  };
  doing_well: string[];
  next_capabilities: string[];
  primary_next_step: string;
  organizational_opportunities: string[];
}

export const mockProfile: ProfileData = {
  band: "Developing",
  summary: "The responses suggest a functional but inconsistent working model for AI in workplace settings. The respondent recognizes that AI output requires review and describes verification steps in most scenarios — this is a meaningful foundation. The reasoning is stronger when evaluating AI output than when directing AI to produce it, and the respondent has not yet started identifying workflow-level opportunities for AI. Several responses point to gaps that organizational process — not individual training — would address.",
  dimensions: {
    orientation: {
      level: "Developing",
      detail: "The respondent shows a functional understanding of AI limitations but applies this knowledge unevenly. They appropriately identify the need to remove fabricated information and take colleague feedback seriously when AI research proves inaccurate, demonstrating awareness that AI output requires verification. However, their reasoning tends to be general rather than systematic — they mention being 'careful' or doing 'additional interrogation' without describing specific verification approaches.",
    },
    integration: {
      level: "Developing",
      detail: "The respondent demonstrates basic integration thinking by considering audience needs when prompting AI, checking for data restrictions before uploading sensitive information, and suggesting pilot approaches for automation. However, their integration strategies remain largely conceptual — describing tasks in 'natural language' to AI or simply asking for 'advice' rather than outlining concrete implementation steps.",
    },
    judgment: {
      level: "Demonstrating",
      detail: "The respondent consistently demonstrates strong judgment across scenarios, adjusting their approach based on stakes and context. They clearly distinguish between subjective brainstorming tasks and sensitive performance reviews, prioritize data security over deadline pressure, and maintain appropriate caution about adopting new tools without evaluation.",
    },
  },
  doing_well: [
    "Recognizes AI-generated output as a starting point rather than a finished product, and describes what they would check before using it",
    "Describes specific verification steps rather than just noting that review is important",
    "Distinguishes between tasks where AI adds value safely and tasks where AI introduces risk",
    "Escalates appropriately when decisions exceed role authority or expertise",
  ],
  next_capabilities: [
    "You evaluate AI output carefully — the next step is directing AI more deliberately so the output needs less correction. Providing context, constraints, and examples up front would improve first-draft quality.",
    "You handle AI-assisted tasks well individually — the next opportunity is identifying which of those tasks could become repeatable processes, saving time every week rather than once.",
    "When reviewing AI-suggested outputs, describe the specific checks you perform rather than general review — this builds a method you can rely on under time pressure.",
  ],
  primary_next_step: "Start treating AI as a thinking partner, not just a checker — when facing a decision, ask AI to generate three alternative approaches before committing to your first instinct.",
  organizational_opportunities: [
    "Consider defining a verification protocol for AI-assisted outputs that staff can follow consistently",
  ],
};
