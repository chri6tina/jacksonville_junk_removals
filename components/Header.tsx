'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Truck, Phone, MapPin, Clock } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const navLinks = [
    { name: 'Estimation Tool', href: '/estimation' },
    { name: 'Locations', href: '/locations' },
    { name: 'Blog', href: '/post' },
    { name: 'Contact', href: '/contact' },
  ]



  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">Jacksonville Junk Removals</h1>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Professional & Eco-Friendly</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">JJR</h1>
              <p className="text-xs text-gray-600 font-medium">Jacksonville</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-base xl:text-lg relative group px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            <Link
              href="/99-junk-removal"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-base xl:text-lg"
            >
              $99 Special
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 xl:px-8 py-3 xl:py-4 rounded-lg font-semibold transition-all duration-200 text-base xl:text-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-menu">
            {/* Mobile Header Info */}
            <div className="bg-gray-50 p-6 rounded-t-lg border-t border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700 font-semibold text-lg">(904) 456-3851</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700 text-base">Jacksonville, FL</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700 text-base">Same Day Service</span>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white rounded-b-lg border-b border-gray-200">




              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 font-medium rounded-lg text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-6 space-y-4">
                <Link
                  href="/99-junk-removal"
                  className="block px-6 py-4 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors duration-200 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  $99 Special
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-center hover:bg-gray-900 hover:text-white transition-all duration-200 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
