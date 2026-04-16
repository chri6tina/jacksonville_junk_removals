import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, CheckCircle, Phone, Clock, Truck, Star, MapPin, Users, Heart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Junk Removal Services - Jacksonville Junk Removal',
  description: 'Professional residential junk removal services in Jacksonville. Home cleanouts, furniture removal, and residential waste disposal. Call (904) 742-3531.',
  keywords: 'residential junk removal, home cleanout, furniture removal, residential waste disposal, Jacksonville residential cleanup',
  alternates: {
    canonical: '/residential-junk-removal',
  },
}

export default function ResidentialJunkRemovalPage() {
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
                  Residential<br/>Junk Removal Services
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  Professional residential junk removal services for Jacksonville homes. Home cleanouts, furniture removal, and residential waste disposal that makes your home clean and organized.
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

        {/* Service Overview */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
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
                    <div className="text-2xl font-bold text-primary">Home</div>
                    <div className="text-sm text-gray-600">Focused</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Family</div>
                    <div className="text-sm text-gray-600">Friendly</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Residential Junk Removal</h3>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
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
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
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
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
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
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
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
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Why Choose Us for Residential Junk Removal?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Home-focused approach with professional service and family-friendly care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Residential Expertise
                </h3>
                <p className="text-gray-600">
                  We understand the unique needs of Jacksonville homes and families.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Family-Friendly Approach
                </h3>
                <p className="text-gray-600">
                  We treat your home with respect and care, understanding it's where your family lives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Local Jacksonville Service
                </h3>
                <p className="text-gray-600">
                  We understand Jacksonville neighborhoods and residential needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Professional Equipment
                </h3>
                <p className="text-gray-600">
                  We bring the right tools and equipment for efficient residential cleanup.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  We work around your family schedule to minimize disruption to your daily life.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-4">
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
        <div className="bg-primary text-white py-16">
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
                className="bg-secondary hover:bg-orange-600 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Call (904) 742-3531
              </a>
              <Link
                href="/estimation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
