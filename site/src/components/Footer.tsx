import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-slate-900 font-semibold mb-1">Sandeep Kolte</div>
            <div className="text-slate-500 text-sm mb-4">
              Enterprise Architect · AI Systems Builder · Developer Educator
            </div>
            <div className="text-slate-400 text-xs">
              Building production AI systems and teaching others to design, scale, and govern them.
            </div>
          </div>
          <div>
            <div className="text-slate-700 font-medium text-sm mb-3">Navigation</div>
            <div className="flex flex-col gap-2">
              {[
                ['/', 'Home'],
                ['/projects', 'Projects'],
                ['/teaching', 'Teaching & Talks'],
                ['/media', 'Media'],
                ['/blog', 'Blog'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-slate-400 hover:text-slate-700 text-sm transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-700 font-medium text-sm mb-3">Connect</div>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/skolte" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">
                GitHub — github.com/skolte
              </a>
              <a href="https://linkedin.com/in/sandeepkolte" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">
                LinkedIn
              </a>
              <Link href="/contact" className="text-slate-400 hover:text-slate-700 text-sm transition-colors">
                Email
              </Link>
            </div>
            <div className="mt-4">
              <div className="text-slate-700 font-medium text-sm mb-2">Mission Work</div>
              <div className="text-slate-400 text-sm">Neev Kolte & Brave Ronil Foundation</div>
              <div className="text-slate-400 text-sm">CareBORN — Pediatric Cancer Platform</div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-slate-400 text-xs">© {new Date().getFullYear()} Sandeep Kolte. All rights reserved.</div>
          <div className="text-slate-400 text-xs">Builder · Teacher · Advocate</div>
        </div>
      </div>
    </footer>
  )
}
