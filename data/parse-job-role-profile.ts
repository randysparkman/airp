/**
 * Parses a unified job-role-profile .md file into its components:
 * 1. Role context (markdown text before the Tier 1 section)
 * 2. Role metadata (label, identifier, description from front matter)
 * 3. Tier 1 question data (JSON between tier1 markers)
 * 4. Tier 2 question data (JSON between tier2 markers)
 */

export interface ParsedJobRoleProfile {
  roleContext: string;
  roleLabel: string;
  roleIdentifier: string;
  roleDescription: string;
  sponsor: string;
  tier1Data: any;
  tier2Data: any;
}

function parseFrontMatter(raw: string): { roleLabel: string; roleIdentifier: string; roleDescription: string; sponsor: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return { roleLabel: "General", roleIdentifier: "general", roleDescription: "", sponsor: "" };
  const fm = match[1];
  const labelMatch = fm.match(/role_label:\s*"([^"]+)"/);
  const idMatch = fm.match(/role_identifier:\s*"([^"]+)"/);
  const descMatch = fm.match(/role_description:\s*"([^"]+)"/);
  const sponsorMatch = fm.match(/sponsor:\s*"([^"]*)"/);
  return {
    roleLabel: labelMatch ? labelMatch[1] : "General",
    roleIdentifier: idMatch ? idMatch[1] : "general",
    roleDescription: descMatch ? descMatch[1] : "",
    sponsor: sponsorMatch ? sponsorMatch[1] : "",
  };
}

function extractJsonBlock(raw: string, startMarker: string, endMarker: string): any | null {
  const regex = new RegExp(
    `${escapeRegex(startMarker)}\\s*(?:\`\`\`json\\s*([\\s\\S]*?)\\s*\`\`\`)?\\s*${escapeRegex(endMarker)}`
  );
  const match = raw.match(regex);

  if (!match || !match[1]) {
    return null;
  }

  return JSON.parse(match[1]);
}

function normalizeTier1Data(data: any) {
  return {
    questions: Array.isArray(data?.questions) ? data.questions : [],
  };
}

function normalizeTier2Data(data: any) {
  return {
    questions: Array.isArray(data?.questions) ? data.questions : [],
    user_facing: {
      transition_text: data?.user_facing?.transition_text ?? "",
      response_placeholder: data?.user_facing?.response_placeholder ?? "",
      completion_text: data?.user_facing?.completion_text ?? "",
    },
  };
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function parseJobRoleProfile(raw: string): ParsedJobRoleProfile {
  const { roleLabel, roleIdentifier, roleDescription, sponsor } = parseFrontMatter(raw);

  const contextEnd = raw.indexOf("## Tier 1 Questions");
  const roleContext = contextEnd >= 0 ? raw.substring(0, contextEnd).trim() : raw;

  const tier1Data = normalizeTier1Data(
    extractJsonBlock(raw, "<!-- tier1-questions-start -->", "<!-- tier1-questions-end -->")
  );
  const tier2Data = normalizeTier2Data(
    extractJsonBlock(raw, "<!-- tier2-questions-start -->", "<!-- tier2-questions-end -->")
  );

  return { roleContext, roleLabel, roleIdentifier, roleDescription, sponsor, tier1Data, tier2Data };
}
