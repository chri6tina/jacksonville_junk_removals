import { NextRequest, NextResponse } from 'next/server'
import { 
  checkAvailability, 
  bookAppointment, 
  getAvailableSlots, 
  isSlotAvailable,
  getNextAvailableTime,
  type BookingRequest 
} from '@/lib/googleCalendar'

// GET /api/calendar/availability?date=2024-01-15&service=mattress-removal
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const service = searchParams.get('service')
    const action = searchParams.get('action')

    if (!date || !service) {
      return NextResponse.json(
        { error: 'Date and service are required' },
        { status: 400 }
      )
    }

    switch (action) {
      case 'slots':
        // Get available time slots for a specific date
        const slots = await getAvailableSlots(date, service)
        return NextResponse.json({ slots, date, service })

      case 'next':
        // Get next available appointment time
        const nextTime = await getNextAvailableTime(service)
        return NextResponse.json({ nextAvailable: nextTime, service })

      default:
        // Check full availability for a date
        const availability = await checkAvailability(date, service)
        return NextResponse.json({ availability, date, service })
    }

  } catch (error) {
    console.error('Calendar API Error:', error)
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    )
  }
}

// POST /api/calendar/book
export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json()
    
    // Validate required fields
    const requiredFields = ['customerName', 'customerEmail', 'customerPhone', 'serviceType', 'preferredDate', 'preferredTime', 'address']
    for (const field of requiredFields) {
      if (!body[field as keyof BookingRequest]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Check if the requested slot is still available
    const isAvailable = await isSlotAvailable(
      body.preferredDate,
      body.preferredTime,
      body.serviceType
    )

    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Sorry, that time slot is no longer available. Please choose another time.' },
        { status: 409 }
      )
    }

    // Book the appointment
    const result = await bookAppointment(body)

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        appointmentId: result.appointmentId,
        booking: {
          ...body,
          confirmed: true,
          bookingTime: new Date().toISOString()
        }
      })
    } else {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Calendar Booking Error:', error)
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    )
  }
}
