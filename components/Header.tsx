'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Truck, Phone, MapPin, Clock, Building, ChevronDown } from 'lucide-react'

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
    { name: 'Blog', href: '/post' },
    { name: 'Contact', href: '/contact' },
  ]

  const postConstructionServices = [
    { name: 'All Services', href: '/post-construction-cleanup', description: 'Complete overview' },
    { name: 'Residential', href: '/residential-post-construction-cleanup', description: 'Home renovations' },
    { name: 'Commercial', href: '/commercial-post-construction-cleanup', description: 'Office buildings' },
    { name: 'Medical', href: '/medical-facility-post-construction-cleanup', description: 'Healthcare facilities' },
    { name: 'Restaurants', href: '/restaurant-post-construction-cleanup', description: 'Food service' },
    { name: 'Industrial', href: '/industrial-post-construction-cleanup', description: 'Manufacturing' },
    { name: 'Hotels', href: '/hotel-post-construction-cleanup', description: 'Hospitality' },
    { name: 'Educational', href: '/educational-facility-post-construction-cleanup', description: 'Schools & universities' },
    { name: 'Religious', href: '/religious-facility-post-construction-cleanup', description: 'Churches & worship centers' },
    { name: 'Retail', href: '/retail-store-post-construction-cleanup', description: 'Stores & shopping centers' },
  ]

  const areaSpecificServices = [
    { name: 'Jacksonville Beach', href: '/post-construction-cleanup-jacksonville-beach', description: 'Beach area specialists' },
    { name: 'Downtown', href: '/post-construction-cleanup-downtown-jacksonville', description: 'Urban core experts' },
    { name: 'Southside', href: '/post-construction-cleanup-southside-jacksonville', description: 'Suburban specialists' },
    { name: 'Mandarin', href: '/post-construction-cleanup-mandarin-jacksonville', description: 'Premium waterfront' },
    { name: 'Orange Park', href: '/post-construction-cleanup-orange-park', description: 'Growing communities' },
  ]

  const strategicTools = [
    { name: 'Cost Calculator', href: '/post-construction-cleanup-calculator', description: 'Instant estimates' },
    { name: 'Best Practices', href: '/post-construction-cleanup-best-practices', description: 'Industry guide' },
    { name: 'Case Studies', href: '/post-construction-cleanup-case-studies', description: 'Project examples' },
    { name: 'Portfolio', href: '/post-construction-cleanup-portfolio', description: 'Our work gallery' },
    { name: 'Partnerships', href: '/post-construction-cleanup-partnerships', description: 'Contractor network' },
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
            {/* Post-Construction Cleanup Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-base xl:text-lg relative group px-4 py-2 rounded-lg hover:bg-gray-50"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Building className="w-5 h-5" />
                <span>Post-Construction</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Mega Menu */}
              <div 
                className={`absolute top-full left-0 w-screen max-w-7xl bg-white shadow-2xl border border-gray-200 rounded-lg opacity-0 invisible transition-all duration-300 transform -translate-y-2 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : ''
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="p-8 grid grid-cols-3 gap-12">
                  {/* Services Column */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                      Industry Services
                    </h3>
                    <div className="grid gap-4">
                      {postConstructionServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors duration-200"></div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-base">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Area-Specific Services Column */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                      Area Specialists
                    </h3>
                    <div className="grid gap-4">
                      {areaSpecificServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="w-3 h-3 bg-green-500 rounded-full group-hover:bg-green-600 transition-colors duration-200"></div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-200 text-base">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools & Resources Column */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                      Tools & Resources
                    </h3>
                    <div className="grid gap-4">
                      {strategicTools.map((tool) => (
                        <Link
                          key={tool.name}
                          href={tool.href}
                          className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:bg-purple-600 transition-colors duration-200"></div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 text-base">
                              {tool.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{tool.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-3 text-lg">Ready to Start?</h4>
                      <div className="flex space-x-3">
                        <Link
                          href="/estimation"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
                        >
                          Get Quote
                        </Link>
                        <Link
                          href="/contact"
                          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              {/* Post-Construction Cleanup Section */}
              <div className="px-4 py-4 border-b border-gray-200 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-blue-600" />
                  Post-Construction Cleanup
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/post-construction-cleanup"
                    className="block text-blue-600 hover:text-blue-800 font-semibold text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="grid grid-cols-2 gap-3 text-base">
                    <Link
                      href="/residential-post-construction-cleanup"
                      className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Residential
                    </Link>
                    <Link
                      href="/commercial-post-construction-cleanup"
                      className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial
                    </Link>
                    <Link
                      href="/medical-facility-post-construction-cleanup"
                      className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Medical
                    </Link>
                    <Link
                      href="/restaurant-post-construction-cleanup"
                      className="text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Restaurants
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tools & Resources Section */}
              <div className="px-4 py-4 border-b border-gray-200 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 mr-3 text-green-600">🛠️</span>
                  Tools & Resources
                </h3>
                <div className="space-y-3 text-base">
                  <Link
                    href="/post-construction-cleanup-calculator"
                    className="block text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cost Calculator
                  </Link>
                  <Link
                    href="/post-construction-cleanup-best-practices"
                    className="block text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Best Practices Guide
                  </Link>
                  <Link
                    href="/post-construction-cleanup-portfolio"
                    className="block text-gray-600 hover:text-gray-900 p-2 rounded hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Project Portfolio
                  </Link>
                </div>
              </div>

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
