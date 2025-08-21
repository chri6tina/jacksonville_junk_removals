import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Factory, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Cog, HardHat, Gauge, Settings, Stethoscope } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function IndustrialPostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Industrial Post-Construction Cleanup Jacksonville | Manufacturing & Industrial Facility Cleaning (904) 456-3851"
        description="Professional industrial post-construction cleanup in Jacksonville. Manufacturing facilities, warehouses, industrial plants, OSHA compliance, safety standards. Free estimates, certified technicians. Call (904) 456-3851"
        keywords="industrial post-construction cleanup Jacksonville, manufacturing facility construction cleanup Jacksonville, industrial plant construction cleaning Jacksonville, warehouse construction cleanup Jacksonville, industrial safety compliance Florida"
        canonical="/industrial-post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Factory className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Industrial Post-Construction Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">JACKSONVILLE'S #1 INDUSTRIAL CONSTRUCTION CLEANUP SERVICE</span><br />
                Specialized cleaning for manufacturing facilities, warehouses, and industrial plants.<br />
                OSHA compliance, safety standards, and production-ready environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Estimate</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Service</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <p className="text-blue-800 font-semibold text-lg">
                <strong>Industrial Safety Compliance Required:</strong> All industrial facility cleanups follow strict OSHA standards and safety protocols for production environments.
              </p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional industrial construction cleanup with safety compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Industrial Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Cog className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Industrial Cleanup</h3>
                  <p className="text-gray-600">Small warehouses & workshops</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$2.00</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic facility cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>OSHA compliance check</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Production area prep</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Industrial Cleanup */}
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <HardHat className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Industrial Cleanup</h3>
                  <p className="text-gray-600">Manufacturing plants & factories</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$3.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete facility cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Equipment & machinery cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>OSHA & safety standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Production line preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Air quality & ventilation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Industrial Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Gauge className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Industrial Cleanup</h3>
                  <p className="text-gray-600">High-tech & precision manufacturing</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-blue-600">$4.50</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Precision environment prep</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced contamination control</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Clean room standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Quality assurance testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Post-cleanup validation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Safety Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industrial Safety & OSHA Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our industrial cleanup meets the highest manufacturing and safety industry standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">OSHA Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Full compliance with Occupational Safety and Health Administration standards for industrial environments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <HardHat className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Safety Protocols</h3>
                </div>
                <p className="text-gray-600">
                  Strict adherence to industrial safety protocols and workplace safety regulations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Industrial Certified</h3>
                </div>
                <p className="text-gray-600">
                  Our team is certified in industrial facility cleaning and safety standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Solutions</h3>
                </div>
                <p className="text-gray-600">
                  Using industrial-grade, eco-friendly cleaning products safe for manufacturing environments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Contamination Control</h3>
                </div>
                <p className="text-gray-600">
                  Advanced contamination control measures for sensitive manufacturing processes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Quality Assurance</h3>
                </div>
                <p className="text-gray-600">
                  Post-cleanup quality assurance testing and safety validation reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Facility Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industrial Facility Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of industrial construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Factory className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Plants</h3>
                <p className="text-gray-600">
                  Automotive, electronics, pharmaceuticals, and consumer goods
                </p>
              </div>

              <div className="text-center">
                <Building className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Warehouses & Distribution</h3>
                <p className="text-gray-600">
                  Storage facilities, logistics centers, and distribution hubs
                </p>
              </div>

              <div className="text-center">
                <Cog className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assembly Lines</h3>
                <p className="text-gray-600">
                  Production lines, assembly areas, and quality control stations
                </p>
              </div>

              <div className="text-center">
                <Gauge className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Rooms</h3>
                <p className="text-gray-600">
                  Semiconductor, medical device, and precision manufacturing
                </p>
              </div>

              <div className="text-center">
                <Settings className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Shops</h3>
                <p className="text-gray-600">
                  Metalworking, woodworking, and precision machining facilities
                </p>
              </div>

              <div className="text-center">
                <HardHat className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Workshops</h3>
                <p className="text-gray-600">
                  Maintenance shops, repair facilities, and testing laboratories
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Industrial Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Industrial Certified Technicians</h3>
                    <p className="text-gray-600">
                      Our team is trained in industrial facility cleaning protocols and safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Safety Compliance Guarantee</h3>
                    <p className="text-gray-600">
                      We guarantee compliance with all industrial safety standards and OSHA regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Production Ready</h3>
                    <p className="text-gray-600">
                      Fast cleanup to get your facility back to production and operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Equipment Protection</h3>
                    <p className="text-gray-600">
                      Careful cleaning of sensitive machinery and industrial equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contamination Control</h3>
                    <p className="text-gray-600">
                      Advanced contamination control for precision manufacturing environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville industrial regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Production-Ready Industrial Cleanup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get your industrial facility back to production with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/commercial-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">Office buildings and commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/medical-facility-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Stethoscope className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Medical Facility Cleanup</h3>
                  <p className="text-gray-600 text-sm">Healthcare compliance cleaning</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">General Post-Construction</h3>
                  <p className="text-gray-600 text-sm">All types of construction cleanup</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
