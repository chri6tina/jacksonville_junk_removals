'use client'

import Link from 'next/link'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Leaf,
  Clock,
  Shield,
  Truck,
  Send
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Estimation Tool', href: '/estimation' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Blog', href: '/post' },
    { name: 'Contact', href: '/contact' },
    { name: '$99 Special', href: '/99-junk-removal' },
  ]

  const services = [
    { name: 'Post-Construction Cleanup', href: '/post-construction-cleanup' },
    { name: 'Residential Junk Removal', href: '/services/residential' },
    { name: 'Commercial Junk Removal', href: '/commercial-junk-removal' },
    { name: 'Construction Debris Removal', href: '/construction-debris-removal' },
    { name: 'Appliance Removal', href: '/appliance-removal' },
    { name: 'Mattress Removal', href: '/mattress-removal' },
    { name: 'Estate Cleanouts', href: '/estate-cleanout' },
    { name: 'Flood Cleanup', href: '/flood-cleanup' },
  ]

  // Post-Construction Cleanup Services for Jacksonville Dominance
  const postConstructionServices = [
    { name: 'Residential Cleanup', href: '/residential-post-construction-cleanup' },
    { name: 'Medical Facilities', href: '/medical-facility-post-construction-cleanup' },
    { name: 'Restaurants', href: '/restaurant-post-construction-cleanup' },
    { name: 'Industrial Sites', href: '/industrial-post-construction-cleanup' },
    { name: 'Hotels & Hospitality', href: '/hotel-post-construction-cleanup' },
    { name: 'Office Buildings', href: '/office-building-post-construction-cleanup' },
  ]

  // Strategic Tools & Resources
  const strategicTools = [
    { name: 'Cost Calculator', href: '/post-construction-cleanup-calculator' },
    { name: 'Best Practices Guide', href: '/post-construction-cleanup-best-practices' },
    { name: 'Project Portfolio', href: '/post-construction-cleanup-portfolio' },
    { name: 'Case Studies', href: '/post-construction-cleanup-case-studies' },
    { name: 'Contractor Partnerships', href: '/post-construction-cleanup-partnerships' },
  ]

  const areas = [
    { name: 'Downtown Jacksonville', href: '/junk-removal-downtown' },
    { name: 'Jacksonville Beach', href: '/junk-removal-jacksonville-beach' },
    { name: 'Riverside', href: '/junk-removal-riverside' },
    { name: 'San Marco', href: '/junk-removal-san-marco' },
    { name: 'Mandarin', href: '/junk-removal-mandarin' },
    { name: 'Orange Park', href: '/junk-removal-orange-park' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg">JJR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Jacksonville Junk Removals</h3>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Professional, eco-friendly junk removal services in Jacksonville and surrounding areas. 
              We're committed to responsible disposal and community service.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(904) 742-3531</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@jacksonvillejunkremovals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Jacksonville, FL & Surrounding Areas</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Post-Construction Cleanup Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Post-Construction</h4>
            <ul className="space-y-1 sm:space-y-2">
              {postConstructionServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Tools & Resources */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-400">Tools & Resources</h4>
            <ul className="space-y-1 sm:space-y-2">
              {strategicTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-gray-300 hover:text-green-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Service Areas</h4>
            <ul className="space-y-1 sm:space-y-2">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Get the latest junk removal tips, special offers, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 text-sm sm:text-base"
              />
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm sm:text-base">Licensed & Insured</h5>
                <p className="text-xs sm:text-sm text-gray-300">Fully bonded for your protection</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm sm:text-base">Eco-Friendly</h5>
                <p className="text-xs sm:text-sm text-gray-300">Recycling & donation focus</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm sm:text-base">Same Day Service</h5>
                <p className="text-xs sm:text-sm text-gray-300">Quick response times</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-sm sm:text-base">Free Estimates</h5>
                <p className="text-xs sm:text-sm text-gray-300">No hidden fees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Jacksonville Junk Removals. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-xs sm:text-sm">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
              <span>Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
