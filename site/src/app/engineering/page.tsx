'use client'

export default function EngineeringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-slate max-w-none">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">🧠 Engineering & Design Thinking</h1>
      <p className="text-lg text-slate-600 mb-8">
        How I approach architecture decisions, production problems, and the trade-offs that separate systems that work in demos from systems that work in production.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How I Think About Systems</h2>
        <p className="text-slate-700 mb-4">Before picking a framework or a model, I start with three questions:</p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold text-slate-900">What breaks under load?</h3>
            <p className="text-slate-700">Most AI systems are designed happy-path first. I design failure modes first — rate limits, context overflows, async boundaries, stale state, and what happens when the LLM returns something it shouldn't.</p>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold text-slate-900">What does the next engineer need to understand?</h3>
            <p className="text-slate-700">Architecture decisions that aren't documented get repeated or reversed by the next person. I write decisions down as they're made, with the alternatives considered and the reasons they were rejected.</p>
          </div>

          <div className="border-l-4 border-indigo-600 pl-4">
            <h3 className="font-bold text-slate-900">What is the actual constraint?</h3>
            <p className="text-slate-700">Usually it's not compute or cost — it's a data dependency, a compliance requirement, or a human workflow that the system has to fit around. Getting that constraint wrong makes everything else irrelevant.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Design Patterns</h2>

        <div className="space-y-8">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Sequential Multi-Agent Over Parallel</h3>
            <p className="text-slate-700 mb-3">
              <strong>Decision:</strong> When agents have hard data dependencies, sequential execution with shared typed state is both more correct and easier to debug. Each agent's evidence is appended to a structured Pydantic object, not passed through an LLM-mediated conversation.
            </p>
            <p className="text-slate-600 text-sm italic">Demonstrated in: AI Incident Triage Platform</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Per-Run Isolation for SSE Streaming</h3>
            <p className="text-slate-700 mb-3">
              <strong>Decision:</strong> One asyncio.Queue per run, allocated when a request arrives and dropped when the run ends. The SSE endpoint reads only from its own run's queue. No global event bus, no topic routing, no risk of cross-run leakage.
            </p>
            <p className="text-slate-600 text-sm"><strong>Hidden constraint found:</strong> LangGraph's agent.invoke() is synchronous. Running it directly in async FastAPI blocks the event loop, starving SSE heartbeats. Fix: wrap in loop.run_in_executor().</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Multi-AZ High-Availability (Even for Portfolio Projects)</h3>
            <p className="text-slate-700 mb-3">
              <strong>Decision:</strong> Portfolio projects should demonstrate production judgment. CloudFront for origin hiding and DDoS absorption, Multi-AZ for fault tolerance, ALB for Layer 7 health checking, ECS Fargate to eliminate EC2 management overhead.
            </p>
            <p className="text-slate-600 text-sm">A 19-resource CloudFormation template shows that you'd hand the same architecture to an infrastructure team on day one.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Multi-Model Orchestration by Task Complexity</h3>
            <p className="text-slate-700 mb-3">
              <strong>Decision:</strong> Assign models by task complexity, not user preference. Claude Haiku for high-volume document analysis (~$0.02/document), Claude Sonnet for matter-level reasoning, Claude Opus for final narratives.
            </p>
            <p className="text-slate-600 text-sm">Model selection is an architecture decision, not a settings screen. The right model is determined by complexity, volume, and latency requirements.</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Bypassing AppSync Owner() for Collaboration</h3>
            <p className="text-slate-700 mb-3">
              <strong>Decision:</strong> Build a Lambda endpoint that bypasses AppSync and queries DynamoDB directly. AppSync's owner() rule breaks multi-user collaboration. The Lambda uses a GSI to query by userId, batch-fetches Matter records.
            </p>
            <p className="text-slate-600 text-sm"><strong>Trade-off documented:</strong> Adds operational complexity (two systems instead of one), but it's the smallest workable fix. Row-level security via PostgreSQL is the cleaner long-term solution.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Production Issues & Fixes</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <h3 className="font-bold text-slate-900">Tool Callbacks Couldn't Emit Streaming Events</h3>
            <p className="text-slate-700 mb-2"><strong>Root cause:</strong> Tool functions in LangGraph are synchronous, but RunStore.emit() is async. You can't call await inside a sync function.</p>
            <p className="text-slate-700"><strong>Fix:</strong> Added emit_sync() using asyncio.run_coroutine_threadsafe() to submit the coroutine from the sync tool context.</p>
          </div>

          <div className="border-l-4 border-rose-600 pl-4">
            <h3 className="font-bold text-slate-900">Token Usage Returning Zero</h3>
            <p className="text-slate-700 mb-2"><strong>Root cause:</strong> LangChain version changed token location from response_metadata["token_usage"] to message.usage_metadata.</p>
            <p className="text-slate-700"><strong>Fix:</strong> Check usage_metadata first, then fall through to response_metadata as a fallback. Resilient to the next version change.</p>
          </div>

          <div className="border-l-4 border-rose-600 pl-4">
            <h3 className="font-bold text-slate-900">Document Owner Lost After Upload</h3>
            <p className="text-slate-700 mb-2"><strong>Root cause:</strong> Lambda couldn't determine owner from S3 (no metadata). About 30% of uploads had ownerUserId: null.</p>
            <p className="text-slate-700"><strong>Fix (two parts):</strong> (1) Pre-create DynamoDB record before S3 upload with ownerUserId set. (2) Stamp ownersub into S3 metadata as a fallback.</p>
          </div>

          <div className="border-l-4 border-rose-600 pl-4">
            <h3 className="font-bold text-slate-900">Re-analysis Failing Silently After Page Reload</h3>
            <p className="text-slate-700 mb-2"><strong>Root cause:</strong> Re-analysis logic retrieved file blob from in-memory React state, which was null after a page refresh.</p>
            <p className="text-slate-700"><strong>Fix:</strong> Check for blob in memory first, then fetch original file from S3 using the document's s3Key. If S3 fetch fails, show specific error.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost Optimization Principles</h2>

        <p className="text-slate-700 mb-4">Cost in production AI systems isn't a tuning problem — it's an architecture problem. At PBTF, I reduced LLM inference cost by 30% without changing models or degrading quality:</p>

        <ul className="space-y-3">
          <li className="text-slate-700"><strong>Retrieval precision over retrieval volume:</strong> Tighter retrieval reduces irrelevant context passed to the model on every call.</li>
          <li className="text-slate-700"><strong>Prompt structure before prompt content:</strong> Pass only what each agent actually needs using shared AgentState, not full context downstream.</li>
          <li className="text-slate-700"><strong>Per-agent cost tracking in development:</strong> Make cost drivers visible during development, not just on the monthly invoice. You can't optimize what you can't see.</li>
          <li className="text-slate-700"><strong>Model selection by task, not by default:</strong> Using Opus everywhere would make systems 10–15x more expensive per task for no improvement on routine work.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Teaching as a Design Constraint</h2>

        <p className="text-slate-700 mb-4">Teaching nonprofits, executives, and young people how to build with AI forces clarity on system design:</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">If you can't explain the boundary, you haven't drawn it clearly.</h3>
            <p className="text-slate-700">When building CareBORN's multi-agent architecture, the hardest question to answer simply was: "What does the Emotional Support agent do that the Diagnosis Navigator doesn't?" Writing an explanation for non-technical staff forced me to sharpen agent responsibilities in the code.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-2">Every abstraction is a bet.</h3>
            <p className="text-slate-700">Every AI tool adopted is a bet that the abstraction will hold under actual conditions — your data, your staff, your edge cases. Abstractions that look elegant in diagrams often hide the messy reality of what happens when a document exceeds the context window.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-2">Developer advocacy is clarity, not promotion.</h3>
            <p className="text-slate-700">Teaching is about helping people build judgment about when AI is the right answer, not just enthusiasm for it. That distinction matters whether you're in a conference session or a technical design review.</p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What These Systems Demonstrate Together</h2>

        <ul className="space-y-3 text-slate-700">
          <li><strong>Document decisions as they're made.</strong> Both decision logs explain not just what was chosen, but what was rejected and why.</li>
          <li><strong>Design for the failure mode, not the happy path.</strong> The most interesting engineering is at the boundaries — async/sync crossings, distributed state, platform limitations, and rate limits.</li>
          <li><strong>Match complexity to the actual constraint.</strong> Sequential agents over parallel, Haiku over Opus where Haiku is sufficient, localStorage before AppSync.</li>
          <li><strong>Observability is not optional.</strong> Full trace logging, cost attribution, and structured error capture. If I can't see what an agent did and why, it doesn't go to production.</li>
        </ul>
      </section>
    </div>
  )
}
