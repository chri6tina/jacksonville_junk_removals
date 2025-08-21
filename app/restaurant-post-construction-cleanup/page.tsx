import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Utensils, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, ChefHat, Coffee, Pizza, Wine, Stethoscope } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function RestaurantPostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Restaurant Post-Construction Cleanup Jacksonville | Food Safety Standards Cleaning (904) 456-3851"
        description="Professional restaurant post-construction cleanup in Jacksonville. Food safety compliance, health department standards, commercial kitchen cleaning. Free estimates, certified technicians. Call (904) 456-3851"
        keywords="restaurant post-construction cleanup Jacksonville, food service construction cleanup Jacksonville, commercial kitchen construction cleaning Jacksonville, restaurant health inspection cleaning Jacksonville, food safety compliance Florida"
        canonical="/restaurant-post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Utensils className="w-16 h-16 text-orange-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Restaurant Post-Construction Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-orange-300 font-bold">JACKSONVILLE'S #1 RESTAURANT CONSTRUCTION CLEANUP SERVICE</span><br />
                Specialized cleaning for restaurants, cafes, and food service facilities.<br />
                Food safety compliance, health department standards, and commercial kitchen cleaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Estimate</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Service</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-orange-50 border-b border-orange-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <p className="text-orange-800 font-semibold text-lg">
                <strong>Food Safety Compliance Required:</strong> All restaurant cleanups meet health department standards and food safety regulations for immediate operation.
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
                Professional restaurant construction cleanup with food safety compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Restaurant Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Restaurant Cleanup</h3>
                  <p className="text-gray-600">Small cafes & food trucks</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-orange-600">$2.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic kitchen cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Food safety compliance check</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Health department ready</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Restaurant Cleanup */}
              <div className="bg-orange-50 rounded-lg p-8 border-2 border-orange-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Pizza className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Restaurant Cleanup</h3>
                  <p className="text-gray-600">Full-service restaurants & bars</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-orange-600">$3.50</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete kitchen & dining cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Commercial equipment cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Health department standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Food safety certification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Ventilation system cleaning</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Restaurant Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Wine className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Restaurant Cleanup</h3>
                  <p className="text-gray-600">Fine dining & upscale establishments</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-orange-600">$4.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Luxury finish cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced kitchen sanitization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Dining room perfection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Wine cellar preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Post-cleanup inspection</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Food Safety Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Food Safety & Health Department Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our restaurant cleanup meets the highest food service industry standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Health Department Ready</h3>
                </div>
                <p className="text-gray-600">
                  Complete compliance with local health department standards for immediate inspection approval.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <ChefHat className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Commercial Kitchen Standards</h3>
                </div>
                <p className="text-gray-600">
                  Meeting all commercial kitchen cleaning requirements and food safety regulations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Food Safety Certified</h3>
                </div>
                <p className="text-gray-600">
                  Our team is certified in food safety protocols and restaurant cleaning standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Products</h3>
                </div>
                <p className="text-gray-600">
                  Using food-safe, eco-friendly cleaning products approved for commercial kitchens.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Ventilation Cleaning</h3>
                </div>
                <p className="text-gray-600">
                  Professional cleaning of hood systems, ducts, and ventilation equipment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Inspection Preparation</h3>
                </div>
                <p className="text-gray-600">
                  Complete preparation for health department inspections and food safety audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Restaurant Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of food service construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Utensils className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Service Restaurants</h3>
                <p className="text-gray-600">
                  Fine dining, casual dining, and family restaurants
                </p>
              </div>

              <div className="text-center">
                <Coffee className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cafes & Coffee Shops</h3>
                <p className="text-gray-600">
                  Coffee houses, bakeries, and light food service
                </p>
              </div>

              <div className="text-center">
                <Pizza className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Casual & QSR</h3>
                <p className="text-gray-600">
                  Quick service restaurants and fast food chains
                </p>
              </div>

              <div className="text-center">
                <Wine className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bars & Pubs</h3>
                <p className="text-gray-600">
                  Sports bars, wine bars, and entertainment venues
                </p>
              </div>

              <div className="text-center">
                <ChefHat className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Food Trucks & Kiosks</h3>
                <p className="text-gray-600">
                  Mobile food service and compact food operations
                </p>
              </div>

              <div className="text-center">
                <Building className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Catering Facilities</h3>
                <p className="text-gray-600">
                  Event spaces, banquet halls, and catering kitchens
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Restaurant Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Food Safety Certified</h3>
                    <p className="text-gray-600">
                      Our team is trained in food safety protocols and restaurant cleaning standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Health Department Ready</h3>
                    <p className="text-gray-600">
                      We guarantee your restaurant will pass health department inspections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
                    <p className="text-gray-600">
                      Quick cleanup to get your restaurant open and serving customers faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commercial Equipment</h3>
                    <p className="text-gray-600">
                      Professional cleaning of all commercial kitchen equipment and appliances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ventilation Systems</h3>
                    <p className="text-gray-600">
                      Complete cleaning of hood systems, ducts, and ventilation equipment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville health regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Food-Safe Construction Cleanup?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Get your restaurant ready for customers with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                  <Building className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">Office buildings and commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/medical-facility-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Stethoscope className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Medical Facility Cleanup</h3>
                  <p className="text-gray-600 text-sm">Healthcare compliance cleaning</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">General Post-Construction</h3>
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
