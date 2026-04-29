import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title, description: post.summary }
}

function renderBody(body: string) {
  const lines = body.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-slate-900 mt-10 mb-3">
          {line.replace('## ', '')}
        </h2>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(
        <p key={i} className="font-semibold text-slate-800 mb-2">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].replace('- ', ''))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1.5 mb-4 text-slate-700 text-[15px]">
          {listItems.map((item, j) => (
            <li key={j} className="ml-2">{item}</li>
          ))}
        </ul>
      )
      continue
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} className="border-slate-200 my-8" />)
    } else if (line.trim() !== '') {
      const parts = line.split(/\*\*(.*?)\*\*/g)
      elements.push(
        <p key={i} className="text-slate-700 leading-relaxed mb-4 text-[15px]">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-slate-900 font-semibold">{part}</strong> : part
          )}
        </p>
      )
    }
    i++
  }
  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const postIndex = blogPosts.findIndex((p) => p.slug === params.slug)
  const prevPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null
  const nextPost = postIndex > 0 ? blogPosts[postIndex - 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-700 text-sm mb-10 transition-colors">
        <ArrowLeft size={14} /> Back to Writing
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag">{post.category}</span>
          <span className="text-slate-400 text-xs">{post.readTime} read</span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="text-slate-400 text-xs">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">{post.summary}</p>
      </div>

      <hr className="border-slate-200 mb-8" />

      <article className="min-h-[40vh]">
        {renderBody(post.body)}
      </article>

      <div className="mt-12 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <hr className="border-slate-200 my-10" />

      {/* Author */}
      <div className="flex items-start gap-4 mb-12 p-5 bg-slate-50 rounded-xl border border-slate-200">
        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg flex-shrink-0">
          SK
        </div>
        <div>
          <div className="text-slate-900 font-semibold mb-1">Sandeep Kolte</div>
          <div className="text-slate-600 text-sm leading-relaxed">
            Enterprise Architect and AI Systems Builder. Director of Engineering, AI/ML at Trussed.AI. Founder of CareBORN. Teaching AI to nonprofits, teens, and professionals.
          </div>
          <div className="mt-2 flex gap-3">
            <a href="https://github.com/skolte" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs hover:text-indigo-700">GitHub</a>
            <a href="https://linkedin.com/in/sandeepkolte" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs hover:text-indigo-700">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="grid grid-cols-2 gap-4">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="card text-left group">
            <div className="text-slate-400 text-xs mb-1">← Previous</div>
            <div className="text-slate-700 text-sm font-medium group-hover:text-indigo-600 transition-colors leading-snug">{prevPost.title}</div>
          </Link>
        ) : <div />}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="card text-right group">
            <div className="text-slate-400 text-xs mb-1">Next →</div>
            <div className="text-slate-700 text-sm font-medium group-hover:text-indigo-600 transition-colors leading-snug">{nextPost.title}</div>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
