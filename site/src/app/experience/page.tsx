import type { Metadata } from 'next'
import { experienceRoles, speaking } from '@/data/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Career timeline from Rodopi to Pediatric Brain Tumor Foundation — 20+ years in defense, healthcare, and nonprofit technology.',
}

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl mb-4">Experience</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          20+ years building mission-critical systems across federal defense, healthcare AI, and nonprofit technology.
        </p>
      </div>

      {/* Career Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Career Timeline</h2>
        <div className="space-y-6">
          {experienceRoles.map((role, i) => (
            <div key={i} className="card">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                  <p className="text-indigo-600 text-sm font-medium">{role.company}</p>
                </div>
                <span className="text-slate-400 text-xs flex-shrink-0">{role.period}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">{role.description}</p>
              <ul className="space-y-2">
                {role.highlights.map((highlight, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">·</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Speaking */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Speaking & Teaching</h2>
        <div className="space-y-3">
          {speaking.map((event, i) => (
            <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex-1">
                <h3 className="text-slate-900 font-semibold text-sm mb-1">{event.event}</h3>
                <p className="text-slate-600 text-sm">{event.topic}</p>
              </div>
              <span className="text-slate-400 text-xs flex-shrink-0 pt-0.5">{event.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Let's Work Together</h2>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            Open to AI platform roles, consulting, speaking opportunities, and mission-driven partnerships.
          </p>
        </div>
      </section>
    </div>
  )
}
