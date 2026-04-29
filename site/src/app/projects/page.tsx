import type { Metadata } from 'next'
import { Github, ExternalLink, Globe } from 'lucide-react'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Production AI systems, compliance middleware, and healthcare platforms built by Sandeep Kolte.',
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl">Projects</h1>
        <p className="section-subheading max-w-2xl">
          Production systems built for regulated industries — healthcare, insurance, and national security. Each project covers the problem, approach, tech stack, and real lessons learned.
        </p>
      </div>

      {/* Featured projects */}
      <div className="space-y-10 mb-20">
        {featured.map((project) => (
          <div key={project.slug} id={project.slug} className="card scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{project.icon}</span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
                <p className="text-indigo-600 text-sm">{project.subtitle}</p>
              </div>
              <span className="ml-auto tag">{project.category}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-2">Problem</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-2">Approach</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.approach}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-3">Key Learnings</h3>
              <ul className="space-y-2">
                {project.keyLearnings.map((learning, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-500 mt-0.5 flex-shrink-0">→</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-slate-700 font-semibold text-xs uppercase tracking-wide mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  <Github size={15} /> View on GitHub
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <Globe size={15} /> Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Other projects */}
      {other.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {other.map((project) => (
              <div key={project.slug} id={project.slug} className="card scroll-mt-24">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-slate-900 font-semibold">{project.title}</h3>
                    <p className="text-indigo-600 text-xs">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.problem}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    <Github size={13} /> GitHub <ExternalLink size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
