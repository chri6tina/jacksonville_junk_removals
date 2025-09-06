import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Image, Building, Home, Stethoscope, Utensils, Factory, Hotel, GraduationCap, Church, ShoppingBag, Star, Clock, Shield, Award, Users, DollarSign, Calendar, MapPin, CheckCircle, Eye, ArrowRight, ArrowLeft, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Portfolio Jacksonville | Before & After Gallery (904) 456-3851',
  description: 'View our post-construction cleanup portfolio in Jacksonville. See before and after photos, project details, and results across all industries. Call (904) 456-3851',
  keywords: 'post-construction cleanup portfolio Jacksonville, construction cleanup before after Jacksonville, cleanup project gallery Jacksonville, facility cleanup examples Florida',
  alternates: {
    canonical: '/post-construction-cleanup-portfolio',
  },
}

export default function PostConstructionCleanupPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Image className="w-16 h-16 text-rose-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Project Portfolio Gallery
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-rose-300 font-bold">SEE THE TRANSFORMATION</span><br />
                Browse our completed post-construction cleanup projects across all industries.<br />
                Real results, real projects, real satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#portfolio"
                  className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Portfolio</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-rose-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Project</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Navigation */}
        <section id="portfolio" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Browse by Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Filter our portfolio by facility type to see projects relevant to your industry
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors duration-200">
                All Projects
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                <Home className="w-4 h-4 inline mr-2" />
                Residential
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                <Building className="w-4 h-4 inline mr-2" />
                Commercial
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                <Stethoscope className="w-4 h-4 inline mr-2" />
                Medical
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                <Utensils className="w-4 h-4 inline mr-2" />
                Restaurants
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200">
                <Factory className="w-4 h-4 inline mr-2" />
                Industrial
              </button>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Medical Facility Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <Stethoscope className="w-24 h-24 text-red-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Stethoscope className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-red-600 font-semibold text-sm">Medical Facility</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Baptist Medical Center - New Wing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    45,000 sq ft medical wing cleanup with healthcare compliance standards
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>4 days</span>
                    <span>45K sq ft</span>
                    <span>Healthcare Compliant</span>
                  </div>
                </div>
              </div>

              {/* Hotel Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Hotel className="w-24 h-24 text-purple-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Hotel className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-purple-600 font-semibold text-sm">Luxury Hotel</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    The Ritz-Carlton Jacksonville
                  </h3>
                  <p className="text-gray-600 mb-4">
                    28,000 sq ft renovation cleanup with 5-star presentation standards
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>3 days</span>
                    <span>28K sq ft</span>
                    <span>5-Star Ready</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Utensils className="w-24 h-24 text-green-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Utensils className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-600 font-semibold text-sm">Fine Dining</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ruth's Chris Steakhouse
                  </h3>
                  <p className="text-gray-600 mb-4">
                    12,000 sq ft restaurant cleanup with food safety compliance
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2 days</span>
                    <span>12K sq ft</span>
                    <span>Health Approved</span>
                  </div>
                </div>
              </div>

              {/* Industrial Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Factory className="w-24 h-24 text-orange-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Factory className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-orange-600 font-semibold text-sm">Manufacturing</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Johnson & Johnson Facility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    85,000 sq ft industrial cleanup with safety compliance standards
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5 days</span>
                    <span>85K sq ft</span>
                    <span>Safety Compliant</span>
                  </div>
                </div>
              </div>

              {/* Educational Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold text-sm">University</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    University of North Florida
                  </h3>
                  <p className="text-gray-600 mb-4">
                    32,000 sq ft academic building cleanup with student safety focus
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>3 days</span>
                    <span>32K sq ft</span>
                    <span>Student Ready</span>
                  </div>
                </div>
              </div>

              {/* Religious Project */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <Church className="w-24 h-24 text-amber-600" />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Eye className="w-12 h-12 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Church className="w-5 h-5 text-amber-600 mr-2" />
                    <span className="text-amber-600 font-semibold text-sm">Worship Center</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    First Baptist Church
                  </h3>
                  <p className="text-gray-600 mb-4">
                    18,000 sq ft sanctuary renovation cleanup with sacred space respect
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2 days</span>
                    <span>18K sq ft</span>
                    <span>Worship Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Portfolio by the Numbers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our project portfolio demonstrates our expertise and success across all industries
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-3xl font-bold text-rose-600 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>

              <div className="text-center">
                <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-3xl font-bold text-rose-600 mb-2">2M+</h3>
                <p className="text-gray-600">Square Feet Cleaned</p>
              </div>

              <div className="text-center">
                <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-3xl font-bold text-rose-600 mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>

              <div className="text-center">
                <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="text-3xl font-bold text-rose-600 mb-2">15+</h3>
                <p className="text-gray-600">Industries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See the dramatic difference our post-construction cleanup services make
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Medical Facility Transformation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Medical Facility Transformation</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before</h4>
                    <div className="bg-red-100 rounded-lg p-6 text-center">
                      <Stethoscope className="w-16 h-16 text-red-600 mx-auto mb-2" />
                      <p className="text-gray-600">Construction debris, dust, and materials throughout the facility</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After</h4>
                    <div className="bg-green-100 rounded-lg p-6 text-center">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-2" />
                      <p className="text-gray-600">Sterile, healthcare-compliant environment ready for patient care</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                      Healthcare Compliant • 45K sq ft • 4 Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Hotel Transformation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Luxury Hotel Transformation</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before</h4>
                    <div className="bg-orange-100 rounded-lg p-6 text-center">
                      <Hotel className="w-16 h-16 text-orange-600 mx-auto mb-2" />
                      <p className="text-gray-600">Renovation mess with construction materials and dust</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After</h4>
                    <div className="bg-purple-100 rounded-lg p-6 text-center">
                      <Star className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                      <p className="text-gray-600">5-star presentation with luxury finishes protected</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                      5-Star Standards • 28K sq ft • 3 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-rose-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
              Let us add your project to our growing collection of successful transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Start Your Project</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-rose-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600">All Services</h3>
                  <p className="text-gray-600 text-sm">Complete service overview</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-case-studies" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Award className="w-8 h-8 text-rose-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600">Case Studies</h3>
                  <p className="text-gray-600 text-sm">Detailed project stories</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-calculator" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Calculator className="w-8 h-8 text-rose-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-rose-600">Cost Calculator</h3>
                  <p className="text-gray-600 text-sm">Get instant estimates</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
