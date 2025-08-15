'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, User, Phone, Mail, FileText } from 'lucide-react'

interface BookingFormProps {
  serviceType: string
  onClose: () => void
  onSuccess: (booking: any) => void
}

interface TimeSlot {
  time: string
  available: boolean
}

export default function BookingForm({ serviceType, onClose, onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    address: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    urgent: false
  })
  
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1) // 1: Date, 2: Time, 3: Details, 4: Confirmation

  // Get available dates (next 14 days)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip Sundays (or adjust based on your business hours)
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          })
        })
      }
    }
    
    return dates
  }

  // Load available time slots when date is selected
  useEffect(() => {
    if (formData.preferredDate && step >= 2) {
      loadAvailableSlots()
    }
  }, [formData.preferredDate, step])

  const loadAvailableSlots = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `/api/calendar?action=slots&date=${formData.preferredDate}&service=${serviceType}`
      )
      
      if (response.ok) {
        const data = await response.json()
        const slots = data.slots.map((time: string) => ({
          time,
          available: true
        }))
        setAvailableSlots(slots)
      } else {
        setError('Failed to load available times')
      }
    } catch (error) {
      setError('Failed to load available times')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step < 4) {
      setStep(step + 1)
      return
    }

    try {
      setLoading(true)
      setError('')

      const response = await fetch('/api/calendar/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType
        })
      })

      const data = await response.json()

      if (data.success) {
        onSuccess(data.booking)
        onClose()
      } else {
        setError(data.error || 'Failed to book appointment')
      }
    } catch (error) {
      setError('Failed to book appointment')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose a Date</h3>
      <div className="grid grid-cols-2 gap-3">
        {getAvailableDates().map(({ date, display }) => (
          <button
            key={date}
            type="button"
            onClick={() => handleInputChange('preferredDate', date)}
            className={`p-3 text-center rounded-lg border-2 transition-all ${
              formData.preferredDate === date
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {display}
          </button>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Choose a Time</h3>
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading available times...</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleInputChange('preferredTime', slot.time)}
              className={`p-3 text-center rounded-lg border-2 transition-all ${
                formData.preferredTime === slot.time
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <User className="inline w-4 h-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            value={formData.customerName}
            onChange={(e) => handleInputChange('customerName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Mail className="inline w-4 h-4 mr-1" />
            Email
          </label>
          <input
            type="email"
            value={formData.customerEmail}
            onChange={(e) => handleInputChange('customerEmail', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <Phone className="inline w-4 h-4 mr-1" />
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.customerPhone}
            onChange={(e) => handleInputChange('customerPhone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <MapPin className="inline w-4 h-4 mr-1" />
            Service Address
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FileText className="inline w-4 h-4 mr-1" />
            Description of Items
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Describe what needs to be removed..."
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="urgent"
            checked={formData.urgent}
            onChange={(e) => handleInputChange('urgent', e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="urgent" className="text-sm text-gray-700">
            This is urgent - I need same-day service
          </label>
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Confirm Your Booking</h3>
      
      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Service:</span>
          <span className="capitalize">{serviceType.replace('-', ' ')}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date:</span>
          <span>{new Date(formData.preferredDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Time:</span>
          <span>{formData.preferredTime}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Name:</span>
          <span>{formData.customerName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Urgent:</span>
          <span>{formData.urgent ? 'Yes' : 'No'}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        By confirming, you agree to our service terms and cancellation policy.
      </p>
    </div>
  )

  const renderStep = () => {
    switch (step) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      default: return renderStep1()
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1: return !!formData.preferredDate
      case 2: return !!formData.preferredTime
      case 3: return !!formData.customerName && !!formData.customerEmail && !!formData.customerPhone && !!formData.address
      case 4: return true
      default: return false
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Book {serviceType.replace('-', ' ')} Service
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-6">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}

            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                disabled={!canProceed() || loading}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : step === 4 ? 'Confirm Booking' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
