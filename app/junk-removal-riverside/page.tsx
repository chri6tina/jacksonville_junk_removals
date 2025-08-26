import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Home, Star, CheckCircle, Building2, Users, Car, Leaf, TreePine } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Junk Removal Riverside - Historic District Cleanup & Residential Services',
  description: 'Professional junk removal services in Riverside, Jacksonville, Florida. Historic district cleanup, residential junk removal, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'junk removal Riverside, Riverside Jacksonville cleanup, historic district junk removal, residential cleanup Riverside',
}

export default function RiversidePage() {
  return (
    <>
      <SEOHead
        title="Riverside Jacksonville Junk Removal | Professional Cleanout Service | (904) 456-3851"
        description="Riverside Jacksonville junk removal service. Professional cleanout, hoarding cleanup, construction debris removal. Licensed, insured, eco-friendly disposal. Call (904) 456-3851."
        keywords="Riverside Jacksonville junk removal, Riverside Jacksonville cleanout, Riverside Jacksonville hoarding cleanup, Riverside Jacksonville construction debris removal, Jacksonville Riverside junk removal"
        canonical="/junk-removal-riverside"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold">RIVERSIDE</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Junk Removal Services
            <br />
            <span className="text-yellow-400">Riverside Jacksonville</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional junk removal services in historic Riverside, Jacksonville, Florida. We specialize in historic home cleanup, 
            residential junk removal, and eco-friendly disposal for this charming neighborhood.
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

      {/* Riverside Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Riverside Jacksonville Junk Removal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Riverside is one of Jacksonville's most historic and charming neighborhoods, known for its tree-lined streets, 
                historic architecture, and vibrant community. Our team understands the unique needs of historic properties and residential living.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive junk removal services that respect Riverside's historic character and community values. 
                From historic home cleanouts to residential cleanup, we're here to help keep 
                Riverside clean and beautiful.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">18 min</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">Historic</div>
                  <div className="text-sm text-gray-600">Expertise</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Riverside</h3>
                <p className="text-gray-600 mb-6">
                  A historic neighborhood featuring beautiful architecture, tree-lined streets, 
                  and a strong sense of community.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Architecture:</span>
                    <span className="font-medium">Historic Homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Residential:</span>
                    <span className="font-medium">Family Homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Area:</span>
                    <span className="font-medium">Riverside & Avondale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Riverside Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Riverside Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive junk removal services designed for Riverside's historic character and residential needs
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
                    Historic Home Cleanout
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Historic property cleanouts, renovation preparation, and architectural preservation
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
                  <span className="text-sm text-gray-600">Historic Property Cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Renovation Preparation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Architectural Preservation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Careful Handling</span>
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
                    Residential Junk Removal
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Home cleanouts, moving preparation, and residential waste removal
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
                  <span className="text-sm text-gray-600">Home Cleanouts</span>
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
                    Community Cleanup
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

      {/* Why Choose Us for Riverside */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Riverside?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Historic expertise and Riverside-specific knowledge for professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Historic Property Expertise
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Community Knowledge
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Careful Handling
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

      {/* Riverside Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Riverside Junk Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our Riverside services benefit this historic and charming neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏛️</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Historic Preservation
                </h3>
                <p className="text-gray-600">
                  Professional cleanup services that help preserve Riverside's historic architecture and character
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏠</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Property Value
                </h3>
                <p className="text-gray-600">
                  Regular cleanup and maintenance that helps preserve historic property values and curb appeal
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
                  Services that help maintain Riverside's beautiful tree-lined streets and neighborhood aesthetics
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
                  Eco-friendly disposal practices that protect Riverside's natural beauty and community environment
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
            Ready for Riverside Junk Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that understands Riverside's historic character and keeps your neighborhood clean and beautiful.
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
