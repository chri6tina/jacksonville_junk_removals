import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Building2, Car, Train, Bus, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Southside Jacksonville | Commercial & Residential Cleanup (904) 456-3851',
  description: 'Southside Jacksonville post-construction cleanup specialists. Serving Southside, Baymeadows, and surrounding areas. Commercial and residential construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Southside Jacksonville, Southside construction cleanup, Baymeadows cleanup, Jacksonville commercial construction cleanup, residential renovation cleaning',
  alternates: {
    canonical: '/post-construction-cleanup-southside-jacksonville',
  },
}

export default function SouthsideJacksonvillePostConstructionCleanupPage() {
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
  "serviceType": "Post-Construction Cleanup Southside Jacksonville",
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
  "description": "Southside Jacksonville post-construction cleanup specialists. Serving Southside, Baymeadows, and surrounding areas. Commercial and residential construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851"
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
                  Southside Jacksonville <br /> <span className="text-blue-300">Post-Construction Cleanup</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">SOUTHSIDE CONSTRUCTION CLEANUP SPECIALISTS</span><br /> Serving Southside, Baymeadows & Surrounding Areas<br /> Transform construction sites into pristine, business-ready spaces.
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

        {/* Southside Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏢 SOUTHSIDE JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏢
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving Southside & Baymeadows • Commercial & Residential Experts
            </p>
          </div>
        </section>

        {/* Southside Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Southside Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Southside Jacksonville neighborhoods and business districts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Baymeadows */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Baymeadows</h3>
                <p className="text-gray-600 mb-4">
                  Major commercial corridor with office buildings, retail centers, and mixed-use developments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Office Buildings</div>
                  <div>• Retail Centers</div>
                  <div>• Medical Facilities</div>
                  <div>• Mixed-Use Projects</div>
                </div>
              </div>

              {/* Southside Business District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business District</h3>
                <p className="text-gray-600 mb-4">
                  Corporate headquarters, professional services, and business centers
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Corporate HQs</div>
                  <div>• Professional Services</div>
                  <div>• Business Centers</div>
                  <div>• Financial Services</div>
                </div>
              </div>

              {/* Residential Communities */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Communities</h3>
                <p className="text-gray-600 mb-4">
                  Suburban neighborhoods with single-family homes, townhouses, and condominiums
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Single Family Homes</div>
                  <div>• Townhouses</div>
                  <div>• Condominiums</div>
                  <div>• New Construction</div>
                </div>
              </div>

              {/* Industrial Areas */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industrial Areas</h3>
                <p className="text-gray-600 mb-4">
                  Manufacturing facilities, warehouses, and industrial complexes
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Manufacturing</div>
                  <div>• Warehouses</div>
                  <div>• Distribution Centers</div>
                  <div>• Industrial Complexes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Southside-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Southside Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique needs of Southside Jacksonville's diverse commercial and residential construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Commercial Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Commercial Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning for Southside's commercial properties, office buildings, retail centers, and business districts with professional standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Office building construction</li>
                  <li>• Retail center buildouts</li>
                  <li>• Medical facility projects</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Residential Services */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Residential Services</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive cleanup for Southside's residential communities, from new construction to renovation projects with attention to detail.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• New home construction</li>
                  <li>• Renovation projects</li>
                  <li>• Townhouse developments</li>
                  <li>• Condominium projects</li>
                </ul>
              </div>

              {/* Industrial Projects */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building2 className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Industrial Projects</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized knowledge of Southside's industrial areas, including manufacturing facilities, warehouses, and distribution centers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manufacturing facilities</li>
                  <li>• Warehouse construction</li>
                  <li>• Distribution centers</li>
                  <li>• Industrial standards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Southside Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Southside Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Baymeadows Office Complex */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Baymeadows Office Complex</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Baymeadows Business District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">85,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">After-hours work, tenant coordination</span>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Office complex opened on schedule with pristine professional environment and satisfied tenants.
                    </p>
                  </div>
                </div>
              </div>

              {/* Southside Residential Development */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Southside Residential Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Southside Residential</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
                    <span className="text-gray-600">45,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">New construction, move-in ready standards</span>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Residential development completed with move-in ready standards and enhanced property values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Southside Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Southside Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Commercial and residential expertise combined with Southside knowledge and professional service standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Expertise</h3>
                <p className="text-gray-600">Specialized knowledge of Southside's commercial construction and business needs</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Accommodating schedules for Southside businesses and residents</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Standards</h3>
                <p className="text-gray-600">Committed to maintaining Southside's professional business environment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="southside"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Southside Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Southside Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Southside Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Southside Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}