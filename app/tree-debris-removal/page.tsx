import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Leaf, Trees, Scissors, CheckCircle, Home } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function TreeDebrisRemovalPage() {
  return (
    <>
      <SEOHead
        title="Tree Debris Removal Jacksonville | Fallen Tree Cleanup | Branch Removal"
        description="Jacksonville tree debris removal and fallen tree cleanup services. Professional fallen tree removal, branch cleanup, landscaping debris removal, and stump grinding. Available same-day for emergency tree cleanup. Call (904) 456-3851 for immediate service."
        keywords="tree debris removal Jacksonville, fallen tree removal Jacksonville, branch cleanup Jacksonville, landscaping debris removal Jacksonville, stump grinding Jacksonville, tree cleanup Jacksonville, emergency tree removal Jacksonville, storm tree damage Jacksonville, tree debris disposal Jacksonville, Jacksonville tree services"
        canonical="/tree-debris-removal"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Trees className="w-16 h-16 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tree Debris Removal Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Professional fallen tree removal and landscaping debris cleanup. 
                Same-day service for emergency tree cleanup and branch removal in Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-green-500 hover:bg-green-600 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Tree Cleanup</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service Alert */}
        <section className="bg-green-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Trees className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🌳 EMERGENCY TREE CLEANUP AVAILABLE SAME-DAY 🌳
              </span>
              <Trees className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for immediate tree debris removal and fallen tree cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tree Debris Removal Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive tree cleanup and debris removal for all types of tree-related messes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fallen Tree Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Trees className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fallen Tree Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe and efficient removal of fallen trees, including large trees and storm-damaged trees.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Large tree removal</li>
                  <li>• Storm-damaged trees</li>
                  <li>• Emergency tree removal</li>
                  <li>• Safety assessment</li>
                </ul>
              </div>

              {/* Branch Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Scissors className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Branch Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup of fallen branches, limbs, and tree debris from storms or trimming.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fallen branch removal</li>
                  <li>• Limb cleanup</li>
                  <li>• Tree trimming debris</li>
                  <li>• Small branch disposal</li>
                </ul>
              </div>

              {/* Landscaping Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Landscaping Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Removal of all landscaping debris including leaves, twigs, and garden waste.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Leaf removal</li>
                  <li>• Twig cleanup</li>
                  <li>• Garden waste disposal</li>
                  <li>• Yard debris removal</li>
                </ul>
              </div>

              {/* Stump Grinding */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Stump Grinding
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional stump grinding and removal for complete tree cleanup projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Stump grinding</li>
                  <li>• Root removal</li>
                  <li>• Ground leveling</li>
                  <li>• Site preparation</li>
                </ul>
              </div>

              {/* Emergency Tree Response */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Tree Response
                </h3>
                <p className="text-gray-600 mb-4">
                  Same-day emergency response for dangerous tree situations and storm damage.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day service</li>
                  <li>• Emergency response</li>
                  <li>• Dangerous tree removal</li>
                  <li>• Priority scheduling</li>
                </ul>
              </div>

              {/* Tree Debris Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tree Debris Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Proper disposal of all tree debris including eco-friendly options and recycling.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Eco-friendly disposal</li>
                  <li>• Wood recycling</li>
                  <li>• Mulch creation</li>
                  <li>• Complete cleanup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Tree Cleanup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Tree Debris Removal?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with tree cleanup experience and professional equipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Tree Cleanup Expertise
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with tree debris removal in Jacksonville and understand local tree species.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Same-Day Emergency Service
                      </h3>
                      <p className="text-gray-600">
                        Available same-day for emergency tree cleanup when you need immediate debris removal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during tree cleanup operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size tree cleanup job efficiently and safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Tree Cleanup Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 bg-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Emergency Tree Debris Removal?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait for tree debris to cause more problems. Call us immediately for emergency tree cleanup and debris removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-green-500 hover:bg-green-600 text-green-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-green-200">
              Available same-day for emergency tree debris removal and fallen tree cleanup
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
                We also provide these related tree and landscaping cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/storm-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-green-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Trees className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Storm Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  General storm damage cleanup including tree debris
                </p>
              </Link>

              <Link
                href="/yard-waste-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-green-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Yard Waste Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Landscaping debris and yard waste disposal
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-green-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete garage organization and cleanup
                </p>
              </Link>

              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-green-50 transition-colors duration-200"
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
