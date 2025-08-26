import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Home, Building, CheckCircle, Wrench, DollarSign } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function ForeclosureCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Foreclosure Cleanout Jacksonville | Bank Owned Property Cleanup | REO Cleanout"
        description="Jacksonville foreclosure cleanout and bank owned property cleanup services. Professional REO cleanout, abandoned property cleanup, and foreclosure debris removal. Fast, reliable service for banks and property managers. Call (904) 456-3851 for immediate service."
        keywords="foreclosure cleanout Jacksonville, bank owned property cleanup Jacksonville, REO cleanout Jacksonville, abandoned property cleanup Jacksonville, foreclosure debris removal Jacksonville, property management cleanup Jacksonville, bank property cleanup Jacksonville, foreclosure property Jacksonville, REO property Jacksonville, Jacksonville foreclosure services"
        canonical="/foreclosure-cleanout"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Building className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Foreclosure Cleanout Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Professional foreclosure cleanout and bank owned property cleanup. 
                Fast, reliable service for banks, property managers, and real estate professionals in Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-500 hover:bg-purple-600 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Foreclosure Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-purple-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Building className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 PROFESSIONAL FORECLOSURE CLEANOUT SERVICES 🏠
              </span>
              <Building className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional foreclosure cleanout and bank property cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Foreclosure Cleanout Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive foreclosure cleanout and bank owned property cleanup for all types of properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* REO Property Cleanout */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  REO Property Cleanout
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup of bank owned properties including all personal items and debris.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Personal item removal</li>
                  <li>• Furniture disposal</li>
                  <li>• Appliance removal</li>
                  <li>• Complete property cleanup</li>
                </ul>
              </div>

              {/* Abandoned Property Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Abandoned Property Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup of abandoned properties including hazardous materials and debris.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hazardous material removal</li>
                  <li>• Debris cleanup</li>
                  <li>• Safety assessment</li>
                  <li>• Property restoration</li>
                </ul>
              </div>

              {/* Foreclosure Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Foreclosure Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete removal of all debris and waste from foreclosed properties.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Construction debris</li>
                  <li>• Household waste</li>
                  <li>• Yard debris</li>
                  <li>• Complete disposal</li>
                </ul>
              </div>

              {/* Property Management Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Management Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup services for property management companies and real estate professionals.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Turnover cleanup</li>
                  <li>• Tenant move-out</li>
                  <li>• Property preparation</li>
                  <li>• Maintenance cleanup</li>
                </ul>
              </div>

              {/* Fast Turnaround */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast Turnaround Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick turnaround times to get your foreclosed properties ready for sale or rent.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day service</li>
                  <li>• Quick turnaround</li>
                  <li>• Flexible scheduling</li>
                  <li>• Priority service</li>
                </ul>
              </div>

              {/* Cost-Effective Solutions */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cost-Effective Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Competitive pricing for foreclosure cleanout services to maximize your property value.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Competitive pricing</li>
                  <li>• Volume discounts</li>
                  <li>• No hidden fees</li>
                  <li>• Free estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Foreclosure Cleanout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Foreclosure Cleanout?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with foreclosure cleanout experience and professional service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Foreclosure Cleanout Experience
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with foreclosure cleanout in Jacksonville and understand the unique challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Turnaround Times
                      </h3>
                      <p className="text-gray-600">
                        Quick service to get your foreclosed properties ready for sale or rent as soon as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during foreclosure cleanout operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size foreclosure cleanout job efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Foreclosure Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Professional Foreclosure Cleanout?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your foreclosed properties ready for sale or rent with our professional cleanup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-purple-500 hover:bg-purple-600 text-purple-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-purple-200">
              Professional foreclosure cleanout services for banks, property managers, and real estate professionals
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We also provide these related property cleanup and management services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/estate-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete estate and probate property cleanup
                </p>
              </Link>

              <Link
                href="/commercial-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Commercial Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Commercial property and business cleanup
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete garage organization and cleanup
                </p>
              </Link>

              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Construction Debris
                </h3>
                <p className="text-sm text-gray-600">
                  Construction waste and demolition debris removal
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
