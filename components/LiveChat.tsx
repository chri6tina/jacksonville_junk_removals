'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Mail, Clock, User, Bot } from 'lucide-react'

interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  type: 'text' | 'quick-reply'
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m here to help you with your junk removal needs. How can I assist you today?',
      sender: 'agent',
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [agentName, setAgentName] = useState('Sarah')
  const [agentStatus, setAgentStatus] = useState<'online' | 'away' | 'offline'>('online')
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickReplies = [
    'Get a free quote',
    'Schedule service',
    'Pricing information',
    'Service areas',
    'Speak to someone'
  ]

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

    // Simulate agent response
    setTimeout(() => {
      const response = generateAgentResponse(text)
      const agentMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'agent',
        timestamp: new Date(),
        type: 'text'
      }
      
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAgentResponse = (userText: string): string => {
    const text = userText.toLowerCase()
    
    if (text.includes('quote') || text.includes('price') || text.includes('cost')) {
      return 'Great! I can help you get a free quote. What type of junk removal service do you need? You can also use our online estimation tool at jacksonvillejunkremovals.com/estimation for an instant quote!'
    }
    
    if (text.includes('schedule') || text.includes('book') || text.includes('appointment')) {
      return 'Perfect! I can help you schedule your service. What date works best for you? We offer same-day service and flexible scheduling. You can also book online at jacksonvillejunkremovals.com/estimation'
    }
    
    if (text.includes('area') || text.includes('location') || text.includes('jacksonville')) {
      return 'We serve all of Jacksonville and surrounding areas including Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, and San Marco. Where are you located?'
    }
    
    if (text.includes('service') || text.includes('offer')) {
      return 'We offer comprehensive junk removal services: residential cleanouts, commercial cleanouts, construction debris removal, appliance removal, mattress removal, furniture removal, and more. What specific service do you need?'
    }
    
    if (text.includes('time') || text.includes('when') || text.includes('available')) {
      return 'We\'re available Monday through Friday 8 AM - 5 PM, with weekend appointments available. We also offer same-day service for urgent needs. What works best for your schedule?'
    }
    
    if (text.includes('speak') || text.includes('call') || text.includes('phone')) {
      return 'Absolutely! You can call us directly at (904) 456-3851. Our team is available to answer all your questions and provide personalized service. Would you like me to have someone call you?'
    }
    
    return 'Thank you for your message! I\'d be happy to help you with your junk removal needs. Could you tell me more about what you\'re looking for? I can help with quotes, scheduling, or any other questions you might have.'
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputText)
  }

  const getStatusColor = () => {
    switch (agentStatus) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = () => {
    switch (agentStatus) {
      case 'online': return 'Online now'
      case 'away': return 'Away'
      case 'offline': return 'Offline'
      default: return 'Offline'
    }
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110"
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
        isOpen ? 'w-96 h-[500px]' : 'w-auto h-auto'
      }`}>
        {isOpen ? (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jacksonville Junk Removals</h3>
                    <div className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor()}`}></div>
                      <span>{getStatusText()}</span>
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
                          ? 'bg-blue-600 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
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
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2">
                      <div className="flex items-center space-x-1">
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

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-50 transition-colors"
                    >
                      {reply}
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
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 rounded-b-2xl text-xs text-gray-500 text-center">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  <span>(904) 456-3851</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>8 AM - 5 PM</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  )
}
