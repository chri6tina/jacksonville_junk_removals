import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Building2, Car, Train, Bus, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Arlington Jacksonville | Residential & Commercial Cleanup (904) 456-3851',
  description: 'Arlington Jacksonville post-construction cleanup specialists. Serving Arlington, Regency, and surrounding areas. Residential and commercial construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Arlington Jacksonville, Arlington construction cleanup, Regency area cleanup, Arlington renovation cleaning, Jacksonville construction debris removal',
  alternates: {
    canonical: '/post-construction-cleanup-arlington',
  },
}

export default function ArlingtonPostConstructionCleanupPage() {
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
                Arlington Jacksonville
                <br />
                <span className="text-blue-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">ARLINGTON CONSTRUCTION CLEANUP SPECIALISTS</span><br />
                Serving Arlington, Regency & Surrounding Areas<br />
                Transform construction sites into pristine, move-in ready spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Arlington Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Arlington Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 ARLINGTON JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏠
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving Arlington & Regency Areas • Same-Day Service Available
            </p>
          </div>
        </section>

        {/* Arlington Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Arlington Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Arlington Jacksonville neighborhoods and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Arlington Proper */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Proper</h3>
                <p className="text-gray-600 mb-4">
                  Historic Arlington with mix of residential and commercial properties
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Historic Homes</div>
                  <div>• Residential Renovations</div>
                  <div>• Commercial Properties</div>
                  <div>• Mixed-Use Buildings</div>
                </div>
              </div>

              {/* Regency Area */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Regency Area</h3>
                <p className="text-gray-600 mb-4">
                  Shopping centers, apartments, and commercial developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Regency Square Mall</div>
                  <div>• Apartment Complexes</div>
                  <div>• Office Buildings</div>
                  <div>• Retail Centers</div>
                </div>
              </div>

              {/* Arlington Heights */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Heights</h3>
                <p className="text-gray-600 mb-4">
                  Established residential neighborhoods with renovation projects
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Single Family Homes</div>
                  <div>• Townhouses</div>
                  <div>• Condominiums</div>
                  <div>• Renovation Projects</div>
                </div>
              </div>

              {/* Arlington Expressway */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Car className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Expressway</h3>
                <p className="text-gray-600 mb-4">
                  Commercial corridor with retail and service businesses
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Retail Stores</div>
                  <div>• Restaurants</div>
                  <div>• Service Centers</div>
                  <div>• Auto Dealerships</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Arlington Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique needs of Arlington Jacksonville construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Residential Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning for Arlington homes, from historic renovations to modern new construction with attention to detail and quality finishes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Historic home renovations</li>
                  <li>• New construction cleanup</li>
                  <li>• Kitchen and bathroom remodels</li>
                  <li>• Flooring and finish protection</li>
                </ul>
              </div>

              {/* Commercial Services */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Commercial Services</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Professional cleanup for Arlington commercial properties including Regency area businesses, retail centers, and office buildings.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Retail store construction</li>
                  <li>• Office building renovations</li>
                  <li>• Restaurant buildouts</li>
                  <li>• Shopping center projects</li>
                </ul>
              </div>

              {/* Local Knowledge */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Local Knowledge</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Deep understanding of Arlington neighborhoods, local regulations, and community needs for seamless project completion.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arlington zoning knowledge</li>
                  <li>• Local permit requirements</li>
                  <li>• Community standards</li>
                  <li>• Neighborhood relationships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Arlington Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Arlington Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Historic Arlington Home Renovation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Historic Arlington Home Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Arlington Heights</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">3,200 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Historic preservation, original hardwood floors</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: Historic home restored to pristine condition with all original features protected and enhanced.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regency Shopping Center Renovation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regency Shopping Center Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Regency Area</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">45,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">After-hours work, tenant coordination</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-semibold">
                      Result: Shopping center reopened on schedule with enhanced appearance and improved tenant satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Arlington Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expertise combined with Arlington knowledge and community-focused service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Arlington Expertise</h3>
                <p className="text-gray-600">Deep understanding of Arlington neighborhoods and local construction needs</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Accommodating schedules for Arlington residents and businesses</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">Committed to maintaining Arlington's character and quality of life</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="arlington"
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
              Ready for Arlington Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Arlington Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Arlington Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Arlington Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
