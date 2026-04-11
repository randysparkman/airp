export interface IntakeQuestion {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export const intakeQuestions: IntakeQuestion[] = [
  {
    id: "context",
    question: "What brings you here today?",
    options: [
      { label: "My employer asked me to", value: "employer" },
      { label: "My school assigned it", value: "school" },
      { label: "I\u2019m curious about my own readiness", value: "curious" },
      { label: "I\u2019m preparing for a job search", value: "jobsearch" },
    ],
  },
  {
    id: "role",
    question: "What best describes your work or studies right now?",
    options: [
      { label: "Office or professional setting", value: "office" },
      { label: "Healthcare, education, or public service", value: "service" },
      { label: "I\u2019m a student", value: "student" },
      { label: "Something else", value: "other" },
    ],
  },
  {
    id: "exposure",
    question: "How often do you use AI tools in your work or studies?",
    options: [
      { label: "Daily", value: "daily" },
      { label: "A few times a week", value: "weekly" },
      { label: "Occasionally", value: "occasionally" },
      { label: "Rarely or never", value: "rarely" },
    ],
  },
  {
    id: "selfassess",
    question: "When it comes to working with AI tools, how would you describe yourself?",
    options: [
      { label: "I\u2019m still figuring it out", value: "figuring" },
      { label: "I\u2019m comfortable but learning", value: "comfortable" },
      { label: "I feel confident in how I use them", value: "confident" },
      { label: "I\u2019m not sure yet", value: "unsure" },
    ],
  },
  {
    id: "disposition",
    question: "When you encounter a new technology tool at work, what\u2019s your instinct?",
    options: [
      { label: "Jump in and experiment", value: "experiment" },
      { label: "Watch how others use it first", value: "observe" },
      { label: "Learn the basics before trying", value: "learn" },
      { label: "Wait until I have to use it", value: "wait" },
    ],
  },
];

export interface IntakeAnswers {
  context?: string;
  role?: string;
  exposure?: string;
  selfassess?: string;
  disposition?: string;
  [key: string]: string | undefined;
}

const contextLabels: Record<string, string> = {
  employer: "You\u2019re here because your employer asked you to take this assessment",
  school: "You\u2019re here because your school assigned this assessment",
  curious: "You\u2019re here out of curiosity about your own AI readiness",
  jobsearch: "You\u2019re here to prepare for a job search",
};
const roleLabels: Record<string, string> = {
  office: "an office or professional setting",
  service: "healthcare, education, or public service",
  student: "a student environment",
  other: "a setting you\u2019d describe as nontraditional",
};
const exposureLabels: Record<string, string> = {
  daily: "use AI tools daily",
  weekly: "use AI tools a few times a week",
  occasionally: "use AI tools occasionally",
  rarely: "rarely or never use AI tools right now",
};
const selfLabels: Record<string, string> = {
  figuring: "still figuring out your relationship with AI tools",
  comfortable: "comfortable but still learning",
  confident: "confident in how you use AI tools",
  unsure: "not sure yet where you stand",
};
const dispositionLabels: Record<string, string> = {
  experiment: "your instinct is to jump in and experiment",
  observe: "you prefer to watch how others use it first",
  learn: "you like to learn the basics before diving in",
  wait: "you tend to wait until you need to use something",
};

export function buildPlayback(a: IntakeAnswers): string {
  return `${contextLabels[a.context || ""]  || ""}. You\u2019re coming from ${roleLabels[a.role || ""] || ""}, and you ${exposureLabels[a.exposure || ""] || ""}. You\u2019d say you\u2019re ${selfLabels[a.selfassess || ""] || ""}, and when new tools show up, ${dispositionLabels[a.disposition || ""] || ""}.`;
}
