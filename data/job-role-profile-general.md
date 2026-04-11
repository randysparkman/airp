---
role_identifier: "general"
role_label: "General Knowledge Work"
role_description: "An analyst, coordinator, project manager, or account manager at a mid-size professional services company. The kind of role where you're synthesizing information, communicating with stakeholders, producing deliverables, and making judgment calls about how to approach your work — with AI tools increasingly part of the picture."
version: "0.3.0"
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
    "secondary_constructs": ["integration", "judgment"],
    "job_role_context": "General knowledge worker at a mid-size professional services company",
    "dol_coverage": [
      "#4 Evaluate AI Outputs (Q1)",
      "#3 Direct AI Effectively (Q2)",
      "#1 Understand AI Principles (Q3)",
      "#5 Use AI Responsibly (Q4)",
      "#2 Explore AI Uses (Q5)"
    ],
    "human_functions_activated": ["Understand", "Express", "Ideate", "Act"],
    "design_rationale": "The set opens with an output evaluation scenario grounded in everyday report work, moves into the input-output relationship through a real communication task, tests the mental model through a research scenario that exposes AI's generative nature, probes responsibility through a data sensitivity situation, and closes with opportunity recognition in a team workflow. The progression moves from reacting to AI output toward seeing where AI could be applied — building toward Tier 2's deeper integration focus. Scenarios target routine and lower judgment-embedded decision bands."
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
      "angle": "fabrication_in_data_context",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "routine",
      "scenario": "You're putting together a brief for your manager comparing your company's quarterly performance to two competitors. You ask the AI assistant to help, and it produces a clean, well-organized comparison — but it includes specific revenue figures and market share percentages for the competitors that you didn't provide.",
      "prompt": "What do you make of those numbers?",
      "internal_notes": "Tests whether the person understands that AI generates plausible-sounding data rather than retrieving verified facts. The specific numbers are the diagnostic — does the person recognize that confident, formatted statistics can be fabricated? The data context (competitive analysis for a manager) raises the stakes above a purely personal task.",
      "rubric": {
        "orientation": {
          "emerging": "Accepts the numbers at face value because they look specific and well-formatted, or focuses on whether the comparison structure is useful rather than questioning the data itself. Has not yet developed a model for how AI can produce precise-looking statistics without a factual basis.",
          "developing": "Suspects the numbers might be wrong and would want to check them, but frames this as a general accuracy concern rather than connecting it to how AI generates content. May say 'I'd verify the data' without articulating why AI-produced numbers are specifically unreliable.",
          "demonstrating": "Recognizes that AI generates plausible content rather than looking up verified facts. Understands that specific-looking numbers — revenue figures, percentages, market share data — can be entirely fabricated while appearing authoritative. Sees that the precision and formatting of the output is independent of its accuracy."
        },
        "integration": {
          "emerging": "Does not yet describe what they would do with the AI output beyond accepting or rejecting it.",
          "developing": "Mentions checking the numbers but does not yet indicate where they would go for accurate competitive data or how they would use the AI output alongside verified sources.",
          "demonstrating": "Shows evidence of a practical approach — using the AI's structure or framing while sourcing the actual numbers from reliable places (industry reports, public filings, internal databases). Treats the AI output as a useful scaffold rather than a finished product."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if fabricated competitive data reaches the manager and informs a business decision. No connection between data quality and downstream consequences.",
          "developing": "Recognizes that sending unverified numbers to a manager would be a problem, but the concern stays general rather than connecting to the specific pattern of credibility erosion described in the role.",
          "demonstrating": "Understands that a competitive brief with fabricated statistics isn't just inaccurate — it could shape the manager's strategic thinking in the wrong direction. Recognizes that the person's credibility depends on the reliability of the analysis they provide, and that a pattern of unverified AI-assisted claims erodes trust over time."
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
      "scenario": "A client emails asking for a status update on their project. You ask the AI assistant to draft a reply. The draft it produces is professional and polished, but it's vague — it says things like 'progress is on track' and 'the team is making good headway' without any of the specifics the client would actually want to know.",
      "prompt": "Why do you think the draft came out this way, and what would you do?",
      "internal_notes": "Tests whether the person understands the input-output relationship — that AI output quality depends on what the AI was given to work with. The vague draft is a direct consequence of a vague request. Does the person see the connection between what they provided and what they got back, or do they treat the AI as an independent author that should have known better?",
      "rubric": {
        "orientation": {
          "emerging": "Treats the vague output as a quality problem with the AI itself — 'it's not very good at status updates' or 'it doesn't know enough about the project.' Has not yet developed a model connecting input quality to output quality.",
          "developing": "Recognizes that they would need to add specifics before sending, but does not yet connect the vagueness of the output to the vagueness of their original request. Sees the problem in the output without tracing it to the input.",
          "demonstrating": "Understands that the AI produced vague content because it had no project-specific details to work with. Recognizes that AI generates language patterns — professional-sounding status updates — but cannot know which milestones were hit, what's behind schedule, or what the client cares about unless told. The quality of the input determines the quality of the output."
        },
        "integration": {
          "emerging": "Would either send the vague draft, discard the draft and write from scratch, or manually rewrite the entire thing. Does not yet describe how to work with the AI more effectively.",
          "developing": "Would edit the draft to add specifics, but treats this as a one-time fix rather than an approach to getting better results. Does not yet describe giving the AI better input.",
          "demonstrating": "Shows evidence of an iterative approach — would give the AI the actual project details (milestones completed, upcoming deadlines, open issues) and ask for a new draft, or would describe providing context that shapes the output. Sees working with AI as a back-and-forth process, not a single pass."
        },
        "judgment": {
          "emerging": "Has not yet considered what a vague status update communicates to the client. Focuses on the writing quality rather than the communication impact.",
          "developing": "Recognizes that the client needs real information, but does not yet connect this to the broader pattern — that a client receiving polished but substanceless updates from this person would begin to question the person's engagement with their project.",
          "demonstrating": "Understands that a client-facing status update represents the person's professional judgment about what's important to communicate. A vague update — even a polished one — signals that the person either doesn't know the details or doesn't think the client needs them. Either way, it erodes the client's confidence in the person managing their project."
        }
      }
    },
    {
      "id": "t1_q3",
      "sequence": 3,
      "angle": "confidence_vs_accuracy",
      "dol_content_area": "#1 Understand AI Principles",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You need to research a topic you're not very familiar with — a new industry regulation that might affect one of your clients. You ask the AI assistant to explain the regulation and its implications. The response is detailed, clearly organized, and sounds authoritative. It cites what appear to be specific provisions and effective dates.",
      "prompt": "How confident are you in what the AI just told you?",
      "internal_notes": "Tests the person's mental model for AI confidence vs. accuracy — particularly in a domain where the person lacks the expertise to independently verify. The regulation context means the person can't easily spot errors through domain knowledge alone. Does the person understand that AI's confident tone and specific-sounding details don't correlate with factual reliability?",
      "rubric": {
        "orientation": {
          "emerging": "Takes the detailed, well-organized response at face value. The authoritative tone and specific provisions create confidence in the output. Has not yet developed a model where AI can sound certain about things it has wrong.",
          "developing": "Expresses some caution — 'I'd probably double-check a few things' — but the caution is instinctive rather than grounded in an understanding of why AI-generated regulatory information is specifically unreliable. May be more cautious because the topic is unfamiliar rather than because they understand how AI works.",
          "demonstrating": "Understands that AI presents all information — accurate or fabricated — with the same confident, authoritative tone. Recognizes that detailed organization, specific-sounding provisions, and precise dates do not indicate the AI has access to current regulatory information. Sees that the AI's confident presentation is a feature of how it generates language, not an indicator of factual reliability. May note that this is especially risky when the person lacks domain knowledge to spot errors."
        },
        "integration": {
          "emerging": "Would use the AI's explanation as-is for client work, or does not describe any verification approach.",
          "developing": "Would check some of the information but does not yet describe how — where would they look? What would they verify first? The verification intent is present but the method is vague.",
          "demonstrating": "Describes a practical approach to verification — checking the regulation through official sources, consulting someone with regulatory expertise, or using the AI output as a starting map that requires independent confirmation before it shapes client-facing work. Treats the AI's response as a hypothesis to test rather than a reference to cite."
        },
        "judgment": {
          "emerging": "Has not yet considered what happens if inaccurate regulatory information reaches the client. No connection between this task and the downstream consequences of acting on wrong information.",
          "developing": "Recognizes that regulatory information needs to be accurate but does not yet connect this to the specific weight this kind of information carries — that a client relying on the person's analysis might make business decisions based on it.",
          "demonstrating": "Understands that sharing inaccurate regulatory information with a client is not just an error — it's a professional failure that could lead to the client making uninformed decisions. Recognizes that the person's role as the information provider means the client has no way to know the research was AI-generated and unverified. The person's credibility is specifically at risk when they relay information they can't personally vouch for."
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
      "scenario": "You're behind on preparing a quarterly review deck for a major client. You have all the data — client revenue numbers, contract terms, internal margin figures, and some candid notes from your manager about the relationship's future. You're thinking about pasting everything into the AI assistant so it can help you organize the deck quickly.",
      "prompt": "Anything give you pause here?",
      "internal_notes": "Tests whether the person recognizes that not all information should be fed into an AI tool, even when the efficiency gain is real. The scenario includes a mix of client confidential data, internal business data, and sensitive internal commentary. Does the person see the boundary, or does the time pressure override it?",
      "rubric": {
        "orientation": {
          "emerging": "Focuses entirely on the efficiency opportunity — sees the AI as a tool to organize the deck faster and does not yet recognize a concern with the information being shared. Has not yet developed a model for what happens to data entered into an AI assistant.",
          "developing": "Feels some hesitation about sharing 'everything' but the concern is vague — may sense that the manager's candid notes are sensitive without articulating why sharing them with an AI tool is different from having them on a shared drive.",
          "demonstrating": "Recognizes that pasting confidential client data, internal margin figures, and especially candid internal commentary into an AI assistant raises data sensitivity concerns. Understands that AI tools may store or process inputs in ways the person doesn't control, and that the nature of the information matters — not everything in the person's working files should go into an external tool. Distinguishes between information types: some of this data is just numbers, but the manager's relationship notes are the kind of internal commentary that should not leave its original context."
        },
        "integration": {
          "emerging": "Would paste everything into the AI and use the output. No differentiation between what to share and what to withhold.",
          "developing": "Would hold back some information but does not yet describe a clear principle for what to include and what to keep out, or how to still get useful help from the AI without sharing sensitive details.",
          "demonstrating": "Shows evidence of a practical approach — would give the AI the structural task (organize a quarterly review deck) with non-sensitive information, while keeping confidential specifics and internal commentary out. Sees that the person can get the AI's organizational help without sharing everything."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of sharing sensitive information with an AI tool. Focused on meeting the deadline.",
          "developing": "Recognizes that some of the information is sensitive but does not yet connect this to specific risks — what could actually go wrong if internal margin figures or candid manager notes were processed by an AI tool.",
          "demonstrating": "Understands that the risk is concrete: confidential client data and internal strategic commentary shared with an external AI tool could surface in unintended contexts, violate client confidentiality expectations, or expose internal deliberations that were meant to stay between the person and their manager. Recognizes that time pressure doesn't change what information should be protected."
        }
      }
    },
    {
      "id": "t1_q5",
      "sequence": 5,
      "angle": "opportunity_recognition",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": null,
      "human_function_activated": "Ideate",
      "decision_band": "routine",
      "scenario": "Every Monday, you and three teammates each send your manager a separate email summarizing what you worked on last week and what's planned for the coming week. Your manager has mentioned that reading and synthesizing four separate updates takes more time than they'd like, and they wish there were a faster way to get the full picture.",
      "prompt": "Do you see a way AI could help with this?",
      "internal_notes": "Tests whether the person can identify an opportunity for AI in a recurring team workflow. The scenario describes a real friction point — manual synthesis of multiple text inputs — that maps well to what AI is good at. Does the person see the fit? Do they also recognize what AI would and wouldn't handle well in this specific situation?",
      "rubric": {
        "orientation": {
          "emerging": "Either does not see how AI could help, or suggests AI could replace the entire process — including the judgment about what matters most across the team's updates. Has not yet developed a model for which parts of this task AI handles well and which require human judgment.",
          "developing": "Sees a general opportunity — 'AI could combine the updates' — but does not yet think through what the synthesis task actually involves. The suggestion is plausible but doesn't distinguish between assembling information (something AI does well) and deciding what's important to highlight (something the manager brings).",
          "demonstrating": "Identifies the specific match: the manager's task is reading four text updates and pulling out the key themes, blockers, and priorities — exactly the kind of text synthesis AI handles well. Also recognizes the limits: the AI can organize and surface patterns but the manager still needs to apply judgment about what matters most, what to act on, and what to flag. Sees AI as reducing the mechanical work, not replacing the manager's perspective."
        },
        "integration": {
          "emerging": "No concrete suggestion for how the AI would be used. The response stays abstract or says 'just use AI for it.'",
          "developing": "Suggests feeding the updates to the AI for a combined summary but does not yet think through what that looks like in practice — who runs it, what the output looks like, how the manager interacts with it.",
          "demonstrating": "Describes a concrete application — the four updates go into the AI, which produces a consolidated summary organized by theme or priority, and the manager reviews the synthesis rather than reading four separate emails. The response need not detail every step but should convey that the person sees a practical, specific way to apply AI to this task."
        },
        "judgment": {
          "emerging": "Focuses entirely on the efficiency gain without considering what could go wrong or what the manager might lose in a shift to AI-synthesized updates.",
          "developing": "Mentions that the manager should still review the AI's summary, but the concern is generic rather than connected to what specifically matters about this workflow.",
          "demonstrating": "Recognizes that the manager's weekly update review isn't just about information transfer — it's how they stay connected to what each team member is actually doing. An AI summary that mischaracterizes someone's update, buries a significant blocker, or flattens nuance could cause the manager to miss something that matters. The person sees the value of the efficiency gain while also recognizing what the human synthesis step provides."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is a general knowledge worker at a mid-size professional services company. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
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
    "secondary_constructs": ["orientation", "judgment"],
    "job_role_context": "General knowledge worker at a mid-size professional services company",
    "dol_coverage": [
      "#3 Direct AI Effectively (Q1)",
      "#2 Explore AI Uses (Q2)",
      "#4 Evaluate AI Outputs (Q3)",
      "#5 Use AI Responsibly (Q4)",
      "#1 Understand AI Principles + #2 Explore AI Uses (Q5)"
    ],
    "human_functions_activated": ["Express", "Act", "Understand", "Ideate"],
    "design_rationale": "Tier 2 shifts from recognizing what AI does to working with AI to produce real deliverables. The set opens with a directed drafting task under specific constraints, moves to evaluating an automation opportunity, tests domain-informed output evaluation, probes accountability in a collaborative AI-assisted workflow, and closes with assessing AI fit across different task types. Scenarios target upper judgment-embedded decisions and the escalation boundary — the person is producing work that shapes decisions others will make.",
    "tier1_complementarity_notes": "Tier 1 established whether the person can spot fabrication, understand the input-output relationship, calibrate confidence, recognize data sensitivity, and see opportunities for AI. Tier 2 builds on all of these by putting the person inside the task — they are not reacting to AI output but actively working with AI to produce deliverables where their process choices carry consequences. Across the 10 questions, all 5 DOL areas and all 4 human functions are covered."
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
      "angle": "directed_drafting_under_constraints",
      "dol_content_area": "#3 Direct AI Effectively",
      "dol_secondary": "#4 Evaluate AI Outputs",
      "human_function_activated": "Express",
      "decision_band": "judgment-embedded",
      "scenario": "A long-running client project just hit a major setback — a key deliverable will be three weeks late because of a vendor dependency that fell through. Your manager asks you to draft a client email explaining the delay. The tone matters: this client has been patient through earlier, smaller delays, and your manager specifically says 'we need to be honest without making it sound like we don't have our act together.' You decide to use the AI assistant to help with the draft.",
      "prompt": "How would you approach this — what would you give the AI, and how would you work with what it produces?",
      "internal_notes": "Tests whether the person can direct AI effectively in a high-stakes communication task where tone, framing, and specific context all matter. The constraint — honest but not damaging — requires the person to think about what context the AI needs and where human judgment has to shape the final product. A strong response describes what they would feed the AI and how they would evaluate and refine the output.",
      "rubric": {
        "orientation": {
          "emerging": "Treats the AI as a standalone drafter — asks it to 'write a professional email about a project delay' and expects the output to handle the nuance. Has not yet developed a model for why a generic prompt produces generic output in a situation that demands specific tone and framing.",
          "developing": "Recognizes that the AI will need some context about the situation but does not yet think through which details shape the tone and framing — the client's history of patience, the vendor dependency, the manager's specific guidance about honesty without damage.",
          "demonstrating": "Understands that the quality of this draft depends on what the person provides: the specific situation (vendor failure, not the team's failure), the relationship context (client has been patient, earlier delays exist), and the tonal constraint (honest, not defensive or alarming). Recognizes that AI can produce professional language but cannot navigate the political and relational judgment this email requires without explicit direction."
        },
        "integration": {
          "emerging": "Describes a single-pass approach: ask AI to write the email, review it, send it. No iteration, no context-shaping, no description of what the review would focus on.",
          "developing": "Would provide some context and review the draft, but the process stays vague — does not yet describe what specifically they would look for in the review or how they would iterate if the tone isn't right.",
          "demonstrating": "Describes a working process: gives the AI the key facts and tonal guidance, evaluates the draft against the specific constraint (honest without damaging), and refines — possibly adjusting the framing of the vendor dependency, softening or strengthening language about next steps, ensuring the email acknowledges the client's patience without over-apologizing. The response shows the person working with the AI as a drafting partner, not an autonomous author."
        },
        "judgment": {
          "emerging": "Has not yet considered what's at stake in this specific email beyond getting it sent. Focuses on the efficiency of using AI to draft it.",
          "developing": "Recognizes that the tone matters and the client relationship is delicate, but does not yet connect this to the broader pattern — this email is the latest in a series of communications that define how the client perceives the team's competence.",
          "demonstrating": "Understands that this email is high-stakes precisely because of the accumulated history. A client who has already been patient through earlier delays is evaluating whether to stay patient. The wrong tone — too casual, too defensive, too corporate — could be the moment the client's goodwill runs out. The person's judgment about framing, not just the AI's prose, determines whether this communication strengthens or erodes the relationship."
        }
      }
    },
    {
      "id": "t2_q2",
      "sequence": 2,
      "angle": "automation_evaluation",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": null,
      "human_function_activated": "Act",
      "decision_band": "judgment-embedded",
      "scenario": "A colleague shows you a workflow they've set up: every Friday afternoon, the AI assistant automatically pulls the team's project tracker data and generates a summary report that gets emailed to the department head. Your colleague is proud of it — it saves the team about 45 minutes a week and the reports look clean and professional. They suggest you set up something similar for the client-facing project updates you send every week.",
      "prompt": "What's your reaction? Would you adopt this for your client updates?",
      "internal_notes": "Tests whether the person can evaluate an existing AI automation and think critically about whether it transfers to a different context — specifically, from an internal report to a client-facing deliverable. The colleague's workflow works for internal use, but applying the same approach to client communications introduces different stakes. A strong response distinguishes between the two contexts rather than accepting or rejecting the idea wholesale.",
      "rubric": {
        "orientation": {
          "emerging": "Thinks it's a great idea and would replicate it directly for client updates. Sees the efficiency gain and polished output without distinguishing between an internal summary and a client-facing communication. Has not yet developed a model for how the same AI workflow carries different risks in different contexts.",
          "developing": "Expresses some hesitation about the client-facing application but the concern is instinctive — 'I'd want to review it first' — without articulating why a client-facing report requires different handling than an internal one.",
          "demonstrating": "Sees the key distinction: an automated internal summary that goes to a department head operates in a forgiving context where errors can be corrected in conversation. An automated client-facing update operates in a context where the report is the communication — the client won't follow up to clarify, they'll form judgments based on what they read. Understands that the same AI capability carries different risk profiles depending on the audience and stakes."
        },
        "integration": {
          "emerging": "Would adopt the workflow as-is for client updates. No adaptation described.",
          "developing": "Would add a review step but does not yet describe how the workflow would change — what the review would focus on, or how the process would be restructured for a client-facing context.",
          "demonstrating": "Describes how to adapt the workflow: might use the AI to generate a draft from the project tracker data, but build in a review and editing step where the person applies their knowledge of the client — what they care about, what to emphasize, what to leave out, what needs human framing. Restructures from fully automated to AI-assisted, matching the process to the stakes."
        },
        "judgment": {
          "emerging": "Focuses entirely on the time savings. Has not yet considered the consequences of an automated AI report going directly to a client.",
          "developing": "Recognizes that errors reaching a client would be worse than errors reaching a department head, but the reasoning is surface-level.",
          "demonstrating": "Understands that a client-facing project update carries the company's credibility. An AI-generated report that mischaracterizes project status, omits a problem the team is working through, or uses generic language where the client expects tailored insight could damage the relationship in ways that are hard to trace back to the automation. Sees that the 45-minute time savings needs to be weighed against the risk of an unreviewed communication going out under the person's name."
        }
      }
    },
    {
      "id": "t2_q3",
      "sequence": 3,
      "angle": "domain_informed_output_evaluation",
      "dol_content_area": "#4 Evaluate AI Outputs",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Understand",
      "decision_band": "judgment-embedded",
      "scenario": "You're preparing a slide deck for a quarterly business review with a major client. You ask the AI assistant to analyze the client's account data from the past quarter and produce three key takeaways for the executive summary slide. The AI returns: (1) revenue grew 12% quarter-over-quarter, (2) the client's engagement with your team's deliverables increased significantly, and (3) the account is on track to exceed its annual target. You know the account — you've been the day-to-day contact for six months.",
      "prompt": "How do you evaluate these three takeaways before they go into the deck?",
      "internal_notes": "Tests whether the person can bring their domain knowledge to bear on evaluating AI-generated analysis. The three takeaways sound reasonable but may not reflect reality — and the person has the relationship knowledge to assess them. Does the person rely on the AI's summary because it sounds right, or do they test it against what they actually know about this client? This is Tier 2 because the person needs to describe a process for evaluation, not just recognize a concern.",
      "rubric": {
        "orientation": {
          "emerging": "Accepts the three takeaways because they sound positive and plausible. Has not yet developed a model for questioning AI-generated analysis when it aligns with what they'd want to hear — confirmation bias makes AI output harder to scrutinize when the news is good.",
          "developing": "Would check the revenue number against the actual data but does not yet think through the softer claims — 'engagement increased significantly' and 'on track to exceed annual target' — which are the kind of qualitative assessments that AI generates confidently without supporting evidence.",
          "demonstrating": "Recognizes that each takeaway requires different evaluation. The revenue figure is verifiable against data. 'Engagement increased significantly' is a qualitative claim that may mean different things — the AI could be interpreting any metric as 'engagement.' 'On track to exceed annual target' is a forward-looking projection that depends on assumptions the person needs to examine. Understands that AI-generated takeaways that sound like strategic analysis are often pattern-matched language rather than actual analytical reasoning."
        },
        "integration": {
          "emerging": "Would put the takeaways into the deck, possibly with minor wording changes. No evaluation process described.",
          "developing": "Would verify the revenue number and maybe adjust the wording of the other two, but does not yet describe a systematic approach to evaluating AI-generated analysis against their own knowledge of the account.",
          "demonstrating": "Describes checking each takeaway against what they know: verifying the revenue figure against the actual data, testing 'engagement increased' against their firsthand experience with the client's responsiveness and satisfaction, and examining the annual target claim against the pipeline and contract structure they're familiar with. Uses their six months of relationship context as the primary evaluation lens, not just the data."
        },
        "judgment": {
          "emerging": "Has not yet considered the consequences of presenting AI-generated takeaways to a client in a quarterly business review. Focuses on whether the slide looks good.",
          "developing": "Recognizes that inaccurate claims in a QBR deck would be embarrassing, but does not yet think through the specific dynamic — that presenting overly optimistic AI-generated analysis to a client executive could create expectations the team can't meet, or signal that the person preparing the deck doesn't actually understand the account.",
          "demonstrating": "Understands that a quarterly business review is a moment where the client evaluates whether the team understands their business. Presenting AI-generated takeaways that don't match the client's own experience of the engagement — claiming engagement increased when the client knows they've been frustrated, or projecting growth that isn't supported by the pipeline — doesn't just look wrong. It signals that the person presenting is disconnected from the actual relationship. The deck represents the person's understanding of the account, and getting it wrong in front of the client erodes trust in a way that's immediately visible."
        }
      }
    },
    {
      "id": "t2_q4",
      "sequence": 4,
      "angle": "accountability_in_collaborative_ai_use",
      "dol_content_area": "#5 Use AI Responsibly",
      "dol_secondary": "#3 Direct AI Effectively",
      "human_function_activated": "Express",
      "decision_band": "escalation",
      "scenario": "Your team is responding to an RFP (request for proposal) from a potential new client. The deadline is tight. Your teammate uses the AI assistant to draft the 'Company Background and Qualifications' section, pulling from the company website and past proposals. Another teammate uses AI to generate the proposed project timeline. You're responsible for assembling the final document, writing the executive summary, and submitting it. As you review the assembled draft, you notice the qualifications section includes a case study you don't recognize, and the timeline seems aggressive compared to similar past projects.",
      "prompt": "How do you handle this, given the deadline pressure?",
      "internal_notes": "Tests accountability in a collaborative workflow where multiple people used AI and the person assembling the final product discovers potential issues. The deadline pressure creates tension between thoroughness and speed. Does the person take ownership of the final product's accuracy, or treat each section as their teammate's responsibility? This is an escalation-boundary scenario — the person needs to decide whether to flag concerns to the team or let things go to meet the deadline.",
      "rubric": {
        "orientation": {
          "emerging": "Treats each section as the responsibility of the person who wrote it. Assumes the AI-generated content is probably fine because teammates reviewed it. Has not yet developed a model for how AI-generated content can introduce errors that propagate through a collaborative workflow — a fabricated case study or unrealistic timeline can end up in a submitted proposal precisely because everyone assumed someone else checked.",
          "developing": "Recognizes both concerns — the unfamiliar case study and the aggressive timeline — but does not yet connect them to a pattern of how AI generates content. May see the case study issue as a mistake and the timeline issue as an opinion, without recognizing that both may be artifacts of AI generating plausible-sounding content without grounding.",
          "demonstrating": "Understands that both issues have the same root: AI generating confident, specific content that may not be grounded in fact. A fabricated case study is a hallucination. An aggressive timeline may reflect AI pattern-matching against optimistic project descriptions rather than realistic scheduling. Recognizes that in a collaborative AI-assisted workflow, the person assembling the final product is the last line of defense — if they don't catch it, nobody will."
        },
        "integration": {
          "emerging": "Submits the proposal as-is to meet the deadline, or makes minor wording changes without verifying the substance. No process for resolving the concerns.",
          "developing": "Would flag the issues to teammates but does not yet describe how to handle the deadline tension — what to do if verification takes longer than the deadline allows, or how to triage which concerns are higher priority.",
          "demonstrating": "Describes a practical process under time pressure: verifies the case study (can they find it in past proposals or on the company website?), checks the timeline against comparable past projects or asks the teammate who generated it about their assumptions, and makes a judgment call about what to fix, what to flag, and what to escalate. Recognizes that assembling the final document means owning its accuracy — the client won't see individual contributions, they'll see a single proposal with the company's name on it."
        },
        "judgment": {
          "emerging": "Prioritizes the deadline over verification. Has not yet considered the consequences of submitting a proposal with a fabricated case study or unrealistic timeline.",
          "developing": "Recognizes that submitting inaccurate content would be bad, but frames the decision as a simple choice between quality and speed rather than thinking through the specific consequences.",
          "demonstrating": "Understands the asymmetry: a late proposal might still be considered, but a proposal with a fabricated case study that the client checks — or a timeline the team can't deliver — creates a credibility problem that can't be walked back. The company's reputation with a potential new client is on the line. The person recognizes that deadline pressure doesn't change what's at stake, and that their role as final assembler makes them accountable for what gets submitted."
        }
      }
    },
    {
      "id": "t2_q5",
      "sequence": 5,
      "angle": "task_differentiation_for_ai_fit",
      "dol_content_area": "#2 Explore AI Uses",
      "dol_secondary": "#1 Understand AI Principles",
      "human_function_activated": "Ideate",
      "decision_band": "judgment-embedded",
      "scenario": "Your manager asks you to prepare two things by end of week: (1) a summary of the last three months of client feedback surveys for the team meeting — there are about 60 survey responses in a spreadsheet, and (2) a recommendation memo on whether to renew or restructure a struggling client engagement — this client has been unhappy, and leadership will use the memo to decide next steps.",
      "prompt": "You're thinking about using AI to help with both. Would you approach them the same way?",
      "internal_notes": "Tests whether the person can differentiate tasks by their AI fit — recognizing that the same tool operates very differently depending on what kind of work is being done. The survey synthesis is high-volume text aggregation where AI excels. The recommendation memo requires judgment, relationship context, and persuasive framing where AI can assist but shouldn't lead. Does the person treat both tasks the same, or do they calibrate their approach?",
      "rubric": {
        "orientation": {
          "emerging": "Approaches both tasks the same way — either using AI heavily for both or being cautious about both. Has not yet developed a model for why different types of knowledge work map differently to AI capabilities.",
          "developing": "Senses that the two tasks are different in some way but does not yet articulate the distinction clearly. May say 'the memo is more important' without connecting importance to the type of thinking required and how that maps to what AI can and can't do.",
          "demonstrating": "Sees the structural difference: the survey summary is a synthesis task — extracting themes, patterns, and key points from 60 text responses — which is squarely in AI's strengths. The recommendation memo requires the person's judgment about a relationship, a strategic assessment of the engagement's value, and a persuasive case aimed at leadership decision-makers. AI can help with structure and drafting, but the substance of the recommendation must come from the person's understanding of the situation. Different tasks call for different AI roles."
        },
        "integration": {
          "emerging": "Describes a single approach applied to both tasks — 'I'd feed both into the AI and review the output.' No differentiation in process.",
          "developing": "Would use AI more carefully for the memo than the surveys, but does not yet describe what 'more carefully' looks like in practice — how the interaction with AI would differ between the two tasks.",
          "demonstrating": "Describes two distinct approaches: for the surveys, the AI does heavy lifting — summarizing themes, counting frequencies, identifying patterns — with the person reviewing for accuracy and adding interpretation. For the memo, the person leads — forming the recommendation, structuring the argument, providing the context about the client relationship — and uses AI to help with drafting, organizing, or refining language. The AI's role scales based on the task's demands."
        },
        "judgment": {
          "emerging": "Has not yet considered how the stakes differ between the two deliverables. Treats both as tasks to complete by Friday.",
          "developing": "Recognizes that the recommendation memo is higher-stakes but does not yet connect this to how the AI interaction should differ — the stakes inform the level of human involvement in the process.",
          "demonstrating": "Understands that a survey summary that misses a theme is correctable — someone at the team meeting will notice. But a recommendation memo that leadership uses to decide whether to restructure or end a client engagement is a different category. If the memo's recommendation is shaped by AI's generic analysis rather than the person's informed judgment, leadership could make a consequential decision based on a shallow assessment. The person's reputation and the client relationship are both on the line. The stakes should visibly shape how much they rely on AI for each task."
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
    "scoring_prompt_template": "You are scoring a response to an AI-readiness assessment. The context is a general knowledge worker at a mid-size professional services company. You will receive a scenario, a user response, and a rubric with three constructs (Orientation, Integration, Judgment), each scored at three levels (Emerging, Developing, Demonstrating). Scoring principles: (a) Reward what is present. Score the signal in the response, not the elaboration around it. A concise response that contains a clear directional signal — prioritizing compliance, naming a verification need, recognizing a boundary, identifying an opportunity — earns full credit on the construct that signal serves. Brevity is not a deficiency. (b) Separate signal from elaboration. A one-sentence response that conveys strong judgment (e.g., refusing to act on an unverified AI suggestion) is strong judgment with low elaboration — not weak judgment. Do not score down for lack of detail when the directional signal is clear. (c) Match the rubric on substance, not length. If a response captures the key insight described in a Demonstrating descriptor but in fewer words than the descriptor uses, it is still Demonstrating. The rubric descriptors are written richly to guide your evaluation — the respondent is not expected to match their length or specificity of expression. Your job is to: (1) Assign an Orientation level — does the response show a functional mental model of what AI is and how it works? (2) Assign an Integration level — does the response show the person can see where AI fits AND describe how they'd work with it effectively? Both opportunity recognition and effective interaction count. (3) Assign a Judgment level — does the response show the person can evaluate AI output quality AND adjust their approach based on stakes, sensitivity, and consequences? Both output evaluation and responsible use count. (4) Write 2–3 sentences of evidence notes explaining your scoring decisions across all three constructs. When a response is concise, note what signal is present rather than cataloging what elaboration is absent. Respond in JSON format with keys: orientation_level, integration_level, judgment_level, evidence_notes."
  }
}
```
<!-- tier2-questions-end -->
