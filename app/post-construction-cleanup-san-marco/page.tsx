import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Building2, Car, Train, Bus, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup San Marco Jacksonville | Historic District Cleanup (904) 456-3851',
  description: 'San Marco Jacksonville post-construction cleanup specialists. Serving San Marco, Southbank, and historic districts. Historic renovation cleanup, luxury construction cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup San Marco Jacksonville, San Marco construction cleanup, Southbank cleanup, historic district renovation cleaning, Jacksonville luxury construction cleanup',
  alternates: {
    canonical: '/post-construction-cleanup-san-marco',
  },
}

export default function SanMarcoPostConstructionCleanupPage() {
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
                San Marco Jacksonville
                <br />
                <span className="text-blue-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">SAN MARCO CONSTRUCTION CLEANUP SPECIALISTS</span><br />
                Serving San Marco, Southbank & Historic Districts<br />
                Preserve historic elegance while achieving modern perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get San Marco Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule San Marco Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* San Marco Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏛️ SAN MARCO JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏛️
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving San Marco & Southbank • Luxury & Historic Preservation Experts
            </p>
          </div>
        </section>

        {/* San Marco Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                San Marco Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all San Marco Jacksonville neighborhoods and historic districts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* San Marco Historic District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Landmark className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco Historic District</h3>
                <p className="text-gray-600 mb-4">
                  Historic Mediterranean Revival homes and buildings requiring specialized preservation
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Mediterranean Revival</div>
                  <div>• Historic Architecture</div>
                  <div>• Heritage Preservation</div>
                  <div>• Original Details</div>
                </div>
              </div>

              {/* Southbank */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Southbank</h3>
                <p className="text-gray-600 mb-4">
                  Modern high-rise apartments and commercial buildings with luxury finishes
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• High-Rise Apartments</div>
                  <div>• Luxury Condos</div>
                  <div>• Office Buildings</div>
                  <div>• Modern Amenities</div>
                </div>
              </div>

              {/* San Marco Square */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco Square</h3>
                <p className="text-gray-600 mb-4">
                  Commercial district with restaurants, shops, and mixed-use developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Restaurants & Cafes</div>
                  <div>• Boutique Shops</div>
                  <div>• Mixed-Use Buildings</div>
                  <div>• Commercial Spaces</div>
                </div>
              </div>

              {/* St. Johns Avenue */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">St. Johns Avenue</h3>
                <p className="text-gray-600 mb-4">
                  Upscale residential corridor with luxury homes and historic properties
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Luxury Homes</div>
                  <div>• Historic Properties</div>
                  <div>• High-End Renovations</div>
                  <div>• Premium Finishes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* San Marco-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                San Marco Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique needs of San Marco Jacksonville's historic and luxury construction projects
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
                  Specialized cleaning techniques for San Marco's historic Mediterranean Revival properties, preserving architectural integrity while ensuring modern standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mediterranean Revival details</li>
                  <li>• Historic tile preservation</li>
                  <li>• Original hardware protection</li>
                  <li>• Heritage compliance</li>
                </ul>
              </div>

              {/* Luxury Finishes */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Luxury Finishes</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Premium construction cleanup for San Marco's luxury properties, high-end renovations, and upscale commercial developments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium material protection</li>
                  <li>• High-end finish care</li>
                  <li>• Luxury appliance handling</li>
                  <li>• Upscale standards</li>
                </ul>
              </div>

              {/* Waterfront Properties */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Coffee className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Waterfront Properties</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized knowledge of San Marco's waterfront properties, including unique environmental considerations and luxury amenities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Waterfront considerations</li>
                  <li>• Environmental protection</li>
                  <li>• Luxury amenities</li>
                  <li>• View preservation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* San Marco Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent San Marco Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across San Marco Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Historic San Marco Home Restoration */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Historic San Marco Home Restoration</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">San Marco Historic District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">5,200 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Mediterranean Revival preservation, luxury finishes</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: Historic Mediterranean Revival home restored to museum-quality condition with all original architectural details preserved and enhanced.
                    </p>
                  </div>
                </div>
              </div>

              {/* Southbank Luxury Condo Renovation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Southbank Luxury Condo Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southbank High-Rise</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">3,800 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Luxury finishes, waterfront views, high-rise logistics</span>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-semibold">
                      Result: Luxury condo completed with pristine finishes and protected waterfront views, ready for immediate occupancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* San Marco Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for San Marco Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Historic preservation expertise combined with luxury construction knowledge and San Marco community respect
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Historic Expertise</h3>
                <p className="text-gray-600">Specialized knowledge of Mediterranean Revival architecture and historic preservation</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Standards</h3>
                <p className="text-gray-600">Premium service standards for San Marco's upscale properties and residents</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Respect</h3>
                <p className="text-gray-600">Committed to preserving San Marco's unique character and architectural heritage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="san-marco"
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
              Ready for San Marco Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your San Marco Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get San Marco Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact San Marco Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
