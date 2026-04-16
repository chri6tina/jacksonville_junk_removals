'use client'

import { Phone, Calendar, Truck, Leaf } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Free Quote',
      description: 'Call us or use our online estimation tool to get a free, no-obligation quote for your junk removal project.',
      color: 'text-blue-600'
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Schedule Pickup',
      description: 'Choose a convenient time that works for you. We offer same-day service and flexible scheduling options.',
      color: 'text-green-600'
    },
    {
      number: '03',
      icon: Truck,
      title: 'Crew Arrives',
      description: 'Our professional, licensed team arrives on time, ready to safely remove and load all your unwanted items.',
      color: 'text-purple-600'
    },
    {
      number: '04',
      icon: Leaf,
      title: 'Recycling & Donation',
      description: 'We responsibly dispose of your items, recycling what we can and donating usable items to local charities.',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes junk removal hassle-free and efficient. From quote to cleanup, we handle everything.
          </p>
        </div>

        {/* Process Steps - New Clean Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Step Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Process Flow */}
        <div className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Simple & Streamlined Process
              </h3>
              <p className="text-gray-600 text-sm">
                Each step builds on the previous one, ensuring a smooth experience from start to finish
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900 rounded-lg p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their junk removal needs. 
              Get your free quote today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Quote
              </a>
              <a
                href="/estimation"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Try Our Estimator
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
