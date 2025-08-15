'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, Truck, CheckCircle, AlertCircle, Phone } from 'lucide-react'

interface TimeSlot {
  id: string
  time: string
  available: boolean
  price: number
}

interface ServiceType {
  id: string
  name: string
  description: string
  basePrice: number
  icon: string
}

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedService, setSelectedService] = useState<string>('')
  const [isBooking, setIsBooking] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const serviceTypes: ServiceType[] = [
    {
      id: 'residential',
      name: 'Residential Junk Removal',
      description: 'Home cleanouts, garage cleanouts, furniture removal',
      basePrice: 150,
      icon: '🏠'
    },
    {
      id: 'commercial',
      name: 'Commercial Junk Removal',
      description: 'Office cleanouts, retail store cleanouts, warehouse cleanouts',
      basePrice: 250,
      icon: '🏢'
    },
    {
      id: 'construction',
      name: 'Construction Debris',
      description: 'Renovation waste, demolition debris, building materials',
      basePrice: 200,
      icon: '🏗️'
    },
    {
      id: 'appliance',
      name: 'Appliance Removal',
      description: 'Refrigerators, washers, dryers, dishwashers',
      basePrice: 75,
      icon: '🔌'
    },
    {
      id: 'mattress',
      name: 'Mattress Removal',
      description: 'Bed frames, box springs, mattress disposal',
      basePrice: 50,
      icon: '🛏️'
    },
    {
      id: 'furniture',
      name: 'Furniture Removal',
      description: 'Couches, chairs, tables, bedroom sets',
      basePrice: 100,
      icon: '🪑'
    }
  ]

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '8:00 AM', available: true, price: 0 },
    { id: '2', time: '9:00 AM', available: true, price: 0 },
    { id: '3', time: '10:00 AM', available: true, price: 0 },
    { id: '4', time: '11:00 AM', available: true, price: 0 },
    { id: '5', time: '12:00 PM', available: true, price: 0 },
    { id: '6', time: '1:00 PM', available: true, price: 0 },
    { id: '7', time: '2:00 PM', available: true, price: 0 },
    { id: '8', time: '3:00 PM', available: true, price: 0 },
    { id: '9', time: '4:00 PM', available: true, price: 0 },
    { id: '10', time: '5:00 PM', available: true, price: 0 },
    { id: '11', time: '6:00 PM', available: false, price: 25 },
    { id: '12', time: '7:00 PM', available: false, price: 50 }
  ]

  // Generate next 30 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }
    
    return dates
  }

  const dates = generateDates()

  const getSelectedServicePrice = () => {
    const service = serviceTypes.find(s => s.id === selectedService)
    return service?.basePrice || 0
  }

  const getSelectedTimePrice = () => {
    const timeSlot = timeSlots.find(t => t.id === selectedTime)
    return timeSlot?.price || 0
  }

  const totalPrice = getSelectedServicePrice() + getSelectedTimePrice()

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      alert('Please select a date, time, and service type')
      return
    }

    setIsBooking(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsBooking(false)
    setBookingSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false)
      setSelectedDate(null)
      setSelectedTime('')
      setSelectedService('')
    }, 3000)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isWeekend = (date: Date) => {
    return date.getDay() === 0 || date.getDay() === 6
  }

  if (bookingSuccess) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Booking Confirmed! 🎉
          </h2>
          <p className="text-xl text-green-700 mb-6">
            We've received your booking request and will contact you within 30 minutes to confirm details.
          </p>
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="font-medium">
                  {serviceTypes.find(s => s.id === selectedService)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">
                  {selectedDate ? formatDate(selectedDate) : ''}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span className="font-medium">
                  {timeSlots.find(t => t.id === selectedTime)?.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span className="font-bold text-green-600">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Junk Removal Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your junk removal service in just a few clicks. Choose your preferred date and time, and we'll handle the rest!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Calendar & Time Selection */}
          <div className="space-y-8">
            {/* Service Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2 text-blue-600" />
                Select Service Type
              </h3>
              <div className="grid gap-3">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">${service.basePrice}</div>
                        <div className="text-xs text-gray-500">starting</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Select Date
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    disabled={isWeekend(date)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'bg-blue-600 text-white shadow-lg'
                        : isWeekend(date)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{date.getDate()}</div>
                      {isToday(date) && (
                        <div className="text-xs text-blue-600 font-bold">TODAY</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                Weekend appointments available with premium pricing
              </div>
            </div>

            {/* Time Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Select Time
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedTime(slot.id)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTime === slot.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : slot.available
                        ? 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{slot.time}</div>
                      {slot.price > 0 && (
                        <div className="text-xs text-orange-600">+${slot.price}</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary & Form */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Booking Summary
              </h3>
              
              {selectedService && (
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Service Type:</span>
                    <span className="font-semibold">
                      {serviceTypes.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  
                  {selectedDate && (
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{formatDate(selectedDate)}</span>
                    </div>
                  )}
                  
                  {selectedTime && (
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">
                        {timeSlots.find(t => t.id === selectedTime)?.time}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Pricing Breakdown */}
              {selectedService && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Pricing Breakdown</h4>
                  <div className="space-y-2">
                    {selectedService && (
                      <div className="flex justify-between text-sm">
                        <span>Service Base Price:</span>
                        <span>${getSelectedServicePrice()}</span>
                      </div>
                    )}
                    {selectedTime && getSelectedTimePrice() > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>Premium Time Fee:</span>
                        <span>+${getSelectedTimePrice()}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-blue-600">${totalPrice}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Book Button */}
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !selectedService || isBooking}
                className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  selectedDate && selectedTime && selectedService
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isBooking ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Book Now & Get Free Quote'
                )}
              </button>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Why Book Online?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span>No phone calls needed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span>24/7 booking availability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span>Secure payment options</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Call: (904) 456-3851</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Serving all of Jacksonville, FL</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Same-day service available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
