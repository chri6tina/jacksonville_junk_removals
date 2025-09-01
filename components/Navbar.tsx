'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Reduced navigation items for less cramped layout
  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-[#014421] text-[#f5f5f5] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Made more compact */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#f57c00] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm lg:text-base">JJR</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-bold">Jacksonville Junk Removals</span>
            </div>
            <div className="sm:hidden">
              <span className="text-lg font-bold">JJR</span>
            </div>
          </Link>

          {/* Desktop Navigation - Improved spacing */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#f5f5f5] hover:text-[#f57c00] transition-colors duration-200 font-medium text-base lg:text-lg px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Better spacing and sizing */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/estimation"
              className="text-[#f5f5f5] hover:text-[#f57c00] transition-colors duration-200 font-medium text-base lg:text-lg px-2 py-1"
            >
              Get Estimate
            </Link>
            <Link
              href="/contact"
              className="bg-[#f57c00] hover:bg-[#ff8f1f] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 text-base lg:text-lg"
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
              <span>Call Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f5f5f5] hover:text-[#f57c00] transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#013318]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-[#f5f5f5] hover:text-[#f57c00] transition-colors duration-200 font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/estimation"
                className="block px-3 py-3 text-[#f5f5f5] hover:text-[#f57c00] transition-colors duration-200 font-medium text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Estimate
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 bg-[#f57c00] text-white rounded-lg font-semibold mt-4 text-center text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
