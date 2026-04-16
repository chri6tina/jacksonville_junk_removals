'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      neighborhood: 'Riverside',
      rating: 5,
      text: 'Jacksonville Junk Removals was incredible! They came same-day and cleared out my entire garage in under 2 hours. Professional, fast, and eco-friendly. Highly recommend!',
      service: 'Garage Cleanout'
    },
    {
      name: 'Mike Rodriguez',
      neighborhood: 'Mandarin',
      rating: 5,
      text: 'Used their $99 special for a small basement cleanup. The crew was punctual, respectful, and did an amazing job. Will definitely use them again for larger projects.',
      service: '$99 Quarter-Truck Special'
    },
    {
      name: 'Jennifer Williams',
      neighborhood: 'Jacksonville Beach',
      rating: 5,
      text: 'They removed old furniture and appliances from my rental property quickly and efficiently. Great communication throughout the process and fair pricing.',
      service: 'Furniture & Appliance Removal'
    },
    {
      name: 'David Chen',
      neighborhood: 'San Marco',
      rating: 5,
      text: 'Professional service from start to finish. They recycled everything possible and donated usable items to charity. Exactly what I was looking for in a junk removal company.',
      service: 'Estate Cleanout'
    },
    {
      name: 'Lisa Thompson',
      neighborhood: 'Arlington',
      rating: 5,
      text: 'Outstanding service! They handled our construction debris removal project with ease. The team was knowledgeable and made sure everything was disposed of properly.',
      service: 'Construction Debris Removal'
    },
    {
      name: 'Robert Martinez',
      neighborhood: 'Jacksonville Beach',
      rating: 5,
      text: 'Emergency flood cleanup service was incredible! They responded within 2 hours and saved our home from extensive water damage. Professional and compassionate throughout.',
      service: 'Flood Cleanup'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Jacksonville residents are saying about our junk removal services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="relative overflow-hidden">
            <div className="text-center">
              <div className="bg-white rounded-lg p-12 shadow-sm border border-gray-100">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-8">
                  <Quote className="w-6 h-6 text-gray-900" />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {testimonials[currentIndex].neighborhood}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-gray-900 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-lg p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Satisfied Customers
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the same level of service that our customers rave about. 
              Get your free quote today and see why we're Jacksonville's trusted choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+19047423531"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
