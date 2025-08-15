'use client'

import { Phone, MessageCircle, Mail, Clock } from 'lucide-react'

const ContactBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+19047423531" className="hover:text-gray-300 transition-colors">
              (904) 742-3531
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <a href="sms:+19047423531" className="hover:text-gray-300 transition-colors">
              Text Us
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@jacksonvillejunkremovals.com" className="hover:text-gray-300 transition-colors">
              info@jacksonvillejunkremovals.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>24/7 Service Available</span>
        </div>
      </div>
    </div>
  )
}

export default ContactBar
