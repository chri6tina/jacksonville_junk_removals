import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Building2, Car, Train, Bus, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Riverside Jacksonville | Historic District Cleanup (904) 456-3851',
  description: 'Riverside Jacksonville post-construction cleanup specialists. Serving Riverside, Avondale, and historic districts. Historic renovation cleanup, commercial construction cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Riverside Jacksonville, Riverside construction cleanup, Avondale cleanup, historic district renovation cleaning, Jacksonville construction debris removal',
  alternates: {
    canonical: '/post-construction-cleanup-riverside',
  },
}

export default function RiversidePostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Home className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Riverside Jacksonville
                <br />
                <span className="text-blue-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">RIVERSIDE CONSTRUCTION CLEANUP SPECIALISTS</span><br />
                Serving Riverside, Avondale & Historic Districts<br />
                Preserve historic character while modernizing spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Riverside Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Riverside Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Riverside Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏛️ RIVERSIDE JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏛️
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving Riverside & Avondale • Historic Preservation Experts
            </p>
          </div>
        </section>

        {/* Riverside Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Riverside Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Riverside Jacksonville neighborhoods and historic districts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Riverside Historic District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Landmark className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside Historic District</h3>
                <p className="text-gray-600 mb-4">
                  Historic homes and buildings requiring specialized preservation techniques
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Historic Homes</div>
                  <div>• Period Architecture</div>
                  <div>• Heritage Preservation</div>
                  <div>• Original Features</div>
                </div>
              </div>

              {/* Avondale */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Avondale</h3>
                <p className="text-gray-600 mb-4">
                  Upscale residential area with luxury renovations and modern updates
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Luxury Homes</div>
                  <div>• High-End Renovations</div>
                  <div>• Modern Updates</div>
                  <div>• Premium Finishes</div>
                </div>
              </div>

              {/* Five Points */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Five Points</h3>
                <p className="text-gray-600 mb-4">
                  Commercial district with restaurants, shops, and mixed-use developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Restaurants & Cafes</div>
                  <div>• Retail Shops</div>
                  <div>• Mixed-Use Buildings</div>
                  <div>• Commercial Renovations</div>
                </div>
              </div>

              {/* Brooklyn */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brooklyn</h3>
                <p className="text-gray-600 mb-4">
                  Urban development with modern apartments and commercial spaces
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Modern Apartments</div>
                  <div>• Office Buildings</div>
                  <div>• New Construction</div>
                  <div>• Urban Development</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Riverside-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Riverside Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique needs of Riverside Jacksonville's historic and modern construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Historic Preservation */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Landmark className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Historic Preservation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning techniques for historic Riverside properties, preserving original features while ensuring modern cleanliness standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Original hardwood protection</li>
                  <li>• Historic tile preservation</li>
                  <li>• Period-appropriate cleaning</li>
                  <li>• Heritage compliance</li>
                </ul>
              </div>

              {/* Modern Renovations */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Modern Renovations</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Contemporary construction cleanup for Riverside's modern developments, luxury renovations, and commercial projects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Luxury finish protection</li>
                  <li>• High-end material care</li>
                  <li>• Modern design elements</li>
                  <li>• Commercial standards</li>
                </ul>
              </div>

              {/* Mixed-Use Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Coffee className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Mixed-Use Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized knowledge of Riverside's unique mix of residential, commercial, and historic properties requiring different approaches.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential-commercial mix</li>
                  <li>• Historic-modern blend</li>
                  <li>• Zoning compliance</li>
                  <li>• Community standards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Riverside Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Riverside Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Riverside Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Historic Riverside Home Restoration */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Historic Riverside Home Restoration</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Riverside Historic District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">4,500 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Historic preservation, original features</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: Historic home restored to museum-quality condition with all original architectural features preserved and enhanced.
                    </p>
                  </div>
                </div>
              </div>

              {/* Five Points Restaurant Renovation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Five Points Restaurant Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Five Points District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">2,800 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">2 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Health department standards, quick turnaround</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-semibold">
                      Result: Restaurant opened on schedule with health department approval and pristine commercial kitchen standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Riverside Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Riverside Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Historic preservation expertise combined with modern construction knowledge and community respect
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Historic Expertise</h3>
                <p className="text-gray-600">Specialized knowledge of historic preservation requirements and techniques</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Accommodating schedules for Riverside residents and businesses</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Respect</h3>
                <p className="text-gray-600">Committed to preserving Riverside's unique character and heritage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="riverside"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Riverside Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Riverside Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Riverside Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Riverside Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
