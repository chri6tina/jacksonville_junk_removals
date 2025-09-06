import type { Metadata } from 'next'
import EstimationForm from '@/components/EstimationForm'

export const metadata: Metadata = {
  title: 'Free Junk Removal Quote - Jacksonville Junk Removals',
  description: 'Get your free, no-obligation junk removal quote in Jacksonville, Florida. Use our online estimation tool for instant pricing on all services.',
  keywords: 'junk removal quote Jacksonville, free estimate, online pricing calculator, junk removal cost',
}

export default function EstimationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Your Free Junk Removal Quote
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use our online estimation tool to get instant pricing for your junk removal project. 
              No hidden fees, transparent pricing, and same-day service available.
            </p>
          </div>
        </div>

        {/* Estimation Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EstimationForm />
        </div>

        {/* Trust Indicators */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">No Hidden Fees</h3>
                <p className="text-gray-600">What you see is what you pay. Transparent pricing with no surprises.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Same-Day Service</h3>
                <p className="text-gray-600">Get your junk removed the same day you call. No waiting around.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Licensed & Insured</h3>
                <p className="text-gray-600">Professional, bonded team for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
