import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, AlertTriangle, CheckCircle, Home, Building, Wrench } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HurricaneDebrisRemovalPage() {
  return (
    <>
      <SEOHead
        title="Hurricane Debris Removal Jacksonville | Post Hurricane Cleanup | Emergency Service"
        description="Jacksonville hurricane debris removal and post hurricane cleanup services. Emergency structural debris removal, roofing material cleanup, and storm-damaged item removal. Available 24/7 after hurricanes. Call (904) 456-3851 for immediate service."
        keywords="hurricane debris removal Jacksonville, post hurricane cleanup Jacksonville, hurricane damage cleanup Jacksonville, structural debris removal Jacksonville, roofing material cleanup Jacksonville, storm damaged furniture removal Jacksonville, emergency hurricane cleanup Jacksonville, hurricane debris disposal Jacksonville, post storm cleanup Jacksonville, hurricane damage Jacksonville"
        canonical="/hurricane-debris-removal"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hurricane Debris Removal Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Emergency post-hurricane cleanup and structural debris removal. 
                Available 24/7 after hurricanes to restore Jacksonville properties quickly and safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Hurricane Cleanup</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                🚨 EMERGENCY HURRICANE CLEANUP AVAILABLE 24/7 🚨
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for immediate hurricane debris removal and structural cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hurricane Debris Removal Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-hurricane cleanup and debris removal for all types of hurricane damage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Structural Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Structural Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete removal of structural debris including walls, ceilings, and damaged building materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damaged wall removal</li>
                  <li>• Ceiling debris cleanup</li>
                  <li>• Structural material disposal</li>
                  <li>• Safety assessment</li>
                </ul>
              </div>

              {/* Roofing Material Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Roofing Material Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal of damaged roofing materials, shingles, and roof debris after hurricanes.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damaged shingle removal</li>
                  <li>• Roof debris cleanup</li>
                  <li>• Gutter debris removal</li>
                  <li>• Roof inspection support</li>
                </ul>
              </div>

              {/* Storm Damaged Furniture */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storm Damaged Furniture
                </h3>
                <p className="text-gray-600 mb-4">
                  Removal of water-damaged and storm-destroyed furniture and household items.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Water-damaged furniture</li>
                  <li>• Storm-destroyed items</li>
                  <li>• Household debris cleanup</li>
                  <li>• Insurance documentation</li>
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
                  Available around the clock after hurricanes for immediate debris removal and cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 24/7 availability</li>
                  <li>• Emergency response teams</li>
                  <li>• Same-day service</li>
                  <li>• Priority scheduling</li>
                </ul>
              </div>

              {/* Hazardous Material Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hazardous Material Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe disposal of hazardous materials and chemicals exposed during hurricane damage.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Chemical disposal</li>
                  <li>• Hazardous waste removal</li>
                  <li>• Safety compliance</li>
                  <li>• EPA regulations</li>
                </ul>
              </div>

              {/* Insurance Support */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Insurance Claim Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete documentation and support for hurricane damage insurance claims.
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

        {/* Why Choose Us for Hurricane Cleanup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Hurricane Debris Removal?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with hurricane cleanup experience and emergency response capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Hurricane Cleanup Experience
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with post-hurricane cleanup in Jacksonville and understand the unique challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        24/7 Emergency Response
                      </h3>
                      <p className="text-gray-600">
                        Available around the clock after hurricanes when you need immediate debris removal and cleanup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during hurricane cleanup operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Heavy Equipment Available
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle large hurricane debris removal jobs efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Hurricane Cleanup Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 bg-red-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Emergency Hurricane Debris Removal?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait for hurricane damage to get worse. Call us immediately for emergency debris removal and structural cleanup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-yellow-500 hover:bg-yellow-600 text-red-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-red-200">
              Available 24/7 for emergency hurricane debris removal and structural cleanup
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
                We also provide these related hurricane and storm cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/storm-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-200">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                  Storm Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  General storm damage cleanup and debris removal
                </p>
              </Link>

              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors duration-200"
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
                href="/appliance-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Wrench className="w-6 h-6 text-purple-600" />
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
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
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
