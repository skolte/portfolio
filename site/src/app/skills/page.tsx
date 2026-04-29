import type { Metadata } from 'next'
import { skillCategories } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills & Expertise',
  description: 'Technical depth across agentic AI, healthcare data, cloud infrastructure, backend engineering, data pipelines, frontend, compliance, and leadership.',
}

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl mb-4">Skills & Expertise</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          Technical depth by domain — what I've built, the context I've built it in, and what I've learned doing it.
        </p>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <div key={i} className="card">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{category.description}</p>

            <div className="mb-6">
              <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-3">Key Points</h3>
              <ul className="space-y-2">
                {category.keyPoints.map((point, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-500 flex-shrink-0 mt-0.5">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-3">Tools & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.split(', ').map((tool) => (
                  <span key={tool} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Let's Build Something That Matters</h2>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            These skills have been developed through production work in healthcare, defense, and nonprofit technology. Let's talk about what you're building.
          </p>
        </div>
      </section>
    </div>
  )
}
