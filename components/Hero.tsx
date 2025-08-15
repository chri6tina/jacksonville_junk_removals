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
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-md px-4 py-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">Jacksonville's Trusted Choice</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Junk Removal
                <br />
                <span className="text-gray-900">Jacksonville, Florida</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Reliable, efficient junk removal services with same-day availability. 
                We handle residential, commercial, and construction debris with professional care.
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

            {/* Trust Indicators */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Free Estimates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">Same Day Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-12 h-[500px] flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-4xl">🚛</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Professional Service
              </h3>
              <p className="text-gray-600 mb-8 max-w-sm">
                Our experienced team provides efficient, reliable junk removal with attention to detail and customer satisfaction.
              </p>
              
              {/* Professional Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24hr</div>
                  <div className="text-sm text-gray-500">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Eco-Friendly</div>
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
