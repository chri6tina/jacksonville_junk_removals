import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, TestTube, Battery, Palette, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hazardous Waste Removal Jacksonville - Professional Hazardous Material Disposal',
  description: 'Professional hazardous waste removal services in Jacksonville, Florida. Safe disposal of chemicals, electronics, and hazardous materials. Licensed and insured. Call (904) 742-3531.',
  keywords: 'hazardous waste removal Jacksonville, hazardous material disposal, chemical disposal, Jacksonville hazardous services, licensed disposal',
}

const hazardousWasteServices = [
  {
    name: 'Chemical Waste Removal',
    description: 'Safe disposal of chemical waste and hazardous liquids',
    startingPrice: 300,
    icon: TestTube,
    features: ['Chemical Disposal', 'Safe Handling', 'Licensed Service', 'EPA Compliance']
  },
  {
    name: 'Electronic Waste Removal',
    description: 'E-waste and electronic device disposal services',
    startingPrice: 150,
    icon: Battery,
    features: ['E-Waste Disposal', 'Data Security', 'Recycling Focus', 'Professional Service']
  },
  {
    name: 'Paint & Solvent Removal',
    description: 'Paint, solvents, and coating disposal services',
    startingPrice: 200,
    icon: Palette,
    features: ['Paint Disposal', 'Solvent Removal', 'Safe Handling', 'Eco-Friendly']
  },
  {
    name: 'Battery Disposal',
    description: 'Battery and power source disposal services',
    startingPrice: 100,
    icon: Battery,
    features: ['Battery Disposal', 'Power Sources', 'Recycling Focus', 'Safe Transport']
  },
  {
    name: 'Industrial Waste Removal',
    description: 'Industrial hazardous waste and material disposal',
    startingPrice: 500,
    icon: AlertTriangle,
    features: ['Industrial Waste', 'Large Scale', 'Professional Crew', 'Compliance Focus']
  },
  {
    name: 'Laboratory Cleanout',
    description: 'Laboratory and research facility cleanouts',
    startingPrice: 400,
    icon: TestTube,
    features: ['Lab Cleanout', 'Research Facilities', 'Specialized Service', 'Safety First']
  }
]

const hazardousWasteFeatures = [
  'Licensed and insured hazardous waste removal',
  'EPA compliant disposal methods',
  'Professional safety equipment and training',
  'Same-day service available',
  'Complete documentation and tracking',
  'No hidden fees or surprises'
]

const hazardousWasteBenefits = [
  {
    benefit: 'Safety Compliance',
    description: 'Ensure compliance with federal and state hazardous waste regulations',
    icon: '🛡️'
  },
  {
    benefit: 'Environmental Protection',
    description: 'Protect the environment through proper hazardous material disposal',
    icon: '🌱'
  },
  {
    benefit: 'Liability Reduction',
    description: 'Reduce liability and legal risks associated with improper disposal',
    icon: '⚖️'
  },
  {
    benefit: 'Professional Expertise',
    description: 'Expert handling by trained professionals with proper equipment',
    icon: '👷'
  }
]

const disposalMethods = [
  {
    method: 'Licensed Disposal',
    description: 'Proper disposal at licensed hazardous waste facilities',
    percentage: '80%',
    icon: '✅'
  },
  {
    method: 'Recycling',
    description: 'Recyclable materials processed at certified facilities',
    percentage: '15%',
    icon: '♻️'
  },
  {
    method: 'Treatment',
    description: 'Specialized treatment for specific hazardous materials',
    percentage: '5%',
    icon: '🔬'
  }
]

const hazardousWasteTypes = [
  'Chemicals and solvents',
  'Electronic waste and batteries',
  'Paint and coatings',
  'Industrial materials',
  'Laboratory chemicals',
  'Medical waste (limited)',
  'Automotive fluids',
  'Cleaning products'
]

export default function HazardousWasteRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-bold">HAZARDOUS WASTE SERVICES</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Hazardous Waste Removal
            <br />
            <span className="text-red-500">Jacksonville, Florida</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional hazardous waste removal services for chemicals, electronics, and hazardous materials. 
            Licensed, insured, and EPA compliant disposal throughout Jacksonville.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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

      {/* Hazardous Waste Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hazardous Waste Removal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive hazardous waste removal services for all your safety and compliance needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hazardousWasteServices.map((service, index) => (
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
              Why Choose Jacksonville Junk Removals for Hazardous Waste Removal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Licensed, insured, and EPA compliant hazardous waste disposal services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hazardousWasteFeatures.map((feature, index) => (
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

      {/* Hazardous Waste Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hazardous Waste Removal Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How our hazardous waste removal services benefit Jacksonville businesses and residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hazardousWasteBenefits.map((benefit, index) => (
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
              EPA Compliant Hazardous Waste Disposal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to proper hazardous waste disposal and environmental protection
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

      {/* Hazardous Waste Removal Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Hazardous Waste Removal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process for safe and compliant hazardous waste removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your hazardous waste types, quantities, and disposal requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We plan the removal schedule and ensure proper safety protocols
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safe Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes waste with proper safety equipment and procedures
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Complete documentation and tracking for compliance and peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hazardous Waste Types */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hazardous Waste Types We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive hazardous waste removal services for various material types
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TestTube className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chemical Waste</h3>
                  <p className="text-gray-600 text-sm">
                    Industrial chemicals, solvents, and laboratory chemicals
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Battery className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Electronic Waste</h3>
                  <p className="text-gray-600 text-sm">
                    Electronics, batteries, and power sources requiring special disposal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Paint & Coatings</h3>
                  <p className="text-gray-600 text-sm">
                    Paint, solvents, and coating materials requiring special handling
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Hazardous Materials</h3>
              <div className="space-y-3">
                {hazardousWasteTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety & Compliance */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Safety & Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest safety and compliance standards for hazardous waste removal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safety Equipment</h3>
                  <p className="text-gray-600 text-sm">
                    Professional safety equipment and protective gear for all crew members
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">EPA Compliance</h3>
                  <p className="text-gray-600 text-sm">
                    Full compliance with EPA and state hazardous waste regulations
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-gray-600 text-sm">
                    Complete documentation and tracking for compliance and liability protection
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Licensing & Insurance</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">EPA licensed disposal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">State hazardous waste permits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Full liability insurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Worker safety training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Emergency response protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Regular safety audits</span>
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
            Ready for Professional Hazardous Waste Removal?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free hazardous waste removal quote today and experience professional service 
            that ensures safety, compliance, and environmental protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
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
              Related Hazardous Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive hazardous and specialized disposal solutions for all your needs
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
