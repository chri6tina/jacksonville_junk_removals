'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_junk_truck.png"
          alt="Jacksonville Junk Removal Truck"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-primary/80 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent md:hidden"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Local Business Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-secondary fill-secondary drop-shadow-md" />
                ))}
              </div>
              <span className="text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm">Top-Rated in Jacksonville</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                Tackle The Junk. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400 drop-shadow-lg">
                  Take Back Your Space.
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md">
                Jacksonville's most dependable junk removal company. Fast, upfront pricing, and eco-friendly disposal. We do the heavy lifting so you don't have to.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                href="tel:+19044563851"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-5 rounded-lg font-bold text-lg xl:text-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
              >
                <PhoneCall className="w-6 h-6 animate-bounce-gentle" />
                <span>Call (904) 456-3851</span>
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-lg font-bold text-lg xl:text-xl transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
            </div>

            {/* Local Trust Indicators */}
            <div className="pt-10 border-t border-white/20 mt-8">
              <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-4 sm:gap-8 text-sm sm:text-base font-semibold text-gray-300">
                <div className="flex items-center space-x-3 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/5">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                  <span>No Hidden Fees</span>
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
