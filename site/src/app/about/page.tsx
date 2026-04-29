import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { aboutHero, aboutCareBORN, aboutBeyondIntent, aboutDrives, education, certifications } from '@/data/about'
import { experienceRoles } from '@/data/experience'
import { skillCategories } from '@/data/skills'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Sandeep Kolte — from national security systems to pediatric cancer advocacy and AI leadership.',
}


export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="section-heading text-4xl mb-4">{aboutHero.title}</h1>
        {aboutHero.content.map((para, i) => (
          <p key={i} className={i === 0 ? 'text-xl text-slate-700 leading-relaxed mb-4' : 'text-slate-600 leading-relaxed mb-4'}>
            {para}
          </p>
        ))}
      </div>

      {/* CareBORN & NKBR */}
      <section className="mb-16">
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">❤️ {aboutCareBORN.title}</h2>
          {aboutCareBORN.content.map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Beyond Intent */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Beyond Intent</h2>
        {aboutBeyondIntent.content.map((para, i) => (
          <p key={i} className="text-slate-700 leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </section>

      {/* What Drives Me */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">What Drives Me</h2>
        {aboutDrives.content.map((para, i) => (
          <p key={i} className="text-slate-700 leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Education</h2>
        <div className="space-y-3">
          {education.map((edu, i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-semibold text-slate-900">{edu.degree}</div>
              <div className="text-sm text-slate-600">{edu.school}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Links to detailed pages */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Learn More</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/experience" className="card hover:bg-slate-50 transition-colors group">
            <h3 className="text-slate-900 font-semibold mb-2 group-hover:text-indigo-600">Experience</h3>
            <p className="text-slate-600 text-sm">20+ years across federal defense, healthcare AI, and nonprofits</p>
          </Link>
          <Link href="/skills" className="card hover:bg-slate-50 transition-colors group">
            <h3 className="text-slate-900 font-semibold mb-2 group-hover:text-indigo-600">Skills & Expertise</h3>
            <p className="text-slate-600 text-sm">Technical depth by domain and framework</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Let's Work Together</h2>
          <p className="text-indigo-100 text-sm mb-5 max-w-md mx-auto">
            Open to DevRel, AI advocacy, consulting, and speaking opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-indigo-700 font-medium rounded-lg transition-colors text-sm">
              Get in Touch <ArrowRight size={14} />
            </Link>
            <a href="https://linkedin.com/in/sandeepkolte" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg border border-indigo-400 transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
