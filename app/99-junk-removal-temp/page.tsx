import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Truck, Leaf, Shield, Clock, DollarSign } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: '$99 Quarter-Truck Special - Jacksonville Junk Removals',
  description: 'Limited time $99 quarter-truck junk removal special in Jacksonville, Florida. Same-day service, eco-friendly disposal, no hidden fees. Licensed and insured.',
  keywords: '$99 junk removal Jacksonville, quarter truck special, same day service, eco-friendly disposal',
}

export default function SpecialOfferPage() {
  return (
    <>
      <SEOHead
        title="$99 Junk Removal Special Jacksonville | Limited Time Offer | (904) 456-3851"
        description="Jacksonville $99 junk removal special offer. Limited time deal on quarter-truck cleanouts. Professional service, no hidden fees. Call (904) 456-3851 to claim your special price."
        keywords="$99 junk removal Jacksonville, junk removal special Jacksonville, quarter-truck special Jacksonville, limited time offer Jacksonville, Jacksonville junk removal deal"
        canonical="/99-junk-removal-temp"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
              <span className="text-sm font-bold">LIMITED TIME OFFER</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400">$99</span> Quarter-Truck
              <br />
              <span className="text-2xl lg:text-3xl">Special</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional junk removal service at an unbeatable price. Perfect for small cleanouts, 
              garage organization, or moving preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#eligibility"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Check Eligibility
              </Link>
              <a
                href="tel:+19047423531"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Your $99 Special
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a complete junk removal experience at an incredible price
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quarter-Truck Load</h3>
              <p className="text-gray-600">
                Perfect capacity for small cleanouts, garage organization, or moving preparation. 
                Approximately 2-3 cubic yards of junk removal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Same-Day Service</h3>
              <p className="text-gray-600">
                Available same-day for urgent cleanouts. Flexible scheduling to fit your timeline. 
                Professional crew arrives on time, ready to work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">
                We recycle everything possible and donate usable items to local charities. 
                Responsible disposal that's good for the environment and community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our $99 Special?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, transparent pricing, and peace of mind included
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    Fully licensed, bonded, and insured for your protection. Professional team 
                    trained in proper disposal methods and safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
                  <p className="text-gray-600">
                    What you see is what you pay. $99 is the total price - no additional charges, 
                    no surprises, no hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                  <p className="text-gray-600">
                    Proper tools and equipment for safe, efficient removal. Our crew handles 
                    everything from heavy lifting to careful item handling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Perfect For:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Garage organization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Small basement cleanouts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Moving preparation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Furniture removal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Appliance disposal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-700">Small renovation debris</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Form Section */}
      <div id="eligibility" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Check Your Eligibility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to see if you qualify for our $99 special offer
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="(904) 742-3531"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="32202"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Describe your junk removal project and estimated amount..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Check Eligibility
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Terms & Conditions</h2>
            <div className="text-gray-300 space-y-4 text-sm">
              <p>
                * Limited availability. Subject to terms and conditions. Valid for quarter-truck loads only. 
                Service area restrictions may apply. Not valid with other offers or discounts.
              </p>
              <p>
                ** Same-day service subject to availability and scheduling. Eco-friendly disposal includes 
                recycling and donation of usable items. Professional crew and equipment included.
              </p>
              <p>
                *** $99 is the total price for qualified projects. Additional fees may apply for 
                hazardous materials, special handling, or projects exceeding quarter-truck capacity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Claim Your $99 Special?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't miss out on this limited-time offer. Contact us today to schedule your 
            quarter-truck junk removal service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (904) 742-3531
            </a>
            <Link
              href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
