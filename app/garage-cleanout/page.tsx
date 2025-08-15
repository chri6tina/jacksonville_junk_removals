import type { Metadata } from 'next'
import Link from 'next/link'
import { Garage, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Home, Building2, Leaf, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Garage Cleanout Jacksonville - Professional Garage Organization Services',
  description: 'Professional garage cleanout services in Jacksonville, Florida. Garage organization, storage solutions, junk removal, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'garage cleanout Jacksonville, garage organization, storage solutions, garage junk removal, Jacksonville garage cleanup',
}

const garageServices = [
  {
    name: 'Full Garage Cleanout',
    description: 'Complete garage cleanup and organization',
    startingPrice: 200,
    icon: Garage,
    features: ['Complete Cleanout', 'Organization', 'Storage Solutions', 'Professional Service']
  },
  {
    name: 'Partial Garage Cleanout',
    description: 'Targeted cleanup of specific areas',
    startingPrice: 150,
    icon: Garage,
    features: ['Targeted Cleanup', 'Area Focus', 'Flexible Service', 'Cost Effective']
  },
  {
    name: 'Garage Organization',
    description: 'Storage solutions and space optimization',
    startingPrice: 175,
    icon: Home,
    features: ['Storage Solutions', 'Space Optimization', 'Organization Systems', 'Long-term Results']
  },
  {
    name: 'Moving Preparation',
    description: 'Garage cleanup for home sales and moves',
    startingPrice: 225,
    icon: Truck,
    features: ['Move Preparation', 'Home Sale Ready', 'Curb Appeal', 'Fast Service']
  },
  {
    name: 'Seasonal Garage Cleanup',
    description: 'Regular maintenance and seasonal organization',
    startingPrice: 125,
    icon: Leaf,
    features: ['Seasonal Service', 'Regular Maintenance', 'Preventive Care', 'Ongoing Support']
  },
  {
    name: 'Commercial Garage Cleanout',
    description: 'Business and commercial garage cleanup',
    startingPrice: 300,
    icon: Building2,
    features: ['Commercial Service', 'Business Focus', 'Large Spaces', 'Professional Crew']
  }
]

const garageFeatures = [
  'Licensed and insured garage cleanout',
  'Professional organization and storage solutions',
  'Eco-friendly disposal and donation services',
  'Same-day service available',
  'Professional garage handling',
  'No hidden fees or surprises'
]

const garageBenefits = [
  {
    benefit: 'Space Recovery',
    description: 'Reclaim valuable garage space for vehicles, storage, or workshop use',
    icon: '🚗'
  },
  {
    benefit: 'Organization',
    description: 'Professional organization systems for long-term garage management',
    icon: '📦'
  },
  {
    benefit: 'Property Value',
    description: 'Improve curb appeal and property value with clean, organized garages',
    icon: '💰'
  },
  {
    benefit: 'Safety Improvement',
    description: 'Remove hazards and create safer garage environments',
    icon: '🛡️'
  }
]

const disposalMethods = [
  {
    method: 'Donation',
    description: 'Usable items donated to local charities and families',
    percentage: '50%',
    icon: '🎁'
  },
  {
    method: 'Recycling',
    description: 'Metal, wood, and other materials recycled',
    percentage: '35%',
    icon: '♻️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Non-recyclable items properly disposed of',
    percentage: '15%',
    icon: '✅'
  }
]

export default function GarageCleanoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Garage className="w-5 h-5" />
            <span className="text-sm font-bold">GARAGE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Garage Cleanout
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional garage cleanout services for organization, storage solutions, and junk removal. 
            Reclaim your garage space with professional organization and eco-friendly disposal throughout Jacksonville.
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

      {/* Garage Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Garage Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive garage cleanout and organization services for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {garageServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    Starting at ${service.startingPrice}
                  </div>
                  <p className="text-sm text-gray-500">No hidden fees</p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
              Why Choose Jacksonville Junk Removals for Garage Cleanout?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, organization expertise, and eco-friendly practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {garageFeatures.map((feature, index) => (
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

      {/* Garage Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Garage Cleanout Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our garage services benefit Jacksonville homeowners and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {garageBenefits.map((benefit, index) => (
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
              Eco-Friendly Garage Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible garage disposal and community support
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

      {/* Garage Cleanout Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Garage Cleanout Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for efficient and organized garage cleanout
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your garage contents, organization needs, and cleanup goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a customized plan for cleanup, organization, and storage
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleanout</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes unwanted items and organizes remaining items
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization</h3>
              <p className="text-gray-600 text-sm">
                We implement storage solutions and organization systems for long-term results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Garage Organization Tips */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Garage Organization Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice for maintaining organized garages after cleanout
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Storage Zones</h3>
                  <p className="text-gray-600 text-sm">
                    Create designated zones for tools, sports equipment, seasonal items, and vehicles
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Regular Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Schedule quarterly garage organization sessions to maintain order
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
                  <p className="text-gray-600 text-sm">
                    Keep walkways clear and store hazardous materials safely
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Garage Organization Checklist</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Clear vehicle parking areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Organize tools and equipment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Create storage zones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Install shelving and hooks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Label storage containers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Maintain clear walkways</span>
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
            Ready for Professional Garage Cleanout?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free garage cleanout quote today and experience professional organization 
            service that reclaims your garage space and improves your property value.
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
              Related Garage Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive garage and junk removal solutions for all your needs
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
            
            <Link href="/yard-waste-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Yard Waste</h3>
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
