import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Home, Heart, Package, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Estate Cleanout Jacksonville - Professional Estate Sale & Property Cleanup Services',
  description: 'Professional estate cleanout services in Jacksonville, Florida. Estate sales, property cleanup, family transitions, and eco-friendly disposal. Call (904) 742-3531.',
  keywords: 'estate cleanout Jacksonville, estate sale cleanup, property cleanup, family transitions, Jacksonville estate services',
}

const estateServices = [
  {
    name: 'Full Estate Cleanout',
    description: 'Complete property cleanup and organization',
    startingPrice: 500,
    icon: Building2,
    features: ['Complete Cleanout', 'Property Organization', 'Estate Sale Support', 'Professional Service']
  },
  {
    name: 'Partial Estate Cleanout',
    description: 'Targeted cleanup of specific areas',
    startingPrice: 300,
    icon: Building2,
    features: ['Targeted Cleanup', 'Area Focus', 'Flexible Service', 'Cost Effective']
  },
  {
    name: 'Estate Sale Preparation',
    description: 'Property preparation for estate sales',
    startingPrice: 400,
    icon: Home,
    features: ['Sale Preparation', 'Curb Appeal', 'Property Staging', 'Professional Presentation']
  },
  {
    name: 'Family Transition Support',
    description: 'Support during family transitions and moves',
    startingPrice: 350,
    icon: Users,
    features: ['Family Support', 'Transition Planning', 'Emotional Support', 'Professional Care']
  },
  {
    name: 'Property Sale Cleanup',
    description: 'Cleanup for home sales and real estate',
    startingPrice: 450,
    icon: Home,
    features: ['Sale Ready', 'Curb Appeal', 'Property Value', 'Fast Service']
  },
  {
    name: 'Commercial Estate Cleanout',
    description: 'Business and commercial property cleanup',
    startingPrice: 600,
    icon: Building2,
    features: ['Commercial Service', 'Business Focus', 'Large Properties', 'Professional Crew']
  }
]

const estateFeatures = [
  'Licensed and insured estate cleanout',
  'Professional property cleanup and organization',
  'Eco-friendly disposal and donation services',
  'Same-day service available',
  'Family transition support',
  'No hidden fees or surprises'
]

const estateBenefits = [
  {
    benefit: 'Property Value',
    description: 'Increase property value and curb appeal for sales and rentals',
    icon: '💰'
  },
  {
    benefit: 'Family Support',
    description: 'Professional support during emotional family transitions',
    icon: '❤️'
  },
  {
    benefit: 'Time Savings',
    description: 'Save time and effort with professional estate cleanup',
    icon: '⏰'
  },
  {
    benefit: 'Peace of Mind',
    description: 'Professional handling of sensitive family items and memories',
    icon: '🛡️'
  }
]

const disposalMethods = [
  {
    method: 'Donation',
    description: 'Usable items donated to local charities and families',
    percentage: '60%',
    icon: '🎁'
  },
  {
    method: 'Recycling',
    description: 'Metal, wood, and other materials recycled',
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

export default function EstateCleanoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-bold">ESTATE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Estate Cleanout
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional estate cleanout services for property cleanup, estate sales, and family transitions. 
            Compassionate, professional service with eco-friendly disposal throughout Jacksonville.
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

      {/* Estate Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Estate Cleanout Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive estate cleanout and property cleanup services for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estateServices.map((service, index) => (
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
              Why Choose Jacksonville Junk Removals for Estate Cleanout?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, compassionate care, and eco-friendly practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {estateFeatures.map((feature, index) => (
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

      {/* Estate Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Estate Cleanout Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our estate services benefit Jacksonville families and property owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {estateBenefits.map((benefit, index) => (
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
              Eco-Friendly Estate Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to responsible estate disposal and community support
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

      {/* Estate Cleanout Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Estate Cleanout Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for compassionate and efficient estate cleanout
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess the property, contents, and family needs with compassion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a customized plan considering family preferences and timeline
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cleanout</h3>
              <p className="text-gray-600 text-sm">
                Professional crew handles cleanup with care and respect for family items
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Completion</h3>
              <p className="text-gray-600 text-sm">
                Property is left clean and ready for sale, rental, or family use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estate Cleanout Considerations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Estate Cleanout Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important factors for estate cleanout projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Family Sensitivity</h3>
                  <p className="text-gray-600 text-sm">
                    We handle family items with care and respect during emotional transitions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Timeline Flexibility</h3>
                  <p className="text-gray-600 text-sm">
                    We work around family schedules and emotional readiness
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Care</h3>
                  <p className="text-gray-600 text-sm">
                    Licensed, insured, and experienced crews for sensitive projects
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estate Cleanout Types</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Family estate transitions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Property sales and rentals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Estate sales preparation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Probate property cleanup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial property transitions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Family member moves</span>
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
            Ready for Professional Estate Cleanout?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free estate cleanout quote today and experience compassionate, 
            professional service that supports your family during transitions.
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
              Related Estate Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive estate and property cleanup solutions for all your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/garage-cleanout" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Garage Cleanout</h3>
              </div>
            </Link>
            
            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Commercial Cleanup</h3>
              </div>
            </Link>
            
            <Link href="/furniture-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Furniture Removal</h3>
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
