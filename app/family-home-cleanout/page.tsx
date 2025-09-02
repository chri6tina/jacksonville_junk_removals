import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Users, Heart, CheckCircle, Phone, Clock, Truck, Star, MapPin } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Family Home Cleanout Services - Jacksonville Junk Removal',
  description: 'Professional family home cleanout services in Jacksonville. Moving preparation, residential waste removal, and family-friendly cleanup. Call (904) 742-3531.',
  keywords: 'family home cleanout, residential cleanup, moving preparation, family-friendly junk removal, Jacksonville home cleanout',
}

export default function FamilyHomeCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Family Home Cleanout Services | Professional Residential Cleanup | (904) 456-3851"
        description="Professional family home cleanout services in Jacksonville. Moving preparation, residential waste removal, and family-friendly cleanup. Licensed, insured, eco-friendly disposal. Call (904) 456-3851."
        keywords="family home cleanout Jacksonville, residential cleanup Jacksonville, moving preparation Jacksonville, family-friendly junk removal Jacksonville, Jacksonville home cleanout, residential waste removal Jacksonville"
        canonical="/family-home-cleanout"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
              <Home className="w-5 h-5" />
              <span className="text-sm font-bold">FAMILY HOME CLEANOUT</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Family Home Cleanout
              <br />
              <span className="text-yellow-400">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional family home cleanout services designed for Jacksonville families. 
              Moving preparation, residential waste removal, and family-friendly cleanup that respects your home and schedule.
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
                  Family-Focused Home Cleanout
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We understand that family homes require special care and attention. Our family home cleanout services 
                  are designed to work around your family's schedule and respect your home environment.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From moving preparation to general residential cleanup, we provide professional services that help 
                  Jacksonville families maintain clean, organized homes while minimizing disruption to daily life.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Family-Safe</div>
                    <div className="text-sm text-gray-600">Approach</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">Flexible</div>
                    <div className="text-sm text-gray-600">Scheduling</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Home Cleanout</h3>
                  <p className="text-gray-600 mb-6">
                    Professional cleanup services designed specifically for family homes, 
                    respecting your schedule and home environment.
                  </p>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Service Type:</span>
                      <span className="font-medium">Family-Focused</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Approach:</span>
                      <span className="font-medium">Respectful & Safe</span>
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
                Family Home Cleanout Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cleanup services designed for Jacksonville families
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Moving Preparation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Complete home cleanout before moving, including packing assistance and waste removal
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Pre-Move Cleanout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Packing Assistance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Unwanted Item Removal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Move-Out Cleaning</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Residential Waste Removal
                    </h3>
                    <p className="text-gray-600 text-sm">
                      General household waste, old furniture, and unwanted items removal
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Furniture Removal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Appliance Disposal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">General Household Items</span>
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
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Family-Friendly Service
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Services designed to work around family schedules and respect home environment
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
                    <span className="text-sm text-gray-600">Child-Safe Approach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Respectful Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Minimal Disruption</span>
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
                      Home Organization
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Help organize and declutter your family home for better living
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Decluttering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Space Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Storage Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Home Maintenance</span>
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
                Why Choose Us for Family Home Cleanout?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Family-focused approach with professional service and local expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Family-Focused Approach
                </h3>
                <p className="text-gray-600">
                  We understand family needs and work around your schedule with respect for your home environment.
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
                  We work around your family's schedule, including evenings and weekends when needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Local Jacksonville Expertise
                </h3>
                <p className="text-gray-600">
                  We understand Jacksonville neighborhoods and local disposal requirements.
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
                  We bring the right tools and equipment for efficient, safe home cleanout.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Respectful Service
                </h3>
                <p className="text-gray-600">
                  We treat your home with care and respect, protecting your family's belongings.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for your family's protection and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Family Home Cleanout?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get your free quote today and experience professional family home cleanout service 
              that respects your home and works around your family's schedule.
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
