'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const SpecialOffer = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-md px-4 py-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-medium text-yellow-400">Limited Time Offer</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-yellow-400">$99</span> Quarter-Truck
                <br />
                <span className="text-2xl lg:text-3xl">Special</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Perfect for small cleanouts, garage organization, or moving preparation. 
                Get professional junk removal at an unbeatable price.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Same-day service available</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Eco-friendly disposal included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Professional crew & equipment</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/99-junk-removal"
                className="inline-flex items-center space-x-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <span>Claim Your $99 Special</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/cheap-junk-removal-jacksonville"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                <span>View All Cheap Prices</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-sm text-gray-400">
              * Limited availability. Subject to terms and conditions. Valid for quarter-truck loads only.
            </p>
          </div>

          {/* Professional Visual */}
          <div className="relative">
            <div className="bg-white/10 rounded-lg p-12 h-[500px] flex flex-col items-center justify-center text-center border border-white/20">
              <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <div className="text-gray-900 text-3xl">💰</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">$99 Special</h3>
              <p className="text-gray-300 mb-8 max-w-sm">
                Quarter-truck junk removal with professional service and eco-friendly disposal.
              </p>
              
              {/* What's Included */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">1/4 Truck</div>
                  <div className="text-sm text-gray-300">Load Capacity</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">Same Day</div>
                  <div className="text-sm text-gray-300">Service Available</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">Eco-Friendly</div>
                  <div className="text-sm text-gray-300">Disposal</div>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">No Hidden</div>
                  <div className="text-sm text-gray-300">Fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
