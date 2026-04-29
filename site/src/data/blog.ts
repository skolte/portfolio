export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  summary: string
  readTime: string
  body: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-multi-agent-systems-fail-in-production',
    title: 'Why Most Multi-Agent Systems Fail in Production',
    date: '2024-11-15',
    category: 'AI Architecture',
    summary: 'Building a multi-agent demo is easy. Keeping it running in production is not. Here are the failure modes I\'ve seen repeatedly — and how to design around them.',
    readTime: '6 min',
    tags: ['LangGraph', 'Multi-Agent', 'Production AI', 'Architecture'],
    body: `
After building multi-agent systems for insurance claims automation, clinical data processing, and field operations, I've noticed the same failure patterns appear regardless of the domain. The demos work. The production deployments don't — at least not at first.

Here's what actually breaks.

## 1. Stateless Agents in Stateful Workflows

Most tutorials show agents handling one turn. Real workflows span dozens of turns across hours or days. When agents lose context between steps, they re-ask questions, make contradictory decisions, and confuse users.

**Fix:** Design state as a first-class concern. At Trussed.AI, we built ClaimState — a Pydantic model that every agent reads and writes. The state travels with the workflow, not the agent.

## 2. No Supervisor = No Recovery

Single-chain agents fail silently. When one step produces a bad output, everything downstream breaks — and you often don't know until a human complains.

**Fix:** Use a supervisor pattern. A supervisor agent monitors sub-agent outputs, validates them against expected schemas, and handles escalation. LangGraph's conditional edges make this composable.

## 3. Tool Calling Without Input Validation

In production, users will pass unexpected inputs. Without validation, agents will call tools with garbage parameters, get confusing errors, and — worse — sometimes hallucinate successful completion.

**Fix:** Every tool needs a Pydantic input schema with meaningful validation errors. The agent should receive the validation failure as feedback, not a crash.

## 4. Missing Cost Attribution

In demos, cost doesn't matter. In enterprise deployments, it's the first question. If you can't tell your stakeholders which agent is responsible for 60% of your token spend, you won't get budget for v2.

**Fix:** Instrument every LLM call with agent-level tagging. LangSmith makes this easy if you're in the LangChain ecosystem.

## 5. Hallucination on Ambiguous Policy/Rules

Agents trained on general data will confidently give wrong answers about your specific domain — insurance policies, clinical protocols, compliance requirements. This is the one that will get you in trouble.

**Fix:** Constrain agents with retrieval-augmented grounding for domain-specific knowledge. Don't let agents reason from first principles about things your business has documented.

---

The pattern I've found: systems that work in production are the ones where state, supervision, validation, observability, and grounding were designed in from the start — not added after the demo impressed the stakeholders.

Build for the failure modes, not the happy path.
    `.trim(),
  },
  {
    slug: 'trusscontroller-compliance-as-code',
    title: 'TrussController: What I Learned Building Compliance Middleware for LLMs',
    date: '2024-10-22',
    category: 'AI Engineering',
    summary: 'When you build AI for regulated industries, compliance can\'t be a feature you add later. Here\'s the architecture behind TrussController and the lessons from building it.',
    readTime: '7 min',
    tags: ['Compliance', 'LLM', 'Architecture', 'Insurance', 'Healthcare'],
    body: `
Before I joined Trussed.AI, I assumed that compliance in AI systems was mostly about documentation — policies, data use agreements, consent forms. After building TrussController, I know it's an engineering problem.

Here's the architecture and the hard lessons.

## The Problem We Were Solving

Insurance claims processing involves sensitive data at every step: patient diagnoses, financial details, legal determinations. When you put an LLM in that pipeline, you need to answer questions that most AI tutorials never address:

- What happens when PII enters a prompt?
- Which LLM provider is this data allowed to go to?
- Can we prove — to an auditor — exactly what the model saw and decided?
- What happens when the model is down?

TrussController is the answer to all four.

## Architecture Overview

The middleware sits between your application and any LLM provider. Every request flows through four layers:

**1. PII Redaction Engine**
Detects and redacts sensitive data before it reaches the model. We use a combination of regex patterns and NER models — regex handles known formats (SSNs, policy numbers), NER handles clinical language that regex misses.

**2. Role-Based Routing**
Not all users should be able to send the same data to the same models. A claims adjuster can use GPT-4. A customer-facing chatbot uses a smaller model with tighter constraints. Routing rules are declarative and version-controlled.

**3. Provider Abstraction**
We normalized the interface across OpenAI, Anthropic, and open-source models. This gave us real production flexibility — when one provider had an outage, we switched the routing rule, not the code.

**4. Audit Trail**
Every request logs: input hash, redaction decisions, provider used, response, latency, and cost. HIPAA requires 6-year retention. We designed the schema for that from day one.

## What Surprised Me

**Regex isn't enough.** Clinical narratives contain PII in forms no regex catches: "the patient we discussed last Thursday" or "Dr. Chen's patient from the Phoenix clinic." You need NER, and you need to tune it for your domain.

**Compliance is a product feature.** The compliance layer became a selling point with enterprise clients — not just a technical requirement. "Can we audit every AI decision?" is now a sales question, not just a security question.

**Provider abstraction pays off fast.** We switched from GPT-4 to Claude for certain workflows within three months of launch. The abstraction layer made it a configuration change, not a migration project.

---

The takeaway: if you're building AI for regulated industries, start with the compliance architecture first. Everything else is easier when the foundation is right.
    `.trim(),
  },
  {
    slug: 'rag-in-the-real-world',
    title: 'RAG in the Real World: What the Tutorials Don\'t Tell You',
    date: '2024-09-10',
    category: 'AI Architecture',
    summary: 'RAG is the right answer for many enterprise AI problems. But production RAG is much harder than the tutorials make it look. Here\'s what I\'ve learned building it for healthcare and insurance.',
    readTime: '8 min',
    tags: ['RAG', 'Vector Databases', 'Production AI', 'Healthcare'],
    body: `
Retrieval-Augmented Generation (RAG) is the pattern that makes LLMs useful in enterprise contexts. Instead of hoping the model memorized your proprietary data, you retrieve it at query time and put it in context.

The basic implementation takes an afternoon. Production RAG takes months — because the failure modes are subtle.

## What the Tutorial Shows

1. Embed your documents
2. Store in a vector database
3. At query time, retrieve top-k chunks
4. Stuff into the prompt
5. Get a great answer

That works for the demo. Here's where it breaks.

## Chunking is Everything

Most tutorials chunk by character count. In clinical documents, a 500-character chunk might split mid-sentence across a diagnosis and a treatment plan — and now your retrieval returns fragments that look relevant but answer a different question.

**What works:** Semantic chunking with domain-aware boundaries. For medical records, we chunk around clinical sections (History of Present Illness, Assessment, Plan). For insurance policies, we chunk by clause.

## Retrieval Precision vs. Recall

Top-k retrieval is a blunt instrument. Asking "what does this policy cover for outpatient rehab?" might retrieve five chunks — and two of them are about inpatient rehab, which is similar enough to match semantically but answers a different question.

**What works:** Hybrid search (semantic + keyword) for domain-specific queries. For clinical trial matching, we combined vector similarity with structured metadata filters (condition, phase, status) to get precision without sacrificing recall.

## Context Window Management

You retrieve 10 chunks. Each is 500 tokens. Plus your system prompt, the conversation history, and the response space — and you've blown your context window before you've started.

**What works:** Summarize retrieved chunks before injection. A re-ranker model can compress five chunks into the two that actually answer the question. LangChain's compression retriever does this well.

## The Hallucination You Don't See

Standard RAG fails quietly when the answer isn't in your corpus. The model doesn't say "I don't know" — it reasons from its training data and presents a confident, plausible, wrong answer.

**What works:** Faithfulness evaluation. After generation, check whether every claim in the response is grounded in the retrieved context. Ragas, LangSmith, and custom evals all give you handles on this.

## Embedding Model Drift

You embed your corpus with one model, then your embedding provider updates their model. Your new queries embed differently than your stored documents. Retrieval quality degrades silently over time.

**What works:** Version your embedding models. When you upgrade, re-embed your entire corpus. Build a retrieval quality test suite you can run on demand.

---

RAG is the right pattern. But "right pattern" and "easy implementation" are different things in production. The teams that succeed treat retrieval quality as an ongoing engineering discipline — not a one-time setup.
    `.trim(),
  },
  {
    slug: 'ai-for-nonprofits-where-to-start',
    title: 'AI for Nonprofits: Where to Start Without a Data Team',
    date: '2024-08-05',
    category: 'AI for Good',
    summary: 'Most AI guides assume you have engineers. Nonprofits often have a staff of five and a mission that matters more than their budget. Here\'s a practical starting point.',
    readTime: '5 min',
    tags: ['Nonprofits', 'AI Adoption', 'No-Code AI', 'Donor Engagement'],
    body: `
I've had the privilege of working with several nonprofit organizations on AI adoption over the past two years — from pediatric cancer advocacy to clean water access. The question I hear most is: "Where do we start when we don't have a tech team?"

Here's the answer I give.

## Start With Time, Not Technology

The first question isn't "what AI tool should we buy?" It's "where does your team spend time on work that doesn't require human judgment?"

Common answers:
- Writing first drafts of donor communications
- Formatting grant reports
- Answering repetitive FAQ emails
- Summarizing program data for the board

These are your starting points. AI is most valuable when it returns time to the humans who should be spending it on relationships, not paperwork.

## The 3 Tools Worth Starting With

**1. ChatGPT or Claude for writing tasks**
Grant proposal drafting, donor email personalization, program descriptions, social media content. Start here. The ROI is immediate and the learning curve is low.

**2. Zapier + AI integrations for automation**
When a donor fills out a form, trigger a personalized thank-you email generated by an AI. No engineers required — Zapier connects the dots.

**3. Notion AI or similar for knowledge management**
Summarizing meeting notes, generating reports from raw data, answering staff questions about policies and procedures.

## What to Watch Out For

**Donor data privacy.** Before you paste any donor information into an AI tool, understand where that data goes. Many free AI tools use your input to train future models. For HIPAA-covered organizations, this is a compliance risk.

**Hallucinated facts.** AI will confidently generate grant statistics, research citations, and impact numbers that don't exist. Always verify anything that will be submitted to a funder.

**Over-automation.** Donors can tell when an email was generated by a machine. Use AI for drafts, but have a human read every communication before it goes out.

## The Question I Get After Every Workshop

"Is it ethical for nonprofits to use AI?"

Yes — when it's used to extend human capacity, not replace human connection. The goal is to give your staff more time for the relationships that change lives. Technology in service of mission.

---

If you're a nonprofit leader thinking about AI, I'm happy to talk through your specific situation. The same principles that apply to pediatric cancer advocacy apply to food banks, housing organizations, and after-school programs. Start small, stay mission-focused, and build from there.
    `.trim(),
  },
  {
    slug: 'teaching-kids-python-what-i-learned',
    title: 'Teaching Kids Python: What 10 Sessions Taught Me About Learning',
    date: '2024-07-20',
    category: 'Education',
    summary: 'I ran a 10-session Python course for kids. I thought I was teaching them coding. They taught me more about how humans actually learn.',
    readTime: '5 min',
    tags: ['Python', 'Kids Coding', 'Education', 'Teaching'],
    body: `
When I started the Kids Python Series, I expected to teach variables, loops, and functions to a group of 10–17 year olds. What I didn't expect was to come away with a fundamentally different understanding of how people learn to code.

## What I Planned vs. What Happened

I planned a structured curriculum. Session 1: variables. Session 2: conditionals. Session 3: loops. Clean, logical progression.

Session 2: a 12-year-old asked why she needed to learn conditionals. "When would I actually use this?"

I said: "When you're deciding what to do next in a game."

Her eyes lit up. That became the entire framing for the rest of the series.

## The Insight That Changed My Teaching

Kids learn programming when they have a reason to make the computer do something specific — not when they understand abstract syntax.

Loops make sense when you're drawing 100 snowflakes on the screen. Functions make sense when you realize you're typing the same quiz question code five times. APIs make sense when you want to know the weather in Tokyo at 2am.

The syntax is just the tool. The motivation is what opens the door.

## What Actually Worked

**Start with output they can show someone.** Every session produced something visible — a quiz game, a drawing, a script that sent a message. Kids showed their parents at the end of every session. That accountability loop was more powerful than any curriculum design.

**Debug together, loudly.** When I made an error on purpose and thought through it out loud, the room got quiet and attentive. Watching a competent adult be confused and then figure it out was more educational than watching me do things correctly.

**Let them break things.** "What happens if you change this number to 1000?" is a better learning prompt than any exercise I wrote. Curiosity-driven exploration builds intuition faster than guided instruction.

## What This Changed for Me

I've been writing software for 20 years. The Kids Python Series made me realize how much I've internalized — how many things I do without being able to explain why.

Teaching forces you to understand what you know. I came away a better engineer because I had to explain things from scratch to people who had no reason to accept "that's just how it works."

---

If you're an engineer thinking about teaching — do it. Not because the students need you. Because you need the students.
    `.trim(),
  },
  {
    slug: 'hipaa-aware-ai-what-actually-matters',
    title: 'Building HIPAA-Aware AI: What Actually Matters',
    date: '2024-06-18',
    category: 'Healthcare AI',
    summary: 'HIPAA compliance in AI systems is often treated as a checkbox. Here\'s what it actually requires — and the implementation decisions that matter most.',
    readTime: '7 min',
    tags: ['HIPAA', 'Healthcare AI', 'Compliance', 'Privacy'],
    body: `
I've built HIPAA-aware AI systems for a pediatric cancer platform, a healthcare engagement startup, and insurance claims automation. The compliance requirements are well-documented. The engineering decisions are not.

Here's what I've learned.

## What HIPAA Actually Requires (for AI systems)

HIPAA protects Protected Health Information (PHI) — which in AI systems includes anything that flows through your prompts or training data that could identify a patient.

The key requirements that affect AI architecture:

**Business Associate Agreements (BAAs).** Every AI vendor that touches PHI must sign a BAA. OpenAI offers one. Anthropic offers one. Many AI tools do not. If a vendor won't sign a BAA, you can't use them with patient data — full stop.

**Minimum Necessary Standard.** You should only use the minimum PHI necessary for the specific purpose. In AI contexts, this means redacting fields that aren't needed for the specific task before they enter a prompt.

**Audit Controls.** You need audit logs of who accessed what PHI and when. For AI systems, this extends to: what data entered a prompt, which model processed it, what the output was, and who acted on it.

**6-Year Retention.** Audit logs must be retained for 6 years. This is a data architecture decision, not a compliance checkbox.

## The Hard Engineering Decisions

**Where does PHI live in your AI pipeline?**

If a patient's diagnosis is in your vector database, it's in your AI system's scope. Every component that touches that database is a potential PHI disclosure risk. Map your data flows before you write code.

**What counts as PHI in clinical language?**

"The 34-year-old female patient" contains age and sex — potentially PHI in context. Clinical narratives are full of quasi-identifiers that become PHI in combination. Standard regex-based redaction misses most of them. You need clinical NER models tuned for de-identification.

**Balancing redaction with utility**

Over-redaction makes AI useless. A claims system that redacts the diagnosis can't reason about coverage. The right design: redact for storage and external transmission, but maintain a controlled de-identification/re-identification layer for authorized internal processing.

## The Vendor Question

The question I get from healthcare organizations: "Can we use ChatGPT?"

Yes — with a BAA, with proper redaction before any data enters the prompt, and with explicit policy about what data types are permitted. Not as a free-for-all.

The answer for direct EHR data or full clinical records: in most cases, you need a self-hosted or private deployment model. The convenience cost is real, but so is the compliance risk.

---

HIPAA isn't the enemy of AI innovation in healthcare. It's the constraint that, when designed around properly, builds the trust that makes healthcare AI possible.
    `.trim(),
  },
  {
    slug: 'from-cto-to-ai-educator',
    title: 'From CTO to AI Educator: What I Learned Along the Way',
    date: '2024-05-30',
    category: 'Career & Reflection',
    summary: 'I spent 20 years building enterprise systems. Then I started teaching kids Python and nonprofits how to use AI. The transition taught me things no engineering role ever could.',
    readTime: '6 min',
    tags: ['Career', 'Teaching', 'AI Education', 'Leadership'],
    body: `
For most of my career, my job was to build systems that worked — at scale, with compliance, under pressure. I was good at it. And then I started teaching.

The thing about teaching is that it strips away everything you've been able to hide behind. In a technical role, expertise is measured by outcomes. You built the system. It runs. Done. In a classroom — whether that classroom is a webinar with nonprofit leaders or a Saturday session with teenagers — expertise is measured in real time by whether someone understands.

And understanding is much harder to produce than code.

## What I Thought I Knew

Before I ran the first Kids Python Series session, I thought I had a solid handle on Python fundamentals. After the third session, I realized I'd been operating on autopilot for years — executing patterns I understood intuitively but couldn't explain clearly.

"Why do we use functions?" is not a trivial question. The correct answer isn't "to reduce code duplication" — that's the answer a senior engineer gives to another senior engineer. The answer a 13-year-old needs is: "Because you'll want to make your quiz game work in ten different places, and you don't want to type the same thing ten times."

Same knowledge. Completely different explanation. Teaching forced me to find the second one.

## Teaching Nonprofit Leaders Was Different

With nonprofit executives, the challenge wasn't abstraction — it was relevance. These are smart, mission-driven people who have no patience for technology for its own sake. Every concept needed to connect to something they actually cared about: more donor engagement, less staff burnout, better grant reporting.

This pushed me to develop a discipline I didn't have before: leading with the problem, not the solution. Most engineers (myself included) tend to explain the tool first and let the audience find the application. Nonprofit audiences taught me to flip that completely.

## What Changed in My Engineering Work

The feedback loop from teaching improved my technical work in ways I didn't expect.

I write better documentation now. Teaching forced me to think about what a reader actually needs to understand — not what I'd want to write.

I ask better questions in design reviews. Years of watching people get lost at the same conceptual steps made me much more precise about where ambiguity lives in a system.

I build with more empathy for non-technical users. After watching executives try to understand AI tools for the first time, I think differently about UX decisions that I used to treat as obvious.

---

If you're a senior technical person who hasn't tried teaching — I'd encourage you to find a way to do it. Not because the world needs more AI educators (though it does). Because you'll become a better technical person for having tried.
    `.trim(),
  },
  {
    slug: 'pediatric-cancer-and-ai',
    title: 'Why I\'m Building AI for Pediatric Cancer Families',
    date: '2024-04-15',
    category: 'AI for Good',
    summary: 'CareBORN started with a personal story. Here\'s why I believe AI has a specific and important role to play in pediatric cancer care — and what we\'re building.',
    readTime: '5 min',
    tags: ['CareBORN', 'Pediatric Cancer', 'Healthcare AI', 'Mission'],
    body: `
Some things you build because they're technically interesting. Some things you build because they have to exist.

CareBORN is the second kind.

## Where It Started

When my son Neev was diagnosed with a pediatric brain tumor, our family entered a world that most people don't know exists until they have to. Navigating the medical system while managing fear, logistics, insurance, financial aid applications, and the emotional weight of everything happening — it was the hardest thing I've ever done.

And we had advantages. I had resources, technical knowledge, and the capacity to navigate complex systems. Families without those advantages face the same crisis with less support and less information.

That's the problem CareBORN is built to address.

## What the Platform Does

CareBORN is a HIPAA-compliant platform that helps pediatric cancer families:

**Navigate financial aid.** There are dozens of organizations offering assistance — most families never find most of them. We use AI to match families with relevant programs and help them complete applications faster.

**Coordinate care.** Pediatric oncology involves multiple specialists, treatment centers, and clinical teams that often don't communicate well. We build tools that help families manage and share their care records.

**Find clinical trials.** Most families never learn about trials their child might qualify for. Our clinical trial navigator uses structured extraction and semantic search to surface relevant options.

**Connect with peers.** Isolation is one of the hardest parts of a pediatric cancer diagnosis. We connect families with others on similar journeys.

## The Role of AI

AI doesn't replace the human connection that families need — it amplifies the capacity of the people providing support.

When an AI system can handle the first pass of a financial aid application, a social worker can spend that time with the family rather than with paperwork. When a clinical trial navigator can surface three relevant trials instead of requiring a family to search ClinicalTrials.gov themselves, a nurse navigator can focus on explaining those trials rather than finding them.

AI in service of the humans doing the hardest work.

## The Neev Kolte & Brave Ronil Foundation

CareBORN is connected to the Neev Kolte & Brave Ronil Foundation — a foundation named for children who faced this disease with courage. The foundation's mission is to ensure that no family navigates pediatric cancer without support, regardless of their resources or background.

---

This is the work I'm most proud of. Not because of the technology — but because of what the technology makes possible for the families it serves.
    `.trim(),
  },
  {
    slug: 'llm-governance-for-enterprise',
    title: 'LLM Governance: What Enterprise AI Teams Get Wrong',
    date: '2024-03-08',
    category: 'AI Architecture',
    summary: 'Most enterprise AI governance frameworks are written by compliance teams who don\'t understand the technology. Here\'s what good governance actually looks like from an engineering perspective.',
    readTime: '6 min',
    tags: ['LLM Governance', 'Enterprise AI', 'Compliance', 'Responsible AI'],
    body: `
I've worked in regulated industries for most of my career — defense, healthcare, insurance. When AI started entering these spaces seriously, organizations responded with governance frameworks. Most of those frameworks were built by compliance and legal teams who understand risk but not architecture.

Here's the gap, and how to close it.

## What Most Governance Frameworks Get Wrong

**They govern the model, not the system.**

An LLM is one component in a pipeline that might include retrieval, pre-processing, post-processing, routing, caching, and multiple downstream systems. Governing the model alone misses where most of the actual risk lives.

Bias in training data is a model risk. Prompt injection is a system risk. Data leakage through caching is an infrastructure risk. A governance framework that doesn't address all three is incomplete.

**They're static in a dynamic environment.**

An AI system deployed in January is different from the same system in July — because the model has been updated, the prompts have been tuned, the use cases have expanded, and the data has drifted. Governance frameworks that require a one-time review and approval are obsolete before they're published.

**They treat auditability as documentation, not infrastructure.**

"We have a policy about AI use" is not auditability. "We can produce a complete record of every AI decision, including the exact inputs, outputs, and model version used" is auditability. These require fundamentally different investments.

## What Good Governance Actually Looks Like

**Model cards + system cards.** Document not just the model, but every component in the pipeline. What are the known limitations? What data was used? What failure modes have been identified?

**Continuous eval pipelines.** Don't rely on pre-deployment testing. Run quality and safety evaluations continuously against production traffic samples. Catch drift before users do.

**Granular audit trails.** Every LLM call should log: timestamp, user/session ID, input hash, model version, output, latency, cost, and any triggered guardrails. This is infrastructure work, not documentation work.

**Escalation paths built into the architecture.** When an AI system reaches a decision boundary — a claim over a certain dollar threshold, a clinical recommendation outside a defined confidence range — the escalation to human review should be automatic and logged.

**Red team before you deploy.** Adversarial testing of your AI system should be a deployment gate, not a nice-to-have. Someone should be actively trying to break your guardrails before your users do.

---

Governance isn't the enemy of AI innovation. Done right, it's what makes innovation sustainable in regulated environments. The organizations that get this right will be able to move faster than the ones that treat compliance as a friction to minimize.
    `.trim(),
  },
  {
    slug: 'developer-advocate-what-it-means',
    title: 'What Developer Advocacy Actually Means (From Someone Building It)',
    date: '2024-02-20',
    category: 'Career & Reflection',
    summary: 'Developer advocacy is often described as "evangelism." But the best developer advocates I\'ve seen do something different: they translate between builders and builders.',
    readTime: '4 min',
    tags: ['Developer Advocacy', 'DevRel', 'Community', 'Teaching'],
    body: `
The job description for "Developer Advocate" usually involves conference talks, blog posts, and community engagement. What it rarely mentions is the translation work — and that's the part that actually matters.

## The Translation Problem

Building real systems is hard. Explaining them in ways that help other builders is a different skill entirely — and it's one that most engineers never develop because their career doesn't require it.

I've watched brilliant engineers give conference talks that left the audience more confused than when they started. I've read documentation that assumed you already knew what you were trying to learn. I've sat through demos that showed the happy path without mentioning the three production failure modes that took six months to debug.

Developer advocacy, at its best, closes this gap. It takes real operational knowledge — the kind that comes from actually building and running systems — and packages it in ways that help other engineers skip the hard lessons.

## What I Do When I Teach

Whether I'm teaching teenagers Python, nonprofit leaders about AI, or professionals about LLM architecture, my goal is the same: help people build an accurate mental model, then give them the tools to extend it on their own.

This means:
- Leading with problems, not solutions
- Showing failure modes alongside success paths
- Being honest about what I don't know
- Making the abstraction match the audience's existing knowledge

## Why It Matters More Now

AI is moving fast enough that most professionals — technical and non-technical — can't keep up with what's actually possible versus what's being hyped. Developer advocates who build real systems and communicate honestly about them provide enormous value to the community.

Not as cheerleaders for a product. As translators between what's happening in production and what needs to be understood by the next person building.

---

That's the kind of advocacy I'm trying to do. Not "here's how to use our API in 5 minutes" but "here's what I actually learned building this in production, including the parts that didn't work."
    `.trim(),
  },
]
