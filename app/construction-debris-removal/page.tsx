import type { Metadata } from 'next'
import Link from 'next/link'
import { HardHat, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Building2, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Jacksonville - Job Site Cleanup Services',
  description: 'Professional construction debris removal services in Jacksonville, Florida. Job site cleanup, demolition debris, building materials, and construction waste disposal. Fast response, licensed crews. Call (904) 742-3531.',
  keywords: 'construction debris removal Jacksonville, job site cleanup, demolition debris, building materials, construction waste disposal, Jacksonville construction cleanup',
}

const constructionServices = [
  {
    name: 'Job Site Cleanup',
    description: 'Complete construction site cleanup and debris removal',
    startingPrice: 200,
    icon: HardHat,
    features: ['Construction Debris', 'Site Cleanup', 'Project Coordination', 'Fast Response']
  },
  {
    name: 'Demolition Debris',
    description: 'Demolition waste and building material removal',
    startingPrice: 250,
    icon: Building2,
    features: ['Demolition Waste', 'Building Materials', 'Heavy Debris', 'Specialized Equipment']
  },
  {
    name: 'Renovation Cleanup',
    description: 'Renovation and remodeling debris removal',
    startingPrice: 175,
    icon: Wrench,
    features: ['Renovation Debris', 'Interior Cleanup', 'Material Disposal', 'Eco-Friendly']
  },
  {
    name: 'Concrete & Masonry',
    description: 'Concrete, brick, and masonry debris removal',
    startingPrice: 300,
    icon: Building2,
    features: ['Concrete Debris', 'Brick Removal', 'Masonry Waste', 'Heavy Equipment']
  },
  {
    name: 'Roofing Debris',
    description: 'Roofing material and shingle removal',
    startingPrice: 225,
    icon: Building2,
    features: ['Roofing Materials', 'Shingle Disposal', 'Roof Cleanup', 'Safety Protocols']
  },
  {
    name: 'Landscaping Debris',
    description: 'Landscaping and outdoor construction debris',
    startingPrice: 150,
    icon: HardHat,
    features: ['Landscaping Waste', 'Outdoor Cleanup', 'Green Waste', 'Site Restoration']
  }
]

const constructionFeatures = [
  'Fast response for urgent construction needs',
  'Licensed, bonded, and insured crews',
  'Heavy equipment and specialized tools',
  'Project coordination and scheduling',
  'Eco-friendly disposal and recycling',
  'Safety protocols and compliance'
]

const constructionBenefits = [
  {
    benefit: 'Project Efficiency',
    description: 'Keep your construction project on schedule with timely debris removal',
    icon: '⚡'
  },
  {
    benefit: 'Safety Compliance',
    description: 'Maintain safe job sites with proper debris removal and disposal',
    icon: '🛡️'
  },
  {
    benefit: 'Cost Control',
    description: 'Predictable pricing with no hidden fees for construction cleanup',
    icon: '💰'
  },
  {
    benefit: 'Professional Service',
    description: 'Experienced crews that understand construction site requirements',
    icon: '👷'
  }
]

const debrisTypes = [
  {
    type: 'Building Materials',
    examples: 'Lumber, drywall, insulation, roofing materials',
    disposal: 'Recycling and responsible disposal'
  },
  {
    type: 'Concrete & Masonry',
    examples: 'Concrete, brick, stone, tile',
    disposal: 'Crushing and recycling when possible'
  },
  {
    type: 'Metal & Electrical',
    examples: 'Metal studs, wiring, electrical components',
    disposal: 'Metal recycling and proper electrical disposal'
  },
  {
    type: 'Plastic & Packaging',
    examples: 'Plastic materials, packaging, containers',
    disposal: 'Plastic recycling and waste reduction'
  }
]

export default function ConstructionDebrisRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <HardHat className="w-5 h-5" />
            <span className="text-sm font-bold">CONSTRUCTION SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Construction Debris Removal
            <br />
            <span className="text-yellow-400">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional construction debris removal services for job sites, renovations, and demolition projects. 
            Fast response, heavy equipment, and eco-friendly disposal throughout Jacksonville.
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

      {/* Construction Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Debris Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleanup solutions for all types of construction and demolition projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionServices.map((service, index) => (
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
              Why Choose Jacksonville Junk Removals for Construction Debris?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional service, heavy equipment, and project coordination expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionFeatures.map((feature, index) => (
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

      {/* Construction Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Debris Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our construction services benefit your building projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {constructionBenefits.map((benefit, index) => (
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

      {/* Debris Types & Disposal */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Debris Types & Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle all types of construction debris with responsible disposal methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {debrisTypes.map((debris, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {debris.type}
                </h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                  <p className="text-gray-600 text-sm">{debris.examples}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Disposal Method:</h4>
                  <p className="text-gray-600 text-sm">{debris.disposal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Construction Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Debris Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process designed for construction site efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your construction site and debris volume for accurate quoting
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan the best approach considering site access and project timeline
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficient Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes debris quickly with minimal site disruption
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Cleanup</h3>
              <p className="text-gray-600 text-sm">
                We leave your construction site clean and ready for continued work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Considerations */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Construction Debris Removal Considerations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important factors for construction site cleanup projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safety & Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    We follow all safety protocols and construction site regulations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Coordination</h3>
                  <p className="text-gray-600 text-sm">
                    We work around your construction schedule to minimize delays
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment & Access</h3>
                  <p className="text-gray-600 text-sm">
                    Heavy equipment available for large debris and difficult access
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Construction Project Types</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">New construction projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Renovation and remodeling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Demolition projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Commercial construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Residential construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Infrastructure projects</span>
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
            Ready for Professional Construction Debris Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free construction quote today and experience professional service 
            that keeps your project on schedule and your site clean.
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
              Related Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction cleanup solutions for all your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">Commercial Cleanup</h3>
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
