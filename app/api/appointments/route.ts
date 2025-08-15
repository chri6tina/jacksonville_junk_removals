import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllAppointments,
  getUpcomingAppointments,
  getAppointment,
  updateAppointment,
  getServiceAnalytics,
  getOverallAnalytics,
  createBackup,
  restoreFromBackup
} from '@/lib/database'

// GET /api/appointments - Get all appointments or filtered results
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const serviceType = searchParams.get('service')
    const status = searchParams.get('status')
    const days = searchParams.get('days')

    switch (action) {
      case 'upcoming':
        const upcomingDays = days ? parseInt(days) : 7
        const upcoming = await getUpcomingAppointments(upcomingDays)
        return NextResponse.json({ appointments: upcoming, days: upcomingDays })

      case 'analytics':
        if (serviceType) {
          const serviceStats = await getServiceAnalytics(serviceType)
          return NextResponse.json({ analytics: serviceStats })
        } else {
          const overallStats = await getOverallAnalytics()
          return NextResponse.json({ analytics: overallStats })
        }

      case 'backup':
        const backup = await createBackup()
        return NextResponse.json({ backup })

      default:
        // Get all appointments with optional filtering
        let appointments = await getAllAppointments()
        
        if (serviceType) {
          appointments = appointments.filter(appt => appt.serviceType === serviceType)
        }
        
        if (status) {
          appointments = appointments.filter(appt => appt.status === status)
        }

        return NextResponse.json({ 
          appointments,
          total: appointments.length,
          filters: { serviceType, status }
        })
    }

  } catch (error) {
    console.error('Appointments API Error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve appointments' },
      { status: 500 }
    )
  }
}

// POST /api/appointments - Update appointment status or create backup
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, appointmentId, updates, backupData } = body

    switch (action) {
      case 'update':
        if (!appointmentId || !updates) {
          return NextResponse.json(
            { error: 'Appointment ID and updates are required' },
            { status: 400 }
          )
        }

        const updated = await updateAppointment(appointmentId, updates)
        if (!updated) {
          return NextResponse.json(
            { error: 'Appointment not found' },
            { status: 404 }
          )
        }

        return NextResponse.json({ 
          success: true, 
          appointment: updated 
        })

      case 'restore':
        if (!backupData) {
          return NextResponse.json(
            { error: 'Backup data is required' },
            { status: 400 }
          )
        }

        await restoreFromBackup(backupData)
        return NextResponse.json({ 
          success: true, 
          message: 'Backup restored successfully' 
        })

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Appointments API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

// PUT /api/appointments/:id - Update specific appointment
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { id } = await params

    const updated = await updateAppointment(id, body)
    if (!updated) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      appointment: updated 
    })

  } catch (error) {
    console.error('Appointment Update Error:', error)
    return NextResponse.json(
      { error: 'Failed to update appointment' },
      { status: 500 }
    )
  }
}
