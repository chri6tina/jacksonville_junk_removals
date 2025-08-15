'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ThumbsUp, MessageCircle, Calendar, Phone } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  content: string
  date: string
  service: string
  verified: boolean
  helpful: number
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      author: 'Sarah M.',
      rating: 5,
      content: 'Amazing service! They were fast, professional, and cleaned up everything perfectly. The crew was courteous and efficient. Highly recommend Jacksonville Junk Removals!',
      date: '2024-01-15',
      service: 'Garage Cleanout',
      verified: true,
      helpful: 12
    },
    {
      id: '2',
      author: 'Mike R.',
      rating: 5,
      content: 'Best junk removal company in Jacksonville. Fair pricing and excellent customer service. They removed my old furniture and appliances quickly. Will definitely use again!',
      date: '2024-01-10',
      service: 'Furniture Removal',
      verified: true,
      helpful: 8
    },
    {
      id: '3',
      author: 'Jennifer L.',
      rating: 5,
      content: 'They made my garage cleanout so easy. Professional crew and great communication throughout the process. The price was exactly what they quoted. Excellent service!',
      date: '2024-01-08',
      service: 'Garage Cleanout',
      verified: true,
      helpful: 15
    },
    {
      id: '4',
      author: 'David K.',
      rating: 5,
      content: 'Outstanding service! They removed construction debris from my renovation project efficiently. The team was professional and cleaned up the site perfectly.',
      date: '2024-01-05',
      service: 'Construction Debris Removal',
      verified: true,
      helpful: 6
    },
    {
      id: '5',
      author: 'Lisa P.',
      rating: 5,
      content: 'Fast and reliable junk removal service. They came on time and completed the job quickly. Very professional and reasonably priced. Highly satisfied!',
      date: '2024-01-03',
      service: 'Mattress Removal',
      verified: true,
      helpful: 9
    }
  ])

  const [showAllReviews, setShowAllReviews] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('all')

  const services = ['all', 'Garage Cleanout', 'Furniture Removal', 'Construction Debris Removal', 'Mattress Removal', 'Appliance Removal']

  const filteredReviews = selectedService === 'all' 
    ? reviews 
    : reviews.filter(review => review.service === selectedService)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  const handleHelpful = (reviewId: string) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See why Jacksonville residents and businesses choose us for their junk removal needs.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="text-6xl font-bold text-blue-600 mr-4">{averageRating.toFixed(1)}</div>
            <div className="text-left">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {totalReviews} verified reviews</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-2 text-green-500" />
              <span>100% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-2 text-blue-500" />
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-purple-500" />
              <span>Same-Day Service</span>
            </div>
          </div>
        </div>

        {/* Service Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedService === service
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {service === 'all' ? 'All Services' : service}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(showAllReviews ? filteredReviews : filteredReviews.slice(0, 6)).map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <p className="text-sm text-gray-500">{review.service}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <Quote className="w-5 h-5 text-gray-300 mb-2" />
                <p className="text-gray-700 leading-relaxed">{review.content}</p>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(review.date).toLocaleDateString()}</span>
                <div className="flex items-center space-x-4">
                  {review.verified && (
                    <span className="text-green-600 font-medium">✓ Verified</span>
                  )}
                  <button
                    onClick={() => handleHelpful(review.id)}
                    className="flex items-center hover:text-blue-600 transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.helpful}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredReviews.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {showAllReviews ? 'Show Less' : `Show All ${filteredReviews.length} Reviews`}
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Our 5-Star Service?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Jacksonville Junk Removals for their junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/estimation"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Get Free Quote
            </a>
            <a
              href="tel:904-456-3851"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
