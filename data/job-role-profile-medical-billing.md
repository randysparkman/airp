---
role_identifier: "medical-billing"
role_label: "Medical Billing Specialist"
role_description: "An insurance billing clerk at a 10-physician multi-specialty medical practice. The role handles claim submission, denial management, prior authorizations, coordination of benefits, and patient billing inquiries — with AI tools increasingly part of the workflow."
version: "0.4.1"
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

---

## Tier 1 Questions

<!-- tier1-questions-start -->
```json
{
  "meta": {
    "tier": 1,
    "label": "Baseline Orientation",
    "version": "0.4.1",
    "question_count": 5,
    "estimated_minutes": 10,
    "primary_construct": "orientation",
    "secondary_constructs": [
      "integration",
      "judgment"
    ],
    "job_role_context": "Medical Billing Specialist",
    "dol_coverage": [
      "#1 Understand AI Principles — Q1: AI-suggested billing codes and the gap between format-valid and clinically correct",
      "#2 Explore AI Uses — Q3: Recognizing where AI fits in researching payer-specific rules",
      "#3 Direct AI Effectively — Q4: How framing and context shape AI-drafted appeal letter quality",
      "#4 Evaluate AI Outputs — Q2: Assessing an AI-drafted patient billing letter for accuracy before sending",
      "#5 Use AI Responsibly — Q5: HIPAA and PHI exposure when using a general-purpose AI assistant"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are drawn from the billing clerk's highest-frequency, highest-accountability touchpoints: EHR code suggestions, patient-facing letters, payer rule research, appeal letter drafting, and PHI handling. The set progresses from recognizing what AI is doing (Q1), to evaluating what it produces (Q2), to seeing where it fits (Q3), to shaping what it generates (Q4), to recognizing when its use itself is the risk (Q5). Together, the questions cover the full DOL territory while staying anchored in routine and lower-judgment-embedded decisions — the daily choices this person owns without a second set of eyes. Every scenario is illegible without the specific vocabulary and accountability pattern of medical billing."
  },
  "user_facing": {
    "intro_text": "You'll see a series of short scenarios related to your work. For each one, tell us what you'd do and why — in a few sentences. There are no right answers and no trick questions. We're interested in your thinking, not your writing. Aim for the kind of answer you'd give a coworker who asked for your honest take.",
    "response_placeholder": "2–4 sentences — just your honest take",
    "completion_text": "That's the first set. Thanks for your responses — we'll use these to shape the next section."
  },
  "questions": [
    {
      "id": "t1_q1",
      "sequence": 1,
      "angle": "capability_boundaries",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "Your EHR system suggests a CPT code for a cardiology visit based on the physician's clinical note. The code looks right — it matches the visit type and the format is correct. You've processed dozens of claims this week and the queue is backing up.",
      "prompt": "What goes through your mind before you accept or submit that code?",
      "internal_notes": "Listening for whether the person understands that AI-suggested codes can be format-valid and contextually plausible while still being clinically incorrect — and that 'looks right' is not the same as 'is right.' The core signal is whether they recognize that the EHR's AI is pattern-matching on documentation, not verifying medical necessity or clinical accuracy.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between a code that looks correct and a code that is correct. Treats the EHR suggestion as a reliable output that needs no further scrutiny if the format matches — has not yet formed a mental model of what AI-suggested codes are actually doing or where they can fail.",
          "developing": "Recognizes that AI-suggested codes should be reviewed, but frames the concern primarily as a typo or formatting check rather than a clinical accuracy issue. Has not yet connected the risk to the gap between pattern-matching on documentation and verifying that the code is supported by the actual clinical encounter.",
          "demonstrating": "Understands that the EHR is surfacing a code based on patterns in the clinical note, not verifying medical necessity or clinical accuracy. Recognizes that a code can match the visit type and pass a format check while still being unsupported by the documentation — and that this person, not the EHR, owns that determination before the claim goes out."
        },
        "integration": {
          "emerging": "Does not yet describe any step they would take before accepting the suggestion — treats it as a queue-clearing action.",
          "developing": "Mentions reviewing the code but does not describe what that review would actually involve or what they would be looking at.",
          "demonstrating": "Describes a concrete check — such as comparing the suggested code against the clinical note, verifying the documented complexity level, or confirming the service matches the specialty — before accepting the suggestion."
        },
        "judgment": {
          "emerging": "Does not yet consider the consequences of submitting an unsupported code. Treats the backing-up queue as the primary pressure without recognizing that speed and accuracy are in tension here.",
          "developing": "Acknowledges that getting the code wrong could be a problem but does not connect it to specific consequences — such as a payer audit or a compliance review — that this role's error pattern produces.",
          "demonstrating": "Recognizes that submitting an AI-suggested code without verifying clinical support could trigger a payer audit or flag a compliance issue, and that this is a discrete traceable event — not just a billing inefficiency. Treats the queue pressure as real but secondary to getting the code right."
        }
      }
    },
    {
      "id": "t1_q2",
      "sequence": 2,
      "angle": "fabrication_detection",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Express",
      "decision_band": "routine",
      "scenario": "You used the AI assistant to help draft a letter explaining a patient's balance after their insurance paid. The letter reads clearly and sounds professional. It includes a specific dollar amount for the patient's responsibility and a reference to what the insurer allowed.",
      "prompt": "Before you send this letter, what would you actually check, and why?",
      "internal_notes": "Listening for whether the person understands that AI can generate specific, confident-sounding figures — dollar amounts, coverage references — that may not match the actual EOB or account record. The core signal is whether they recognize that fluency and professional tone are not evidence of factual accuracy, and that a patient-facing letter with incorrect balance information produces a specific, traceable harm.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that the AI-generated dollar amounts and coverage references need to be verified against the actual EOB or account record. Treats a well-written letter as a reliable output — has not yet developed a mental model that distinguishes AI fluency from AI accuracy.",
          "developing": "Recognizes that the letter should be reviewed before sending but frames it as a general proofreading task — checking for tone or typos — rather than specifically verifying the financial figures against source records.",
          "demonstrating": "Understands that AI can generate specific dollar amounts and coverage language that sounds correct but may not match the patient's actual account, the EOB, or what the insurer allowed. Knows the verification task is factual, not stylistic — checking the numbers against the real record, not just reading the letter for clarity."
        },
        "integration": {
          "emerging": "Does not yet describe any verification step — treats the letter as ready to send once it reads well.",
          "developing": "Mentions checking the letter but does not describe what source — EOB, account balance, payment posting — they would verify against.",
          "demonstrating": "Describes comparing the specific figures in the letter against the actual EOB, ERA, or account record before sending — identifying what exactly needs to be confirmed and where that information lives."
        },
        "judgment": {
          "emerging": "Does not yet consider what happens if the patient receives a letter with an incorrect balance. Has not yet connected an AI drafting error to a patient-facing consequence.",
          "developing": "Recognizes that an incorrect balance letter would be a problem but frames it primarily as an inconvenience to fix rather than a trust and financial hardship issue for a patient who is already dealing with a health situation.",
          "demonstrating": "Recognizes that a patient who receives an incorrect bill — especially one with specific, confident-sounding figures — loses trust in the practice at a vulnerable moment, and that correcting it after the fact is harder than catching it before sending. Treats this as a patient experience and compliance risk, not just an administrative error."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "opportunity_recognition",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Ideate",
      "decision_band": "routine",
      "scenario": "A prior authorization request is being denied by a commercial payer for a procedure your orthopedics team ordered. You're not familiar with this particular payer's specific criteria for authorizing this type of procedure, and looking it up in their portal is going to take a while.",
      "prompt": "Does AI have a useful role in this situation, and what would you want to keep in mind if you used it?",
      "internal_notes": "Listening for whether the person can recognize a legitimate AI use case — researching payer-specific coverage criteria — while also articulating why the output would need to be verified. The core signal is whether they understand that AI is useful for orientation and research but not as a source of authoritative payer policy, and that acting on stale or hallucinated policy language could lead to an incorrect authorization submission.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet see AI as having a role in payer research, or alternatively sees it as a reliable authority on payer coverage criteria. Has not yet developed a mental model that distinguishes AI as a useful research starting point from AI as a source of current, authoritative payer policy.",
          "developing": "Recognizes that AI could help with payer research but has not yet articulated why the output would need verification — for example, that payer coverage criteria change, that AI may not have current policy information, or that acting on incorrect criteria could result in a failed authorization.",
          "demonstrating": "Understands that AI can be useful for getting oriented to a payer's general coverage logic or criteria — narrowing down what to look for — but recognizes that payer policies change and AI outputs on coverage criteria need to be confirmed against the payer's current portal or policy documents before being used in an actual authorization request."
        },
        "integration": {
          "emerging": "Does not yet describe how AI would fit into the research task — either dismisses it or would use it without any follow-up verification.",
          "developing": "Would use AI to research the criteria but doesn't describe how they'd confirm what it returns or what they'd do with the information.",
          "demonstrating": "Describes using AI to get oriented — understanding what criteria are typically relevant for this procedure — and then verifying against the payer portal or policy document before building the authorization request."
        },
        "judgment": {
          "emerging": "Does not yet consider what happens if the coverage criteria the AI surfaces are outdated or incorrect and the authorization is submitted on that basis.",
          "developing": "Recognizes that AI information might not be current but treats this as a general caveat rather than connecting it to the specific consequence of a failed or delayed prior authorization that could affect patient care.",
          "demonstrating": "Recognizes that a prior authorization built on incorrect or outdated coverage criteria could be denied, delay the procedure, and affect the patient — and that this is the kind of discrete, traceable outcome that makes verification before acting non-negotiable, not optional."
        }
      }
    },
    {
      "id": "t1_q4",
      "sequence": 4,
      "angle": "input_output_relationship",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "You need to write an appeal letter for a denied claim — the payer rejected it citing lack of medical necessity for a cardiology visit. You ask the AI assistant to draft the letter. The first draft it produces is generic: it argues that the visit was medically necessary without referencing anything specific to this patient's situation.",
      "prompt": "Why did the letter come out that way, and what would you do differently?",
      "internal_notes": "Listening for whether the person understands that AI output quality is directly tied to what they put in — that a generic prompt produces a generic letter, and that an appeal letter that doesn't reference the patient's specific clinical picture is not just weak writing, it's a document that misrepresents or omits the actual basis for the appeal. The core signal is whether they understand the input-output relationship, not just that the letter 'needs more detail.'",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet connect the generic output to what was (or wasn't) provided as input. Treats the poor letter as a failure of the AI tool itself rather than a consequence of what was asked — has not yet developed a mental model of how context and specificity in a prompt shape what the AI can produce.",
          "developing": "Recognizes that the letter needs to be more specific and that adding detail would help, but frames it as editing the output or 'giving the AI more to work with' rather than articulating the underlying principle: that the AI has no access to the patient's chart, the documented findings, or the payer's specific denial reasoning, and when asked to draft a medical necessity appeal without those inputs, it produces a statistical average of appeal-letter language because that is the only material it had.",
          "demonstrating": "Recognizes that the generic, in-the-abstract letter is the expected output for a context-free appeal request, because the AI has access only to what's in the prompt and will produce a statistical average of the requested genre — 'medical necessity appeal' — when no patient-specific clinical details are supplied. Understands that the specific diagnosis, documented findings, and the payer's stated denial reason are not polish on top of an AI draft; they are the inputs that make the draft possible to produce as something other than boilerplate. Providing them upfront is what distinguishes an appeal letter that argues this patient's case from one that argues appeals in general."
        },
        "integration": {
          "emerging": "Does not yet describe what they would change about how they approached the task — either accepts the generic draft or asks the AI to 'make it better' without specifying what to add.",
          "developing": "Would add more detail to the prompt or the draft but doesn't specify what information — the clinical documentation, the denial reason, the specific necessity argument — would need to be included.",
          "demonstrating": "Describes going back to the clinical note and denial reason first, then providing the AI with the specific details — diagnosis, documented findings, the payer's stated reason for denial — before asking for a revised draft, so the output can actually address the specific clinical necessity argument this appeal requires."
        },
        "judgment": {
          "emerging": "Does not yet consider the consequences of submitting a generic appeal letter — treats it as a style problem rather than a credibility and compliance risk.",
          "developing": "Recognizes that a weak appeal letter is less likely to succeed but doesn't connect this to the specific consequence of an appeal that mischaracterizes or omits clinical documentation undermining the practice's position with the payer.",
          "demonstrating": "Recognizes that an appeal letter is the practice's formal position to the insurer — one that must accurately represent the clinical record. A generic letter that doesn't reference the documented clinical necessity doesn't just fail on its merits; it can undermine the practice's credibility with that payer on future appeals if it appears the practice submits unsupported or boilerplate arguments."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "data_sensitivity_and_accountability",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Act",
      "decision_band": "routine",
      "scenario": "You're trying to resolve a confusing EOB for a patient — the insurer's payment doesn't match what you expected, and you want to understand how the coordination of benefits was applied. You consider pasting the EOB details into the AI assistant to get help interpreting it. The EOB includes the patient's name, date of birth, and the procedures billed.",
      "prompt": "What do you think about before deciding whether — or how — to use AI here?",
      "internal_notes": "Listening for whether the person recognizes that pasting PHI into a general-purpose AI assistant creates a HIPAA exposure risk regardless of whether the tool is helpful for the task. The core signal is whether they understand that the question isn't just 'will AI help me understand this?' but 'what happens to this patient's information when I send it to an external AI system?' They should recognize the distinction between using AI for the analytical task and protecting PHI in how they do it.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that pasting patient information into a general-purpose AI assistant raises a HIPAA concern. Evaluates the action purely on whether AI would be helpful for interpreting the EOB — has not yet formed a mental model that accounts for what AI systems do with the data they receive.",
          "developing": "Has some awareness that patient information and AI tools don't mix without thinking, but frames the concern vaguely — 'probably shouldn't paste patient info' — without connecting it to HIPAA, PHI, or the specific risk that a general-purpose AI assistant may store, log, or transmit data in ways that aren't covered under the practice's compliance agreements.",
          "demonstrating": "Understands that a general-purpose AI assistant is not a HIPAA-covered environment, and that pasting an EOB with a patient's name, date of birth, and procedure codes constitutes sending PHI to an external system — regardless of whether the analytical help would be valuable. Recognizes that the question of whether AI can help with the task is separate from the question of whether it's safe and permissible to send patient data to get that help."
        },
        "integration": {
          "emerging": "Does not yet describe any alternative approach — either pastes the information without concern or abandons the AI assistance entirely without considering a middle path.",
          "developing": "Recognizes the concern but doesn't describe what they'd actually do — for example, removing or replacing the patient identifiers before using AI for the analytical question, or escalating to confirm what tools are approved for PHI.",
          "demonstrating": "Describes a concrete approach — such as removing the patient identifiers and working with de-identified information to get help interpreting the coordination of benefits logic, or checking with the practice manager about which AI tools are approved for use with patient information before proceeding."
        },
        "judgment": {
          "emerging": "Does not yet consider the regulatory consequences of accidentally exposing PHI through an AI tool — treats HIPAA as background context rather than a live constraint on this specific action.",
          "developing": "Recognizes that HIPAA applies here but treats the risk in abstract terms without connecting it to the specific consequence: an accidental HIPAA violation — even through a well-intentioned use of AI — carries regulatory consequences for the practice, not just an internal policy issue.",
          "demonstrating": "Recognizes that an accidental PHI exposure through a general-purpose AI assistant is a HIPAA event with regulatory consequences — not just a policy infraction — and that this is exactly the kind of discrete, traceable harm that this role's accountability pattern produces. Treats the patient's information as something they are accountable for protecting in every tool they use, not just the tools formally designated as clinical."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is Medical Billing Specialist in a 10-physician multi-specialty medical practice. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier1-questions-end -->

---

## Tier 2 Questions

<!-- tier2-questions-start -->
```json
{
  "meta": {
    "tier": 2,
    "label": "Contextualized Integration",
    "version": "0.4.1",
    "question_count": 5,
    "estimated_minutes": 12,
    "primary_construct": "integration",
    "secondary_constructs": [
      "orientation",
      "judgment"
    ],
    "job_role_context": "Medical Billing Specialist",
    "dol_coverage": [
      "#1 Understand AI Principles — Q3: Understanding what AI-suggested coding patterns can and cannot tell you about systemic billing drift, and what the model's limitations mean for how you act on the signal",
      "#2 Explore AI Uses — Q1: Envisioning how AI could be built into the eligibility verification workflow before high-cost procedures, including where it helps and where a human step remains necessary",
      "#3 Direct AI Effectively — Q2: Constructing a prompt for an AI-drafted appeal letter for a complex coordination-of-benefits denial, including what clinical and payer-specific context to provide and how to review the result",
      "#4 Evaluate AI Outputs — Q4: Assessing an AI-drafted response to an upset patient disputing a balance, evaluating it for factual accuracy, tone, and whether it accurately represents the account before sending",
      "#5 Use AI Responsibly — Q5: Deciding how to use AI to help prepare a write-off escalation memo for the practice manager without creating a PHI or compliance exposure, and ensuring the framing is accurate"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are drawn from the upper tier of the billing clerk's judgment-embedded decisions — situations where the person's workflow choices, not just their awareness, shape downstream outcomes. Q1 targets workflow design around eligibility (Act), Q2 targets directed drafting of a high-stakes appeal (Express), Q3 targets pattern recognition and escalation framing using AI-surfaced data (Understand), Q4 targets evaluation of a sensitive patient-facing communication (Express/Judgment), and Q5 targets responsible AI use when preparing a compliance-adjacent escalation (Act/Responsible Use). Together, the scenarios test both sides of Integration — seeing where AI fits and working with it effectively — across the full range of consequential decisions this person owns or shapes.",
    "tier1_complementarity_notes": "Tier 1 established that this person can recognize what AI is doing, spot fabricated or generic outputs, identify legitimate use cases, understand the input-output relationship at a basic level, and apply HIPAA awareness to an obvious PHI scenario. Tier 2 moves from recognition to execution: instead of asking whether the person sees the issue, it asks whether they can build and describe an actual workflow. The two tiers work together as a coherent sequence — Tier 1 surfaces the mental model, Tier 2 tests whether that model translates into process. Tier 1 covered all four human functions, so Tier 2 activates them in deeper, more workflow-embedded ways: not just identifying that AI can help with research (Ideate, T1 Q3), but designing a verification workflow around it (Act, T2 Q1); not just knowing that input quality shapes output (Express, T1 Q4), but constructing the actual prompt with the right clinical materials (Express, T2 Q2)."
  },
  "user_facing": {
    "transition_text": "Now we're going to shift to some scenarios that are closer to the day-to-day work of your role. Same approach — tell us what you'd do and why, in a few sentences.",
    "response_placeholder": "2–4 sentences — just your honest take",
    "completion_text": "That's the second set. We'll use everything so far to shape the final section."
  },
  "questions": [
    {
      "id": "t2_q1",
      "sequence": 1,
      "angle": "workflow_opportunity",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "Your practice is seeing a pattern where patients scheduled for high-cost orthopedic procedures — MRIs, cortisone injections, surgical consultations — occasionally arrive without verified insurance coverage, leading to claim denials or surprise bills that upset patients and create rework. The practice manager has asked you to think about whether AI could be part of a better eligibility verification workflow before those appointments. You have access to a general-purpose AI assistant and your EHR, which can pull insurance information for scheduled patients.",
      "prompt": "How would you envision AI fitting into an eligibility verification workflow for these patients, and what would still need to be a human step?",
      "internal_notes": "Tests opportunity recognition at the workflow design level — can this person describe a concrete AI-assisted process for a multi-step administrative task, including where AI adds value and where a human judgment call or verification step is irreplaceable? A strong response identifies specific workflow moments where AI helps (flagging patients for review, pulling eligibility data, summarizing coverage) and specific moments where the person must confirm the output before acting (actual verification against payer portal, communicating with patient about out-of-pocket costs).",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet see AI as having a practical role in eligibility verification, or alternatively would let AI handle the full workflow without identifying where it can fail — has not yet formed a model that distinguishes AI as a workflow accelerator from AI as an authoritative source of current coverage data.",
          "developing": "Sees AI as potentially useful in the workflow but has not yet articulated the specific gap between AI-surfaced eligibility information and verified, current coverage — for example, that AI can help organize or flag but cannot confirm real-time payer status with the authority of a portal check.",
          "demonstrating": "Understands that AI can contribute to eligibility verification by helping organize, flag, or summarize coverage information for scheduled patients, but that insurance eligibility data changes — deductibles reset, coverage lapses, plans change — and AI-surfaced information needs to be confirmed against the payer portal before any coverage is communicated to a patient or relied on for a claim."
        },
        "integration": {
          "emerging": "Does not yet describe a workflow — either dismisses AI's role or says AI could 'check eligibility' without describing any sequence of steps, what AI would receive, what it would produce, or what happens next.",
          "developing": "Describes some role for AI in the process — for example, flagging upcoming appointments or helping pull patient insurance information — but the workflow is incomplete: it does not describe what the human does with that output, how the verification step works, or what gets communicated to the patient.",
          "demonstrating": "Describes a sequenced workflow: for example, using AI to identify which scheduled patients have upcoming high-cost procedures and flag them for review, using the EHR or AI to surface their current coverage information, then personally verifying eligibility against the payer portal before the appointment, and — if there's a coverage gap or patient responsibility question — contacting the patient in advance rather than at the point of service. Identifies that the human step is the verification against current payer data and the patient communication, not the initial flagging or information-gathering."
        },
        "judgment": {
          "emerging": "Does not yet connect the workflow design to the consequences it's meant to prevent — treats this as an efficiency question without accounting for the patient trust, claim denial, and rework consequences that motivated the question.",
          "developing": "Recognizes that the workflow is meant to prevent surprise bills and denials but does not describe how the stakes shape specific workflow choices — for example, why the human verification step is non-negotiable for high-cost procedures specifically, or why patient communication before the visit matters more than after.",
          "demonstrating": "Describes a workflow where the stakes — claim denials, patient surprise bills, and trust damage — visibly shape the design choices: the verification step is not skipped even when AI surfaces coverage information, and the workflow prioritizes early patient communication because a patient who arrives expecting coverage and finds out otherwise at the desk is a harder situation to recover from than one who received a heads-up. Recognizes that for high-cost orthopedic procedures, the consequence of getting this wrong is large enough that AI is a starting point, not a final answer."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "directed_drafting",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "A claim for a cardiology patient was denied because the payer applied coordination of benefits incorrectly — the patient has both a commercial primary insurer and Medicare as secondary, and the payer processed them in the wrong order, resulting in an underpayment of $340. You have the EOB from both payers, the original claim, and the patient's coverage information. You need to draft an appeal letter that clearly explains the coordination of benefits error and requests reprocessing. You plan to use the AI assistant to help draft it.",
      "prompt": "Walk us through how you'd approach using the AI to draft this letter — what you'd give it, what you'd look for in the draft, and what you'd do before sending it.",
      "internal_notes": "Tests directed drafting at the upper end of judgment-embedded decisions — this is a technically specific appeal that requires providing the right clinical and billing materials, not just asking for a generic appeal. A strong response describes what inputs the person would give the AI (both EOBs, the original claim, the specific COB error), what they'd look for in the output (accurate representation of the payment sequence, correct payer references, accurate dollar figures), and what final checks they'd do before it goes to the payer. Contrast with T1 Q4, which tested recognition of why a generic draft was produced. T2 Q2 tests whether the person can construct the effective prompt and review process in the first place.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet connect the quality of the AI draft to the specificity of what they provide — would ask for an appeal letter without supplying the COB-specific details, expecting AI to produce a technically accurate draft from a general request.",
          "developing": "Recognizes that the AI needs information to produce a useful draft but has not yet identified what specific materials — both EOBs, the claim, the coverage order — are needed to give the AI enough context to address a coordination of benefits error specifically, rather than a generic payment dispute.",
          "demonstrating": "Understands that an appeal letter for a COB error requires the AI to work from specific documents — both EOBs showing the payment sequence, the original claim, and the coverage information — and that without those inputs, the AI will produce a letter that argues correctly in structure but inaccurately or vaguely on the substance of what went wrong and what the correct reprocessing should produce."
        },
        "integration": {
          "emerging": "Does not yet describe what they would give the AI, what the draft should contain, or how they would review it — treats 'ask AI to draft the appeal' as a single undifferentiated step.",
          "developing": "Describes providing some context to the AI and reviewing the draft, but the inputs are vague (e.g., 'give it the claim information') and the review step does not specify what they would verify — the COB sequence, the dollar amounts, the payer references — against the source documents.",
          "demonstrating": "Describes a sequenced approach: pulling both EOBs and the original claim first, then giving the AI a prompt that includes the specific COB error (primary/secondary order applied incorrectly), the relevant payment amounts from each EOB, and what outcome is being requested (reprocessing with corrected COB application). Describes reviewing the draft to confirm that the COB sequence is accurately represented, the dollar figures match the EOBs, and the tone is professional and factual before sending. May also mention editing rather than just reviewing, since the draft is a starting point."
        },
        "judgment": {
          "emerging": "Does not yet consider that this letter represents the practice's formal position to the insurer and that an appeal with incorrect figures or a misdescribed error could make the situation harder to resolve — treats it as a drafting task without accounting for its downstream weight.",
          "developing": "Recognizes that the letter needs to be accurate but treats accuracy primarily as a quality concern rather than connecting it to the specific consequence: an appeal letter that inaccurately describes the COB error gives the payer grounds to deny again, and one that cites wrong dollar amounts may require a correction and restart the timeline.",
          "demonstrating": "Describes an approach where the stakes — this is a formal payer communication that either correctly characterizes a specific technical error or doesn't — shape the review step: the person verifies the COB sequence against both EOBs before sending, confirms the dollar amounts match, and ensures the language is accurate enough that it doesn't inadvertently misrepresent the error or weaken the reprocessing request. Recognizes that the goal is not just a professional-sounding letter but one that accurately and specifically describes what went wrong and what correct processing looks like."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "pattern_synthesis_and_escalation",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Understand",
      "decision_band": "escalation",
      "scenario": "Over the past month, you've noticed that the EHR's AI-suggested billing codes for internal medicine visits have been trending toward higher-complexity E&M codes — 99214s and 99215s — more frequently than you remember seeing before. You're not sure if this reflects genuinely more complex patients, a documentation shift by the physicians, or a drift in how the AI is generating suggestions. The practice manager has asked you to put together a short summary of what you're seeing before they decide whether to bring in the coding team for a review.",
      "prompt": "How would you use AI to help you pull together that summary, and what would you want to make sure you get right before it goes to the practice manager?",
      "internal_notes": "Tests synthesis and escalation framing — this person is being asked to use AI to help characterize a pattern that has compliance implications, then shape how that pattern is presented to decision-makers. A strong response describes using AI to help organize or summarize billing data (not interpret compliance risk), being explicit that the summary should describe what's observed without overstating a conclusion, and recognizing that how this is framed will shape whether the practice manager escalates appropriately. The person should recognize that this is an escalation-band situation where their framing matters — and that AI can help with the synthesis task but cannot make the compliance call.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between AI as a tool for organizing and summarizing observed data and AI as a source of conclusions about whether a coding pattern is appropriate or compliant — would either not use AI or would use it to generate a compliance assessment rather than a factual summary.",
          "developing": "Recognizes AI can help with the synthesis task but has not yet articulated why the summary must describe what's observed rather than draw conclusions — for example, that framing the pattern as 'possible upcoding' versus 'a trend worth reviewing' carries different implications and that AI cannot make that determination accurately.",
          "demonstrating": "Understands that AI can help organize and summarize claim data — pulling frequency counts, identifying the trend line, helping draft a clear description — but that AI cannot determine whether the coding pattern reflects legitimate complexity or a problematic drift, and that the summary going to the practice manager must accurately represent what's observed without overstepping into a compliance conclusion this person isn't qualified to make."
        },
        "integration": {
          "emerging": "Does not yet describe how they would use AI in this task — either skips AI entirely or asks it to 'analyze the billing data' without describing what inputs they'd provide, what they'd ask for, or how they'd use the output.",
          "developing": "Describes using AI to help summarize or organize the data but the process is incomplete — for example, doesn't describe what data they'd feed it, what they'd ask it to produce, or how they'd review the summary before it goes to the practice manager.",
          "demonstrating": "Describes a concrete process: pulling the relevant claim data for the period (E&M code distribution for internal medicine visits, period-over-period comparison), using AI to help organize that data into a readable summary — frequency, trend direction, timeframe — and then reviewing the AI-generated summary to confirm the numbers are accurate and the language describes what's observed without making a compliance determination. May describe framing the summary explicitly as 'here is what I'm seeing, I want your guidance on whether to bring in the coding team' rather than 'I think there may be a billing problem.'"
        },
        "judgment": {
          "emerging": "Does not yet recognize that how this summary is framed shapes what happens next — treats it as a reporting task without accounting for the fact that a summary that overstates or understates the pattern could lead to under-escalation or a premature compliance flag.",
          "developing": "Recognizes that the summary needs to be accurate but frames this primarily as a quality concern rather than connecting it to the specific consequence: a summary that frames the pattern as a compliance problem before the coding team has reviewed it could set off a disproportionate response, while one that understates it could result in the practice manager not escalating when they should.",
          "demonstrating": "Describes a review step shaped by the stakes of the escalation: verifies that the numbers in the summary accurately reflect the claim data, ensures the language describes what's observed without asserting a compliance conclusion, and recognizes that the purpose of this summary is to give the practice manager enough accurate information to decide whether to escalate — not to reach that conclusion for them. Understands that their framing at the escalation boundary shapes what the practice manager does next, which has real compliance and audit implications if the pattern turns out to be a real problem."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "patient_communication_evaluation",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "A patient called in upset about a bill — they believe their insurance should have covered more of a family medicine visit and they're questioning why their patient responsibility is as high as it is. You asked the AI assistant to draft a response letter that explains the EOB, the allowed amount, and why their patient responsibility came to $87 after their deductible was applied. The AI produced a draft that sounds empathetic and uses the right terminology. Before you finalize and send it, you want to make sure it's actually right.",
      "prompt": "Walk us through how you'd evaluate this draft before it goes to the patient — what specifically would you check, and how would you decide whether it's ready to send or needs to be rewritten?",
      "internal_notes": "Tests output evaluation with higher stakes and richer context than T1 Q2. Where T1 Q2 asked whether the person would check the letter and why, T2 Q4 asks them to describe the actual evaluation process — what they check, against what sources, and how they decide whether to send, edit, or rewrite. A strong response describes checking the $87 figure against the actual EOB and patient account, verifying that the deductible application is described correctly, assessing whether the tone accurately reflects the empathy the patient needs, and considering whether the letter would leave the patient with a clear understanding or more questions.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that a letter that 'sounds empathetic and uses the right terminology' can still contain factually incorrect dollar amounts or misdescribed coverage logic — treats professional tone as a signal of factual accuracy and has not yet developed a model that separates these.",
          "developing": "Recognizes the letter should be verified but has not yet articulated the distinction between checking for tone and checking for factual accuracy against source records — would review the letter as a whole rather than targeting the specific figures and coverage logic that need to be confirmed.",
          "demonstrating": "Understands that empathetic tone and correct terminology are not evidence that the underlying figures are right — the $87 patient responsibility, the allowed amount, and the deductible application logic all need to be verified against the actual EOB and patient account record, independent of whether the letter reads well."
        },
        "integration": {
          "emerging": "Does not yet describe a concrete evaluation process — would read the letter for tone and flow without identifying what source documents to check the figures against, or would send it because it 'sounds right.'",
          "developing": "Describes checking the letter against the EOB but the process is incomplete — for example, checks the total dollar amount but doesn't describe verifying the deductible application logic, confirming the allowed amount, or assessing whether the explanation would actually be clear to a patient who is already confused and upset.",
          "demonstrating": "Describes a structured check: pulls the actual EOB and patient account, verifies the $87 figure and the deductible application against the record, confirms the allowed amount is cited correctly, then reads the letter from the patient's perspective — would this explanation make sense to someone who doesn't know billing terminology? Would it address why they feel they were charged too much, or would it leave them with more questions? Describes editing for accuracy first, then for clarity, before sending."
        },
        "judgment": {
          "emerging": "Does not yet connect sending an inaccurate or confusing letter to the patient to the specific consequences — a patient who receives a wrong bill explanation loses trust, may dispute further, or may share a negative experience — and treats this as a quality review rather than a patient experience and trust decision.",
          "developing": "Recognizes the letter needs to be right for the patient's sake but frames this primarily as avoiding an error rather than accounting for the fact that this patient is already upset, already questioning the practice, and a letter that is technically correct but confusing or cold will not resolve the situation — and may make it worse.",
          "demonstrating": "Describes an evaluation process shaped by the patient's situation: this is someone who called in upset and is questioning whether they were billed correctly, so the letter needs to be factually right and clear enough that it resolves the confusion — not just accurate in the figures. Checks accuracy against the EOB and account record, and then reads the letter with the patient's question in mind: does this actually explain why their responsibility is $87 in terms they'll understand? Recognizes that a letter that's numerically correct but doesn't address why the patient thinks their coverage should have paid more will not close the issue."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "responsible_escalation_preparation",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Act",
      "decision_band": "escalation",
      "scenario": "The practice manager has asked you to prepare a short summary memo recommending a write-off for a $420 patient balance — the patient has been unresponsive for six months and the account has aged past the collection threshold. The memo needs to briefly document the billing history, the collection attempts, and your recommendation. You want to use the AI assistant to help you draft the memo efficiently. The patient's account includes their name, date of birth, insurance information, balance history, and the dates of prior contact attempts.",
      "prompt": "How would you go about using AI to help draft this memo while making sure you handle the patient information appropriately?",
      "internal_notes": "Tests responsible AI use at the escalation boundary — this is a scenario where AI can genuinely help with a legitimate drafting task, but the patient information involved creates a PHI handling question that must shape how the person uses the tool. Unlike T1 Q5, which tested recognition of the PHI risk in an ambiguous research scenario, T2 Q5 tests whether the person can design a concrete, responsible workflow: what they'd de-identify or omit, what they'd give the AI, and how they'd use the output. A strong response describes a specific approach to working with de-identified or abstracted information rather than simply saying they wouldn't use AI or would paste everything in.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that drafting a memo with AI assistance requires thinking about what patient information gets sent to the AI tool — treats the drafting task as separate from the PHI question, and either pastes the full account details without concern or avoids AI entirely without considering a middle path.",
          "developing": "Recognizes that pasting patient details into a general-purpose AI assistant raises a PHI concern but has not yet articulated a concrete approach — knows they 'shouldn't paste patient info' but hasn't thought through what they could give the AI that would still make the task useful (e.g., a de-identified account summary, a structural template, abstracted billing history).",
          "demonstrating": "Understands that a general-purpose AI assistant is not a HIPAA-covered environment and that drafting with it requires keeping PHI out of the prompt — but also understands that this doesn't mean AI can't help. The drafting task can be broken into a part AI helps with (structure, language, format of the memo) and a part the person handles directly (filling in the specific patient details and account history into the structure AI produced)."
        },
        "integration": {
          "emerging": "Does not yet describe a workflow that separates the AI-assisted drafting from the PHI-specific content — either avoids AI entirely or pastes the full account details without a responsible handling step.",
          "developing": "Describes a general approach to using AI for the memo but the PHI handling step is vague or incomplete — for example, 'I'd remove the patient's name' without describing what else they'd protect or how they'd use the AI-produced structure to complete the memo with the actual account details.",
          "demonstrating": "Describes a specific two-part approach: uses AI to produce a memo structure or template — the sections needed, the language for documenting collection attempts and recommending a write-off — without including the patient's identifying information in the prompt. Then takes that structure and fills in the actual account details (dates, balance, contact attempts) directly, keeping PHI out of the AI interaction entirely. May describe checking with the practice manager or confirming which AI tools are approved for use with billing documents if uncertain."
        },
        "judgment": {
          "emerging": "Does not yet connect the PHI handling decision to the regulatory and accountability consequences — treats this as a policy preference rather than recognizing that an accidental PHI exposure through a general-purpose AI tool during a routine drafting task is still a HIPAA event with the same regulatory consequences as a more obvious exposure.",
          "developing": "Recognizes the PHI risk but frames it primarily as an internal policy concern rather than accounting for the fact that this memo is being prepared as part of a formal write-off decision — a document that will be reviewed by the practice manager — and that the standards for accuracy and compliance apply to how it's prepared, not just what it says.",
          "demonstrating": "Describes a workflow where both the PHI handling and the accuracy of the memo shape the approach: keeps patient identifiers out of the AI interaction to protect PHI, but also reviews the AI-drafted structure to confirm it accurately captures what a write-off memo needs to document — billing history, collection attempts, recommendation — before filling in the account-specific details. Recognizes that this memo is going to the practice manager to authorize a financial decision, and that a memo that's PHI-safe but structurally incomplete or factually thin could result in the write-off not being approved or the documentation being insufficient if the account is ever reviewed."
        }
      }
    }
  ],
  "scoring": {
    "method": "ai_rubric_match",
    "description": "Each response is scored against the per-question rubric. All three constructs are scored at three levels. Integration is the primary signal for Tier 2 scoring.",
    "output_per_question": {
      "orientation_level": "emerging | developing | demonstrating",
      "integration_level": "emerging | developing | demonstrating",
      "judgment_level": "emerging | developing | demonstrating",
      "evidence_notes": "2–3 sentences explaining the scoring decisions across all three constructs"
    },
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is Medical Billing Specialist in a 10-physician multi-specialty medical practice. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. Integration is the primary construct for Tier 2 — weight it accordingly. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. Does the described process reflect the consequences of the specific scenario — not just awareness of stakes, but a workflow shaped by them? (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
