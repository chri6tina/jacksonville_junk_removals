import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, CheckCircle, Building, Home, Stethoscope, Utensils, Factory, Hotel, GraduationCap, Church, ShoppingBag, Calculator, Star, Clock, Shield, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Service Comparison Jacksonville | Choose Your Industry (904) 456-3851',
  description: 'Compare post-construction cleanup services by industry in Jacksonville. Find the right service for your facility type, budget, and timeline. Free consultations. Call (904) 456-3851',
  keywords: 'post-construction cleanup comparison Jacksonville, construction cleanup services Jacksonville, industry-specific cleanup Jacksonville, facility cleanup comparison Florida',
  alternates: {
    canonical: '/post-construction-cleanup-comparison',
  },
}

export default function PostConstructionCleanupComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Calculator className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Post-Construction Cleanup Service Comparison
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-indigo-300 font-bold">CHOOSE THE RIGHT SERVICE FOR YOUR INDUSTRY</span><br />
                Compare specialized cleanup services by facility type, budget, and timeline.<br />
                Find the perfect match for your post-construction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Comparison Overview
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick comparison of all our specialized post-construction cleanup services
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Service Type</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">Starting Price</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">Best For</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">Timeline</th>
                    <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">Special Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Home className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="font-medium">Residential</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$2.25/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">New homes, renovations</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">1-2 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Family-safe products</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Building className="w-6 h-6 text-gray-600 mr-3" />
                        <span className="font-medium">Commercial</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$3.00/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Office buildings, retail</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-3 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Business-ready standards</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Stethoscope className="w-6 h-6 text-red-600 mr-3" />
                        <span className="font-medium">Medical Facilities</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$4.50/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Hospitals, clinics</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-4 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Healthcare compliance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Utensils className="w-6 h-6 text-green-600 mr-3" />
                        <span className="font-medium">Restaurants</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$4.25/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Food service facilities</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-3 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Food safety standards</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Factory className="w-6 h-6 text-orange-600 mr-3" />
                        <span className="font-medium">Industrial</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$4.75/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Manufacturing, warehouses</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">3-5 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Safety compliance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Hotel className="w-6 h-6 text-purple-600 mr-3" />
                        <span className="font-medium">Hotels</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$2.75/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Hospitality facilities</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-4 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Guest-ready standards</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="font-medium">Educational</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$2.50/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Schools, universities</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-3 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Student safety focus</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4">
                      <div className="flex items-center">
                        <Church className="w-6 h-6 text-amber-600 mr-3" />
                        <span className="font-medium">Religious</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">$2.75/sq ft</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Churches, temples</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">2-3 days</td>
                    <td className="border border-gray-300 px-6 py-4 text-center">Sacred space respect</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industry Selection Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How to Choose Your Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow this guide to select the perfect post-construction cleanup service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Building className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Identify Your Industry</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What type of facility are you cleaning?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What industry standards apply?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What are your compliance requirements?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Calculator className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Assess Your Needs</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What's your facility size?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What's your timeline?</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>What's your budget range?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-center mb-6">
                  <Star className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Select Your Service</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Choose industry-specific service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Select appropriate pricing tier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Schedule your consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Selection Matrix */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Selection Matrix
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect service based on your specific requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Budget-Based Selection */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Budget-Based Selection</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Budget-Friendly ($2.25 - $3.00/sq ft)</h4>
                    <p className="text-gray-600 mb-2">Perfect for basic cleanup needs</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Residential</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Commercial</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Educational</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Religious</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Mid-Range ($3.00 - $4.50/sq ft)</h4>
                    <p className="text-gray-600 mb-2">Balanced quality and value</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Restaurants</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Hotels</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Office Buildings</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Premium ($4.50+ /sq ft)</h4>
                    <p className="text-gray-600 mb-2">Highest quality and compliance</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Medical Facilities</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Industrial</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Luxury Hotels</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline-Based Selection */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Timeline-Based Selection</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Fast Turnaround (1-2 days)</h4>
                    <p className="text-gray-600 mb-2">Quick completion needed</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Residential</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Small Commercial</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Religious</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Standard (2-3 days)</h4>
                    <p className="text-gray-600 mb-2">Normal project timeline</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Educational</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Restaurants</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Hotels</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                    <h4 className="font-semibold text-gray-900 mb-2">Extended (3-5 days)</h4>
                    <p className="text-gray-600 mb-2">Complex or large facilities</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Medical Facilities</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Industrial</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Large Hotels</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Choose Your Service?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Get a personalized recommendation and free estimate for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore All Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">Main Hub</h3>
                  <p className="text-gray-600 text-sm">Overview of all services</p>
                </div>
              </Link>
              
              <Link href="/estimation" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Calculator className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">Free Estimates</h3>
                  <p className="text-gray-600 text-sm">Get pricing for your project</p>
                </div>
              </Link>
              
              <Link href="/contact" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Phone className="w-8 h-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">Contact Us</h3>
                  <p className="text-gray-600 text-sm">Speak with our experts</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
