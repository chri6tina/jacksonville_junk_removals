'use client'

import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'

const ContactBar = () => {
  return (
    <div className="bg-gray-900 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a 
                href="tel:+19047423531" 
                className="hover:text-gray-300 transition-colors font-medium"
                aria-label="Call us at (904) 742-3531"
              >
                (904) 742-3531
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <a 
                href="sms:+19047423531" 
                className="hover:text-gray-300 transition-colors font-medium"
                aria-label="Send us a text message"
              >
                Text Us
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:info@jacksonvillejunkremovals.com" 
                className="hover:text-gray-300 transition-colors font-medium"
                aria-label="Send us an email"
              >
                info@jacksonvillejunkremovals.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="font-medium">24/7 Service Available</span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Primary Contact Info */}
          <div className="flex justify-center mb-2">
            <a 
              href="tel:+19047423531" 
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors font-semibold text-base"
              aria-label="Call us at (904) 742-3531"
            >
              <Phone className="w-5 h-5" />
              <span>(904) 742-3531</span>
            </a>
          </div>
          
          {/* Secondary Contact Options */}
          <div className="flex justify-center space-x-4 text-xs">
            <a 
              href="sms:+19047423531" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              aria-label="Send us a text message"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Text</span>
            </a>
            <a 
              href="mailto:info@jacksonvillejunkremovals.com" 
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
              aria-label="Send us an email"
            >
              <Mail className="w-3 h-3" />
              <span>Email</span>
            </a>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBar
