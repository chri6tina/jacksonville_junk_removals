import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Calculator, Building, Home, Stethoscope, Utensils, Factory, Hotel, GraduationCap, Church, ShoppingBag, Star, Clock, Shield, Award, DollarSign, MapPin, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Cost Calculator Jacksonville | Free Estimate Tool (904) 456-3851',
  description: 'Free post-construction cleanup cost calculator for Jacksonville. Get instant estimates for your facility type, size, and requirements. Accurate pricing tool. Call (904) 456-3851',
  keywords: 'post-construction cleanup calculator Jacksonville, construction cleanup cost estimator Jacksonville, cleanup pricing tool Jacksonville, facility cleanup calculator Florida',
  alternates: {
    canonical: '/post-construction-cleanup-calculator',
  },
}

export default function PostConstructionCleanupCalculatorPage() {
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
  "serviceType": "Post-Construction Cleanup Cost Calculator Jacksonville",
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
  "description": "Free post-construction cleanup cost calculator for Jacksonville. Get instant estimates for your facility type, size, and requirements. Accurate pricing tool. Call (904) 456-3851"
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
                  Post-Construction Cleanup Cost Calculator
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-teal-300 font-bold">GET INSTANT COST ESTIMATES</span><br /> Calculate your post-construction cleanup costs in seconds.<br /> Free, accurate pricing for any facility type and size.
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

        {/* Calculator Section */}
        <section id="calculator" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cost Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to get your instant cost estimate
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <form className="space-y-8">
                {/* Facility Type Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    <Building className="w-5 h-5 inline mr-2" />
                    Select Your Facility Type
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="residential" className="mr-3" />
                      <Home className="w-6 h-6 text-secondary mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Residential</div>
                        <div className="text-sm text-gray-600">Starting at $2.25/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="commercial" className="mr-3" />
                      <Building className="w-6 h-6 text-gray-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Commercial</div>
                        <div className="text-sm text-gray-600">Starting at $3.00/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="medical" className="mr-3" />
                      <Stethoscope className="w-6 h-6 text-secondary mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Medical Facility</div>
                        <div className="text-sm text-gray-600">Starting at $4.50/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="restaurant" className="mr-3" />
                      <Utensils className="w-6 h-6 text-secondary mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Restaurant</div>
                        <div className="text-sm text-gray-600">Starting at $4.25/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="industrial" className="mr-3" />
                      <Factory className="w-6 h-6 text-orange-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Industrial</div>
                        <div className="text-sm text-gray-600">Starting at $4.75/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-secondary/30 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="hotel" className="mr-3" />
                      <Hotel className="w-6 h-6 text-secondary mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Hotel</div>
                        <div className="text-sm text-gray-600">Starting at $2.75/sq ft</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facility Size */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    <MapPin className="w-5 h-5 inline mr-2" />
                    Facility Size (Square Feet)
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <input type="radio" name="size" value="small" className="mr-2" />
                      <label className="font-medium text-gray-900">Small</label>
                      <div className="text-sm text-gray-600">Under 5,000 sq ft</div>
                    </div>
                    <div className="text-center">
                      <input type="radio" name="size" value="medium" className="mr-2" />
                      <label className="font-medium text-gray-900">Medium</label>
                      <div className="text-sm text-gray-600">5,000 - 25,000 sq ft</div>
                    </div>
                    <div className="text-center">
                      <input type="radio" name="size" value="large" className="mr-2" />
                      <label className="font-medium text-gray-900">Large</label>
                      <div className="text-sm text-gray-600">Over 25,000 sq ft</div>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    <Star className="w-5 h-5 inline mr-2" />
                    Additional Services (Optional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" name="hvac" className="mr-3" />
                      <label className="font-medium text-gray-900">HVAC System Cleaning</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" name="windows" className="mr-3" />
                      <label className="font-medium text-gray-900">Window Cleaning</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" name="carpet" className="mr-3" />
                      <label className="font-medium text-gray-900">Carpet Cleaning</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" name="deodorizing" className="mr-3" />
                      <label className="font-medium text-gray-900">Deodorizing</label>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Project Timeline
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <input type="radio" name="timeline" value="standard" className="mr-2" />
                      <label className="font-medium text-gray-900">Standard</label>
                      <div className="text-sm text-gray-600">2-3 days</div>
                    </div>
                    <div className="text-center">
                      <input type="radio" name="timeline" value="rush" className="mr-2" />
                      <label className="font-medium text-gray-900">Rush</label>
                      <div className="text-sm text-gray-600">1-2 days (+15%)</div>
                    </div>
                    <div className="text-center">
                      <input type="radio" name="timeline" value="extended" className="mr-2" />
                      <label className="font-medium text-gray-900">Extended</label>
                      <div className="text-sm text-gray-600">4-5 days (-10%)</div>
                    </div>
                  </div>
                </div>

                {/* Calculate Button */}
                <div className="text-center pt-6">
                  <button
                    type="button"
                    className="bg-primary hover:opacity-90 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Calculator className="w-6 h-6 inline mr-3" />
                    Calculate Estimate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Sample Calculation Results */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sample Calculations
              </h2>
              <p className="text-xl text-gray-600">
                See how our pricing works with real examples
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Residential Home</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Size:</strong> 3,500 sq ft</p>
                  <p><strong>Base Rate:</strong> $2.25/sq ft</p>
                  <p><strong>Base Cost:</strong> $7,875</p>
                  <p><strong>Additional Services:</strong> None</p>
                  <p><strong>Timeline:</strong> Standard (2 days)</p>
                  <div className="border-t pt-2 mt-4">
                    <p className="text-lg font-semibold text-secondary">Total Estimate: $7,875</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Stethoscope className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Medical Clinic</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Size:</strong> 8,000 sq ft</p>
                  <p><strong>Base Rate:</strong> $4.50/sq ft</p>
                  <p><strong>Base Cost:</strong> $36,000</p>
                  <p><strong>Additional Services:</strong> HVAC + Windows</p>
                  <p><strong>Timeline:</strong> Rush (2 days)</p>
                  <div className="border-t pt-2 mt-4">
                    <p className="text-lg font-semibold text-secondary">Total Estimate: $42,300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Affects Your Cleanup Cost?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the key factors that determine your project pricing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Facility Type</h3>
                </div>
                <p className="text-gray-600">
                  Different industries have different compliance requirements and cleaning standards, 
                  which affects pricing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Square Footage</h3>
                </div>
                <p className="text-gray-600">
                  Larger facilities require more time, materials, and labor, 
                  directly impacting the total cost.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Additional Services</h3>
                </div>
                <p className="text-gray-600">
                  Extra services like HVAC cleaning, window cleaning, or specialized treatments 
                  add to the base cost.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Timeline Requirements</h3>
                </div>
                <p className="text-gray-600">
                  Rush projects may require additional resources and overtime, 
                  while extended timelines can offer discounts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Compliance Standards</h3>
                </div>
                <p className="text-gray-600">
                  Healthcare, food service, and industrial facilities require 
                  specialized cleaning protocols and certifications.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Info className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Project Complexity</h3>
                </div>
                <p className="text-gray-600">
                  Factors like construction debris type, accessibility, 
                  and finish protection requirements affect pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Accurate Estimate?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Use our calculator for instant estimates, or contact us for a detailed professional quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Professional Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Our Experts</span>
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
                  <Building className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">All Services</h3>
                  <p className="text-gray-600 text-sm">Complete service overview</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-comparison" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Calculator className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Service Comparison</h3>
                  <p className="text-gray-600 text-sm">Compare all options</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-case-studies" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Award className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Case Studies</h3>
                  <p className="text-gray-600 text-sm">See our success stories</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
