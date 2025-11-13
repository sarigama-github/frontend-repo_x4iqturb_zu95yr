import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-autumn-900/70 shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-autumn-400 to-autumn-600 shadow-inner"></div>
          <span className="font-semibold tracking-wide text-autumn-50 group-hover:text-autumn-100 transition-colors">Rida Khan</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-autumn-100/90 hover:text-autumn-50 transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md bg-autumn-500 hover:bg-autumn-400 text-autumn-900 font-semibold transition-colors shadow-sm"
          >
            Let’s Talk
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-md text-autumn-100 hover:bg-autumn-800/60"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-autumn-700/40 bg-autumn-900/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-autumn-100/90 hover:text-autumn-50 transition-colors py-1">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center px-3 py-1.5 rounded-md bg-autumn-500 hover:bg-autumn-400 text-autumn-900 font-semibold transition-colors shadow-sm">
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
