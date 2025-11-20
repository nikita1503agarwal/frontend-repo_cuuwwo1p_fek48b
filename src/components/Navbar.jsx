import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNav(e, '#home')}>
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-400 to-rose-600 shadow-inner" />
              <span className="text-white font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="hidden sm:flex items-center gap-3 pl-3 ml-3 border-l border-white/10">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" onClick={(e)=>handleNav(e,'#contact')} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                  <Mail size={18} />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 pb-4">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className="py-2 text-white/90 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-3">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                    <Linkedin size={18} />
                  </a>
                  <a href="#contact" onClick={(e)=>handleNav(e,'#contact')} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
