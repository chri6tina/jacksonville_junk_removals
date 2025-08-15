'use client'

import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const ServiceAreas = () => {
  const areas = [
    {
      name: 'Downtown Jacksonville',
      slug: 'junk-removal-downtown',
      description: 'Commercial and residential junk removal in the heart of Jacksonville',
      image: '🏙️'
    },
    {
      name: 'Jacksonville Beach',
      slug: 'junk-removal-jacksonville-beach',
      description: 'Beachside junk removal and cleanup services',
      image: '🏖️'
    },
    {
      name: 'Riverside',
      slug: 'junk-removal-riverside',
      description: 'Historic district junk removal and property cleanup',
      image: '🌳'
    },
    {
      name: 'San Marco',
      slug: 'junk-removal-san-marco',
      description: 'Elegant neighborhood junk removal services',
      image: '🏛️'
    },
    {
      name: 'Mandarin',
      slug: 'junk-removal-mandarin',
      description: 'Suburban area junk removal and estate cleanouts',
      image: '🍊'
    },
    {
      name: 'Orange Park',
      slug: 'junk-removal-orange-park',
      description: 'Clay County junk removal and commercial cleanouts',
      image: '🟠'
    },
    {
      name: 'Southside',
      slug: 'junk-removal-southside',
      description: 'Growing area junk removal and construction debris',
      image: '🏘️'
    },
    {
      name: 'Arlington',
      slug: 'junk-removal-arlington',
      description: 'Family neighborhood junk removal and garage cleanouts',
      image: '🏠'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve Jacksonville and surrounding areas with professional junk removal services. 
            Find your neighborhood below for local service information.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.slug}
              className="group"
            >
              <Link href={`/${area.slug}`}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-gray-900 transition-all duration-200 hover:shadow-md">
                  {/* Area Icon */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-200">
                    <span className="text-2xl">{area.image}</span>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                      {area.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center space-x-2 text-gray-900 font-medium group-hover:translate-x-1 transition-transform duration-200">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-lg p-12 text-white">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <MapPin className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Don't see your area?</h3>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We may still be able to help! Contact us to check availability in your neighborhood 
              or to discuss custom junk removal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="tel:+19047423531"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call (904) 742-3531
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
