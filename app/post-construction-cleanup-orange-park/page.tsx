import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Orange Park FL | Growing Community Construction Site Cleanup (904) 456-3851',
  description: 'Orange Park FL post-construction cleanup specialists. Serving growing communities, family neighborhoods, and new developments. Orange Park construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Orange Park FL, growing community construction cleanup, family neighborhood renovation cleaning, Orange Park debris removal Florida, new development cleanup',
  alternates: {
    canonical: '/post-construction-cleanup-orange-park',
  },
}

export default function OrangeParkPostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Post-Construction Cleanup Orange Park FL",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jacksonville"
    },
    {
      "@type": "City",
      "name": "Jacksonville Beach"
    },
    {
      "@type": "City",
      "name": "Orange Park"
    }
  ],
  "description": "Orange Park FL post-construction cleanup specialists. Serving growing communities, family neighborhoods, and new developments. Orange Park construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851"
})
        }}
      />
<div className="absolute inset-0 z-0">
          <Image
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
            fill
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20 mx-auto lg:mx-0">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-secondary fill-secondary drop-shadow-md" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm">Top-Rated Local Service</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                  Orange Park FL <br /> <span className="text-orange-300">Post-Construction Cleanup</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-orange-300 font-bold">GROWING COMMUNITY CONSTRUCTION CLEANUP SPECIALISTS</span><br /> Serving Orange Park, Fleming Island & Expanding Communities<br /> Transform construction sites into pristine, family-friendly spaces.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <Link
                  href="tel:+19044563851"
                  className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 animate-bounce-gentle" />
                  <span>Call (904) 456-3851</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Orange Park Service Alert */}
        <section className="bg-orange-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <TreePine className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏘️ ORANGE PARK FL POST-CONSTRUCTION CLEANUP SPECIALISTS 🏘️
              </span>
              <TreePine className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Growing Communities • Family-First Service
            </p>
          </div>
        </section>

        {/* Orange Park Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Orange Park Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Orange Park and Fleming Island growing communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* New Developments */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">New Developments</h3>
                <p className="text-gray-600 mb-4">
                  Brand new communities, housing developments, and planned neighborhoods
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• New Housing Developments</div>
                  <div>• Planned Communities</div>
                  <div>• Model Homes</div>
                  <div>• Builder Communities</div>
                </div>
              </div>

              {/* Family Neighborhoods */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Neighborhoods</h3>
                <p className="text-gray-600 mb-4">
                  Established family areas, growing neighborhoods, and community centers
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Family Homes</div>
                  <div>• Growing Neighborhoods</div>
                  <div>• Community Centers</div>
                  <div>• Parks & Recreation</div>
                </div>
              </div>

              {/* Commercial Growth */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Growth</h3>
                <p className="text-gray-600 mb-4">
                  New retail centers, business districts, and commercial developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• New Retail Centers</div>
                  <div>• Business Parks</div>
                  <div>• Commercial Districts</div>
                  <div>• Service Centers</div>
                </div>
              </div>

              {/* Educational Facilities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Growth</h3>
                <p className="text-gray-600 mb-4">
                  New schools, expanded facilities, and educational institutions
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• New Schools</div>
                  <div>• Educational Centers</div>
                  <div>• Youth Facilities</div>
                  <div>• Training Centers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growing Community-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Growing Community Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique challenges of growing communities and new development construction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* New Development Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-orange-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">New Development Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized knowledge of new construction and development projects with multi-phase cleaning and builder coordination.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-phase project coordination</li>
                  <li>• Builder relationship management</li>
                  <li>• New construction protocols</li>
                  <li>• Development timeline flexibility</li>
                </ul>
              </div>

              {/* Community-Focused Service */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Community-Focused Service</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Services designed around growing community needs with family-friendly practices and neighborhood consideration.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Family-friendly scheduling</li>
                  <li>• New neighbor consideration</li>
                  <li>• Community safety protocols</li>
                  <li>• Growing area logistics</li>
                </ul>
              </div>

              {/* Growth Accommodation */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Growth Accommodation</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Flexible services that adapt to the rapid growth and changing needs of expanding communities and developments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scalable service offerings</li>
                  <li>• Rapid response capabilities</li>
                  <li>• Growth-friendly pricing</li>
                  <li>• Future planning coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Orange Park Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Orange Park Community Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Orange Park growing communities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Orange Park New Development */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Orange Park New Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Orange Park New Community</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
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
                  <div className="bg-orange-100 rounded-lg p-4 mt-4">
                    <p className="text-orange-800 font-semibold">
                      Result: All homes ready for new families with pristine move-in conditions and community satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fleming Island Commercial Center */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fleming Island Commercial Center</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Fleming Island Growth Corridor</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">55,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Tenant coordination, retail preparation</span>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Commercial center opened on schedule with tenant-ready spaces and community excitement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orange Park Benefits */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Orange Park Growing Communities?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Growing community expertise combined with family-focused service and development knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Expertise</h3>
                <p className="text-gray-600">Deep understanding of growing community needs and new development challenges</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-First Service</h3>
                <p className="text-gray-600">Service designed around family schedules and new community integration</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Builder Partnerships</h3>
                <p className="text-gray-600">Established relationships with local builders and development companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="orange-park"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Orange Park Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and family-focused service for your Orange Park project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Orange Park Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Community Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
