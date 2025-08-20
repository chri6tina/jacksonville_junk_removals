import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Building, CheckCircle, Wrench, DollarSign, Home } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function ApartmentCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Apartment Cleanout Jacksonville | Tenant Move Out Cleanup | Property Management Cleanup"
        description="Jacksonville apartment cleanout and tenant move out cleanup services. Professional property management cleanup, apartment furniture removal, and tenant turnover cleanup. Fast, reliable service for landlords and property managers. Call (904) 456-3851 for immediate service."
        keywords="apartment cleanout Jacksonville, tenant move out cleanup Jacksonville, property management cleanup Jacksonville, apartment furniture removal Jacksonville, tenant turnover cleanup Jacksonville, apartment cleanup Jacksonville, property management Jacksonville, tenant cleanup Jacksonville, Jacksonville apartment services, apartment removal Jacksonville"
        canonical="https://jacksonvillejunkremovals.com/apartment-cleanout"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Home className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Apartment Cleanout Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Professional apartment cleanout and tenant move out cleanup. 
                Fast, reliable service for landlords, property managers, and tenants in Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-indigo-500 hover:bg-indigo-600 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Apartment Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-indigo-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 PROFESSIONAL APARTMENT CLEANOUT SERVICES 🏠
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional apartment cleanout and tenant move out cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Apartment Cleanout Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive apartment cleanout and tenant move out cleanup for all types of rental properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tenant Move Out Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tenant Move Out Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup after tenant move out including furniture removal, personal items, and apartment restoration.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Furniture removal</li>
                  <li>• Personal item cleanup</li>
                  <li>• Apartment restoration</li>
                  <li>• Move out inspection</li>
                </ul>
              </div>

              {/* Property Management Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Management Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup services for property management companies and landlords.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Turnover cleanup</li>
                  <li>• Property preparation</li>
                  <li>• Maintenance cleanup</li>
                  <li>• Rental ready service</li>
                </ul>
              </div>

              {/* Apartment Furniture Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Apartment Furniture Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal of all apartment furniture including beds, couches, tables, and appliances.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Bed and mattress removal</li>
                  <li>• Couch and chair disposal</li>
                  <li>• Table and desk removal</li>
                  <li>• Appliance disposal</li>
                </ul>
              </div>

              {/* Fast Turnaround Service */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast Turnaround Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick turnaround times to minimize vacancy and get your apartment ready for new tenants fast.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day service</li>
                  <li>• Quick turnaround</li>
                  <li>• Minimal vacancy</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>

              {/* Licensed & Insured */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600 mb-4">
                  Fully licensed and insured for your protection during apartment cleanout operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Licensed service</li>
                  <li>• Full insurance coverage</li>
                  <li>• Liability protection</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Cost-Effective Solutions */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cost-Effective Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Competitive pricing for apartment cleanout services to maximize your rental income.
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

        {/* Why Choose Us for Apartment Cleanout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Apartment Cleanout?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with apartment cleanout experience and professional service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Apartment Cleanout Experience
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with apartment cleanout in Jacksonville and understand rental property requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Turnaround Times
                      </h3>
                      <p className="text-gray-600">
                        Quick service to get your apartment ready for new tenants as soon as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during apartment cleanout operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size apartment cleanout job efficiently and safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Apartment Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Professional Apartment Cleanout?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your apartment ready for new tenants with our professional cleanup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-indigo-500 hover:bg-indigo-600 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-indigo-200">
              Professional apartment cleanout services for landlords, property managers, and tenants
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
                We also provide these related property management and residential cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/foreclosure-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-indigo-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-indigo-200 transition-colors duration-200">
                  <Building className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  Foreclosure Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Bank owned property and foreclosure cleanup
                </p>
              </Link>

              <Link
                href="/estate-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-indigo-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete estate and probate property cleanup
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-indigo-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete garage organization and cleanup
                </p>
              </Link>

              <Link
                href="/furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-indigo-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Furniture Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Professional furniture removal services
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
