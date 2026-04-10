#!/usr/bin/env python3
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_LEFT

# Read the transcription
with open("transcription.txt", "r") as f:
    transcript_text = f.read()

# Create the PDF
pdf_filename = "podcast_transcription.pdf"
doc = SimpleDocTemplate(pdf_filename, pagesize=letter,
                        topMargin=0.75*inch, bottomMargin=0.75*inch,
                        leftMargin=0.75*inch, rightMargin=0.75*inch)

# Get styles
styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=18,
    textColor='#1a1a1a',
    spaceAfter=12,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
)

subtitle_style = ParagraphStyle(
    'CustomSubtitle',
    parent=styles['Normal'],
    fontSize=12,
    textColor='#666666',
    spaceAfter=6,
    alignment=TA_CENTER,
    fontName='Helvetica'
)

info_style = ParagraphStyle(
    'InfoStyle',
    parent=styles['Normal'],
    fontSize=10,
    textColor='#444444',
    spaceAfter=6,
    alignment=TA_LEFT,
    fontName='Helvetica'
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontSize=11,
    textColor='#000000',
    spaceAfter=12,
    alignment=TA_LEFT,
    fontName='Helvetica',
    leading=16
)

# Build the content
story = []

# Title
story.append(Paragraph("The Education Blueprint", title_style))
story.append(Paragraph("All In - Learning in the Age of A.I.", subtitle_style))
story.append(Spacer(1, 0.2*inch))

# Episode information
story.append(Paragraph("<b>Podcast:</b> The Education Blueprint with Dr. Jon Rysewyk", info_style))
story.append(Paragraph("<b>Episode:</b> Season 2, Episode 3 - All In - Learning in the Age of A.I.", info_style))
story.append(Paragraph("<b>Release Date:</b> December 4, 2025", info_style))
story.append(Paragraph("<b>Duration:</b> 52 minutes", info_style))
story.append(Paragraph("<b>Guest:</b> Dr. Vasileios Maroulas, Director of AI Tennessee Initiative", info_style))
story.append(Spacer(1, 0.3*inch))

# Divider
story.append(Paragraph("_" * 80, info_style))
story.append(Spacer(1, 0.2*inch))

# Transcription header
story.append(Paragraph("<b>TRANSCRIPT</b>", ParagraphStyle(
    'TranscriptHeader',
    parent=styles['Heading2'],
    fontSize=14,
    textColor='#1a1a1a',
    spaceAfter=12,
    fontName='Helvetica-Bold'
)))

# Split transcript into paragraphs (sentences) for better formatting
# Replace problematic characters and format text
transcript_clean = transcript_text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

# Add the full transcript
story.append(Paragraph(transcript_clean, body_style))

# Build PDF
doc.build(story)
print(f"PDF created successfully: {pdf_filename}")
