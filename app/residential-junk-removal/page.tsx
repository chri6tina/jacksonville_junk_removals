import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, CheckCircle, Phone, Clock, Truck, Star, MapPin, Users, Heart, Shield } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Residential Junk Removal Services - Jacksonville Junk Removal',
  description: 'Professional residential junk removal services in Jacksonville. Home cleanouts, furniture removal, and residential waste disposal. Call (904) 742-3531.',
  keywords: 'residential junk removal, home cleanout, furniture removal, residential waste disposal, Jacksonville residential cleanup',
}

export default function ResidentialJunkRemovalPage() {
  return (
    <>
      <SEOHead
        title="Residential Junk Removal Services | Professional Home Cleanout & Furniture Removal | (904) 456-3851"
        description="Professional residential junk removal services in Jacksonville. Home cleanouts, furniture removal, and residential waste disposal. Licensed, insured, eco-friendly disposal. Call (904) 456-3851."
        keywords="residential junk removal Jacksonville, home cleanout Jacksonville, furniture removal Jacksonville, residential waste disposal Jacksonville, Jacksonville residential cleanup, home junk removal Jacksonville"
        canonical="/residential-junk-removal"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
              <Home className="w-5 h-5" />
              <span className="text-sm font-bold">RESIDENTIAL JUNK REMOVAL</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Residential
              <br />
              <span className="text-yellow-400">Junk Removal Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional residential junk removal services for Jacksonville homes. 
              Home cleanouts, furniture removal, and residential waste disposal that makes your home clean and organized.
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
                  Professional Residential Cleanup
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We understand the importance of a clean, organized home in Jacksonville. Our residential junk removal services 
                  are designed to help homeowners reclaim their space and create a more comfortable living environment.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From home cleanouts to furniture removal, we provide comprehensive residential services that 
                  help Jacksonville families maintain clean, organized homes.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Home</div>
                    <div className="text-sm text-gray-600">Focused</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Family</div>
                    <div className="text-sm text-gray-600">Friendly</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Residential Junk Removal</h3>
                  <p className="text-gray-600 mb-6">
                    Professional cleanup services for Jacksonville homes, helping families 
                    maintain clean, organized living spaces.
                  </p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Service Type:</span>
                      <span className="font-medium">Home-Focused</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Approach:</span>
                      <span className="font-medium">Family-Friendly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Starting Price:</span>
                      <span className="font-medium">$125</span>
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
                Residential Junk Removal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cleanup services for Jacksonville residential properties
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
                      Home Cleanouts
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Complete home cleanout services for Jacksonville residences
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Room-by-Room Cleanup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Clutter Removal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Deep Cleaning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Organization</span>
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
                      Furniture Removal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Professional furniture removal and disposal services
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Old Furniture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Mattresses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Appliances</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Large Items</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Residential Waste Disposal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Safe and responsible disposal of residential waste
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Household Items</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Personal Belongings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Eco-Friendly Disposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Responsible Recycling</span>
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
                      Family-Friendly Service
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Services designed with families in mind
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Respectful Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Safe Environment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Family Support</span>
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
                Why Choose Us for Residential Junk Removal?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Home-focused approach with professional service and family-friendly care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Residential Expertise
                </h3>
                <p className="text-gray-600">
                  We understand the unique needs of Jacksonville homes and families.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Family-Friendly Approach
                </h3>
                <p className="text-gray-600">
                  We treat your home with respect and care, understanding it's where your family lives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Local Jacksonville Service
                </h3>
                <p className="text-gray-600">
                  We understand Jacksonville neighborhoods and residential needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Professional Equipment
                </h3>
                <p className="text-gray-600">
                  We bring the right tools and equipment for efficient residential cleanup.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  We work around your family schedule to minimize disruption to your daily life.
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
                  Fully licensed, bonded, and insured for residential property protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Residential Junk Removal?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get your free quote today and experience professional residential junk removal service 
              that helps your family maintain a clean, organized home.
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
