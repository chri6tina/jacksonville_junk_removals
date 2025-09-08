import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Truck, 
  Sofa, 
  Building, 
  Shield, 
  Monitor, 
  HardHat, 
  Refrigerator, 
  Leaf, 
  Bath, 
  Package, 
  Warehouse, 
  Briefcase, 
  Store,
  Home,
  Droplets
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Junk Removal Services - Jacksonville Junk Removals',
  description: 'Professional junk removal services in Jacksonville, Florida. From residential cleanouts to commercial demolition, we handle all types of junk removal with transparent pricing.',
  keywords: 'junk removal services Jacksonville, residential junk removal, commercial junk removal, construction debris, appliance removal',
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    id: 'residential',
    name: 'Residential Junk Removal',
    description: 'Complete home cleanouts, garage organization, and residential property cleanup.',
    startingPrice: 150,
    icon: Truck,
    features: ['Same-day service', 'Eco-friendly disposal', 'Free estimates'],
    href: '/services/residential'
  },
  {
    id: 'mattress',
    name: 'Mattress Removal',
    description: 'Professional mattress and box spring removal with eco-friendly disposal.',
    startingPrice: 75,
    icon: Sofa,
    features: ['Flat-rate pricing', 'Same-day pickup', 'Recycling focus'],
    href: '/mattress-removal'
  },
  {
    id: 'commercial',
    name: 'Commercial Junk Removal',
    description: 'Office cleanouts, retail store cleanup, and commercial property maintenance.',
    startingPrice: 200,
    icon: Building,
    features: ['Fast response', 'Licensed crews', 'Custom solutions'],
    href: '/commercial-junk-removal'
  },
  {
    id: 'hazardous',
    name: 'Hazardous Waste Removal',
    description: 'Safe handling and disposal of hazardous materials and chemicals.',
    startingPrice: 250,
    icon: Shield,
    features: ['Licensed handling', 'Safety protocols', 'Proper disposal'],
    href: '/hazardous-waste-removal'
  },
  {
    id: 'e-waste',
    name: 'E-Waste Removal',
    description: 'Electronic waste disposal including computers, TVs, and office equipment.',
    startingPrice: 100,
    icon: Monitor,
    features: ['Data security', 'Recycling focus', 'Certified disposal'],
    href: '/e-waste-junk-removal'
  },
  {
    id: 'construction',
    name: 'Construction Debris Removal',
    description: 'Construction waste, demolition debris, and renovation cleanup.',
    startingPrice: 175,
    icon: HardHat,
    features: ['Project coordination', 'Heavy equipment', 'Bulk disposal'],
    href: '/construction-debris-removal'
  },
  {
    id: 'appliance',
    name: 'Appliance Removal',
    description: 'Refrigerator, washer, dryer, and other appliance disposal.',
    startingPrice: 75,
    icon: Refrigerator,
    features: ['Freon removal', 'Recycling options', 'Same-day service'],
    href: '/appliance-removal'
  },
  {
    id: 'yard-waste',
    name: 'Yard Waste Removal',
    description: 'Landscaping debris, tree trimmings, and outdoor cleanup.',
    startingPrice: 125,
    icon: Leaf,
    features: ['Seasonal services', 'Composting options', 'Bulk removal'],
    href: '/yard-waste-removal'
  },
  {
    id: 'hot-tub',
    name: 'Hot Tub Removal',
    description: 'Complete hot tub removal including demolition and site cleanup.',
    startingPrice: 150,
    icon: Bath,
    features: ['Professional demolition', 'Site cleanup', 'Debris disposal'],
    href: '/hot-tub-removal'
  },
  {
    id: 'furniture',
    name: 'Furniture Removal',
    description: 'Furniture disposal with donation options for usable items.',
    startingPrice: 100,
    icon: Package,
    features: ['Donation focus', 'Bulk pricing', 'Careful handling'],
    href: '/furniture-removal'
  },
  {
    id: 'garage',
    name: 'Garage Cleanout',
    description: 'Complete garage organization and bulk item removal.',
    startingPrice: 200,
    icon: Warehouse,
    features: ['Organization tips', 'Bulk pricing', 'Donation options'],
    href: '/garage-cleanout'
  },
  {
    id: 'office-furniture',
    name: 'Office Furniture Removal',
    description: 'Office furniture disposal and commercial space cleanup.',
    startingPrice: 150,
    icon: Briefcase,
    features: ['Commercial pricing', 'Preparation tips', 'Bulk removal'],
    href: '/office-furniture-removal'
  },
  {
    id: 'retail',
    name: 'Retail Store Cleanout',
    description: 'Retail space cleanup and inventory removal services.',
    startingPrice: 225,
    icon: Store,
    features: ['Store types', 'Inventory handling', 'Commercial services'],
    href: '/retail-store-cleanout'
  },
  {
    id: 'estate',
    name: 'Estate Cleanout',
    description: 'Complete estate cleanout services for probate, estate sales, and home transitions.',
    startingPrice: 300,
    icon: Home,
    features: ['Probate cleanup', 'Estate sale support', 'Compassionate service'],
    href: '/estate-cleanout'
  },
  {
    id: 'flood-cleanup',
    name: 'Flood Cleanup',
    description: 'Emergency flood cleanup and water damage restoration with 24/7 response.',
    startingPrice: 400,
    icon: Droplets,
    features: ['Emergency response', 'Water damage restoration', 'Mold remediation'],
    href: '/flood-cleanup'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Junk Removal Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From residential cleanouts to commercial demolition, we provide comprehensive junk removal 
            services throughout Jacksonville with transparent pricing and eco-friendly disposal.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-gray-300 border border-gray-100">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-200">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  
                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Starting Price */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-gray-900">
                        Starting at ${service.startingPrice}
                      </div>
                      <p className="text-sm text-gray-500">No hidden fees</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      <div className="text-gray-900 font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Special Offers & Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take advantage of our special pricing and package deals for multiple services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* $99 Special */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">$99</div>
                <h3 className="text-xl font-semibold mb-4">Quarter-Truck Special</h3>
                <p className="text-gray-300 mb-6">
                  Perfect for small cleanouts, garage organization, or moving preparation. 
                  Professional service at an unbeatable price.
                </p>
                <Link
                  href="/99-junk-removal"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                >
                  Claim Special
                </Link>
              </div>
            </div>

            {/* Volume Discount */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">Save 15%</div>
                <h3 className="text-xl font-semibold mb-4">Volume Discount</h3>
                <p className="text-gray-600 mb-6">
                  Book multiple services or large projects and save 15% on your total. 
                  Perfect for estate cleanouts and major renovations.
                </p>
                <Link
                  href="/contact"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get your free quote today and experience professional junk removal service 
            that's fast, reliable, and eco-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimation"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
