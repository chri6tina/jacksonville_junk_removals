'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Local Business Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-md px-4 py-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-blue-800">Family Owned & Operated in Jacksonville</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Jacksonville Junk Removal
                <br />
                <span className="text-blue-600">Same-Day Service</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Jacksonville's trusted junk removal company with same-day service, fair pricing, and local expertise. 
                We're your neighbors who care about keeping our community clean and clutter-free.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Online Estimator</span>
              </Link>
            </div>

            {/* Local Trust Indicators */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Jacksonville Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Free Local Estimates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Same-Day Jacksonville Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Local Business Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-12 h-[500px] flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-4xl">🏠</div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Your Jacksonville Neighbors
              </h3>
              <p className="text-blue-700 mb-8 max-w-sm">
                We know Jacksonville because we live here too. From the beaches to downtown, we're your local junk removal team.
              </p>
              
              {/* Local Business Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">Local</div>
                  <div className="text-sm text-blue-600">Family Business</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">Same</div>
                  <div className="text-sm text-blue-600">Day Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-800">Fair</div>
                  <div className="text-sm text-blue-600">Local Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
