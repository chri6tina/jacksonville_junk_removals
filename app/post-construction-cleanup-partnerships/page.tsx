import Link from 'next/link'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Handshake, Award, Target, Zap } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export default function PostConstructionCleanupPartnershipsPage() {
  return (
    <>
      <SEOHead
        title="Post-Construction Cleanup Partnerships Jacksonville | Local Business Directory (904) 456-3851"
        description="Jacksonville post-construction cleanup partnerships and local business directory. Connect with trusted contractors, builders, and service providers across all Jacksonville areas. Call (904) 456-3851"
        keywords="post-construction cleanup partnerships Jacksonville, construction cleanup business directory, Jacksonville area contractors, cleanup service partnerships Florida"
        canonical="/post-construction-cleanup-partnerships"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Handshake className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Jacksonville Post-Construction
                <br />
                <span className="text-purple-300">Cleanup Partnerships</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-purple-300 font-bold">TRUSTED LOCAL BUSINESS NETWORK</span><br />
                Connect with verified contractors, builders, and service providers across all Jacksonville areas<br />
                Building stronger communities through strategic partnerships
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Handshake className="w-5 h-5" />
                  <span>Become a Partner</span>
                </Link>
                <Link
                  href="#directory"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>View Directory</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnerships that benefit both our businesses and the Jacksonville community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expanded Client Base</h3>
                <p className="text-gray-600">Access to our extensive network of Jacksonville clients and projects</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Area-Specific Expertise</h3>
                <p className="text-gray-600">Specialized knowledge for beach, downtown, suburban, and premium markets</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">Quick turnaround times and emergency service capabilities</p>
              </div>

              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Standards</h3>
                <p className="text-gray-600">Maintain your reputation with our proven quality protocols</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance & Safety</h3>
                <p className="text-gray-600">OSHA certified and fully insured for your peace of mind</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Growth</h3>
                <p className="text-gray-600">Help build stronger Jacksonville communities together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Area Partnerships */}
        <section id="directory" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Area Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnerships across all major Jacksonville areas and industries
              </p>
            </div>

            {/* Jacksonville Beach Area Partnerships */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Waves className="w-10 h-10 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Jacksonville Beach Area</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Beachfront Builders</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Specialized in oceanfront construction and renovation projects</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Jacksonville Beach</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Coastal Hotels Group</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Luxury hotel and resort construction specialists</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Atlantic Beach</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Home className="w-6 h-6 text-purple-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Beachside Properties</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Premium residential construction and renovation</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Neptune Beach</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Downtown Jacksonville Partnerships */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Building2 className="w-10 h-10 text-gray-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Downtown Jacksonville</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Urban Development Co.</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">High-rise and commercial building construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Financial District</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Downtown Retail Partners</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Retail and entertainment district development</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Entertainment District</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-purple-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Hospitality Downtown</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Luxury hotel and restaurant construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Business District</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Southside Jacksonville Partnerships */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Home className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Southside Jacksonville</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Home className="w-6 h-6 text-green-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Family Builders Inc.</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Family-friendly residential construction and renovation</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Southside Communities</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Suburban Retail Partners</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Shopping center and retail development</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Retail Districts</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-purple-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Educational Builders</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">School and educational facility construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Educational Areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mandarin & Orange Park Partnerships */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <TreePine className="w-10 h-10 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Mandarin & Orange Park</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-6 h-6 text-emerald-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Waterfront Estates</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Luxury waterfront property construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Mandarin Waterfront</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-orange-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Growing Communities</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">New development and subdivision construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Orange Park</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-amber-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">Premium Builders</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">High-end residential and commercial construction</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Premium Areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our network of trusted Jacksonville area contractors and service providers
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                      <p className="text-gray-600 text-sm">Valid business license and comprehensive insurance coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Standards</h4>
                      <p className="text-gray-600 text-sm">Commitment to high-quality workmanship and customer satisfaction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Jacksonville Focus</h4>
                      <p className="text-gray-600 text-sm">Primary service area within Jacksonville and surrounding communities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Communication</h4>
                      <p className="text-gray-600 text-sm">Responsive communication and professional business practices</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Referral Network</h4>
                      <p className="text-gray-600 text-sm">Access to our extensive client base and project opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Marketing Support</h4>
                      <p className="text-gray-600 text-sm">Featured placement in our business directory and marketing materials</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Training & Resources</h4>
                      <p className="text-gray-600 text-sm">Access to our expertise and industry best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Growth</h4>
                      <p className="text-gray-600 text-sm">Contribute to building stronger Jacksonville communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Partnership Network?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Connect with Jacksonville's leading post-construction cleanup specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Handshake className="w-5 h-5" />
                <span>Become a Partner</span>
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Project Quote</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="partnerships"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={false}
        />
      </div>
    </>
  )
}
