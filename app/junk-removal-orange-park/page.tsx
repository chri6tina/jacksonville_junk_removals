import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Home, Star, CheckCircle, Building2, Users, Car, Leaf, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Orange Park - Clay County Cleanup & Residential Services',
  description: 'Professional junk removal services in Orange Park, Clay County, Florida. Suburban cleanup, residential junk removal, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'junk removal Orange Park, Orange Park Clay County cleanup, suburban junk removal, residential cleanup Orange Park',
  alternates: {
    canonical: '/junk-removal-orange-park',
  },
}

export default function OrangeParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold">ORANGE PARK</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Junk Removal Services
            <br />
            <span className="text-yellow-400">Orange Park Clay County</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional junk removal services in beautiful Orange Park, Clay County, Florida. We specialize in suburban cleanup, 
            residential junk removal, and eco-friendly disposal for this family-friendly community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 742-3531</span>
            </a>
            <Link
              href="/estimation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Orange Park Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Orange Park Clay County Junk Removal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Orange Park is a charming suburban community in Clay County known for its family-friendly atmosphere, 
                excellent schools, and convenient access to Jacksonville. Our team understands the unique needs of Orange Park residents.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive junk removal services that respect Orange Park's community character and family values. 
                From residential cleanouts to garage organization, we're here to help keep 
                Orange Park clean and organized.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">25 min</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">Clay County</div>
                  <div className="text-sm text-gray-600">Expertise</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🍊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Orange Park</h3>
                <p className="text-gray-600 mb-6">
                  A family-friendly suburban community in Clay County featuring excellent schools, 
                  beautiful neighborhoods, and a strong sense of community.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>County:</span>
                    <span className="font-medium">Clay County</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Residential:</span>
                    <span className="font-medium">Single-Family Homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Area:</span>
                    <span className="font-medium">Orange Park & Surrounding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Park Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Orange Park Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive junk removal services designed for Orange Park's suburban lifestyle and family needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Family Home Cleanout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Family home cleanouts, moving preparation, and residential waste removal
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $175
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Family Home Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Moving Preparation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Residential Waste</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Family-Friendly Service</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Garage & Storage Cleanout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Garage organization, storage cleanup, and outdoor area maintenance
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $150
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Garage Organization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Storage Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Outdoor Areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Space Maximization</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Estate & Moving Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Estate cleanouts, moving preparation, and property transition support
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $250
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Estate Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Moving Preparation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Property Transitions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Professional Service</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Community Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Neighborhood cleanup, community events, and local area maintenance
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $175
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Neighborhood Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Community Events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Local Maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Community Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Orange Park */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Orange Park?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clay County expertise and Orange Park-specific knowledge for professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Clay County Expertise
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Family Community Focus
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Suburban Knowledge
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Local Understanding
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Flexible Scheduling
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Eco-Friendly Disposal
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Park Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Orange Park Junk Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our Orange Park services benefit this family-friendly Clay County community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Family Home Support
                </h3>
                <p className="text-gray-600">
                  Professional cleanup services that help maintain Orange Park's family-friendly atmosphere and home values
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🚗</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Garage Organization
                </h3>
                <p className="text-gray-600">
                  Services that help maximize space in Orange Park's spacious properties and garages
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌳</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Beauty
                </h3>
                <p className="text-gray-600">
                  Services that help maintain Orange Park's beautiful suburban landscape and community aesthetics
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌱</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Environmental Care
                </h3>
                <p className="text-gray-600">
                  Eco-friendly disposal practices that protect Orange Park's natural beauty and family environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Orange Park Junk Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that understands Orange Park's suburban character and keeps your family home clean and organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (904) 742-3531
            </a>
            <Link
              href="/estimation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
