import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Southside Jacksonville | Suburban Construction Site Cleanup (904) 456-3851',
  description: 'Southside Jacksonville post-construction cleanup specialists. Serving suburban areas, shopping centers, and residential communities. Southside construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Southside Jacksonville, suburban construction cleanup Jacksonville, shopping center renovation cleaning, Southside debris removal Jacksonville FL, suburban area cleanup',
  alternates: {
    canonical: '/post-construction-cleanup-southside-jacksonville',
  },
}

export default function SouthsideJacksonvillePostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Home className="w-16 h-16 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Southside Jacksonville
                <br />
                <span className="text-green-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-green-300 font-bold">SUBURBAN CONSTRUCTION CLEANUP SPECIALISTS</span><br />
                Serving Southside, Suburban Areas & Growing Communities<br />
                Transform construction sites into pristine, family-ready spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Southside Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Suburban Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Service Alert */}
        <section className="bg-green-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏘️ SOUTHSIDE JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏘️
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Southside Communities • Family-Friendly Service
            </p>
          </div>
        </section>

        {/* Southside Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Southside Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Southside Jacksonville communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Residential Communities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Communities</h3>
                <p className="text-gray-600 mb-4">
                  Family neighborhoods, townhomes, and single-family developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Family Homes</div>
                  <div>• Townhomes</div>
                  <div>• Condominiums</div>
                  <div>• New Developments</div>
                </div>
              </div>

              {/* Shopping Centers */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Shopping Centers</h3>
                <p className="text-gray-600 mb-4">
                  Retail plazas, strip malls, and commercial shopping areas
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Retail Plazas</div>
                  <div>• Strip Malls</div>
                  <div>• Shopping Centers</div>
                  <div>• Commercial Areas</div>
                </div>
              </div>

              {/* Educational Facilities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Schools, colleges, and educational institutions
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Public Schools</div>
                  <div>• Private Schools</div>
                  <div>• Colleges</div>
                  <div>• Training Centers</div>
                </div>
              </div>

              {/* Medical Facilities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Hospital className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Facilities</h3>
                <p className="text-gray-600 mb-4">
                  Healthcare centers, medical offices, and clinics
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Medical Offices</div>
                  <div>• Urgent Care</div>
                  <div>• Dental Clinics</div>
                  <div>• Healthcare Centers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suburban-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Suburban Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique challenges of suburban construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Family-Friendly Protocols */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Shield className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Family-Friendly Protocols</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning protocols designed for family neighborhoods with children, pets, and community safety in mind.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Child-safe cleaning products</li>
                  <li>• Pet-friendly protocols</li>
                  <li>• Community safety measures</li>
                  <li>• Minimal disruption to families</li>
                </ul>
              </div>

              {/* Suburban Logistics */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Truck className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Suburban Logistics</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Efficient debris removal and material handling in residential areas with consideration for neighbors and community aesthetics.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Neighbor-friendly scheduling</li>
                  <li>• Community aesthetic preservation</li>
                  <li>• Residential area protocols</li>
                  <li>• Quiet operation standards</li>
                </ul>
              </div>

              {/* Community Integration */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Community Integration</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Services designed to integrate seamlessly with suburban communities and maintain neighborhood harmony.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Community notification systems</li>
                  <li>• Local business partnerships</li>
                  <li>• Neighborhood association support</li>
                  <li>• Community event coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Southside Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Southside Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Southside Shopping Center */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Southside Shopping Center Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southside Retail District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">45,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Family-friendly, minimal disruption</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-semibold">
                      Result: Shopping center reopened with pristine retail spaces and happy neighboring families.
                    </p>
                  </div>
                </div>
              </div>

              {/* Southside Residential Development */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Southside Residential Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southside Family Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">25 homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Family-ready, community integration</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: All homes ready for immediate occupancy with family-friendly environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Benefits */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Southside Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Suburban expertise combined with community knowledge and family-friendly service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Suburban Expertise</h3>
                <p className="text-gray-600">Deep understanding of suburban construction challenges and community dynamics</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Friendly</h3>
                <p className="text-gray-600">Service designed around family schedules and community needs</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">Specialized protocols to maintain neighborhood harmony and community relations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="southside-jacksonville"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Southside Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Southside Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Southside Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Suburban Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
