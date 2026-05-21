import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = 'text-slate-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium'

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="global-margin flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold text-slate-900 tracking-tight">
          GL
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className={linkClass}>About</a>
          <a href="#technologies" className={linkClass}>Technologies</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#education" className={linkClass}>Education</a>
          <a href="#work" className={linkClass}>Experience</a>
          <a href="#cv" className={linkClass}>CV</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-slate-700 rounded" />
          <span className="block w-5 h-0.5 bg-slate-700 rounded" />
          <span className="block w-5 h-0.5 bg-slate-700 rounded" />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="global-margin flex flex-col gap-4 py-6">
            <a href="#about" className={linkClass} onClick={() => setIsOpen(false)}>About</a>
            <a href="#technologies" className={linkClass} onClick={() => setIsOpen(false)}>Technologies</a>
            <a href="#projects" className={linkClass} onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#education" className={linkClass} onClick={() => setIsOpen(false)}>Education</a>
            <a href="#work" className={linkClass} onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#cv" className={linkClass} onClick={() => setIsOpen(false)}>CV</a>
            <a href="#contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
