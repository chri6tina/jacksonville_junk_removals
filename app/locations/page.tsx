import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Leaf, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Service Areas - Jacksonville & Surrounding Areas',
  description: 'Professional junk removal services in Jacksonville, Florida and surrounding areas. Serving Downtown, Riverside, San Marco, Mandarin, Arlington, Orange Park, Southside, and Jacksonville Beach.',
  keywords: 'junk removal Jacksonville, service areas, Downtown Jacksonville, Riverside, San Marco, Mandarin, Arlington, Orange Park, Southside, Jacksonville Beach',
  alternates: {
    canonical: '/locations',
  },
}

const serviceAreas = [
  {
    name: 'Downtown Jacksonville',
            slug: 'junk-removal-downtown-jacksonville',
    description: 'Commercial and residential junk removal in the heart of Jacksonville',
    image: '🏙️',
    features: ['Commercial Cleanouts', 'Office Furniture Removal', 'Construction Debris', 'Same-Day Service'],
    startingPrice: 150,
    popular: true
  },
  {
    name: 'Jacksonville Beach',
    slug: 'junk-removal-jacksonville-beach',
    description: 'Beachside junk removal and cleanup services',
    image: '🏖️',
    features: ['Residential Cleanouts', 'Beach House Cleanup', 'Seasonal Services', 'Eco-Friendly Disposal'],
    startingPrice: 125,
    popular: false
  },
  {
    name: 'Riverside',
    slug: 'junk-removal-riverside',
    description: 'Historic district junk removal and property cleanup',
    image: '🌳',
    features: ['Historic Home Cleanouts', 'Estate Cleanouts', 'Garage Organization', 'Donation Services'],
    startingPrice: 150,
    popular: true
  },
  {
    name: 'San Marco',
    slug: 'junk-removal-san-marco',
    description: 'Elegant neighborhood junk removal services',
    image: '🏛️',
    features: ['Luxury Home Cleanouts', 'Fine Furniture Removal', 'Professional Service', 'Discrete Operations'],
    startingPrice: 175,
    popular: false
  },
  {
    name: 'Mandarin',
    slug: 'junk-removal-mandarin',
    description: 'Suburban area junk removal and estate cleanouts',
    image: '🍊',
    features: ['Family Home Cleanouts', 'Estate Sales', 'Garage Cleanouts', 'Moving Preparation'],
    startingPrice: 150,
    popular: false
  },
  {
    name: 'Orange Park',
    slug: 'junk-removal-orange-park',
    description: 'Clay County junk removal and commercial cleanouts',
    image: '🟠',
    features: ['Clay County Service', 'Commercial Cleanouts', 'Construction Debris', 'Bulk Removal'],
    startingPrice: 175,
    popular: false
  },
  {
    name: 'Southside',
    slug: 'junk-removal-southside',
    description: 'Growing area junk removal and construction debris',
    image: '🏘️',
    features: ['New Construction Cleanup', 'Residential Development', 'Commercial Services', 'Fast Response'],
    startingPrice: 150,
    popular: false
  },
  {
    name: 'Arlington',
    slug: 'junk-removal-arlington',
    description: 'Family neighborhood junk removal and garage cleanouts',
    image: '🏠',
    features: ['Family Home Services', 'Garage Organization', 'Moving Cleanup', 'Donation Focus'],
    startingPrice: 150,
    popular: false
  }
]

const servicesByArea = [
  {
    service: 'Mattress Removal',
    areas: ['Riverside', 'Southside', 'San Marco', 'Mandarin', 'Jacksonville Beach'],
    startingPrice: 75,
    description: 'Professional mattress and box spring removal with eco-friendly disposal'
  },
  {
    service: 'Commercial Cleanouts',
    areas: ['Downtown Jacksonville', 'Orange Park', 'Southside'],
    startingPrice: 200,
    description: 'Office, retail, and commercial space cleanup services'
  },
  {
    service: 'Construction Debris',
    areas: ['Southside', 'Orange Park', 'Downtown Jacksonville'],
    startingPrice: 175,
    description: 'Construction waste and demolition debris removal'
  },
  {
    service: 'Estate Cleanouts',
    areas: ['Riverside', 'San Marco', 'Mandarin', 'Arlington'],
    startingPrice: 300,
    description: 'Complete estate and property cleanout services'
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Junk Removal Service Areas
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional junk removal services throughout Jacksonville, Florida and surrounding areas. 
            We're your local experts for residential, commercial, and construction cleanup needs.
          </p>
          
          {/* Quick Contact */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 742-3531</span>
            </a>
            <Link
              href="/estimation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Jacksonville Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve Jacksonville and surrounding communities with professional, 
              eco-friendly junk removal services. Find your area below for local service information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div
                key={area.slug}
                className="group"
              >
                <Link href={`/${area.slug}`}>
                  <div className="relative bg-white border border-gray-200 rounded-lg p-6 h-full hover:border-gray-900 transition-all duration-200 hover:shadow-md">
                    {/* Popular Badge */}
                    {area.popular && (
                      <div className="absolute -top-2 left-4">
                        <div className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                          ⭐ Popular
                        </div>
                      </div>
                    )}
                    
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
                      
                      {/* Starting Price */}
                      <div className="mb-4">
                        <div className="text-lg font-bold text-gray-900">
                          Starting at ${area.startingPrice}
                        </div>
                        <p className="text-xs text-gray-500">No hidden fees</p>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-1 mb-4">
                        {area.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center space-x-2 text-gray-900 font-medium group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-sm">View Services</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services by Area Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Services by Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different areas have different needs. Here are our most requested services 
              organized by neighborhood and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesByArea.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.service}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    Starting at ${service.startingPrice}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Available in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  href="/services"
                  className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
                >
                  View All Services →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Local Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Local Jacksonville Junk Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're your neighbors, and we understand the unique needs of Jacksonville communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Knowledge</h3>
              <p className="text-gray-600">
                We know Jacksonville neighborhoods, local regulations, and disposal facilities. 
                This means faster, more efficient service for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Response</h3>
              <p className="text-gray-600">
                Being local means we can respond quickly to your needs. Same-day service 
                is often available, and we're never far away.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We're invested in Jacksonville's future. We donate usable items to local 
                charities and use eco-friendly disposal methods.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started in Your Area?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free quote tailored to your specific location and needs. 
            We serve all of Jacksonville and surrounding areas.
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
