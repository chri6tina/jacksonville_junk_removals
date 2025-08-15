'use client'

import { Zap, DollarSign, Clock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Same-Day Service',
      description: 'Get your junk removed the same day you call. No waiting, no delays - just fast, efficient service when you need it most.',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. Get a clear, upfront quote with our transparent pricing structure. What you see is what you pay.',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'We work around your schedule. Early morning, late evening, weekends - we\'re here when it\'s convenient for you.',
      color: 'text-purple-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Jacksonville Junk Removals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make junk removal simple, fast, and hassle-free with our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Benefits
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="font-medium text-gray-900">Licensed & Insured</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <span className="font-medium text-gray-900">Eco-Friendly</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">⭐</span>
                </div>
                <span className="font-medium text-gray-900">5-Star Rated</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📞</span>
                </div>
                <span className="font-medium text-gray-900">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
