'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Clock, User, Truck, Shield, Star } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  type: 'text'
}

interface UserIntent {
  primary: string
  confidence: number
  entities: string[]
  context: string[]
}

export default function SmartChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
                {
              id: '1',
              text: 'Hello! I\'m here to help with your junk removal needs. We offer mattress removal ($50), furniture removal ($100), appliance removal ($75), garage cleanout ($150), and construction debris removal ($200). What service do you need?',
              sender: 'agent',
              timestamp: new Date(),
              type: 'text'
            }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState<string[]>([])
  const [userPreferences, setUserPreferences] = useState<Record<string, any>>({})
  const [conversationMemory, setConversationMemory] = useState<{
    lastService: string
    lastLocation: string
    lastIntent: string
    serviceHistory: string[]
    locationHistory: string[]
    pricingQueries: number
    schedulingQueries: number
  }>({
    lastService: '',
    lastLocation: '',
    lastIntent: '',
    serviceHistory: [],
    locationHistory: [],
    pricingQueries: 0,
    schedulingQueries: 0
  })
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Super intelligent intent recognition with advanced pattern matching
  const analyzeIntent = (text: string): UserIntent => {
    const lowerText = text.toLowerCase()
    const words = lowerText.split(' ')
    
    let primary = 'general'
    let confidence = 0.5
    const entities: string[] = []
    const context: string[] = []

    // Advanced service type detection with synonyms
    if (lowerText.includes('mattress') || lowerText.includes('bed') || lowerText.includes('box spring') || lowerText.includes('boxspring') || lowerText.includes('bedding') || lowerText.includes('sleep')) {
      entities.push('mattress-removal')
      context.push('mattress-service')
      confidence += 0.3
    }
    if (lowerText.includes('furniture') || lowerText.includes('couch') || lowerText.includes('chair') || lowerText.includes('sofa') || lowerText.includes('table') || lowerText.includes('desk') || lowerText.includes('dresser') || lowerText.includes('bookshelf') || lowerText.includes('entertainment center') || lowerText.includes('tv stand')) {
      entities.push('furniture-removal')
      context.push('furniture-service')
      confidence += 0.3
    }
    if (lowerText.includes('appliance') || lowerText.includes('refrigerator') || lowerText.includes('washer') || lowerText.includes('dryer') || lowerText.includes('dishwasher') || lowerText.includes('stove') || lowerText.includes('oven') || lowerText.includes('microwave') || lowerText.includes('freezer') || lowerText.includes('washing machine')) {
      entities.push('appliance-removal')
      context.push('appliance-service')
      confidence += 0.3
    }
    if (lowerText.includes('construction') || lowerText.includes('debris') || lowerText.includes('renovation') || lowerText.includes('drywall') || lowerText.includes('lumber') || lowerText.includes('concrete') || lowerText.includes('insulation') || lowerText.includes('roofing') || lowerText.includes('flooring') || lowerText.includes('tile')) {
      entities.push('construction-debris')
      context.push('construction-service')
      confidence += 0.3
    }
    if (lowerText.includes('garage') || lowerText.includes('cleanout') || lowerText.includes('basement') || lowerText.includes('attic') || lowerText.includes('storage') || lowerText.includes('clutter') || lowerText.includes('junk') || lowerText.includes('stuff')) {
      entities.push('garage-cleanout')
      context.push('garage-service')
      confidence += 0.3
    }
    if (lowerText.includes('office') || lowerText.includes('commercial') || lowerText.includes('business') || lowerText.includes('retail') || lowerText.includes('store') || lowerText.includes('warehouse') || lowerText.includes('restaurant') || lowerText.includes('shop')) {
      entities.push('commercial-junk-removal')
      context.push('commercial-service')
      confidence += 0.3
    }

    // Advanced intent detection with natural language
    if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much') || lowerText.includes('$$') || lowerText.includes('dollars') || lowerText.includes('estimate') || lowerText.includes('pricing') || lowerText.includes('rate') || lowerText.includes('fee')) {
      primary = 'pricing'
      context.push('pricing')
      confidence += 0.4
    }
    if (lowerText.includes('schedule') || lowerText.includes('book') || lowerText.includes('appointment') || lowerText.includes('when') || lowerText.includes('available') || lowerText.includes('time') || lowerText.includes('calendar') || lowerText.includes('reserve') || lowerText.includes('set up') || lowerText.includes('arrange')) {
      primary = 'scheduling'
      context.push('scheduling')
      confidence += 0.4
    }
    if (lowerText.includes('area') || lowerText.includes('location') || lowerText.includes('jacksonville') || lowerText.includes('serve') || lowerText.includes('coverage') || lowerText.includes('where') || lowerText.includes('neighborhood') || lowerText.includes('city') || lowerText.includes('county')) {
      primary = 'location'
      context.push('location')
      confidence += 0.4
    }
    if (lowerText.includes('urgent') || lowerText.includes('emergency') || lowerText.includes('same day') || lowerText.includes('asap') || lowerText.includes('today') || lowerText.includes('immediate') || lowerText.includes('rush') || lowerText.includes('quick') || lowerText.includes('fast') || lowerText.includes('now')) {
      primary = 'urgent'
      context.push('urgent')
      confidence += 0.5
    }
    if (lowerText.includes('process') || lowerText.includes('how does') || lowerText.includes('what happens') || lowerText.includes('steps') || lowerText.includes('procedure') || lowerText.includes('work') || lowerText.includes('method') || lowerText.includes('approach')) {
      primary = 'process'
      context.push('process')
      confidence += 0.3
    }

    // Advanced location detection with variations
    const locations = ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco', 'downtown', 'northside', 'westside', 'eastside', 'clay county', 'duval county']
    locations.forEach(location => {
      if (lowerText.includes(location)) {
        entities.push(location)
        context.push('specific-location')
        confidence += 0.2
      }
    })

    // Advanced context clues with natural language
    if (lowerText.includes('free') || lowerText.includes('estimate') || lowerText.includes('quote') || lowerText.includes('no cost') || lowerText.includes('complimentary')) {
      context.push('free-estimate')
    }
    if (lowerText.includes('eco') || lowerText.includes('green') || lowerText.includes('recycle') || lowerText.includes('environmental') || lowerText.includes('sustainable') || lowerText.includes('donate')) {
      context.push('eco-friendly')
    }
    if (lowerText.includes('weekend') || lowerText.includes('saturday') || lowerText.includes('sunday') || lowerText.includes('off hours') || lowerText.includes('after hours')) {
      context.push('weekend-service')
    }
    if (lowerText.includes('volume') || lowerText.includes('bulk') || lowerText.includes('multiple') || lowerText.includes('several') || lowerText.includes('lots of') || lowerText.includes('many')) {
      context.push('bulk-service')
    }
    if (lowerText.includes('heavy') || lowerText.includes('large') || lowerText.includes('big') || lowerText.includes('oversized') || lowerText.includes('difficult') || lowerText.includes('challenging')) {
      context.push('difficult-removal')
    }

    return { primary, confidence: Math.min(confidence, 1), entities, context }
  }

  // Update conversation memory for smarter responses
  const updateConversationMemory = (intent: UserIntent, userText: string) => {
    const { primary, entities, context } = intent
    
    setConversationMemory(prev => {
      const newMemory = { ...prev }
      
      // Track service history
      if (entities.length > 0) {
        newMemory.serviceHistory = [...new Set([...prev.serviceHistory, ...entities])].slice(-5)
        newMemory.lastService = entities[0]
      }
      
      // Track location history
      const locationEntity = entities.find(e => ['beach', 'riverside', 'southside', 'mandarin', 'orange park', 'san marco', 'downtown'].includes(e))
      if (locationEntity) {
        newMemory.locationHistory = [...new Set([...prev.locationHistory, locationEntity])].slice(-3)
        newMemory.lastLocation = locationEntity
      }
      
      // Track intent patterns
      newMemory.lastIntent = primary
      if (primary === 'pricing') newMemory.pricingQueries += 1
      if (primary === 'scheduling') newMemory.schedulingQueries += 1
      
      // Track what we've already discussed to prevent repetition
      if (primary === 'general' && entities.length > 0) {
        // If user mentions a service we've already discussed, don't repeat basic info
        if (prev.serviceHistory.includes(entities[0])) {
          newMemory.lastIntent = 'follow-up'
        }
      }
      
      return newMemory
    })
    
    // Also update conversation context to maintain continuity
    setConversationContext(prev => {
      const newContext = [...new Set([...prev, ...context])]
      return newContext.slice(-10) // Keep last 10 context items
    })
  }

  // Smart response generation using OpenAI API
  const generateSmartResponse = async (userText: string, intent: UserIntent): Promise<string> => {
    const { primary, entities, context } = intent
    
    // Update conversation context and memory
    updateConversationMemory(intent, userText)
    
    try {
      // Call OpenAI API with full conversation context
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          conversationHistory: messages.slice(-10), // Last 10 messages for better context
          userContext: [...conversationContext, ...context].join(', '), // Include accumulated context
          conversationMemory: conversationMemory // Pass memory for continuity
        })
      })

      if (!response.ok) {
        throw new Error('Service unavailable')
      }

      const data = await response.json()
      
      if (data.error) {
        // Fallback to rule-based responses if AI fails
        return generateFallbackResponse(primary, entities, context, userText)
      }

      return data.response

    } catch (error) {
      console.error('API Error:', error)
      // Fallback to rule-based responses
      return generateFallbackResponse(primary, entities, context, userText)
    }
  }

  // Professional, concise fallback response generation
  const generateFallbackResponse = (primary: string, entities: string[], context: string[], userText?: string): string => {
    // Use smart pricing calculator for detailed pricing questions
    if (primary === 'pricing' && entities.length > 0 && userText) {
      return calculateSmartPricing(entities, context, userText)
    }
    
    // Use smart scheduling assistant for scheduling questions
    if (primary === 'scheduling' && entities.length > 0 && userText) {
      return generateSmartScheduling(entities, context, userText)
    }
    
    // Use conversation memory for personalized responses and prevent repetition
    if (conversationMemory.lastService && conversationMemory.lastLocation) {
      if (primary === 'scheduling') {
        return `For ${conversationMemory.lastService.replace('-', ' ')} in ${conversationMemory.lastLocation}, we have same-day availability or can schedule within 24 hours. What date works best for you?`
      }
      
      if (primary === 'pricing') {
        return `${conversationMemory.lastService.replace('-', ' ')} in ${conversationMemory.lastLocation} starts at our standard rates. Would you like a specific estimate?`
      }
    }
    
    // Handle repeated questions professionally
    if (conversationMemory.pricingQueries > 1 && primary === 'pricing') {
      return `For the most accurate pricing, I recommend a free on-site estimate. Would you like to schedule one?`
    }
    
    if (conversationMemory.schedulingQueries > 1 && primary === 'scheduling') {
      return `We offer same-day service or scheduling within 24-48 hours. What's your preferred date?`
    }
    
    // Handle specific service questions professionally with context awareness
    if (entities.includes('mattress-removal')) {
      if (primary === 'pricing') {
        return 'Mattress removal starts at $50. Multiple mattress discounts available. Would you like a specific estimate?'
      }
      if (primary === 'scheduling') {
        return 'Same-day mattress removal available. We work Monday-Friday 8 AM-5 PM, Saturday by appointment. What date works for you?'
      }
      // Check if we already discussed this service to avoid repetition
      if (conversationMemory.serviceHistory.includes('mattress-removal')) {
        return 'What specific information do you need about mattress removal? Pricing, scheduling, or process?'
      }
      return 'Mattress removal takes 30-45 minutes. We handle all sizes and locations. What would you like to know?'
    }

    if (entities.includes('furniture-removal')) {
      if (primary === 'pricing') {
        return 'Furniture removal starts at $50 for small items, $100 for medium, $150+ for large. Volume discounts available. What furniture do you need removed?'
      }
      if (primary === 'scheduling') {
        return 'Same-day furniture removal available. We work Monday-Friday 8 AM-5 PM, Saturday by appointment. What date works for you?'
      }
      // Check if we already discussed this service to avoid repetition
      if (conversationMemory.serviceHistory.includes('furniture-removal')) {
        return 'What specific information do you need about furniture removal? Pricing, scheduling, or process?'
      }
      return 'Furniture removal takes 1-2 hours. We handle all types and locations safely. What would you like to know?'
    }

    if (entities.includes('appliance-removal')) {
      if (primary === 'pricing') {
        return 'Appliance removal starts at $50 for small, $75 for medium, $100 for large. Volume discounts available. What appliances do you need removed?'
      }
      if (primary === 'scheduling') {
        return 'Same-day appliance removal available. We work Monday-Friday 8 AM-5 PM, Saturday by appointment. What date works for you?'
      }
      return 'Appliance removal takes 30-60 minutes. We handle all types safely. What would you like to know?'
    }

    if (entities.includes('garage-cleanout')) {
      if (primary === 'pricing') {
        return 'Garage cleanout starts at $150 for quarter, $250 for half, $350 for three-quarter, $450 for full. Free estimates available. Would you like to schedule one?'
      }
      if (primary === 'scheduling') {
        return 'Garage cleanout available within 24-48 hours. We work Monday-Friday 8 AM-5 PM, Saturday by appointment. What date works for you?'
      }
      return 'Garage cleanout takes 2-4 hours. We handle all items and provide complete cleanup. What would you like to know?'
    }

    if (entities.includes('construction-debris')) {
      if (primary === 'pricing') {
        return 'Construction debris removal starts at $200 for small, $400 for medium, $600 for large projects. Volume discounts available. What type of project are you working on?'
      }
      if (primary === 'scheduling') {
        return 'Construction debris removal available same-day or next-day. We work Monday-Friday 8 AM-5 PM, weekend by appointment. What\'s your timeline?'
      }
      return 'Construction debris removal takes 1-3 hours. We handle all materials and work around your schedule. What would you like to know?'
    }

    // Handle specific intent types professionally
    if (primary === 'pricing') {
      return 'Our rates: Mattress $50, Furniture $100, Appliance $75, Garage $150, Construction $200. All include full service. What service do you need?'
    }
    
    if (primary === 'scheduling') {
      if (context.includes('urgent')) {
        return 'Urgent service available same-day within 2-4 hours. Monday-Friday 8 AM-5 PM, Saturday by appointment. What type of service do you need?'
      }
      return 'We offer same-day service or scheduling within 24-48 hours. Monday-Friday 8 AM-5 PM, Saturday by appointment. What date works for you?'
    }
    
    if (primary === 'location') {
      if (entities.includes('specific-location')) {
        const location = entities.find(e => ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco', 'downtown'].includes(e))
        return `We serve ${location} with same-day availability. What service do you need?`
      }
      return 'We serve all of Jacksonville and surrounding areas. Where are you located?'
    }
    
    if (primary === 'urgent') {
      return 'Urgent service available same-day within 2-4 hours. What type of service and location?'
    }
    
    if (primary === 'commercial') {
      return 'Commercial services: office cleanouts, retail cleanouts, construction debris, business equipment. We work around your business hours. What service do you need?'
    }

    if (primary === 'process') {
      return 'Our process: 1) Free estimate, 2) Schedule service, 3) Team handles everything, 4) Complete cleanup. Takes 1-3 hours. Would you like to schedule an estimate?'
    }
    
    // Handle follow-up questions when user has already specified a service
    if (primary === 'follow-up' || (conversationMemory.serviceHistory.length > 0 && primary === 'general')) {
      const lastService = conversationMemory.lastService.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
      return `For ${lastService}, I can help with pricing, scheduling, or process details. What would you like to know?`
    }

    // Handle specific context clues professionally
    if (context.includes('free-estimate')) {
      return 'Free estimates available. We schedule within 24-48 hours, take 15-30 minutes. What service do you need estimated?'
    }

    if (context.includes('eco-friendly')) {
      return 'We recycle and donate items when possible. Eco-friendly disposal included in all pricing. What service do you need?'
    }

    if (context.includes('weekend-service')) {
      return 'Saturday appointments available with premium pricing. Weekday appointments recommended for best availability. What date works for you?'
    }

    // Handle specific service combinations
    if (entities.length > 1) {
      const services = entities.map(e => e.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())).join(' and ')
      return `We offer ${services} with package deals available. Would you like pricing or to schedule an estimate?`
    }

    // Handle general questions with specific information
    if (entities.length > 0) {
      const service = entities[0].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
      // Don't ask what service they need if they already specified one
      if (conversationMemory.serviceHistory.includes(entities[0])) {
        return `For ${service}, what specific information do you need? Pricing, scheduling, or process details?`
      }
      return `We offer ${service} with competitive pricing and flexible scheduling. What would you like to know?`
    }

    // Only ask for service if we have no context at all
    if (conversationMemory.serviceHistory.length === 0) {
      return 'We offer mattress removal ($50), furniture removal ($100), appliance removal ($75), garage cleanout ($150), construction debris ($200), and commercial services. What service do you need?'
    }
    
    // If we have service context but user is asking general questions
    return `I can help with ${conversationMemory.lastService.replace('-', ' ')}. What would you like to know - pricing, scheduling, or process?`
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Analyze user intent
    const intent = analyzeIntent(text)
    
    // Generate smart response using AI
    try {
      const response = await generateSmartResponse(text, intent)
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
        type: 'text'
      }
      
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
      
      // Store user preferences
      if (intent.entities.length > 0) {
        setUserPreferences(prev => ({
          ...prev,
          preferredServices: intent.entities,
          lastIntent: intent.primary
        }))
      }
    } catch (error) {
      console.error('Error generating response:', error)
      // Fallback response
      const fallbackResponse = generateFallbackResponse(intent.primary, intent.entities, intent.context)
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        sender: 'agent',
        timestamp: new Date(),
        type: 'text'
      }
      
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }
  }

  // Smart pricing calculator based on user descriptions
  const calculateSmartPricing = (entities: string[], context: string[], userText: string): string => {
    const lowerText = userText.toLowerCase()
    
    // Extract quantity indicators
    const quantity = {
      single: lowerText.includes('one') || lowerText.includes('single') || lowerText.includes('1') || lowerText.includes('just') || lowerText.includes('only'),
      multiple: lowerText.includes('two') || lowerText.includes('three') || lowerText.includes('2') || lowerText.includes('3') || lowerText.includes('couple') || lowerText.includes('few'),
      bulk: lowerText.includes('many') || lowerText.includes('lots') || lowerText.includes('several') || lowerText.includes('multiple') || lowerText.includes('bunch') || lowerText.includes('pile')
    }
    
    // Extract size indicators
    const size = {
      small: lowerText.includes('small') || lowerText.includes('little') || lowerText.includes('tiny') || lowerText.includes('mini'),
      medium: lowerText.includes('medium') || lowerText.includes('regular') || lowerText.includes('standard') || lowerText.includes('normal'),
      large: lowerText.includes('large') || lowerText.includes('big') || lowerText.includes('huge') || lowerText.includes('oversized') || lowerText.includes('king')
    }
    
    // Extract complexity indicators
    const complexity = {
      simple: lowerText.includes('simple') || lowerText.includes('easy') || lowerText.includes('basic') || lowerText.includes('straightforward'),
      complex: lowerText.includes('complex') || lowerText.includes('difficult') || lowerText.includes('challenging') || lowerText.includes('tight') || lowerText.includes('stairs') || lowerText.includes('narrow')
    }
    
    let basePrice = 0
    let adjustments = []
    
    if (entities.includes('mattress-removal')) {
      basePrice = 50
      if (quantity.multiple) {
        basePrice = 90
        adjustments.push('Volume discount applied for multiple mattresses')
      } else if (quantity.bulk) {
        basePrice = 130
        adjustments.push('Bulk discount for multiple items')
      }
      if (size.large) {
        basePrice += 25
        adjustments.push('Large mattress premium')
      }
      if (complexity.complex) {
        basePrice += 30
        adjustments.push('Complex removal (stairs/tight spaces)')
      }
    }
    
    if (entities.includes('furniture-removal')) {
      if (size.small) basePrice = 50
      else if (size.medium) basePrice = 100
      else if (size.large) basePrice = 150
      else basePrice = 100
      
      if (quantity.multiple) {
        basePrice = Math.round(basePrice * 1.5)
        adjustments.push('Multiple item discount')
      } else if (quantity.bulk) {
        basePrice = Math.round(basePrice * 2)
        adjustments.push('Bulk service discount')
      }
      
      if (complexity.complex) {
        basePrice += 50
        adjustments.push('Complex removal (stairs/tight spaces)')
      }
    }
    
    if (entities.includes('appliance-removal')) {
      if (size.small) basePrice = 50
      else if (size.medium) basePrice = 75
      else if (size.large) basePrice = 100
      else basePrice = 75
      
      if (quantity.multiple) {
        basePrice = Math.round(basePrice * 1.3)
        adjustments.push('Multiple appliance discount')
      }
      
      if (complexity.complex) {
        basePrice += 40
        adjustments.push('Complex removal (tight spaces/stairs)')
      }
    }
    
    if (entities.includes('garage-cleanout')) {
      if (lowerText.includes('quarter') || lowerText.includes('25%') || lowerText.includes('little')) basePrice = 150
      else if (lowerText.includes('half') || lowerText.includes('50%') || lowerText.includes('medium')) basePrice = 250
      else if (lowerText.includes('three quarter') || lowerText.includes('75%') || lowerText.includes('mostly')) basePrice = 350
      else if (lowerText.includes('full') || lowerText.includes('100%') || lowerText.includes('completely')) basePrice = 450
      else basePrice = 250
      
      if (complexity.complex) {
        basePrice += 75
        adjustments.push('Complex cleanout (heavy items/tight spaces)')
      }
    }
    
    if (entities.includes('construction-debris')) {
      if (lowerText.includes('small') || lowerText.includes('little') || lowerText.includes('minor')) basePrice = 200
      else if (lowerText.includes('medium') || lowerText.includes('moderate') || lowerText.includes('average')) basePrice = 400
      else if (lowerText.includes('large') || lowerText.includes('major') || lowerText.includes('big')) basePrice = 600
      else basePrice = 400
      
      if (context.includes('ongoing')) {
        basePrice = Math.round(basePrice * 0.8)
        adjustments.push('Ongoing project discount')
      }
    }
    
    // Format the response
    let response = `Based on your description, I estimate your ${entities[0]?.replace('-', ' ')} service at approximately $${basePrice}. `
    
    if (adjustments.length > 0) {
      response += `\n\nPrice adjustments:\n${adjustments.map(adj => `• ${adj}`).join('\n')}`
    }
    
    response += `\n\nThis is an estimate based on your description. For the most accurate pricing, I recommend a free on-site estimate. Would you like to schedule one?`
    
    return response
  }

  // Smart scheduling assistant with availability checking
  const generateSmartScheduling = (entities: string[], context: string[], userText: string): string => {
    const lowerText = userText.toLowerCase()
    const now = new Date()
    const currentHour = now.getHours()
    const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    
    // Extract timing preferences
    const timing = {
      urgent: lowerText.includes('urgent') || lowerText.includes('emergency') || lowerText.includes('same day') || lowerText.includes('asap') || lowerText.includes('today') || lowerText.includes('immediate') || lowerText.includes('rush') || lowerText.includes('quick') || lowerText.includes('fast') || lowerText.includes('now'),
      today: lowerText.includes('today') || lowerText.includes('this afternoon') || lowerText.includes('this evening'),
      tomorrow: lowerText.includes('tomorrow') || lowerText.includes('next day'),
      thisWeek: lowerText.includes('this week') || lowerText.includes('week') || lowerText.includes('soon'),
      weekend: lowerText.includes('weekend') || lowerText.includes('saturday') || lowerText.includes('sunday'),
      specific: lowerText.includes('monday') || lowerText.includes('tuesday') || lowerText.includes('wednesday') || lowerText.includes('thursday') || lowerText.includes('friday') || lowerText.includes('saturday') || lowerText.includes('sunday')
    }
    
    // Extract time of day preferences
    const timeOfDay = {
      morning: lowerText.includes('morning') || lowerText.includes('am') || lowerText.includes('early'),
      afternoon: lowerText.includes('afternoon') || lowerText.includes('pm') || lowerText.includes('midday'),
      evening: lowerText.includes('evening') || lowerText.includes('night') || lowerText.includes('late')
    }
    
    // Calculate available slots
    const getAvailableSlots = () => {
      const slots = []
      
      if (timing.urgent) {
        // Same-day urgent service
        if (currentDay >= 1 && currentDay <= 5) { // Monday-Friday
          if (currentHour < 14) { // Before 2 PM
            slots.push('Today 2-4 PM (urgent service)')
            slots.push('Today 4-6 PM (urgent service)')
          } else if (currentHour < 16) { // Before 4 PM
            slots.push('Today 4-6 PM (urgent service)')
          }
        }
        slots.push('Tomorrow morning (urgent service)')
      }
      
      if (timing.today) {
        if (currentDay >= 1 && currentDay <= 5) { // Monday-Friday
          if (currentHour < 12) { // Before noon
            slots.push('Today 1-3 PM')
            slots.push('Today 3-5 PM')
          } else if (currentHour < 14) { // Before 2 PM
            slots.push('Today 3-5 PM')
          }
        }
      }
      
      if (timing.tomorrow || timing.thisWeek) {
        // Next business day
        const nextBusinessDay = currentDay === 5 ? 'Monday' : currentDay === 6 ? 'Monday' : currentDay === 0 ? 'Monday' : 'Tomorrow'
        slots.push(`${nextBusinessDay} 8-10 AM`)
        slots.push(`${nextBusinessDay} 10 AM-12 PM`)
        slots.push(`${nextBusinessDay} 1-3 PM`)
        slots.push(`${nextBusinessDay} 3-5 PM`)
      }
      
      if (timing.weekend) {
        slots.push('Saturday 9-11 AM (premium pricing)')
        slots.push('Saturday 11 AM-1 PM (premium pricing)')
      }
      
      // Default slots if no specific timing
      if (slots.length === 0) {
        const nextDay = currentDay === 5 ? 'Monday' : currentDay === 6 ? 'Monday' : currentDay === 0 ? 'Monday' : 'Tomorrow'
        slots.push(`${nextDay} 8-10 AM`)
        slots.push(`${nextDay} 10 AM-12 PM`)
        slots.push(`${nextDay} 1-3 PM`)
        slots.push(`${nextDay} 3-5 PM`)
      }
      
      return slots
    }
    
    // Generate smart scheduling response
    let response = 'Perfect! Let me help you schedule your service! 📅\n\n'
    
    if (timing.urgent) {
      response += '🚨 **URGENT SERVICE AVAILABLE** 🚨\n'
      response += 'I understand you need immediate assistance. We prioritize urgent situations!\n\n'
    }
    
    const availableSlots = getAvailableSlots()
    response += '**Available Time Slots:**\n'
    availableSlots.forEach((slot, index) => {
      response += `${index + 1}. ${slot}\n`
    })
    
    response += '\n**Service Details:**\n'
    if (entities.includes('mattress-removal')) {
      response += '• Mattress removal typically takes 30-45 minutes\n'
      response += '• We can work around your schedule\n'
      response += '• Same-day service available for urgent needs\n'
    } else if (entities.includes('furniture-removal')) {
      response += '• Furniture removal typically takes 1-2 hours\n'
      response += '• We handle all sizes and complexity levels\n'
      response += '• Same-day service available for urgent needs\n'
    } else if (entities.includes('garage-cleanout')) {
      response += '• Garage cleanout typically takes 2-4 hours\n'
      response += '• We bring all necessary equipment\n'
      response += '• Can work around your schedule\n'
    } else if (entities.includes('appliance-removal')) {
      response += '• Appliance removal typically takes 30-60 minutes\n'
      response += '• We handle all appliance types safely\n'
      response += '• Same-day service available for urgent needs\n'
    } else if (entities.includes('construction-debris')) {
      response += '• Construction debris removal varies by project size\n'
      response += '• We can work around your construction schedule\n'
      response += '• Same-day service available for urgent projects\n'
    }
    
    response += '\n**What would you like to do?**\n'
    response += '1. Book one of the available slots above\n'
    response += '2. Request a different time\n'
    response += '3. Schedule a free estimate first\n'
    response += '4. Get more information about our process'
    
    return response
  }

  // Handle quick actions for scheduling
  const handleQuickAction = (action: string) => {
    let message = ''
    
    switch (action) {
      case 'book-urgent':
        message = 'I need urgent same-day service as soon as possible'
        break
      case 'book-today':
        message = 'I would like to schedule service for today'
        break
      case 'book-tomorrow':
        message = 'I would like to schedule service for tomorrow'
        break
      case 'book-weekend':
        message = 'I would like to schedule service for the weekend'
        break
      case 'free-estimate':
        message = 'I would like to schedule a free estimate first'
        break
      case 'more-info':
        message = 'Tell me more about your process and what to expect'
        break
      default:
        message = action
    }
    
    handleSendMessage(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputText)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Chat Widget */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isOpen ? 'w-96 h-[600px]' : 'w-auto h-auto'
      }`}>
        {isOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col">
            {/* Header */}
            <div className="bg-gray-900 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <Truck className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Service</h3>
                    <div className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 hover:bg-gray-800 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gray-900 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2 border border-gray-100">
                      <div className="flex items-center space-x-1">
                        <Truck className="w-4 h-4 text-gray-600 mr-2" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Action Buttons for Scheduling */}
            {conversationContext.includes('scheduling') && (
              <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                <div className="text-xs text-gray-600 mb-2 font-medium">Quick Actions:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleQuickAction('book-urgent')}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    🚨 Urgent Service
                  </button>
                  <button
                    onClick={() => handleQuickAction('book-today')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    📅 Today
                  </button>
                  <button
                    onClick={() => handleQuickAction('book-tomorrow')}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    🌅 Tomorrow
                  </button>
                  <button
                    onClick={() => handleQuickAction('book-weekend')}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    🎉 Weekend
                  </button>
                  <button
                    onClick={() => handleQuickAction('free-estimate')}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                  >
                    📋 Free Estimate
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-100 rounded-b-2xl text-xs text-gray-500 text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-gray-600" />
                  <span>Secure Chat</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-gray-600" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
