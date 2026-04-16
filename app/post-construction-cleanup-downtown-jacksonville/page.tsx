import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Building2, Car, Train, Bus, Landmark, ShoppingBag, Coffee, Briefcase } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Downtown Jacksonville | Urban Construction Site Cleanup (904) 456-3851',
  description: 'Downtown Jacksonville post-construction cleanup specialists. Serving urban core, business district, and city center. Downtown construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup downtown Jacksonville, urban construction cleanup Jacksonville, city center renovation cleaning, downtown debris removal Jacksonville FL, business district cleanup',
  alternates: {
    canonical: '/post-construction-cleanup-downtown-jacksonville',
  },
}

export default function DowntownJacksonvillePostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
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
                  Downtown Jacksonville <br /> <span className="text-blue-300">Post-Construction Cleanup</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">URBAN CONSTRUCTION CLEANUP SPECIALISTS</span><br /> Serving Downtown, Business District & Urban Core<br /> Transform construction sites into pristine, business-ready spaces.
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

        {/* Downtown Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏙️ DOWNTOWN JACKSONVILLE POST-CONSTRUCTION CLEANUP SPECIALISTS 🏙️
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving Urban Core & Business District • 24/7 Emergency Service
            </p>
          </div>
        </section>

        {/* Downtown Districts We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Downtown Districts We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Downtown Jacksonville business and residential areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Financial District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Landmark className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial District</h3>
                <p className="text-gray-600 mb-4">
                  Banking centers, investment firms, and financial services headquarters
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Banking Centers</div>
                  <div>• Investment Firms</div>
                  <div>• Financial Services</div>
                  <div>• Corporate Offices</div>
                </div>
              </div>

              {/* Business District */}
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
                  <div>• Law Firms</div>
                </div>
              </div>

              {/* Entertainment District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Entertainment District</h3>
                <p className="text-gray-600 mb-4">
                  Restaurants, bars, theaters, and entertainment venues
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Restaurants & Bars</div>
                  <div>• Theaters & Venues</div>
                  <div>• Entertainment</div>
                  <div>• Nightlife</div>
                </div>
              </div>

              {/* Retail District */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Retail District</h3>
                <p className="text-gray-600 mb-4">
                  Shopping centers, boutiques, and retail establishments
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Shopping Centers</div>
                  <div>• Boutiques</div>
                  <div>• Retail Stores</div>
                  <div>• Malls</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urban-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Urban Construction Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique challenges of downtown construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* High-Rise Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building2 className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">High-Rise Expertise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning protocols for high-rise buildings, office towers, and multi-story structures with unique access and safety requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Elevator and stairwell cleaning</li>
                  <li>• High-rise safety protocols</li>
                  <li>• Window and facade cleaning</li>
                  <li>• HVAC system maintenance</li>
                </ul>
              </div>

              {/* Urban Logistics */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Truck className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Urban Logistics</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Efficient debris removal and material handling in congested urban environments with limited access and strict timing requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Traffic coordination</li>
                  <li>• Loading dock management</li>
                  <li>• Waste disposal logistics</li>
                  <li>• Minimal disruption protocols</li>
                </ul>
              </div>

              {/* Business Continuity */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Continuity</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Rapid cleanup services to minimize business disruption and ensure quick return to operations for downtown businesses.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• After-hours cleaning</li>
                  <li>• Weekend service</li>
                  <li>• Emergency response</li>
                  <li>• Minimal downtime</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Downtown Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Downtown Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Downtown Jacksonville
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Financial Center Renovation */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Financial Center Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Financial District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
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
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Financial center reopened on Monday with pristine, professional environment and zero business disruption.
                    </p>
                  </div>
                </div>
              </div>

              {/* Downtown Hotel Construction */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Downtown Hotel Construction</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Entertainment District</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
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
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Hotel opened on schedule with 5-star cleanliness standards and protected luxury finishes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downtown Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Downtown Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Urban expertise combined with downtown knowledge and rapid response capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Urban Expertise</h3>
                <p className="text-gray-600">Deep understanding of downtown construction challenges and urban logistics</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock service for downtown businesses with minimal disruption</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Focus</h3>
                <p className="text-gray-600">Specialized protocols to maintain business operations during cleanup</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="downtown-jacksonville"
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
              Ready for Downtown Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Downtown Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Downtown Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Urban Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
