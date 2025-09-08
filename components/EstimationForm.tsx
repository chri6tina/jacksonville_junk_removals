'use client'

import { useState } from 'react'
import { Truck, Calculator, MapPin, Package, Calendar, Phone } from 'lucide-react'

interface EstimationData {
  serviceType: string
  estimatedWeight: string
  zipCode: string
  truckSize: string
  additionalServices: string[]
  preferredDate: string
  preferredTime: string
  contactName: string
  contactPhone: string
  contactEmail: string
  projectDescription: string
}

const EstimationForm = () => {
  const [formData, setFormData] = useState<EstimationData>({
    serviceType: '',
    estimatedWeight: '',
    zipCode: '',
    truckSize: '',
    additionalServices: [],
    preferredDate: '',
    preferredTime: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    projectDescription: ''
  })

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceTypes = [
    { id: 'residential', name: 'Residential Junk Removal', basePrice: 150 },
    { id: 'commercial', name: 'Commercial Junk Removal', basePrice: 200 },
    { id: 'construction', name: 'Construction Debris', basePrice: 175 },
    { id: 'appliance', name: 'Appliance Removal', basePrice: 75 },
    { id: 'mattress', name: 'Mattress Removal', basePrice: 75 },
    { id: 'furniture', name: 'Furniture Removal', basePrice: 100 },
    { id: 'garage', name: 'Garage Cleanout', basePrice: 200 },
    { id: 'estate', name: 'Estate Cleanout', basePrice: 300 },
    { id: 'flood-cleanup', name: 'Flood Cleanup', basePrice: 400 },
    { id: 'hot-tub', name: 'Hot Tub Removal', basePrice: 150 },
    { id: 'e-waste', name: 'E-Waste Removal', basePrice: 100 }
  ]

  const weightRanges = [
    { id: 'light', name: 'Light (0-500 lbs)', multiplier: 1.0 },
    { id: 'medium', name: 'Medium (500-1000 lbs)', multiplier: 1.3 },
    { id: 'heavy', name: 'Heavy (1000-2000 lbs)', multiplier: 1.6 },
    { id: 'very-heavy', name: 'Very Heavy (2000+ lbs)', multiplier: 2.0 }
  ]

  const truckSizes = [
    { id: 'quarter', name: 'Quarter Truck', multiplier: 0.7, special: '$99 Special' },
    { id: 'half', name: 'Half Truck', multiplier: 1.0 },
    { id: 'full', name: 'Full Truck', multiplier: 1.5 },
    { id: 'multiple', name: 'Multiple Trucks', multiplier: 2.0 }
  ]

  const additionalServices = [
    { id: 'same-day', name: 'Same Day Service', price: 50 },
    { id: 'weekend', name: 'Weekend Service', price: 75 },
    { id: 'after-hours', name: 'After Hours Service', price: 100 },
    { id: 'hazardous', name: 'Hazardous Waste Handling', price: 150 },
    { id: 'recycling', name: 'Premium Recycling', price: 25 }
  ]

  const handleInputChange = (field: keyof EstimationData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    calculatePrice({ ...formData, [field]: value })
  }

  const calculatePrice = (data: EstimationData) => {
    if (!data.serviceType || !data.estimatedWeight || !data.truckSize) {
      setEstimatedPrice(null)
      return
    }

    const service = serviceTypes.find(s => s.id === data.serviceType)
    const weight = weightRanges.find(w => w.id === data.estimatedWeight)
    const truck = truckSizes.find(t => t.id === data.truckSize)

    if (!service || !weight || !truck) return

    let basePrice = service.basePrice * weight.multiplier * truck.multiplier

    // Add additional services
    data.additionalServices.forEach(serviceId => {
      const additional = additionalServices.find(s => s.id === serviceId)
      if (additional) basePrice += additional.price
    })

    // Special pricing for quarter truck
    if (data.truckSize === 'quarter') {
      basePrice = Math.max(99, basePrice)
    }

    setEstimatedPrice(Math.round(basePrice))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Calculate price first
      calculatePrice(formData)
      setShowResults(true)
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mwpnavgo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.contactName,
          email: formData.contactEmail,
          phone: formData.contactPhone,
          serviceType: formData.serviceType,
          estimatedWeight: formData.estimatedWeight,
          zipCode: formData.zipCode,
          truckSize: formData.truckSize,
          additionalServices: formData.additionalServices.join(', '),
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          projectDescription: formData.projectDescription,
          estimatedPrice: estimatedPrice,
          _subject: `Estimation Request from ${formData.contactName}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false)
          setShowResults(false)
          setFormData({
            serviceType: '',
            estimatedWeight: '',
            zipCode: '',
            truckSize: '',
            additionalServices: [],
            preferredDate: '',
            preferredTime: '',
            contactName: '',
            contactPhone: '',
            contactEmail: '',
            projectDescription: ''
          })
          setEstimatedPrice(null)
        }, 10000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your estimation request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Junk Removal Estimation Tool
        </h2>
        <p className="text-gray-600">
          Fill out the form below to get your instant quote
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => handleInputChange('serviceType', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            required
          >
            <option value="">Select a service type</option>
            {serviceTypes.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - Starting at ${service.basePrice}
              </option>
            ))}
          </select>
        </div>

        {/* Weight and Truck Size Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Weight *
            </label>
            <select
              value={formData.estimatedWeight}
              onChange={(e) => handleInputChange('estimatedWeight', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            >
              <option value="">Select weight range</option>
              {weightRanges.map(weight => (
                <option key={weight.id} value={weight.id}>
                  {weight.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Truck Size *
            </label>
            <select
              value={formData.truckSize}
              onChange={(e) => handleInputChange('truckSize', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            >
              <option value="">Select truck size</option>
              {truckSizes.map(truck => (
                <option key={truck.id} value={truck.id}>
                  {truck.name} {truck.special && `(${truck.special})`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ZIP Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              placeholder="32202"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Services
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {additionalServices.map(service => (
              <label key={service.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.additionalServices.includes(service.id)}
                  onChange={(e) => {
                    const newServices = e.target.checked
                      ? [...formData.additionalServices, service.id]
                      : formData.additionalServices.filter(s => s !== service.id)
                    handleInputChange('additionalServices', newServices)
                  }}
                  className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                />
                <span className="text-sm text-gray-700">
                  {service.name} (+${service.price})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Scheduling */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => handleInputChange('preferredDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => handleInputChange('preferredTime', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            >
              <option value="">Any time</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="evening">Evening (4 PM - 8 PM)</option>
            </select>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Name *
            </label>
            <input
              type="text"
              value={formData.contactName}
              onChange={(e) => handleInputChange('contactName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Phone *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.contactPhone}
                onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                placeholder="(904) 742-3531"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Email
          </label>
          <input
            type="email"
            value={formData.contactEmail}
            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            value={formData.projectDescription}
            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
            rows={4}
            placeholder="Tell us more about your junk removal project..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>

        {/* Estimated Price Display */}
        {estimatedPrice && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Estimated Price
            </h3>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              ${estimatedPrice}
            </div>
            <p className="text-sm text-gray-600">
              *This is an estimate. Final price may vary based on actual project requirements.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Truck className="w-5 h-5" />
                <span>Get Free Quote</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our team will review your request and contact you within 2 hours with a detailed quote and scheduling options.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+19047423531"
                className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Call Now: (904) 742-3531
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setShowResults(false)
                }}
                className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Modal */}
      {showResults && !isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quote Request Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our team will review your request and contact you within 2 hours with a detailed quote and scheduling options.
            </p>
            <div className="space-y-3">
              <div className="text-sm text-gray-500">
                <strong>Service:</strong> {serviceTypes.find(s => s.id === formData.serviceType)?.name}
              </div>
              {estimatedPrice && (
                <div className="text-sm text-gray-500">
                  <strong>Estimated Price:</strong> ${estimatedPrice}
                </div>
              )}
              <div className="text-sm text-gray-500">
                <strong>Contact:</strong> {formData.contactName} - {formData.contactPhone}
              </div>
            </div>
            <button
              onClick={() => setShowResults(false)}
              className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EstimationForm
