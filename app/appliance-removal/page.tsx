import type { Metadata } from 'next'
import Link from 'next/link'
import { Wrench, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Home, Building2, Leaf, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appliance Removal Jacksonville - Professional Appliance Disposal Services',
  description: 'Professional appliance removal services in Jacksonville, Florida. Refrigerator, washer, dryer, dishwasher, and appliance disposal. Eco-friendly, licensed, insured. Call (904) 742-3531.',
  keywords: 'appliance removal Jacksonville, refrigerator disposal, washer dryer removal, dishwasher removal, appliance disposal Jacksonville, eco-friendly appliance removal',
}

const applianceTypes = [
  {
    name: 'Refrigerators & Freezers',
    description: 'Large appliance removal and disposal',
    startingPrice: 75,
    icon: Home,
    features: ['Freon Removal', 'Large Appliance', 'Eco-Friendly', 'Licensed Disposal']
  },
  {
    name: 'Washers & Dryers',
    description: 'Laundry appliance removal services',
    startingPrice: 65,
    icon: Home,
    features: ['Laundry Appliances', 'Quick Removal', 'Safe Handling', 'Responsible Disposal']
  },
  {
    name: 'Dishwashers',
    description: 'Kitchen appliance removal',
    startingPrice: 55,
    icon: Home,
    features: ['Kitchen Appliances', 'Plumbing Disconnect', 'Clean Removal', 'Eco-Friendly']
  },
  {
    name: 'Stoves & Ovens',
    description: 'Cooking appliance removal',
    startingPrice: 70,
    icon: Home,
    features: ['Gas/Electric Disconnect', 'Heavy Appliances', 'Safety Protocols', 'Professional Crew']
  },
  {
    name: 'Microwaves',
    description: 'Small appliance removal',
    startingPrice: 35,
    icon: Home,
    features: ['Small Appliances', 'Quick Service', 'Affordable', 'Same Day']
  },
  {
    name: 'Other Appliances',
    description: 'Various appliance removal needs',
    startingPrice: 45,
    icon: Home,
    features: ['Custom Solutions', 'Flexible Pricing', 'Expert Handling', 'Eco-Friendly']
  }
]

const applianceFeatures = [
  'Licensed and insured appliance removal',
  'Freon removal and proper disposal',
  'Eco-friendly recycling and donation',
  'Same-day service available',
  'Professional appliance handling',
  'No hidden fees or surprises'
]

const applianceBenefits = [
  {
    benefit: 'Safe Disposal',
    description: 'Proper handling of hazardous materials like Freon and safe appliance disposal',
    icon: '🛡️'
  },
  {
    benefit: 'Eco-Friendly',
    description: 'Recycling and donation of usable appliances to reduce environmental impact',
    icon: '🌱'
  },
  {
    benefit: 'Professional Service',
    description: 'Licensed crews with proper equipment for safe appliance removal',
    icon: '👷'
  },
  {
    benefit: 'Cost Effective',
    description: 'Affordable pricing with no hidden fees for appliance removal',
    icon: '💰'
  }
]

const disposalMethods = [
  {
    method: 'Recycling',
    description: 'Metal, plastic, and electronic components are recycled',
    percentage: '60%',
    icon: '♻️'
  },
  {
    method: 'Donation',
    description: 'Working appliances donated to local charities',
    percentage: '25%',
    icon: '🎁'
  },
  {
    method: 'Responsible Disposal',
    description: 'Hazardous materials properly disposed of',
    percentage: '15%',
    icon: '✅'
  }
]

export default function ApplianceRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Wrench className="w-5 h-5" />
            <span className="text-sm font-bold">APPLIANCE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Appliance Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional appliance removal services for refrigerators, washers, dryers, dishwashers, and more. 
            Licensed disposal, eco-friendly recycling, and same-day service throughout Jacksonville.
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

      {/* Appliance Types Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Appliance Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive appliance removal for all types of household and commercial appliances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applianceTypes.map((appliance, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <appliance.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {appliance.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {appliance.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    Starting at ${appliance.startingPrice}
                  </div>
                  <p className="text-sm text-gray-500">No hidden fees</p>
                </div>
                
                <div className="space-y-2">
                  {appliance.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
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
              Why Choose Jacksonville Junk Removals for Appliance Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, proper disposal, and eco-friendly practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applianceFeatures.map((feature, index) => (
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

      {/* Appliance Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Appliance Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our appliance services benefit Jacksonville homeowners and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applianceBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.benefit}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disposal Methods */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Eco-Friendly Appliance Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible appliance disposal and environmental protection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {disposalMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.method}
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-3">
                  {method.percentage}
                </div>
                <p className="text-gray-600 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appliance Removal Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Appliance Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and efficient appliance removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your appliance type, size, and removal requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area and disconnect appliances safely
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes appliances with care and efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Disposal</h3>
              <p className="text-gray-600 text-sm">
                Eco-friendly disposal, recycling, and donation of usable items
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Considerations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Appliance Removal Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important factors for safe and responsible appliance removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                  <p className="text-gray-600 text-sm">
                    Proper handling of heavy appliances and hazardous materials like Freon
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Environmental Responsibility</h3>
                  <p className="text-gray-600 text-sm">
                    Recycling and donation to reduce environmental impact
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proper Disconnection</h3>
                  <p className="text-gray-600 text-sm">
                    Safe disconnection of gas, electrical, and plumbing connections
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Appliance Types We Handle</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Refrigerators and freezers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Washers and dryers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Dishwashers and garbage disposals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Stoves, ovens, and microwaves</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial appliances</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Small kitchen appliances</span>
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
            Ready for Professional Appliance Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free appliance removal quote today and experience safe, 
            eco-friendly disposal service that protects your home and the environment.
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
              Related Appliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive appliance and junk removal solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/mattress-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🛏️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Mattress Removal</h3>
              </div>
            </Link>
            
            <Link href="/furniture-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Furniture Removal</h3>
              </div>
            </Link>
            
            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Commercial Cleanup</h3>
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
