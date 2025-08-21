import Link from 'next/link'
import { Phone, Calculator, Building, Home, Stethoscope, Utensils, Factory, Hotel, GraduationCap, Church, ShoppingBag, Star, Clock, Shield, Award, DollarSign, MapPin, Info } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function PostConstructionCleanupCalculatorPage() {
  return (
    <>
      <SEOHead
        title="Post-Construction Cleanup Cost Calculator Jacksonville | Free Estimate Tool (904) 456-3851"
        description="Free post-construction cleanup cost calculator for Jacksonville. Get instant estimates for your facility type, size, and requirements. Accurate pricing tool. Call (904) 456-3851"
        keywords="post-construction cleanup calculator Jacksonville, construction cleanup cost estimator Jacksonville, cleanup pricing tool Jacksonville, facility cleanup calculator Florida"
        canonical="/post-construction-cleanup-calculator"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Calculator className="w-16 h-16 text-teal-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Post-Construction Cleanup Cost Calculator
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-teal-300 font-bold">GET INSTANT COST ESTIMATES</span><br />
                Calculate your post-construction cleanup costs in seconds.<br />
                Free, accurate pricing for any facility type and size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#calculator"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Start Calculating</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Get Expert Quote</span>
                </Link>
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
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="residential" className="mr-3" />
                      <Home className="w-6 h-6 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Residential</div>
                        <div className="text-sm text-gray-600">Starting at $2.25/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="commercial" className="mr-3" />
                      <Building className="w-6 h-6 text-gray-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Commercial</div>
                        <div className="text-sm text-gray-600">Starting at $3.00/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="medical" className="mr-3" />
                      <Stethoscope className="w-6 h-6 text-red-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Medical Facility</div>
                        <div className="text-sm text-gray-600">Starting at $4.50/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="restaurant" className="mr-3" />
                      <Utensils className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Restaurant</div>
                        <div className="text-sm text-gray-600">Starting at $4.25/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="industrial" className="mr-3" />
                      <Factory className="w-6 h-6 text-orange-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-900">Industrial</div>
                        <div className="text-sm text-gray-600">Starting at $4.75/sq ft</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-teal-300 cursor-pointer transition-colors">
                      <input type="radio" name="facilityType" value="hotel" className="mr-3" />
                      <Hotel className="w-6 h-6 text-purple-600 mr-3" />
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
                    className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
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
                  <Home className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Residential Home</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Size:</strong> 3,500 sq ft</p>
                  <p><strong>Base Rate:</strong> $2.25/sq ft</p>
                  <p><strong>Base Cost:</strong> $7,875</p>
                  <p><strong>Additional Services:</strong> None</p>
                  <p><strong>Timeline:</strong> Standard (2 days)</p>
                  <div className="border-t pt-2 mt-4">
                    <p className="text-lg font-semibold text-teal-600">Total Estimate: $7,875</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Stethoscope className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Medical Clinic</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Size:</strong> 8,000 sq ft</p>
                  <p><strong>Base Rate:</strong> $4.50/sq ft</p>
                  <p><strong>Base Cost:</strong> $36,000</p>
                  <p><strong>Additional Services:</strong> HVAC + Windows</p>
                  <p><strong>Timeline:</strong> Rush (2 days)</p>
                  <div className="border-t pt-2 mt-4">
                    <p className="text-lg font-semibold text-teal-600">Total Estimate: $42,300</p>
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
                  <Building className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Facility Type</h3>
                </div>
                <p className="text-gray-600">
                  Different industries have different compliance requirements and cleaning standards, 
                  which affects pricing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Square Footage</h3>
                </div>
                <p className="text-gray-600">
                  Larger facilities require more time, materials, and labor, 
                  directly impacting the total cost.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Additional Services</h3>
                </div>
                <p className="text-gray-600">
                  Extra services like HVAC cleaning, window cleaning, or specialized treatments 
                  add to the base cost.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Timeline Requirements</h3>
                </div>
                <p className="text-gray-600">
                  Rush projects may require additional resources and overtime, 
                  while extended timelines can offer discounts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Compliance Standards</h3>
                </div>
                <p className="text-gray-600">
                  Healthcare, food service, and industrial facilities require 
                  specialized cleaning protocols and certifications.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Info className="w-8 h-8 text-teal-600 mr-3" />
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
        <section className="py-16 bg-teal-600">
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
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Professional Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                  <Building className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600">All Services</h3>
                  <p className="text-gray-600 text-sm">Complete service overview</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-comparison" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Calculator className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600">Service Comparison</h3>
                  <p className="text-gray-600 text-sm">Compare all options</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-case-studies" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Award className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-teal-600">Case Studies</h3>
                  <p className="text-gray-600 text-sm">See our success stories</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
