import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Users, Briefcase, FileText, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Office Furniture Removal Jacksonville - Commercial Office Cleanout Services',
  description: 'Professional office furniture removal services in Jacksonville, Florida. Commercial office cleanouts, cubicle removal, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'office furniture removal Jacksonville, commercial office cleanout, cubicle removal, Jacksonville office services, professional removal',
}

const officeFurnitureServices = [
  {
    name: 'Office Furniture Removal',
    description: 'Complete office furniture removal and disposal',
    startingPrice: 200,
    icon: Building2,
    features: ['Complete Removal', 'Professional Disposal', 'Site Cleanup', 'Eco-Friendly']
  },
  {
    name: 'Cubicle Removal',
    description: 'Office cubicle and partition removal services',
    startingPrice: 150,
    icon: Building2,
    features: ['Cubicle Removal', 'Partition Disposal', 'Fast Service', 'Professional Crew']
  },
  {
    name: 'Conference Room Furniture',
    description: 'Conference tables, chairs, and equipment removal',
    startingPrice: 175,
    icon: Users,
    features: ['Conference Furniture', 'Meeting Room Cleanup', 'Professional Service', 'Quick Removal']
  },
  {
    name: 'Reception Area Cleanout',
    description: 'Reception desk and waiting area furniture removal',
    startingPrice: 125,
    icon: Briefcase,
    features: ['Reception Cleanout', 'Waiting Area', 'Professional Appearance', 'Fast Service']
  },
  {
    name: 'Office Equipment Removal',
    description: 'Office equipment and technology disposal',
    startingPrice: 100,
    icon: Package,
    features: ['Equipment Removal', 'Technology Disposal', 'Eco-Friendly', 'Data Security']
  },
  {
    name: 'Commercial Office Cleanout',
    description: 'Complete commercial office space cleanout',
    startingPrice: 500,
    icon: Building2,
    features: ['Complete Cleanout', 'Commercial Space', 'Professional Service', 'Site Restoration']
  }
]

const officeFurnitureFeatures = [
  'Licensed and insured office furniture removal',
  'Professional equipment and experienced crews',
  'Eco-friendly disposal and recycling',
  'Same-day service available',
  'Site cleanup and restoration',
  'No hidden fees or surprises'
]

const officeFurnitureBenefits = [
  {
    benefit: 'Space Optimization',
    description: 'Reclaim valuable office space for new layouts and productivity improvements',
    icon: '🏢'
  },
  {
    benefit: 'Professional Appearance',
    description: 'Maintain a clean, professional office environment for clients and employees',
    icon: '✨'
  },
  {
    benefit: 'Safety Improvement',
    description: 'Remove potential safety hazards and improve workplace safety standards',
    icon: '🛡️'
  },
  {
    benefit: 'Cost Efficiency',
    description: 'Professional removal that saves time and reduces business disruption',
    icon: '💰'
  }
]

const disposalMethods = [
  {
    method: 'Recycling',
    description: 'Metal, wood, and recyclable materials processed',
    percentage: '75%',
    icon: '♻️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Non-recyclable materials properly disposed of',
    percentage: '20%',
    icon: '✅'
  },
  {
    method: 'Donation',
    description: 'Usable furniture donated to local organizations',
    percentage: '5%',
    icon: '🎁'
  }
]

export default function OfficeFurnitureRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-bold">OFFICE FURNITURE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Office Furniture Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional office furniture removal services for businesses, corporations, and commercial spaces. 
            Expert removal, eco-friendly disposal, and site restoration throughout Jacksonville.
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

      {/* Office Furniture Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Office Furniture Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive office furniture removal services for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeFurnitureServices.map((service, index) => (
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
              Why Choose Jacksonville Junk Removals for Office Furniture Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, specialized equipment, and business-focused solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeFurnitureFeatures.map((feature, index) => (
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

      {/* Office Furniture Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Office Furniture Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our office furniture removal services benefit Jacksonville businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {officeFurnitureBenefits.map((benefit, index) => (
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
              Eco-Friendly Office Furniture Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible office furniture disposal and environmental protection
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

      {/* Office Furniture Removal Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Office Furniture Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and efficient office furniture removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your office furniture, space requirements, and removal timeline
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan the removal schedule to minimize business disruption
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes furniture with minimal disruption to operations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleanup</h3>
              <p className="text-gray-600 text-sm">
                Site cleanup and preparation for new furniture or alternative use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Furniture Types */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Office Furniture Types We Remove
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive removal services for all types of office furniture and equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Desks & Workstations</h3>
                  <p className="text-gray-600 text-sm">
                    Office desks, workstations, and modular furniture systems
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conference Furniture</h3>
                  <p className="text-gray-600 text-sm">
                    Conference tables, meeting chairs, and presentation equipment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Storage & Filing</h3>
                  <p className="text-gray-600 text-sm">
                    Filing cabinets, storage units, and organizational furniture
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Office Items</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Office chairs and seating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Cubicle partitions and walls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Reception and lobby furniture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Break room and kitchen furniture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Office equipment and technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial lighting fixtures</span>
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
            Ready for Professional Office Furniture Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free office furniture removal quote today and experience professional service 
            that minimizes business disruption and maximizes space efficiency.
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
              Related Office Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive commercial and office cleanup solutions for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Commercial Removal</h3>
              </div>
            </Link>
            
            <Link href="/construction-debris-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Construction Debris</h3>
              </div>
            </Link>
            
            <Link href="/estate-cleanout" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Estate Cleanout</h3>
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
