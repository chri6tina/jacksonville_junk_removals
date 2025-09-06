import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2 } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Case Studies Jacksonville | Real Project Results (904) 456-3851',
  description: 'Jacksonville post-construction cleanup case studies. Real project results from beach areas, downtown, Southside, Mandarin, and Orange Park. See actual cleanup projects and outcomes. Call (904) 456-3851',
  keywords: 'post-construction cleanup case studies Jacksonville, construction cleanup project results Jacksonville, cleanup success stories Florida, Jacksonville area cleanup examples',
  alternates: {
    canonical: '/post-construction-cleanup-case-studies',
  },
}

export default function PostConstructionCleanupCaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Jacksonville Post-Construction
                <br />
                <span className="text-blue-300">Cleanup Case Studies</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">REAL PROJECT RESULTS FROM ACROSS JACKSONVILLE</span><br />
                See actual cleanup projects, timelines, and outcomes from beach areas, downtown, Southside, Mandarin, and Orange Park
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Your Project Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Jacksonville Projects, Real Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These case studies showcase our expertise across all Jacksonville areas and industries. Each project demonstrates our commitment to quality, efficiency, and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Jacksonville Areas</h3>
                <p className="text-gray-600">Beach, Downtown, Southside, Mandarin, Orange Park</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Industries</h3>
                <p className="text-gray-600">Hotels, Offices, Retail, Medical, Educational</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">On-time completion, quality standards, customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Beach Area Case Studies */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Waves className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Jacksonville Beach Area Case Studies
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beach area construction projects with unique challenges including salt air protection and coastal considerations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Jacksonville Beach Hotel Renovation */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Jacksonville Beach Hotel Renovation</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Jacksonville Beach Oceanfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Hotel Renovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">85,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Salt air protection, luxury finishes</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Oceanfront hotel renovation required specialized cleaning protocols to protect against salt air corrosion while maintaining luxury finish standards for immediate guest occupancy.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented salt air protection protocols, used corrosion-resistant cleaning solutions, and coordinated with hotel management for seamless guest area preparation.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Hotel reopened on schedule with pristine, beach-ready guest areas. All luxury finishes protected against salt air. Zero guest complaints about cleanliness or finish quality.
                  </p>
                </div>
              </div>

              {/* Atlantic Beach Luxury Home */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Atlantic Beach Luxury Home</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Atlantic Beach Waterfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Luxury Home Construction</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">12,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">3 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">High-end finishes, coastal protection</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Waterfront luxury home required meticulous cleaning of high-end finishes while implementing coastal protection measures for long-term durability.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Used premium cleaning products for luxury finishes, applied protective coatings for coastal elements, and implemented detailed quality control processes.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Luxury home ready for immediate occupancy with protected finishes and coastal-optimized cleaning. Homeowner extremely satisfied with attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downtown Jacksonville Case Studies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Building2 className="w-12 h-12 text-gray-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Downtown Jacksonville Case Studies
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Urban construction projects with complex logistics, business continuity requirements, and high-rise considerations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Financial Center Renovation */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Financial Center Renovation</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Financial District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Financial Center Renovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">125,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">7 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">24/7 operation, minimal disruption</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Financial center required renovation cleanup while maintaining 24/7 operations with zero business disruption and professional environment standards.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented after-hours cleaning protocols, coordinated with security and building management, and used quiet cleaning equipment to minimize disruption.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Financial center reopened on Monday with pristine, professional environment. Zero business disruption reported. All financial operations continued seamlessly.
                  </p>
                </div>
              </div>

              {/* Downtown Hotel Construction */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Downtown Hotel Construction</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Entertainment District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">New Hotel Construction</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">95,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Luxury finishes, guest area preparation</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    New downtown hotel required comprehensive cleanup to meet 5-star cleanliness standards with protected luxury finishes for immediate guest occupancy.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented luxury finish protection protocols, used premium cleaning products, and coordinated with hotel management for guest area preparation.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Hotel opened on schedule with 5-star cleanliness standards and protected luxury finishes. All guest areas ready for immediate occupancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Jacksonville Case Studies */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Home className="w-12 h-12 text-green-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Southside Jacksonville Case Studies
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Suburban construction projects with family-friendly protocols and community integration focus
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Southside Shopping Center */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Southside Shopping Center Renovation</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southside Retail District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Shopping Center Renovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">45,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Family-friendly, minimal disruption</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Shopping center renovation required cleanup while maintaining family-friendly environment and minimizing disruption to neighboring residential areas.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented family-friendly protocols, coordinated with community leaders, and used quiet cleaning equipment during family hours.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Shopping center reopened with pristine retail spaces and happy neighboring families. Zero community complaints about disruption or noise.
                  </p>
                </div>
              </div>

              {/* Southside Residential Development */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Southside Residential Development</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southside Family Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">New Home Development</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">25 homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Family-ready, community integration</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    New residential development required cleanup of 25 homes while ensuring each was family-ready and integrated seamlessly with the existing community.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented family-ready protocols, coordinated with community associations, and ensured each home met move-in standards for families.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    All homes ready for immediate occupancy with family-friendly environments. Seamless integration with existing community. All families satisfied with move-in conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandarin & Orange Park Case Studies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mandarin & Orange Park Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Premium waterfront projects and growing community developments with specialized requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mandarin Waterfront Estate */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Mandarin Waterfront Estate</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Mandarin Waterfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Luxury Waterfront Estate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">15,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Luxury finishes, waterfront care</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Waterfront luxury estate required meticulous cleaning of high-end finishes while implementing waterfront protection measures for long-term durability.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Used premium cleaning products for luxury finishes, applied waterfront protection coatings, and implemented detailed quality control processes.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    Estate ready for immediate occupancy with pristine luxury finishes and protected waterfront features. Homeowner extremely satisfied with attention to detail.
                  </p>
                </div>
              </div>

              {/* Orange Park New Development */}
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Orange Park New Development</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Orange Park New Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">New Home Development</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">45 homes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">8 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Multi-phase, family coordination</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Challenge:</h4>
                  <p className="text-blue-800 text-sm">
                    Large new development required coordinated cleanup of 45 homes while managing multiple phases and ensuring each home was family-ready for move-in.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                  <p className="text-green-800 text-sm">
                    Implemented multi-phase coordination system, coordinated with builders and families, and ensured each home met move-in standards.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-900 mb-2">Result:</h4>
                  <p className="text-purple-800 text-sm font-semibold">
                    All homes ready for new families with pristine move-in conditions. Seamless coordination with builders. All families satisfied with move-in readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results Across Jacksonville
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">On-Time Completion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5-Star</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">0</div>
                <div className="text-blue-100">Business Disruptions</div>
              </div>
            </div>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our case studies demonstrate consistent excellence across all Jacksonville areas and industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Your Project Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="case-studies"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={false}
          showPartnerships={true}
        />
      </div>
  )
}
