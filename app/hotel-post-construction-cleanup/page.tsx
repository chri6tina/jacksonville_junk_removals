import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hotel, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Bed, Utensils, Wine, Bath, Wifi, Camera } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HotelPostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Hotel Post-Construction Cleanup Jacksonville | Hospitality Industry Standards Cleaning (904) 456-3851"
        description="Professional hotel post-construction cleanup in Jacksonville. Hospitality industry standards, guest-ready results, luxury finishes, ADA compliance. Free estimates, certified technicians. Call (904) 456-3851"
        keywords="hotel post-construction cleanup Jacksonville, hospitality construction cleanup Jacksonville, hotel construction cleaning Jacksonville, resort construction cleanup Jacksonville, hospitality industry standards Florida"
        canonical="/hotel-post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Hotel className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hotel Post-Construction Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-purple-300 font-bold">JACKSONVILLE'S #1 HOSPITALITY CONSTRUCTION CLEANUP SERVICE</span><br />
                Specialized cleaning for hotels, resorts, and hospitality facilities.<br />
                Guest-ready results, luxury finishes, and hospitality industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Estimate</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Service</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-purple-50 border-b border-purple-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-purple-600" />
              <p className="text-purple-800 font-semibold text-lg">
                <strong>Hospitality Standards Required:</strong> All hotel cleanups meet luxury hospitality standards for immediate guest occupancy and 5-star presentation.
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
                Professional hotel construction cleanup with hospitality industry compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Hotel Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Bed className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Hotel Cleanup</h3>
                  <p className="text-gray-600">Budget hotels & motels</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-purple-600">$2.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Guest room cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Common area preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Guest-ready presentation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Hotel Cleanup */}
              <div className="bg-purple-50 rounded-lg p-8 border-2 border-purple-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Hotel className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Hotel Cleanup</h3>
                  <p className="text-gray-600">Full-service hotels & extended stay</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-purple-600">$4.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete hotel facility cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Restaurant & bar preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Hospitality industry standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>ADA compliance cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Amenity area preparation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Hotel Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Wine className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Hotel Cleanup</h3>
                  <p className="text-gray-600">Luxury resorts & 5-star hotels</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-purple-600">$6.50</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Luxury finish protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>5-star presentation standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Spa & wellness area prep</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Concierge-level attention</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>White-glove inspection</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Hospitality Standards Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hospitality Industry Standards & Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our hotel cleanup meets the highest hospitality industry standards and guest expectations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Guest Safety Standards</h3>
                </div>
                <p className="text-gray-600">
                  Meeting all hospitality safety standards and guest protection protocols for immediate occupancy.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">5-Star Presentation</h3>
                </div>
                <p className="text-gray-600">
                  Luxury hospitality presentation standards ensuring guest satisfaction and positive reviews.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">ADA Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Full compliance with Americans with Disabilities Act requirements for accessibility.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Products</h3>
                </div>
                <p className="text-gray-600">
                  Using eco-friendly cleaning products safe for guests and meeting green hospitality standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Detail-Oriented Cleaning</h3>
                </div>
                <p className="text-gray-600">
                  Meticulous attention to detail ensuring every surface meets luxury hospitality standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                </div>
                <p className="text-gray-600">
                  Multi-point quality inspections ensuring every area meets hospitality excellence standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Facility Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hotel & Hospitality Facility Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of hospitality construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Hotel className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Hotels</h3>
                <p className="text-gray-600">
                  Business hotels, conference centers, and convention hotels
                </p>
              </div>

              <div className="text-center">
                <Bed className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Stay Hotels</h3>
                <p className="text-gray-600">
                  Extended stay suites, residential hotels, and long-term accommodations
                </p>
              </div>

              <div className="text-center">
                <Wine className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Resorts</h3>
                <p className="text-gray-600">
                  Beach resorts, spa resorts, and 5-star luxury accommodations
                </p>
              </div>

              <div className="text-center">
                <Utensils className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Boutique Hotels</h3>
                <p className="text-gray-600">
                  Unique boutique properties, historic hotels, and designer accommodations
                </p>
              </div>

              <div className="text-center">
                <Bath className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spa & Wellness Hotels</h3>
                <p className="text-gray-600">
                  Health spas, wellness retreats, and medical spa facilities
                </p>
              </div>

              <div className="text-center">
                <Building className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Airport Hotels</h3>
                <p className="text-gray-600">
                  Airport accommodations, transit hotels, and travel lodges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Hotel Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hospitality Industry Experience</h3>
                    <p className="text-gray-600">
                      Our team understands hospitality standards and guest expectations for luxury presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Guest-Ready Guarantee</h3>
                    <p className="text-gray-600">
                      We guarantee your hotel will be ready for guest check-ins with 5-star presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      24/7 availability to work around your hotel opening schedule and guest reservations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Luxury Finish Protection</h3>
                    <p className="text-gray-600">
                      Careful handling of luxury finishes, fabrics, and high-end hotel amenities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Areas</h3>
                    <p className="text-gray-600">
                      Complete cleaning of guest rooms, lobbies, restaurants, spas, and all amenity areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville hospitality regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Guest-Ready Hotel Cleanup?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get your hotel ready for guests with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                  <Building className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">Office buildings and commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/restaurant-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Utensils className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Restaurant Cleanup</h3>
                  <p className="text-gray-600 text-sm">Food safety standards cleaning</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">General Post-Construction</h3>
                  <p className="text-gray-600 text-sm">All types of construction cleanup</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
