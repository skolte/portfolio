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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 font-semibold text-slate-900 text-sm">
          Sandeep Kolte
        </Link>

        {/* Desktop nav - center */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
          {navLinks.slice(0, 5).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'nav-link-active text-xs' : 'nav-link text-xs'}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <SearchModal />
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
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm py-2 ${pathname === href ? 'text-indigo-600 font-medium' : 'text-slate-600'}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="border-t border-slate-200 my-1" />
          <a
            href="https://github.com/skolte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 font-medium py-2"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
