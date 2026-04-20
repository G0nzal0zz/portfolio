import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="overflow-x-hidden">
      <div className="w-full px-6 md:px-12 p-4 bg-white shadow-md">
        <div className="flex w-full items-center justify-between">
          {/* Left: Logo */}
          <div className="text-xl font-bold">GL</div>

          {/* Center: Navigation (desktop only) */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#education" className="hover:text-blue-500">
              Education
            </a>
            <a href="#work" className="hover:text-blue-500">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </nav>

          <div></div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#education" className="hover:text-blue-500">
              Education
            </a>
            <a href="#work" className="hover:text-blue-500">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
