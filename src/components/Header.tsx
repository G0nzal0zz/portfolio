import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="w-full p-4 bg-white shadow-md">
        <div className="flex w-full items-center justify-between global-margin">
        {/* Left: Logo */}
        <div className="text-xl font-bold">MyLogo</div>

        {/* Center: Navigation (desktop only) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Right: Contact button (desktop only) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
            Contact
          </a>
        </div>

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
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      )}
      </div>
    </header>
  );
}
