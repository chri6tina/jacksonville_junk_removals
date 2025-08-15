'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Clock, User, Bot, Brain, Zap, TrendingUp, MapPin, Calendar, DollarSign, Truck, Shield, Star } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  type: 'text' | 'quick-reply' | 'service-card' | 'pricing-info' | 'location-info'
  metadata?: any
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
      text: 'Hi! 👋 I\'m your AI-powered assistant for Jacksonville Junk Removals. I can help you with quotes, scheduling, service information, and much more! How can I assist you today?',
      sender: 'agent',
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationContext, setConversationContext] = useState<string[]>([])
  const [userPreferences, setUserPreferences] = useState<Record<string, any>>({})
  const [suggestedServices, setSuggestedServices] = useState<string[]>([])
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Enhanced quick replies based on context
  const getContextualQuickReplies = () => {
    if (conversationContext.includes('pricing')) {
      return ['Get detailed quote', 'Service pricing', 'Special offers', 'Payment options']
    }
    if (conversationContext.includes('scheduling')) {
      return ['Book now', 'Available dates', 'Same-day service', 'Weekend options']
    }
    if (conversationContext.includes('location')) {
      return ['Service areas', 'Check coverage', 'Local pricing', 'Area-specific services']
    }
    return [
      'Get a free quote',
      'Schedule service',
      'Pricing information',
      'Service areas',
      'Speak to someone'
    ]
  }

  // AI-like intent recognition
  const analyzeIntent = (text: string): UserIntent => {
    const lowerText = text.toLowerCase()
    const words = lowerText.split(' ')
    
    let primary = 'general'
    let confidence = 0.5
    const entities: string[] = []
    const context: string[] = []

    // Service type detection
    if (lowerText.includes('mattress') || lowerText.includes('bed')) {
      entities.push('mattress-removal')
      context.push('mattress-service')
      confidence += 0.3
    }
    if (lowerText.includes('furniture') || lowerText.includes('couch') || lowerText.includes('chair')) {
      entities.push('furniture-removal')
      context.push('furniture-service')
      confidence += 0.3
    }
    if (lowerText.includes('appliance') || lowerText.includes('refrigerator') || lowerText.includes('washer')) {
      entities.push('appliance-removal')
      context.push('appliance-service')
      confidence += 0.3
    }
    if (lowerText.includes('construction') || lowerText.includes('debris') || lowerText.includes('renovation')) {
      entities.push('construction-debris')
      context.push('construction-service')
      confidence += 0.3
    }
    if (lowerText.includes('garage') || lowerText.includes('cleanout')) {
      entities.push('garage-cleanout')
      context.push('garage-service')
      confidence += 0.3
    }

    // Intent detection
    if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('how much')) {
      primary = 'pricing'
      context.push('pricing')
      confidence += 0.4
    }
    if (lowerText.includes('schedule') || lowerText.includes('book') || lowerText.includes('appointment') || lowerText.includes('when')) {
      primary = 'scheduling'
      context.push('scheduling')
      confidence += 0.4
    }
    if (lowerText.includes('area') || lowerText.includes('location') || lowerText.includes('jacksonville') || lowerText.includes('serve')) {
      primary = 'location'
      context.push('location')
      confidence += 0.4
    }
    if (lowerText.includes('urgent') || lowerText.includes('emergency') || lowerText.includes('same day') || lowerText.includes('asap')) {
      primary = 'urgent'
      context.push('urgent')
      confidence += 0.5
    }
    if (lowerText.includes('commercial') || lowerText.includes('business') || lowerText.includes('office')) {
      primary = 'commercial'
      context.push('commercial')
      confidence += 0.3
    }

    // Location detection
    const locations = ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco']
    locations.forEach(location => {
      if (lowerText.includes(location)) {
        entities.push(location)
        context.push('specific-location')
        confidence += 0.2
      }
    })

    return { primary, confidence: Math.min(confidence, 1), entities, context }
  }

  // Smart response generation
  const generateSmartResponse = (userText: string, intent: UserIntent): string => {
    const { primary, entities, context } = intent
    
    // Update conversation context
    setConversationContext(prev => [...new Set([...prev, ...context])])
    
    // Generate personalized response based on intent and context
    if (primary === 'pricing') {
      if (entities.includes('mattress-removal')) {
        return 'Great question! Our mattress removal service starts at just $50 per mattress. This includes pickup, disposal, and eco-friendly recycling. For multiple mattresses, we offer volume discounts. Would you like me to calculate a quote for your specific needs?'
      }
      if (entities.includes('furniture-removal')) {
        return 'Furniture removal pricing starts at $100 and varies based on size and quantity. We offer transparent pricing with no hidden fees. For a detailed quote, I can help you estimate based on what you need removed. What type of furniture are you looking to dispose of?'
      }
      if (entities.includes('garage-cleanout')) {
        return 'Garage cleanout pricing is based on volume and typically ranges from $150-$500 depending on how full your garage is. We offer free estimates and can provide a more accurate quote once we see the space. Would you like to schedule a free estimate?'
      }
      return 'I\'d be happy to help with pricing! Our rates vary by service type and volume. For the most accurate quote, I recommend using our online estimation tool or scheduling a free on-site estimate. What specific service are you interested in?'
    }
    
    if (primary === 'scheduling') {
      if (context.includes('urgent')) {
        return 'I understand you need urgent service! We offer same-day junk removal for urgent situations. Our team can typically be there within 2-4 hours. What type of service do you need, and what\'s your preferred time today?'
      }
      if (entities.includes('specific-location')) {
        return 'Perfect! I can help you schedule service in your area. We offer flexible scheduling Monday through Friday, with weekend appointments available. What date works best for you? I can also check our current availability for same-day service.'
      }
      return 'Great! Let\'s get you scheduled. We offer flexible scheduling with same-day service available. What date works best for you? I can also help you choose the best time slot and service type for your needs.'
    }
    
    if (primary === 'location') {
      if (entities.includes('specific-location')) {
        const location = entities.find(e => ['beach', 'riverside', 'southside', 'mandarin', 'arlington', 'orange park', 'san marco'].includes(e))
        return `Excellent! We serve ${location} and the surrounding areas. Our team is very familiar with the local area and can provide area-specific pricing and scheduling. We typically have same-day availability in ${location}. What service do you need?`
      }
      return 'We serve all of Jacksonville and surrounding areas including Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, and San Marco. Each area has its own pricing and availability. Where are you located so I can provide the most accurate information?'
    }
    
    if (primary === 'urgent') {
      return 'I understand this is urgent! We prioritize emergency situations and can typically provide same-day service within 2-4 hours. What type of junk removal do you need, and what\'s your location? I\'ll get you scheduled immediately.'
    }
    
    if (primary === 'commercial') {
      return 'For commercial junk removal, we offer specialized services including office cleanouts, retail store cleanouts, and construction debris removal. We have dedicated commercial teams and can work around your business hours. What type of commercial service do you need?'
    }

    // Fallback with context awareness
    if (context.includes('mattress-service')) {
      return 'Since you mentioned mattress removal, I can tell you that we offer eco-friendly disposal and can handle any size mattress. Our team is trained to safely remove mattresses from any location in your home. Would you like pricing or scheduling information?'
    }
    
    if (context.includes('furniture-service')) {
      return 'For furniture removal, we handle everything from small items to large furniture sets. We\'re careful with your property and can work in tight spaces. Do you need help estimating the volume or would you prefer to schedule a free estimate?'
    }

    return 'Thank you for your message! I\'d be happy to help you with your junk removal needs. Based on our conversation, I can assist with quotes, scheduling, service information, or any other questions. What would be most helpful for you right now?'
  }

  // Suggest relevant services based on context
  const getServiceSuggestions = (context: string[]) => {
    const suggestions: string[] = []
    
    if (context.includes('mattress-service')) {
      suggestions.push('Furniture Removal', 'Appliance Removal', 'Garage Cleanout')
    }
    if (context.includes('furniture-service')) {
      suggestions.push('Mattress Removal', 'Appliance Removal', 'Office Cleanout')
    }
    if (context.includes('commercial')) {
      suggestions.push('Office Furniture Removal', 'Retail Store Cleanout', 'Construction Debris')
    }
    if (context.includes('urgent')) {
      suggestions.push('Same-Day Service', 'Emergency Cleanup', 'Quick Removal')
    }
    
    return suggestions.length > 0 ? suggestions : ['Mattress Removal', 'Furniture Removal', 'Appliance Removal', 'Garage Cleanout']
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
    
    // Generate smart response
    setTimeout(() => {
      const response = generateSmartResponse(text, intent)
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
        type: 'text'
      }
      
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
      
      // Update suggested services
      const suggestions = getServiceSuggestions(intent.context)
      setSuggestedServices(suggestions)
      
      // Store user preferences
      if (intent.entities.length > 0) {
        setUserPreferences(prev => ({
          ...prev,
          preferredServices: intent.entities,
          lastIntent: intent.primary
        }))
      }
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleServiceSuggestion = (service: string) => {
    handleSendMessage(`Tell me more about ${service}`)
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-110"
        >
          <Brain className="w-6 h-6" />
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Smart Chat Widget */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isOpen ? 'w-96 h-[600px]' : 'w-auto h-auto'
      }`}>
        {isOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col">
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Smart & Learning</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
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
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
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
                        <Brain className="w-4 h-4 text-purple-600 mr-2" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Smart Quick Replies */}
            {messages.length > 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-gray-500 mb-2 flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Smart suggestions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {getContextualQuickReplies().map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Service Suggestions */}
            {suggestedServices.length > 0 && messages.length > 2 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-gray-500 mb-2 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  You might also like:
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedServices.slice(0, 3).map((service) => (
                    <button
                      key={service}
                      onClick={() => handleServiceSuggestion(service)}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-xs hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
                    >
                      {service}
                    </button>
                  ))}
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
                  placeholder="Ask me anything about junk removal..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Enhanced Footer */}
            <div className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-b-2xl text-xs text-gray-500 text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Brain className="w-3 h-3 mr-1 text-purple-600" />
                  <span>AI Powered</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-green-600" />
                  <span>Secure Chat</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-600" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-110"
          >
            <Brain className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
