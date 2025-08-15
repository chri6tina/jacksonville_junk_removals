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
      text: 'Hi there! 👋 I\'m your Jacksonville Junk Removal specialist! I can help you with pricing, scheduling, service details, and answer any questions about our junk removal services. We offer mattress removal (starting at $50), furniture removal (starting at $100), appliance removal (starting at $75), garage cleanouts (starting at $150), and construction debris removal (starting at $200). What service are you interested in today?',
      sender: 'agent',
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState<string[]>([])
  const [userPreferences, setUserPreferences] = useState<Record<string, any>>({})
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Enhanced intent recognition with better pattern matching
  const analyzeIntent = (text: string): UserIntent => {
    const lowerText = text.toLowerCase()
    const words = lowerText.split(' ')
    
    let primary = 'general'
    let confidence = 0.5
    const entities: string[] = []
    const context: string[] = []

    // Enhanced service type detection
    if (lowerText.includes('mattress') || lowerText.includes('bed') || lowerText.includes('box spring')) {
      entities.push('mattress-removal')
      context.push('mattress-service')
      confidence += 0.3
    }
    if (lowerText.includes('furniture') || lowerText.includes('couch') || lowerText.includes('chair') || lowerText.includes('sofa') || lowerText.includes('table') || lowerText.includes('desk')) {
      entities.push('furniture-removal')
      context.push('furniture-service')
      confidence += 0.3
    }
    if (lowerText.includes('appliance') || lowerText.includes('refrigerator') || lowerText.includes('washer') || lowerText.includes('dryer') || lowerText.includes('dishwasher') || lowerText.includes('stove') || lowerText.includes('oven')) {
      entities.push('appliance-removal')
      context.push('appliance-service')
      confidence += 0.3
    }
    if (lowerText.includes('construction') || lowerText.includes('debris') || lowerText.includes('renovation') || lowerText.includes('drywall') || lowerText.includes('lumber') || lowerText.includes('concrete')) {
      entities.push('construction-debris')
      context.push('construction-service')
      confidence += 0.3
    }
    if (lowerText.includes('garage') || lowerText.includes('cleanout') || lowerText.includes('basement') || lowerText.includes('attic')) {
      entities.push('garage-cleanout')
      context.push('garage-service')
      confidence += 0.3
    }
    if (lowerText.includes('office') || lowerText.includes('commercial') || lowerText.includes('business') || lowerText.includes('retail') || lowerText.includes('store')) {
      entities.push('commercial-junk-removal')
      context.push('commercial-service')
      confidence += 0.3
    }

    // Enhanced intent detection
    if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much') || lowerText.includes('$$') || lowerText.includes('dollars')) {
      primary = 'pricing'
      context.push('pricing')
      confidence += 0.4
    }
    if (lowerText.includes('schedule') || lowerText.includes('book') || lowerText.includes('appointment') || lowerText.includes('when') || lowerText.includes('available') || lowerText.includes('time')) {
      primary = 'scheduling'
      context.push('scheduling')
      confidence += 0.4
    }
    if (lowerText.includes('area') || lowerText.includes('location') || lowerText.includes('jacksonville') || lowerText.includes('serve') || lowerText.includes('coverage') || lowerText.includes('where')) {
      primary = 'location'
      context.push('location')
      confidence += 0.4
    }
    if (lowerText.includes('urgent') || lowerText.includes('emergency') || lowerText.includes('same day') || lowerText.includes('asap') || lowerText.includes('today') || lowerText.includes('immediate')) {
      primary = 'urgent'
      context.push('urgent')
      confidence += 0.5
    }
    if (lowerText.includes('process') || lowerText.includes('how does') || lowerText.includes('what happens') || lowerText.includes('steps')) {
      primary = 'process'
      context.push('process')
      confidence += 0.3
    }

    // Enhanced location detection
    const locations = ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco', 'downtown', 'southside', 'northside']
    locations.forEach(location => {
      if (lowerText.includes(location)) {
        entities.push(location)
        context.push('specific-location')
        confidence += 0.2
      }
    })

    // Additional context clues
    if (lowerText.includes('free') || lowerText.includes('estimate') || lowerText.includes('quote')) {
      context.push('free-estimate')
    }
    if (lowerText.includes('eco') || lowerText.includes('green') || lowerText.includes('recycle')) {
      context.push('eco-friendly')
    }
    if (lowerText.includes('weekend') || lowerText.includes('saturday') || lowerText.includes('sunday')) {
      context.push('weekend-service')
    }

    return { primary, confidence: Math.min(confidence, 1), entities, context }
  }

  // Smart response generation using OpenAI API
  const generateSmartResponse = async (userText: string, intent: UserIntent): Promise<string> => {
    const { primary, entities, context } = intent
    
    // Update conversation context
    setConversationContext(prev => [...new Set([...prev, ...context])])
    
    try {
      // Call OpenAI API
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          conversationHistory: messages.slice(-5), // Last 5 messages for context
          userContext: context.join(', ')
        })
      })

      if (!response.ok) {
        throw new Error('Service unavailable')
      }

      const data = await response.json()
      
      if (data.error) {
        // Fallback to rule-based responses if AI fails
        return generateFallbackResponse(primary, entities, context)
      }

      return data.response

    } catch (error) {
      console.error('API Error:', error)
      // Fallback to rule-based responses
      return generateFallbackResponse(primary, entities, context)
    }
  }

  // Super smart fallback response generation with detailed, contextual answers
  const generateFallbackResponse = (primary: string, entities: string[], context: string[]): string => {
    // Handle specific service questions with detailed answers
    if (entities.includes('mattress-removal')) {
      if (primary === 'pricing') {
        return 'Our mattress removal pricing is very competitive! 🛏️ Single mattress removal starts at $50, which includes pickup from any room, safe removal, and eco-friendly disposal. For multiple mattresses: 2 mattresses = $90, 3 mattresses = $130. We also handle box springs, bed frames, and bedroom furniture. All pricing includes our full-service treatment - no hidden fees! Would you like me to help you estimate your specific needs?'
      }
      if (primary === 'scheduling') {
        return 'Great news! 🚛 We offer same-day mattress removal service in Jacksonville. Our typical availability is 2-4 hours from your call. We work Monday-Friday 8 AM-5 PM, and Saturday by appointment. For urgent removals, we can often accommodate same-day service. What\'s your preferred date and time? I can check our current availability right now!'
      }
      return 'Mattress removal is one of our most popular services! 🛏️ We handle all sizes (twin, full, queen, king, California king) and can remove them from any room - even tight spaces. Our team is trained in safe removal techniques and we offer eco-friendly disposal. We typically complete mattress removal in 30-45 minutes. What would you like to know - pricing, scheduling, or our process?'
    }

    if (entities.includes('furniture-removal')) {
      if (primary === 'pricing') {
        return 'Furniture removal pricing is based on volume and complexity! 🪑 Small items (chairs, end tables) start at $50, medium furniture (couches, loveseats) start at $100, and large furniture (sectionals, entertainment centers) start at $150+. We offer volume discounts for multiple pieces. All pricing includes careful removal, cleanup, and responsible disposal. No hidden fees! What furniture do you need removed? I can give you a more specific estimate.'
      }
      if (primary === 'scheduling') {
        return 'Furniture removal scheduling is flexible! 📅 We offer same-day service for urgent needs, and can typically accommodate your preferred time within 24-48 hours. We work Monday-Friday 8 AM-5 PM, with Saturday appointments available. Our team can handle tight spaces and staircases safely. What\'s your timeline and preferred service date?'
      }
      return 'Furniture removal is our specialty! 🪑 We handle everything from antique furniture to modern pieces, and we\'re careful with your property. Our team can work in tight spaces, navigate stairs, and ensure no damage to your home. We typically complete furniture removal in 1-2 hours depending on volume. What would you like to know about our service?'
    }

    if (entities.includes('appliance-removal')) {
      if (primary === 'pricing') {
        return 'Appliance removal pricing is straightforward! 🧊 Small appliances (dishwashers, microwaves) start at $50, medium appliances (washers, dryers) start at $75, and large appliances (refrigerators, freezers) start at $100. We handle all the heavy lifting, safe removal, and proper disposal. Volume discounts available for multiple appliances. What appliances do you need removed?'
      }
      if (primary === 'scheduling') {
        return 'Appliance removal scheduling is quick! ⚡ We offer same-day service for urgent needs and can typically accommodate you within 24 hours. Our team is experienced with all appliance types and can safely remove them from any location. We work Monday-Friday 8 AM-5 PM, with Saturday availability. What\'s your preferred service date?'
      }
      return 'Appliance removal is our expertise! 🧊 We handle refrigerators, washers, dryers, dishwashers, stoves, and all other large appliances. Our team can safely remove them from tight spaces, navigate stairs, and ensure proper disposal. We typically complete appliance removal in 30-60 minutes. What would you like to know about our service?'
    }

    if (entities.includes('garage-cleanout')) {
      if (primary === 'pricing') {
        return 'Garage cleanout pricing is volume-based! 🚗 Quarter garage (25% full) starts at $150, half garage (50% full) starts at $250, three-quarter garage (75% full) starts at $350, and full garage starts at $450. This includes complete cleanup, item removal, and space preparation. We offer free estimates to give you the most accurate pricing. Would you like to schedule a free estimate?'
      }
      if (primary === 'scheduling') {
        return 'Garage cleanout scheduling is flexible! 📅 We can typically accommodate you within 24-48 hours, with same-day service available for urgent needs. Our team works Monday-Friday 8 AM-5 PM, with Saturday appointments. We bring all necessary equipment and can handle any size cleanout. What\'s your preferred service date?'
      }
      return 'Garage cleanout is our comprehensive service! 🚗 We handle everything from old furniture and appliances to tools, sports equipment, and general clutter. Our team can work around your schedule and we provide complete cleanup. Typical cleanout time is 2-4 hours depending on volume. What would you like to know about our service?'
    }

    if (entities.includes('construction-debris')) {
      if (primary === 'pricing') {
        return 'Construction debris removal pricing varies by project size! 🏗️ Small projects (1-2 truckloads) start at $200, medium projects (3-5 truckloads) start at $400, and large projects (6+ truckloads) start at $600. We handle drywall, lumber, concrete, metal, and all construction materials. Volume discounts available for ongoing projects. What type of construction project are you working on?'
      }
      if (primary === 'scheduling') {
        return 'Construction debris removal scheduling is project-focused! 🏗️ We can work around your construction schedule and typically provide same-day or next-day service. Our team is experienced with construction sites and can handle any debris type. We work Monday-Friday 8 AM-5 PM, with weekend availability for urgent projects. What\'s your project timeline?'
      }
      return 'Construction debris removal is our specialty! 🏗️ We handle all types of construction waste including drywall, lumber, concrete, metal, insulation, and more. Our team can work around your construction schedule and provide efficient cleanup. We typically complete debris removal in 1-3 hours depending on volume. What would you like to know about our service?'
    }

    // Handle specific intent types
    if (primary === 'pricing') {
      return 'I\'d be happy to help with pricing! 💰 Our rates are competitive and transparent. Here\'s a quick overview: Mattress removal starts at $50, furniture removal starts at $100, appliance removal starts at $75, garage cleanout starts at $150, and construction debris starts at $200. All pricing includes full service with no hidden fees. For the most accurate quote, I recommend a free on-site estimate. What specific service are you interested in?'
    }
    
    if (primary === 'scheduling') {
      if (context.includes('urgent')) {
        return 'I understand you need urgent service! 🚨 We prioritize emergency situations and can typically provide same-day service within 2-4 hours. Our team is available Monday-Friday 8 AM-5 PM, with Saturday appointments. For urgent needs, we can often accommodate same-day service. What type of junk removal do you need, and what\'s your preferred time today?'
      }
      return 'Great! Let\'s get you scheduled! 📅 We offer flexible scheduling with same-day service available for urgent needs. Our typical availability is within 24-48 hours, and we work Monday-Friday 8 AM-5 PM, with Saturday appointments. What date works best for you? I can also help you choose the best time slot and service type.'
    }
    
    if (primary === 'location') {
      if (entities.includes('specific-location')) {
        const location = entities.find(e => ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco', 'downtown'].includes(e))
        return `Excellent! We serve ${location} and the surrounding areas! 🗺️ Our team is very familiar with ${location} and we provide area-specific pricing and scheduling. We typically have same-day availability in ${location} and can accommodate your schedule. What service do you need in ${location}?`
      }
      return 'We serve all of Jacksonville and surrounding areas! 🗺️ Our coverage includes Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, San Marco, Downtown, and more. Each area has its own pricing and availability. Where are you located so I can provide the most accurate information and check our current availability?'
    }
    
    if (primary === 'urgent') {
      return 'I understand this is urgent! 🚨 We prioritize emergency situations and can typically provide same-day service within 2-4 hours. Our team is experienced with urgent removals and we can work around your schedule. What type of junk removal do you need, and what\'s your location? I\'ll get you scheduled immediately!'
    }
    
    if (primary === 'commercial') {
      return 'For commercial junk removal, we offer specialized services! 🏢 This includes office cleanouts, retail store cleanouts, construction debris removal, and business equipment removal. We have dedicated commercial teams and can work around your business hours, including early morning, evening, and weekend appointments. What type of commercial service do you need?'
    }

    if (primary === 'process') {
      return 'Great question! Our process is simple and efficient! 📋 Here\'s how it works: 1) We provide a free, no-obligation estimate, 2) Schedule your preferred time (same-day available), 3) Our professional team arrives and handles everything, 4) We clean up and dispose of items responsibly. The entire process typically takes 1-3 hours depending on volume. We bring all necessary equipment and handle everything from start to finish. Would you like to schedule a free estimate?'
    }

    // Handle specific context clues
    if (context.includes('free-estimate')) {
      return 'Absolutely! We offer free, no-obligation estimates! 📋 Our team can come to your location to assess the volume and provide an accurate quote. We typically schedule estimates within 24-48 hours, and they take about 15-30 minutes. No pressure to book - it\'s completely free! What service do you need estimated?'
    }

    if (context.includes('eco-friendly')) {
      return 'Great question! We\'re committed to eco-friendly disposal! 🌱 We recycle and donate items whenever possible, and ensure proper disposal of items that can\'t be recycled. We work with local recycling centers and donation organizations to minimize environmental impact. This is included in all our pricing at no extra cost!'
    }

    if (context.includes('weekend-service')) {
      return 'Yes! We offer weekend appointments! 📅 Saturday service is available by appointment, though availability is limited. Saturday appointments typically have premium pricing due to high demand. For the best availability and pricing, we recommend weekday appointments. What\'s your preferred service date?'
    }

    // Handle specific service combinations
    if (entities.length > 1) {
      const services = entities.map(e => e.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())).join(' and ')
      return `I see you're interested in ${services}! 🎯 We offer comprehensive services for both, and we can often provide package deals when booking multiple services together. This can save you money and time. Would you like to know about pricing for the combination, or would you prefer to schedule a free estimate to see both services?`
    }

    // Handle general questions with specific information
    if (entities.length > 0) {
      const service = entities[0].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
      return `I see you're interested in ${service}! 🎯 We offer comprehensive ${service} services with competitive pricing and flexible scheduling. Our team is experienced with ${service} and we can handle any size project. Would you like to know more about pricing, scheduling, our process, or would you prefer to schedule a free estimate?`
    }

    // Final fallback with specific service list
    return 'Thank you for your message! I\'d be happy to help you with your junk removal needs! 🚛 We offer comprehensive services including mattress removal (starting at $50), furniture removal (starting at $100), appliance removal (starting at $75), garage cleanout (starting at $150), construction debris removal (starting at $200), and commercial services. All services include free estimates and flexible scheduling. What specific service are you looking for today? I can provide detailed information and help you get started!'
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
