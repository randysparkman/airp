---
role_identifier: "general"
role_label: "General Knowledge Work"
role_description: "An analyst, coordinator, project manager, or account manager at a mid-size professional services company. The kind of role where you're synthesizing information, communicating with stakeholders, producing deliverables, and making judgment calls about how to approach your work — with AI tools increasingly part of the picture."
sponsor: ""
version: "0.4.0"
---

# Job-Role-Profile: General Knowledge Work

## Organization Overview

We are a mid-size company with approximately 200 employees across several departments including marketing, operations, finance, human resources, and client services. We operate in a professional services environment — our work product is primarily documents, analysis, communications, and project deliverables rather than physical goods. Most employees spend their day working with email, spreadsheets, slide decks, internal databases, and collaboration tools.

## The Role

General office professional. This person could be an analyst, coordinator, project manager, account manager, or similar role that involves research, writing, data work, and communication as core daily activities. They work across teams, interact with both internal colleagues and external clients or stakeholders, and are expected to manage their own workload with moderate autonomy. They don't have direct reports but may coordinate work across a small team or contribute to cross-functional projects.

## AI Tools Currently in Use

The company has begun integrating AI tools into everyday workflows. Currently:

- Staff have access to a general-purpose AI assistant (similar to ChatGPT) for drafting emails, summarizing documents, brainstorming ideas, and researching topics.
- Some teams use AI-assisted features built into existing tools — smart compose in email, AI-generated summaries in meeting software, suggested formulas or charts in spreadsheets.
- The marketing team uses AI for first drafts of blog posts, social media copy, and client-facing materials that are then reviewed and edited by a human.
- Employees occasionally use AI to help analyze data, generate reports, or prepare presentation content.
- There is no formal AI usage policy yet, but managers have communicated that AI output should always be reviewed before sharing externally.

## Common Tasks

A typical week for this person includes:

- Drafting and responding to emails, including client-facing communications
- Preparing slide decks, reports, or briefs for internal or external audiences
- Researching topics, competitors, market data, or internal performance metrics
- Organizing and tracking project timelines, deliverables, and status updates
- Summarizing meeting notes or lengthy documents for stakeholders
- Collaborating on shared documents with teammates
- Pulling together data from multiple sources into a coherent analysis or recommendation
- Communicating project updates or results to managers and cross-functional partners

## Decision Authority and Accountability

This person makes judgment calls throughout their day, but most operate within established guardrails. They decide how to frame a communication, what to emphasize in a summary, which data to include in an analysis, and how to prioritize competing tasks. They don't set strategy, but they shape how information reaches the people who do.

**Routine decisions they own outright:** How to organize a report. What tone to use in a client email. Which data points to pull into a weekly update. How to structure a slide deck. These are frequent, low-review, and reflect the person's professional judgment about communication and presentation. When AI helps here, the person is accountable for the final product — nobody else reviews most of these before they go out.

**Judgment-embedded decisions that carry weight:** What to include or exclude in an analysis that informs a leadership decision. How to characterize project status in a client-facing update. Whether to flag a risk or let it ride. These decisions shape other people's understanding and actions. An AI-assisted analysis that omits a key variable, or a status update that mischaracterizes progress, can lead to misallocated resources, missed deadlines, or damaged client relationships. The person may not realize the impact until downstream consequences surface.

**Decisions they influence but don't own:** Strategic recommendations, budget allocations, client relationship decisions. The person provides the inputs — the research, the summary, the analysis — but someone else makes the call. Their accountability is in the quality and accuracy of what they provide. If AI-generated content introduces errors into the inputs, the downstream decision-maker has no way to know.

When this person gets it wrong, the consequences accumulate rather than explode. A single bad email doesn't end a client relationship. But a pattern — unverified data in reports, AI-generated claims that don't hold up under scrutiny, communications that miss the mark — erodes the person's credibility and the team's reputation over time. The damage is slow and hard to pinpoint, which makes it harder to correct.

## What's High-Stakes Here

The consequences of errors in this environment are real but varied:

- Client-facing deliverables that contain inaccurate data, fabricated statistics, or poorly reasoned analysis damage the company's credibility and can affect business relationships
- Internal reports that executives rely on for decisions need to be accurate — a flawed analysis can lead to misallocated resources or missed opportunities
- Emails and communications sent to clients or partners represent the company's voice and judgment, not just the individual's
- Confidential business information — financial data, client details, strategic plans, personnel matters — appears regularly in daily work and must be handled carefully
- Plagiarism or unattributed use of AI-generated content in published materials creates reputational and potentially legal risk
- Over-reliance on AI for analysis can mask gaps in understanding that surface later when someone asks follow-up questions or challenges the conclusions

Mistakes here don't typically carry the immediate compliance consequences of a regulated industry, but they accumulate. A professional who sends a client an AI-drafted email with a confident but incorrect claim, or who presents data they didn't verify, erodes trust in ways that are hard to recover from.

## Language and Terminology

Common terms this person encounters daily: deliverables, stakeholders, KPIs, ROI, project scope, sprint or milestone, executive summary, deck, brief, action items, follow-up, pipeline, CRM, ERP, SaaS, quarterly review, client-facing, internal memo, cross-functional, bandwidth, escalation, SOW (statement of work).

## What We Want to Know

When we assess someone in this role, we want to understand: Can this person use AI tools to work faster and produce better output without sacrificing accuracy, judgment, or appropriate care with sensitive information? Do they know when AI-generated content needs significant revision versus when it's a useful starting point? Can they maintain their own professional credibility and the company's reputation when AI is part of how they work?

---

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
    "secondary_constructs": [
      "integration",
      "judgment"
    ],
    "job_role_context": "General office professional (analyst, coordinator, project manager, or account manager) at a mid-size professional services company",
    "dol_coverage": [
      "#1 Understand AI Principles — Q1 tests whether the person understands that AI generates plausible-sounding content rather than retrieving verified facts, and that confident presentation does not signal accuracy",
      "#2 Explore AI Uses — Q3 tests whether the person can recognize where AI fits and doesn't fit in their own work, and can articulate the difference between tasks where AI is a useful starting point versus tasks where it creates risk",
      "#3 Direct AI Effectively — Q4 tests whether the person understands that the quality and specificity of what they provide to AI shapes the usefulness of what comes back",
      "#4 Evaluate AI Outputs — Q2 tests whether the person can assess whether AI-generated content is accurate and fit for purpose before it reaches a client or stakeholder",
      "#5 Use AI Responsibly — Q5 tests whether the person recognizes when work content is sensitive and adjusts their use of AI tools accordingly"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are drawn from the most frequent, personally owned tasks in this role — drafting client communications, building reports, researching topics, preparing deliverables, and handling confidential information — because those are the contexts where AI use is already happening and where the person's understanding of AI most directly shapes outcomes. The set progresses from recognition (Q1: what is AI actually doing when it produces that statistic?) through evaluation (Q2: is this output fit to send?) through application awareness (Q3: where does AI help and where does it create risk?) through input-output understanding (Q4: why does what I ask matter?) through responsibility (Q5: what happens when the content I'm working with shouldn't go into a general-purpose tool?). Together, the questions cover all five DOL areas and activate all four human functions, while staying firmly in the routine and lower judgment-embedded decision bands — the decisions this person owns and executes daily without a second reviewer."
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
      "scenario": "You're putting together a one-page brief on a competitor for an upcoming internal strategy meeting. You ask an AI assistant to help and it returns a paragraph that includes a specific statistic: 'According to a 2023 industry report, [Competitor X] holds 34% market share in the mid-market segment.' The number sounds right to you and fits the story you're building. You don't recognize the report it's citing.",
      "prompt": "What's your reaction to that statistic, and what — if anything — does it change about how you'd use it?",
      "internal_notes": "We're listening for whether the person understands that AI generates plausible-sounding content rather than retrieving verified facts — that a specific, confident-looking statistic is not evidence of accuracy. The key signal is whether they recognize the difference between 'this sounds right' and 'this is verified.' We're not testing whether they know the perfect verification workflow; we're testing whether they see the problem at all.",
      "rubric": {
        "orientation": {
          "emerging": "Accepts the numbers at face value because they look specific and well-formatted, or focuses on whether the comparison structure is useful rather than questioning the data itself. Has not yet developed a model for how AI can produce precise-looking statistics without a factual basis.",
          "developing": "Suspects the numbers might be wrong and would want to check them, but frames this as a general accuracy concern — 'I'd verify the data' — rather than articulating why AI-produced statistics behave this way in the first place: that AI generates plausible numerical continuations rather than retrieving from a database, so the revenue figures and market share percentages are not sourced at all, and their specificity is a byproduct of fluent generation rather than a signal of grounding.",
          "demonstrating": "Recognizes that the specific revenue and market share figures were fabricated by the same mechanism that produced the clean comparison structure, because the AI generates plausible-continuation text rather than retrieving verified competitor data — meaning precision and formatting share no causal connection with accuracy. Understands that any specific competitive figure in AI output needs independent verification against a real source (industry reports, public filings, internal databases), not because AI is unreliable in general, but because there was no lookup step for those numbers to begin with."
        },
        "integration": {
          "emerging": "Does not yet describe any action they would take in response to the unverified statistic before using it in the brief.",
          "developing": "Mentions that they would check the statistic but does not yet describe concretely where they would look or how they would handle it if they couldn't verify it.",
          "demonstrating": "Describes a concrete step — such as searching for the cited report directly, looking for the statistic in a known industry database, or removing or flagging the number if it can't be confirmed — before including it in a deliverable going to colleagues."
        },
        "judgment": {
          "emerging": "Does not yet consider the consequences of including an unverified statistic in a brief that will inform an internal strategy discussion.",
          "developing": "Acknowledges that using an unverified number could be a problem but does not yet connect it to the specific risk of eroding credibility when someone in the meeting challenges the source or asks for the underlying report.",
          "demonstrating": "Recognizes that presenting a fabricated or misattributed statistic in an internal strategy brief — even if no one catches it immediately — is the kind of error that surfaces later and damages credibility in ways that accumulate, especially when decision-makers act on flawed inputs."
        }
      }
    },
    {
      "id": "t1_q2",
      "sequence": 2,
      "angle": "output_fitness_for_purpose",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Express",
      "decision_band": "routine",
      "scenario": "A client has emailed asking for a status update on a project that's running slightly behind schedule. You're stretched thin and ask an AI assistant to draft the response. The draft it produces is professional, well-organized, and strikes a confident tone — it says the project is 'progressing well and on track for delivery.' That's not quite accurate, but the draft reads smoothly and would be easy to send as-is.",
      "prompt": "What goes through your mind when you read that draft, and how do you think about what to do next?",
      "internal_notes": "We're listening for whether the person understands that AI produces fluent, plausible text calibrated to the prompt — not text calibrated to the facts of the situation. The key signal is whether they recognize that 'reads well' and 'is accurate' are independent properties, and that a smooth AI draft can actively misrepresent a situation. We're also listening for whether they understand that they — not the AI — are accountable for what goes to the client.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between a draft that reads well and a draft that accurately represents the situation — treats fluency or professionalism as a sufficient signal that the content is ready to send.",
          "developing": "Recognizes that the draft contains an inaccuracy and needs to be corrected, but has not yet articulated why AI produced inaccurate content in this case — frames it as a one-time error rather than understanding that AI generates text based on the prompt's framing, not the project's actual status.",
          "demonstrating": "Understands that AI drafts client communications based on patterns and the framing provided — not on knowledge of the actual project situation — and therefore that the human must verify that the substance of any AI-drafted communication is factually accurate before it goes out, regardless of how polished it reads."
        },
        "integration": {
          "emerging": "Does not yet describe editing the draft or replacing the inaccurate characterization before sending.",
          "developing": "Indicates they would correct the draft but does not yet describe how they'd approach writing the more difficult part — accurately acknowledging a delay to a client — whether with AI's help or independently.",
          "demonstrating": "Describes editing the draft to accurately reflect the project's status, and may note that the harder task — how to frame a delay professionally and constructively — is something they'd own themselves or would re-prompt AI more specifically to help with."
        },
        "judgment": {
          "emerging": "Does not yet consider the consequences of sending a client an update that characterizes a delayed project as 'on track.'",
          "developing": "Acknowledges that sending an inaccurate update to a client would be a problem, but does not yet connect it to the specific downstream risk — that the client may make plans based on the stated timeline, and discovering the inaccuracy later damages trust in a way that is hard to recover from.",
          "demonstrating": "Recognizes that client-facing communications represent the company's voice and that sending an AI-drafted update that mischaracterizes project status — even unintentionally — is the kind of credibility erosion that compounds: the client feels misled, not just informed late."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "capability_boundaries",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Ideate",
      "decision_band": "routine",
      "scenario": "Your manager asks you to help identify ways the team could use AI tools to work more efficiently. You start thinking through your own typical week — drafting emails, pulling together data for reports, researching competitors, tracking project status, preparing slide decks for client meetings. Some of those tasks feel like obvious AI candidates; others feel less straightforward.",
      "prompt": "Which parts of your typical week feel like a good fit for AI assistance, and which feel less so — and what's the difference?",
      "internal_notes": "We're listening for whether the person has a functional mental model of what kinds of tasks AI handles well versus where its limitations create risk. The key signal is not whether they pick the 'right' tasks, but whether their reasoning reflects an underlying understanding — for example, that AI is useful for drafting and synthesis where human review follows, but less reliable for tasks where accuracy and currency of information matter and won't be verified. Generic 'AI is good at writing' responses without any acknowledgment of limitation score lower than nuanced but imperfect reasoning.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet differentiate between task types in terms of AI fit — either describes AI as useful for all tasks without qualification, or expresses general skepticism without articulating what makes some tasks higher-risk than others.",
          "developing": "Identifies some tasks as better fits than others but has not yet articulated a principle behind the distinction — the reasoning stays at surface level (e.g., 'writing is fine, data is risky') without connecting to underlying properties of how AI works, such as its tendency to generate plausible but unverified content.",
          "demonstrating": "Articulates a meaningful distinction — for example, that tasks where AI output will be reviewed and edited (drafting, brainstorming, summarizing) are lower-risk than tasks where the output will be used directly as fact (competitive data, metrics, specific claims), and that the key variable is whether someone with context will verify before the output has consequences."
        },
        "integration": {
          "emerging": "Does not yet describe any concrete way they would actually use AI in their own workflow, or any concrete area they would avoid.",
          "developing": "Names specific tasks as AI candidates but does not yet describe what their role would be in those workflows — how they'd review, adjust, or apply their own judgment to AI-assisted output.",
          "demonstrating": "Describes at least one specific task where they'd use AI as a starting point and notes what human contribution — review, fact-checking, judgment about tone or emphasis — they'd layer on top."
        },
        "judgment": {
          "emerging": "Does not yet consider whether some tasks in their week involve content or outputs where AI errors would be more consequential than others.",
          "developing": "Acknowledges that some tasks carry more risk but does not yet connect that to specific consequences — such as a flawed competitive analysis shaping a leadership decision, or an inaccurate client slide damaging a business relationship.",
          "demonstrating": "Recognizes that the stakes of an error — not just the task type — should shape how much AI involvement is appropriate and how much verification is needed, and can point to at least one task in their own week where getting it wrong would have downstream consequences for colleagues, clients, or decision-makers who rely on their output."
        }
      }
    },
    {
      "id": "t1_q4",
      "sequence": 4,
      "angle": "input_output_relationship",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Act",
      "decision_band": "routine",
      "scenario": "You need to prepare a short executive summary of last quarter's project performance for a leadership review. You try asking the AI assistant to 'write an executive summary of Q3 project performance' — and it produces something generic that doesn't reflect your team's actual work, the specific metrics that matter to your leadership, or the right tone for your organization. It's not wrong exactly, but it's not useful.",
      "prompt": "What does that result tell you, and what — if anything — would you try differently?",
      "internal_notes": "We're listening for whether the person understands that AI output quality is shaped by the quality and specificity of what goes in — that a vague prompt produces a vague result not because AI is failing, but because AI has no access to context that wasn't provided. The key signal is whether they understand the input-output relationship as a property of how AI works, not as a quirk of this particular tool.",
      "rubric": {
        "orientation": {
          "emerging": "Treats the vague output as a quality problem with the AI itself — 'it's not very good at status updates' or 'it doesn't know enough about the project.' Has not yet developed a model connecting input quality to output quality.",
          "developing": "Recognizes that adding specifics would fix the draft and can name some information that would help — milestones, deadlines, issues — but frames it as 'AI works better with more detail' rather than articulating the underlying principle: that AI has no access to context outside the prompt, so when asked for a status update with no project information, it produces a statistical average of professional status-update language because that is the only thing it had to work from.",
          "demonstrating": "Recognizes that the polished-but-vague draft is the expected output for a context-free request, because the AI has access only to what's in the prompt and will produce a statistical average of the requested genre — 'professional status update' — when no project-specific context is supplied. Understands that 'generic' is not a failure mode of the AI or a gap in its capability; it is what happens when the input contains no specifics for the output to be specific about. Providing the milestones, deadlines, and relationship context is what gives the AI the material it needs to produce a targeted draft rather than an average one."
        },
        "integration": {
          "emerging": "Does not yet describe what they would change about the prompt or what additional information they would provide.",
          "developing": "Indicates they would give the AI more information but describes this in general terms — 'I'd be more specific' — without identifying what specific context would make the prompt more useful.",
          "demonstrating": "Describes providing the AI with specific inputs — actual Q3 metrics, key themes from the project, what the leadership audience cares about, or a rough outline — and understands that this is how to get output that's actually usable rather than a generic template."
        },
        "judgment": {
          "emerging": "Does not yet consider what would happen if they sent the generic AI-generated summary to leadership without additional context or revision.",
          "developing": "Recognizes that the generic output isn't good enough to use as-is, but does not yet connect this to the specific risk — that an executive summary that doesn't reflect the team's actual performance or leadership's priorities is the kind of output that signals poor preparation and erodes the person's professional credibility.",
          "demonstrating": "Understands that an executive summary going to leadership is a high-visibility deliverable that reflects on the person's judgment and knowledge of their own work — and that submitting AI-generated content that could have been written about any team's Q3 would undermine trust in the analysis behind it."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "data_sensitivity_boundaries",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You're working on an analysis that involves several sensitive data points: a client's financial performance, details from an ongoing contract negotiation, and some internal headcount numbers that haven't been announced yet. You're finding the analysis slow going and think an AI assistant could help you structure it and draft the narrative. Your company doesn't yet have a formal AI usage policy.",
      "prompt": "How do you think about whether and how to use AI assistance here?",
      "internal_notes": "We're listening for whether the person recognizes that general-purpose AI tools process the inputs they receive — and that entering confidential business information into those tools raises questions about data handling that don't disappear just because there's no formal policy. The key signal is whether they understand the nature of the tool well enough to identify the sensitivity question, not whether they know the 'correct' corporate policy answer.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that entering confidential client, contract, or personnel information into a general-purpose AI assistant raises data handling concerns — either proceeds without hesitation or avoids AI use for unspecified or purely intuitive reasons without articulating what the concern actually is.",
          "developing": "Recognizes that the sensitive content creates some hesitation around AI use but has not yet articulated why — does not yet connect the concern to a specific property of general-purpose AI tools, such as the fact that inputs are processed by external systems whose data handling practices may not be suited to confidential business information.",
          "demonstrating": "Understands that general-purpose AI tools process the content they receive, and that entering client financial data, contract negotiation details, or unannounced personnel information into those tools means that information leaves the organization's control in ways that may not be appropriate — regardless of whether a formal policy exists."
        },
        "integration": {
          "emerging": "Does not yet describe any adjustment to how they would approach the analysis given the sensitivity of the content involved.",
          "developing": "Indicates they would be cautious or would check with someone, but does not yet describe a concrete adjustment — such as using AI only for the structural or narrative elements that don't involve the confidential specifics, or seeking clarification on approved tools before proceeding.",
          "demonstrating": "Describes a practical approach to the situation — for example, using AI to help with structure, framing, or narrative scaffolding while keeping the specific sensitive data points out of the prompt, or flagging the question to a manager before proceeding, given the absence of a formal policy."
        },
        "judgment": {
          "emerging": "Does not yet weigh the sensitivity of the specific content — client financials, contract negotiations, unannounced headcount — against the convenience of AI assistance.",
          "developing": "Acknowledges that the content is sensitive and that caution is warranted, but does not yet connect a potential misstep to specific consequences — such as a client discovering their financial data was processed through a third-party AI tool, or unannounced personnel decisions becoming exposed before the intended communication.",
          "demonstrating": "Recognizes that the absence of a formal policy does not eliminate accountability — that exposing confidential client data, live contract terms, or unannounced headcount information through a general-purpose AI tool could damage client trust, affect negotiations, or create legal and reputational risk for the company, and that these consequences would reflect on the person who made the choice to use the tool that way."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is general office professional (analyst, coordinator, project manager, or account manager) at a mid-size professional services company. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
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
    "version": "0.4.0",
    "question_count": 5,
    "estimated_minutes": 12,
    "primary_construct": "integration",
    "secondary_constructs": [
      "orientation",
      "judgment"
    ],
    "job_role_context": "General office professional (analyst, coordinator, project manager, or account manager) at a mid-size professional services company",
    "dol_coverage": [
      "#1 Understand AI Principles — Q3 tests whether the person's mental model of how AI handles structured data and multi-source synthesis holds when they're trying to produce a real analytical deliverable, not just a draft document",
      "#2 Explore AI Uses — Q1 tests whether the person can identify where AI fits within a complex, multi-step client deliverable workflow, including which stages benefit from AI and which require their own judgment",
      "#3 Direct AI Effectively — Q2 tests whether the person can describe how they'd construct, frame, and iterate on AI interaction to produce a specific, stakeholder-ready communication under real constraints",
      "#4 Evaluate AI Outputs — Q4 tests whether the person can assess an AI-generated analysis for fitness for purpose in a high-visibility context, applying their domain knowledge to identify what's missing or misleading",
      "#5 Use AI Responsibly — Q5 tests whether the person can design a working approach that gets AI's help on a sensitive project without exposing content that shouldn't leave the organization"
    ],
    "human_functions_activated": [
      "Understand",
      "Express",
      "Ideate",
      "Act"
    ],
    "design_rationale": "These five scenarios are drawn from the upper end of the judgment-embedded decision band and the boundary with escalation — the moments where this person's workflow choices have real downstream consequences for clients, leadership, and cross-functional partners. Tier 1 established that the person can recognize AI limitations, evaluate output fitness, and identify sensitivity concerns. Tier 2 now asks them to work: to describe a process for building a client deliverable with AI, to articulate how they'd direct AI to produce a specific stakeholder communication, to think through how they'd use AI to synthesize multi-source data for a leadership report, to catch and respond to a subtly flawed AI-generated analysis before it reaches an executive, and to design a working approach for a sensitive project where some content can go to AI and some cannot. Each scenario embeds enough context — a real stakeholder, a specific deliverable, a concrete constraint — that the person must describe a process, not just state a position. The set deliberately activates all four human functions and covers all five DOL areas, complementing Tier 1's coverage without repeating any of its angles.",
    "tier1_complementarity_notes": "Tier 1 covered all five DOL areas at the recognition and awareness level — testing whether the person can spot fabrication, identify when an AI draft misrepresents reality, distinguish high-fit from low-fit tasks, understand the input-output relationship, and recognize data sensitivity concerns. Tier 1 scenarios were primarily reactive: the person encountered AI output and needed to evaluate or respond to it. Tier 2 builds on this foundation by shifting to production: the person must now describe how they would actively use AI to accomplish a real deliverable, which requires not just understanding but workflow design. Any gap Tier 1 left in DOL #2 and #3 is addressed directly — Q1 and Q2 are anchored there — and the Ideate and Act functions activated in Tier 1 are extended here with richer, constraint-laden scenarios that require the person to think about sequencing, stakeholder context, and output quality simultaneously. Together, the ten questions form a coherent arc from 'do you understand what AI is doing?' through 'can you work with it effectively in your actual job?' — with Tier 3 positioned to test whether that reasoning holds under pressure."
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
      "scenario": "Your team has just wrapped a six-month client engagement and you've been asked to produce a final client deliverable: a 10–12 slide deck summarizing what was accomplished, key outcomes, and recommendations for next steps. You have access to a folder of materials — meeting notes, weekly status updates, a few data exports, and a draft SOW for the potential follow-on engagement. The deck is due in two days, and your manager has said this client is a strong renewal candidate, so the presentation needs to be polished and accurate. You're thinking through how AI might help you build it.",
      "prompt": "Walk us through where in this process you'd bring AI in, and where you'd rely on your own judgment — and why.",
      "internal_notes": "This tests opportunity recognition and workflow design together: the person needs to map AI's role across multiple stages of a real deliverable, not just identify AI as 'helpful for slides.' A strong response identifies specific stages where AI adds value (synthesizing the notes folder, drafting narrative sections, suggesting slide structure) and specific stages where the person owns the judgment (what outcomes to emphasize, how to characterize the client relationship, what to recommend for the follow-on). A weak response says 'AI could help with drafting' without differentiating across the workflow or accounting for the stakes of the renewal context.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet distinguish between what AI can usefully do with the source materials and what requires the person's own knowledge of the client relationship and engagement outcomes — treats AI as uniformly helpful or uniformly insufficient for this type of work.",
          "developing": "Recognizes that AI can help with drafting or organizing but has not yet articulated which specific inputs AI would need from the materials folder, or why certain decisions — like which outcomes to foreground for a renewal-candidate client — require human judgment rather than AI synthesis.",
          "demonstrating": "Shows a functional understanding that AI can synthesize the notes and draft structural and narrative elements from the materials provided, but that decisions about emphasis, client relationship framing, and follow-on recommendations require the person's knowledge of context that doesn't fully exist in the folder — and that the renewal stakes make the distinction between AI-produced and human-verified content especially consequential."
        },
        "integration": {
          "emerging": "Does not yet describe a differentiated workflow — either proposes using AI for the whole deck without describing how, or avoids AI without explaining a process for working with the source materials.",
          "developing": "Identifies some stages where AI could help and some where the person would take over, but the description stays vague — 'AI could draft slides and I'd review' — without describing what the person would actually give the AI, what they'd do with the output, or how they'd handle the specific challenge of synthesizing across multiple source documents.",
          "demonstrating": "Describes a concrete, sequenced process: for example, using AI to read through the notes and status updates and pull out themes or key outcomes as a starting point, then drafting the narrative sections with AI while providing the specific data points and framing the person wants emphasized, then personally writing or substantially revising the recommendations section given the follow-on SOW context, and reviewing the full deck for accuracy and tone before it goes to the client."
        },
        "judgment": {
          "emerging": "Does not yet account for the renewal-candidate context in describing how they'd approach the deck — treats this as a routine document task without considering how the stakes shape the level of review or the choices about what AI generates versus what the person owns.",
          "developing": "Acknowledges that the deck is high-stakes given the renewal context, but has not yet described how that changes their workflow — mentions reviewing carefully but doesn't connect the stakes to specific decisions about which parts of the deck AI should draft versus which the person should write.",
          "demonstrating": "Accounts for the renewal stakes in the workflow design — for example, noting that client-facing characterizations of the engagement's outcomes, the tone of the relationship framing, and the follow-on recommendations are sections where the person takes direct ownership rather than relying on AI synthesis, because errors or misjudgments in those sections carry real consequences for a business relationship in an active renewal conversation."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "directed_stakeholder_communication",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#5 Use AI Responsibly",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "A cross-functional project you've been coordinating has hit a significant milestone delay — a key deliverable that was due this Friday won't be ready until the end of next week. The delay is due to a dependency on another team that ran into a resourcing issue. You need to send an update to a group of senior stakeholders who've been tracking this project closely and who have downstream dependencies on the Friday date. You want the message to be direct, professional, and constructive — not defensive, not vague, and not so detailed that it buries the key information. You decide to use AI to help you draft it.",
      "prompt": "How would you approach working with AI to produce this message — what would you give it, and how would you make sure the result is actually what you need?",
      "internal_notes": "This tests the person's ability to describe directed AI interaction for a specific, high-stakes communication task. A strong response describes what context the person would provide to AI (the nature of the delay, the cause, the new timeline, the audience and their concerns, the tone they want), how they'd evaluate the draft against the specific requirements (direct, not defensive, not vague), and how they'd iterate if the first draft misses. A weak response says 'I'd ask AI to draft a delay email' without describing the framing, context-setting, or review process. The DOL #5 secondary signal is present because the message touches on inter-team resourcing issues that may be sensitive to characterize externally.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet show understanding that AI will draft a message calibrated to the prompt and framing provided — expects AI to produce an appropriately toned, accurate stakeholder communication from a minimal request, without recognizing that the specific constraints (direct, not defensive, constructive) need to be explicitly built into the prompt.",
          "developing": "Recognizes that the prompt needs to include the relevant facts but has not yet articulated that the tone requirements — direct but not defensive, constructive — are instructions the person needs to give AI explicitly, and that the first draft may need to be adjusted if AI defaults to a more apologetic or vague register.",
          "demonstrating": "Understands that to get a draft that meets the specific constraints of this message, the person needs to give AI the key facts (what's delayed, why, new timeline), the audience context (senior stakeholders with downstream dependencies), and the explicit tone guidance (direct, not defensive, not overly detailed) — and that reviewing the draft against those criteria is how they'd decide whether to send it, revise it, or re-prompt."
        },
        "integration": {
          "emerging": "Does not yet describe a concrete approach to directing AI for this specific communication — either describes asking AI to 'write a delay update' without additional detail, or describes writing the message without AI at all without explaining their process.",
          "developing": "Describes providing the AI with some context and reviewing the result, but the description is incomplete — doesn't address how they'd handle the tone requirements specifically, what they'd do if the draft came back too apologetic or too vague, or how they'd verify the message accurately represents the situation before sending.",
          "demonstrating": "Describes a concrete directing-and-review process: providing AI with the specific facts of the delay, the new timeline, the stakeholder audience and their downstream dependencies, and explicit tone guidance; reviewing the draft against the stated criteria (direct, constructive, not burying the key information); and iterating — either re-prompting with specific corrections or editing directly — before sending, with final sign-off as their own."
        },
        "judgment": {
          "emerging": "Does not yet consider how characterizing the delay's cause — a resourcing issue on another team — could create problems if handled without care, or how the senior-stakeholder audience shapes what level of detail and what framing is appropriate.",
          "developing": "Acknowledges that the message needs to be carefully worded given the audience or the sensitivity of attributing the delay to another team, but has not yet described how that concern shapes the specific instructions they'd give AI or the specific things they'd look for in the draft.",
          "demonstrating": "Accounts for both the audience stakes and the attribution sensitivity in their approach — for example, being specific with AI about how to characterize the cause in a way that's accurate but doesn't assign blame or create inter-team friction, and reviewing the draft specifically for whether it hits the right level of detail for senior stakeholders who need to know the impact without a full post-mortem."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "multi_source_data_synthesis",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager has asked you to put together a brief analysis — two or three pages — comparing your company's performance on a set of KPIs against industry benchmarks for the past two quarters. You have internal data in a spreadsheet, a couple of recent industry reports in PDF form, and some notes from a recent client conversation that touched on how the client sees the industry trending. The deadline is tomorrow morning, and the analysis will be used in a quarterly business review with the leadership team.",
      "prompt": "How would you use AI to help you pull this together — what role would it play, and what would you handle yourself?",
      "internal_notes": "This tests whether the person understands AI's real and practical limitations when working with multi-source data — specifically that AI can help synthesize and draft narrative, but cannot reliably extract accurate figures from data it hasn't been given in the right format, and cannot access or verify the industry reports without those being explicitly provided. A strong response describes a concrete process that accounts for where AI can add genuine value (framing the analysis structure, drafting narrative around data the person provides, identifying themes from the reports) and where the person must own the work (ensuring the actual data figures are accurate, deciding which benchmarks are most relevant, verifying that any numbers in the narrative match the source). A weak response treats AI as a general data analysis tool that will pull the comparison together from the source files without describing the person's role in managing accuracy.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet show awareness that AI cannot autonomously access, read, and accurately extract data from the person's spreadsheet and PDFs without those inputs being explicitly provided and formatted — describes a process in which AI 'analyzes the data' or 'reads the reports' as though it can reliably pull accurate figures from any source file without guidance or verification.",
          "developing": "Recognizes that the person needs to be involved in providing data to AI and reviewing the output, but has not yet articulated the specific limitation: that AI-generated numerical comparisons and benchmark citations need to be verified against the actual sources because AI may synthesize plausible-sounding figures that don't accurately reflect the documents provided.",
          "demonstrating": "Understands that AI can help structure the analysis, draft the narrative around data the person explicitly provides, and identify themes from the industry reports if those are shared in a usable format — but that the person must own the accuracy of the numbers, verify that any figures in the AI-drafted narrative match the source data, and not treat AI's synthesis of the reports as a substitute for checking the benchmarks themselves."
        },
        "integration": {
          "emerging": "Does not yet describe a concrete process for using AI in this multi-source analysis — either proposes that AI will handle the analysis with minimal input, or describes writing the whole analysis manually without describing any AI role.",
          "developing": "Identifies a role for AI in the drafting or structuring phase, but the description is incomplete — doesn't address how they'd handle the data inputs specifically, how they'd verify numerical accuracy in the AI-drafted narrative, or how they'd make sure the industry benchmark figures are real rather than AI-generated approximations.",
          "demonstrating": "Describes a concrete, sequenced process: for example, organizing the internal KPI data and key benchmark figures themselves first, then using AI to help draft the narrative structure and frame the comparison, providing AI with the specific data points to work from rather than asking it to extract from raw files, and reviewing every number in the final analysis against the source documents before it goes to leadership — with particular attention to any benchmark figures AI cited."
        },
        "judgment": {
          "emerging": "Does not yet account for the fact that this analysis will be used by the leadership team in a quarterly business review, which means errors in the KPI comparisons or benchmark figures will be visible to senior decision-makers and may inform resource or strategic decisions.",
          "developing": "Acknowledges that the analysis is high-visibility and needs to be accurate, but has not yet described how the leadership-audience stakes specifically shape their verification process or their decisions about how much to rely on AI for the numerical content versus the narrative framing.",
          "demonstrating": "Accounts for the QBR context in how they'd allocate their effort — recognizing that a leadership team acting on flawed KPI comparisons or inaccurate benchmarks represents exactly the kind of downstream decision risk described in their accountability, and describing a process where the accuracy of the numbers is treated as non-negotiable regardless of how confident the AI-drafted narrative reads."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "output_quality_in_high_visibility_context",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Act",
      "decision_band": "escalation",
      "scenario": "A colleague is out sick and you've been asked to cover for them by finalizing a market analysis they'd started. They used an AI assistant to pull together a first draft, and the document looks thorough — it has sections covering market size, key competitors, recent trends, and growth projections. As you read through it carefully before sending it to a director who needs it for an external client proposal, you notice a few things: one of the competitor descriptions seems to be missing a major product line that you know exists; the growth projections cite a '2024 forecast' but don't specify a source; and one section uses a confident phrase — 'industry experts widely agree' — without attributing any specific experts.",
      "prompt": "How do you handle this — what's your process for getting this document to a state where you're comfortable putting it in front of a director for a client proposal?",
      "internal_notes": "This tests the person's ability to evaluate a complex AI-generated document for fitness for purpose in a high-visibility context, and to describe a concrete remediation process. The scenario is calibrated to the escalation boundary: the person must decide what they can fix themselves, what needs to be flagged to the director before it goes to the client, and whether the document is in a state where it can go forward at all. A strong response describes a systematic review process, prioritizes the specific issues by risk (fabricated growth projections > vague competitor data > unsourced consensus claim), and addresses what the person would do with each: verify, rewrite with verified data, flag to the director, or hold the document until issues are resolved. A weak response treats the issues as minor edits and describes a light review before sending.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet recognize that the three issues identified — missing competitor information, unsourced growth projections, and unattributed 'expert consensus' — are characteristic AI output problems rather than simple editorial gaps, and does not connect them to the risk of fabrication or confident-sounding synthesis without underlying evidence.",
          "developing": "Recognizes that the issues need to be addressed before the document goes to the director, but has not yet articulated that unsourced projections and unattributed consensus claims are the type of content AI routinely generates as plausible-sounding synthesis — and therefore carry a specific risk of being inaccurate or entirely fabricated rather than merely imprecise.",
          "demonstrating": "Recognizes that growth projections without a named source and 'industry experts widely agree' without attribution are classic AI synthesis patterns — generated to sound credible rather than retrieved from verified sources — and that a document containing these elements in their current form is not ready for a client-facing proposal regardless of how polished the rest looks."
        },
        "integration": {
          "emerging": "Does not yet describe a concrete process for evaluating and remediating the specific issues before the document moves forward — either proposes light copyediting and sending, or describes flagging the whole document without describing what they'd address themselves.",
          "developing": "Describes fixing the issues but stays at a general level — 'I'd verify the facts and add sources' — without describing which issues they'd prioritize, how they'd verify the growth projections or competitor information specifically, or at what point they'd involve the director rather than resolving issues on their own.",
          "demonstrating": "Describes a systematic, prioritized remediation process: for example, attempting to verify the growth projection by finding the cited 2024 forecast source; checking the competitor's current product line directly; treating the 'experts widely agree' phrase as requiring either a real source or removal; and making a clear decision about what they can fix versus what they need to flag to the director — including being explicit with the director about what was AI-generated and what they were able to verify before it goes to the client."
        },
        "judgment": {
          "emerging": "Does not yet weigh the consequences of forwarding a client-facing market analysis that contains unverified projections, an incomplete competitor description, or unsourced consensus claims — treats the issues as editorial rather than substantive risks for the director and the client relationship.",
          "developing": "Recognizes that the document has real issues that could reflect badly if they surface with the client, but has not yet described how the client-proposal context specifically shapes the standard of review — whether 'probably fine' is a sufficient bar for a document going into an external proposal, and what the director needs to know about the document's provenance to make that call.",
          "demonstrating": "Treats the escalation boundary explicitly: the person's job here is not just to clean up the document but to give the director what they need to make an informed decision about whether and how to use it — which means being transparent about what was AI-generated, what the person verified, and what they couldn't resolve in the time available, so the director can decide whether to delay, supplement, or proceed with the analysis as-is."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "responsible_use_workflow_design",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#2 Explore AI Uses",
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "You've been asked to prepare a briefing document for your manager ahead of a contract renewal negotiation with one of your company's largest clients. The briefing should cover the history of the relationship, key engagement metrics from the past year, a summary of any issues or friction points that came up, and a few talking points for the negotiation. You have access to everything you'd need — CRM notes, project records, invoices, and some candid internal emails about a service delivery issue that happened earlier in the year. You'd like to use AI to help you draft the document efficiently, but some of what you're working with feels sensitive.",
      "prompt": "How would you think through which parts of this project AI can help with, and how you'd structure your approach to the parts it can't — or shouldn't?",
      "internal_notes": "This tests whether the person can design a practical, differentiated working approach that gets real value from AI while keeping sensitive content appropriately bounded — not just recognizing sensitivity in the abstract (Tier 1 tested that) but describing a concrete workflow that accounts for it. A strong response distinguishes between content that can go to AI (general structure, drafting talking points from non-sensitive framing, synthesizing non-confidential engagement metrics) and content that needs to stay out (candid internal emails about service issues, specific contract terms, negotiation strategy), and describes how they'd actually work across both categories. A weak response either avoids AI entirely for safety or ignores the sensitivity and describes using AI on everything.",
      "rubric": {
        "orientation": {
          "emerging": "Does not yet show awareness that different categories of content in this briefing carry different levels of sensitivity — treats all of the source material as either uniformly safe or uniformly off-limits for AI use, without distinguishing between engagement metrics and candid internal emails about service failures.",
          "developing": "Recognizes that the candid internal emails and negotiation-related content are more sensitive than the general relationship history or metrics, but has not yet articulated why the distinction matters in terms of what happens when content enters a general-purpose AI tool — does not connect the concern to the nature of how AI processes inputs.",
          "demonstrating": "Shows a functional understanding that general-purpose AI tools process and may retain the content they receive — and that candid internal communications about service delivery failures, active contract terms, and negotiation strategy represent categories of information that are particularly sensitive to expose through an external tool, both because of what the information contains and because of the active business context in which it's being used."
        },
        "integration": {
          "emerging": "Does not yet describe a differentiated approach — either proposes using AI for the entire briefing including the sensitive source materials, or avoids AI entirely without describing any workflow for how they'd produce the document efficiently.",
          "developing": "Identifies that some content should stay out of AI and some is fine to use, but describes the division in general terms without mapping it to the specific categories of content in this scenario or describing how they'd actually produce the sensitive sections without AI assistance.",
          "demonstrating": "Describes a concrete, differentiated workflow: for example, using AI to draft the relationship history section and the talking points framework from publicly available or non-sensitive context the person provides directly; keeping the candid service delivery emails and negotiation specifics out of the AI prompt and writing those sections — or the summary of friction points — directly from their own notes; and using AI for structure and language refinement on the output without feeding it the sensitive source content."
        },
        "judgment": {
          "emerging": "Does not yet weigh the consequences of feeding sensitive content — candid internal emails about a service issue, active contract renewal terms — into a general-purpose AI tool ahead of a negotiation with the company's largest client.",
          "developing": "Acknowledges that the sensitive content shouldn't go into AI without fully articulating what the downstream consequences would be — for example, that internal characterizations of a service failure could shape the AI's framing in ways that expose the company's position, or that contract details entering an external tool creates a data handling issue that could affect the client relationship if discovered.",
          "demonstrating": "Accounts for the active negotiation context specifically: recognizes that the combination of candid internal communications about friction points and live contract renewal discussions represents a category of information where the stakes of inappropriate AI use are heightened — not just as an abstract data sensitivity matter, but because how that information is handled in the weeks before a negotiation has direct business consequences — and describes a workflow designed around that reality rather than general caution."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is general office professional (analyst, coordinator, project manager, or account manager) at a mid-size professional services company. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principle: reward what is present in the response. Short responses that demonstrate good judgment or understanding earn full credit on those constructs — brevity is not a deficiency. Score what the person shows, not what they didn't elaborate on. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
