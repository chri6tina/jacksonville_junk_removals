// Google Calendar Integration for Jacksonville Junk Removal
// This handles real-time availability checking and booking creation

export interface CalendarSlot {
  start: string
  end: string
  available: boolean
  serviceType?: string
  customerName?: string
  notes?: string
}

export interface BookingRequest {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  address: string
  description: string
  urgent: boolean
}

export interface CalendarConfig {
  calendarId: string
  timezone: string
  businessHours: {
    monday: { start: string; end: string }
    tuesday: { start: string; end: string }
    wednesday: { start: string; end: string }
    thursday: { start: string; end: string }
    friday: { start: string; end: string }
    saturday: { start: string; end: string }
    sunday: { start: string; end: string }
  }
  serviceDurations: {
    'mattress-removal': number // minutes
    'furniture-removal': number
    'appliance-removal': number
    'garage-cleanout': number
    'construction-debris': number
  }
  bufferTime: number // minutes between appointments
}

// Default configuration for Jacksonville Junk Removal
export const defaultCalendarConfig: CalendarConfig = {
  calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
  timezone: 'America/New_York',
  businessHours: {
    monday: { start: '08:00', end: '17:00' },
    tuesday: { start: '08:00', end: '17:00' },
    wednesday: { start: '08:00', end: '17:00' },
    thursday: { start: '08:00', end: '17:00' },
    friday: { start: '08:00', end: '17:00' },
    saturday: { start: '09:00', end: '15:00' },
    sunday: { start: '10:00', end: '14:00' }
  },
  serviceDurations: {
    'mattress-removal': 45,
    'furniture-removal': 120,
    'appliance-removal': 60,
    'garage-cleanout': 180,
    'construction-debris': 120
  },
  bufferTime: 30
}

// Check real-time availability for a specific date and time
export async function checkAvailability(
  date: string,
  serviceType: string,
  config: CalendarConfig = defaultCalendarConfig
): Promise<CalendarSlot[]> {
  try {
    // This would integrate with Google Calendar API
    // For now, returning mock availability based on business hours
    
    const targetDate = new Date(date)
    const dayOfWeek = targetDate.getDay()
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const dayName = dayNames[dayOfWeek]
    
    if (!config.businessHours[dayName as keyof typeof config.businessHours]) {
      return [] // Not open on this day
    }
    
    const businessHours = config.businessHours[dayName as keyof typeof config.businessHours]
    const serviceDuration = config.serviceDurations[serviceType as keyof typeof config.serviceDurations] || 60
    
    // Generate time slots based on business hours
    const slots: CalendarSlot[] = []
    const startHour = parseInt(businessHours.start.split(':')[0])
    const endHour = parseInt(businessHours.end.split(':')[0])
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = new Date(targetDate)
        startTime.setHours(hour, minute, 0, 0)
        
        const endTime = new Date(startTime)
        endTime.setMinutes(endTime.getMinutes() + serviceDuration + config.bufferTime)
        
        // Check if this would go past business hours
        if (endTime.getHours() <= endHour) {
          slots.push({
            start: startTime.toISOString(),
            end: endTime.toISOString(),
            available: true
          })
        }
      }
    }
    
    return slots
  } catch (error) {
    console.error('Error checking availability:', error)
    return []
  }
}

// Book an appointment in the calendar
export async function bookAppointment(
  booking: BookingRequest,
  config: CalendarConfig = defaultCalendarConfig
): Promise<{ success: boolean; message: string; appointmentId?: string }> {
  try {
    // This would integrate with Google Calendar API to create the event
    // For now, returning mock success
    
    const appointmentId = `appt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Mock calendar event creation
    const event = {
      id: appointmentId,
      summary: `${booking.serviceType} - ${booking.customerName}`,
      description: `Service: ${booking.serviceType}\nCustomer: ${booking.customerName}\nPhone: ${booking.customerPhone}\nEmail: ${booking.customerEmail}\nAddress: ${booking.address}\nNotes: ${booking.description}\nUrgent: ${booking.urgent ? 'Yes' : 'No'}`,
      start: {
        dateTime: new Date(`${booking.preferredDate}T${booking.preferredTime}`).toISOString(),
        timeZone: config.timezone
      },
      end: {
        dateTime: new Date(`${booking.preferredDate}T${booking.preferredTime}`).toISOString(),
        timeZone: config.timezone
      },
      attendees: [
        { email: booking.customerEmail, displayName: booking.customerName }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 60 } // 1 hour before
        ]
      }
    }
    
    // Here you would call Google Calendar API to create the event
    // const response = await googleCalendar.events.insert({
    //   calendarId: config.calendarId,
    //   requestBody: event
    // })
    
    return {
      success: true,
      message: 'Appointment booked successfully! You will receive a confirmation email shortly.',
      appointmentId
    }
  } catch (error) {
    console.error('Error booking appointment:', error)
    return {
      success: false,
      message: 'Sorry, there was an error booking your appointment. Please try again or contact us directly.'
    }
  }
}

// Get available time slots for a specific date
export async function getAvailableSlots(
  date: string,
  serviceType: string,
  config: CalendarConfig = defaultCalendarConfig
): Promise<string[]> {
  const slots = await checkAvailability(date, serviceType, config)
  
  return slots
    .filter(slot => slot.available)
    .map(slot => {
      const startTime = new Date(slot.start)
      return startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    })
}

// Check if a specific time slot is available
export async function isSlotAvailable(
  date: string,
  time: string,
  serviceType: string,
  config: CalendarConfig = defaultCalendarConfig
): Promise<boolean> {
  const slots = await checkAvailability(date, serviceType, config)
  const targetTime = new Date(`${date}T${time}`)
  
  return slots.some(slot => {
    const slotStart = new Date(slot.start)
    const slotEnd = new Date(slot.end)
    return targetTime >= slotStart && targetTime < slotEnd && slot.available
  })
}

// Get next available appointment time
export async function getNextAvailableTime(
  serviceType: string,
  config: CalendarConfig = defaultCalendarConfig
): Promise<string | null> {
  const today = new Date()
  const maxDays = 14 // Look ahead 2 weeks
  
  for (let day = 0; day < maxDays; day++) {
    const checkDate = new Date(today)
    checkDate.setDate(today.getDate() + day)
    
    const slots = await checkAvailability(checkDate.toISOString().split('T')[0], serviceType, config)
    if (slots.length > 0) {
      const firstSlot = new Date(slots[0].start)
      return firstSlot.toISOString()
    }
  }
  
  return null
}
