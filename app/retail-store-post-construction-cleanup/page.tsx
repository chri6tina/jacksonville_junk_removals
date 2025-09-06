import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, ShoppingBag, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Store, ShoppingCart, Tag, Shirt, Package, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail Store Post-Construction Cleanup Jacksonville | Commercial Retail Standards Cleaning (904) 456-3851',
  description: 'Professional retail store post-construction cleanup in Jacksonville. Commercial retail standards, customer-ready results, visual merchandising preparation, shopping environment. Free estimates, certified technicians. Call (904) 456-3851',
  keywords: 'retail store post-construction cleanup Jacksonville, retail construction cleanup Jacksonville, store construction cleaning Jacksonville, shopping center cleanup Jacksonville, retail environment cleaning Florida',
  alternates: {
    canonical: '/retail-store-post-construction-cleanup',
  },
}

export default function RetailStorePostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ShoppingBag className="w-16 h-16 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Retail Store Post-Construction Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-emerald-300 font-bold">JACKSONVILLE'S #1 RETAIL CONSTRUCTION CLEANUP SERVICE</span><br />
                Specialized cleaning for retail stores, shopping centers, and commercial retail facilities.<br />
                Customer-ready results, visual merchandising preparation, and retail environment standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Estimate</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Service</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-emerald-50 border-b border-emerald-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-emerald-600" />
              <p className="text-emerald-800 font-semibold text-lg">
                <strong>Retail Standards Required:</strong> All retail cleanups meet commercial retail standards for immediate customer access and optimal shopping environment.
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
                Professional retail store construction cleanup with commercial retail compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Retail Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Store className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Retail Cleanup</h3>
                  <p className="text-gray-600">Small retail stores & boutiques</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-600">$2.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Sales floor cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Display area preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Customer-ready presentation</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Retail Cleanup */}
              <div className="bg-emerald-50 rounded-lg p-8 border-2 border-emerald-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <ShoppingCart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Retail Cleanup</h3>
                  <p className="text-gray-600">Department stores & chain retailers</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-600">$4.00</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete store cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Fitting room preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Retail environment standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Storage & stockroom cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Visual merchandising prep</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Retail Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Retail Cleanup</h3>
                  <p className="text-gray-600">Luxury stores & flagship locations</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-emerald-600">$5.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Luxury finish protection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Premium brand standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>High-end display preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Flagship store presentation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Brand-level inspection</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Standards Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Environment Standards & Customer Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our retail cleanup meets commercial retail standards and creates optimal shopping environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Customer Safety Standards</h3>
                </div>
                <p className="text-gray-600">
                  Meeting all retail safety standards and customer protection protocols for immediate shopping.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Visual Merchandising Ready</h3>
                </div>
                <p className="text-gray-600">
                  Clean, pristine surfaces ready for product displays and visual merchandising setups.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Shopping Experience Focus</h3>
                </div>
                <p className="text-gray-600">
                  Creating optimal shopping environments that enhance customer experience and sales.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly Products</h3>
                </div>
                <p className="text-gray-600">
                  Using eco-friendly cleaning products safe for customers and meeting green retail standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Quick Turnaround</h3>
                </div>
                <p className="text-gray-600">
                  Fast, efficient cleanup to minimize store downtime and maximize revenue potential.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Retail Quality Standards</h3>
                </div>
                <p className="text-gray-600">
                  Multi-point quality inspections ensuring every area meets retail excellence standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Store Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Retail Store Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of retail construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Department Stores</h3>
                <p className="text-gray-600">
                  Large retail stores, multi-level shopping, and anchor stores
                </p>
              </div>

              <div className="text-center">
                <Shirt className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fashion & Apparel</h3>
                <p className="text-gray-600">
                  Clothing stores, fashion boutiques, and apparel chains
                </p>
              </div>

              <div className="text-center">
                <Package className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialty Retail</h3>
                <p className="text-gray-600">
                  Electronics stores, home goods, sporting goods, and specialty shops
                </p>
              </div>

              <div className="text-center">
                <ShoppingCart className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Grocery & Supermarkets</h3>
                <p className="text-gray-600">
                  Grocery stores, supermarkets, and food retail establishments
                </p>
              </div>

              <div className="text-center">
                <Store className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopping Centers</h3>
                <p className="text-gray-600">
                  Mall stores, strip centers, and retail plaza locations
                </p>
              </div>

              <div className="text-center">
                <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury & Flagship</h3>
                <p className="text-gray-600">
                  High-end boutiques, luxury brands, and flagship store locations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Retail Store Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Retail Industry Experience</h3>
                    <p className="text-gray-600">
                      Our team understands retail standards and customer shopping environment requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer-Ready Guarantee</h3>
                    <p className="text-gray-600">
                      We guarantee your store will be ready for customers with optimal shopping presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Revenue-Focused Scheduling</h3>
                    <p className="text-gray-600">
                      Fast cleanup to minimize store closure time and maximize revenue generation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Merchandising Preparation</h3>
                    <p className="text-gray-600">
                      Detailed cleaning to prepare for product displays and visual merchandising setups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Brand Standards Support</h3>
                    <p className="text-gray-600">
                      Meeting specific brand standards and retail chain requirements for consistency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville retail regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Customer-Ready Retail Cleanup?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Get your retail store ready for customers with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                  <Building className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">General commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/restaurant-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Users className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">Restaurant Cleanup</h3>
                  <p className="text-gray-600 text-sm">Food service establishments</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">General Post-Construction</h3>
                  <p className="text-gray-600 text-sm">All types of construction cleanup</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
