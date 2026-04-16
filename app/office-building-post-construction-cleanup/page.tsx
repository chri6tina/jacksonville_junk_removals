import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Building2, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Briefcase, Computer, Wifi, Monitor, FileText, Archive } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Office Building Post-Construction Cleanup Jacksonville | Corporate Environment Cleaning (904) 456-3851',
  description: 'Professional office building post-construction cleanup in Jacksonville. Corporate environment cleaning, business-ready results, LEED compliance, workspace preparation. Free estimates, certified technicians. Call (904) 456-3851',
  keywords: 'office building post-construction cleanup Jacksonville, corporate construction cleanup Jacksonville, office construction cleaning Jacksonville, commercial office cleanup Jacksonville, corporate environment cleaning Florida',
  alternates: {
    canonical: '/office-building-post-construction-cleanup',
  },
}

export default function OfficeBuildingPostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Office Building Post-Construction Cleanup Jacksonville",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jacksonville"
    },
    {
      "@type": "City",
      "name": "Jacksonville Beach"
    },
    {
      "@type": "City",
      "name": "Orange Park"
    }
  ],
  "description": "Professional office building post-construction cleanup in Jacksonville. Corporate environment cleaning, business-ready results, LEED compliance, workspace preparation. Free estimates, certified technicians. Call (904) 456-3851"
})
        }}
      />
<div className="absolute inset-0 z-0">
          <Image
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
            fill
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20 mx-auto lg:mx-0">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-secondary fill-secondary drop-shadow-md" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm">Top-Rated Local Service</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                  Office Building Post-Construction Cleanup
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">JACKSONVILLE'S #1 CORPORATE CONSTRUCTION CLEANUP SERVICE</span><br /> Specialized cleaning for office buildings, corporate facilities, and business environments.<br /> Business-ready results, LEED compliance, and professional workspace preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <Link
                  href="tel:+19044563851"
                  className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 animate-bounce-gentle" />
                  <span>Call (904) 456-3851</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Service Alert */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-secondary" />
              <p className="text-primary font-semibold text-lg">
                <strong>Corporate Standards Required:</strong> All office cleanups meet professional business standards for immediate employee occupancy and client presentations.
              </p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional office building construction cleanup with corporate compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Office Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Office Cleanup</h3>
                  <p className="text-gray-600">Small office buildings & suites</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$2.50</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Office space cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Common area preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Business-ready presentation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Office Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-secondary/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Office Cleanup</h3>
                  <p className="text-gray-600">Multi-story office buildings</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$3.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete building cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Conference room preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Corporate environment standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>HVAC system cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Technology area preparation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Office Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Office Cleanup</h3>
                  <p className="text-gray-600">Corporate headquarters & high-rise</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$5.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Executive suite preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>LEED compliance cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium finish protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Client presentation ready</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Corporate-level inspection</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Standards Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Corporate Environment Standards & Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our office building cleanup meets professional business standards and corporate requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Professional Standards</h3>
                </div>
                <p className="text-gray-600">
                  Meeting all professional business standards for immediate employee occupancy and productivity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">LEED Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Supporting LEED certification with eco-friendly cleaning practices and green building standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Technology Integration</h3>
                </div>
                <p className="text-gray-600">
                  Careful cleaning around technology infrastructure, server rooms, and communication systems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Client-Ready Presentation</h3>
                </div>
                <p className="text-gray-600">
                  Professional presentation standards suitable for client meetings and business operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Corporate Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Meeting corporate facility standards, insurance requirements, and regulatory compliance.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                </div>
                <p className="text-gray-600">
                  Multi-point quality inspections ensuring every area meets corporate excellence standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Building Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Office Building Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of corporate construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Building2 className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Headquarters</h3>
                <p className="text-gray-600">
                  Executive offices, boardrooms, and corporate campus facilities
                </p>
              </div>

              <div className="text-center">
                <Briefcase className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Centers</h3>
                <p className="text-gray-600">
                  Professional office buildings, business parks, and commercial towers
                </p>
              </div>

              <div className="text-center">
                <Computer className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech & Innovation Centers</h3>
                <p className="text-gray-600">
                  Technology offices, innovation hubs, and research facilities
                </p>
              </div>

              <div className="text-center">
                <FileText className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Services</h3>
                <p className="text-gray-600">
                  Law firms, accounting offices, consulting firms, and professional practices
                </p>
              </div>

              <div className="text-center">
                <Monitor className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Coworking Spaces</h3>
                <p className="text-gray-600">
                  Shared workspaces, incubators, and flexible office environments
                </p>
              </div>

              <div className="text-center">
                <Archive className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Buildings</h3>
                <p className="text-gray-600">
                  Municipal offices, federal facilities, and government administrative buildings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Office Building Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Corporate Environment Experience</h3>
                    <p className="text-gray-600">
                      Our team understands corporate standards and professional business requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business-Ready Guarantee</h3>
                    <p className="text-gray-600">
                      We guarantee your office will be ready for employees and client meetings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Minimal Business Disruption</h3>
                    <p className="text-gray-600">
                      Efficient cleanup process designed to minimize disruption to business operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technology Infrastructure Care</h3>
                    <p className="text-gray-600">
                      Careful cleaning around sensitive technology, networking, and communication systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Green Building Support</h3>
                    <p className="text-gray-600">
                      Supporting LEED certification and green building standards with eco-friendly practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville corporate regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Business-Ready Office Cleanup?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
              Get your office building ready for business with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/commercial-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">General commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/medical-facility-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Shield className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Medical Facility Cleanup</h3>
                  <p className="text-gray-600 text-sm">Healthcare compliance cleaning</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">General Post-Construction</h3>
                  <p className="text-gray-600 text-sm">All types of construction cleanup</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
