import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Building, CheckCircle, Wrench, DollarSign, Package, Home } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function StorageUnitCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Storage Unit Cleanout Jacksonville | Self Storage Cleanup | Storage Facility Cleanout"
        description="Jacksonville storage unit cleanout and self storage cleanup services. Professional storage facility cleanup, abandoned storage unit cleanup, and storage unit furniture removal. Fast, reliable service for storage facilities and individuals. Call (904) 456-3851 for immediate service."
        keywords="storage unit cleanout Jacksonville, self storage cleanup Jacksonville, storage facility cleanup Jacksonville, abandoned storage unit cleanup Jacksonville, storage unit furniture removal Jacksonville, storage cleanup Jacksonville, self storage Jacksonville, storage facility Jacksonville, Jacksonville storage services, storage unit removal Jacksonville"
        canonical="https://jacksonvillejunkremovals.com/storage-unit-cleanout"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Package className="w-16 h-16 text-teal-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Storage Unit Cleanout Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Professional storage unit cleanout and self storage cleanup. 
                Fast, reliable service for storage facilities, property managers, and individuals in Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-teal-500 hover:bg-teal-600 text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Storage Unit Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-teal-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Package className="w-6 h-6" />
              <span className="text-lg font-semibold">
                📦 PROFESSIONAL STORAGE UNIT CLEANOUT SERVICES 📦
              </span>
              <Package className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional storage unit cleanout and self storage cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Storage Unit Cleanout Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive storage unit cleanout and self storage cleanup for all types of storage facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Self Storage Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Self Storage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup of self storage units including furniture, boxes, appliances, and personal items.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Furniture removal</li>
                  <li>• Box and item cleanup</li>
                  <li>• Appliance disposal</li>
                  <li>• Complete unit cleanup</li>
                </ul>
              </div>

              {/* Storage Facility Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storage Facility Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup services for storage facility managers and property owners.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Multiple unit cleanup</li>
                  <li>• Facility maintenance</li>
                  <li>• Property preparation</li>
                  <li>• Bulk cleanup services</li>
                </ul>
              </div>

              {/* Abandoned Storage Unit Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Abandoned Storage Unit Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleanup of abandoned storage units including auction items and forgotten belongings.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Auction item removal</li>
                  <li>• Forgotten belongings</li>
                  <li>• Abandoned furniture</li>
                  <li>• Complete disposal</li>
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
                  Quick turnaround times to minimize storage unit downtime and get units ready for new tenants fast.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day service</li>
                  <li>• Quick turnaround</li>
                  <li>• Minimal downtime</li>
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
                  Fully licensed and insured for your protection during storage unit cleanout operations.
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
                  Competitive pricing for storage unit cleanout services to maximize your facility efficiency.
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

        {/* Why Choose Us for Storage Unit Cleanout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Storage Unit Cleanout?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with storage unit cleanout experience and professional service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Storage Unit Cleanout Experience
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with storage unit cleanout in Jacksonville and understand storage facility requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Turnaround Times
                      </h3>
                      <p className="text-gray-600">
                        Quick service to get your storage units ready for new tenants as soon as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during storage unit cleanout operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size storage unit cleanout job efficiently and safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Storage Unit Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Professional Storage Unit Cleanout?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your storage units ready for new tenants with our professional cleanup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-teal-500 hover:bg-teal-600 text-teal-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-teal-200">
              Professional storage unit cleanout services for storage facilities, property managers, and individuals
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
                We also provide these related storage and commercial cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/apartment-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-teal-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-200 transition-colors duration-200">
                  <Building className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                  Apartment Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Tenant move out and property management cleanup
                </p>
              </Link>

              <Link
                href="/foreclosure-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-teal-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Foreclosure Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Bank owned property and foreclosure cleanup
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-teal-50 transition-colors duration-200"
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
                href="/commercial-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-teal-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Commercial Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Commercial property and business cleanup
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
