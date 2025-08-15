import type { Metadata } from 'next'
import Link from 'next/link'
import { Bed, Truck, Leaf, Shield, Clock, DollarSign, CheckCircle, Star, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mattress Removal Jacksonville - Professional Mattress Disposal Services',
  description: 'Professional mattress removal services in Jacksonville, Florida. Flat-rate pricing starting at $75, same-day pickup, eco-friendly disposal. Call (904) 742-3531 for immediate service.',
  keywords: 'mattress removal Jacksonville, mattress disposal, box spring removal, eco-friendly mattress disposal, Jacksonville mattress removal',
}

const mattressTypes = [
  {
    name: 'Twin Mattress',
    price: 75,
    description: 'Standard twin mattress and box spring removal',
    includes: ['Mattress removal', 'Box spring removal', 'Eco-friendly disposal', 'Same-day service']
  },
  {
    name: 'Full/Double Mattress',
    price: 85,
    description: 'Full-size mattress and box spring removal',
    includes: ['Mattress removal', 'Box spring removal', 'Eco-friendly disposal', 'Same-day service']
  },
  {
    name: 'Queen Mattress',
    price: 95,
    description: 'Queen mattress and box spring removal',
    includes: ['Mattress removal', 'Box spring removal', 'Eco-friendly disposal', 'Same-day service']
  },
  {
    name: 'King Mattress',
    price: 110,
    description: 'King mattress and box spring removal',
    includes: ['Mattress removal', 'Box spring removal', 'Eco-friendly disposal', 'Same-day service']
  },
  {
    name: 'California King',
    price: 120,
    description: 'California King mattress and box spring removal',
    includes: ['Mattress removal', 'Box spring removal', 'Eco-friendly disposal', 'Same-day service']
  },
  {
    name: 'Bulk Mattress Removal',
    price: 'Custom Quote',
    description: 'Multiple mattresses or large quantities',
    includes: ['Volume pricing', 'Bulk removal', 'Eco-friendly disposal', 'Flexible scheduling']
  }
]

const mattressFeatures = [
  'Flat-rate pricing with no hidden fees',
  'Same-day pickup available',
  'Professional removal and handling',
  'Eco-friendly disposal methods',
  'Licensed and insured service',
  'Free estimates and quotes'
]

const disposalMethods = [
  {
    method: 'Recycling',
    description: 'Mattress components are separated and recycled into new products',
    percentage: '60%',
    icon: '♻️'
  },
  {
    method: 'Donation',
    description: 'Gently used mattresses donated to local charities and shelters',
    percentage: '25%',
    icon: '❤️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Remaining materials disposed of in environmentally responsible ways',
    percentage: '15%',
    icon: '🌱'
  }
]

export default function MattressRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Bed className="w-5 h-5" />
            <span className="text-sm font-bold">FLAT-RATE PRICING</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Mattress Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Fast, reliable mattress removal services starting at just $75. Same-day pickup available, 
            eco-friendly disposal, and professional handling. No hidden fees, no surprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transparent Mattress Removal Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flat-rate pricing with no hidden fees. What you see is what you pay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mattressTypes.map((mattress, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Bed className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {mattress.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {mattress.description}
                  </p>
                  <div className="text-3xl font-bold text-gray-900">
                    {typeof mattress.price === 'number' ? `$${mattress.price}` : mattress.price}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {mattress.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <a
                    href="tel:+19047423531"
                    className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full block"
                  >
                    Schedule Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Jacksonville Junk Removals for Mattress Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, transparent pricing, and eco-friendly disposal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mattressFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eco-Friendly Disposal Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Eco-Friendly Mattress Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible disposal and environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {disposalMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.method}
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {method.percentage}
                </div>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Mattress Removal Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for fast, efficient mattress removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Call or Book Online</h3>
              <p className="text-gray-600 text-sm">
                Contact us or use our online booking system for instant quotes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Pickup</h3>
              <p className="text-gray-600 text-sm">
                Choose a convenient time - same-day service often available
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Removal</h3>
              <p className="text-gray-600 text-sm">
                Our crew arrives on time and removes your mattress safely
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Eco-Friendly Disposal</h3>
              <p className="text-gray-600 text-sm">
                We recycle and dispose of your mattress responsibly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mattress Removal Preparation Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to ensure smooth and efficient mattress removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Clear the Area</h3>
                  <p className="text-gray-600 text-sm">
                    Remove any items around the mattress to give our crew easy access
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Remove Bedding</h3>
                  <p className="text-gray-600 text-sm">
                    Strip off sheets, blankets, and mattress protectors before we arrive
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Note Any Damage</h3>
                  <p className="text-gray-600 text-sm">
                    Let us know if the mattress has significant damage or special handling needs
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Handle</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">All mattress sizes and types</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Box springs and foundations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Memory foam mattresses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Air mattresses and futons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Damaged or stained mattresses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Mattress Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience fast, reliable mattress removal 
            starting at just $75. Same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
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

      {/* Related Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Junk Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive junk removal services throughout Jacksonville
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/furniture-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Furniture Removal</h3>
              </div>
            </Link>
            
            <Link href="/appliance-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Appliance Removal</h3>
              </div>
            </Link>
            
            <Link href="/garage-cleanout" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Garage Cleanout</h3>
              </div>
            </Link>
            
            <Link href="/services" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🚛</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">View All Services</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
