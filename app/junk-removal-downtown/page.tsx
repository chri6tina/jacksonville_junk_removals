import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Clock, Truck, Building, Star, CheckCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Junk Removal Downtown Jacksonville - Professional Cleanout Services',
  description: 'Professional junk removal services in Downtown Jacksonville, Florida. Commercial cleanouts, office furniture removal, construction debris, and same-day service. Call (904) 742-3531.',
  keywords: 'junk removal Downtown Jacksonville, commercial cleanout, office furniture removal, construction debris, Downtown Jacksonville junk removal',
}

const downtownServices = [
  {
    name: 'Commercial Office Cleanouts',
    description: 'Complete office space cleanup including furniture, equipment, and office supplies',
    startingPrice: 200,
    icon: Building,
    features: ['Office Furniture Removal', 'Equipment Disposal', 'Document Shredding', 'Fast Response']
  },
  {
    name: 'Construction Debris Removal',
    description: 'Construction waste and demolition debris from Downtown projects',
    startingPrice: 175,
    icon: Truck,
    features: ['Demolition Debris', 'Building Materials', 'Site Cleanup', 'Project Coordination']
  },
  {
    name: 'Retail Store Cleanouts',
    description: 'Retail space cleanup and inventory removal services',
    startingPrice: 225,
    icon: Building,
    features: ['Store Fixtures', 'Inventory Removal', 'Display Cases', 'Commercial Pricing']
  },
  {
    name: 'Restaurant & Hospitality',
    description: 'Restaurant equipment removal and hospitality space cleanup',
    startingPrice: 250,
    icon: Building,
    features: ['Kitchen Equipment', 'Dining Furniture', 'Commercial Appliances', 'Health Code Compliance']
  }
]

const downtownFeatures = [
  'Central location for fast response times',
  'Commercial zoning expertise',
  'Downtown parking and access knowledge',
  'Business district regulations compliance',
  '24/7 emergency service available',
  'Eco-friendly disposal methods'
]

export default function DowntownJacksonvillePage() {
  return (
    <>
      <SEOHead
        title="Downtown Jacksonville Junk Removal | Professional Cleanout Service | (904) 456-3851"
        description="Downtown Jacksonville junk removal service. Professional cleanout, hoarding cleanup, construction debris removal. Licensed, insured, eco-friendly disposal. Call (904) 456-3851."
        keywords="Downtown Jacksonville junk removal, Downtown Jacksonville cleanout, Downtown Jacksonville hoarding cleanup, Downtown Jacksonville construction debris removal, Jacksonville Downtown junk removal"
        canonical="/junk-removal-downtown"
        ogType="website"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold">DOWNTOWN JACKSONVILLE</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Junk Removal Services
            <br />
            <span className="text-yellow-400">Downtown Jacksonville</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional junk removal services in the heart of Jacksonville. We specialize in commercial cleanouts, 
            office furniture removal, and construction debris cleanup throughout Downtown.
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

      {/* Downtown Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Downtown Jacksonville Junk Removal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Downtown Jacksonville is the bustling commercial and cultural heart of the city. Our team understands 
                the unique challenges of working in this busy urban environment, from navigating traffic and parking 
                to complying with commercial zoning regulations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We provide fast, efficient junk removal services for Downtown businesses, offices, retail spaces, 
                and construction projects. Our local knowledge ensures smooth operations in this high-traffic area.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">15 min</div>
                  <div className="text-sm text-gray-600">Average Response</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Service Available</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Jacksonville</h3>
                <p className="text-gray-600 mb-6">
                  The commercial and cultural center of Jacksonville, featuring office buildings, retail spaces, 
                  restaurants, and entertainment venues.
                </p>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Population:</span>
                    <span className="font-medium">~40,000+ daily</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Businesses:</span>
                    <span className="font-medium">500+ companies</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Area:</span>
                    <span className="font-medium">2.5 sq miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Downtown Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Downtown Jacksonville Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized junk removal services designed for Downtown businesses and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {downtownServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
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

      {/* Why Choose Us for Downtown */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Downtown Jacksonville?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Local expertise and Downtown-specific knowledge for efficient, compliant service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downtownFeatures.map((feature, index) => (
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

      {/* Downtown Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Downtown Jacksonville Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined junk removal process designed for Downtown efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your Downtown location and provide a same-day quote
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Downtown Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan the best time and route for Downtown access and parking
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficient Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes junk quickly with minimal Downtown disruption
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Clean Completion</h3>
              <p className="text-gray-600 text-sm">
                We leave your Downtown space clean and ready for business
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Downtown Jacksonville Junk Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that understands Downtown Jacksonville's unique needs.
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

      {/* Related Areas */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Other Jacksonville Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We serve all of Jacksonville and surrounding areas with professional junk removal services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/junk-removal-riverside" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Riverside</h3>
              </div>
            </Link>
            
            <Link href="/junk-removal-san-marco" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">San Marco</h3>
              </div>
            </Link>
            
            <Link href="/junk-removal-mandarin" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🍊</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Mandarin</h3>
              </div>
            </Link>
            
            <Link href="/locations" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">View All Areas</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
