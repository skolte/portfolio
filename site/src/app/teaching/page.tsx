import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Calendar, MapPin } from 'lucide-react'
import { teachingSeries, talks } from '@/data/teaching'

export const metadata: Metadata = {
  title: 'Teaching & Talks',
  description: 'Kids Python Series, AI for Nonprofits, AI for Teens, and conference talks by Sandeep Kolte.',
}

export default function TeachingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl">Teaching & Talks</h1>
        <p className="section-subheading max-w-2xl">
          From teaching Python to kids to leading AI workshops for nonprofit executives — building AI literacy across audiences.
        </p>
      </div>

      {/* Talks */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">🎤 Talks & Panels</h2>
        <div className="space-y-4">
          {talks.map((talk, i) => (
            <div key={i} className="card">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {talk.type}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 font-semibold mb-1">{talk.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {talk.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} /> {talk.location}</span>
                    <span className="font-medium text-slate-600">{talk.event}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{talk.description}</p>
                  {talk.coPresenter && (
                    <p className="text-slate-400 text-xs mt-2 flex items-center gap-1">
                      <Users size={12} /> Co-presented with {talk.coPresenter}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Series */}
      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">📚 Teaching Series & Workshops</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {teachingSeries.map((series, i) => (
            <div key={i} className="card flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl flex-shrink-0">{series.icon}</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-slate-900 font-bold text-lg leading-tight">{series.title}</h3>
                    <span className="tag flex-shrink-0 text-nowrap">{series.tag}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1 text-slate-400 text-xs">
                    <span className="flex items-center gap-1"><Users size={11} /> {series.audience}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} /> {series.year}</span>
                    {series.sessions && (
                      <span className="text-indigo-600 font-medium">{series.sessions} sessions</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{series.description}</p>

              <div className="mt-auto">
                <h4 className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">Topics Covered</h4>
                <ul className="space-y-1">
                  {series.topics.map((topic, j) => (
                    <li key={j} className="text-slate-600 text-xs flex gap-2">
                      <span className="text-indigo-400 flex-shrink-0">·</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-10 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Bring a Workshop to Your Organization</h2>
          <p className="text-emerald-50 mb-6 max-w-xl mx-auto text-sm">
            Whether you're a school, nonprofit, corporate team, or conference — I offer customized AI literacy workshops for all audiences and technical levels.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-emerald-50 text-emerald-700 font-medium rounded-lg transition-colors">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  )
}
