import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Award, Target, Zap, BookOpen, Microscope, Computer, Paintbrush, Heart, Church, Cross, Star as StarIcon } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Religious Facility Post-Construction Cleanup Jacksonville | Church & Temple Cleanup (904) 456-3851',
  description: 'Jacksonville religious facility post-construction cleanup specialists. Serving churches, temples, mosques, and worship centers across all Jacksonville areas. Call (904) 456-3851',
  keywords: 'religious facility post-construction cleanup Jacksonville, church construction cleanup Jacksonville, temple renovation cleaning Florida, worship center cleanup Jacksonville FL',
  alternates: {
    canonical: '/religious-facility-post-construction-cleanup',
  },
}

export default function ReligiousFacilityPostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Church className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Religious Facility
                <br />
                <span className="text-purple-300">Post-Construction Cleanup</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-purple-300 font-bold">JACKSONVILLE'S RELIGIOUS FACILITY CLEANUP SPECIALISTS</span><br />
                Serving Churches, Temples & Worship Centers Across All Jacksonville Areas<br />
                Transform construction sites into pristine, sacred spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Religious Facility Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Worship Center Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Religious Service Alert */}
        <section className="bg-purple-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Church className="w-6 h-6" />
              <span className="text-lg font-semibold">
                ⛪ JACKSONVILLE RELIGIOUS FACILITY POST-CONSTRUCTION CLEANUP SPECIALISTS ⛪
              </span>
              <Church className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Jacksonville Religious Areas • Sacred Space Protocols
            </p>
          </div>
        </section>

        {/* Jacksonville Religious Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Religious Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Jacksonville religious institutions and areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Jacksonville Beach Area Religious */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Waves className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach Area</h3>
                <p className="text-gray-600 mb-4">
                  Beach area churches, coastal worship centers, and spiritual retreats
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Beach Area Churches</div>
                  <div>• Coastal Worship Centers</div>
                  <div>• Spiritual Retreats</div>
                  <div>• Religious Facilities</div>
                </div>
              </div>

              {/* Downtown Jacksonville Religious */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown Jacksonville</h3>
                <p className="text-gray-600 mb-4">
                  Urban churches, downtown worship centers, and city spiritual hubs
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Urban Churches</div>
                  <div>• Downtown Worship Centers</div>
                  <div>• City Spiritual Hubs</div>
                  <div>• Metropolitan Faith</div>
                </div>
              </div>

              {/* Southside Jacksonville Religious */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside Jacksonville</h3>
                <p className="text-gray-600 mb-4">
                  Suburban churches, family worship centers, and community faith facilities
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Suburban Churches</div>
                  <div>• Family Worship Centers</div>
                  <div>• Community Faith</div>
                  <div>• Neighborhood Churches</div>
                </div>
              </div>

              {/* Mandarin & Orange Park Religious */}
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin & Orange Park</h3>
                <p className="text-gray-600 mb-4">
                  Premium churches, growing faith communities, and expanding religious institutions
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Premium Churches</div>
                  <div>• Growing Faith Communities</div>
                  <div>• Expanding Institutions</div>
                  <div>• Religious Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Religious Facility Types */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Religious Facility Types We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleanup services for all types of religious institutions and facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Churches */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Cross className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Churches</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Christian churches, chapels, and worship centers with sacred space protocols.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sacred space protocols</li>
                  <li>• Sanctuary preparation</li>
                  <li>• Worship area cleaning</li>
                  <li>• Fellowship hall readiness</li>
                </ul>
              </div>

              {/* Temples & Synagogues */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <StarIcon className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Temples & Synagogues</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Jewish synagogues, Hindu temples, and other faith-based worship facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cultural sensitivity</li>
                  <li>• Sacred object protection</li>
                  <li>• Worship space preparation</li>
                  <li>• Community area readiness</li>
                </ul>
              </div>

              {/* Mosques */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Mosques</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Islamic mosques, prayer halls, and Islamic community centers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Prayer area preparation</li>
                  <li>• Cultural respect protocols</li>
                  <li>• Community center readiness</li>
                  <li>• Sacred space cleaning</li>
                </ul>
              </div>

              {/* Religious Schools */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Religious Schools</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Faith-based schools, religious education centers, and spiritual learning facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Educational environment</li>
                  <li>• Student safety protocols</li>
                  <li>• Learning space preparation</li>
                  <li>• Religious education focus</li>
                </ul>
              </div>

              {/* Community Centers */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-indigo-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Community Centers</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Religious community centers, fellowship halls, and multi-purpose faith facilities.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-purpose readiness</li>
                  <li>• Community gathering areas</li>
                  <li>• Event space preparation</li>
                  <li>• Fellowship area cleaning</li>
                </ul>
              </div>

              {/* Spiritual Retreats */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Heart className="w-12 h-12 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Spiritual Retreats</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Spiritual retreat centers, meditation facilities, and contemplative spaces.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Peaceful environment</li>
                  <li>• Meditation space preparation</li>
                  <li>• Contemplative area cleaning</li>
                  <li>• Spiritual atmosphere</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Religious Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Jacksonville Religious Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Jacksonville religious institutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Jacksonville Beach Church */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jacksonville Beach Church</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Jacksonville Beach Area</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Church Renovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">25,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Sacred space protocols, beach area care</span>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4 mt-4">
                    <p className="text-purple-800 font-semibold">
                      Result: Church reopened with pristine, sacred spaces and protected beach area finishes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Downtown Jacksonville Temple */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Downtown Jacksonville Temple</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Jacksonville</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-700">Temple Construction</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">45,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Cultural sensitivity, urban protocols</span>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <p className="text-blue-800 font-semibold">
                      Result: Temple opened with pristine worship spaces and culturally respectful cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Religious Benefits */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Jacksonville Religious Facilities?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized expertise combined with Jacksonville area knowledge and religious sensitivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sacred Space Respect</h3>
                <p className="text-gray-600">Comprehensive protocols designed specifically for religious environments</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jacksonville Expertise</h3>
                <p className="text-gray-600">Deep understanding of all Jacksonville areas and local religious communities</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Worship Schedule</h3>
                <p className="text-gray-600">Services designed around religious calendars and worship schedules</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="religious-facility"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Religious Facility Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and sacred space service for your Jacksonville religious project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Religious Facility Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Religious Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
