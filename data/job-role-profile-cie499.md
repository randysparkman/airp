---
role_identifier: "cie499"
role_label: "AI Fluency for Entry-Level Knowledge Work"
role_description: "A recently hired entry-level professional at a mid-size company — a junior analyst, project coordinator, marketing assistant, or operations associate. The kind of role where you're researching, writing, organizing data, and preparing deliverables for your manager — with AI tools built into the everyday workflow and an expectation that you'll use them thoughtfully."
version: "0.3.0"
---

# Job-Role-Profile: AI Fluency for Entry-Level Knowledge Work

## Organization Overview

This profile is designed for university students preparing to enter the workforce. Respondents are undergraduates across all majors — business, healthcare, communication, education, arts and sciences, and others — taking a course on AI fluency for the workplace. They may have little or no professional work experience. The assessment places them in the role of an entry-level employee at a mid-size company to measure how they think about AI in a realistic but accessible work context.

The fictional workplace is a mid-size company with approximately 150 employees. It operates in a professional services environment — the work product is documents, analysis, communications, and project deliverables. The company has adopted AI tools across several departments and expects employees at all levels to use them thoughtfully.

## The Role

Entry-level professional. This person was recently hired into a general business role — they might be a junior analyst, project coordinator, marketing assistant, or operations associate. They work under a manager who assigns tasks, reviews their work, and is available for questions. They interact with teammates daily and occasionally with clients or external stakeholders, but most of their outward-facing work is reviewed before it goes out.

Their day involves research, writing, data organization, presentations, and communication. They are expected to use the AI tools the company provides, but they are also expected to think about what they're doing — not just accept what the AI produces. They have enough autonomy to make day-to-day decisions about how to approach their tasks, but consequential decisions and external deliverables go through their manager.

## AI Tools Currently in Use

The company provides several AI tools and expects new employees to use them as part of their workflow:

- A general-purpose AI assistant (similar to ChatGPT) is available for drafting emails, summarizing documents, brainstorming ideas, and researching topics.
- AI-assisted features are built into everyday tools — smart compose in email, AI-generated meeting summaries, suggested formulas and charts in spreadsheets, and AI-powered search in the company's document management system.
- The marketing team uses AI for first drafts of client-facing materials that are reviewed and edited by a human before sending.
- Employees are encouraged to use AI to help with data analysis, report preparation, and presentation content.
- The company has a brief AI usage guideline that says: AI output must be reviewed before sharing externally, confidential client information should not be entered into public AI tools, and employees should be able to explain the basis for any work product they submit — even if AI helped produce it.

## Common Tasks

A typical week for this entry-level employee includes:

- Drafting internal emails and communications
- Researching topics and summarizing findings for their manager
- Preparing slides or sections of presentations for team meetings
- Organizing and cleaning data in spreadsheets
- Writing first drafts of reports, memos, or client-facing documents that will be reviewed before sending
- Scheduling and taking notes in meetings, sometimes with AI-generated summaries available
- Responding to routine requests from teammates or other departments
- Occasionally pulling together information from multiple sources into a single deliverable

## Decision Authority and Accountability

This person is early in their career and operates with structured autonomy. They make real decisions every day, but within a framework where most of their work is reviewed.

**Routine decisions they own outright:** How to organize their research. Which AI tool to use for a given task. How to structure a first draft. What to include in meeting notes. How to respond to a routine internal request. These are low-stakes, high-frequency decisions where the person is expected to use their judgment without asking their manager each time.

**Judgment-embedded decisions that carry weight:** How to summarize a complex topic — what to emphasize, what to leave out. Whether an AI-generated draft is good enough to send to their manager for review, or whether it needs more work first. How to present data in a way that's accurate and doesn't mislead. Whether a piece of AI-generated content captures the right tone for a client-facing deliverable. These decisions shape the quality of the team's output even though the person isn't the final reviewer.

**Decisions they escalate but shape:** Whether to include a particular finding in a client report. How to handle a request that involves confidential information. What to do when AI output contradicts what they've found from other sources. How to respond to an external stakeholder. The person brings these to their manager, but how they frame the issue — what they flag, what they recommend, what they've already checked — shapes the outcome.

When this person gets it wrong, the consequences are usually caught in review. A poorly summarized report gets rewritten. A misleading chart gets corrected before the client sees it. But errors that slip through review — an inaccurate claim in a document sent to a client, confidential information entered into a public AI tool, a data error that propagates into a decision — can damage credibility, violate policy, or create real problems for the team. The error pattern is primarily accumulative: repeated small errors erode trust in the person's reliability and slow the team down.

## What's High-Stakes Here

For an entry-level employee using AI tools, the stakes center on accuracy, confidentiality, and credibility:

- Work product that contains AI-generated errors and passes through review uncaught reflects poorly on both the employee and the team
- Confidential client or internal information entered into public AI tools is a policy violation with potential legal and reputational consequences
- Deliverables that misrepresent data — even unintentionally, even because the AI got it wrong — can undermine client trust and affect business decisions
- AI-generated content that uses the wrong tone, makes unsupported claims, or includes fabricated details can damage professional relationships
- An employee who can't explain the basis for their own work product — because they relied on AI without understanding what it produced — loses credibility quickly

The overall risk environment is moderate. Most errors are caught before they cause harm, but the person's professional reputation and growth trajectory are directly affected by how reliably and thoughtfully they use AI in their work.

## Language and Terminology

Common terms this person encounters: AI assistant, prompt, AI-generated content, smart compose, meeting summary, document management system, deliverable, client-facing, internal communication, stakeholder, data visualization, confidential information, review cycle, first draft, track changes, version control, project timeline, action items, KPIs, executive summary.

## What We Want to Know

When these students complete the assessment, we want to understand: Can they demonstrate readiness to work thoughtfully alongside AI tools in a professional setting? Do they understand what AI is actually doing — not just how to use it? Can they direct AI effectively to produce useful output? Do they know how to evaluate what AI gives them, and do they adjust their level of scrutiny based on what's at stake? Can they see where AI fits in a workflow and where it doesn't? Do they think about responsible use — confidentiality, accuracy, explainability — without being prompted?

This assessment should test across the full breadth of the DOL AI Literacy Framework: understanding AI principles, exploring AI uses, directing AI effectively, evaluating AI outputs, and using AI responsibly. The goal is a broad, balanced measurement — not deep expertise in any single area, but demonstrated readiness across all five.

---

---

## Tier 1 Questions

<!-- tier1-questions-start -->
```json
{
  "meta": {
    "tier": 1,
    "label": "Baseline Orientation",
    "version": "0.3.0",
    "question_count": 5,
    "estimated_minutes": 10,
    "primary_construct": "orientation",
    "secondary_constructs": [
      "integration",
      "judgment"
    ],
    "job_role_context": "Entry-level professional at a mid-size professional services company (university students assessed in this role)",
    "dol_coverage": [
      "#1 Understand AI Principles — Q1: tests whether the respondent understands that AI generates plausible-sounding content rather than retrieving verified facts",
      "#2 Explore AI Uses — Q3: tests whether the respondent can recognize where AI does and doesn't fit for a given task type",
      "#3 Direct AI Effectively — Q4: tests whether the respondent understands that input framing shapes output quality",
      "#4 Evaluate AI Outputs — Q2: tests whether the respondent can assess whether AI-generated output is accurate and fit for purpose",
      "#5 Use AI Responsibly — Q5: tests whether the respondent recognizes confidentiality boundaries and accountability requirements"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are built around the highest-frequency, lowest-autonomy decisions this entry-level employee makes every day — drafting, researching, summarizing, and communicating — which are the natural proving ground for AI orientation at Tier 1. The set moves from recognizing what AI is doing (Q1, Q2) to recognizing where and how to use it (Q3, Q4) to recognizing the limits of that use (Q5), creating a coherent arc from mental model to application to responsibility. Each scenario is grounded in tasks the profile explicitly names — meeting summaries, research briefs, client-facing drafts, prompting, and confidential data — so every question should feel immediately recognizable to this person's workday without requiring them to design a workflow or architect a solution."
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
      "angle": "fabrication_detection",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "Your manager asks you to put together a quick background summary on a competitor — who they are, what they do, and a few recent highlights. You use the company's AI assistant and it comes back with a confident, well-organized two-paragraph summary that includes specific facts: the company was founded in 2011, they launched a new product line last March, and they recently won a regional industry award. The summary reads cleanly and looks ready to share.",
      "prompt": "Before you pass this along to your manager, what's going through your mind about this summary?",
      "internal_notes": "Testing whether the respondent understands that AI generates plausible-sounding content rather than retrieving verified facts — and specifically that confident, fluent output is not the same as accurate output. The scenario gives the AI every surface quality of a good summary (organized, specific, readable) to see if the person sees past that.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between AI generating plausible-sounding content and actually retrieving verified facts. Treats the clean formatting and specific details as indicators that the summary is accurate and ready to share.",
          "developing": "Recognizes that AI-generated facts like dates, events, and awards may be wrong and should be checked, but frames this as a reliability quirk rather than articulating why AI specifically fabricates confident-sounding specifics — that AI generates plausible-continuation text rather than retrieving verified records, and specificity is a byproduct of fluent generation, not a signal of sourcing.",
          "demonstrating": "Recognizes that AI fabricates specific-sounding details — dates, product launches, awards — *because* it generates plausible-continuation text rather than retrieving live or verified records, meaning specificity is produced by the same mechanism that produces the prose, not by a lookup step. Understands that fluent, organized output shares no causal connection with accuracy, and that before sharing, each factual claim needs independent verification against a reliable source."
        },
        "integration": {
          "emerging": "Does not yet describe any action they would take to verify or review the summary before passing it along.",
          "developing": "Mentions reviewing or fact-checking in a general way but does not yet describe what that would look like for this type of content — which specific claims to check, or what sources to use.",
          "demonstrating": "Describes a concrete step they would take — such as checking the founding date, the product launch, or the award against a company website, news source, or another reference — before forwarding the summary to their manager."
        },
        "judgment": {
          "emerging": "Does not yet consider what it would mean for the team's credibility if an inaccurate claim about a competitor reached the manager or, eventually, a client.",
          "developing": "Has a surface sense that getting facts wrong would be a problem, but has not yet connected it to the specific consequence pattern in this role — that errors passed through review accumulate into a reputation for unreliability.",
          "demonstrating": "Recognizes that submitting unverified AI-generated claims — even internally — risks passing errors into the review cycle, and that if those errors slip through, they could undermine the team's credibility with clients and damage the employee's own track record for reliability."
        }
      }
    },
    {
      "id": "t1_q2",
      "sequence": 2,
      "angle": "confidence_calibration",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You're preparing a section of a report that includes a few key statistics — things like market size, growth rates, and customer adoption numbers. You ask the AI assistant to help and it provides several statistics, each presented with confident phrasing like 'according to industry data' and 'research shows.' When you search for some of these numbers online, you can find similar — but not identical — figures from what look like credible sources. The numbers aren't wildly different, but they don't exactly match either.",
      "prompt": "How do you think about what's happening here, and what does it tell you about this AI output?",
      "internal_notes": "Testing whether the respondent understands that AI can produce statistics that are approximately right but not traceable, and that 'similar but not identical' is not the same as verified. The scenario is specifically designed to avoid the easy case (clearly wrong numbers) and instead probe whether the person can calibrate their confidence when output is plausible but unconfirmed.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that AI-generated statistics may be approximations or composites rather than verifiable figures from a specific source, and treats 'similar to what I found' as sufficient confirmation. May interpret the AI's confident phrasing ('according to industry data') as evidence that the figures are sourced and accurate.",
          "developing": "Recognizes that 'similar but not identical' figures are a problem and the numbers need checking, but frames it as uncertainty about which number is right rather than articulating why AI statistics behave this way in the first place — that AI is generating plausible numerical continuations rather than retrieving from a database, so its 'statistics' are not sourced at all and 'close to real' is coincidental, not confirmatory.",
          "demonstrating": "Understands that AI statistics can sound authoritative while being unverifiable *because* the AI is producing plausible numerical text rather than querying a data source — meaning 'close to real' is a function of the training data's distribution, not evidence that any specific number is sourced. Recognizes that a traceable citation is not an optional polish on an AI number but a separate act of verification against a real source, because the AI's version has no source by construction."
        },
        "integration": {
          "emerging": "Does not yet describe a specific step for resolving the discrepancy between the AI's numbers and what they found in their own search.",
          "developing": "Mentions finding the right numbers but has not yet described how they would locate a traceable source or what they would do if one isn't available.",
          "demonstrating": "Describes using the real figures they found — with a direct citation to the source — rather than the AI-generated versions, or flagging to their manager that the numbers couldn't be confirmed to a traceable source before the report goes out."
        },
        "judgment": {
          "emerging": "Does not yet consider what it would mean for the report's credibility — or the team's — if unverifiable statistics appeared in a client-facing deliverable.",
          "developing": "Has a general sense that wrong numbers in a report would be a problem, but has not yet connected this to the specific consequence that data errors in client deliverables can undermine trust in the team's analysis and affect business decisions.",
          "demonstrating": "Recognizes that including statistics the AI generated — even if approximately right — without a traceable source puts the team's analytical credibility at risk, and that a data error that affects a client's decision is the kind of consequence that doesn't get walked back easily."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "task_ai_fit",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Ideate",
      "decision_band": "routine",
      "scenario": "You have two things on your plate this afternoon. First, you need to brainstorm possible themes for the team's upcoming internal presentation — your manager wants a few creative directions to choose from. Second, you need to write a short summary of a specific client meeting that happened this morning — capturing the decisions that were made and the next steps the team committed to. You're thinking about where the AI assistant might be useful.",
      "prompt": "For which of these two tasks do you think AI would be more helpful, and why?",
      "internal_notes": "Testing whether the respondent can recognize meaningful differences in how AI fits different task types — specifically that AI is better suited to generative/brainstorming tasks than to tasks that require accurate recall of specific real-world events it wasn't present for. This is an opportunity-recognition question, not a workflow question.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize a meaningful difference between the two tasks in terms of how AI fits — treats AI as equally useful (or equally unreliable) for both, without articulating why the nature of the task matters.",
          "developing": "Has a sense that AI is better for brainstorming than for summarizing a specific meeting, but has not yet articulated the underlying reason — that AI can generate creative ideas freely, but cannot accurately recall or reconstruct a real event it wasn't part of and has no record of.",
          "demonstrating": "Recognizes that AI is well-suited to the brainstorming task because it can generate a range of creative directions without needing to be accurate about real-world facts, while the meeting summary requires accurate recall of specific commitments and decisions from an event the AI has no knowledge of — making AI a poor primary tool for that task without the person's own notes as a foundation."
        },
        "integration": {
          "emerging": "Does not yet describe how they would actually use AI for either task.",
          "developing": "Identifies which task is better for AI but gives only a vague sense of how they'd use it — says 'I'd use AI for the brainstorm' without describing what that interaction would look like.",
          "demonstrating": "Describes a plausible approach for the better-suited task — such as prompting the AI with context about the team and the presentation goal to generate theme ideas — and recognizes that for the meeting summary, their own notes are the essential input, with AI potentially helping with formatting or phrasing after the key content is established."
        },
        "judgment": {
          "emerging": "Does not yet consider that using AI as the primary tool for the meeting summary — without grounding it in actual notes — could result in a deliverable with invented or inaccurate action items.",
          "developing": "Has a surface awareness that the meeting summary needs to be accurate, but has not yet connected this to the specific risk that AI-generated meeting summaries can include plausible-sounding but fabricated commitments that could mislead the team.",
          "demonstrating": "Recognizes that a meeting summary with incorrect action items or misattributed decisions — even if the AI produced them in good faith — could cause the team to miss real commitments or act on ones that were never made, and that this is the kind of error that erodes trust in the employee's reliability over time."
        }
      }
    },
    {
      "id": "t1_q4",
      "sequence": 4,
      "angle": "input_output_relationship",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Express",
      "decision_band": "routine",
      "scenario": "You need to draft a short email to a client contact confirming the details of next week's project check-in. You ask the AI assistant: 'Write a meeting confirmation email.' It produces something — but the email is generic, uses placeholder text like '[Client Name]' and '[Meeting Time],' and has a tone that feels more formal than how your team usually communicates with this particular client. You have another try at it.",
      "prompt": "What would you change about how you're working with the AI here, and why?",
      "internal_notes": "Testing whether the respondent understands that AI output quality is shaped by input quality — that a vague, context-free prompt produces generic output, and that adding context (who the client is, what the meeting is for, what tone fits) gives the AI what it needs to produce something actually useful. The scenario is designed so the person can answer well just by understanding the input-output relationship, without needing to describe a sophisticated prompting technique.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet connect the generic output to the generic prompt — treats the AI's output as fixed or as a reflection of what AI is capable of, rather than recognizing that the output was shaped by the information (or lack of it) the person provided.",
          "developing": "Understands that giving AI more information improves the output and can name some categories of information that would help, but frames it as 'AI works better with more detail' rather than articulating the underlying principle — that AI has no access to context outside the prompt and therefore produces a statistical average of the genre it was asked for when it isn't given anything specific to work from.",
          "demonstrating": "Recognizes that the generic output is a direct result of the generic prompt *because* the AI has access only to what's in the prompt and will produce a statistical average of the requested genre when context isn't provided — meaning 'generic' is not a failure mode, it is the expected output for a context-free request. Understands that providing client name, meeting details, audience, and tone constraints is what gives the AI the specific inputs it needs to produce something targeted rather than average."
        },
        "integration": {
          "emerging": "Does not yet describe any change they would make to the prompt or the way they're interacting with the AI.",
          "developing": "Says they would 'add more details' or 'give it more information' without specifying what kind of information matters — client name, tone, purpose, or specific meeting logistics.",
          "demonstrating": "Describes adding specific context to the prompt — such as the client's name, the meeting date and time, the purpose of the check-in, and a note about the communication style this client relationship calls for — so the AI has what it needs to draft something relevant."
        },
        "judgment": {
          "emerging": "Does not yet consider that sending a generic, placeholder-filled email to a client contact would reflect poorly on the team's professionalism and attention to detail.",
          "developing": "Has a surface sense that the email isn't ready, but has not yet connected the risk of generic AI output to how it lands with an external client — that a poorly personalized email signals inattention and can affect the client relationship.",
          "demonstrating": "Recognizes that a client-facing email with placeholder text or the wrong tone is the kind of small error that shapes how a client perceives the team, and that because this email would be reviewed before going out, catching and fixing the problem now — rather than passing a generic draft to the manager — is part of doing the job well."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "confidentiality_and_accountability",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "A teammate asks if you can help them quickly pull together a summary of a client's situation for an internal briefing. They send you a doc with detailed client information — account history, financials, and some sensitive background notes. You think using the AI assistant to draft the summary would save you both a lot of time. Then you remember that the company's AI usage guideline says confidential client information shouldn't be entered into public AI tools.",
      "prompt": "How do you think about this situation, and what do you do?",
      "internal_notes": "Testing whether the respondent recognizes the confidentiality boundary in the company's AI policy, understands why it exists, and knows what to do in a realistic situation where using AI would be convenient but isn't appropriate. The scenario is designed so the person can answer well by demonstrating awareness of the boundary and the reasoning behind it — not by designing a workaround or escalating unnecessarily.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that entering confidential client information into a public AI tool is a policy violation — may proceed with using the AI assistant because it's convenient, or may be unaware that public AI tools process and potentially retain the information they receive.",
          "developing": "Recognizes that the policy applies here but has not yet articulated why the boundary exists — does not yet connect the rule to the underlying risk that entering confidential client data into a public AI tool exposes that information outside the company's control, with potential legal and reputational consequences.",
          "demonstrating": "Recognizes that this situation falls squarely within the company's AI usage guideline — confidential client information shouldn't go into a public AI tool — and understands why: once that data is submitted, it is outside the company's control. Decides not to use the AI assistant for this task in its current form."
        },
        "integration": {
          "emerging": "Does not yet describe what they would do instead — either proceeds with the AI or stops without identifying a path forward.",
          "developing": "Recognizes they shouldn't use the AI but has not yet described a concrete alternative — says 'I wouldn't use AI for this' without describing how they'd still get the summary done or what they'd communicate to the teammate.",
          "demonstrating": "Describes a practical path forward: drafts the summary themselves without AI assistance, tells the teammate why they're handling it that way, or checks with their manager about whether there's a company-approved tool for handling sensitive data — rather than either ignoring the policy or leaving the task undone."
        },
        "judgment": {
          "emerging": "Does not yet consider what the consequences of a policy violation would be — treats convenience as the primary factor in the decision.",
          "developing": "Has a surface sense that violating the policy would be a problem, but has not yet connected this to the specific consequences: that entering client data into a public AI tool is a breach of confidentiality that could expose the company to legal liability, damage the client relationship, and constitute a policy violation with real professional consequences for the employee.",
          "demonstrating": "Recognizes that this isn't a gray area — the policy is clear, and the reason it exists is to protect client information from exposure outside the company's control. Understands that violating it, even for convenience, is the kind of decision that can result in serious consequences: a breach of client trust, potential legal exposure for the company, and a policy violation that reflects directly on the employee's professional judgment."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is Entry-level professional at a mid-size professional services company (university students assessed in this role). You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
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
    "version": "0.3.0",
    "question_count": 5,
    "estimated_minutes": 12,
    "primary_construct": "integration",
    "secondary_constructs": [
      "orientation",
      "judgment"
    ],
    "job_role_context": "Entry-level professional at a mid-size professional services company (university students assessed in this role)",
    "dol_coverage": [
      "#1 Understand AI Principles — Q4: tests whether the respondent's mental model holds when AI-generated chart data looks clean but may be constructed from unverifiable inputs, requiring the person to reason about what AI can and cannot know",
      "#2 Explore AI Uses — Q1: tests whether the respondent can envision how AI fits into a multi-step research-and-synthesis workflow, identifying which stages AI helps with and which require human judgment",
      "#3 Direct AI Effectively — Q2: tests whether the respondent can describe how to frame context, role, audience, and constraints when directing AI to produce a specific client-facing deliverable",
      "#4 Evaluate AI Outputs — Q5: tests whether the respondent can assess a complete AI-generated report section for accuracy, tone, and fit — and describe a process for doing so before it reaches the manager",
      "#5 Use AI Responsibly — Q3: tests whether the respondent can navigate a situation where AI use is appropriate in principle but the specific request creates an accountability or explainability gap"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are built around the judgment-embedded and escalation-boundary decisions described in the profile — situations where the person's process choices have downstream consequences even though their work is reviewed. The set moves from workflow design (Q1, Q2) to explainability and accountability (Q3) to output scrutiny under higher stakes (Q4, Q5), creating a progression that demands active process description rather than recognition. Each scenario is grounded in tasks the profile explicitly names — research synthesis, client-facing drafts, data visualization, AI-assisted report writing — but adds the constraints, stakeholders, and deliverable pressure absent from Tier 1. All four human functions are activated across the set, completing the full coverage begun in Tier 1.",
    "tier1_complementarity_notes": "Tier 1 established that this person can recognize AI's core behaviors — fabrication, unverifiable statistics, task-fit distinctions, the input-output relationship, and confidentiality boundaries — primarily through recognition and awareness scenarios. Tier 2 builds directly on that foundation by asking the person to act on that understanding: to design a workflow that puts AI in the right place, to write a prompt that produces something actually useful, to explain their own work product when asked, and to evaluate a full AI-generated deliverable before it goes to a manager. Where Tier 1 asked 'do you see the issue?', Tier 2 asks 'can you work through it?' The two tiers together move from mental model to applied practice, covering the full DOL framework and all four human functions across the combined 10-question sequence."
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
      "angle": "workflow_opportunity_mapping",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Ideate",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager has asked you to put together a competitive landscape overview by end of week — a structured document that identifies five competitors, summarizes what each one does, and highlights where your company appears to have an advantage. It's an internal document, but your manager has mentioned it may inform a client conversation next month. You have access to the company's AI assistant, your own research, and the company's document management system. You're planning how to approach the week.",
      "prompt": "Walk us through how you'd approach this project — where does AI fit into your process, and where does it not?",
      "internal_notes": "Tests whether the respondent can map AI's role across a multi-step, real deliverable — not just 'use AI to draft it' but thinking about which stages benefit from AI (initial scanning, structuring, drafting sections) versus which require human judgment (verifying specific claims, deciding what counts as an advantage, calibrating tone for a document that may reach a client). A strong response identifies at least two distinct stages and assigns AI a specific, bounded role in the workflow.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between what AI can generate independently and what requires human knowledge and verification — treats AI as capable of producing the full competitive analysis on its own, or avoids AI entirely without reasoning about where it would help.",
          "developing": "Has a sense that AI is useful for some parts of this project but has not yet articulated which stages — mentions 'using AI to help with research' or 'having AI draft it' without distinguishing what AI can and can't reliably contribute at each step.",
          "demonstrating": "Recognizes that AI can assist with stages like generating an initial list of competitors, structuring the document format, or drafting summary sections from verified inputs — but that the claims about competitive advantages need to be grounded in verified sources and human judgment, especially given that the document may inform a client conversation."
        },
        "integration": {
          "emerging": "Does not yet describe a process for the project — either says 'I'd use AI to write it' as a single step, or describes a purely manual approach without thinking about where AI fits.",
          "developing": "Describes using AI at some point in the workflow but the process is incomplete or vague — for example, 'I'd research the competitors and then use AI to help draft it' without describing what inputs they'd give AI, what they'd do with the output, or how they'd handle the verification step before submitting to their manager.",
          "demonstrating": "Describes a sequenced approach: researching and gathering verified information on each competitor first, then using AI to help structure or draft sections based on that input, then reviewing the AI-produced draft to check that claims about competitive advantages are accurate and that the tone is appropriate for a document that may reach a client, before submitting to their manager."
        },
        "judgment": {
          "emerging": "Does not yet account for the fact that this document may inform a client conversation — treats it as a purely internal document with no downstream stakes, and does not adjust their process accordingly.",
          "developing": "Acknowledges that the document has client implications but has not yet described how that changes their workflow — mentions being careful without specifying what 'careful' looks like in practice for this deliverable.",
          "demonstrating": "Recognizes that a document that may reach a client context requires a higher verification standard than a purely internal draft, and describes a process shaped by that — for example, ensuring that every claim about competitive advantages is confirmed from a real source, not carried over from AI output, before submitting to their manager for review."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "directed_drafting_with_context",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager has asked you to draft an executive summary for a project status update that will go to a client contact — a senior director at the client company who has been closely watching this project. The update covers three months of work. You have detailed notes, a project timeline, and a list of milestones achieved and still pending. Your manager has told you this client appreciates concise, direct communication and doesn't like jargon. You decide to use the AI assistant to help produce a first draft.",
      "prompt": "Describe how you'd work with the AI to produce a first draft that's actually useful — what would you give it, and what would you tell it?",
      "internal_notes": "Tests whether the respondent understands that directing AI effectively means providing context about audience, purpose, tone, and content — not just asking for a generic executive summary. A strong response describes specific inputs (the notes, milestones, timeline), specific instructions (audience is a senior director, tone is concise and jargon-free), and some sense of what they'd do with the output. Weak responses describe a single vague request without audience or constraint framing.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet connect the quality of the AI prompt to the quality of the output — asks AI for 'an executive summary of our project' without recognizing that audience, tone, and specific content need to be provided for the AI to produce something targeted rather than generic.",
          "developing": "Understands that AI needs information to work with but has not yet articulated the full picture — describes providing some content (the notes or milestones) but omits the audience framing, tone instruction, or constraints that shape what a useful executive summary for this client looks like.",
          "demonstrating": "Recognizes that the AI needs both the content (project notes, milestones, timeline) and the context (audience is a senior client director who wants concise, jargon-free communication; this is a status update, not a marketing document) to produce a draft that's actually close to what the manager would approve."
        },
        "integration": {
          "emerging": "Does not yet describe a concrete interaction with the AI — says 'I'd ask it to write the executive summary' without specifying what they'd provide or how they'd frame the request.",
          "developing": "Describes giving AI some of the relevant material but the prompting strategy is incomplete — provides content without audience framing, or mentions the tone requirement without explaining how they'd communicate it, leaving significant gaps in what the AI would need to produce a useful draft.",
          "demonstrating": "Describes a prompt that includes the project notes and milestone list as inputs, specifies that the audience is a senior client director who prefers concise and jargon-free updates, sets a length or format expectation, and then describes reviewing the AI's draft to check that it captures the right milestones accurately and reads in a way consistent with how the team communicates with this client before sending it to their manager."
        },
        "judgment": {
          "emerging": "Does not yet consider that this draft will be reviewed by their manager and then seen by a senior client contact — treats the task as producing any serviceable executive summary, without adjusting the process for the audience or stakes.",
          "developing": "Acknowledges that this is a client-facing document but has not yet described how that shapes how they'd direct the AI or review the output — mentions 'making sure it sounds right' without describing what that check would involve.",
          "demonstrating": "Recognizes that a draft going to a senior client director who is closely watching the project has a high bar for tone and accuracy, and describes their process accounting for that — for example, reviewing the AI's draft specifically to confirm that milestone language is accurate, that nothing is overstated, and that the phrasing is consistent with how this client expects to be communicated with, before handing it to their manager."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "explainability_and_accountability",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Act",
      "decision_band": "escalation",
      "scenario": "You used the AI assistant to help you prepare a summary of industry trends for an internal briefing your team is presenting to senior leadership next week. You did most of the research yourself and used AI to help organize your findings and tighten the language. The summary is solid and your manager approved it. During a dry run of the presentation, a senior colleague who wasn't involved in the project asks: 'How did you put this together? Did you use AI for any of this?' You did — and you're trying to decide how to answer.",
      "prompt": "How do you respond, and what does that response reflect about how you think about using AI in your work?",
      "internal_notes": "Tests whether the respondent understands the explainability requirement in the company's AI guideline — that employees should be able to explain the basis for any work product they submit, even if AI helped produce it — and can answer honestly and confidently because their process was sound. A strong response describes transparent disclosure without defensiveness, grounded in the fact that the respondent did the underlying research and used AI as a tool within a process they can explain. This tests the escalation boundary: the person is not being accused of wrongdoing, but their professional credibility is on the line in front of senior colleagues.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that using AI in a work product is something to be transparent about, or alternatively treats AI use as inherently problematic and something to minimize or conceal — either extreme reflects a misunderstanding of what responsible AI use looks like in this workplace.",
          "developing": "Understands that honesty is the right approach but has not yet connected the answer to the company's explainability expectation — says 'I'd say I used AI' without articulating what that disclosure would actually include or why the process they followed means they can answer the question confidently.",
          "demonstrating": "Recognizes that the company's expectation is that employees can explain the basis for any work product, and that a process where AI helped organize and tighten human-generated research fully meets that standard — answers honestly and specifically: describes doing the underlying research themselves, using AI to structure and refine the language, and reviewing and approving the final content."
        },
        "integration": {
          "emerging": "Does not yet describe what they would actually say in response to the question — either deflects, gives an evasive answer, or says 'I'd just be honest' without describing what honest looks like here.",
          "developing": "Describes disclosing AI use but gives a vague or incomplete account — says something like 'I'd tell them I used AI to help write it' without distinguishing between the research they did themselves and the role AI played, leaving an incomplete picture of their process.",
          "demonstrating": "Describes a specific, transparent answer: explains that they conducted the underlying research themselves, used the AI assistant to help organize the findings and refine the language, reviewed the output to make sure it was accurate and represented the research correctly, and that their manager approved it — a response that is honest, complete, and demonstrates they understood and owned the work."
        },
        "judgment": {
          "emerging": "Does not yet consider that how they answer this question shapes their professional credibility in front of senior colleagues — treats it as a simple factual question without recognizing the stakes of the moment.",
          "developing": "Recognizes that the question carries some weight but has not yet articulated what makes a confident, honest answer possible — does not connect their ability to answer well to having followed a process they can stand behind.",
          "demonstrating": "Recognizes that this is a moment where professional credibility is being assessed, and that the best outcome — for the employee and for AI use norms on the team — is a clear, confident answer grounded in a solid process: they did the research, AI helped with structure and language, they reviewed and approved it, and their manager signed off. Understands that concealing or minimizing AI use when asked directly would undermine trust, and that being able to explain the work is precisely what responsible AI use is designed to support."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "data_visualization_scrutiny",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You're building a presentation slide that shows quarterly KPI trends for the team. You've been given access to the company's spreadsheet tool, which has an AI feature that automatically generates chart recommendations and, when you describe what you want in a text box, produces a chart with labeled axes and a title. You type in 'Show our team's KPI performance over the last four quarters' and it generates a clean-looking line chart. The chart looks professional, the axes are labeled, and the trend line shows steady improvement.",
      "prompt": "Before you drop this chart into the presentation, what do you want to verify, and how would you go about it?",
      "internal_notes": "Tests whether the respondent understands that AI-generated charts visualize whatever data they're given — and that a chart can look clean and professional while representing incorrect, incomplete, or misinterpreted data. The scenario is specifically about the gap between 'the chart looks right' and 'the chart is right.' A strong response focuses on verifying the underlying data the chart is drawing from, not just checking the chart's visual design. This tests a different angle than Tier 1 Q2 (which was about AI-generated statistics in a report) — here the risk is in what the visualization is actually showing, and the process is about tracing the chart back to the source data.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that an AI-generated chart can look polished and credible while visualizing incorrect, incomplete, or misinterpreted data — treats the clean formatting and trend line as indicators that the chart is accurate and presentation-ready.",
          "developing": "Recognizes that the chart needs to be checked and may distinguish the visual design (axes, labels) from the underlying data, but frames this as 'I'd verify it' without articulating why AI-generated visualizations are specifically vulnerable to showing plausible-looking but wrong trends — that the AI has no model of what the data *should* show and will cleanly render whatever subset, mislabeling, or aggregation it happened to apply.",
          "demonstrating": "Recognizes that the chart's professional appearance has no causal connection to data accuracy *because* the AI visualization tool renders whatever data it happened to use, without validating that it pulled the correct metric, the correct time periods, or complete records — meaning a chart can be both clean-looking and wrong, and the two are not in tension. Understands that the verification question is not whether the chart looks right but whether the underlying data selection, scope, and aggregation match what the chart is claiming to show."
        },
        "integration": {
          "emerging": "Does not yet describe a verification step before using the chart in the presentation — either proceeds with the chart as-is or says 'it looks good' without describing how they'd confirm it.",
          "developing": "Mentions checking the chart but describes only surface-level verification — confirms the axis labels or the title are correct without describing how they'd trace the chart back to the source data to confirm it's pulling from the right figures for the right time periods.",
          "demonstrating": "Describes going back to the underlying data to confirm what the chart is actually drawing from — checking that the correct KPI metrics are included for each of the four quarters, that no quarter is missing or mislabeled, and that the trend line accurately reflects what the numbers show — before adding the chart to the presentation."
        },
        "judgment": {
          "emerging": "Does not yet consider what it would mean for the team's credibility if a chart showing incorrect KPI trends appeared in a presentation to leadership — treats the chart as a formatting task rather than a data accuracy task.",
          "developing": "Has a general sense that data accuracy matters for a presentation, but has not yet connected this to the specific consequence that a KPI chart showing the wrong trend — even if it looks clean — could lead senior stakeholders to draw incorrect conclusions about the team's performance.",
          "demonstrating": "Recognizes that a chart visualizing incorrect or incomplete KPI data could misrepresent the team's performance to leadership and affect how the team's work is perceived or evaluated — and that because this error might not be caught visually (the chart looks correct even if it isn't), their verification step before submitting to their manager is the primary safeguard."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "full_draft_evaluation_before_review",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager is traveling this week and asked you to handle a routine but important task independently: draft the team's monthly project update memo for internal distribution. This memo goes to about 20 people across several departments — not external clients, but including some senior staff. You've written these before with your manager's help, but this is the first time you're doing it solo. You decide to use the AI assistant to produce a first draft, giving it the project notes and a list of this month's milestones. The AI returns a well-structured, three-paragraph memo that covers the major points.",
      "prompt": "Describe how you'd evaluate this draft before deciding it's ready to submit — what are you looking for, and how do you work through it?",
      "internal_notes": "Tests whether the respondent can describe a concrete, end-to-end evaluation process for a complete AI-generated work product before it goes out — not just 'I'd read it over' but a systematic check that reflects what this specific deliverable requires: factual accuracy against their own notes, appropriate tone for a mixed internal audience including senior staff, completeness of milestone coverage, and overall fit for purpose. This is higher-stakes than Tier 1 because the manager is absent, the audience is real, and the person owns the quality check. A strong response describes at least two distinct things they'd check and how they'd check them.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between reading a draft for general quality and evaluating it for accuracy and fitness — treats the well-structured output as indicating the memo is ready to submit, or describes only a surface-level read without connecting the evaluation to what could go wrong.",
          "developing": "Recognizes that the draft needs review but describes a general read-through without identifying the specific dimensions that matter for this memo — does not distinguish between checking that the AI captured the milestones accurately versus checking that the tone is appropriate for senior internal staff.",
          "demonstrating": "Recognizes that evaluating this draft means checking it against two distinct standards: factual accuracy (does the memo correctly represent the milestones from their notes, with nothing omitted or overstated?) and audience fit (does the tone and level of detail work for a mixed internal audience that includes senior staff?) — and that both checks matter before the memo goes out."
        },
        "integration": {
          "emerging": "Does not yet describe a process for evaluating the draft — says 'I'd review it' or 'I'd read it over' without describing what they're looking for or how they'd work through it.",
          "developing": "Describes reviewing the draft but the process is incomplete — checks one dimension (for example, reads for tone) without describing how they'd verify that the milestone content is accurate against their notes, or describes checking accuracy without considering whether the draft's framing is appropriate for the senior staff on the distribution list.",
          "demonstrating": "Describes a concrete, sequenced evaluation: reads the draft against their project notes to confirm each milestone is captured accurately and nothing significant is missing or misstated; checks the tone and framing for appropriateness given the audience includes senior staff; reads for any phrasing that sounds generic or off for how this team communicates; and makes edits before deciding the memo is ready to distribute — rather than treating the AI's draft as final."
        },
        "judgment": {
          "emerging": "Does not yet account for the fact that their manager is absent and they are the sole reviewer — treats this as a routine task without recognizing that the absence of their usual review layer raises the stakes on their own evaluation process.",
          "developing": "Recognizes that the manager isn't available to catch errors, but has not yet described how that shifts their evaluation approach — mentions being more careful without specifying what that looks like in practice for this deliverable.",
          "demonstrating": "Recognizes that with their manager traveling, their evaluation is the only quality check before this memo reaches 20 people including senior staff — and describes a process that accounts for that: a more deliberate check against source notes, attention to anything that sounds off in tone for this audience, and a decision about whether the memo is genuinely ready or whether it warrants holding until their manager is available to review, rather than distributing something they're not confident in."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is Entry-level professional at a mid-size professional services company (university students assessed in this role). You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
