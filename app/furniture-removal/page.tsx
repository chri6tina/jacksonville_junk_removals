import type { Metadata } from 'next'
import Link from 'next/link'
import { Sofa, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Home, Building2, Leaf, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Removal Jacksonville - Professional Furniture Disposal Services',
  description: 'Professional furniture removal services in Jacksonville, Florida. Couch, chair, table, bed, and furniture disposal. Eco-friendly, donation services, licensed crews. Call (904) 742-3531.',
  keywords: 'furniture removal Jacksonville, couch removal, chair disposal, table removal, furniture disposal Jacksonville, eco-friendly furniture removal',
}

const furnitureTypes = [
  {
    name: 'Living Room Furniture',
    description: 'Couches, loveseats, chairs, and entertainment centers',
    startingPrice: 85,
    icon: Sofa,
    features: ['Couches & Loveseats', 'Chairs & Ottomans', 'Entertainment Centers', 'Coffee Tables']
  },
  {
    name: 'Bedroom Furniture',
    description: 'Beds, dressers, nightstands, and bedroom sets',
    startingPrice: 75,
    icon: Home,
    features: ['Beds & Mattresses', 'Dressers & Armoires', 'Nightstands', 'Bedroom Sets']
  },
  {
    name: 'Dining Room Furniture',
    description: 'Dining tables, chairs, buffets, and china cabinets',
    startingPrice: 90,
    icon: Home,
    features: ['Dining Tables', 'Dining Chairs', 'Buffets & Sideboards', 'China Cabinets']
  },
  {
    name: 'Office Furniture',
    description: 'Desks, office chairs, filing cabinets, and workstations',
    startingPrice: 80,
    icon: Building2,
    features: ['Office Desks', 'Office Chairs', 'Filing Cabinets', 'Workstations']
  },
  {
    name: 'Outdoor Furniture',
    description: 'Patio sets, outdoor seating, and garden furniture',
    startingPrice: 70,
    icon: Home,
    features: ['Patio Sets', 'Outdoor Seating', 'Garden Furniture', 'Weather-Resistant']
  },
  {
    name: 'Antique & Specialty',
    description: 'Valuable furniture, antiques, and specialty pieces',
    startingPrice: 100,
    icon: Sofa,
    features: ['Antique Furniture', 'Valuable Pieces', 'Specialty Items', 'Careful Handling']
  }
]

const furnitureFeatures = [
  'Licensed and insured furniture removal',
  'Careful handling of valuable pieces',
  'Donation services for usable furniture',
  'Same-day service available',
  'Professional furniture handling',
  'No hidden fees or surprises'
]

const furnitureBenefits = [
  {
    benefit: 'Careful Handling',
    description: 'Professional crews handle your furniture with care to prevent damage',
    icon: '🛡️'
  },
  {
    benefit: 'Donation Services',
    description: 'Usable furniture donated to local charities and families in need',
    icon: '🎁'
  },
  {
    benefit: 'Professional Service',
    description: 'Licensed crews with proper equipment for safe furniture removal',
    icon: '👷'
  },
  {
    benefit: 'Eco-Friendly',
    description: 'Responsible disposal and donation to reduce environmental impact',
    icon: '🌱'
  }
]

const disposalMethods = [
  {
    method: 'Donation',
    description: 'Good condition furniture donated to local charities',
    percentage: '70%',
    icon: '🎁'
  },
  {
    method: 'Recycling',
    description: 'Wood, metal, and fabric components are recycled',
    percentage: '25%',
    icon: '♻️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Damaged items properly disposed of',
    percentage: '5%',
    icon: '✅'
  }
]

export default function FurnitureRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Sofa className="w-5 h-5" />
            <span className="text-sm font-bold">FURNITURE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Furniture Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional furniture removal services for couches, chairs, tables, beds, and more. 
            Careful handling, donation services, and eco-friendly disposal throughout Jacksonville.
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

      {/* Furniture Types Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Furniture Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive furniture removal for all types of household and office furniture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureTypes.map((furniture, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <furniture.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {furniture.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {furniture.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">
                    Starting at ${furniture.startingPrice}
                  </div>
                  <p className="text-sm text-gray-500">No hidden fees</p>
                </div>
                
                <div className="space-y-2">
                  {furniture.features.map((feature, featureIndex) => (
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
              Why Choose Jacksonville Junk Removals for Furniture Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, careful handling, and donation-focused practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {furnitureFeatures.map((feature, index) => (
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

      {/* Furniture Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Furniture Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our furniture services benefit Jacksonville homeowners and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {furnitureBenefits.map((benefit, index) => (
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
              Eco-Friendly Furniture Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible furniture disposal and community support
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

      {/* Furniture Removal Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Furniture Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and efficient furniture removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your furniture type, size, and removal requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area and protect floors and walls during removal
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Careful Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes furniture with care and efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Disposal</h3>
              <p className="text-gray-600 text-sm">
                Donation, recycling, and responsible disposal of furniture items
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
              Furniture Removal Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important factors for safe and responsible furniture removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Careful Handling</h3>
                  <p className="text-gray-600 text-sm">
                    Professional handling to prevent damage to furniture and property
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Donation Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Maximizing donation of usable furniture to help local families
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proper Disposal</h3>
                  <p className="text-gray-600 text-sm">
                    Responsible disposal of damaged or unusable furniture items
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Furniture Types We Handle</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Living room furniture (couches, chairs, tables)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Bedroom furniture (beds, dressers, nightstands)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Dining room furniture (tables, chairs, buffets)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Office furniture (desks, chairs, filing cabinets)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Outdoor furniture (patio sets, garden furniture)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Antique and specialty furniture</span>
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
            Ready for Professional Furniture Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free furniture removal quote today and experience careful, 
            donation-focused service that helps your community.
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
              Related Furniture Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive furniture and junk removal solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/mattress-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🛏️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Mattress Removal</h3>
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
