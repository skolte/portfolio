import type { Metadata } from 'next'
import { Github, Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sandeep Kolte — available for DevRel, AI consulting, speaking, and partnership opportunities.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl">Get in Touch</h1>
        <p className="section-subheading max-w-xl">
          Open to Developer Advocate roles, AI consulting, speaking engagements, podcast appearances, and partnership opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <a href="mailto:sandeep.kolte@gmail.com" className="card flex flex-col items-center text-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
            <Mail size={20} />
          </div>
          <div>
            <div className="text-slate-900 font-medium text-sm mb-0.5">Email</div>
            <div className="text-slate-500 text-xs">sandeep.kolte@gmail.com</div>
          </div>
        </a>
        <a href="https://linkedin.com/in/sandeepkolte" target="_blank" rel="noopener noreferrer" className="card flex flex-col items-center text-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
            <Linkedin size={20} />
          </div>
          <div>
            <div className="text-slate-900 font-medium text-sm mb-0.5">LinkedIn</div>
            <div className="text-slate-500 text-xs">linkedin.com/in/sandeepkolte</div>
          </div>
        </a>
        <a href="https://github.com/skolte" target="_blank" rel="noopener noreferrer" className="card flex flex-col items-center text-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
            <Github size={20} />
          </div>
          <div>
            <div className="text-slate-900 font-medium text-sm mb-0.5">GitHub</div>
            <div className="text-slate-500 text-xs">github.com/skolte</div>
          </div>
        </a>
      </div>

      <div className="card mb-8">
        <h2 className="text-slate-900 font-semibold mb-4">What I'm Open To</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: '🎯', title: 'Developer Advocate / DevRel Roles', desc: 'Full-time or contract — AI platforms, developer tools, cloud infrastructure' },
            { icon: '🤝', title: 'AI Consulting', desc: 'Architecture, compliance, multi-agent systems for regulated industries' },
            { icon: '🎤', title: 'Speaking & Panels', desc: 'AI systems, responsible AI, nonprofit tech, pediatric cancer advocacy' },
            { icon: '🎙️', title: 'Podcast Appearances', desc: 'Engineering, AI adoption, nonprofit technology, developer education' },
            { icon: '📚', title: 'Workshops & Training', desc: 'AI literacy for nonprofits, professionals, teens, and executives' },
            { icon: '❤️', title: 'Mission-Driven Partnerships', desc: 'Pediatric cancer, healthcare equity, education access' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-lg flex-shrink-0">{icon}</span>
              <div>
                <div className="text-slate-800 text-sm font-medium mb-0.5">{title}</div>
                <div className="text-slate-500 text-xs">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center">
        <p className="text-slate-600 text-sm">
          The best way to reach me is via LinkedIn or email. I typically respond within 24–48 hours.
        </p>
      </div>
    </div>
  )
}
