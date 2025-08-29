'use client'

import Link from 'next/link'
import { 
  Home, 
  Building2, 
  HardHat, 
  Sofa, 
  TreePine, 
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  Droplets
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Residential Junk Removal',
    description: 'Clear out garages, basements, attics, and entire homes. We handle everything from old furniture to household clutter.',
    icon: Home,
    href: '/services/residential',
    features: ['Garage Cleanouts', 'Basement Clearing', 'Attic Organization', 'Moving Cleanup'],
    popular: false
  },
  {
    id: 2,
    title: 'Commercial Office Cleanouts',
    description: 'Professional office cleanout services for businesses, retail spaces, and commercial properties.',
    icon: Building2,
    href: '/commercial-junk-removal',
    features: ['Office Furniture', 'Equipment Removal', 'Retail Space Clearing', 'Warehouse Cleanouts'],
    popular: true
  },
  {
    id: 3,
    title: 'Construction Debris Removal',
    description: 'Remove construction waste, demolition debris, and building materials from job sites.',
    icon: HardHat,
    href: '/construction-debris-removal',
    features: ['Demolition Debris', 'Building Materials', 'Renovation Waste', 'Site Cleanup'],
    popular: false
  },
  {
    id: 4,
    title: 'Appliance & Furniture Pickup',
    description: 'Remove old appliances, furniture, and large items that are difficult to dispose of.',
    icon: Sofa,
    href: '/appliance-removal',
    features: ['Old Appliances', 'Furniture Removal', 'Large Item Pickup', 'Electronics Disposal'],
    popular: false
  },
  {
    id: 5,
    title: 'Yard Waste Cleanup',
    description: 'Clear yard debris, tree branches, landscaping waste, and outdoor clutter.',
    icon: TreePine,
    href: '/yard-waste-removal',
    features: ['Tree Branches', 'Landscaping Debris', 'Outdoor Furniture', 'Garden Waste'],
    popular: false
  },
  {
    id: 6,
    title: 'Donation & Recycling Services',
    description: 'We donate usable items to local charities and recycle materials whenever possible.',
    icon: Heart,
    href: '/services',
    features: ['Charity Donations', 'Material Recycling', 'Eco-Friendly Disposal', 'Sustainability Focus'],
    popular: false
  },
  {
    id: 7,
    title: 'Emergency Flood Cleanup',
    description: '24/7 emergency flood cleanup and water damage restoration with rapid response teams.',
    icon: Droplets,
    href: '/flood-cleanup',
    features: ['Emergency Response', 'Water Damage Restoration', 'Mold Remediation', 'Insurance Support'],
    popular: false
  }
]

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#f57c00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#014421]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#f57c00]/10 border border-[#f57c00]/20 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-[#f57c00]" fill="currentColor" />
            <span className="text-sm font-semibold text-[#f57c00]">Professional Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-[#2f3e46] mb-6">
            Our <span className="bg-gradient-to-r from-[#014421] to-[#0a5a2e] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#5e6973] max-w-4xl mx-auto leading-relaxed">
            Comprehensive junk removal solutions for residential, commercial, and construction needs. 
            We handle everything from small cleanouts to large-scale projects with eco-friendly disposal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#f57c00] to-[#ff8f1f] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 h-full border border-gray-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#014421]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#014421] to-[#0a5a2e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f57c00] group-hover:to-[#ff8f1f] transition-all duration-500 shadow-lg">
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#2f3e46] mb-4 group-hover:text-[#014421] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#5e6973] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#5e6973]">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#f57c00] to-[#ff8f1f] rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-[#014421] font-bold hover:text-[#f57c00] transition-colors duration-300 group-hover:translate-x-2"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f57c00]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-[#014421] to-[#0a5a2e] rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-xl lg:text-2xl text-[#f5f5f5]/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                We handle unique junk removal challenges. Contact us for a free consultation 
                and custom quote tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-[#f57c00] to-[#ff8f1f] hover:from-[#ff8f1f] hover:to-[#f57c00] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#f57c00]/25 inline-flex items-center space-x-3"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center space-x-6 text-[#f5f5f5]/80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#f57c00]" />
                    <span className="text-sm">Free Estimates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#f57c00]" />
                    <div className="text-sm">Same Day Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
