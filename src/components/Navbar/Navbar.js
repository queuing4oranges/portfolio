import React, { useState } from 'react'

export default function NavbarNeu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: 'projects', label: 'Projects' },
    { to: 'stack', label: 'Stack' },
    { to: 'education', label: 'Education' },
    { to: 'about', label: 'About' }
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0b1220]/75 border-b border-white/10" data-testid="site-nav" x-file-name="App" x-line-number="196" x-column="4" x-component="header" x-id="App_196_4" x-dynamic="true" x-source-type="computed" x-source-editable="false">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight flex items-center gap-2 text-[#c8ccd8] hover:text-[#ff6b00]" >
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff6b00]">
          </span>queuing4oranges<span className="text-[#ff6b00]">
            /
            </span>katja
        </a>
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a key={link.to} href={`#${link.to}`} className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#c8ccd8] hover:text-[#ff6b00] transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile navigation */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[#c8ccd8] hover:text-[#ff6b00] transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </>
              ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
              )}
            </svg>
          </button>
      </div>
      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-[#0b1220]/95 px-6 py-5">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                onClick={closeMenu}
                className="font-mono text-[12px] tracking-[0.14em] uppercase text-[#c8ccd8] hover:text-[#ff6b00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
