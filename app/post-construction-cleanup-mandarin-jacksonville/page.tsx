import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, TreePine, Leaf } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Mandarin Jacksonville | Premium Construction Site Cleanup (904) 456-3851',
  description: 'Mandarin Jacksonville post-construction cleanup specialists. Serving upscale residential areas, waterfront properties, and premium communities. Mandarin construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Mandarin Jacksonville, premium construction cleanup Jacksonville, waterfront renovation cleaning, Mandarin debris removal Jacksonville FL, upscale area cleanup',
  alternates: {
    canonical: '/post-construction-cleanup-mandarin-jacksonville',
  },
}

export default function MandarinJacksonvillePostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <TreePine className="w-16 h-16 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Mandarin Jacksonville
                <br />
                <span className="text-emerald-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-emerald-300 font-bold">PREMIUM CONSTRUCTION CLEANUP SPECIALISTS</span><br />
                Serving Mandarin, Premium Communities & Waterfront Properties<br />
                Transform construction sites into pristine, luxury-ready spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Mandarin Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Premium Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mandarin Service Alert */}
        <section className="bg-emerald-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <TreePine className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🌿 MANDARIN JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🌿
              </span>
              <TreePine className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Premium Communities • White-Glove Service
            </p>
          </div>
        </section>

        {/* Mandarin Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mandarin Premium Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Mandarin Jacksonville premium communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Waterfront Properties */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Waterfront Properties</h3>
                <p className="text-gray-600 mb-4">
                  Luxury waterfront homes, river properties, and dock facilities
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Luxury Waterfront Homes</div>
                  <div>• River Properties</div>
                  <div>• Private Docks</div>
                  <div>• Boat Houses</div>
                </div>
              </div>

              {/* Gated Communities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Gated Communities</h3>
                <p className="text-gray-600 mb-4">
                  Exclusive gated neighborhoods and premium subdivisions
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Gated Neighborhoods</div>
                  <div>• Premium Subdivisions</div>
                  <div>• Private Communities</div>
                  <div>• Luxury Estates</div>
                </div>
              </div>

              {/* Country Clubs */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Country Club Areas</h3>
                <p className="text-gray-600 mb-4">
                  Golf course communities and country club facilities
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Golf Course Homes</div>
                  <div>• Country Clubs</div>
                  <div>• Club Houses</div>
                  <div>• Pro Shops</div>
                </div>
              </div>

              {/* Upscale Retail */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Upscale Retail</h3>
                <p className="text-gray-600 mb-4">
                  High-end shopping centers and boutique establishments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Premium Retail</div>
                  <div>• Boutique Shops</div>
                  <div>• Upscale Dining</div>
                  <div>• Luxury Services</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique challenges of premium construction and luxury renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Luxury Finish Protection */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-12 h-12 text-emerald-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Luxury Finish Protection</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning protocols for high-end finishes, custom millwork, and luxury materials requiring delicate handling.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom millwork protection</li>
                  <li>• High-end finish preservation</li>
                  <li>• Luxury material care</li>
                  <li>• Premium surface treatments</li>
                </ul>
              </div>

              {/* Waterfront Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Leaf className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Waterfront Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized knowledge of waterfront construction challenges including moisture control, marine environments, and dock facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Moisture damage prevention</li>
                  <li>• Marine environment protocols</li>
                  <li>• Dock facility cleaning</li>
                  <li>• Waterfront property care</li>
                </ul>
              </div>

              {/* White-Glove Service */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Shield className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">White-Glove Service</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium service standards with attention to detail expected in luxury communities and high-end properties.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Concierge-level service</li>
                  <li>• Luxury property protocols</li>
                  <li>• Premium communication standards</li>
                  <li>• Executive scheduling flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mandarin Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Mandarin Premium Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Mandarin Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mandarin Waterfront Estate */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mandarin Waterfront Estate</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Mandarin Waterfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">15,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Luxury finishes, waterfront care</span>
                  </div>
                  <div className="bg-emerald-100 rounded-lg p-4 mt-4">
                    <p className="text-emerald-800 font-semibold">
                      Result: Estate ready for immediate occupancy with pristine luxury finishes and protected waterfront features.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mandarin Country Club */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mandarin Country Club Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Mandarin Golf Course Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">35,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Member operations, premium standards</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: Country club reopened with immaculate facilities and zero disruption to member services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandarin Benefits */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Mandarin Premium Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Premium expertise combined with luxury standards and waterfront knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Expertise</h3>
                <p className="text-gray-600">Deep understanding of luxury construction standards and premium community expectations</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">White-Glove Service</h3>
                <p className="text-gray-600">Concierge-level service designed for luxury properties and high-end clientele</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Waterfront Knowledge</h3>
                <p className="text-gray-600">Specialized protocols for waterfront properties and marine environment considerations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="mandarin-jacksonville"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Mandarin Premium Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and white-glove service for your Mandarin Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Mandarin Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Premium Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
