"""
generate_pdf.py — Convert harness JSON output to a formatted PDF assessment.

Usage:
    python3 generate_pdf.py output/jane-maples-2026-04-02T23-26-43.json

Output: same directory and base name as input, with .pdf extension.
"""

import sys
import json
import os
from datetime import datetime

# Pull in the PDF generator from the same directory (harness/generate_profile_pdf.py)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from generate_profile_pdf import build_pdf


def harness_json_to_pdf_data(data):
    """Map harness output JSON to the shape build_pdf() expects."""

    profile = data['profile']
    meta    = data['meta']

    # ── Profile data ──────────────────────────────────────────────────────────
    profile_data = {
        'name':       meta['respondent_name'],
        'role_label': data.get('meta', {}).get('profile', '').replace('job-role-profile-', '').replace('.md', '').replace('-', ' ').title(),
        'date':       datetime.strptime(meta['run_at'][:10], '%Y-%m-%d').strftime('%B %-d, %Y'),
        'band':       profile['band'],
        'summary':    profile['summary'],
        'doing_well':                  profile.get('doing_well', []),
        'next_capabilities':           profile.get('next_capabilities', []),
        'primary_next_step':           profile.get('primary_next_step', ''),
        'organizational_opportunities': profile.get('organizational_opportunities', []),
        'constructs': {
            'Orientation': {
                'level':  profile['dimensions']['orientation']['level'],
                'detail': profile['dimensions']['orientation']['detail'],
            },
            'Integration': {
                'level':  profile['dimensions']['integration']['level'],
                'detail': profile['dimensions']['integration']['detail'],
            },
            'Judgment': {
                'level':  profile['dimensions']['judgment']['level'],
                'detail': profile['dimensions']['judgment']['detail'],
            },
        },
    }

    # Use role_label from the job-role-profile YAML if we can derive it better
    # from the scored data — fall back to what we computed above
    for tier_key in ('tier1_scored', 'tier2_scored', 'tier3_scored'):
        if data.get(tier_key):
            break  # just confirming data exists

    # ── Assessment responses ───────────────────────────────────────────────────
    responses = []
    tier_question_counts = {1: 0, 2: 0, 3: 0}

    for tier_key, tier_num in [('tier1_scored', 1), ('tier2_scored', 2), ('tier3_scored', 3)]:
        for item in data.get(tier_key, []):
            tier_question_counts[tier_num] += 1
            q_num = tier_question_counts[tier_num]

            # Combine scenario + prompt into the question text shown in the appendix
            question_text = f"{item['scenario']}\n\n{item['prompt']}"

            responses.append({
                'tier':          tier_num,
                'question_num':  q_num,
                'question_text': question_text,
                'response':      item['user_response'],
            })

    return profile_data, responses


def main():
    if len(sys.argv) < 2:
        print('Usage: python3 generate_pdf.py <harness-output.json>')
        sys.exit(1)

    input_path = sys.argv[1]
    if not os.path.exists(input_path):
        print(f'File not found: {input_path}')
        sys.exit(1)

    with open(input_path) as f:
        data = json.load(f)

    profile_data, responses = harness_json_to_pdf_data(data)

    # Output path: same location and name as input, .pdf extension
    output_path = os.path.splitext(input_path)[0] + '.pdf'

    build_pdf(output_path, profile_data, responses)
    print(f'Done: {output_path}')


if __name__ == '__main__':
    main()
