import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Leaf, AlertTriangle, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function StormCleanupPage() {
  return (
    <>
      <SEOHead
        title="Storm Cleanup Jacksonville | Hurricane Debris Removal | Emergency Service"
        description="Jacksonville storm cleanup and hurricane debris removal services. Emergency storm damage cleanup, fallen tree removal, and storm debris disposal. Available 24/7 during storms. Call (904) 456-3851 for immediate service."
        keywords="storm cleanup Jacksonville, hurricane debris removal Jacksonville, storm damage cleanup Jacksonville, fallen tree removal Jacksonville, emergency storm cleanup Jacksonville, post storm cleanup Jacksonville, storm debris disposal Jacksonville, hurricane cleanup Jacksonville, storm damage Jacksonville, emergency junk removal Jacksonville"
        canonical="https://jacksonvillejunkremovals.com/storm-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Storm Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Emergency storm damage cleanup and hurricane debris removal. 
                Available 24/7 during storms to keep Jacksonville safe and clean.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Storm Cleanup</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service Alert */}
        <section className="bg-red-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🚨 EMERGENCY STORM CLEANUP AVAILABLE 24/7 🚨
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for immediate storm damage cleanup and debris removal
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Storm Cleanup Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive storm damage cleanup and debris removal for all types of storm-related messes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hurricane Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hurricane Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup after hurricanes including structural debris, roofing materials, and storm-damaged items.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Structural debris removal</li>
                  <li>• Roofing material cleanup</li>
                  <li>• Storm-damaged furniture</li>
                  <li>• Emergency response available</li>
                </ul>
              </div>

              {/* Fallen Tree Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fallen Tree Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal of fallen trees, branches, and landscaping debris caused by storms.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fallen tree removal</li>
                  <li>• Branch cleanup</li>
                  <li>• Landscaping debris</li>
                  <li>• Stump grinding available</li>
                </ul>
              </div>

              {/* Storm Damage Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storm Damage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleanup of all storm-related damage including water damage and structural issues.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Water damage cleanup</li>
                  <li>• Structural damage debris</li>
                  <li>• Mold prevention</li>
                  <li>• Insurance claim support</li>
                </ul>
              </div>

              {/* Emergency Response */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  24/7 Emergency Response
                </h3>
                <p className="text-gray-600 mb-4">
                  Available around the clock during storms for immediate cleanup and debris removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 24/7 availability</li>
                  <li>• Emergency response teams</li>
                  <li>• Same-day service</li>
                  <li>• Priority scheduling</li>
                </ul>
              </div>

              {/* Storm Debris Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storm Debris Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Proper disposal of all storm debris including hazardous materials and construction waste.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hazardous material disposal</li>
                  <li>• Construction waste removal</li>
                  <li>• Eco-friendly disposal</li>
                  <li>• Recycling when possible</li>
                </ul>
              </div>

              {/* Insurance Support */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Insurance Claim Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Documentation and support for insurance claims related to storm damage cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damage documentation</li>
                  <li>• Before/after photos</li>
                  <li>• Insurance paperwork</li>
                  <li>• Claim assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Storm Cleanup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Storm Cleanup?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with the experience and equipment to handle any storm cleanup job
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Jacksonville Expertise
                      </h3>
                      <p className="text-gray-600">
                        We know Jacksonville's weather patterns and have experience with local storm damage cleanup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        24/7 Emergency Response
                      </h3>
                      <p className="text-gray-600">
                        Available around the clock during storms when you need immediate cleanup and debris removal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during storm cleanup operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size storm cleanup job efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Storm Cleanup Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Emergency Storm Cleanup?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait for storm damage to get worse. Call us immediately for emergency cleanup and debris removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-blue-200">
              Available 24/7 for emergency storm cleanup and hurricane debris removal
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
                We also provide these related cleanup and removal services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Construction Debris
                </h3>
                <p className="text-sm text-gray-600">
                  Construction waste and demolition debris removal
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete garage organization and cleanup
                </p>
              </Link>

              <Link
                href="/appliance-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Appliance Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Safe appliance removal and disposal
                </p>
              </Link>

              <Link
                href="/furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Leaf className="w-6 h-6 text-yellow-600" />
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
