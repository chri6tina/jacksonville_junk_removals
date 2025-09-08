import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingBag, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Store, Package, Building2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail Store Cleanout Jacksonville - Commercial Store Cleanup Services',
  description: 'Professional retail store cleanout services in Jacksonville, Florida. Store cleanup, inventory removal, and commercial space restoration. Call (904) 742-3531.',
  keywords: 'retail store cleanout Jacksonville, store cleanup, inventory removal, Jacksonville retail services, commercial cleanup',
  alternates: {
    canonical: '/retail-store-cleanout',
  },
}

const retailCleanoutServices = [
  {
    name: 'Retail Store Cleanout',
    description: 'Complete retail store cleanup and inventory removal',
    startingPrice: 400,
    icon: ShoppingBag,
    features: ['Complete Cleanout', 'Inventory Removal', 'Site Restoration', 'Professional Service']
  },
  {
    name: 'Inventory Removal',
    description: 'Retail inventory and merchandise disposal',
    startingPrice: 250,
    icon: Package,
    features: ['Inventory Disposal', 'Merchandise Removal', 'Fast Service', 'Eco-Friendly']
  },
  {
    name: 'Store Fixtures Removal',
    description: 'Retail fixtures, displays, and shelving removal',
    startingPrice: 200,
    icon: Store,
    features: ['Fixture Removal', 'Display Disposal', 'Professional Crew', 'Site Cleanup']
  },
  {
    name: 'Shopping Center Cleanout',
    description: 'Shopping center and mall store cleanouts',
    startingPrice: 600,
    icon: Building2,
    features: ['Shopping Center', 'Mall Cleanout', 'Large Scale', 'Professional Service']
  },
  {
    name: 'Boutique Cleanout',
    description: 'Small boutique and specialty store cleanouts',
    startingPrice: 300,
    icon: ShoppingBag,
    features: ['Boutique Service', 'Specialty Stores', 'Personal Attention', 'Fast Cleanup']
  },
  {
    name: 'Department Store Cleanout',
    description: 'Large department store and big box cleanouts',
    startingPrice: 800,
    icon: Building2,
    features: ['Department Store', 'Big Box Cleanout', 'Large Scale', 'Professional Crew']
  }
]

const retailCleanoutFeatures = [
  'Licensed and insured retail store cleanout',
  'Professional equipment and experienced crews',
  'Eco-friendly disposal and recycling',
  'Same-day service available',
  'Site cleanup and restoration',
  'No hidden fees or surprises'
]

const retailCleanoutBenefits = [
  {
    benefit: 'Space Preparation',
    description: 'Prepare retail space for new tenants, renovations, or alternative use',
    icon: '🏪'
  },
  {
    benefit: 'Professional Appearance',
    description: 'Maintain professional appearance during transitions and renovations',
    icon: '✨'
  },
  {
    benefit: 'Fast Turnaround',
    description: 'Quick cleanup to minimize business interruption and revenue loss',
    icon: '⚡'
  },
  {
    benefit: 'Cost Efficiency',
    description: 'Professional service that saves time and reduces transition costs',
    icon: '💰'
  }
]

const disposalMethods = [
  {
    method: 'Recycling',
    description: 'Metal, wood, and recyclable materials processed',
    percentage: '70%',
    icon: '♻️'
  },
  {
    method: 'Responsible Disposal',
    description: 'Non-recyclable materials properly disposed of',
    percentage: '25%',
    icon: '✅'
  },
  {
    method: 'Donation',
    description: 'Usable items donated to local organizations',
    percentage: '5%',
    icon: '🎁'
  }
]

export default function RetailStoreCleanoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm font-bold">RETAIL CLEANOUT SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Retail Store Cleanout
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional retail store cleanout services for shopping centers, boutiques, and commercial spaces. 
            Expert cleanup, inventory removal, and site restoration throughout Jacksonville.
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

      {/* Retail Cleanout Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Retail Store Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive retail cleanout services for all your commercial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailCleanoutServices.map((service, index) => (
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
              Why Choose Jacksonville Junk Removals for Retail Store Cleanout?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, specialized equipment, and retail-focused solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailCleanoutFeatures.map((feature, index) => (
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

      {/* Retail Cleanout Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Retail Store Cleanout Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our retail cleanout services benefit Jacksonville businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {retailCleanoutBenefits.map((benefit, index) => (
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
              Eco-Friendly Retail Cleanout Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible retail cleanout disposal and environmental protection
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

      {/* Retail Cleanout Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Retail Store Cleanout Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and efficient retail store cleanout
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your retail space, inventory, and cleanout requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan the cleanout schedule to minimize business disruption
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleanout</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes inventory and fixtures efficiently
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Restoration</h3>
              <p className="text-gray-600 text-sm">
                Site cleanup and preparation for new use or renovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Retail Cleanout Types */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Retail Store Types We Clean Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleanout services for all types of retail establishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Boutiques & Specialty Stores</h3>
                  <p className="text-gray-600 text-sm">
                    Small retail stores, boutiques, and specialty shops
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shopping Centers & Malls</h3>
                  <p className="text-gray-600 text-sm">
                    Shopping centers, malls, and retail complexes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Store className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Department Stores</h3>
                  <p className="text-gray-600 text-sm">
                    Large department stores and big box retailers
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Retail Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Clothing and apparel stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Electronics and technology stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Home goods and furniture stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Grocery and convenience stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Jewelry and accessory stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Bookstores and gift shops</span>
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
            Ready for Professional Retail Store Cleanout?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free retail cleanout quote today and experience professional service 
            that prepares your space for new opportunities and minimizes business disruption.
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
              Related Retail Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive commercial and retail cleanup solutions for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Commercial Removal</h3>
              </div>
            </Link>
            
            <Link href="/office-furniture-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Office Furniture</h3>
              </div>
            </Link>
            
            <Link href="/construction-debris-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Construction Debris</h3>
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
