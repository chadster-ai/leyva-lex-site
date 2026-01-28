import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold">
              Leyva Lex <span className="text-gold">PLLC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#team" className="hover:text-gold transition-colors">Team</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="bg-gold text-navy px-6 py-2 rounded font-semibold hover:bg-gold-light transition-colors"
            >
              Book a Consult
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <a href="#services" className="block hover:text-gold transition-colors">Services</a>
            <a href="#about" className="block hover:text-gold transition-colors">About</a>
            <a href="#team" className="block hover:text-gold transition-colors">Team</a>
            <a href="#contact" className="block hover:text-gold transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="block bg-gold text-navy px-6 py-2 rounded font-semibold text-center hover:bg-gold-light transition-colors"
            >
              Book a Consult
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
