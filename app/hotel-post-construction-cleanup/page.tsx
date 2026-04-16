import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hotel, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Bed, Utensils, Wine, Bath, Wifi, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hotel Post-Construction Cleanup Jacksonville | Hospitality Industry Standards Cleaning (904) 456-3851',
  description: 'Professional hotel post-construction cleanup in Jacksonville. Hospitality industry standards, guest-ready results, luxury finishes, ADA compliance. Free estimates, certified technicians. Call (904) 456-3851',
  keywords: 'hotel post-construction cleanup Jacksonville, hospitality construction cleanup Jacksonville, hotel construction cleaning Jacksonville, resort construction cleanup Jacksonville, hospitality industry standards Florida',
  alternates: {
    canonical: '/hotel-post-construction-cleanup',
  },
}

export default function HotelPostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
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
                  Hotel Post-Construction Cleanup
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-purple-300 font-bold">JACKSONVILLE'S #1 HOSPITALITY CONSTRUCTION CLEANUP SERVICE</span><br /> Specialized cleaning for hotels, resorts, and hospitality facilities.<br /> Guest-ready results, luxury finishes, and hospitality industry standards.
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
                  <Bed className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Hotel Cleanup</h3>
                  <p className="text-gray-600">Budget hotels & motels</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$2.75</span>
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
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Hotel Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-secondary/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Hotel className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Hotel Cleanup</h3>
                  <p className="text-gray-600">Full-service hotels & extended stay</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$4.25</span>
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
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Hotel Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Wine className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Hotel Cleanup</h3>
                  <p className="text-gray-600">Luxury resorts & 5-star hotels</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$6.50</span>
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
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
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
                  <Shield className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Guest Safety Standards</h3>
                </div>
                <p className="text-gray-600">
                  Meeting all hospitality safety standards and guest protection protocols for immediate occupancy.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">5-Star Presentation</h3>
                </div>
                <p className="text-gray-600">
                  Luxury hospitality presentation standards ensuring guest satisfaction and positive reviews.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">ADA Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Full compliance with Americans with Disabilities Act requirements for accessibility.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Products</h3>
                </div>
                <p className="text-gray-600">
                  Using eco-friendly cleaning products safe for guests and meeting green hospitality standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Detail-Oriented Cleaning</h3>
                </div>
                <p className="text-gray-600">
                  Meticulous attention to detail ensuring every surface meets luxury hospitality standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-secondary mr-3" />
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
                <Hotel className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Hotels</h3>
                <p className="text-gray-600">
                  Business hotels, conference centers, and convention hotels
                </p>
              </div>

              <div className="text-center">
                <Bed className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Extended Stay Hotels</h3>
                <p className="text-gray-600">
                  Extended stay suites, residential hotels, and long-term accommodations
                </p>
              </div>

              <div className="text-center">
                <Wine className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Resorts</h3>
                <p className="text-gray-600">
                  Beach resorts, spa resorts, and 5-star luxury accommodations
                </p>
              </div>

              <div className="text-center">
                <Utensils className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Boutique Hotels</h3>
                <p className="text-gray-600">
                  Unique boutique properties, historic hotels, and designer accommodations
                </p>
              </div>

              <div className="text-center">
                <Bath className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spa & Wellness Hotels</h3>
                <p className="text-gray-600">
                  Health spas, wellness retreats, and medical spa facilities
                </p>
              </div>

              <div className="text-center">
                <Building className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Airport Hotels</h3>
                <p className="text-gray-600">
                  Airport accommodations, transit hotels, and travel lodges
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
        <section className="py-16 bg-primary">
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
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                  <p className="text-gray-600 text-sm">Office buildings and commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/restaurant-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Utensils className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Restaurant Cleanup</h3>
                  <p className="text-gray-600 text-sm">Food safety standards cleaning</p>
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
