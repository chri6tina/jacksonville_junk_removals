// Database layer for Jacksonville Junk Removal appointments
// This provides local storage, backup, and analytics capabilities

export interface StoredAppointment {
  id: string
  appointmentId: string // Google Calendar event ID
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  address: string
  description: string
  urgent: boolean
  status: 'scheduled' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled' | 'no-show'
  totalPrice?: number
  notes?: string
  createdAt: string
  updatedAt: string
  googleCalendarId?: string
  reminderSent?: boolean
  followUpSent?: boolean
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
  totalAppointments: number
  totalSpent: number
  lastAppointment: string
  createdAt: string
  notes?: string
  preferredServices: string[]
  urgentCustomer: boolean
}

export interface ServiceAnalytics {
  serviceType: string
  totalBookings: number
  averagePrice: number
  totalRevenue: number
  popularTimes: string[]
  popularDates: string[]
  completionRate: number
}

// In-memory storage (replace with real database in production)
class AppointmentDatabase {
  private appointments: Map<string, StoredAppointment> = new Map()
  private customers: Map<string, Customer> = new Map()
  private nextId = 1

  // Appointment Management
  async createAppointment(appointment: Omit<StoredAppointment, 'id' | 'createdAt' | 'updatedAt'>): Promise<StoredAppointment> {
    const id = `appt_${this.nextId++}`
    const now = new Date().toISOString()
    
    const newAppointment: StoredAppointment = {
      ...appointment,
      id,
      createdAt: now,
      updatedAt: now
    }
    
    this.appointments.set(id, newAppointment)
    
    // Update or create customer
    await this.updateCustomerFromAppointment(newAppointment)
    
    return newAppointment
  }

  async getAppointment(id: string): Promise<StoredAppointment | null> {
    return this.appointments.get(id) || null
  }

  async getAppointmentByGoogleId(googleId: string): Promise<StoredAppointment | null> {
    for (const appointment of this.appointments.values()) {
      if (appointment.googleCalendarId === googleId) {
        return appointment
      }
    }
    return null
  }

  async updateAppointment(id: string, updates: Partial<StoredAppointment>): Promise<StoredAppointment | null> {
    const appointment = this.appointments.get(id)
    if (!appointment) return null
    
    const updatedAppointment: StoredAppointment = {
      ...appointment,
      ...updates,
      updatedAt: new Date().toISOString()
    }
    
    this.appointments.set(id, updatedAppointment)
    return updatedAppointment
  }

  async deleteAppointment(id: string): Promise<boolean> {
    return this.appointments.delete(id)
  }

  async getAllAppointments(): Promise<StoredAppointment[]> {
    return Array.from(this.appointments.values())
  }

  async getAppointmentsByDate(date: string): Promise<StoredAppointment[]> {
    return Array.from(this.appointments.values()).filter(
      appt => appt.preferredDate === date
    )
  }

  async getAppointmentsByService(serviceType: string): Promise<StoredAppointment[]> {
    return Array.from(this.appointments.values()).filter(
      appt => appt.serviceType === serviceType
    )
  }

  async getAppointmentsByStatus(status: StoredAppointment['status']): Promise<StoredAppointment[]> {
    return Array.from(this.appointments.values()).filter(
      appt => appt.status === status
    )
  }

  async getUpcomingAppointments(days: number = 7): Promise<StoredAppointment[]> {
    const today = new Date()
    const futureDate = new Date(today)
    futureDate.setDate(today.getDate() + days)
    
    return Array.from(this.appointments.values()).filter(appt => {
      const appointmentDate = new Date(appt.preferredDate)
      return appointmentDate >= today && appointmentDate <= futureDate
    }).sort((a, b) => new Date(a.preferredDate).getTime() - new Date(b.preferredDate).getTime())
  }

  // Customer Management
  private async updateCustomerFromAppointment(appointment: StoredAppointment): Promise<void> {
    const existingCustomer = this.customers.get(appointment.customerEmail)
    
    if (existingCustomer) {
      // Update existing customer
      existingCustomer.totalAppointments += 1
      existingCustomer.lastAppointment = appointment.preferredDate
      existingCustomer.preferredServices = [...new Set([...existingCustomer.preferredServices, appointment.serviceType])]
      existingCustomer.urgentCustomer = existingCustomer.urgentCustomer || appointment.urgent
      
      this.customers.set(appointment.customerEmail, existingCustomer)
    } else {
      // Create new customer
      const newCustomer: Customer = {
        id: appointment.customerEmail,
        name: appointment.customerName,
        email: appointment.customerEmail,
        phone: appointment.customerPhone,
        address: appointment.address,
        totalAppointments: 1,
        totalSpent: 0,
        lastAppointment: appointment.preferredDate,
        createdAt: new Date().toISOString(),
        preferredServices: [appointment.serviceType],
        urgentCustomer: appointment.urgent
      }
      
      this.customers.set(appointment.customerEmail, newCustomer)
    }
  }

  async getCustomer(email: string): Promise<Customer | null> {
    return this.customers.get(email) || null
  }

  async getAllCustomers(): Promise<Customer[]> {
    return Array.from(this.customers.values())
  }

  async updateCustomer(email: string, updates: Partial<Customer>): Promise<Customer | null> {
    const customer = this.customers.get(email)
    if (!customer) return null
    
    const updatedCustomer: Customer = { ...customer, ...updates }
    this.customers.set(email, updatedCustomer)
    return updatedCustomer
  }

  // Analytics and Reporting
  async getServiceAnalytics(serviceType: string): Promise<ServiceAnalytics> {
    const appointments = await this.getAppointmentsByService(serviceType)
    const completed = appointments.filter(appt => appt.status === 'completed')
    
    const totalBookings = appointments.length
    const totalRevenue = completed.reduce((sum, appt) => sum + (appt.totalPrice || 0), 0)
    const averagePrice = totalBookings > 0 ? totalRevenue / totalBookings : 0
    const completionRate = totalBookings > 0 ? (completed.length / totalBookings) * 100 : 0
    
    // Popular times
    const timeCounts: Record<string, number> = {}
    appointments.forEach(appt => {
      timeCounts[appt.preferredTime] = (timeCounts[appt.preferredTime] || 0) + 1
    })
    const popularTimes = Object.entries(timeCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([time]) => time)
    
    // Popular dates (day of week)
    const dayCounts: Record<string, number> = {}
    appointments.forEach(appt => {
      const day = new Date(appt.preferredDate).toLocaleDateString('en-US', { weekday: 'long' })
      dayCounts[day] = (dayCounts[day] || 0) + 1
    })
    const popularDates = Object.entries(dayCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([day]) => day)
    
    return {
      serviceType,
      totalBookings,
      averagePrice,
      totalRevenue,
      popularTimes,
      popularDates,
      completionRate
    }
  }

  async getOverallAnalytics(): Promise<{
    totalAppointments: number
    totalCustomers: number
    totalRevenue: number
    averageAppointmentsPerCustomer: number
    mostPopularService: string
    urgentAppointments: number
    completionRate: number
  }> {
    const appointments = await this.getAllAppointments()
    const customers = await this.getAllCustomers()
    
    const totalAppointments = appointments.length
    const totalCustomers = customers.length
    const totalRevenue = appointments
      .filter(appt => appt.status === 'completed')
      .reduce((sum, appt) => sum + (appt.totalPrice || 0), 0)
    
    const averageAppointmentsPerCustomer = totalCustomers > 0 ? totalAppointments / totalCustomers : 0
    
    // Most popular service
    const serviceCounts: Record<string, number> = {}
    appointments.forEach(appt => {
      serviceCounts[appt.serviceType] = (serviceCounts[appt.serviceType] || 0) + 1
    })
    const mostPopularService = Object.entries(serviceCounts)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Unknown'
    
    const urgentAppointments = appointments.filter(appt => appt.urgent).length
    const completedAppointments = appointments.filter(appt => appt.status === 'completed').length
    const completionRate = totalAppointments > 0 ? (completedAppointments / totalAppointments) * 100 : 0
    
    return {
      totalAppointments,
      totalCustomers,
      totalRevenue,
      averageAppointmentsPerCustomer,
      mostPopularService,
      urgentAppointments,
      completionRate
    }
  }

  // Data Export/Import
  async exportData(): Promise<{
    appointments: StoredAppointment[]
    customers: Customer[]
  }> {
    return {
      appointments: await this.getAllAppointments(),
      customers: await this.getAllCustomers()
    }
  }

  async importData(data: {
    appointments: StoredAppointment[]
    customers: Customer[]
  }): Promise<void> {
    // Clear existing data
    this.appointments.clear()
    this.customers.clear()
    
    // Import new data
    data.appointments.forEach(appt => {
      this.appointments.set(appt.id, appt)
    })
    
    data.customers.forEach(customer => {
      this.customers.set(customer.id, customer)
    })
  }

  // Backup and Recovery
  async createBackup(): Promise<string> {
    const data = await this.exportData()
    return JSON.stringify(data, null, 2)
  }

  async restoreFromBackup(backupData: string): Promise<void> {
    try {
      const data = JSON.parse(backupData)
      await this.importData(data)
    } catch (error) {
      throw new Error('Invalid backup data format')
    }
  }
}

// Create singleton instance
export const appointmentDB = new AppointmentDatabase()

// Convenience functions
export const createAppointment = (appointment: Omit<StoredAppointment, 'id' | 'createdAt' | 'updatedAt'>) => 
  appointmentDB.createAppointment(appointment)

export const getAppointment = (id: string) => 
  appointmentDB.getAppointment(id)

export const updateAppointment = (id: string, updates: Partial<StoredAppointment>) => 
  appointmentDB.updateAppointment(id, updates)

export const getAllAppointments = () => 
  appointmentDB.getAllAppointments()

export const getUpcomingAppointments = (days?: number) => 
  appointmentDB.getUpcomingAppointments(days)

export const getServiceAnalytics = (serviceType: string) => 
  appointmentDB.getServiceAnalytics(serviceType)

export const getOverallAnalytics = () => 
  appointmentDB.getOverallAnalytics()

export const createBackup = () => 
  appointmentDB.createBackup()

export const restoreFromBackup = (backupData: string) => 
  appointmentDB.restoreFromBackup(backupData)
