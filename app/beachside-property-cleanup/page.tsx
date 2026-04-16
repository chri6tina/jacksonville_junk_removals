import type { Metadata } from 'next'
import Link from 'next/link'
import { Waves, CheckCircle, Phone, Clock, Truck, Star, MapPin, Sun, Umbrella, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beachside Property Cleanup Services - Jacksonville Junk Removal',
  description: 'Professional beachside property cleanup services in Jacksonville Beach. Coastal property maintenance, beach cleanup, and seaside property care. Call (904) 742-3531.',
  keywords: 'beachside property cleanup, coastal property maintenance, beach cleanup, seaside property care, Jacksonville Beach cleanup',
  alternates: {
    canonical: '/beachside-property-cleanup',
  },
}

export default function BeachsidePropertyCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
              <Waves className="w-5 h-5" />
              <span className="text-sm font-bold">BEACHSIDE PROPERTY CLEANUP</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Beachside Property
              <br />
              <span className="text-yellow-400">Cleanup Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional beachside property cleanup services for Jacksonville Beach properties. 
              Coastal property maintenance, beach cleanup, and seaside property care that protects the coastal environment.
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

        {/* Service Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Coastal Property Expertise
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We understand the unique challenges of beachside properties in Jacksonville Beach. Our beachside property cleanup services 
                  are designed to handle the coastal environment while protecting the delicate marine ecosystem.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From coastal property maintenance to beach cleanup, we provide specialized services that 
                  help Jacksonville Beach property owners maintain their seaside properties responsibly.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Coastal</div>
                    <div className="text-sm text-gray-600">Focused</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Eco-Friendly</div>
                    <div className="text-sm text-gray-600">Approach</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏖️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beachside Property Cleanup</h3>
                  <p className="text-gray-600 mb-6">
                    Professional cleanup services for Jacksonville Beach properties, protecting 
                    the coastal environment and marine ecosystem.
                  </p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Service Type:</span>
                      <span className="font-medium">Coastal-Focused</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Approach:</span>
                      <span className="font-medium">Eco-Friendly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Starting Price:</span>
                      <span className="font-medium">$175</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Beachside Property Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized cleanup services for Jacksonville Beach coastal properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Waves className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Coastal Property Maintenance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Regular maintenance for beachside properties
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Beach Access Cleanup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Dune Protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Coastal Debris Removal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Property Protection</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Beach Cleanup
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Professional beach cleanup and debris removal
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Beach Debris Removal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Marine Debris Cleanup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Storm Cleanup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Environmental Protection</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Umbrella className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Seaside Property Care
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Specialized care for seaside properties
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Salt Air Considerations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Coastal Weather Prep</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Marine Environment Care</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Property Preservation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Environmental Protection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Services that protect the coastal environment
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Eco-Friendly Disposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Marine Life Protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Coastal Conservation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Sustainable Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Beachside Property Cleanup?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Coastal-focused approach with professional service and environmental responsibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Coastal Property Expertise
                </h3>
                <p className="text-gray-600">
                  We understand the unique needs of beachside properties and coastal environments.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Waves className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Environmental Responsibility
                </h3>
                <p className="text-gray-600">
                  We protect the coastal environment and marine ecosystem during all cleanup operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Jacksonville Beach Knowledge
                </h3>
                <p className="text-gray-600">
                  We understand Jacksonville Beach neighborhoods and coastal property requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Coastal-Appropriate Equipment
                </h3>
                <p className="text-gray-600">
                  We use equipment and techniques suitable for beachside property cleanup.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Seasonal Service
                </h3>
                <p className="text-gray-600">
                  We provide year-round service with seasonal considerations for coastal properties.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for coastal property protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Beachside Property Cleanup?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get your free quote today and experience professional beachside property cleanup service 
              that protects your coastal property and the marine environment.
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
