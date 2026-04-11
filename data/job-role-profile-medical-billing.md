---
role_identifier: "medical-billing"
role_label: "Medical Billing Specialist"
role_description: "An insurance billing clerk at a 10-physician multi-specialty medical practice. The role handles claim submission, denial management, prior authorizations, coordination of benefits, and patient billing inquiries — with AI tools increasingly part of the workflow."
version: "0.3.0"
---

# Job-Role-Profile: Medical Billing Specialist

## Organization Overview

We are a 10-physician multi-specialty medical practice serving approximately 8,000 active patients in a mid-size metropolitan area. Our specialties include internal medicine, family medicine, cardiology, and orthopedics. We operate out of two locations with a shared administrative and billing team.

## The Role

Insurance billing clerk. This person handles claim submissions, payment posting, denial management, prior authorizations, and patient billing inquiries. They work closely with the front desk, the clinical coding team, and the practice manager. They interact with patients daily, usually around billing questions, payment plans, or insurance coverage issues.

## AI Tools Currently in Use

We are early in adopting AI tools across administrative workflows. Currently:

- Staff use a general-purpose AI assistant (similar to ChatGPT) for drafting patient-facing letters, appeal letters for denied claims, and summarizing explanation of benefits (EOB) documents.
- Our EHR system has started surfacing AI-suggested billing codes based on clinical notes. Staff are expected to review and confirm these suggestions, not accept them automatically.
- Some staff use AI to help research payer-specific billing rules and coverage policies when handling unusual claims.
- We do not use AI for any clinical decision-making. AI is limited to administrative and billing workflows.

## Common Tasks

A typical week for the billing clerk includes:

- Submitting claims to commercial insurers, Medicare, and Medicaid
- Reviewing and resolving denied or rejected claims
- Posting payments and reconciling accounts
- Handling prior authorization requests for procedures and referrals
- Responding to patient questions about bills, balances, and insurance coverage
- Drafting appeal letters for denied claims
- Verifying insurance eligibility and benefits for scheduled patients
- Communicating with payers by phone and through online portals

## Decision Authority and Accountability

This person makes consequential decisions on every claim, but operates within a tightly regulated framework. They don't have broad strategic authority, but their individual judgment calls directly affect revenue, compliance, and patient experience. The regulatory environment means that errors aren't just inefficiencies — they can trigger formal consequences.

**Routine decisions they own outright:** Which code to submit on a clean claim. Whether a claim is ready to send or needs additional documentation. How to post a payment. How to respond to a straightforward patient billing question. These are high-volume, low-review decisions. Most claims go out without a second set of eyes. When the EHR suggests a billing code, this person is the one who accepts or overrides it — and they own that decision.

**Judgment-embedded decisions that carry real consequences:** Whether a denied claim is worth appealing. How to characterize clinical necessity in an appeal letter. Whether to flag a coding pattern to the practice manager. How to handle a patient who is confused or upset about a bill. These decisions require the person to weigh financial, compliance, and human factors simultaneously. An appeal letter that misrepresents clinical documentation could undermine the practice's credibility with a payer. A billing explanation that's wrong or dismissive could lose a patient.

**Decisions they escalate but shape:** Complex coding disputes, potential compliance issues, write-off decisions, unusual coverage situations. The person brings these to the practice manager or coding team, but how they frame the issue shapes the outcome. If they flag a pattern of AI-suggested codes that seem to trend high, that's valuable. If they don't notice the pattern, nobody else will — they're the closest to the data.

When this person gets it wrong, the consequences can be immediate and formal. A claim submitted with an unsupported code can trigger a payer audit. A HIPAA violation — even accidental, even through an AI tool — has regulatory consequences. A patient who receives an incorrect bill loses trust in the practice at a moment when they're already dealing with health concerns. Unlike roles where errors accumulate slowly, this person's errors can produce discrete, traceable events with specific consequences attached.

## What's High-Stakes Here

Billing errors in a medical practice carry real consequences:

- Incorrect claims can trigger payer audits or fraud investigations
- Upcoding or downcoding — even unintentionally — has compliance and legal implications
- Patients receive unexpected bills when coverage isn't verified correctly, which damages trust and creates financial hardship
- Prior authorization failures can delay procedures and affect patient care
- HIPAA applies to every interaction — patient information appears in nearly every document the billing clerk touches
- Appeal letters represent the practice's position to an insurer and must be factually accurate

Mistakes aren't hypothetical here. A billing clerk who submits a claim with an AI-suggested code they didn't verify could trigger a compliance review. A clerk who sends a patient an AI-drafted letter with incorrect balance information erodes trust with someone who's already stressed about medical bills.

## Language and Terminology

Common terms this person encounters daily: CPT codes, ICD-10 codes, EOB (explanation of benefits), ERA (electronic remittance advice), prior authorization, medical necessity, clean claim, denial management, appeals, coordination of benefits, allowed amount, patient responsibility, HIPAA, PHI (protected health information), payer portal, aging report.

## What We Want to Know

When we assess a billing clerk candidate, we want to understand: Can this person use AI tools to work faster and more effectively without introducing errors that affect patients, compliance, or revenue? Do they know when to trust a suggestion and when to stop and verify? Can they handle patient-facing communication with appropriate care when AI is helping them draft it?

---

## Tier 1 Questions

<!-- tier1-questions-start -->
```json
{
  "meta": {
    "tier": 1,
    "label": "Baseline Orientation",
    "version": "0.4.0",
    "question_count": 5,
    "estimated_minutes": 10,
    "primary_construct": "orientation",
    "secondary_constructs": ["integration", "judgment"],
    "job_role_context": "Insurance billing clerk at a 10-physician multi-specialty medical practice",
    "dol_coverage": [
      "#1 Understand AI Principles (Q3, Q4)",
      "#2 Explore AI Uses (Q5)",
      "#3 Direct AI Effectively (Q2)",
      "#4 Evaluate AI Outputs (Q1)",
      "#5 Use AI Responsibly (Q3)"
    ],
    "human_functions_activated": ["Understand", "Express", "Ideate"],
    "design_rationale": "This set is built around the billing clerk's daily reality — AI-suggested codes, patient-facing letters, appeal drafts, and payer research. Q1 opens with the most immediate AI touchpoint (EHR code suggestions with a confidence indicator) to test whether the person understands what the AI's confidence actually means. Q2 tests whether they understand how input shapes output in the context of drafting an appeal letter. Q3 uses contrasting tasks specific to billing to test task-AI suitability with PHI awareness. Q4 probes confidence calibration through AI-generated payer research that sounds authoritative. Q5 closes by asking the person to see workflow opportunity in a colleague's denial management process. Every scenario names the AI mechanism explicitly so the person must reason about AI, not just about the task."
  },

  "user_facing": {
    "intro_text": "You'll see a series of short scenarios related to your work. For each one, tell us what you'd do and why — in a few sentences. There are no right answers and no trick questions. We're interested in your thinking, not your writing. Aim for the kind of answer you'd give a coworker who asked for your honest take.",
    "response_placeholder": "2–4 sentences — just your honest take",
    "completion_text": "That's the first set. Now we'll shift from how you think about AI to how you'd work with it."
  },

  "questions": [
    {
      "id": "t1_q1",
      "sequence": 1,
      "angle": "ai_code_suggestion_evaluation",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": null,
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "Your EHR system uses AI to suggest billing codes based on the provider's clinical notes. For a routine office visit, the AI suggests a higher-complexity E/M code than what this type of visit typically receives. The AI-generated suggestion includes a confidence indicator showing it's a strong match to the language in the notes.",
      "prompt": "What do you make of the AI's suggestion?",
      "internal_notes": "Does the person understand that the AI is pattern-matching language in the notes, not making a clinical or compliance judgment? The confidence indicator is the diagnostic — does the person equate the AI's confidence with accuracy, or do they have a model for why a confident AI suggestion can still be wrong?",
      "rubric": {
        "orientation": {
          "emerging": "Treats the AI's high-confidence suggestion as a reliable recommendation. Has not yet developed a model for why an AI that matches language patterns in notes might confidently suggest a code that isn't supported by the documentation requirements for that complexity level.",
          "developing": "Recognizes the higher code gives them pause and they should verify, but does not yet articulate why the AI's confidence indicator doesn't settle the question — that pattern-matching note language is a different operation than determining whether documentation meets coding criteria.",
          "demonstrating": "Understands that the AI is matching patterns in clinical note language to code descriptions — it's not evaluating whether the documentation meets the specific requirements for that complexity level. Recognizes that AI confidence reflects strength of pattern match, not clinical or compliance accuracy. Sees this as characteristic of how AI code suggestion works, not a one-off error."
        },
        "integration": {
          "emerging": "Either accepts the AI's suggestion because of the confidence score or rejects it without a described process. No method for evaluating AI-suggested codes.",
          "developing": "Mentions checking or verifying but treats it as a single undifferentiated step — does not yet indicate what specifically they would compare the AI suggestion against or who they would consult.",
          "demonstrating": "Shows evidence of a verification approach grounded in the specifics of the scenario — reviewing documentation against the suggested complexity level, consulting coding guidelines, escalating to the coding team or provider. The response need not list every step but should indicate the person knows what to check, not just that checking is needed."
        },
        "judgment": {
          "emerging": "Has not yet connected accepting an AI-suggested code without verification to compliance consequences. Focuses on getting the claim submitted.",
          "developing": "Recognizes that coding accuracy matters in general terms, but does not yet reason through the specific risk — that submitting an AI-suggested higher-complexity code not supported by documentation could be flagged as upcoding.",
          "demonstrating": "Connects this directly to compliance: an AI-suggested code that the billing clerk submits without verification is still the clerk's responsibility. An unsupported higher-complexity code is an upcoding risk that can trigger payer audits, recoupment demands, or fraud investigations. The clerk is the accountability layer between the AI suggestion and the payer."
        }
      }
    },
    {
      "id": "t1_q2",
      "sequence": 2,
      "angle": "input_output_relationship",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": null,
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "A claim for a cardiology procedure was denied for 'lack of medical necessity.' The practice wants to appeal. You decide to use the AI assistant to help draft the appeal letter. You have the denial letter, the patient's chart notes from three recent visits, and the payer's coverage policy document.",
      "prompt": "How would you go about working with the AI assistant on this?",
      "internal_notes": "Does the person understand that what they provide to the AI determines what they get back? The appeal letter needs specific clinical details and must address the payer's stated denial reason. This tests the mental model for the input-output relationship — the AI can't build an effective appeal without the right source documents. The person doesn't need to describe a sophisticated workflow (Tier 2), but they need to understand the principle.",
      "rubric": {
        "orientation": {
          "emerging": "Describes asking the AI assistant to 'write an appeal letter for a denied claim' with minimal context. Has not yet connected the quality of what they give the AI to the quality of the appeal it produces.",
          "developing": "Recognizes they should provide some context to the AI — maybe the denial reason or the procedure details — but does not yet think through what specific information the AI assistant needs to produce an appeal that addresses this payer's stated reason.",
          "demonstrating": "Understands that the AI assistant can only work with what it's given. Knows it needs the denial letter (to understand the specific objection), the relevant chart notes (to cite clinical evidence), and the payer's coverage criteria (to show the case meets them). Sees the connection between giving the AI the right inputs and getting a letter that makes the clinical case."
        },
        "integration": {
          "emerging": "Describes a single step: ask the AI assistant to write the letter, then send it. No review or iteration.",
          "developing": "Mentions reviewing the AI's draft but does not yet indicate what specifically they would look for — the review step is present but undifferentiated.",
          "demonstrating": "Shows awareness that the AI needs the right source documents to produce a useful appeal and that the draft must be verified against the actual chart. May describe the input strategy, the review focus, or both. The key signal is that the person treats the appeal draft as something to verify against source material, not just polish."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if the AI-drafted appeal letter contains inaccurate clinical details. Focuses on getting a letter produced.",
          "developing": "Recognizes accuracy matters in an appeal but does not yet reason through why — that the appeal is a formal representation to an insurer and AI-generated clinical language might not match what's in the chart.",
          "demonstrating": "Understands the stakes: the appeal letter is a formal document the practice submits to a payer. If the AI assistant generates plausible-sounding clinical language that doesn't match the actual chart documentation, the appeal could misrepresent the practice's clinical position. This could lose the appeal and raise credibility questions with the payer."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "task_ai_fit_phi_awareness",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "Two tasks land on your desk the same morning. First, you need to draft a standard letter to a patient explaining that their claim was processed and they have a remaining balance. Second, you need to research whether a specific payer covers a newer orthopedic procedure and what their prior authorization requirements are. A coworker mentions that the AI assistant could help with both.",
      "prompt": "How do you think about using the AI assistant for each of these?",
      "internal_notes": "Tests whether the person can distinguish between two tasks that have different AI suitability profiles. The patient letter involves PHI (patient name, balance, claim details). The payer research is a general information task. Does the person recognize the difference, and does the difference change how they'd use the AI assistant? The dual-task structure is the diagnostic — a person with a good mental model handles them differently.",
      "rubric": {
        "orientation": {
          "emerging": "Approaches both tasks the same way — either uses the AI assistant for both without distinction or avoids it for both. Has not yet developed a model for why different tasks have different AI suitability based on the type of information involved.",
          "developing": "Senses the tasks are different but does not yet articulate why. May express vague caution about the patient letter without connecting it to the specific concern — that it involves patient-identifiable billing information.",
          "demonstrating": "Distinguishes clearly: the payer research is a strong fit for the AI assistant because it's general policy information with no patient data involved. The patient letter involves PHI — the patient's name, their specific balance, their claim details — which changes how the AI assistant should be used. May describe using the AI for a template but not entering the patient's actual information, or may flag that entering PHI into a general-purpose AI tool is a HIPAA concern."
        },
        "integration": {
          "emerging": "No differentiated approach. Uses or avoids the AI assistant identically for both tasks.",
          "developing": "Describes a different approach for each task but does not yet specify what the differentiation looks like in practice — the instinct to treat them differently is present but the method is not yet articulated.",
          "demonstrating": "Shows a differentiated approach shaped by the data sensitivity distinction — uses the AI assistant for the payer research and handles the patient letter differently in a way that accounts for the PHI concern. The response may describe specific techniques (template approach, anonymization, manual drafting) or may convey the distinction through how they frame each task. The key signal is that data sensitivity visibly shapes the workflow, not just the caution level."
        },
        "judgment": {
          "emerging": "Has not yet connected using the AI assistant for patient-specific billing information to HIPAA considerations.",
          "developing": "Recognizes that patient information requires caution but does not yet connect this to the specific regulatory framework or the billing clerk's specific accountability for PHI protection.",
          "demonstrating": "Connects this to the billing clerk's specific accountability: patient billing information is PHI, and entering it into a general-purpose AI tool creates a HIPAA exposure. The clerk is responsible for protecting that information in every interaction, including interactions with AI tools. The payer research carries no such risk, which is why the two tasks warrant different approaches."
        }
      }
    },
    {
      "id": "t1_q4",
      "sequence": 4,
      "angle": "confidence_calibration_fabrication",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": null,
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "You're working an unusual claim and ask the AI assistant to look up whether a specific payer covers a particular procedure under their current policy. The AI assistant gives you a detailed answer — it names the policy, cites what appears to be a specific coverage criterion, and states that prior authorization is required. The answer is well-organized and sounds authoritative.",
      "prompt": "How much do you trust this, and why?",
      "internal_notes": "Does the person understand that AI can generate authoritative-sounding information that may be fabricated? The AI assistant's response has all the markers of reliability — specific policy names, specific criteria, clear structure — but those markers don't mean the information came from the actual payer's current policy. This tests confidence calibration: does the person know that AI-generated text can sound authoritative without being accurate?",
      "rubric": {
        "orientation": {
          "emerging": "Takes the AI assistant's detailed, authoritative-sounding response at face value. Has not yet developed a model for how AI can generate specific-sounding policy details that may not correspond to actual payer policies.",
          "developing": "Feels uncertain and would probably double-check, but does not yet articulate why the AI assistant's specificity and confidence don't guarantee accuracy — the instinct is right but the mental model isn't yet clear.",
          "demonstrating": "Understands that the AI assistant generates text that matches the pattern of policy information without necessarily having access to the payer's current, authoritative policy documents. Recognizes that specific-sounding citations, policy names, and criteria can be fabricated or outdated. Knows that the more authoritative AI output sounds, the more important verification becomes — because confident errors are the hardest to catch."
        },
        "integration": {
          "emerging": "Uses the AI assistant's response directly to process the claim. No verification step.",
          "developing": "Mentions they would verify or not take the answer at face value, but does not yet indicate where or how they would verify — the skepticism is present but the verification method is not yet articulated.",
          "demonstrating": "Describes verifying against the actual source: checking the payer's portal, calling the payer, or consulting the coverage policy document directly. Uses the AI assistant's response as a starting point for research, not as the answer."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if they process a claim based on AI-generated payer information that turns out to be wrong.",
          "developing": "Recognizes that acting on bad information is risky but does not yet connect it to specific consequences for this claim.",
          "demonstrating": "Connects this to real outcomes: if the AI fabricated or got wrong the coverage criteria or authorization requirement, the claim could be submitted incorrectly — denied, delayed, or flagged. The patient could be told their procedure is covered when it isn't, or the practice could skip a required prior authorization. In billing, acting on AI-generated policy information without verification means the clerk owns whatever happens next."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "denial_management_opportunity",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": null,
      "human_function_activated": "Ideate",
      "decision_band": "judgment-embedded",
      "scenario": "A coworker on the billing team spends a lot of time on denial management — reading through denied claims, figuring out why each one was denied, and deciding which ones are worth appealing. They mention that it's the most tedious part of their week. You know the practice has access to the AI assistant that staff have been using for other tasks.",
      "prompt": "Do you see a way the AI assistant could help with any part of this, and what would you want to be careful about?",
      "internal_notes": "Tests whether the person can see opportunity — where AI could realistically help in a workflow they understand — while also recognizing what the AI assistant can't do or where it needs human oversight. The denial management workflow has components with different AI suitability: sorting/categorizing denials is a good fit, but deciding which to appeal requires judgment about the specific claim. A strong response sees both the opportunity and the boundary.",
      "rubric": {
        "orientation": {
          "emerging": "Either doesn't see how the AI assistant could help with denial management, or suggests it could handle the entire process end-to-end. Has not yet developed a model for which parts of a workflow are suitable for AI assistance and which require human judgment.",
          "developing": "Sees a general opportunity — 'AI could help with denials' — but does not yet think through which specific parts of the denial management workflow are a fit for AI and which aren't.",
          "demonstrating": "Distinguishes between components: the AI assistant could help with categorizing denial reasons, summarizing what went wrong on each claim, or identifying patterns across denials (sorting and synthesis). But deciding which denials to appeal requires judgment about the specific clinical and financial circumstances — that's not something the AI assistant can replace. Sees the workflow as having AI-suitable and human-judgment components."
        },
        "integration": {
          "emerging": "Suggestion is abstract — 'they could use AI for that' — with no description of where in the workflow the AI assistant would actually fit.",
          "developing": "Identifies a general area where AI could help but does not yet describe where in the workflow the AI assistant would fit or how human oversight would work alongside it.",
          "demonstrating": "Describes where the AI assistant fits in the existing workflow: it could read and categorize the denial reasons, surface patterns (e.g., 'five denials this week from the same payer for the same reason'), and help draft the appeal letters for the ones worth pursuing. The coworker's judgment stays in the loop for the decision of which to appeal and for reviewing any AI-drafted appeals."
        },
        "judgment": {
          "emerging": "Focuses only on time savings. Has not yet considered what could go wrong if the AI assistant mischaracterizes a denial reason or the coworker stops reading denials carefully.",
          "developing": "Mentions accuracy matters but does not yet connect it to specific consequences for the billing team.",
          "demonstrating": "Recognizes the risks specific to this workflow: if the AI assistant miscategorizes a denial reason, the team might skip a winnable appeal or pursue a losing one. If the coworker starts relying on AI summaries without reading the actual denial letters, they lose direct knowledge of what payers are flagging — which is the kind of pattern recognition that makes a billing clerk valuable. The time savings are real, but the oversight layer matters."
        }
      }
    }
  ],

  "scoring": {
    "method": "ai_rubric_match",
    "description": "Each response is scored by sending the user's answer, the scenario, and the full rubric to the AI scoring engine. The AI returns three construct levels and evidence notes.",
    "output_per_question": {
      "orientation_level": "emerging | developing | demonstrating",
      "integration_level": "emerging | developing | demonstrating",
      "judgment_level": "emerging | developing | demonstrating",
      "evidence_notes": "2–3 sentences explaining the scoring decisions across all three constructs"
    },
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is an insurance billing clerk at a 10-physician multi-specialty medical practice. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier1-questions-end -->

## Tier 2 Questions

<!-- tier2-questions-start -->
```json
{
  "meta": {
    "tier": 2,
    "label": "Contextualized Integration",
    "version": "0.4.0",
    "question_count": 5,
    "estimated_minutes": 12,
    "primary_construct": "integration",
    "secondary_constructs": ["orientation", "judgment"],
    "job_role_context": "Insurance billing clerk at a 10-physician multi-specialty medical practice",
    "dol_coverage": [
      "#1 Understand AI Principles + #5 Use AI Responsibly (Q3)",
      "#2 Explore AI Uses + #5 Use AI Responsibly (Q5)",
      "#2 Explore AI Uses (Q4)",
      "#3 Direct AI Effectively (Q2)",
      "#4 Evaluate AI Outputs (Q1)"
    ],
    "human_functions_activated": ["Understand", "Express", "Ideate", "Act"],
    "design_rationale": "Tier 2 pushes into the upper judgment-embedded and escalation-boundary decision bands specific to medical billing. Q1 tests verification of AI-generated EOB summaries before patient communication. Q2 tests directed drafting of a complex prior authorization from multiple sources. Q3 tests designing a workflow around PHI constraints in coordination-of-benefits work. Q4 tests proposing a realistic AI workflow for eligibility verification to the practice manager. Q5 tests using AI to prepare for escalating a coding pattern observation. Each scenario names the AI mechanism explicitly and requires process-level thinking to answer well.",
    "tier1_complementarity_notes": "Tier 1 established whether the person recognizes that AI code suggestions reflect pattern matching not clinical judgment (Q1), understands input-output relationships for appeal letters (Q2), distinguishes task-AI suitability based on PHI (Q3), calibrates trust in AI-generated payer research (Q4), and sees opportunity in denial management workflows (Q5). Tier 2 now asks them to work: verify AI summaries for patient communication (Q1), direct AI through a multi-source drafting task (Q2), design a workflow that accounts for PHI constraints (Q3), propose a realistic AI application at the workflow level (Q4), and use AI to prepare an escalation with specific evidence (Q5). The shift is from 'do you understand what AI is doing' to 'can you work with AI effectively in billing.'"
  },

  "user_facing": {
    "transition_text": "These scenarios are closer to the day-to-day work of your role. Same approach — tell us what you'd do and why, in a few sentences.",
    "response_placeholder": "2–4 sentences — just your honest take",
    "completion_text": "That's the second set. We'll use everything so far to shape the final section."
  },

  "questions": [
    {
      "id": "t2_q1",
      "sequence": 1,
      "angle": "eob_summary_verification_for_patient_call",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": null,
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "A patient calls confused about a complicated EOB they received after a cardiology visit. The visit involved coordination of benefits between two insurers, and the EOB shows a partial denial, an adjusted allowed amount, and a remaining patient responsibility. Before calling the patient back, you ask the AI assistant to summarize the EOB in plain language so you have a clear script for the conversation. The AI assistant produces a clean, readable summary that explains what was covered, what was denied, and what the patient owes.",
      "prompt": "How would you prepare for this call using the AI assistant's summary?",
      "internal_notes": "Tests whether the person has a process for verifying AI-generated financial summaries before using them in a patient conversation. Coordination of benefits involves specific figures and rules. The AI assistant's summary may read clearly but mischaracterize what the patient owes, why something was denied, or which insurer is responsible. A strong response describes checking the AI's summary against the actual EOB before using it as a script.",
      "rubric": {
        "orientation": {
          "emerging": "Takes the AI assistant's plain-language summary as an accurate translation of the EOB. Has not yet developed a model for how AI can produce a clear summary that mischaracterizes specific financial details — the summary sounds right but the numbers or reasons may not match the source document.",
          "developing": "Recognizes they should check the summary but does not yet articulate what specifically is at risk — that coordination of benefits involves precise dollar amounts, denial reasons, and payer responsibility determinations that the AI assistant may paraphrase incorrectly.",
          "demonstrating": "Understands the core risk: the AI assistant can produce a summary that reads clearly but mischaracterizes the financial details. Coordination of benefits, partial denials, and patient responsibility calculations involve specific rules and figures. Clarity and accuracy are not the same thing — a well-written summary can still contain wrong numbers or misattributed denial reasons."
        },
        "integration": {
          "emerging": "Uses the AI assistant's summary directly as the script for the patient conversation. No verification step described.",
          "developing": "Mentions checking or reviewing the summary but does not yet indicate which elements are most at risk of error in a coordination-of-benefits context — the verification intent is present but undifferentiated.",
          "demonstrating": "Shows a verification approach that targets the elements most likely to be wrong in this context — dollar amounts, denial reasons, payer responsibility, coordination of benefits details. The response need not list every check but should indicate the person knows which elements carry risk and would verify those against the source document before the patient call."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if the patient acts on inaccurate billing information from the AI-generated summary. Focuses on efficiency — getting through the call quickly.",
          "developing": "Recognizes that giving a patient wrong information is problematic, but reasons about it in general terms rather than connecting to this specific situation.",
          "demonstrating": "Connects this to the patient's specific situation: a patient confused about a complicated EOB is already stressed. Giving them a clear but inaccurate explanation — especially about what they owe or why something was denied — could lead them to pay the wrong amount, miss an appeal deadline, or lose trust in the practice. An AI-generated explanation that's wrong is worse than a complicated one, because the patient will act on it with false confidence."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "complex_prior_auth_direction",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": null,
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "An orthopedic patient needs a knee MRI, but their insurer requires prior authorization with a detailed clinical justification. The provider's notes mention knee pain, limited range of motion, and failure of conservative treatment, but the relevant information is scattered across three recent visit notes. You need to compile a prior authorization request that presents the clinical case clearly and meets the payer's documentation requirements. You decide to use the AI assistant to help draft the request.",
      "prompt": "Walk us through how you'd work with the AI assistant to put this together.",
      "internal_notes": "This is DOL #3 — directing AI effectively for a document that requires synthesizing specific clinical information from multiple sources. The scenario has enough complexity to require a described process: multiple source documents, a specific payer audience, and documentation requirements. A strong response describes what they'd give the AI assistant, how they'd structure the task, and what they'd verify in the output. Distinct from the Tier 1 appeal letter question (Q2), which tested the input-output principle — this tests the actual process of directing AI through a multi-source task.",
      "rubric": {
        "orientation": {
          "emerging": "Asks the AI assistant to 'write a prior auth for a knee MRI' without providing the clinical details. Has not yet connected the specificity required in a prior authorization to the need for specific inputs to the AI assistant.",
          "developing": "Recognizes they need to provide the clinical notes to the AI assistant, but does not yet think through the challenge — that the relevant information is scattered across three visits and the AI assistant needs to be directed to the right details, not just given all the notes.",
          "demonstrating": "Understands that the AI assistant needs to be directed with precision: it needs the relevant clinical findings from each visit, the payer's specific documentation requirements, and guidance on what the prior authorization needs to demonstrate (medical necessity based on failed conservative treatment). Recognizes that dumping all three visit notes into the AI without direction may produce a letter that buries the key information."
        },
        "integration": {
          "emerging": "Single-step process: gives the AI assistant something and sends whatever it produces. No described approach to organizing the input or reviewing the output.",
          "developing": "Describes providing the clinical notes and reviewing the output, but does not yet indicate how they would organize the input across three visits or what specifically they would verify in the AI's draft.",
          "demonstrating": "Shows evidence of a directed approach — organizing clinical findings before giving them to the AI, reviewing the draft against actual chart documentation, or iterating on the output. The key signals are: (1) the person treats the input as something to organize, not just dump, and (2) the output as something to verify against source material. A concise response that conveys both of these signals earns full Integration credit."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if the AI-generated prior authorization contains clinical statements not supported by the actual documentation. Focuses on getting the letter done.",
          "developing": "Recognizes that accuracy matters but does not yet reason through the specific consequences of the AI overstating or fabricating clinical findings in an authorization request.",
          "demonstrating": "Understands that a prior authorization is a formal clinical representation to a payer. If the AI assistant generates clinical language that overstates symptoms or invents findings not in the chart, the practice is submitting a misleading authorization request. This could lead to approval that gets retroactively denied on audit, or flag the practice for inflated clinical justifications. A poorly constructed AI-drafted request could also delay the patient's MRI if it doesn't address the payer's actual criteria."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "phi_workflow_design",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "You're working on a batch of coordination-of-benefits claims — patients with two insurance plans where you need to determine the correct billing order and calculate patient responsibility. To work through these efficiently, you're considering using the AI assistant to help figure out the primary/secondary payer order and estimate what each patient owes. To do this accurately, the AI assistant would need details from both insurance plans for each patient — member IDs, group numbers, coverage dates, plan types, and the specific EOBs from the primary payer.",
      "prompt": "How do you think about using the AI assistant for this kind of work?",
      "internal_notes": "Tests whether the person can design a workflow that gets value from the AI assistant without exposing PHI. The Tier 1 task-fit question (Q3) tested whether the person recognizes the distinction between PHI and non-PHI tasks. This goes deeper: can the person design a process that accounts for the constraint? A strong response grapples with the tension between AI usefulness and PHI exposure rather than defaulting to all-or-nothing.",
      "rubric": {
        "orientation": {
          "emerging": "Enters all the insurance details into the AI assistant to get the calculations done. Has not yet developed a model for what happens to patient data entered into a general-purpose AI tool or why detailed insurance information constitutes PHI.",
          "developing": "Recognizes that entering patient insurance data into the AI assistant feels risky, but does not yet articulate the specific HIPAA concern or think through whether there's a way to use the AI for part of the task without exposing PHI.",
          "demonstrating": "Understands the core tension: coordination of benefits requires patient-specific data to calculate correctly, but entering member IDs, coverage details, and EOB information into a general-purpose AI tool is a HIPAA concern. Sees this as a structural characteristic of the task — the data the AI needs to be accurate is the same data that's protected."
        },
        "integration": {
          "emerging": "Either puts all the data into the AI assistant or avoids it entirely. No described process for getting partial value while managing the PHI constraint.",
          "developing": "Recognizes the PHI constraint shapes how the AI can be used, but does not yet describe a workable process for getting partial value from AI while keeping patient data protected.",
          "demonstrating": "Describes a workflow that separates what the AI assistant can help with from what requires manual handling: the AI could help with general coordination-of-benefits rules, payer-specific billing order logic, or template calculations using de-identified examples. The actual patient data — member IDs, specific EOB figures, coverage dates — stays out of the AI tool. The person does the patient-specific calculations manually or in the practice's secure billing system, using the AI's general guidance as a reference."
        },
        "judgment": {
          "emerging": "Has not yet connected entering patient insurance details into an AI tool to HIPAA consequences or patient impact. The goal is efficiency.",
          "developing": "Knows HIPAA is relevant but reasons about it as a general rule rather than thinking through what specifically is at risk with this particular data.",
          "demonstrating": "Weighs the specific risks: entering detailed insurance information for multiple patients and multiple payers creates a HIPAA exposure that could result in regulatory consequences for the practice. Also considers the patient dimension — these are people with health conditions whose insurance details reveal information about their care. A data exposure doesn't just trigger a compliance event; it affects real patients. The efficiency gain from using the AI assistant doesn't justify the risk of entering this volume of PHI."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "eligibility_verification_workflow_proposal",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": null,
      "human_function_activated": "Ideate",
      "decision_band": "escalation",
      "scenario": "Every morning, the front desk spends about 45 minutes verifying insurance eligibility for the day's scheduled patients — logging into each payer's portal individually, checking coverage status, noting changes, and flagging patients whose insurance has lapsed or changed. The practice manager asks the billing team if anyone has ideas for how the AI assistant could make this process more efficient. You know the AI assistant can't log into payer portals or access real-time insurance databases, but you've seen it handle other organizational and research tasks well.",
      "prompt": "What would you propose, and what would you want the practice manager to understand about the limits?",
      "internal_notes": "Tests whether the person can envision a realistic AI application at the workflow level — not just 'AI could help' but a specific proposal that accounts for what the AI assistant can and can't do. The scenario gives the person a constraint (AI can't access payer portals) so the response reveals whether they can design around it. This is an escalation-boundary scenario: the person is proposing a process change to the practice manager. Distinct from Tier 1 Q5 (denial management opportunity), which tested recognition of where AI fits. This tests the ability to design a specific proposal.",
      "rubric": {
        "orientation": {
          "emerging": "Suggests the AI assistant could check eligibility directly or automate the portal logins. Has not yet internalized the constraint that AI tools generally can't access external secure systems or make authoritative coverage determinations.",
          "developing": "Understands the AI assistant can't replace the portal checks, but does not yet see where it realistically could help — the mental model for AI's capabilities stops at the constraint rather than working around it.",
          "demonstrating": "Has a clear model for what the AI assistant can and can't do in this context: it can't access payer portals or provide real-time eligibility data, but it can help with preparation, organization, and follow-up — the parts of the workflow that involve processing and structuring information rather than querying external systems."
        },
        "integration": {
          "emerging": "Proposal is abstract — 'AI could help with eligibility' — with no description of how it would fit into the existing morning workflow.",
          "developing": "Identifies a general direction for AI assistance but does not yet describe how it would connect to the existing morning workflow — the idea is present but not yet developed into a proposal the practice manager could evaluate.",
          "demonstrating": "Proposes a realistic application that works within the stated constraint — the AI can't access portals, but it can help with preparation, organization, or follow-up. The proposal accounts for what the AI can and can't do and connects to the existing workflow. The response need not describe every detail but should convey a workable idea that a practice manager could evaluate."
        },
        "judgment": {
          "emerging": "Focuses entirely on time savings. Has not yet considered what could go wrong if AI-generated information about patient eligibility is incorrect.",
          "developing": "Mentions that accuracy matters for eligibility but does not yet reason through the specific downstream consequences.",
          "demonstrating": "Thinks through the stakes: incorrect eligibility information could mean a patient arrives thinking they're covered when they're not, resulting in a surprise bill, a delayed procedure, or a denied claim after the fact. Recognizes that eligibility verification is a patient-care-readiness function, not just an administrative efficiency question. Proposes piloting the approach or building in a verification step before changing the workflow practice-wide."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "coding_pattern_escalation_preparation",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Act",
      "decision_band": "escalation",
      "scenario": "Over the past few weeks, you've noticed that the EHR's AI-suggested billing codes for one of the cardiologists seem to consistently trend toward higher-complexity E/M codes than what you'd expect for the visit types. The AI suggestions aren't obviously wrong — they're in the right code family — but the pattern feels off. You've been overriding some to lower codes based on your reading of the documentation, but you're not sure if you're right or if the AI's pattern-matching is picking up something in this provider's documentation style that you're missing. You want to bring this to the practice manager.",
      "prompt": "How would you use the AI assistant to prepare for that conversation, and what would you want to communicate?",
      "internal_notes": "Tests two integration skills: (1) using AI to prepare for an escalation — can the person describe how the AI assistant could help them organize their observations into a clear case? and (2) framing an ambiguous AI behavior pattern for a decision-maker. The uncertainty is deliberate: the person isn't sure who's right. A strong response describes using the AI to help analyze or organize the pattern, and frames the escalation around the uncertainty rather than asserting a conclusion. Distinct from Tier 1 Q1 (individual code evaluation) — this is a system-level pattern, and the person is bringing it to someone else.",
      "rubric": {
        "orientation": {
          "emerging": "Has not yet connected a systematic pattern in AI-suggested codes to something worth investigating beyond individual overrides. Continues handling each code independently without seeing the broader signal.",
          "developing": "Recognizes the pattern is concerning but does not yet see how the AI assistant could help them analyze or present it — treats the AI as the source of the problem rather than also a potential tool for understanding it.",
          "demonstrating": "Understands that a consistent pattern of AI suggestions trending toward higher-complexity codes could indicate a calibration issue with the AI, a documentation pattern from this specific provider, or both. Also sees that the AI assistant could help them organize and analyze the pattern — it's both the subject of the concern and a tool for investigating it."
        },
        "integration": {
          "emerging": "Plans to mention the concern informally without preparing specific evidence. No described use of the AI assistant to prepare.",
          "developing": "Considers preparing for the conversation but does not yet describe how the AI assistant could help them organize or present the pattern they've observed.",
          "demonstrating": "Describes using the AI assistant to help prepare the case — compiling examples, organizing the data, or structuring the presentation for the practice manager. The key signals are: (1) they see the AI as a tool for preparing the escalation, not just the source of the problem, and (2) they would bring structured evidence rather than a vague concern. May describe specific data organization strategies or focus on framing the conversation around the uncertainty."
        },
        "judgment": {
          "emerging": "Has not yet considered the compliance implications of a systematic coding pattern. Treats each override as an independent decision.",
          "developing": "Recognizes this might be a compliance concern but does not yet reason through the specific risks in both directions — overcoding and undercoding.",
          "demonstrating": "Frames the escalation around the dual risk: if the AI is wrong and the practice has been submitting higher-complexity codes, that's an upcoding pattern that could trigger a payer audit. If the clerk has been overriding to lower codes and the AI was actually correct based on the documentation, the practice may be undercoding and losing revenue. The uncertainty itself is the reason to escalate — the practice manager and coding team need to evaluate this, not just the billing clerk. Also recognizes that how they frame this shapes whether the practice manager treats it as urgent."
        }
      }
    }
  ],

  "scoring": {
    "method": "ai_rubric_match",
    "description": "Each response is scored against the per-question rubric. All three constructs are scored at three levels.",
    "output_per_question": {
      "orientation_level": "emerging | developing | demonstrating",
      "integration_level": "emerging | developing | demonstrating",
      "judgment_level": "emerging | developing | demonstrating",
      "evidence_notes": "2–3 sentences explaining the scoring decisions across all three constructs"
    },
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is an insurance billing clerk at a 10-physician multi-specialty medical practice. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
