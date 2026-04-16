import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, DollarSign, Shield, Leaf, Star, CheckCircle, Truck, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cheap Junk Removal Southside Jacksonville FL | $99 Starting Price | Growing Area',
  description: 'Cheap junk removal in Southside Jacksonville FL starting at $99. Same-day service for new construction cleanup, residential development, and Southside apartments. Licensed, insured, eco-friendly disposal. Call (904) 742-3531 for free quote.',
  keywords: 'cheap junk removal Southside Jacksonville, affordable junk removal Southside Jacksonville FL, budget junk removal Southside Jacksonville, Southside Jacksonville junk removal prices, cheap hauling Southside Jacksonville, low cost junk removal Southside Jacksonville, new construction cleanup Southside Jacksonville, residential development Southside Jacksonville',
  alternates: {
    canonical: '/cheap-junk-removal-southside',
  },
  openGraph: {
    title: 'Cheap Junk Removal Southside Jacksonville FL | $99 Starting Price',
    description: 'Cheap junk removal in Southside Jacksonville FL starting at $99. Same-day service for new construction cleanup, residential development, and Southside apartments.',
    url: 'https://jacksonvillejunkremovals.com/cheap-junk-removal-southside',
    siteName: 'Jacksonville Junk Removals',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheap Junk Removal Southside Jacksonville FL | $99 Starting Price',
    description: 'Cheap junk removal in Southside Jacksonville FL starting at $99. Same-day service for new construction cleanup, residential development, and Southside apartments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const pricingTiers = [
  {
    name: 'Quarter-Truck Special',
    price: '$99',
    originalPrice: '$150',
    savings: '$51',
    description: 'Perfect for small cleanouts, new construction cleanup, or Southside apartment moves',
    capacity: '1/4 Truck Load',
    includes: [
      'Up to 1/4 truckload of junk',
      'Same-day service available',
      'Eco-friendly disposal',
      'No hidden fees',
      'Free estimate'
    ],
    popular: true
  },
  {
    name: 'Half-Truck Deal',
    price: '$199',
    originalPrice: '$299',
    savings: '$100',
    description: 'Great for medium cleanouts, residential development, or Southside estate cleanouts',
    capacity: '1/2 Truck Load',
    includes: [
      'Up to 1/2 truckload of junk',
      'Priority scheduling',
      'Eco-friendly disposal',
      'No hidden fees',
      'Free estimate'
    ],
    popular: false
  },
  {
    name: 'Full-Truck Value',
    price: '$299',
    originalPrice: '$399',
    savings: '$100',
    description: 'Best for large cleanouts, commercial services, or major Southside projects',
    capacity: 'Full Truck Load',
    includes: [
      'Up to full truckload of junk',
      'Priority scheduling',
      'Eco-friendly disposal',
      'No hidden fees',
      'Free estimate'
    ],
    popular: false
  }
]

const whyChooseUs = [
  {
    icon: DollarSign,
    title: 'Best Prices in Southside',
    description: 'We beat any written estimate by 10%. If you find a lower price, we\'ll match it and beat it.'
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Need junk removed today? We offer same-day service for most requests in Southside Jacksonville.'
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind. We protect you and your property.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We recycle and donate whenever possible, keeping Southside Jacksonville green and clean.'
  }
]

const southsideAreas = [
  'Southside Boulevard', 'Baymeadows Road', 'Gate Parkway', 'Touchton Road', 
  'Southside Business District', 'Deerwood Park', 'Tinseltown', 'Avenues Mall'
]

const southsideServices = [
  'New Construction Cleanup', 'Residential Development', 'Commercial Services', 
  'Fast Response', 'Construction Debris', 'Development Cleanup'
]

export default function CheapJunkRemovalSouthsidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⭐ #1 CHEAP JUNK REMOVAL IN SOUTHSIDE JACKSONVILLE
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-400">Cheap</span> Junk Removal
            <br />
            <span className="text-2xl lg:text-3xl">Southside Jacksonville, FL</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The most affordable junk removal service in Southside Jacksonville. Starting at just <strong className="text-blue-400">$99</strong> for quarter-truck loads. 
            Same-day service, licensed & insured, eco-friendly disposal in this growing area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+19047423531"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (904) 742-3531</span>
            </a>
            <Link
              href="#pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              View Our Prices
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">$99</div>
              <div className="text-sm text-gray-300">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Same Day</div>
              <div className="text-sm text-gray-300">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Southside Jacksonville's Most Affordable Junk Removal Prices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. We guarantee the best prices in Southside Jacksonville or we'll beat any written estimate by 10%.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-lg p-8 ${
                  tier.popular 
                    ? 'border-blue-600 shadow-lg transform scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all duration-200`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-lg text-gray-500 line-through">{tier.originalPrice}</span>
                  </div>
                  <div className="text-green-600 font-semibold">Save {tier.savings}!</div>
                  <p className="text-sm text-gray-600 mt-2">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <Truck className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-600">{tier.capacity}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="tel:+19047423531"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>

          {/* Price Match Guarantee */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Price Match Guarantee</h3>
            <p className="text-green-700">
              Found a lower price? We'll beat any written estimate by 10%. That's our promise to you.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why We're Southside Jacksonville's #1 Cheap Junk Removal Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just offer cheap prices - we provide exceptional value with professional service in this growing area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Southside Areas We Serve */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Southside Jacksonville Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing cheap junk removal services throughout Southside Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {southsideAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Southside-Specific Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Southside Jacksonville Services (Cheap!)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services for Southside Jacksonville residents and businesses at unbeatable prices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Construction Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• New construction cleanup</li>
                <li>• Construction debris</li>
                <li>• Development cleanup</li>
                <li>• Project coordination</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Residential development</li>
                <li>• Fast response</li>
                <li>• Commercial services</li>
                <li>• Growing area support</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Business cleanouts</li>
                <li>• Office removal</li>
                <li>• Retail cleanup</li>
                <li>• Commercial support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Cheap Junk Removal in Southside Jacksonville?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today. No hidden fees, no surprises - just honest, affordable junk removal service in this growing area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (904) 742-3531
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
    </div>
  )
}
