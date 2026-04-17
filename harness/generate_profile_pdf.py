"""
AI Readiness Assessment — Profile PDF Generator
Combines v4 profile content structure with current visual design language.

Design source: ai-readiness-profile-james-j-wells.pdf (current/less decorative version)
Content source: james-wells-v4-profile.pdf (v4 profile prompt output)
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
import os

# ---------------------------------------------------------------------------
# COLORS (from design document v7 color system)
# ---------------------------------------------------------------------------
NAVY       = HexColor("#14213d")
GREEN      = HexColor("#1b4332")
GOLD       = HexColor("#c9a227")
TEXT_MAIN   = HexColor("#2a2a2a")
TEXT_MUTED  = HexColor("#828282")
TEXT_LIGHT  = HexColor("#6b6b6b")
DIVIDER     = HexColor("#d2cdc6")
BORDER      = HexColor("#e0ddd6")
BG_WARM     = HexColor("#faf9f6")
BG_PAGE     = HexColor("#f8f7f4")
WHITE       = HexColor("#ffffff")

# Band colors
BAND_COLORS = {
    "Emerging":      HexColor("#4a5568"),
    "Developing":    GOLD,
    "Demonstrating": GREEN,
}

# Construct accent colors
CONSTRUCT_COLORS = {
    "Orientation":  NAVY,
    "Integration":  GREEN,
    "Judgment":     GOLD,
}

# Tier accent colors
TIER_COLORS = {
    1: NAVY,
    2: GREEN,
    3: GOLD,
}

TIER_LABELS = {
    1: "TIER 1 — BASELINE",
    2: "TIER 2 — CONTEXTUALIZED",
    3: "TIER 3 — ADAPTIVE",
}


# ---------------------------------------------------------------------------
# FONT SETUP
# ---------------------------------------------------------------------------
def setup_fonts():
    """Register fonts. Falls back to Helvetica/Times if Google Fonts unavailable."""
    # We'll use built-in fonts for reliability
    # Heading: Times-Roman (serif stand-in for Source Serif 4)
    # Body: Helvetica (sans stand-in for DM Sans)
    pass


# ---------------------------------------------------------------------------
# PAGE DIMENSIONS
# ---------------------------------------------------------------------------
PAGE_W, PAGE_H = A4  # 210 x 297 mm
MARGIN = 22 * mm
CONTENT_W = PAGE_W - 2 * MARGIN


# ---------------------------------------------------------------------------
# STYLES
# ---------------------------------------------------------------------------
def build_styles():
    styles = {}

    styles['title'] = ParagraphStyle(
        'Title',
        fontName='Times-Bold',
        fontSize=20,
        leading=26,
        textColor=TEXT_MAIN,
        spaceAfter=2,
    )

    styles['role_label'] = ParagraphStyle(
        'RoleLabel',
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=TEXT_MUTED,
        spaceAfter=8,
    )

    styles['meta_label'] = ParagraphStyle(
        'MetaLabel',
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=TEXT_MUTED,
    )

    styles['meta_value'] = ParagraphStyle(
        'MetaValue',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=TEXT_MAIN,
    )

    styles['section_heading'] = ParagraphStyle(
        'SectionHeading',
        fontName='Times-Bold',
        fontSize=14,
        leading=20,
        textColor=TEXT_MAIN,
        spaceBefore=16,
        spaceAfter=8,
    )

    styles['construct_name'] = ParagraphStyle(
        'ConstructName',
        fontName='Times-Bold',
        fontSize=12,
        leading=16,
        textColor=TEXT_MAIN,
    )

    styles['construct_level'] = ParagraphStyle(
        'ConstructLevel',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=WHITE,
    )

    styles['body'] = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_MAIN,
        spaceAfter=4,
    )

    styles['body_italic'] = ParagraphStyle(
        'BodyItalic',
        fontName='Helvetica-Oblique',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_LIGHT,
        spaceAfter=4,
    )

    styles['bullet'] = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_MAIN,
        leftIndent=14,
        spaceAfter=6,
    )

    styles['next_step_body'] = ParagraphStyle(
        'NextStepBody',
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_MAIN,
        spaceAfter=4,
    )

    # Tier header in response appendix
    styles['tier_header'] = ParagraphStyle(
        'TierHeader',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=WHITE,
        spaceBefore=0,
        spaceAfter=0,
    )

    styles['question_number'] = ParagraphStyle(
        'QuestionNumber',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=TEXT_MAIN,
        spaceBefore=10,
        spaceAfter=4,
    )

    styles['question_text'] = ParagraphStyle(
        'QuestionText',
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=TEXT_MAIN,
        spaceAfter=6,
    )

    styles['response_label'] = ParagraphStyle(
        'ResponseLabel',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=TEXT_MUTED,
        spaceBefore=4,
    )

    styles['response_text'] = ParagraphStyle(
        'ResponseText',
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=TEXT_MAIN,
        spaceAfter=2,
    )

    styles['footer'] = ParagraphStyle(
        'Footer',
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=TEXT_MUTED,
    )

    styles['confidential'] = ParagraphStyle(
        'Confidential',
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=TEXT_MUTED,
    )

    return styles


# ---------------------------------------------------------------------------
# CUSTOM FLOWABLES
# ---------------------------------------------------------------------------
from reportlab.platypus import Flowable

class GoldAccentDivider(Flowable):
    """A 2pt gold horizontal line, full content width."""
    def __init__(self, width):
        Flowable.__init__(self)
        self.width = width
        self.height = 3

    def draw(self):
        self.canv.setStrokeColor(GOLD)
        self.canv.setLineWidth(2)
        self.canv.line(0, 1, self.width, 1)


class ThinDivider(Flowable):
    """A 0.5pt divider line."""
    def __init__(self, width, color=DIVIDER):
        Flowable.__init__(self)
        self.width = width
        self.height = 2
        self.color = color

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(0.5)
        self.canv.line(0, 1, self.width, 1)


class ConstructScoreBlock(Flowable):
    """
    A construct score card with colored left accent bar, name, level badge,
    and detail paragraph. Styled like the current version.
    """
    def __init__(self, name, level, detail, width, styles):
        Flowable.__init__(self)
        self.name = name
        self.level = level
        self.detail = detail
        self.full_width = width
        self.styles = styles
        # Pre-calculate height
        self._calc_height()

    def _calc_height(self):
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 8 - 16  # accent bar + padding
        p = P(self.detail, self.styles['body'])
        _, h = p.wrap(inner_w, 1000)
        # name line + badge + spacing + detail paragraph + padding
        self.height = 12 + 20 + 6 + h + 16

    def draw(self):
        c = self.canv
        accent_color = CONSTRUCT_COLORS.get(self.name, NAVY)
        badge_color = BAND_COLORS.get(self.level, TEXT_MUTED)

        # Background card
        c.setFillColor(WHITE)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.roundRect(0, 0, self.full_width, self.height, 4, fill=1, stroke=1)

        # Left accent bar
        c.setFillColor(accent_color)
        c.roundRect(0, 0, 5, self.height, 2, fill=1, stroke=0)
        c.rect(2.5, 0, 2.5, self.height, fill=1, stroke=0)

        # Name
        x_text = 16
        y_cursor = self.height - 16
        c.setFillColor(TEXT_MAIN)
        c.setFont('Times-Bold', 12)
        c.drawString(x_text, y_cursor, self.name.upper())

        # Level badge
        badge_w = len(self.level) * 6 + 16
        badge_h = 16
        badge_x = x_text + c.stringWidth(self.name.upper(), 'Times-Bold', 12) + 10
        badge_y = y_cursor - 3
        c.setFillColor(badge_color)
        c.roundRect(badge_x, badge_y, badge_w, badge_h, 3, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont('Helvetica-Bold', 8)
        c.drawString(badge_x + 8, badge_y + 4.5, self.level)

        # Detail paragraph
        y_cursor -= 26
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 8 - 16
        p = P(self.detail, self.styles['body'])
        pw, ph = p.wrap(inner_w, 1000)
        p.drawOn(c, x_text, y_cursor - ph)


class BulletItem(Flowable):
    """A bullet point with a colored dot and paragraph text."""
    def __init__(self, text, width, styles, dot_color=TEXT_MAIN):
        Flowable.__init__(self)
        self.text = text
        self.full_width = width
        self.styles = styles
        self.dot_color = dot_color
        self._calc_height()

    def _calc_height(self):
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 18
        p = P(self.text, self.styles['body'])
        _, h = p.wrap(inner_w, 1000)
        self.height = max(h, 10) + 4

    def draw(self):
        c = self.canv
        # Dot
        c.setFillColor(self.dot_color)
        c.circle(5, self.height - 7, 2.5, fill=1, stroke=0)
        # Text
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 18
        p = P(self.text, self.styles['body'])
        pw, ph = p.wrap(inner_w, 1000)
        p.drawOn(c, 18, self.height - ph - 2)


class TierHeaderBar(Flowable):
    """A full-width colored bar with tier label text."""
    def __init__(self, label, width, color):
        Flowable.__init__(self)
        self.label = label
        self.full_width = width
        self.color = color
        self.height = 26

    def draw(self):
        c = self.canv
        c.setFillColor(self.color)
        c.roundRect(0, 0, self.full_width, self.height, 3, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont('Helvetica-Bold', 10)
        c.drawString(12, 8, self.label)


class NextStepBox(Flowable):
    """A highlighted box for the highest-leverage next step with gold left accent."""
    def __init__(self, title, text, width, styles):
        Flowable.__init__(self)
        self.title_text = title
        self.text = text
        self.full_width = width
        self.styles = styles
        self._calc_height()

    def _calc_height(self):
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 24
        p = P(self.text, self.styles['body'])
        _, h = p.wrap(inner_w, 1000)
        self.height = 20 + h + 20  # title + body + padding

    def draw(self):
        c = self.canv
        # Background
        c.setFillColor(BG_WARM)
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.roundRect(0, 0, self.full_width, self.height, 4, fill=1, stroke=1)

        # Gold left accent
        c.setFillColor(GOLD)
        c.roundRect(0, 0, 5, self.height, 2, fill=1, stroke=0)
        c.rect(2.5, 0, 2.5, self.height, fill=1, stroke=0)

        # Title
        x_text = 16
        y_cursor = self.height - 16
        c.setFillColor(TEXT_MAIN)
        c.setFont('Times-Bold', 11)
        c.drawString(x_text, y_cursor, self.title_text)

        # Body
        y_cursor -= 16
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 24
        p = P(self.text, self.styles['body'])
        pw, ph = p.wrap(inner_w, 1000)
        p.drawOn(c, x_text, y_cursor - ph + 6)


class QuestionCard(Flowable):
    """A question + response card for the appendix."""
    def __init__(self, q_num, question_text, response_text, width, styles):
        Flowable.__init__(self)
        self.q_num = q_num
        self.question_text = question_text
        self.response_text = response_text
        self.full_width = width
        self.styles = styles
        self._calc_height()

    def _calc_height(self):
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 24

        q = P(self.question_text, self.styles['question_text'])
        _, qh = q.wrap(inner_w, 1000)

        r = P(self.response_text, self.styles['response_text'])
        _, rh = r.wrap(inner_w, 1000)

        # q_num line + question + label + response + padding
        self.height = 16 + qh + 16 + rh + 20
        self.qh = qh
        self.rh = rh

    def draw(self):
        c = self.canv
        from reportlab.platypus.paragraph import Paragraph as P
        inner_w = self.full_width - 24
        x = 12
        y = self.height

        # Question number
        y -= 14
        c.setFillColor(TEXT_MAIN)
        c.setFont('Helvetica-Bold', 9.5)
        c.drawString(x, y, f"Question {self.q_num}")

        # Question text
        y -= 6
        q = P(self.question_text, self.styles['question_text'])
        q.wrap(inner_w, 1000)
        q.drawOn(c, x, y - self.qh)
        y -= self.qh + 8

        # Response label
        c.setFillColor(TEXT_MUTED)
        c.setFont('Helvetica-Bold', 8)
        c.drawString(x, y, "YOUR RESPONSE")

        # Response in warm bg box
        y -= 6
        resp_box_h = self.rh + 12
        c.setFillColor(BG_WARM)
        c.roundRect(x - 2, y - resp_box_h, inner_w + 4, resp_box_h, 3, fill=1, stroke=0)

        r = P(self.response_text, self.styles['response_text'])
        r.wrap(inner_w - 8, 1000)
        r.drawOn(c, x + 4, y - resp_box_h + 4)


# ---------------------------------------------------------------------------
# FOOTER CALLBACK
# ---------------------------------------------------------------------------
def footer_callback(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 7.5)
    canvas.setFillColor(TEXT_MUTED)
    canvas.drawString(MARGIN, 12 * mm, f"AI Readiness Assessment · Confidential · {doc.page}")
    canvas.drawRightString(PAGE_W - MARGIN, 12 * mm, "Prototype Version · rsparkman.net")
    canvas.restoreState()


# ---------------------------------------------------------------------------
# BUILD DOCUMENT
# ---------------------------------------------------------------------------
def build_pdf(output_path, profile_data, assessment_responses):
    """
    profile_data: dict with keys:
        name, role_label, date, band,
        summary, doing_well[], next_capabilities[],
        primary_next_step, organizational_opportunities[],
        constructs: {Orientation: {level, detail}, Integration: {…}, Judgment: {…}}
    assessment_responses: list of {tier, question_num, question_text, response}
    """
    setup_fonts()
    styles = build_styles()

    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=20 * mm,
    )

    story = []

    # ----- Header helper (reused on appendix page) -----
    def append_header_block(target_story):
        target_story.append(Paragraph("AI Readiness Assessment", styles['title']))
        target_story.append(Paragraph(profile_data['role_label'], styles['role_label']))
        target_story.append(GoldAccentDivider(CONTENT_W))
        target_story.append(Spacer(1, 8))

        INACTIVE_GRAY = "#c0bdb6"
        SEPARATOR_GRAY = "#d2cdc6"
        bands_ordered = ["Emerging", "Developing", "Demonstrating"]
        active_band = profile_data['band']

        band_parts = []
        for b in bands_ordered:
            if b == active_band:
                color = BAND_COLORS.get(b, TEXT_MAIN).hexval()
                band_parts.append(f'<b><font color="{color}">{b}</font></b>')
            else:
                band_parts.append(f'<font color="{INACTIVE_GRAY}">{b}</font>')
        separator = f'&nbsp;&nbsp;<font color="{SEPARATOR_GRAY}">·</font>&nbsp;&nbsp;'
        placement_scale = separator.join(band_parts)

        meta_rows = [
            ("Prepared for", profile_data['name']),
            ("Date completed", profile_data['date']),
        ]
        for label, value in meta_rows:
            label_p = Paragraph(label, styles['meta_label'])
            value_p = Paragraph(value, styles['meta_value'])
            t = Table(
                [[label_p, value_p]],
                colWidths=[80, CONTENT_W - 80],
                rowHeights=[14],
            )
            t.setStyle(TableStyle([
                ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                ('LEFTPADDING', (0, 0), (-1, -1), 0),
                ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                ('TOPPADDING', (0, 0), (-1, -1), 0),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
            ]))
            target_story.append(t)

        label_p = Paragraph("Placement", styles['meta_label'])
        value_p = Paragraph(placement_scale, styles['meta_value'])
        t = Table(
            [[label_p, value_p]],
            colWidths=[80, CONTENT_W - 80],
            rowHeights=[14],
        )
        t.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 0),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
        ]))
        target_story.append(t)

        target_story.append(Spacer(1, 4))
        target_story.append(ThinDivider(CONTENT_W))
        target_story.append(Spacer(1, 12))

    # ===== HEADER (page 1) =====
    append_header_block(story)

    # ===== SUMMARY =====
    summary_heading = ParagraphStyle(
        'SummaryHeading', parent=styles['section_heading'], spaceBefore=0)
    story.append(Paragraph("Summary", summary_heading))
    story.append(Paragraph(profile_data['summary'], styles['body']))
    story.append(Spacer(1, 8))

    # ===== READINESS DIMENSIONS =====
    story.append(Paragraph("Readiness Dimensions", styles['section_heading']))

    # Construct legend — brief definitions in muted text
    construct_defs = [
        ("Orientation", "How well you understand AI"),
        ("Integration", "How effectively you use AI"),
        ("Judgment", "How well you reason under pressure"),
    ]
    legend_style = ParagraphStyle(
        'ConstructLegend',
        fontName='Helvetica',
        fontSize=8,
        leading=12,
        textColor=HexColor("#a8a4a0"),
    )
    legend_parts = []
    for name, desc in construct_defs:
        legend_parts.append(f'<b>{name}</b> — {desc}')
    legend_text = '&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;'.join(legend_parts)
    story.append(Paragraph(legend_text, legend_style))
    story.append(Spacer(1, 8))

    for construct_name in ["Orientation", "Integration", "Judgment"]:
        c_data = profile_data['constructs'][construct_name]
        block = ConstructScoreBlock(
            construct_name, c_data['level'], c_data['detail'],
            CONTENT_W, styles
        )
        story.append(block)
        story.append(Spacer(1, 8))

    # ===== WHAT YOU'RE DOING WELL =====
    story.append(Paragraph("What You're Doing Well", styles['section_heading']))
    for item in profile_data['doing_well']:
        story.append(BulletItem(item, CONTENT_W, styles, dot_color=GREEN))
    story.append(Spacer(1, 4))

    # ===== NEXT CAPABILITIES TO BUILD =====
    story.append(Paragraph("Next Capabilities to Build", styles['section_heading']))
    for item in profile_data['next_capabilities']:
        story.append(BulletItem(item, CONTENT_W, styles, dot_color=GOLD))
    story.append(Spacer(1, 4))

    # ===== YOUR HIGHEST-LEVERAGE NEXT MOVE =====
    story.append(NextStepBox(
        "Your Highest-Leverage Next Move",
        profile_data['primary_next_step'],
        CONTENT_W, styles
    ))
    story.append(Spacer(1, 8))

    # ===== ORGANIZATIONAL OPPORTUNITIES =====
    if profile_data.get('organizational_opportunities'):
        story.append(Paragraph("Organizational Opportunities", styles['section_heading']))
        story.append(Paragraph(
            "The following recommendations are addressed to the organization based on patterns observed in this assessment.",
            styles['body_italic']
        ))
        story.append(Spacer(1, 4))
        for item in profile_data['organizational_opportunities']:
            story.append(BulletItem(item, CONTENT_W, styles, dot_color=TEXT_MUTED))

    # ===== ASSESSMENT RESPONSES APPENDIX =====
    story.append(PageBreak())
    append_header_block(story)
    story.append(Paragraph("Assessment Responses", styles['section_heading']))
    story.append(Spacer(1, 6))

    current_tier = None
    for resp in assessment_responses:
        tier = resp['tier']
        if tier != current_tier:
            current_tier = tier
            story.append(TierHeaderBar(
                TIER_LABELS[tier], CONTENT_W, TIER_COLORS[tier]
            ))
            story.append(Spacer(1, 6))

        story.append(QuestionCard(
            resp['question_num'],
            resp['question_text'],
            resp['response'],
            CONTENT_W, styles
        ))
        story.append(Spacer(1, 6))

    # Build
    doc.build(story, onFirstPage=footer_callback, onLaterPages=footer_callback)
    print(f"PDF generated: {output_path}")


# ---------------------------------------------------------------------------
# SAMPLE DATA (James Wells v4 profile content + current version constructs)
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    profile = {
        "name": "James J Wells",
        "role_label": "General Workplace Professionals",
        "date": "March 25, 2026",
        "band": "Developing",
        "summary": (
            "The respondent brings sound instincts to working with AI — consistently recognizing "
            "that AI output needs scrutiny, that sensitive data requires protection, and that new "
            "tools deserve evaluation before adoption. These instincts are genuine and show up "
            "across scenarios. The primary opportunity is turning those instincts into specific, "
            "repeatable methods. Across 15 scenarios, the respondent frequently described the right "
            "general approach without articulating the concrete steps they would take to execute it. "
            "This is a respondent whose judgment often runs ahead of their process — they know what "
            "matters but have not yet built the workflows to act on it consistently."
        ),
        "constructs": {
            "Orientation": {
                "level": "Developing",
                "detail": (
                    "The respondent shows a functional understanding of AI limitations but applies "
                    "this knowledge unevenly. They appropriately identify the need to remove fabricated "
                    "information and take colleague feedback seriously when AI research proves inaccurate, "
                    "demonstrating awareness that AI output requires verification. However, their reasoning "
                    "tends to be general rather than systematic — they mention being 'careful' or doing "
                    "'additional interrogation' without describing specific verification approaches. This "
                    "pattern suggests they recognize core risks but haven't developed consistent methods "
                    "for managing them."
                ),
            },
            "Integration": {
                "level": "Developing",
                "detail": (
                    "The respondent demonstrates basic integration thinking by considering audience needs "
                    "when prompting AI, checking for data restrictions before uploading sensitive information, "
                    "and suggesting pilot approaches for automation. However, their integration strategies "
                    "remain largely conceptual. When asked to walk through specific processes or redesign "
                    "workflows, responses become vague — describing tasks in 'natural language' to AI or "
                    "simply asking for 'advice' rather than outlining concrete implementation steps. This "
                    "suggests they understand AI's potential role but lack detailed frameworks for systematic "
                    "integration."
                ),
            },
            "Judgment": {
                "level": "Demonstrating",
                "detail": (
                    "The respondent consistently demonstrates strong judgment across scenarios, adjusting "
                    "their approach based on stakes and context. They clearly distinguish between subjective "
                    "brainstorming tasks and sensitive performance reviews, prioritize data security over "
                    "deadline pressure, and maintain appropriate caution about adopting new tools without "
                    "evaluation. They show particular strength in recognizing when organizational policies "
                    "should guide decisions and when to slow down rather than rush implementation. This "
                    "represents the most reliable dimension in their readiness profile."
                ),
            },
        },
        "doing_well": [
            "Consistently recognizes that AI output requires human review before use — across multiple scenarios, the first instinct was to check, verify, or edit rather than accept",
            "Prioritizes data protection over convenience and speed — when faced with time pressure and sensitive information, chose to miss a deadline rather than compromise confidentiality",
            "Distinguishes between task types that warrant different levels of AI involvement — recognized that brainstorming and performance reviews require fundamentally different approaches",
            "Approaches new AI tools and automated workflows with appropriate caution — consistently suggested piloting, assessing, and evaluating before full adoption rather than rushing to implement",
        ],
        "next_capabilities": [
            "You recognize that AI output needs checking — the next step is describing what specifically you check for. Moving from 'I'd interrogate the results' to 'I'd verify the specific figures against source data and flag any claims I can't confirm' would make your review process reliable and repeatable.",
            "You see opportunities for AI automation in repetitive workflows — the next step is describing what the AI-assisted process would actually look like end-to-end. Which parts does AI handle, which parts need you, and how do the handoffs work?",
            "When directing AI to produce something, you currently describe the task and ask for help. Providing more context up front — who the audience is, what the output needs to accomplish, what constraints apply, and what good looks like — would dramatically improve what AI gives you on the first pass.",
            "You use AI to brainstorm pros and cons, which is a strong start. Extending that to exploring options you haven't considered, stress-testing your assumptions, and generating alternatives would turn AI into a genuine thinking partner.",
        ],
        "primary_next_step": (
            "Pick one recurring task where you already use AI and write down — before you start — "
            "exactly what you'll provide the AI, what you'll check in the output, and what 'good enough' "
            "looks like. Building that into a habit for even one task will change how you approach all of them."
        ),
        "organizational_opportunities": [
            "Several responses suggest the respondent is working without defined verification protocols for AI-generated content — establishing clear guidelines for what to check in AI output for different task types would give staff a concrete process to follow rather than relying on individual instinct",
            "The respondent's caution about data in AI tools is appropriate but unstructured — a clear policy specifying which categories of information can and cannot be entered into AI tools would replace ad-hoc judgment with consistent practice",
        ],
    }

    responses = [
        # Tier 1
        {"tier": 1, "question_num": 1, "question_text": "You ask an AI tool to help you write an email to a client explaining a delay in a project. The tool produces a polished, professional response — but it includes a specific reason for the delay that you never provided.\n\nHow do you handle this?", "response": "I would remove the reason it included. And edit carefully."},
        {"tier": 1, "question_num": 2, "question_text": "You need to prepare a one-page summary of a complex topic for your manager — someone who is smart but doesn't have background in this area.\n\nHow would you approach working with the AI tool to produce a good summary?", "response": "I'd explain to the tool that the reader is not familiar with this subject."},
        {"tier": 1, "question_num": 3, "question_text": "Your manager asks you to use an AI tool to help with two tasks: (A) brainstorming ideas for an upcoming team offsite, and (B) drafting a performance review for a direct report.\n\nWould you approach these two tasks differently? How and why?", "response": "I would approach them differently. A would be iterative and subjective. I'd be more precise and careful on the second."},
        {"tier": 1, "question_num": 4, "question_text": "You use an AI tool to research a topic you don't know well. It gives you a confident, detailed, well-organized answer with five key points. A colleague says 'two of these are wrong.'\n\nDoes this surprise you? What do you do next?", "response": "I'd take what my coworker said seriously and look closer at and work to verify."},
        {"tier": 1, "question_num": 5, "question_text": "A teammate mentions they spend about two hours every Friday compiling the same weekly status report — pulling updates from emails, chat messages, and a project tracker.\n\nWhat would you suggest, and what would you want to think through before recommending anything?", "response": "I'd suggest we explore automating some of this. in a pilot and prototyping way."},
        # Tier 2
        {"tier": 2, "question_num": 1, "question_text": "Your manager asks you to pull together a competitive analysis for a quarterly review meeting tomorrow. The AI returns specific market share figures and strategic moves attributed to named competitors.\n\nHow do you handle this AI-generated research when building your analysis?", "response": "I'd factor it in. I might do some additional interrogation of the AI results."},
        {"tier": 2, "question_num": 2, "question_text": "You need to prepare a slide deck for a client meeting next week. The client is evaluating your proposal alongside two competitors.\n\nHow would you use the AI assistant to help build this deck?", "response": "I'd load the data I have into the tool. I'd be sure there's no data there that my company restricts from AI. and I'd iterate collaboratively with the ai tool on constructing first the design of the deck and then the content."},
        {"tier": 2, "question_num": 3, "question_text": "Your notes include internal revenue figures, client names with contract values, and candid feedback from your manager about another team's performance.\n\nHow do you approach using the AI assistant with this material?", "response": "I'd pay attention to what I upload and would not upload information I've been trained to protect."},
        {"tier": 2, "question_num": 4, "question_text": "Your team tracks project status using a shared spreadsheet. The project lead manually synthesizes updates into a one-page summary for the client. It takes about an hour.\n\nDo you see a way AI could help here?", "response": "This appears to be something we could automate with AI. I'd do it manually first."},
        {"tier": 2, "question_num": 5, "question_text": "A colleague shows you a workflow: every Monday the AI automatically summarizes project updates and emails the summary to the department head.\n\nWhat's your reaction? Would you adopt this workflow?", "response": "I'd appreciate the input. but I'd want to be sure it works for me."},
        # Tier 3
        {"tier": 3, "question_num": 1, "question_text": "Your manager asks you to streamline the monthly client report process that currently takes 6 hours. You manually pull data from three systems, write summaries, create charts, and format everything.\n\nWalk me through how you would redesign this process to incorporate AI tools.", "response": "I would get my thoughts together and tell the ai tool how i execute this task each month and ask for advice as to how to streamline it."},
        {"tier": 3, "question_num": 2, "question_text": "You need to create a presentation for executives summarizing competitor analysis across five companies. You have raw data but need AI to help turn this into compelling slides.\n\nDescribe exactly how you would prompt and direct the AI.", "response": "I would give the ai tool a natural language description of this task and ask for help."},
        {"tier": 3, "question_num": 3, "question_text": "AI analysis suggests one strategic approach for a client proposal, but your colleague recommends a completely different direction. The client meeting is tomorrow.\n\nHow do you decide which direction to pursue?", "response": "I put both scenarios in the tool and brainstorm about pros and cons"},
        {"tier": 3, "question_num": 4, "question_text": "It's 4:30 PM and a client-facing report with confidential financial data is due at 9 AM tomorrow. Using AI could help you meet the deadline, but there are risks with sensitive data.\n\nWhat's your approach?", "response": "I would take my time. if could anonymize the information i might proceed but i'd miss the deadline before I'd compromise anything."},
        {"tier": 3, "question_num": 5, "question_text": "A colleague is excited about a new AI tool that promises to automatically generate complete project plans from a brief description. They want the team to start using it immediately.\n\nWhat's your take?", "response": "I'd be positive and encouraging but I'd suggest we slow down and assess."},
    ]

    output = "/home/claude/ai-readiness-profile-james-j-wells.pdf"
    build_pdf(output, profile, responses)
