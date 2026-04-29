import Link from 'next/link'
import { ArrowRight, Code2, BookOpen, Heart, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Senior Director of Technology and AI
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3">
            AI Systems Builder & Compliance Expert
          </h1>
          <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
            20+ years building production AI and mission-critical systems for regulated industries. Specialist in multi-agent orchestration, healthcare compliance (HIPAA), and defense (FedRAMP).
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/skills" className="btn-primary text-sm">
              Skills & Expertise <ArrowRight size={14} />
            </Link>
            <Link href="/experience" className="btn-secondary text-sm">
              Experience
            </Link>
            <Link href="/projects" className="btn-secondary text-sm">
              Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="border-y border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">What I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                <Code2 size={18} />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">Agentic AI & Multi-Agent Systems</h3>
                <p className="text-slate-600 text-sm">LangGraph, LangChain, cost tracking, observability, human-in-the-loop validation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <BookOpen size={18} />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">Healthcare Compliance & Data</h3>
                <p className="text-slate-600 text-sm">HIPAA, FHIR, EHR, PII redaction, compliance middleware, audit logging</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
                <Heart size={18} />
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold mb-1">AWS Architecture & Defense Systems</h3>
                <p className="text-slate-600 text-sm">FedRAMP, NIST 800-53, ECS Fargate, Lambda, multi-AZ infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">Featured Projects</h2>
          <Link href="/projects" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/projects#${project.slug}`} className="card group">
              <div className="text-2xl mb-3">{project.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-slate-900 font-semibold group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <span className="tag flex-shrink-0">{project.category}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GitHub Repos */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-heading">GitHub</h2>
            <a
              href="https://github.com/skolte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <Github size={16} /> github.com/skolte
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'careborn', desc: 'Six-layer multi-agent platform for pediatric cancer family support using LangGraph', lang: 'Python' },
              { name: 'insurance-claims-automation', desc: 'Multi-agent claims pipeline with LLM compliance middleware and governance', lang: 'Python' },
              { name: 'clinical-trial-navigator', desc: 'RAG system for matching pediatric cancer patients to clinical trials', lang: 'Python' },
              { name: 'ai-incident-triage', desc: 'Healthcare incident triage system with multi-agent orchestration and real-time streaming', lang: 'Python' },
              { name: 'pla-legal-assistant', desc: 'Legal case intelligence platform with document analysis and versioned narratives', lang: 'TypeScript' },
              { name: 'ai-workflows-nonprofits', desc: 'Paid training series for nonprofits deploying AI in operations and fundraising', lang: 'Teachable' },
            ].map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/skolte/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:bg-slate-50"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-indigo-600 font-mono text-sm font-medium group-hover:text-indigo-700">{repo.name}</span>
                  <ExternalLink size={14} className="text-slate-300 group-hover:text-slate-500 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{repo.desc}</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="text-slate-400 text-xs">{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">Writing</h2>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
            All posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="tag">{post.category}</span>
                <span className="text-slate-400 text-xs">{post.readTime} read</span>
              </div>
              <h3 className="text-slate-900 font-semibold mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {post.summary}
              </p>
              <div className="mt-4 text-slate-400 text-xs">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Let's Build Something That Matters</h2>
          <p className="text-indigo-100 mb-5 max-w-xl mx-auto text-sm">
            Production AI systems, compliance architecture, or teaching your team. Let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-indigo-700 font-medium rounded-lg text-sm transition-colors">
              Get in Touch <ArrowRight size={14} />
            </Link>
            <a href="https://linkedin.com/in/sandeepkolte" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg text-sm transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
