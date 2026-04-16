import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Home, DollarSign, Star, Users, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Jacksonville | Probate Cleanup | Estate Sale Cleanup (904) 456-3851',
  description: 'Jacksonville estate cleanout service. Professional probate cleanup, estate sale cleanup, complete home cleanout. Licensed, insured, compassionate service. Call (904) 456-3851 for estate cleanout.',
  keywords: 'estate cleanout Jacksonville, probate cleanup Jacksonville, estate sale cleanup Jacksonville, home cleanout Jacksonville, estate cleanup service Jacksonville, Jacksonville estate cleanout, probate Jacksonville',
  alternates: {
    canonical: '/estate-cleanout',
  },
}

export default function EstateCleanoutPage() {
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
  "serviceType": "Estate Cleanout Jacksonville",
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
  "description": "Jacksonville estate cleanout service. Professional probate cleanup, estate sale cleanup, complete home cleanout. Licensed, insured, compassionate service. Call (904) 456-3851 for estate cleanout."
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
                  Estate Cleanout Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-teal-300 font-bold">PROFESSIONAL & COMPASSIONATE</span><br /> Complete estate cleanout services for probate, estate sales, and home transitions. Professional cleanup throughout Jacksonville.
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

        {/* Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 PROFESSIONAL ESTATE CLEANOUT SERVICES 🏠
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional estate cleanout service
            </p>
          </div>
        </section>

        {/* Estate Cleanout Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Estate Cleanout Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive estate cleanout for all types of home transitions and estate situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Probate Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Probate Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup for probate proceedings, estate administration, and legal requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Estate administration support</li>
                  <li>• Legal compliance</li>
                  <li>• Property preparation</li>
                  <li>• Documentation assistance</li>
                </ul>
              </div>

              {/* Estate Sale Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Estate Sale Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Post-sale cleanup and preparation for property sale or rental.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Post-sale cleanup</li>
                  <li>• Property preparation</li>
                  <li>• Sale-ready condition</li>
                  <li>• Market preparation</li>
                </ul>
              </div>

              {/* Complete Home Cleanout */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Home Cleanout
                </h3>
                <p className="text-gray-600 mb-4">
                  Full home cleanout from top to bottom, including all rooms and areas.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete home cleanup</li>
                  <li>• All room coverage</li>
                  <li>• Attic to basement</li>
                  <li>• Comprehensive service</li>
                </ul>
              </div>

              {/* Furniture & Personal Items */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Furniture & Personal Items
                </h3>
                <p className="text-gray-600 mb-4">
                  Careful handling of furniture, personal items, and family heirlooms.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Furniture removal</li>
                  <li>• Personal item handling</li>
                  <li>• Heirloom protection</li>
                  <li>• Respectful service</li>
                </ul>
              </div>

              {/* Appliance & Electronics */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Appliance & Electronics
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional removal and disposal of appliances and electronic equipment.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Appliance removal</li>
                  <li>• Electronics disposal</li>
                  <li>• Safe handling</li>
                  <li>• Proper disposal</li>
                </ul>
              </div>

              {/* Property Restoration */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Restoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete property restoration to sale-ready or rental-ready condition.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Property restoration</li>
                  <li>• Sale preparation</li>
                  <li>• Rental readiness</li>
                  <li>• Market condition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Estate Cleanout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Estate Cleanout Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional estate cleanout provides numerous benefits for families and property owners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Legal Compliance */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  Ensure compliance with probate requirements, estate administration, and legal obligations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Probate compliance</li>
                  <li>• Legal requirements</li>
                  <li>• Documentation support</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Property Value */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Maximize Property Value
                </h3>
                <p className="text-gray-600 mb-4">
                  Clean, well-maintained properties command higher sale prices and faster sales.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Higher sale prices</li>
                  <li>• Faster sales</li>
                  <li>• Market appeal</li>
                  <li>• Investment protection</li>
                </ul>
              </div>

              {/* Family Relief */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Family Relief
                </h3>
                <p className="text-gray-600 mb-4">
                  Relieve family members of the emotional and physical burden of estate cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Emotional support</li>
                  <li>• Physical relief</li>
                  <li>• Professional handling</li>
                  <li>• Family peace</li>
                </ul>
              </div>

              {/* Time Savings */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Time Savings
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional teams work efficiently to complete estate cleanout quickly.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fast completion</li>
                  <li>• Efficient process</li>
                  <li>• Professional speed</li>
                  <li>• Time management</li>
                </ul>
              </div>

              {/* Safety & Health */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Safety & Health
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe handling of potentially hazardous materials and biohazards.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hazardous material handling</li>
                  <li>• Biohazard cleanup</li>
                  <li>• Safety protocols</li>
                  <li>• Health protection</li>
                </ul>
              </div>

              {/* Professional Standards */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional Standards
                </h3>
                <p className="text-gray-600 mb-4">
                  Licensed, insured, and trained professionals handle your estate with care.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Licensed service</li>
                  <li>• Full insurance</li>
                  <li>• Professional training</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Estate Cleanout Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Estate Cleanout Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures efficient and thorough estate cleanout
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  We meet to assess the estate, understand requirements, and create a customized plan.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Item Assessment
                </h3>
                <p className="text-gray-600">
                  We evaluate all items, categorize them, and determine disposal or donation options.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Systematic Cleanout
                </h3>
                <p className="text-gray-600">
                  Our team works systematically through each area, handling items with care and respect.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Final Restoration
                </h3>
                <p className="text-gray-600">
                  We clean, sanitize, and restore the property to its optimal condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estate Situations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Estate Cleanout Situations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We handle estate cleanout for various situations and circumstances
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Probate & Legal */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  📋 Probate & Legal Situations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Estate administration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Probate court requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Legal compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Documentation support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Property preparation</span>
                  </div>
                </div>
              </div>

              {/* Property Transitions */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🏠 Property Transitions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Property sales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Rental preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Property transfers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Market preparation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Investment properties</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Jacksonville Trusts Our Estate Cleanout Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another cleanup company - we're your estate transition partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Estate Cleanout Expertise
                      </h3>
                      <p className="text-gray-600">
                        Years of experience handling estate cleanouts, probate situations, and property transitions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Compassionate Service
                      </h3>
                      <p className="text-gray-600">
                        We understand the emotional nature of estate transitions and provide sensitive, respectful service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Standards
                      </h3>
                      <p className="text-gray-600">
                        Licensed, insured, and trained professionals handle your estate with the highest standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Jacksonville Service
                      </h3>
                      <p className="text-gray-600">
                        We're your neighbors, not a faceless corporation. Local knowledge and community connections matter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Estate Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <p className="text-sm text-primary text-center font-semibold">
                    🏠 Professional Estate Cleanout Available in ALL Areas 🏠
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-teal-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Estate Cleanout?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started with a professional estate cleanout consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-500 hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Consultation</span>
              </Link>
              <a
                href="tel:+1-904-456-3851"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Call (904) 456-3851</span>
              </a>
            </div>
            <p className="mt-6 text-teal-200">
              Professional estate cleanout services for Jacksonville families and property owners
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We also provide these related estate and cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/hoarding-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Hoarding Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  Compassionate hoarding cleanup services
                </p>
              </Link>

              <Link
                href="/furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Furniture Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Professional furniture removal services
                </p>
              </Link>

              <Link
                href="/appliance-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Appliance Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Safe appliance removal and disposal
                </p>
              </Link>

              <Link
                href="/same-day-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Same-Day Service
                </h3>
                <p className="text-sm text-gray-600">
                  Fast same-day junk removal
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
