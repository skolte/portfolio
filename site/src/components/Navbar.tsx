'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import SearchModal from './SearchModal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/engineering', label: 'Engineering' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-slate-900 font-semibold text-base">Sandeep Kolte</span>
          <span className="text-indigo-600 text-xs font-medium">AI Systems Builder · Educator · Advocate</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <SearchModal />
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'nav-link-active' : 'nav-link'}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/skolte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-1.5 text-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-500 hover:text-slate-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium ${pathname === href ? 'text-indigo-600' : 'text-slate-600'}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/skolte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 font-medium"
          >
            GitHub →
          </a>
        </div>
      )}
    </nav>
  )
}
