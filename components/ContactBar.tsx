'use client'

import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'

const ContactBar = () => {
  return (
    <div className="bg-primary text-white py-3 px-4 border-b-4 border-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center text-sm font-semibold tracking-wide">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/30">
              <Phone className="w-4 h-4 text-secondary" />
              <a 
                href="tel:+19044563851" 
                className="hover:text-secondary transition-colors"
                aria-label="Call us at (904) 456-3851"
              >
                Call Now: (904) 456-3851
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-secondary" />
              <a 
                href="sms:+19044563851" 
                className="hover:text-secondary transition-colors"
                aria-label="Send us a text message"
              >
                Text For A Quote
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-secondary" />
              <a 
                href="mailto:info@jacksonvillejunkremovals.com" 
                className="hover:text-secondary transition-colors"
                aria-label="Send us an email"
              >
                info@jacksonvillejunkremovals.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full border border-secondary/40">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Fast Same-Day Service</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Primary Contact Info */}
          <div className="flex justify-center mb-3">
            <a 
              href="tel:+19044563851" 
              className="w-full flex items-center justify-center space-x-2 bg-secondary hover:bg-orange-600 px-4 py-3 rounded-lg transition-colors shadow-lg font-bold text-lg text-white"
              aria-label="Call us at (904) 456-3851"
            >
              <Phone className="w-5 h-5 animate-bounce-gentle" />
              <span>Tap To Call: (904) 456-3851</span>
            </a>
          </div>
          
          {/* Secondary Contact Options */}
          <div className="flex justify-between px-2 text-xs font-semibold text-gray-300">
            <a 
              href="sms:+19044563851" 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              aria-label="Send us a text message"
            >
              <MessageCircle className="w-4 h-4 text-secondary" />
              <span>Text Us</span>
            </a>
            <div className="flex items-center space-x-1.5 text-secondary">
              <Clock className="w-4 h-4" />
              <span>Same-Day Removal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBar
