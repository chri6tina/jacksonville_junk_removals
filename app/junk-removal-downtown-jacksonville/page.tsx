import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Home, Star, CheckCircle, Building2, Users, Car, Leaf } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Junk Removal Downtown Jacksonville - Commercial & Residential Cleanup Services',
  description: 'Professional junk removal services in Downtown Jacksonville, Florida. Commercial cleanouts, residential cleanup, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'junk removal Downtown Jacksonville, Downtown Jacksonville cleanup, commercial junk removal Jacksonville, residential cleanup Downtown',
}

export default function DowntownJacksonvillePage() {
  return (
    <>
      <SEOHead
        title="Downtown Jacksonville Junk Removal | Professional Cleanout Service | (904) 456-3851"
        description="Downtown Jacksonville junk removal service. Professional cleanout, hoarding cleanup, construction debris removal. Licensed, insured, eco-friendly disposal. Call (904) 456-3851."
        keywords="Downtown Jacksonville junk removal, Downtown Jacksonville cleanout, Downtown Jacksonville hoarding cleanup, Downtown Jacksonville construction debris removal, Jacksonville Downtown junk removal"
        canonical="/junk-removal-downtown-jacksonville"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold">DOWNTOWN JACKSONVILLE</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Junk Removal Services
            <br />
            <span className="text-yellow-400">Downtown Jacksonville</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional junk removal services in the heart of Downtown Jacksonville. We specialize in commercial cleanouts, 
            residential cleanup, and eco-friendly disposal for this vibrant urban center.
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

      {/* Downtown Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Downtown Jacksonville Junk Removal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Downtown Jacksonville is the bustling heart of Florida's largest city, featuring a mix of historic architecture, 
                modern office buildings, and vibrant residential areas. Our team understands the unique challenges of 
                urban junk removal in this dynamic environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive junk removal services that respect Downtown's urban character and business needs. 
                From commercial office cleanouts to residential apartment cleanup, we're here to help keep 
                Downtown Jacksonville clean and organized.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">15 min</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">Urban</div>
                  <div className="text-sm text-gray-600">Expertise</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Jacksonville</h3>
                <p className="text-gray-600 mb-6">
                  The vibrant urban center of Florida's largest city, featuring business districts, 
                  historic landmarks, and modern developments.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Business District:</span>
                    <span className="font-medium">Financial Center</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Residential:</span>
                    <span className="font-medium">Urban Apartments</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Area:</span>
                    <span className="font-medium">Downtown core</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Downtown Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Downtown Jacksonville Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive junk removal services designed for Downtown's urban and commercial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/commercial-office-cleanout" className="block bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Commercial Office Cleanout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Office cleanouts, business relocations, and corporate space cleanup
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
                  <span className="text-sm text-gray-600">Office Furniture Removal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Business Equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Corporate Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Professional Service</span>
                </div>
              </div>
            </Link>

            <Link href="/apartment-cleanout" className="block bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Residential Apartment Cleanup
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Apartment cleanouts, moving preparation, and residential waste removal
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
                  <span className="text-sm text-gray-600">Apartment Cleanouts</span>
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
                  <span className="text-sm text-gray-600">Fast Service</span>
                </div>
              </div>
            </Link>

            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Construction Debris Removal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Construction cleanup, renovation debris, and building material disposal
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
                  <span className="text-sm text-gray-600">Construction Debris</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Renovation Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Building Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Site Restoration</span>
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
                    Retail & Restaurant Cleanout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Retail space cleanup, restaurant equipment removal, and commercial waste
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  Starting at $300
                </div>
                <p className="text-sm text-gray-500">No hidden fees</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Retail Cleanouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Restaurant Equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial Waste</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Professional Crew</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us for Downtown */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Downtown Jacksonville?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Urban expertise and Downtown-specific knowledge for professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Urban Environment Expertise
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Commercial Focus
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
                Business Hours Support
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Parking & Access Solutions
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

      {/* Downtown Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Downtown Junk Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our Downtown services benefit this vibrant urban community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏢</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Business Efficiency
                </h3>
                <p className="text-gray-600">
                  Fast cleanup services that minimize business disruption and maintain professional appearance
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🌆</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Urban Aesthetics
                </h3>
                <p className="text-gray-600">
                  Professional cleanup that maintains Downtown's attractive appearance and curb appeal
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🚛</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Traffic & Access Solutions
                </h3>
                <p className="text-gray-600">
                  Urban logistics expertise for efficient service in Downtown's busy environment
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
                  Eco-friendly disposal practices that help maintain Downtown's clean, modern atmosphere
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
            Ready for Downtown Jacksonville Junk Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that understands Downtown's urban character and keeps your space clean and organized.
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
    </>
  )
}
