import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Home, Star, CheckCircle, Building2, TreePine, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Southside Jacksonville - Growing Area Cleanup Services',
  description: 'Professional junk removal services in Southside, Jacksonville, Florida. Residential cleanup, commercial services, construction debris, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'junk removal Southside Jacksonville, Southside junk removal, Jacksonville Southside, residential cleanup, commercial services',
}

export default function SouthsidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold">SOUTHSIDE JACKSONVILLE</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Junk Removal Services
            <br />
            <span className="text-yellow-400">Southside, Jacksonville</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional junk removal services in growing Southside, Jacksonville. We specialize in residential cleanup, 
            commercial services, construction debris, and eco-friendly disposal for this vibrant community.
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

      {/* Southside Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Southside Jacksonville Junk Removal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Southside is one of Jacksonville's fastest-growing areas, known for its modern developments, 
                family-friendly neighborhoods, and expanding commercial districts. Our team understands the unique 
                needs of Southside residents and businesses.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive junk removal services that support Southside's growth and development. 
                From residential cleanup to commercial services and construction debris removal, we're here to 
                help keep Southside clean and organized.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">20 min</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">Growing</div>
                  <div className="text-sm text-gray-600">Area Focus</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏘️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Southside, Jacksonville</h3>
                <p className="text-gray-600 mb-6">
                  A rapidly growing area known for its modern developments, family neighborhoods, 
                  and expanding commercial opportunities.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Growth Rate:</span>
                    <span className="font-medium">Fastest in JAX</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Housing:</span>
                    <span className="font-medium">New & Modern</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Area:</span>
                    <span className="font-medium">Southside district</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Southside Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Southside Jacksonville Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive junk removal services designed for Southside's growing community needs
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
                    Residential Cleanup
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Home cleanouts, garage organization, and moving preparation
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $125
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Home Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Garage Organization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Moving Preparation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Eco-Friendly Disposal</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Commercial Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Office cleanouts, retail store cleanup, and commercial property management
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $200
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Office Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Retail Store Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial Property</span>
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
                  <Truck className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Construction Debris
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Construction cleanup, renovation debris, and building material removal
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
                  <span className="text-sm text-gray-600">Construction Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Renovation Debris</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Building Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Heavy Equipment</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Yard Waste & Landscaping
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yard cleanup, landscaping debris, and outdoor property maintenance
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $100
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Yard Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Landscaping Debris</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Outdoor Maintenance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Eco-Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Southside */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Southside Jacksonville?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local expertise and Southside-specific knowledge for efficient, community-focused service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Growing Area Expertise
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Modern Development Support
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
                Commercial Growth Support
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Fast Response Times
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Eco-Friendly Practices
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Southside Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Southside Junk Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our Southside services benefit this growing community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏘️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Modern Development Support
                </h3>
                <p className="text-gray-600">
                  We support Southside's rapid growth with efficient cleanup services for new developments
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Family Community Focus
                </h3>
                <p className="text-gray-600">
                  Family-friendly service that understands the needs of Southside's growing families
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏢</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Growth Support
                </h3>
                <p className="text-gray-600">
                  Supporting Southside's expanding commercial districts with professional cleanup services
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌱</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Environmental Responsibility
                </h3>
                <p className="text-gray-600">
                  Eco-friendly disposal practices that help maintain Southside's clean, modern appearance
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
            Ready for Southside Jacksonville Junk Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that supports Southside's growth and keeps your community clean.
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
