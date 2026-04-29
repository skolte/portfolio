import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering insights from building production AI systems in healthcare, insurance, and regulated industries.',
}

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))]

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="section-heading text-4xl">Writing</h1>
        <p className="section-subheading max-w-2xl">
          Engineering insights from building real AI systems — multi-agent architectures, RAG pipelines, compliance, and what I've learned teaching AI to everyone from teenagers to nonprofit executives.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <span key={cat} className={`text-sm px-3 py-1 rounded-full border cursor-pointer transition-colors ${
            cat === 'All'
              ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}>
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card group flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="tag">{post.category}</span>
              <span className="text-slate-400 text-xs">{post.readTime} read</span>
            </div>
            <h2 className="text-slate-900 font-semibold mb-2 leading-snug group-hover:text-indigo-600 transition-colors flex-1">
              {post.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-slate-400 text-xs mt-auto">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
