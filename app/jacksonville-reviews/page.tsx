import Link from 'next/link'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Award, Target, Zap, BookOpen, Microscope, Computer, Paintbrush, Quote, ThumbsUp, Calendar } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import JacksonvilleReviews from '@/components/JacksonvilleReviews'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export default function JacksonvilleReviewsPage() {
  return (
    <>
      <SEOHead
        title="Jacksonville Customer Reviews & Testimonials | Post-Construction Cleanup (904) 456-3851"
        description="Read real customer reviews and testimonials from Jacksonville residents and businesses. Verified 5-star reviews for post-construction cleanup services across all Jacksonville areas. Call (904) 456-3851"
        keywords="Jacksonville customer reviews, Jacksonville testimonials, post-construction cleanup reviews, Jacksonville Beach reviews, downtown Jacksonville reviews, verified customer reviews Jacksonville"
        canonical="/jacksonville-reviews"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Star className="w-16 h-16 text-yellow-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Jacksonville Customer
                <br />
                <span className="text-yellow-300">Reviews & Testimonials</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-yellow-300 font-bold">VERIFIED 5-STAR REVIEWS FROM JACKSONVILLE CUSTOMERS</span><br />
                Real feedback from real Jacksonville residents and businesses<br />
                Trusted by thousands across all Jacksonville areas for post-construction cleanup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Estimate</span>
                </Link>
                <Link
                  href="/post-construction-cleanup"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>View Our Services</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Reviews Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6" />
              <span className="text-lg font-semibold">
                ⭐ JACKSONVILLE'S #1 RATED POST-CONSTRUCTION CLEANUP SERVICE ⭐
              </span>
              <Star className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • 4.9/5 Stars from 127+ Verified Reviews • Serving All Jacksonville Areas
            </p>
          </div>
        </section>

        {/* Overall Rating Summary */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville's Trusted Post-Construction Cleanup Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See why Jacksonville residents and businesses consistently rate us 5 stars for post-construction cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Overall Rating */}
              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="text-gray-600">Overall Rating</div>
              </div>

              {/* Total Reviews */}
              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">127+</div>
                <div className="text-gray-600">Verified Reviews</div>
              </div>

              {/* Areas Served */}
              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Jacksonville Areas</div>
              </div>

              {/* Years of Service */}
              <div className="text-center bg-white rounded-lg p-8 shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">4+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Reviews Component */}
        <JacksonvilleReviews showAll={true} />

        {/* Why Customers Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Jacksonville Customers Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The key factors that make us the preferred choice for post-construction cleanup across Jacksonville
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Area Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Jacksonville construction codes, regulations, and area-specific requirements</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Scheduling</h3>
                <p className="text-gray-600">Consistent on-time performance and flexible scheduling for Jacksonville projects</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Proven quality protocols and satisfaction guarantee for all Jacksonville projects</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                <p className="text-gray-600">State-of-the-art equipment and tools for efficient Jacksonville area cleanup</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Team</h3>
                <p className="text-gray-600">Skilled professionals with years of Jacksonville construction cleanup experience</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair, transparent pricing with free estimates for all Jacksonville projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Review Categories */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Reviews by Service Type
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we perform across different post-construction cleanup services in Jacksonville
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Residential</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Home renovations, additions, and residential construction cleanup across all Jacksonville areas.
                </p>
                <div className="text-sm text-gray-600">45+ verified reviews</div>
              </div>

              {/* Commercial */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Commercial</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Office buildings, retail stores, and commercial facility cleanup throughout Jacksonville.
                </p>
                <div className="text-sm text-gray-600">38+ verified reviews</div>
              </div>

              {/* Medical */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Hospital className="w-12 h-12 text-red-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Medical</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Healthcare facility construction cleanup with medical-grade standards and protocols.
                </p>
                <div className="text-sm text-gray-600">22+ verified reviews</div>
              </div>

              {/* Hospitality */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building2 className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Hospitality</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Hotel and restaurant construction cleanup with luxury finish protection.
                </p>
                <div className="text-sm text-gray-600">18+ verified reviews</div>
              </div>

              {/* Industrial */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Factory className="w-12 h-12 text-orange-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Industrial</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">4.8</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Manufacturing and industrial facility construction cleanup with heavy-duty protocols.
                </p>
                <div className="text-sm text-gray-600">15+ verified reviews</div>
              </div>

              {/* Educational */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-indigo-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Educational</h3>
                </div>
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-lg font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-gray-700 mb-4">
                  School and university construction cleanup with student safety protocols.
                </p>
                <div className="text-sm text-gray-600">12+ verified reviews</div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="jacksonville-reviews"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Jacksonville's #1 Rated Post-Construction Cleanup Service?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied Jacksonville customers who trust us with their construction cleanup needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/post-construction-cleanup"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

