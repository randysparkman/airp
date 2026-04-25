import jsPDF from "jspdf";
import type { ProfileData } from "@/data/mock-profile";

export interface AssessmentResponse {
  tier: 1 | 2 | 3;
  questionIndex: number;
  scenario: string;
  prompt: string;
  response: string;
}

// ── Color helpers ──

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

// ── Brand colors ──

const NAVY = hexToRgb("#14213d");
const BADGE_NAVY = hexToRgb("#0C2D48");
const GREEN = hexToRgb("#1b4332");
const GOLD = hexToRgb("#c9a227");
const TEXT_MAIN: [number, number, number] = [42, 42, 42];
const TEXT_MUTED: [number, number, number] = [130, 130, 130];
const TEXT_LIGHT: [number, number, number] = [107, 107, 107];
const DIVIDER: [number, number, number] = [210, 205, 198];
const BORDER: [number, number, number] = [224, 221, 214];
const BG_WARM: [number, number, number] = [250, 249, 246];
const INACTIVE_GRAY: [number, number, number] = [192, 189, 182];
const LEGEND_GRAY: [number, number, number] = [168, 164, 160];

const BAND_COLORS: Record<string, [number, number, number]> = {
  Emerging: hexToRgb("#4a5568"),
  Developing: GOLD,
  Demonstrating: GREEN,
};

const CONSTRUCT_COLORS: Record<string, [number, number, number]> = {
  Orientation: NAVY,
  Integration: GREEN,
  Judgment: GOLD,
};

const TIER_COLORS: Record<number, [number, number, number]> = {
  1: NAVY,
  2: GREEN,
  3: GOLD,
};

const TIER_LABELS: Record<number, string> = {
  1: "TIER 1 — BASELINE",
  2: "TIER 2 — CONTEXTUALIZED",
  3: "TIER 3 — ADAPTIVE",
};

// ── Page constants ──

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 22;
const MARGIN_TOP = 22;
const MARGIN_BOTTOM = 25;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
const META_LABEL_X = MARGIN_X;
const META_VALUE_X = MARGIN_X + 38;

// ── Helpers ──

function buildFilename(userName: string): string {
  const trimmed = userName.trim();
  if (!trimmed) return "ai-readiness-profile.pdf";
  const slug = trimmed.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return `ai-readiness-profile-${slug}.pdf`;
}

// ── Main export ──

export async function downloadProfilePdf(
  profile: ProfileData,
  userName = "",
  orgName = "",
  assessmentResponses: AssessmentResponse[] = [],
  roleLabel = "",
  sponsor = "",
  roleDescription = ""
) {
  // Pre-load badge image
  let badgeDataUrl: string | null = null;
  try {
    const res = await fetch("/workpath_verified_badge.png");
    const blob = await res.blob();
    badgeDataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {}

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = MARGIN_TOP;

  function checkSpace(needed: number) {
    if (y + needed > PAGE_H - MARGIN_BOTTOM) {
      doc.addPage();
      y = MARGIN_TOP;
    }
  }

  // ── Footer ──
  function drawFooter() {
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setDrawColor(...DIVIDER);
      doc.setLineWidth(0.5);
      doc.line(MARGIN_X, PAGE_H - 18, PAGE_W - MARGIN_X, PAGE_H - 18);
      doc.setFontSize(7.5);
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "normal");
      doc.text(`WorkPath Profile · Confidential · ${i}`, MARGIN_X, PAGE_H - 13);
      doc.text("wkpath.com", PAGE_W - MARGIN_X, PAGE_H - 13, { align: "right" });
    }
  }

  // ── Running header ──
  // Drawn as a post-pass on pages 2+ and appendix pages 2+.
  // Page 1 and appendix page 1 carry the full header block instead.
  function drawRunningHeader(skipPages: Set<number>) {
    const pageCount = doc.getNumberOfPages();
    const firstName = userName.trim().split(/\s+/)[0];
    const title = firstName ? `${firstName}'s WorkPath Profile` : "WorkPath Profile";
    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    for (let i = 1; i <= pageCount; i++) {
      if (skipPages.has(i)) continue;
      doc.setPage(i);

      doc.setFontSize(8);
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "normal");
      doc.text(title, MARGIN_X, 12);
      doc.text(dateStr, PAGE_W - MARGIN_X, 12, { align: "right" });

      doc.setDrawColor(...DIVIDER);
      doc.setLineWidth(0.3);
      doc.line(MARGIN_X, 16, PAGE_W - MARGIN_X, 16);
    }
  }

  // ── Verification badge ──
  function drawVerificationBadge(bx: number, by: number, bw: number) {
    const CAP_H = 1.8;
    const PAD_X = 4.5;
    const PAD_TOP = 3.0;

    const TITLE_SIZE = 7.5;
    const BODY_SIZE = 8.5;
    const META_SIZE = 7.5;

    const TITLE_TO_BODY_GAP = 2.0;
    const LINE_H = 4.5;
    const BEFORE_DIVIDER_GAP = 2.5;
    const AFTER_DIVIDER_GAP = 2.0;
    const BOTTOM_PAD = 2.5;

    const BODY_LINES = [
      "Structured Scenario Assessment",
      "Role-Specific Rubric",
      "15 Scored Scenarios",
    ];

    const TOTAL_H =
      CAP_H +
      PAD_TOP +
      3 +
      TITLE_TO_BODY_GAP +
      BODY_LINES.length * LINE_H +
      BEFORE_DIVIDER_GAP +
      0.3 +
      AFTER_DIVIDER_GAP +
      3 +
      BOTTOM_PAD;

    doc.setFillColor(...BG_WARM);
    doc.setDrawColor(217, 212, 204);
    doc.setLineWidth(0.4);
    doc.rect(bx, by, bw, TOTAL_H, "FD");

    doc.setFillColor(...BADGE_NAVY);
    doc.rect(bx, by, bw, CAP_H, "F");

    let ly = by + CAP_H + PAD_TOP + 3;
    doc.setFontSize(TITLE_SIZE);
    doc.setTextColor(...BADGE_NAVY);
    doc.setFont("helvetica", "bold");
    doc.text("WORKPATH VERIFIED", bx + PAD_X, ly);
    ly += TITLE_TO_BODY_GAP;

    doc.setFontSize(BODY_SIZE);
    doc.setTextColor(...TEXT_MAIN);
    doc.setFont("helvetica", "normal");
    for (const line of BODY_LINES) {
      doc.text(line, bx + PAD_X, ly);
      ly += LINE_H;
    }

    ly += BEFORE_DIVIDER_GAP;
    doc.setDrawColor(217, 212, 204);
    doc.setLineWidth(0.3);
    doc.line(bx + PAD_X, ly, bx + bw - PAD_X, ly);
    ly += AFTER_DIVIDER_GAP;

    doc.setFontSize(META_SIZE);
    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    doc.text("Assessment v1.4", bx + PAD_X, ly);
  }

  // ── Header block (reusable for appendix) ──
  function drawHeaderBlock(showBadge = false) {
    const BADGE_W = 54;
    const BADGE_X = PAGE_W - MARGIN_X - BADGE_W;
    const headerTopY = y;

    // Title
    doc.setFontSize(18);
    doc.setTextColor(...TEXT_MAIN);
    doc.setFont("times", "bold");
    const firstName = userName.trim().split(/\s+/)[0];
    const profileTitle = firstName ? `${firstName}'s WorkPath Profile` : "WorkPath Profile";
    doc.text(profileTitle, MARGIN_X, y);
    y += 7;

    // Subtitle
    doc.setFontSize(9);
    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    doc.text("Structured scenario assessment with evidence-based placement", MARGIN_X, y);
    y += 5;

    // Role label and sponsor lines.
    // Render role_label whenever present; sponsor renders below when also present.
    // Both lines remain optional — when absent, the section collapses cleanly.
    const hasRoleLabel = !!(roleLabel && roleLabel.trim());
    const hasSponsor = !!(sponsor && sponsor.trim());
    if (hasRoleLabel || hasSponsor) {
      y += 3;
      doc.setFontSize(11);
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "normal");
      if (hasRoleLabel) {
        doc.text(roleLabel.trim(), MARGIN_X, y);
        y += 5.5;
      }
      if (hasSponsor) {
        doc.text(`Sponsored by ${sponsor.trim()}`, MARGIN_X, y);
        y += 5;
      }
      y += 4;
    } else {
      y += 3;
    }

    // Gold accent divider — stops short of badge area
    const goldRuleY = y;
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(2);
    doc.line(MARGIN_X, y, showBadge ? BADGE_X - 4 : PAGE_W - MARGIN_X, y);
    y += 8;

    if (showBadge && badgeDataUrl) {
      const badgeH = BADGE_W / 1.450;
      doc.addImage(badgeDataUrl, "PNG", BADGE_X, goldRuleY - 5, BADGE_W, badgeH);
    }

    // Metadata rows
    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (userName.trim()) {
      drawMetaRow("Prepared for", userName.trim());
    }
    drawMetaRow("Date completed", dateStr);

    // Placement scale
    drawPlacementRow(profile.band);

    // Placement note
    doc.setFontSize(7.5);
    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    const noteLines = doc.splitTextToSize(
      "Placement reflects demonstrated performance across scored scenarios, not self-report.",
      showBadge ? BADGE_X - MARGIN_X - 6 : CONTENT_W
    );
    doc.text(noteLines, MARGIN_X, y);
    y += noteLines.length * 3.8 + 6;

    // Role description paragraph (only when present)
    if (roleDescription && roleDescription.trim()) {
      // Label
      doc.setFontSize(7.5);
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "bold");
      doc.setCharSpace(0.6);
      doc.text("ABOUT THIS PROFILE", MARGIN_X, y);
      doc.setCharSpace(0);
      y += 5;

      // Paragraph
      doc.setFontSize(10);
      doc.setTextColor(...TEXT_MUTED);
      doc.setFont("helvetica", "normal");
      const descLines = doc.splitTextToSize(roleDescription.trim(), CONTENT_W);
      doc.text(descLines, MARGIN_X, y, { lineHeightFactor: 1.45 });
      y += descLines.length * 5 + 9;
    }

    // Thin divider visually centered between About This Profile (above) and the Summary
    // heading (below). The asymmetric code values compensate for the heading's cap height.
    doc.setDrawColor(...DIVIDER);
    doc.setLineWidth(0.5);
    doc.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
    y += 11;
  }

  function drawMetaRow(label: string, value: string) {
    doc.setFontSize(9);
    doc.setTextColor(...TEXT_MUTED);
    doc.setFont("helvetica", "normal");
    doc.text(label, META_LABEL_X, y);

    doc.setFontSize(9);
    doc.setTextColor(...TEXT_MAIN);
    doc.setFont("helvetica", "bold");
    doc.text(value, META_VALUE_X, y);
    y += 6;
  }

  function drawPlacementRow(activeBand: string) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");

    // Band scale only — no "Placement" label (the badge above and the explanatory line
    // below already establish what this row represents).
    const bands = ["Emerging", "Developing", "Demonstrating"];
    let xPos = MARGIN_X;

    for (let i = 0; i < bands.length; i++) {
      const b = bands[i];
      const isActive = b === activeBand;

      if (i > 0) {
        doc.setTextColor(...DIVIDER);
        doc.setFont("helvetica", "normal");
        doc.text("  ·  ", xPos, y);
        xPos += doc.getTextWidth("  ·  ");
      }

      const color = isActive ? (BAND_COLORS[b] || TEXT_MAIN) : INACTIVE_GRAY;
      doc.setTextColor(...color);
      doc.setFont("helvetica", isActive ? "bold" : "normal");
      doc.text(b, xPos, y);
      xPos += doc.getTextWidth(b);
    }
    y += 6;
  }

  // ── Section heading ──
  function drawSectionHeading(title: string, color: [number, number, number] = TEXT_MAIN, spaceBefore = 7) {
    checkSpace(14);
    y += spaceBefore;
    doc.setFontSize(13);
    doc.setTextColor(...color);
    doc.setFont("times", "bold");
    doc.text(title, MARGIN_X, y);
    y += 7;
  }

  // ── Bullet list ──
  function drawBulletList(items: string[], dotColor: [number, number, number]) {
    for (const item of items) {
      const lines = doc.splitTextToSize(item, CONTENT_W - 10);
      checkSpace(lines.length * 5 + 4);

      doc.setFillColor(...dotColor);
      doc.circle(MARGIN_X + 3, y + 1.0, 1, "F");

      doc.setFontSize(10);
      doc.setTextColor(...TEXT_MAIN);
      doc.setFont("helvetica", "normal");
      doc.text(lines, MARGIN_X + 8, y + 1.8, { lineHeightFactor: 1.45 });

      y += lines.length * 5 + 3;
    }
    y += 4;
  }

  // ── Bold-lead list (Doing Well, Next Capabilities) ──
  // Splits each item on the first sentence boundary (period followed by whitespace + capital).
  // Renders the lead sentence at 10pt bold; the remaining body (if any) at 10pt regular.
  // No bullets, no dots — the bold weight is the marker.
  function drawBoldLeadList(items: string[]) {
    for (const item of items) {
      const trimmed = item.trim();
      const splitIdx = trimmed.search(/\.\s+(?=[A-Z])/);
      let lead: string;
      let body: string;
      if (splitIdx > 0) {
        lead = trimmed.slice(0, splitIdx + 1);
        body = trimmed.slice(splitIdx + 1).trim();
      } else {
        lead = trimmed;
        body = "";
      }

      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      const leadLines = doc.splitTextToSize(lead, CONTENT_W);
      const leadH = leadLines.length * 5;

      doc.setFont("helvetica", "normal");
      const bodyLines = body ? doc.splitTextToSize(body, CONTENT_W) : [];
      const bodyH = bodyLines.length * 5;

      const itemH = leadH + (body ? 2 + bodyH : 0);
      checkSpace(itemH + 4);

      doc.setTextColor(...TEXT_MAIN);
      doc.setFont("helvetica", "bold");
      doc.text(leadLines, MARGIN_X, y, { lineHeightFactor: 1.45 });
      y += leadH;

      if (body) {
        y += 2;
        doc.setFont("helvetica", "normal");
        doc.text(bodyLines, MARGIN_X, y, { lineHeightFactor: 1.45 });
        y += bodyH;
      }

      // 10pt gap between bold-lead items (was 14pt-equivalent in mm)
      y += 4;
    }
  }

  // ── Construct block (no card frame) ──
  // Reference-typography treatment for the Readiness Dimensions section.
  // The thin colored left bar + bold name + inline placement badge already do all the
  // visual differentiation — the old card frame was redundant scaffolding.
  function drawConstructCard(name: string, level: string, detail: string) {
    const accentColor = CONSTRUCT_COLORS[name] || NAVY;
    const badgeColor = BAND_COLORS[level] || TEXT_MUTED;

    // Pre-measure body
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    const detailLines = doc.splitTextToSize(detail, CONTENT_W - 6);
    const detailH = detailLines.length * 4.2;

    // Block height: name row + small gap + body + minor bottom margin
    const blockH = detailH + 9;
    checkSpace(blockH + 4);

    // Thin colored left bar — full block height
    doc.setFillColor(...accentColor);
    doc.rect(MARGIN_X, y, 1.2, blockH, "F");

    // Name (11pt serif uppercase) on the same line as the placement badge
    const textX = MARGIN_X + 6;
    const nameBaseline = y + 5;
    doc.setFontSize(11);
    doc.setTextColor(...TEXT_MAIN);
    doc.setFont("times", "bold");
    doc.text(name.toUpperCase(), textX, nameBaseline);

    // Inline placement badge
    const nameW = doc.getTextWidth(name.toUpperCase());
    const badgeX = textX + nameW + 6;
    const badgeW = doc.getTextWidth(level) + 10;
    doc.setFillColor(...badgeColor);
    doc.roundedRect(badgeX, nameBaseline - 4.2, badgeW, 6.5, 1.5, 1.5, "F");
    doc.setFontSize(7.5);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.text(level, badgeX + 5, nameBaseline + 0.5);

    // Body paragraph
    doc.setFontSize(9);
    doc.setTextColor(...TEXT_MAIN);
    doc.setFont("helvetica", "normal");
    doc.text(detailLines, textX, y + 11, { lineHeightFactor: 1.45 });

    // No trailing gap — drawDimensionSeparator handles spacing between blocks.
    y += blockH;
  }

  // ── Dimension separator ──
  // Thin horizontal rule between dimension blocks for clean visual segmentation.
  // Used between Orientation/Integration and Integration/Judgment; not before the first
  // block (the H2 + subtitle handle that boundary) and not after the last (page break does).
  function drawDimensionSeparator() {
    // 4mm above + 3mm below balances the visual whitespace: the previous block has only
    // ~1mm of bottom padding while the next block has ~2mm of top padding before its name.
    y += 4;
    doc.setDrawColor(...DIVIDER);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
    y += 3;
  }

  // ════════════════════════════════════════════
  // PAGE 1 — HEADER
  // ════════════════════════════════════════════
  drawHeaderBlock(true);

  // ── Summary (tight to header) ──
  doc.setFontSize(13);
  doc.setTextColor(...TEXT_MAIN);
  doc.setFont("times", "bold");
  doc.text("Summary", MARGIN_X, y);
  y += 7;

  // Summary body at 11pt with 15pt leading — the Summary box is the primary read of the
  // entire document, so it gets slightly larger reader typography than the rest of the front matter.
  doc.setFontSize(11);
  doc.setTextColor(...TEXT_MAIN);
  doc.setFont("helvetica", "normal");
  const summaryLines = doc.splitTextToSize(profile.summary, CONTENT_W - 10);
  const summaryBoxH = summaryLines.length * 5.3 + 8;
  checkSpace(summaryBoxH + 4);

  doc.setFillColor(...BG_WARM);
  doc.roundedRect(MARGIN_X, y - 3, CONTENT_W, summaryBoxH, 2, 2, "F");
  doc.setFillColor(...GOLD);
  doc.rect(MARGIN_X, y - 3, 1.2, summaryBoxH, "F");

  doc.text(summaryLines, MARGIN_X + 5, y + 2, { lineHeightFactor: 1.36 });
  y += summaryBoxH + 4;

  // ── Hard page break: page 1 is the cover (header + role_description + summary).
  // Readiness Dimensions and everything after it begin on page 2.
  doc.addPage();
  y = MARGIN_TOP;

  // ── Readiness Dimensions ──
  if (profile.dimensions) {
    drawSectionHeading("Readiness Dimensions");

    // Construct legend
    doc.setFontSize(8);
    doc.setTextColor(...LEGEND_GRAY);
    doc.setFont("helvetica", "bold");
    let lx = MARGIN_X;
    const legendItems = [
      { name: "Orientation", desc: " — How well you understand AI" },
      { name: "Integration", desc: " — How effectively you use AI" },
      { name: "Judgment", desc: " — How well you reason under pressure" },
    ];
    for (let i = 0; i < legendItems.length; i++) {
      if (i > 0) {
        doc.setFont("helvetica", "normal");
        doc.text("   ·   ", lx, y);
        lx += doc.getTextWidth("   ·   ");
      }
      doc.setFont("helvetica", "bold");
      doc.text(legendItems[i].name, lx, y);
      lx += doc.getTextWidth(legendItems[i].name);
      doc.setFont("helvetica", "normal");
      doc.text(legendItems[i].desc, lx, y);
      lx += doc.getTextWidth(legendItems[i].desc);
    }
    y += 8;

    drawConstructCard("Orientation", profile.dimensions.orientation.level, profile.dimensions.orientation.detail);
    drawDimensionSeparator();
    drawConstructCard("Integration", profile.dimensions.integration.level, profile.dimensions.integration.detail);
    drawDimensionSeparator();
    drawConstructCard("Judgment", profile.dimensions.judgment.level, profile.dimensions.judgment.detail);

    // Force page break — What You're Doing Well always begins on a fresh page.
    doc.addPage();
    y = MARGIN_TOP;
  }

  // ── What You're Doing Well ──
  drawSectionHeading("What You're Doing Well", GREEN);
  drawBoldLeadList(profile.doing_well);

  // ── Next Capabilities to Build ──
  drawSectionHeading("Next Capabilities to Build", GOLD);
  drawBoldLeadList(profile.next_capabilities);

  // ── Your Next Step ──
  // Treated as a discrete callout: slim gold left bar, warm-bg fill, title at 12pt serif.
  // Mirrors the Summary box styling on page 1 at smaller scale.
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const nextStepLines = doc.splitTextToSize(profile.primary_next_step, CONTENT_W - 14);
  const nextStepTitleH = 14;
  const nextStepBodyH = nextStepLines.length * 5;
  const nextStepBoxH = nextStepTitleH + nextStepBodyH + 10;

  y += 8;
  checkSpace(nextStepBoxH + 10);

  // Warm-bg fill with subtle border
  doc.setFillColor(...BG_WARM);
  doc.setDrawColor(...BORDER);
  doc.setLineWidth(0.5);
  doc.roundedRect(MARGIN_X, y, CONTENT_W, nextStepBoxH, 2, 2, "FD");

  // Slim gold accent bar (matches Summary box on page 1)
  doc.setFillColor(...GOLD);
  doc.rect(MARGIN_X, y, 1.5, nextStepBoxH, "F");

  // Title — 12pt serif
  doc.setFontSize(12);
  doc.setTextColor(...TEXT_MAIN);
  doc.setFont("times", "bold");
  doc.text("Your Next Step", MARGIN_X + 7, y + 10);

  // Body — 10pt
  doc.setFontSize(10);
  doc.setTextColor(...TEXT_MAIN);
  doc.setFont("helvetica", "normal");
  doc.text(nextStepLines, MARGIN_X + 7, y + 19, { lineHeightFactor: 1.45 });

  y += nextStepBoxH + 8;

  // ── Organizational Opportunities (forced standalone page when present) ──
  if (profile.organizational_opportunities && profile.organizational_opportunities.length > 0) {
    doc.addPage();
    y = MARGIN_TOP;
    drawSectionHeading("Organizational Opportunities", TEXT_MUTED, 0);

    doc.setFontSize(8.5);
    doc.setTextColor(...TEXT_LIGHT);
    doc.setFont("helvetica", "italic");
    doc.text(
      "The following recommendations are addressed to the organization based on patterns observed in this assessment.",
      MARGIN_X,
      y
    );
    y += 6;

    drawBulletList(profile.organizational_opportunities, TEXT_MUTED);
  }

  // ════════════════════════════════════════════
  // APPENDIX — Assessment Responses
  // ════════════════════════════════════════════
  let appendixFirstPage = 0;
  if (assessmentResponses.length > 0) {
    doc.addPage();
    y = MARGIN_TOP;
    appendixFirstPage = doc.getNumberOfPages();

    // Repeat header on appendix page
    drawHeaderBlock();

    drawSectionHeading("Evidence Record: Scenarios and Responses", TEXT_MAIN, 2);
    y += 2;

    let currentTier = 0;

    for (const resp of assessmentResponses) {
      // Tier header bar
      if (resp.tier !== currentTier) {
        currentTier = resp.tier;
        const tierColor = TIER_COLORS[currentTier] || NAVY;
        const tierLabel = TIER_LABELS[currentTier] || `TIER ${currentTier}`;

        checkSpace(34);
        doc.setFillColor(...tierColor);
        doc.roundedRect(MARGIN_X, y, CONTENT_W, 12, 2, 2, "F");
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.text(tierLabel, MARGIN_X + 8, y + 8);
        y += 16;
      }

      // Question text (scenario + prompt combined)
      const questionText = resp.scenario + "\n\n" + resp.prompt;
      const questionLines = doc.splitTextToSize(questionText, CONTENT_W - 20);
      const responseLines = doc.splitTextToSize(resp.response, CONTENT_W - 24);
      const qH = questionLines.length * 3.8;
      const rH = responseLines.length * 4;
      const cardH = 14 + qH + 8 + 10 + rH + 10;

      checkSpace(cardH + 8);

      // Question number
      doc.setFontSize(9.5);
      doc.setTextColor(...TEXT_MAIN);
      doc.setFont("helvetica", "bold");
      doc.text(`Question ${resp.questionIndex + 1}`, MARGIN_X, y);
      y += 6;

      // Question card
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.3);
      doc.setFillColor(255, 255, 255);
      const qCardH = qH + 10;
      doc.roundedRect(MARGIN_X, y - 2, CONTENT_W, qCardH, 2, 2, "FD");

      doc.setFontSize(9);
      doc.setTextColor(...TEXT_MAIN);
      doc.setFont("helvetica", "normal");
      doc.text(questionLines, MARGIN_X + 6, y + 3, { lineHeightFactor: 1.5 });
      y += qCardH + 2;

      // Response block
      const respBlockH = 10 + rH + 8;
      doc.setFillColor(...BG_WARM);
      doc.roundedRect(MARGIN_X, y - 2, CONTENT_W, respBlockH, 2, 2, "F");

      doc.setFontSize(8);
      doc.setTextColor(153, 153, 153);
      doc.setFont("helvetica", "bold");
      doc.text("YOUR RESPONSE", MARGIN_X + 6, y + 3);

      doc.setFontSize(9);
      doc.setTextColor(...TEXT_MAIN);
      doc.setFont("helvetica", "normal");
      doc.text(responseLines, MARGIN_X + 6, y + 9, { lineHeightFactor: 1.5 });

      y += respBlockH + 8;
    }
  }

  // ── Running header on all pages except cover and appendix cover ──
  const skipPages = new Set<number>([1]);
  if (appendixFirstPage > 0) skipPages.add(appendixFirstPage);
  drawRunningHeader(skipPages);

  // ── Footer on all pages ──
  drawFooter();

  doc.save(buildFilename(userName));
}
