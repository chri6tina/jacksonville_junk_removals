import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Award, Target, Zap, Handshake, Wrench, HardHat, FileText, Calendar, CheckSquare } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Jacksonville Construction Partnerships | Post-Construction Cleanup for Builders (904) 456-3851',
  description: 'Strategic partnerships with Jacksonville construction companies. Post-construction cleanup services for builders, contractors, and construction firms across all Jacksonville areas. Call (904) 456-3851',
  keywords: 'Jacksonville construction partnerships, construction company partnerships Jacksonville, builder partnerships Florida, contractor cleanup services Jacksonville, construction site cleanup partnerships',
  alternates: {
    canonical: '/jacksonville-construction-partnerships',
  },
}

export default function JacksonvilleConstructionPartnershipsPage() {
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
  "serviceType": "Jacksonville Construction Partnerships",
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
  "description": "Strategic partnerships with Jacksonville construction companies. Post-construction cleanup services for builders, contractors, and construction firms across all Jacksonville areas. Call (904) 456-3851"
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
                  Jacksonville Construction <br /> <span className="text-orange-300">Partnerships</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-orange-300 font-bold">STRATEGIC PARTNERSHIPS FOR JACKSONVILLE BUILDERS</span><br /> Post-Construction Cleanup Services for Construction Companies, Contractors & Builders<br /> Building stronger Jacksonville communities through strategic collaboration.
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

        {/* Jacksonville Construction Partnership Alert */}
        <section className="bg-orange-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <HardHat className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏗️ JACKSONVILLE CONSTRUCTION COMPANY PARTNERSHIPS 🏗️
              </span>
              <HardHat className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Strategic Partnerships for Jacksonville Builders • Enhanced Project Delivery
            </p>
          </div>
        </section>

        {/* Why Partner With Jacksonville Builders */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Partner With Jacksonville Construction Companies?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic partnerships that benefit both our businesses and the Jacksonville construction industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Market Expertise</h3>
                <p className="text-gray-600">Deep understanding of Jacksonville construction codes, regulations, and local requirements</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Area-Specific Knowledge</h3>
                <p className="text-gray-600">Specialized expertise for beach areas, downtown, suburban, and premium markets</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Timeline Alignment</h3>
                <p className="text-gray-600">Coordinated cleanup services that align with construction schedules and deadlines</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Maintain your reputation with our proven quality protocols and standards</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">Quick turnaround times and emergency service capabilities for urgent needs</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Growth</h3>
                <p className="text-gray-600">Help build stronger Jacksonville construction industry together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Construction Company Types */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Construction Company Types We Partner With
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive partnerships across all types of construction companies and specialties
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* General Contractors */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-orange-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">General Contractors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Full-service construction companies handling complete building projects from start to finish.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Commercial construction</li>
                  <li>• Residential development</li>
                  <li>• Renovation projects</li>
                  <li>• New construction</li>
                </ul>
              </div>

              {/* Specialty Contractors */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Wrench className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Specialty Contractors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized construction companies focusing on specific trades and construction aspects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electrical contractors</li>
                  <li>• Plumbing contractors</li>
                  <li>• HVAC contractors</li>
                  <li>• Roofing contractors</li>
                </ul>
              </div>

              {/* Development Companies */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Development Companies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Real estate development firms handling large-scale construction and development projects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential development</li>
                  <li>• Commercial development</li>
                  <li>• Mixed-use projects</li>
                  <li>• Master-planned communities</li>
                </ul>
              </div>

              {/* Design-Build Firms */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <FileText className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Design-Build Firms</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Integrated design and construction companies providing end-to-end project delivery.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Integrated services</li>
                  <li>• Custom projects</li>
                  <li>• Creative solutions</li>
                  <li>• Streamlined delivery</li>
                </ul>
              </div>

              {/* Subcontractors */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Subcontractors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized trade contractors working on specific aspects of larger construction projects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Trade specialties</li>
                  <li>• Project coordination</li>
                  <li>• Quality craftsmanship</li>
                  <li>• Timeline management</li>
                </ul>
              </div>

              {/* Construction Management */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Calendar className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Construction Management</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Professional construction management firms overseeing complex construction projects.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Project oversight</li>
                  <li>• Schedule management</li>
                  <li>• Quality control</li>
                  <li>• Cost management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits for Construction Companies */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Benefits for Jacksonville Construction Companies
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategic advantages that enhance your construction business and project delivery
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enhanced Project Delivery */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enhanced Project Delivery</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Faster project completion with professional cleanup</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Improved client satisfaction and project presentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Reduced project delays and timeline issues</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Enhanced project quality and finish standards</span>
                  </div>
                </div>
              </div>

              {/* Business Growth Opportunities */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Growth Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Access to our extensive client network</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Referral opportunities and business expansion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Enhanced market reputation and credibility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckSquare className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Competitive advantage in Jacksonville market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Process */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partnership Application Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple steps to become a strategic partner and grow your Jacksonville construction business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Contact</h3>
                <p className="text-gray-600">Reach out to discuss partnership opportunities and mutual benefits</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Review</h3>
                <p className="text-gray-600">We review your construction company and project portfolio</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership Agreement</h3>
                <p className="text-gray-600">Establish terms, benefits, and collaboration framework</p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration Start</h3>
                <p className="text-gray-600">Begin working together on Jacksonville construction projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="jacksonville-construction-partnerships"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={false}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Jacksonville's #1 Post-Construction Cleanup Service?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join our network of Jacksonville construction companies and enhance your project delivery capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Handshake className="w-5 h-5" />
                <span>Become a Partner</span>
              </Link>
              <Link
                href="/post-construction-cleanup-partnerships"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>View Partnership Directory</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}

