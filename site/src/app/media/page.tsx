import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Media & Appearances',
  description: 'Video interviews, panels, and conference appearances by Sandeep Kolte.',
}

export default function MediaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl">Media & Appearances</h1>
        <p className="section-subheading max-w-2xl">
          Conference talks, video interviews, and panels on AI systems, pediatric cancer advocacy, and nonprofit technology.
        </p>
      </div>

      {/* CureFest interview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Video Interviews</h2>
        <div className="card">
          <div className="aspect-video mb-5 rounded-lg overflow-hidden bg-slate-100">
            <iframe
              src="https://www.youtube.com/embed/tCGMoLharlI"
              title="CureFest Interview — Sandeep Kolte on AI & Pediatric Cancer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="tag">Video Interview</span>
            <span className="text-slate-400 text-xs">2024</span>
          </div>
          <h3 className="text-slate-900 font-semibold mb-1">CureFest Interview — AI & Pediatric Cancer Advocacy</h3>
          <p className="text-indigo-600 text-sm mb-3">CureFest / YouTube</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Interviewed at CureFest about the intersection of AI technology and pediatric cancer advocacy — how technology and data can improve outcomes for children with cancer, support families, and advance research equity.
          </p>
        </div>
      </section>

      {/* Talks */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Talks & Panels</h2>
        <div className="space-y-4">
          <div className="card">
            <div className="flex items-center gap-2 mb-2">
              <span className="tag">Breakout Session</span>
              <span className="text-slate-400 text-xs">June 2024</span>
            </div>
            <h3 className="text-slate-900 font-semibold mb-1">
              Unlocking AI for Impact: Real-World Applications in Nonprofits
            </h3>
            <p className="text-indigo-600 text-sm mb-2">CAC2 Summit — Coalition Against Childhood Cancer · Washington, D.C.</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-2">
              Co-led a breakout session with Geoff Still (CEO, Pediatric Brain Tumor Foundation) covering how AI helps nonprofits automate donor outreach, personalize messaging, draft grant proposals, and protect patient privacy via HIPAA-aware AI layers.
            </p>
            <p className="text-slate-400 text-xs">Co-presented with Geoff Still, CEO — Pediatric Brain Tumor Foundation</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-2">
              <span className="tag">Panel</span>
              <span className="text-slate-400 text-xs">2024</span>
            </div>
            <h3 className="text-slate-900 font-semibold mb-1">AI for Nonprofit Organizations — Panel Discussion</h3>
            <p className="text-indigo-600 text-sm mb-2">AWS Nonprofit AI Panel · Virtual</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Panelist on AI adoption strategies for mission-driven organizations: data readiness, vendor selection, privacy considerations, and ethical frameworks for nonprofit AI deployment.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8 text-center">
        <p className="text-slate-600 text-sm mb-4">More appearances and recordings being added.</p>
        <p className="text-slate-500 text-xs mb-5">Speaking or media inquiry?</p>
        <Link href="/contact" className="btn-primary text-sm">
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
