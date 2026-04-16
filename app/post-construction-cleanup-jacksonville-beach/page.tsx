import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Waves, Sun, Anchor, Fish, TreePine } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Jacksonville Beach | Beach Area Construction Site Cleanup (904) 456-3851',
  description: 'Jacksonville Beach post-construction cleanup specialists. Serving Atlantic Beach, Neptune Beach, Ponte Vedra Beach. Beach area construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851',
  keywords: 'post-construction cleanup Jacksonville Beach, construction cleanup Atlantic Beach, renovation cleaning Neptune Beach, Ponte Vedra Beach construction cleanup, beach area debris removal Jacksonville Beach FL',
  alternates: {
    canonical: '/post-construction-cleanup-jacksonville-beach',
  },
}

export default function JacksonvilleBeachPostConstructionCleanupPage() {
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
  "serviceType": "Post-Construction Cleanup Jacksonville Beach",
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
  "description": "Jacksonville Beach post-construction cleanup specialists. Serving Atlantic Beach, Neptune Beach, Ponte Vedra Beach. Beach area construction cleanup, renovation cleaning, debris removal. Call (904) 456-3851"
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
                  Jacksonville Beach <br /> <span className="text-blue-300">Post-Construction Cleanup</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">BEACH AREA CONSTRUCTION CLEANUP SPECIALISTS</span><br /> Serving Jacksonville Beach, Atlantic Beach, Neptune Beach & Ponte Vedra Beach<br /> Transform construction sites into pristine, beach-ready spaces.
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

        {/* Beach Area Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏖️ JACKSONVILLE BEACH AREA POST-CONSTRUCTION CLEANUP SPECIALISTS 🏖️
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Beach Communities • Same-Day Service Available
            </p>
          </div>
        </section>

        {/* Beach Communities We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beach Communities We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Jacksonville Beach area communities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Jacksonville Beach */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
                <p className="text-gray-600 mb-4">
                  Main beach community with hotels, restaurants, and residential areas
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Beachfront Properties</div>
                  <div>• Hotel Renovations</div>
                  <div>• Restaurant Construction</div>
                  <div>• Residential Projects</div>
                </div>
              </div>

              {/* Atlantic Beach */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Waves className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Atlantic Beach</h3>
                <p className="text-gray-600 mb-4">
                  Upscale residential area with boutique shops and dining
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Luxury Homes</div>
                  <div>• Boutique Retail</div>
                  <div>• Fine Dining</div>
                  <div>• Beach Cottages</div>
                </div>
              </div>

              {/* Neptune Beach */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Sun className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Neptune Beach</h3>
                <p className="text-gray-600 mb-4">
                  Family-friendly community with parks and local businesses
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Family Homes</div>
                  <div>• Local Businesses</div>
                  <div>• Community Centers</div>
                  <div>• Beach Parks</div>
                </div>
              </div>

              {/* Ponte Vedra Beach */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ponte Vedra Beach</h3>
                <p className="text-gray-600 mb-4">
                  Luxury resort area with golf courses and high-end properties
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Luxury Resorts</div>
                  <div>• Golf Courses</div>
                  <div>• High-End Homes</div>
                  <div>• Spa Facilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beach-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Beach Area Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the unique challenges of beach area construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Salt Air Protection */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Shield className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Salt Air Protection</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning protocols to protect against salt air corrosion and damage to newly installed materials and finishes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Corrosion-resistant cleaning solutions</li>
                  <li>• Protective coating applications</li>
                  <li>• Salt residue removal</li>
                  <li>• Long-term protection strategies</li>
                </ul>
              </div>

              {/* Beachfront Property Expertise */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Beachfront Properties</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Experience with beachfront construction challenges including sand management, moisture control, and coastal building codes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sand and debris removal</li>
                  <li>• Moisture damage assessment</li>
                  <li>• Coastal code compliance</li>
                  <li>• Weather protection measures</li>
                </ul>
              </div>

              {/* Resort & Hotel Specialization */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Star className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Resort & Hotel</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Specialized cleaning for luxury resorts, hotels, and vacation rentals with high guest experience standards.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Luxury finish protection</li>
                  <li>• Guest area preparation</li>
                  <li>• 5-star cleanliness standards</li>
                  <li>• Quick turnaround service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beach Area Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Beach Area Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Jacksonville Beach communities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Jacksonville Beach Hotel */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jacksonville Beach Hotel Renovation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Jacksonville Beach Oceanfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
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
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Hotel reopened on schedule with pristine, beach-ready guest areas and protected luxury finishes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Atlantic Beach Luxury Home */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Atlantic Beach Luxury Home</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Atlantic Beach Waterfront</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Size:</span>
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
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Luxury home ready for immediate occupancy with protected finishes and coastal-optimized cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beach Area Benefits */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Beach Area Projects?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Local expertise combined with beach-specific knowledge and rapid response capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Beach Expertise</h3>
                <p className="text-gray-600">Deep understanding of beach area construction challenges and local building codes</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">Same-day service available for urgent beach area cleanup needs</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beach Protection</h3>
                <p className="text-gray-600">Specialized protocols to protect against salt air and coastal elements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="jacksonville-beach"
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
              Ready for Beach Area Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and professional service for your Jacksonville Beach area project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Beach Area Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Beach Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
