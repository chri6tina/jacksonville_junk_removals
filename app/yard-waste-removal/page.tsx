import type { Metadata } from 'next'
import Link from 'next/link'
import { TreePine, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Home, Leaf, Sun, CloudRain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yard Waste Removal Jacksonville - Professional Landscaping Debris Services',
  description: 'Professional yard waste removal services in Jacksonville, Florida. Landscaping debris, tree trimmings, grass clippings, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'yard waste removal Jacksonville, landscaping debris, tree trimmings, grass clippings, yard cleanup Jacksonville, eco-friendly yard waste',
}

const yardWasteTypes = [
  {
    name: 'Tree Trimmings & Branches',
    description: 'Tree branches, limbs, and pruning debris',
    startingPrice: 120,
    icon: TreePine,
    features: ['Tree Branches', 'Pruning Debris', 'Large Limbs', 'Professional Handling']
  },
  {
    name: 'Grass Clippings & Leaves',
    description: 'Lawn maintenance and seasonal cleanup',
    startingPrice: 80,
    icon: Leaf,
    features: ['Grass Clippings', 'Leaf Removal', 'Seasonal Cleanup', 'Quick Service']
  },
  {
    name: 'Landscaping Debris',
    description: 'Garden waste, plant trimmings, and soil',
    startingPrice: 100,
    icon: TreePine,
    features: ['Garden Waste', 'Plant Trimmings', 'Soil & Mulch', 'Landscaping Cleanup']
  },
  {
    name: 'Storm Debris',
    description: 'Storm damage cleanup and emergency removal',
    startingPrice: 150,
    icon: CloudRain,
    features: ['Storm Damage', 'Emergency Service', 'Fast Response', 'Insurance Claims']
  },
  {
    name: 'Seasonal Cleanup',
    description: 'Spring and fall yard maintenance',
    startingPrice: 90,
    icon: Sun,
    features: ['Spring Cleanup', 'Fall Maintenance', 'Seasonal Service', 'Regular Maintenance']
  },
  {
    name: 'Commercial Landscaping',
    description: 'Business and commercial property cleanup',
    startingPrice: 200,
    icon: Home,
    features: ['Commercial Properties', 'Business Cleanup', 'Large Properties', 'Professional Service']
  }
]

const yardWasteFeatures = [
  'Licensed and insured yard waste removal',
  'Eco-friendly disposal and composting',
  'Same-day service available',
  'Professional landscaping equipment',
  'Storm damage emergency response',
  'No hidden fees or surprises'
]

const yardWasteBenefits = [
  {
    benefit: 'Eco-Friendly Disposal',
    description: 'Responsible disposal with composting and recycling of yard waste',
    icon: '🌱'
  },
  {
    benefit: 'Seasonal Maintenance',
    description: 'Regular cleanup services to maintain beautiful landscapes year-round',
    icon: '🍂'
  },
  {
    benefit: 'Professional Equipment',
    description: 'Proper tools and equipment for efficient yard waste removal',
    icon: '🛠️'
  },
  {
    benefit: 'Fast Response',
    description: 'Quick service for urgent cleanup needs and storm damage',
    icon: '⚡'
  }
]

const disposalMethods = [
  {
    method: 'Composting',
    description: 'Organic yard waste converted to nutrient-rich compost',
    percentage: '60%',
    icon: '🌿'
  },
  {
    method: 'Recycling',
    description: 'Wood and other materials recycled for reuse',
    percentage: '30%',
    icon: '♻️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Non-recyclable items properly disposed of',
    percentage: '10%',
    icon: '✅'
  }
]

export default function YardWasteRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <TreePine className="w-5 h-5" />
            <span className="text-sm font-bold">YARD WASTE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Yard Waste Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional yard waste removal services for landscaping debris, tree trimmings, grass clippings, and more. 
            Eco-friendly disposal, composting, and same-day service throughout Jacksonville.
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

      {/* Yard Waste Types Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yard Waste Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive yard waste removal for all types of landscaping and outdoor debris
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yardWasteTypes.map((waste, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <waste.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {waste.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {waste.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    Starting at ${waste.startingPrice}
                  </div>
                  <p className="text-sm text-gray-500">No hidden fees</p>
                </div>
                
                <div className="space-y-2">
                  {waste.features.map((feature, featureIndex) => (
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
              Why Choose Jacksonville Junk Removals for Yard Waste?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, eco-friendly disposal, and landscaping expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yardWasteFeatures.map((feature, index) => (
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

      {/* Yard Waste Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yard Waste Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our yard waste services benefit Jacksonville homeowners and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {yardWasteBenefits.map((benefit, index) => (
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
              Eco-Friendly Yard Waste Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible yard waste disposal and environmental protection
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

      {/* Yard Waste Removal Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Yard Waste Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and efficient yard waste removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your yard waste type, volume, and removal requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area and organize waste for efficient removal
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficient Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes yard waste with proper equipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Eco-Disposal</h3>
              <p className="text-gray-600 text-sm">
                Composting, recycling, and responsible disposal of yard waste
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Considerations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Seasonal Yard Waste Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we adapt our services to Jacksonville's seasonal landscaping needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Spring Cleanup</h3>
                  <p className="text-gray-600 text-sm">
                    Post-winter cleanup, new growth preparation, and seasonal maintenance
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Summer Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Regular trimming, grass maintenance, and storm preparation
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TreePine className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fall Cleanup</h3>
                  <p className="text-gray-600 text-sm">
                    Leaf removal, seasonal trimming, and winter preparation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Climate Considerations</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Subtropical climate with year-round growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Hurricane season preparation and cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Regular rainfall and rapid plant growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Seasonal landscaping maintenance needs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Eco-friendly disposal requirements</span>
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
            Ready for Professional Yard Waste Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free yard waste removal quote today and experience eco-friendly, 
            professional service that keeps your landscape beautiful year-round.
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
              Related Yard Waste Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive outdoor and landscaping cleanup solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/construction-debris-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Construction Debris</h3>
              </div>
            </Link>
            
            <Link href="/appliance-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Appliance Removal</h3>
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
