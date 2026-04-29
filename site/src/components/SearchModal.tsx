'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { searchPortfolio, type SearchResult } from '@/data/search'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(!open)
        setQuery('')
        setSelectedIndex(0)
      }
      // Escape to close
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  // Search as user types
  useEffect(() => {
    const newResults = searchPortfolio(query)
    setResults(newResults)
    setSelectedIndex(0)
  }, [query])

  // Handle arrow keys to navigate results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      window.location.href = results[selectedIndex].href
      setOpen(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors"
        title="Search (Cmd+K or Ctrl+K)"
      >
        <Search size={16} className="text-slate-500" />
        <span className="text-sm text-slate-500">Search</span>
        <span className="ml-2 text-xs text-slate-400 font-mono">⌘K</span>
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-50 mx-4">
        <div className="bg-white rounded-xl shadow-xl border border-slate-200">
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
            <Search size={20} className="text-slate-400 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search portfolio... (press Esc to close)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 outline-none text-base"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="text-slate-500 text-sm">Type to search portfolio</p>
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="text-slate-500 text-sm">No results found for "{query}"</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-200">
                {results.map((result, idx) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 transition-colors ${
                      idx === selectedIndex
                        ? 'bg-indigo-50'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-slate-900 font-medium text-sm">
                          {result.title}
                        </h3>
                        <p className="text-slate-600 text-xs mt-0.5 line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-slate-400 flex-shrink-0">
                        {result.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer hint */}
          {results.length > 0 && (
            <div className="px-4 py-2 text-center border-t border-slate-200 bg-slate-50 text-xs text-slate-500">
              <span className="inline-block">
                Use <kbd className="inline-block px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-xs">↑↓</kbd>
                <kbd className="inline-block px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-mono text-xs ml-1">Enter</kbd>
                to navigate
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
