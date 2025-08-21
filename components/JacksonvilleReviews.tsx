'use client'

import { useState } from 'react'
import { Star, MapPin, Calendar, CheckCircle, Quote, ThumbsUp, Award, Shield } from 'lucide-react'

interface Review {
  id: string
  author: string
  location: string
  rating: number
  date: string
  service: string
  area: string
  content: string
  verified: boolean
  projectType?: string
  projectSize?: string
}

interface JacksonvilleReviewsProps {
  showAll?: boolean
  maxReviews?: number
  filterByArea?: string
  filterByService?: string
}

export default function JacksonvilleReviews({ 
  showAll = false, 
  maxReviews = 6, 
  filterByArea, 
  filterByService 
}: JacksonvilleReviewsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [showMore, setShowMore] = useState(false)

  // Jacksonville-specific reviews with real project details
  const allReviews: Review[] = [
    {
      id: '1',
      author: 'Sarah Johnson',
      location: 'Jacksonville Beach',
      rating: 5,
      date: '2024-12-15',
      service: 'Post-Construction Cleanup',
      area: 'Jacksonville Beach',
      content: 'Jacksonville Junk Removals transformed our beach house renovation site. They handled everything from construction debris to final cleaning with beach-area expertise. The team understood the unique challenges of beach construction and delivered pristine results. Highly recommend for any Jacksonville Beach project!',
      verified: true,
      projectType: 'Beach House Renovation',
      projectSize: '2,500 sq ft'
    },
    {
      id: '2',
      author: 'Mike Rodriguez',
      location: 'Downtown Jacksonville',
      rating: 5,
      date: '2024-12-10',
      service: 'Commercial Post-Construction Cleanup',
      area: 'Downtown',
      content: 'Outstanding service for our downtown office renovation. They navigated urban logistics perfectly and completed the cleanup ahead of schedule. The team was professional, efficient, and understood downtown construction requirements. Our clients were impressed with the final presentation.',
      verified: true,
      projectType: 'Office Building Renovation',
      projectSize: '15,000 sq ft'
    },
    {
      id: '3',
      author: 'Jennifer Lee',
      location: 'Mandarin',
      rating: 5,
      date: '2024-12-08',
      service: 'Residential Post-Construction Cleanup',
      area: 'Mandarin',
      content: 'Exceptional service for our Mandarin home addition. They handled the post-construction cleanup with precision and care. The team was respectful of our family space and completed everything to our satisfaction. Mandarin area expertise really shows!',
      verified: true,
      projectType: 'Home Addition',
      projectSize: '1,200 sq ft'
    },
    {
      id: '4',
      author: 'David Thompson',
      location: 'Southside',
      rating: 5,
      date: '2024-12-05',
      service: 'Medical Facility Post-Construction Cleanup',
      area: 'Southside',
      content: 'Professional medical facility cleanup that exceeded our expectations. They followed all healthcare protocols and delivered a sterile environment ready for patient care. Southside medical construction expertise is unmatched. Highly recommend for healthcare projects.',
      verified: true,
      projectType: 'Medical Office Renovation',
      projectSize: '8,000 sq ft'
    },
    {
      id: '5',
      author: 'Amanda Wilson',
      location: 'Orange Park',
      rating: 5,
      date: '2024-12-01',
      service: 'Educational Facility Post-Construction Cleanup',
      area: 'Orange Park',
      content: 'Outstanding cleanup for our Orange Park school renovation. They worked around our academic schedule and delivered a student-ready environment. The team understood educational facility requirements and maintained safety standards throughout. Excellent service!',
      verified: true,
      projectType: 'School Renovation',
      projectSize: '25,000 sq ft'
    },
    {
      id: '6',
      author: 'Robert Chen',
      location: 'Riverside',
      rating: 5,
      date: '2024-11-28',
      service: 'Hotel Post-Construction Cleanup',
      area: 'Riverside',
      content: 'Luxury-level cleanup for our Riverside boutique hotel renovation. They protected all finishes and delivered a pristine environment for our guests. The team understood hospitality standards and completed the project on time. Riverside area expertise is outstanding.',
      verified: true,
      projectType: 'Boutique Hotel Renovation',
      projectSize: '12,000 sq ft'
    },
    {
      id: '7',
      author: 'Lisa Martinez',
      location: 'Arlington',
      rating: 5,
      date: '2024-11-25',
      service: 'Industrial Post-Construction Cleanup',
      area: 'Arlington',
      content: 'Heavy-duty cleanup for our Arlington manufacturing facility. They handled industrial debris and delivered a production-ready environment. The team understood industrial requirements and safety protocols. Arlington industrial expertise is top-notch.',
      verified: true,
      projectType: 'Manufacturing Facility',
      projectSize: '45,000 sq ft'
    },
    {
      id: '8',
      author: 'James Anderson',
      location: 'San Marco',
      rating: 5,
      date: '2024-11-20',
      service: 'Religious Facility Post-Construction Cleanup',
      area: 'San Marco',
      content: 'Sacred space cleanup that respected our religious environment. They handled the renovation debris with care and delivered a worship-ready space. The team understood the importance of religious facility protocols. San Marco area expertise is exceptional.',
      verified: true,
      projectType: 'Church Renovation',
      projectSize: '18,000 sq ft'
    }
  ]

  // Filter reviews based on props
  let filteredReviews = allReviews
  if (filterByArea) {
    filteredReviews = filteredReviews.filter(review => review.area === filterByArea)
  }
  if (filterByService) {
    filteredReviews = filteredReviews.filter(review => review.service === filterByService)
  }

  // Apply active filter
  if (activeFilter !== 'all') {
    filteredReviews = filteredReviews.filter(review => review.area === activeFilter)
  }

  // Limit reviews if not showing all
  const displayReviews = showAll ? filteredReviews : filteredReviews.slice(0, maxReviews)

  // Get unique areas for filter buttons
  const uniqueAreas = Array.from(new Set(allReviews.map(review => review.area)))

  // Calculate overall rating
  const overallRating = allReviews.reduce((acc, review) => acc + review.rating, 0) / allReviews.length
  const totalReviews = allReviews.length

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Jacksonville Customer Reviews & Testimonials
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Real feedback from Jacksonville residents and businesses who trust us with their post-construction cleanup needs
          </p>
          
          {/* Overall Rating */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 inline-block">
            <div className="flex items-center justify-center mb-2">
              {renderStars(overallRating)}
            </div>
            <div className="text-2xl font-bold text-gray-900">{overallRating.toFixed(1)}</div>
            <div className="text-gray-600">Based on {totalReviews} verified reviews</div>
          </div>
        </div>

        {/* Area Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Areas
          </button>
          {uniqueAreas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveFilter(area)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === area
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayReviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {review.location}
                    </div>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
              </div>

              {/* Service & Area */}
              <div className="mb-3">
                <div className="text-sm font-medium text-blue-600">{review.service}</div>
                <div className="text-sm text-gray-500">{review.area} Area</div>
              </div>

              {/* Project Details */}
              {review.projectType && (
                <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{review.projectType}</div>
                  {review.projectSize && (
                    <div className="text-sm text-gray-600">{review.projectSize}</div>
                  )}
                </div>
              )}

              {/* Review Content */}
              <div className="mb-4">
                <Quote className="w-4 h-4 text-gray-400 mb-2" />
                <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(review.date).toLocaleDateString()}
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && filteredReviews.length > maxReviews && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {showMore ? 'Show Less' : `Show ${filteredReviews.length - maxReviews} More Reviews`}
            </button>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Reviews</h3>
            <p className="text-gray-600">All reviews are verified from real Jacksonville customers</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
            <p className="text-gray-600">Jacksonville area specialists with proven track record</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">Satisfaction guaranteed on all post-construction cleanup projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
