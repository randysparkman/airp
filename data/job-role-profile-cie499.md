---
role_identifier: "cie499"
role_label: "AI Fluency for Entry-Level Knowledge Work"
role_description: "A recently hired entry-level professional at a mid-size company — a junior analyst, project coordinator, marketing assistant, or operations associate. The kind of role where you're researching, writing, organizing data, and preparing deliverables for your manager — with AI tools built into the everyday workflow and an expectation that you'll use them thoughtfully."
version: "0.1.0"
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

## Tier 1 Questions

<!-- tier1-questions-start -->
```json
{
  "meta": {
    "tier": 1,
    "label": "Baseline Orientation",
    "version": "0.1.0",
    "question_count": 5,
    "estimated_minutes": 10,
    "primary_construct": "orientation",
    "secondary_constructs": ["integration", "judgment"],
    "job_role_context": "Entry-level professional at a mid-size professional services company",
    "dol_coverage": [
      "#4 Evaluate AI Outputs (Q1)",
      "#3 Direct AI Effectively (Q2)",
      "#1 Understand AI Principles (Q3)",
      "#5 Use AI Responsibly (Q4)",
      "#2 Explore AI Uses (Q5)"
    ],
    "human_functions_activated": ["Understand", "Express", "Ideate", "Act"],
    "design_rationale": "The set opens with an output evaluation scenario grounded in the everyday task of summarizing research, moves into the input-output relationship through a presentation drafting task, tests the mental model through an AI-generated meeting summary that may not capture what actually happened, probes responsibility through a data sensitivity situation involving client information, and closes with opportunity recognition in a team workflow context. The progression moves from reacting to AI output toward seeing where AI could be applied — building toward Tier 2's deeper integration focus. All scenarios are calibrated for someone new to professional work, using tasks and vocabulary from the Common Tasks section. Decision bands stay at routine and lower judgment-embedded."
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
      "angle": "fabrication_in_research_context",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "Your manager asks you to pull together some background research on a potential client's industry. You ask the AI assistant to help, and it gives you a well-organized overview that includes several specific statistics — market size figures, year-over-year growth rates, and the names of what it says are the top five companies in that space.",
      "prompt": "How much of this do you trust, and why?",
      "internal_notes": "Tests whether the person understands that AI generates plausible-sounding information rather than looking up verified facts. The specific statistics and company names are the diagnostic — does the person recognize that precise, confident-sounding data can be fabricated? The research context is one this person would encounter in their first weeks on the job.",
      "rubric": {
        "orientation": {
          "emerging": "Accepts the statistics and company names because they are specific and well-organized, or focuses on whether the overview is well-written rather than whether the data is real. Has not yet developed a model for how AI can produce precise-looking figures and named entities without a factual basis.",
          "developing": "Suspects the information might not be accurate and would want to verify it, but frames this as general caution rather than connecting it to how AI generates content. May say 'I'd double-check the numbers' without articulating why AI-produced statistics are specifically unreliable — why the specificity of the output doesn't indicate the reliability of the output.",
          "demonstrating": "Recognizes that AI generates plausible content rather than retrieving verified information. Understands that specific-looking statistics — market sizes, growth rates, named companies — can be entirely fabricated while looking authoritative. Sees that the AI's confident, well-organized presentation is a feature of how it produces language, not evidence that it has access to current industry data."
        },
        "integration": {
          "emerging": "Does not yet describe what they would do with the AI output beyond accepting or rejecting it wholesale.",
          "developing": "Mentions checking the information but does not yet describe where they would go for reliable industry data or how they would use the AI's output alongside verified sources.",
          "demonstrating": "Describes a practical approach — using the AI's organizational structure or framing as a starting point while verifying the actual figures and company names through reliable sources (industry reports, company websites, databases). Treats the AI output as a scaffold rather than a finished research product."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if fabricated industry data reaches the manager and is used in client conversations. No connection between the quality of the background research and downstream consequences.",
          "developing": "Recognizes that sending unverified information to their manager would be a problem, but the concern stays general — does not yet connect it to the specific pattern where repeated inaccuracies in an entry-level employee's research erode the manager's trust in their work.",
          "demonstrating": "Understands that background research shapes how the manager thinks about the potential client. Inaccurate statistics or wrong company names don't just get corrected — they signal that the person didn't actually verify what they were handing over. Recognizes that for someone new, a pattern of submitting AI-generated research without checking it erodes credibility quickly and slows the team down."
        }
      }
    },
    {
      "id": "t1_q2",
      "sequence": 2,
      "angle": "input_shapes_output",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": null,
      "human_function_activated": "Express",
      "decision_band": "routine",
      "scenario": "You need to prepare a few slides for an internal team meeting about a project you've been supporting. You ask the AI assistant to draft the slide content. The draft it produces is polished and professional-sounding, but it's full of generic statements — 'the project is progressing well,' 'key milestones are being met,' 'the team continues to deliver strong results' — without any of the specific details your teammates would actually want to hear.",
      "prompt": "Why do you think the draft came out like this?",
      "internal_notes": "Tests whether the person understands the input-output relationship — that AI output quality depends on what the AI was given to work with. The generic, confident-sounding slides are a direct result of a vague request. Does the person trace the quality of the output back to the quality of the input, or do they treat the AI as an author that should have known better?",
      "rubric": {
        "orientation": {
          "emerging": "Treats the generic output as a quality problem with the AI itself — 'it's not very good at presentations' or 'it doesn't know enough about the project.' Has not yet developed a model connecting what the AI was given to what it produced.",
          "developing": "Recognizes that they would need to add specifics before using the slides, but does not yet connect the vagueness of the output to the vagueness of their original request. Sees the problem in the output without tracing it to the input.",
          "demonstrating": "Understands that the AI produced generic content because it had no project-specific information to work with. Recognizes that AI generates language patterns — professional-sounding slide language — but cannot know which milestones were reached, what challenges came up, or what the team needs to discuss unless it's told. The quality of what you give the AI determines the quality of what you get back."
        },
        "integration": {
          "emerging": "Would either use the generic slides as-is, discard them entirely, or rewrite everything from scratch. Does not yet describe how to get better results from the AI.",
          "developing": "Would edit the slides to add specifics, but treats this as a one-time fix rather than a lesson about how to interact with AI more effectively.",
          "demonstrating": "Describes providing the AI with actual project details — specific milestones, recent progress, open questions — and asking for a new draft, or describes an approach to giving AI enough context to produce useful output. Sees working with AI as a back-and-forth where the person's input shapes the result."
        },
        "judgment": {
          "emerging": "Has not yet considered what generic slides communicate to the team. Focuses on the writing quality rather than what the presentation signals about the person's engagement with the project.",
          "developing": "Recognizes that the team needs real information, but does not yet connect this to how presenting AI-generated filler in a team meeting affects how colleagues perceive the person's grasp of the work.",
          "demonstrating": "Understands that presenting generic, substanceless slides to a team that's looking for real project information signals that the person either doesn't know the details or didn't prepare. For someone new, showing up with polished-sounding but empty content is worse than showing up with rough but specific notes — it raises questions about whether the person understands the work they've been supporting."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "ai_interpretation_vs_reality",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You sat in on a meeting with your manager and two colleagues to discuss a client deliverable. Afterward, you check the AI-generated meeting summary. The summary is clean and well-structured, but you notice it lists a clear action item for your manager that you don't remember anyone actually agreeing to. The summary attributes it to a moment in the discussion where your manager said something like 'we should probably think about updating the timeline' — which the AI seems to have interpreted as a firm commitment.",
      "prompt": "What's going on here, and what do you do about it?",
      "internal_notes": "Tests whether the person understands that AI interprets and reconstructs rather than neutrally recording. The meeting summary scenario is one this person encounters routinely, but the diagnostic is whether they see that AI transforms ambiguous language into definitive-sounding statements. Does the person understand that 'we should probably think about' is not the same as 'I will do this' — and that AI can collapse that distinction?",
      "rubric": {
        "orientation": {
          "emerging": "Assumes the summary is likely accurate because it was generated from the actual meeting, or treats the discrepancy as a minor error rather than a window into how AI processes language. Has not yet developed a model for how AI can turn tentative discussion into definitive action items.",
          "developing": "Notices the discrepancy and would want to correct it, but frames it as an isolated mistake — 'the AI got that one wrong' — rather than understanding the pattern: that AI systematically interprets ambiguous conversational language as concrete commitments because it generates structured output from unstructured input.",
          "demonstrating": "Understands that AI doesn't neutrally transcribe — it interprets and restructures. Recognizes that a tentative comment like 'we should probably think about updating the timeline' gets processed through a model that produces clean, organized summaries, and that model tends to resolve ambiguity toward definiteness. Sees that this is a feature of how AI generates structured output from conversational input, not a one-off error."
        },
        "integration": {
          "emerging": "Does not yet describe a response beyond either accepting the summary or ignoring it entirely.",
          "developing": "Would flag or correct the specific error but does not yet describe an approach to handling AI meeting summaries going forward — checking them against their own notes, treating summaries as drafts rather than records.",
          "demonstrating": "Describes a practical response — checking the summary against their own recollection, flagging the misattributed action item with the relevant people, and treating AI-generated meeting summaries as useful starting points that need human review rather than authoritative records."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of a misattributed action item circulating as the official meeting record. No awareness of how this could affect the manager or the project timeline.",
          "developing": "Recognizes that the error should be corrected but does not yet connect it to the downstream impact — that if the summary circulates uncorrected, the manager appears to have committed to something they didn't, and the team may plan around a timeline change that was never actually decided.",
          "demonstrating": "Understands that a meeting summary with a misattributed commitment isn't just inaccurate — it can drive action based on something that was never agreed to. Recognizes that for someone entry-level, catching and flagging this kind of error is exactly the kind of reliability that builds trust, while letting it pass undermines confidence in the person's attention to what actually happened."
        }
      }
    },
    {
      "id": "t1_q4",
      "sequence": 4,
      "angle": "data_sensitivity_boundaries",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Act",
      "decision_band": "routine",
      "scenario": "A teammate asks you to help them clean up a messy spreadsheet of client contact information — names, email addresses, phone numbers, and notes from recent conversations. The fastest way to get it done would be to paste the data into the AI assistant and ask it to organize, de-duplicate, and format everything.",
      "prompt": "What's your reaction to using the AI assistant for this?",
      "internal_notes": "Tests whether the person recognizes data sensitivity boundaries without being told there's a problem. The scenario doesn't frame this as a dilemma — it presents a practical, efficient approach. The diagnostic is whether the person spontaneously identifies that client contact information and conversation notes are the kind of data the company's AI usage guidelines are designed to protect. Does the person see the boundary, or do they need someone to point it out?",
      "rubric": {
        "orientation": {
          "emerging": "Sees this as a straightforward efficiency task and does not yet recognize that client contact information and conversation notes are sensitive data that shouldn't be entered into a public AI tool. Focuses on whether the AI can do the formatting task well.",
          "developing": "Has some awareness that there might be an issue with the data but frames it vaguely — 'I'd want to be careful' — without connecting it specifically to the nature of client information or the company's AI usage guidelines. The caution is present but not grounded in understanding why this particular data is different from other spreadsheet content.",
          "demonstrating": "Immediately recognizes that client contact information and conversation notes are confidential data that falls under the company's AI usage guidelines. Understands that pasting this into a public AI tool means the data leaves the company's control — and that the AI usage policy exists specifically to prevent this kind of exposure, regardless of how convenient it would be."
        },
        "integration": {
          "emerging": "Does not yet describe an alternative approach. Either proceeds with the AI tool or abandons the task.",
          "developing": "Suggests not using the AI for this task but does not yet describe how they would accomplish the data cleanup without it — or whether there might be a way to use AI tools that doesn't involve exposing client data.",
          "demonstrating": "Describes a practical alternative — cleaning the data manually, using non-AI spreadsheet tools, or exploring whether the company has an internal AI tool approved for sensitive data. Shows they can think about both the boundary and the task, not just one or the other."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of client data entering a public AI tool. No connection between this action and the company's data protection policies or the client's expectation of confidentiality.",
          "developing": "Recognizes it's probably not a good idea but frames the risk in general terms — 'you shouldn't put private stuff in AI' — rather than connecting to the specific consequences: policy violation, potential exposure of client information, and the reputational and legal dimensions described in the role's stakes.",
          "demonstrating": "Understands that entering client contact information and conversation notes into a public AI tool is a policy violation with specific consequences — it compromises confidential information the client entrusted to the company, it could trigger a formal policy response, and for an entry-level employee, being the person who caused a data exposure incident has lasting career consequences. Sees that convenience doesn't override the boundary."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "opportunity_recognition",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Ideate",
      "decision_band": "routine",
      "scenario": "Every Friday, your team does a quick round of status updates in a shared document — each person writes a few sentences about what they worked on that week and what's coming up next. You notice that most people's updates follow the same structure: what they finished, what's in progress, and what they need from others. Writing your own takes about 15 minutes each week because you have to look back through your emails and calendar to remember everything.",
      "prompt": "Do you see a role for AI here, and if so, what would it be?",
      "internal_notes": "Tests whether the person can see where AI could be applied to a routine workflow task — not because AI is already involved, but because the person recognizes the fit. The weekly status update is a structured, pattern-based writing task that draws on information scattered across the person's tools. The diagnostic is whether the person can envision AI helping with this and, secondarily, whether they see what the AI would need to do it well (access to their calendar, emails, etc.) versus what it couldn't do (know which items are actually important to highlight).",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet see a connection between this task and AI, or sees AI only in terms of 'making the writing better' rather than understanding what AI could actually help with in this context — synthesizing scattered information into a structured format.",
          "developing": "Recognizes that AI could probably help with this task but the understanding stays surface-level — 'AI could write it for me' — without distinguishing what AI would need to work with or what parts of the task still require the person's judgment about what's worth reporting.",
          "demonstrating": "Sees that this is a task with a clear pattern (structured format, recurring cadence) drawing on scattered information (emails, calendar, notes) — which makes it a natural fit for AI assistance. Understands that AI could help synthesize and draft, but also recognizes the boundary: the person still needs to decide what's important enough to highlight, what to flag as a blocker, and what context teammates actually need."
        },
        "integration": {
          "emerging": "Does not yet describe how AI would actually be used in this context. The idea stays abstract.",
          "developing": "Suggests using AI to help write the update but does not yet describe what the AI would need — what information would the person provide or point to? How would the draft get reviewed?",
          "demonstrating": "Describes a practical picture — giving the AI access to or summaries of the week's activities (emails sent, meetings attended, tasks completed) and asking it to draft an update in the team's established format. Includes the step where the person reviews and adjusts the draft to make sure it reflects what actually matters, not just what was most recent."
        },
        "judgment": {
          "emerging": "Has not yet considered whether there are any considerations in using AI for status updates — treats it purely as an efficiency question.",
          "developing": "Recognizes that the update should be accurate but does not yet connect to the reputational dimension — that a status update represents the person's account of their own work, and that submitting AI-generated content without review could misrepresent what they actually did or make them look disengaged.",
          "demonstrating": "Understands that a status update is a small but real professional representation — it tells the team what you worked on and what you think matters. Using AI to draft it is practical, but submitting an AI-generated update without reviewing it could include things you didn't actually do, miss things that matter to others, or read as boilerplate. For someone building credibility on a team, the update is one of the regular touchpoints where reliability and engagement show — or don't."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is [JOB_ROLE_CONTEXT from meta]. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
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
    "version": "0.1.0",
    "question_count": 5,
    "estimated_minutes": 12,
    "primary_construct": "integration",
    "secondary_constructs": ["orientation", "judgment"],
    "job_role_context": "Entry-level professional at a mid-size professional services company",
    "dol_coverage": [
      "#3 Direct AI Effectively (Q1)",
      "#2 Explore AI Uses (Q2)",
      "#4 Evaluate AI Outputs (Q3)",
      "#5 Use AI Responsibly (Q4)",
      "#1 Understand AI Principles (Q5)"
    ],
    "human_functions_activated": ["Express", "Ideate", "Understand", "Act"],
    "design_rationale": "The set moves the person from reacting to AI output (Tier 1) into actively working with AI to produce real deliverables under real constraints. Q1 tests directed drafting for a client-facing document with tone and audience considerations. Q2 tests whether the person can envision AI applications across a multi-source synthesis task. Q3 tests domain-grounded evaluation of AI-produced data analysis. Q4 tests responsible use when AI is involved in a task that straddles internal and external boundaries. Q5 tests whether the person's mental model holds when AI produces something that looks right but requires deeper verification. Scenarios are richer, with named stakeholders, specific deliverables, and realistic constraints from this role.",
    "tier1_complementarity_notes": "Tier 1 established baseline recognition: can the person spot fabrication (Q1), trace output quality to input quality (Q2), see that AI interprets rather than records (Q3), recognize data sensitivity boundaries (Q4), and identify where AI could fit in a routine task (Q5). Tier 2 builds on all five by putting the person in the driver's seat — they need to describe how they'd work with AI, not just what they notice. Decision bands move from routine into upper judgment-embedded and the escalation boundary. Human function activation shifts: Tier 1 used Understand twice; Tier 2 uses Express, Ideate, Understand, and Act to ensure full coverage across the 10-question set."
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
      "angle": "directed_drafting_with_audience_constraints",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager asks you to draft a one-page summary of your team's recent project for a client who wasn't directly involved but will be referencing this work in their own planning. The client is detail-oriented and has pushed back before when deliverables were vague. You decide to use the AI assistant to help draft this summary. You have access to the project's internal status updates, the final deliverable, and your own notes from team meetings.",
      "prompt": "How would you approach this — what do you give the AI, and what do you do with what it gives you back?",
      "internal_notes": "Tests whether the person can describe a concrete process for directing AI toward a specific audience and purpose. The detail-oriented client with a history of pushback raises the bar — the person needs to think about what information to feed the AI, how to frame the audience's expectations, and how to evaluate the draft against those expectations. A strong response describes a multi-step interaction with the AI, not a single pass.",
      "rubric": {
        "orientation": {
          "emerging": "Treats the AI as an author that should be able to produce a good client summary from a simple request. Has not yet developed a model for how the person's framing of the task — audience, purpose, level of detail — shapes what the AI produces.",
          "developing": "Understands that the AI will need some project information to work with, but does not yet connect the client's specific expectations (detail-oriented, history of pushback on vague deliverables) to how the AI should be directed. Sees the input-output relationship in general terms but has not yet applied it to audience-specific communication.",
          "demonstrating": "Understands that the AI will produce a summary shaped by what it's given — and that a summary for a detail-oriented client who pushes back on vagueness requires different input and framing than a generic project overview. Recognizes that the AI doesn't know the audience unless told, and that the person's job is to bridge between what the AI can generate and what this specific client needs."
        },
        "integration": {
          "emerging": "Describes a single-step process — 'I'd ask the AI to write a summary' — without specifying what inputs they'd provide, how they'd frame the audience, or what they'd do with the draft. Does not yet describe a workflow for producing client-ready output with AI assistance.",
          "developing": "Describes giving the AI some project information and reviewing the draft, but the process is vague or incomplete — does not yet specify which source materials they'd use, how they'd communicate the client's expectations to the AI, or what they'd specifically check in the draft before sending it forward.",
          "demonstrating": "Describes a concrete, sequenced process: selecting the right source materials (final deliverable, key status updates, relevant meeting notes), framing the task for the AI with the audience in mind (detail-oriented client, planning reference, no vagueness), reviewing the draft against the client's known expectations, and editing for accuracy, tone, and completeness before sending to their manager for final review. Shows the person actively shaping the AI's output rather than accepting or rejecting it."
        },
        "judgment": {
          "emerging": "Has not yet considered how the quality of this summary affects the client relationship or the person's standing. Treats it as a writing task rather than a professional communication with consequences.",
          "developing": "Recognizes that the summary needs to be good because it's going to a client, but does not yet connect to the specific stakes — that this client has pushed back before, that vagueness will be noticed, and that a summary the person can't fully stand behind puts both their credibility and the team's client relationship at risk.",
          "demonstrating": "Understands that this summary will represent the team's work to a client who pays attention to detail and has a history of calling out vagueness. A polished but shallow summary — the kind AI produces by default — is exactly what this client would reject. The person's judgment about what level of detail to include, what claims to verify, and when the draft is ready shapes whether this deliverable strengthens or weakens the client relationship. Recognizes that their manager will also evaluate the draft quality as a signal of the person's readiness for more client-facing work."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "workflow_opportunity_multi_source_synthesis",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Ideate",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager asks you to put together a brief comparing three vendors the company is considering for a new software tool. Each vendor sent a proposal document (10–15 pages), and your manager also forwarded you email threads with internal stakeholders' opinions on what features matter most. You have about a day to produce a clear, organized comparison that the leadership team can use to make a decision. You're thinking about how AI could help.",
      "prompt": "Walk us through how you'd use AI to tackle this, and where you'd rely on your own work instead.",
      "internal_notes": "Tests whether the person can envision where AI fits in a complex, multi-source synthesis task — and where it doesn't. The scenario involves multiple long documents, internal stakeholder input, and a specific deliverable with a real audience (leadership team). A strong response distinguishes what AI can help with (summarizing proposals, organizing information, drafting comparison structures) from what requires the person's judgment (deciding which features to prioritize based on stakeholder input, framing tradeoffs, ensuring the comparison is fair and accurate).",
      "rubric": {
        "orientation": {
          "emerging": "Sees AI as either handling the entire comparison or not being useful here. Has not yet developed a model for how AI can assist with parts of a complex task while the person handles other parts. May not recognize that AI can process and organize large documents but cannot weigh competing stakeholder priorities.",
          "developing": "Recognizes that AI could help with some parts of this task — probably summarizing the proposals — but the understanding of AI's role stays at a general level. Does not yet articulate the specific boundary between what AI can handle (information extraction, structural organization) and what it can't (interpreting stakeholder priorities, ensuring the comparison is balanced and decision-ready).",
          "demonstrating": "Understands that AI is well-suited for processing and organizing information from long documents — extracting key features, pricing, and capabilities from each proposal — but that the strategic layer (which features matter most based on stakeholder input, how to frame tradeoffs for a leadership audience, whether the comparison is fair) requires the person's judgment. Sees AI as a powerful tool for the information-heavy parts of the task, not a substitute for the synthesis and framing that make the comparison useful."
        },
        "integration": {
          "emerging": "Does not yet describe a process that distinguishes AI-assisted steps from human-judgment steps. May describe either doing everything manually or handing everything to AI. The workflow is absent or undifferentiated.",
          "developing": "Describes using AI to summarize the proposals and maybe draft a comparison, but the process is sketchy — does not yet specify how they'd incorporate stakeholder priorities, how they'd verify AI's representation of each vendor's offering, or how they'd structure the final deliverable for the leadership audience.",
          "demonstrating": "Describes a concrete workflow: using AI to extract and organize key information from each proposal (features, pricing, implementation timelines), reading the stakeholder email threads themselves to understand which features and concerns matter most, building the comparison structure around those priorities, using AI to help draft sections, and reviewing the final product to ensure the comparison is accurate, balanced, and framed for leadership decision-making. Shows the person orchestrating AI and their own work as complementary steps in a realistic process."
        },
        "judgment": {
          "emerging": "Has not yet considered what's at stake if the vendor comparison is inaccurate, incomplete, or biased toward one vendor. Treats it as a document production task rather than an input to a leadership decision.",
          "developing": "Recognizes that the comparison needs to be accurate because leadership will use it, but does not yet connect to the specific risks — that an AI-produced comparison could misrepresent a vendor's capabilities, miss a critical limitation buried in the fine print, or fail to weight the features stakeholders actually care about, leading to a flawed decision.",
          "demonstrating": "Understands that this comparison will directly influence a purchasing decision by the leadership team. An AI that summarizes proposals may miss nuances, misrepresent capabilities, or treat all features as equally important. If the person submits a comparison that mischaracterizes a vendor or ignores what stakeholders flagged as important, the resulting decision could be based on incomplete or misleading information — and the person's role as the one who assembled the comparison makes them accountable for its quality. For an entry-level employee, producing a reliable vendor comparison that leadership trusts builds credibility; producing one that leads to a bad decision erodes it."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "domain_grounded_output_evaluation",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You're helping prepare a quarterly report and your manager asks you to analyze a dataset showing client engagement metrics — response times, meeting frequency, and satisfaction survey scores across 20 client accounts. You use the AI assistant to help identify trends. The AI produces a clean analysis that identifies the 'top 5 most engaged clients' and the 'bottom 5 at risk of churn,' complete with specific metrics and a recommendation to prioritize outreach to the bottom 5. The analysis looks polished and the rankings seem reasonable at a glance.",
      "prompt": "How do you evaluate what the AI produced before including it in the report?",
      "internal_notes": "Tests whether the person can evaluate AI-produced data analysis in a domain-specific context — not just whether the numbers look right, but whether the AI's methodology makes sense. The diagnostic is whether the person questions what 'engagement' means in the AI's ranking (what metrics were weighted and how), whether the 'at risk of churn' label is actually supported by the data or is the AI's interpretation, and whether the recommendation to prioritize outreach is grounded in the data or is a generic suggestion. Moves beyond Tier 1's fabrication detection into evaluating AI's analytical choices.",
      "rubric": {
        "orientation": {
          "emerging": "Accepts the analysis because it looks professional and the rankings seem reasonable. Has not yet developed a model for how AI makes analytical choices — weighting metrics, defining categories like 'at risk of churn,' generating recommendations — that may not reflect the actual business context.",
          "developing": "Would check whether the specific numbers are accurate but does not yet question the AI's analytical framework — how it defined 'engagement,' what weights it assigned to different metrics, or whether 'at risk of churn' is a label supported by the data or an interpretation the AI generated. Focuses on data accuracy rather than methodological soundness.",
          "demonstrating": "Understands that an AI-produced analysis isn't just numbers — it reflects choices about how to define engagement, how to weight different metrics, and how to categorize clients. Recognizes that 'at risk of churn' is an interpretation the AI generated, not a fact in the data, and that the recommendation to 'prioritize outreach' is a generic action that may not follow from the specific analysis. Sees that a polished-looking analysis can embed questionable analytical assumptions."
        },
        "integration": {
          "emerging": "Does not yet describe a process for evaluating the analysis beyond reading it through. Would include it in the report as-is or reject it entirely.",
          "developing": "Describes checking some of the numbers or comparing them to known accounts, but does not yet describe evaluating the AI's methodology — asking what drove the rankings, whether the weighting makes sense for this business, or whether the categories and recommendations are supported by the data.",
          "demonstrating": "Describes a concrete evaluation process: checking how the AI defined and weighted 'engagement,' verifying that the rankings align with what the team actually knows about these clients, questioning whether the 'churn risk' label is supported or projected, and assessing whether the outreach recommendation makes business sense. May describe adjusting the analysis framework, re-running with different parameters, or supplementing with qualitative knowledge the AI didn't have. Shows the person engaging with the analysis as a reviewer, not just a consumer."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of including an AI-produced analysis with unsound methodology in a quarterly report. No connection between the analysis quality and the decisions it could drive.",
          "developing": "Recognizes that the report needs to be accurate but does not yet connect to the specific stakes — that labeling specific clients as 'at risk of churn' could trigger actions (outreach, resource reallocation) that may not be warranted, and that including AI-generated categories in a report creates the impression that the person endorses the analysis.",
          "demonstrating": "Understands that a quarterly report with client rankings will drive real decisions — managers may reassign resources, adjust client strategies, or flag accounts based on this analysis. If the AI's definition of 'engagement' doesn't match the business reality, or if the 'churn risk' label is the AI's projection rather than a data-supported conclusion, those decisions will be based on a flawed foundation. The person's name is on the report section, and including an analysis they can't explain or defend undermines their credibility with their manager and the broader team."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "accountability_at_the_review_boundary",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Act",
      "decision_band": "escalation",
      "scenario": "A colleague from another department sends you a Slack message: 'Hey, can you quickly draft a response to this client email for me? I'm swamped and it's not complicated — they're just asking for an update on the deliverable timeline. Here's the email thread.' They paste in the client's email. You could use the AI assistant to draft a quick, professional response in a few minutes. But the email would go out under your colleague's name directly to the client — it wouldn't go through your usual review process with your manager.",
      "prompt": "How do you handle this?",
      "internal_notes": "Tests responsible use at the boundary between helpfulness and accountability. The scenario is designed to feel easy — it's 'not complicated,' it's a favor for a colleague, and AI could handle it quickly. The diagnostic is whether the person recognizes the accountability gap: they'd be producing AI-assisted client communication that bypasses their normal review process, goes out under someone else's name, and involves a client relationship they may not fully understand. Does the person see where their responsibility starts and stops?",
      "rubric": {
        "orientation": {
          "emerging": "Sees this as a simple task that AI can handle quickly. Has not yet recognized that the simplicity of the drafting task is separate from the accountability question — who is responsible for what goes to the client, and what happens when AI-assisted content bypasses the review structure.",
          "developing": "Senses that something about this situation is different from their normal workflow but frames it as a vague concern — 'I'd want to be careful' — rather than identifying the specific issue: AI-assisted client communication being produced outside the person's usual review process, for a client relationship they may not have context on, under someone else's name.",
          "demonstrating": "Recognizes that this request collapses several safeguards at once: the AI draft won't go through the person's normal review with their manager, the person may not have the context to know if the draft captures the right tone or details for this client, and the communication goes out under a colleague's name — meaning neither the person who wrote it nor the person whose name is on it fully owns the quality. Understands that the ease of the task doesn't eliminate the accountability question."
        },
        "integration": {
          "emerging": "Either drafts and sends without hesitation, or refuses to help entirely. Does not yet describe an approach that balances being helpful with maintaining appropriate accountability.",
          "developing": "Describes drafting something but staying vague on the review step — 'I'd send it to them to check' — without articulating why the review matters or what the colleague should specifically verify before sending to the client.",
          "demonstrating": "Describes a practical approach that addresses both the request and the accountability gap: drafting a response (with or without AI), sending it to the colleague for their review with a note that the colleague should verify details and tone before sending, and recognizing that the colleague — not the person drafting — needs to own the communication. May also describe checking whether they have enough context about the client and deliverable timeline to produce an accurate draft, or asking the colleague for key details before starting."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if the AI-drafted response contains an inaccuracy about the timeline or strikes the wrong tone with the client. No awareness of the downstream consequences of client-facing communication that bypasses review.",
          "developing": "Recognizes that the response should be accurate but does not yet connect to the specific risk pattern: that an error in a client email isn't caught by the usual review process, lands directly with the client under the colleague's name, and could create confusion about the deliverable timeline that affects the client relationship and the team's credibility.",
          "demonstrating": "Understands that this situation bypasses the review structure that normally catches errors before they reach clients. An AI-drafted timeline update that gets a date wrong or mischaracterizes the status of a deliverable goes directly to the client — no manager review, no safety net. If it causes a problem, the trail leads back to the person who drafted it and the colleague who sent it. For someone entry-level, being the source of a client communication error — even as a favor — creates exactly the kind of credibility problem that accumulates. The right approach protects both the person and the colleague."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "verification_under_domain_uncertainty",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager asks you to research a topic you don't know well — new accessibility standards that may affect how the company designs client-facing reports. You use the AI assistant to get up to speed. It gives you a thorough explanation of the standards, names specific requirements, and even suggests which sections of the company's current report templates would need to change. The explanation is detailed and reads like it was written by someone who knows the subject well. You don't have enough background to tell whether the specifics are right.",
      "prompt": "How do you work with this information when you can't independently verify the details?",
      "internal_notes": "Tests whether the person's mental model holds when they're in a domain where they can't spot errors through their own expertise. This is a deeper cut on the same territory Tier 1 Q1 (fabrication) explored — but here the person needs to describe a process for working in uncertainty, not just recognize that uncertainty exists. The specific suggestions about report templates are the sharpest diagnostic: does the person treat AI-generated implementation recommendations the same way they treat AI-generated factual claims? The scenario also tests whether the person can distinguish between information they can verify independently and information they need help verifying.",
      "rubric": {
        "orientation": {
          "emerging": "Treats the detailed, expert-sounding response as reliable because it's thorough and specific. Has not yet internalized that AI produces the same confident, detailed tone regardless of whether the content is accurate — and that the person's inability to spot errors makes this more dangerous, not less.",
          "developing": "Recognizes that they should verify the information but has not yet grasped the deeper problem: that when the person lacks domain knowledge, the AI's most dangerous output isn't obviously wrong content — it's content that's subtly wrong in ways the person can't detect. Treats all verification as equivalent rather than recognizing that some claims are verifiable and others require domain expertise.",
          "demonstrating": "Understands that AI's detailed, authoritative tone is constant regardless of accuracy — and that this is most dangerous precisely when the person lacks the expertise to evaluate the content independently. Recognizes that the AI's specific suggestions about which report template sections to change represent implementation recommendations that go beyond factual claims — they embed assumptions about the standards that the person can't evaluate without deeper understanding. Sees that 'I don't know enough to spot errors' is itself important information that should shape how they use this output."
        },
        "integration": {
          "emerging": "Either uses the AI's output as-is for their research or abandons it entirely. Does not yet describe a process for working productively with information the person can't independently verify.",
          "developing": "Describes some verification steps — looking up the standards, asking someone — but the process is undifferentiated. Does not yet distinguish between claims they could verify with a quick search (do these standards exist? when did they take effect?) and claims that require domain expertise to evaluate (are the AI's specific implementation suggestions accurate for the company's report templates?).",
          "demonstrating": "Describes a layered approach: verifying the factual foundation first (do these standards exist, what do they actually require) through official sources, then treating the AI's implementation suggestions as hypotheses that need review by someone with relevant expertise — either the manager, a colleague with accessibility knowledge, or the company's design team. Shows the person can triage the AI's output by verifiability: some things they can check themselves, some things need expert review, and the process accounts for both. Includes presenting what they've found to their manager with clear signal about what they've verified and what they haven't."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of relaying inaccurate accessibility information or unvetted implementation recommendations to their manager. No awareness of how acting on wrong information could affect the company's report templates or client deliverables.",
          "developing": "Recognizes that the information needs to be accurate but does not yet connect to the specific downstream impact — that recommendations about changing report templates could trigger actual redesign work, that accessibility claims carry compliance weight, and that the person presenting these findings to their manager implicitly vouches for their reliability.",
          "demonstrating": "Understands that accessibility standards carry compliance implications — inaccurate information could lead the company to either make unnecessary changes or miss required ones. The person presenting this research to their manager is implicitly saying 'I've looked into this and here's what I found' — and if the AI-generated specifics are wrong, the person is the source of misinformation that could drive misguided design decisions. Being transparent about what they've verified versus what they've taken at face value protects both the person and the team from acting on potentially unreliable information."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is [JOB_ROLE_CONTEXT from meta]. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
