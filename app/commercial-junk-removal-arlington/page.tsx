import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Truck, Shield, Clock, DollarSign, CheckCircle, Star, Phone, Users, Briefcase, MapPin, Home, Building, Car, Coffee } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Junk Removal Arlington Jacksonville - Office & Business Cleanout (904) 456-3851',
  description: 'Professional commercial junk removal services in Arlington Jacksonville. Office cleanouts, retail cleanup, warehouse clearouts, and business equipment removal. Fast response, licensed crews. Call (904) 456-3851.',
  keywords: 'commercial junk removal Arlington Jacksonville, Arlington office cleanout, Regency business cleanup, Arlington warehouse cleanout, Jacksonville commercial junk removal',
  alternates: {
    canonical: '/commercial-junk-removal-arlington',
  },
}

const commercialServices = [
  {
    name: 'Office Cleanouts',
    description: 'Complete office space cleanup including furniture, equipment, and supplies',
    startingPrice: 200,
    icon: Building2,
    features: ['Office Furniture Removal', 'Equipment Disposal', 'Document Shredding', 'Fast Response']
  },
  {
    name: 'Retail Store Cleanouts',
    description: 'Retail space cleanup and inventory removal services',
    startingPrice: 225,
    icon: Briefcase,
    features: ['Store Fixtures', 'Inventory Removal', 'Display Cases', 'Commercial Pricing']
  },
  {
    name: 'Warehouse Cleanouts',
    description: 'Large-scale warehouse and industrial space cleanup',
    startingPrice: 300,
    icon: Building2,
    features: ['Heavy Equipment', 'Bulk Materials', 'Industrial Waste', 'Project Management']
  },
  {
    name: 'Restaurant & Hospitality',
    description: 'Restaurant equipment removal and hospitality space cleanup',
    startingPrice: 250,
    icon: Building2,
    features: ['Kitchen Equipment', 'Dining Furniture', 'Commercial Appliances', 'Health Code Compliance']
  },
  {
    name: 'Medical & Dental Offices',
    description: 'Healthcare facility cleanup and medical equipment disposal',
    startingPrice: 275,
    icon: Shield,
    features: ['HIPAA Compliance', 'Medical Equipment', 'Biohazard Protocols', 'Licensed Handling']
  },
  {
    name: 'Construction Site Cleanup',
    description: 'Construction debris and job site cleanup services',
    startingPrice: 200,
    icon: Truck,
    features: ['Construction Debris', 'Site Cleanup', 'Project Coordination', 'Heavy Equipment']
  }
]

const commercialFeatures = [
  'Fast response times for urgent business needs',
  'Licensed, bonded, and insured crews',
  'Flexible scheduling including after-hours service',
  'Commercial zoning and regulation compliance',
  'Project management and coordination',
  'Eco-friendly disposal and recycling'
]

const commercialBenefits = [
  {
    benefit: 'Minimize Business Disruption',
    description: 'We work efficiently to get your Arlington business back to normal operations quickly',
    icon: '⚡'
  },
  {
    benefit: 'Compliance & Safety',
    description: 'Proper disposal methods that meet all commercial and environmental regulations',
    icon: '🛡️'
  },
  {
    benefit: 'Cost-Effective Solutions',
    description: 'Competitive pricing with volume discounts for large Arlington projects',
    icon: '💰'
  },
  {
    benefit: 'Professional Service',
    description: 'Experienced crews that understand Arlington commercial property requirements',
    icon: '👷'
  }
]

export default function CommercialJunkRemovalArlingtonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-bold">COMMERCIAL SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Commercial Junk Removal
            <br />
            <span className="text-yellow-400">Arlington Jacksonville</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Professional commercial junk removal services for Arlington businesses. 
            Office cleanouts, retail cleanup, warehouse clearouts, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimation"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Arlington Quote</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              <span>Contact Arlington Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Arlington Service Alert */}
      <section className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Building2 className="w-6 h-6" />
            <span className="text-lg font-semibold">
              🏢 ARLINGTON JACKSONVILLE COMMERCIAL JUNK REMOVAL SPECIALISTS 🏢
            </span>
            <Building2 className="w-6 h-6" />
          </div>
          <p className="mt-2 text-sm">
            Call (904) 456-3851 • Serving Arlington & Regency Areas • Same-Day Service Available
          </p>
        </div>
      </section>

      {/* Arlington Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arlington Commercial Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive commercial junk removal across all Arlington Jacksonville business districts and commercial areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Arlington Proper */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Proper</h3>
              <p className="text-gray-600 mb-4">
                Mixed commercial and residential area with small businesses and professional offices
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Professional Offices</div>
                <div>• Small Businesses</div>
                <div>• Medical Practices</div>
                <div>• Service Centers</div>
              </div>
            </div>

            {/* Regency Area */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regency Area</h3>
              <p className="text-gray-600 mb-4">
                Major commercial corridor with shopping centers, office buildings, and retail complexes
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Regency Square Mall</div>
                <div>• Office Buildings</div>
                <div>• Retail Centers</div>
                <div>• Medical Facilities</div>
              </div>
            </div>

            {/* Arlington Expressway */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Car className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Expressway</h3>
              <p className="text-gray-600 mb-4">
                Commercial corridor with restaurants, service businesses, and retail establishments
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div>• Restaurants</div>
                <div>• Auto Dealerships</div>
                <div>• Service Centers</div>
                <div>• Retail Stores</div>
              </div>
            </div>

            {/* Arlington Heights */}
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Coffee className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arlington Heights</h3>
                <p className="text-gray-600 mb-4">
                  Established area with professional services and small commercial properties
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Professional Services</div>
                  <div>• Small Offices</div>
                  <div>• Local Businesses</div>
                  <div>• Service Providers</div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arlington Commercial Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional commercial junk removal services tailored for Arlington Jacksonville businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-green-600">${service.startingPrice}</span>
                    <span className="text-gray-500">Starting Price</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors duration-200 block"
                >
                  Get Arlington Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arlington Commercial Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Arlington Commercial Projects?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Local Arlington expertise combined with professional commercial service standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.benefit}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arlington Commercial Features List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arlington Commercial Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional commercial junk removal features designed for Arlington businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arlington Commercial Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Arlington Commercial Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Successfully completed commercial junk removal projects across Arlington Jacksonville
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Regency Office Complex */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regency Office Complex Cleanout</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Location:</span>
                  <span className="text-gray-600">Regency Area</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Project Size:</span>
                  <span className="text-gray-600">25,000 sq ft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Timeline:</span>
                  <span className="text-gray-600">3 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Services:</span>
                  <span className="text-gray-600">Office furniture, equipment, documents</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 mt-4">
                  <p className="text-blue-800 font-semibold">
                    Result: Office complex cleaned and ready for new tenants with zero business disruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Arlington Restaurant Renovation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Arlington Restaurant Renovation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Location:</span>
                  <span className="text-gray-600">Arlington Expressway</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Project Size:</span>
                  <span className="text-gray-600">4,500 sq ft</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Timeline:</span>
                  <span className="text-gray-600">2 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">Services:</span>
                  <span className="text-gray-600">Kitchen equipment, dining furniture, fixtures</span>
                </div>
                <div className="bg-green-100 rounded-lg p-4 mt-4">
                  <p className="text-green-800 font-semibold">
                    Result: Restaurant renovation completed on schedule with health department approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Arlington Commercial Junk Removal?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get instant quotes and professional service for your Arlington Jacksonville commercial project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimation"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get Arlington Quote</span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
            >
              <span>Contact Arlington Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
