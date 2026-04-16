'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)


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
  ]

  const services = [
    { name: 'Residential Junk Removal', href: '/residential-junk-removal' },
    { name: 'Commercial Junk Removal', href: '/commercial-junk-removal' },
    { name: 'Mattress Removal', href: '/mattress-removal' },
    { name: 'Appliance Removal', href: '/appliance-removal' },
    { name: 'Construction Debris', href: '/construction-debris-removal' },
    { name: 'E-Waste Removal', href: '/e-waste-junk-removal' },
    { name: 'Estate Cleanout', href: '/estate-cleanout' },
    { name: 'Same-Day Service', href: '/same-day-junk-removal' },
    { name: 'All Services', href: '/services' },
  ]



  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
              <Image
                src="/logojjr.png"
                alt="Jacksonville Junk Removals Logo"
                fill
                className="object-contain"
                priority
              />
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
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-base xl:text-lg flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-gray-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-base xl:text-lg"
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
              {/* Services Section */}
              <div className="mb-4">
                <div className="px-4 py-2 text-gray-900 font-semibold text-base border-b border-gray-200 mb-2">
                  Services
                </div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Navigation Links */}
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
                  href="/contact"
                  className="block px-6 py-4 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors duration-200 text-lg"
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
