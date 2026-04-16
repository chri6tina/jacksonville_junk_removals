import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import ContactBar from '@/components/ContactBar'

export const metadata: Metadata = {
  title: 'Contact Us - Jacksonville Junk Removals',
  description: 'Contact Jacksonville Junk Removals for professional junk removal services. Get in touch for free quotes, scheduling, or questions about our services.',
  keywords: 'contact Jacksonville junk removal, phone number, address, free quote, scheduling',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Jacksonville Junk Removals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free quote, schedule your service, 
            or ask any questions about our junk removal services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help with all your junk removal needs. Call us anytime, 
                fill out the form, or stop by our office during business hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a 
                    href="tel:+19047423531" 
                    className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    (904) 742-3531
                  </a>
                  <p className="text-sm text-gray-500">24/7 service available</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:info@jacksonvillejunkremovals.com" 
                    className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    info@jacksonvillejunkremovals.com
                  </a>
                  <p className="text-sm text-gray-500">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Area</h3>
                  <p className="text-lg text-gray-600">
                    Jacksonville, Florida & Surrounding Areas
                  </p>
                  <p className="text-sm text-gray-500">
                    Including: Downtown, Riverside, San Marco, Mandarin, Arlington, Orange Park, Southside, Jacksonville Beach
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency Service</span>
                    <span className="font-medium text-green-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/estimation"
                  className="bg-gray-900 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Free Quote
                </a>
                <a
                  href="/99-junk-removal"
                  className="bg-yellow-500 text-gray-900 px-4 py-3 rounded-lg text-center font-medium hover:bg-yellow-600 transition-colors duration-200"
                >
                  $99 Special
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve Jacksonville and surrounding areas with professional junk removal services
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Jacksonville Service Area
                </h3>
                <p className="text-gray-600 text-sm">
                  Interactive map coming soon
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              We service all of Jacksonville including Downtown, Riverside, San Marco, Mandarin, 
              Arlington, Orange Park, Southside, and Jacksonville Beach areas.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our junk removal services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                How quickly can you come out?
              </h3>
              <p className="text-gray-600">
                We offer same-day service for most projects. For urgent requests, we can often 
                arrive within 2-4 hours. Call us at (904) 742-3531 for immediate assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you provide free estimates?
              </h3>
              <p className="text-gray-600">
                Yes! All our estimates are completely free with no obligation. We can provide 
                estimates over the phone, through our online tool, or in person.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                What areas do you service?
              </h3>
              <p className="text-gray-600">
                We service all of Jacksonville and surrounding areas including Clay County. 
                This includes Downtown, Riverside, San Marco, Mandarin, Arlington, Orange Park, 
                Southside, and Jacksonville Beach.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Are you licensed and insured?
              </h3>
              <p className="text-gray-600">
                Absolutely! We are fully licensed, bonded, and insured for your protection. 
                Our team is trained in proper disposal methods and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
