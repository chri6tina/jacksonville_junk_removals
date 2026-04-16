import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Home, DollarSign, Star, Users, FileText, Droplets, AlertTriangle, Wrench, Zap, Heart, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flood Cleanup Jacksonville | Water Damage Restoration | Emergency Flood Response (904) 456-3851',
  description: 'Professional flood cleanup services in Jacksonville, Florida. Emergency water damage restoration, flood debris removal, mold remediation, and insurance claim support. 24/7 emergency response. Call (904) 456-3851',
  keywords: 'flood cleanup Jacksonville, water damage restoration Jacksonville, flood damage cleanup Jacksonville, emergency flood response Jacksonville, mold remediation Jacksonville, flood debris removal Florida',
  alternates: {
    canonical: '/flood-cleanup',
  },
}

export default function FloodCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20 mx-auto lg:mx-0">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-secondary fill-secondary drop-shadow-md" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm">Top-Rated Local Service</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                  Flood Cleanup Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">24/7 EMERGENCY RESPONSE</span><br /> Professional flood cleanup and water damage restoration services.<br /> Fast response, comprehensive cleanup, and complete restoration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <Link
                  href="tel:+19044563851"
                  className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 animate-bounce-gentle" />
                  <span>Call (904) 456-3851</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Emergency Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🚨 24/7 EMERGENCY FLOOD CLEANUP SERVICES 🚨
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 immediately for emergency flood response
            </p>
          </div>
        </section>

        {/* Flood Cleanup Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Flood Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From emergency response to complete restoration, we handle all aspects of flood damage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emergency Response */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Response
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency flood response with immediate water extraction and damage assessment.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Immediate response</li>
                  <li>• Water extraction</li>
                  <li>• Damage assessment</li>
                  <li>• Safety evaluation</li>
                </ul>
              </div>

              {/* Water Damage Restoration */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Droplets className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Water Damage Restoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete water damage restoration including drying, dehumidification, and structural repair.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Water extraction</li>
                  <li>• Drying & dehumidification</li>
                  <li>• Structural repair</li>
                  <li>• Content restoration</li>
                </ul>
              </div>

              {/* Flood Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Flood Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete removal of flood-damaged materials, furniture, and debris from your property.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damaged furniture removal</li>
                  <li>• Contaminated materials</li>
                  <li>• Debris cleanup</li>
                  <li>• Eco-friendly disposal</li>
                </ul>
              </div>

              {/* Mold Remediation */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mold Remediation
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional mold removal and prevention to protect your health and property.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mold inspection</li>
                  <li>• Safe removal</li>
                  <li>• Prevention measures</li>
                  <li>• Air quality testing</li>
                </ul>
              </div>

              {/* Insurance Support */}
              <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Insurance Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Documentation and support for insurance claims to ensure maximum coverage.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damage documentation</li>
                  <li>• Photo evidence</li>
                  <li>• Claim assistance</li>
                  <li>• Restoration estimates</li>
                </ul>
              </div>

              {/* Structural Repair */}
              <div className="bg-orange-50 rounded-lg p-8 border border-orange-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Structural Repair
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete structural repair and restoration to return your property to pre-flood condition.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Foundation repair</li>
                  <li>• Wall restoration</li>
                  <li>• Flooring replacement</li>
                  <li>• Electrical safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Flood Cleanup */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Flood Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the urgency and complexity of flood damage. Our expertise ensures your property is restored quickly and safely.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Emergency Response</h3>
                <p className="text-gray-600">Immediate response to flood emergencies with rapid deployment teams.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Full licensing and insurance coverage for all flood cleanup services.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Technicians</h3>
                <p className="text-gray-600">IICRC certified technicians with specialized flood cleanup training.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Service</h3>
                <p className="text-gray-600">Understanding and support during difficult flood recovery situations.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Equipment</h3>
                <p className="text-gray-600">Professional-grade equipment for efficient water extraction and drying.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Track record of successful flood restoration throughout Jacksonville.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flood Cleanup Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Flood Cleanup Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Systematic approach to flood cleanup ensuring thorough restoration and prevention of future damage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Response</h3>
                <p className="text-gray-600 text-sm">
                  Immediate response to assess damage and begin water extraction within hours of your call.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Water Extraction</h3>
                <p className="text-gray-600 text-sm">
                  Complete water removal using professional equipment to prevent further damage.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Drying & Dehumidification</h3>
                <p className="text-gray-600 text-sm">
                  Professional drying equipment to remove moisture and prevent mold growth.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Restoration</h3>
                <p className="text-gray-600 text-sm">
                  Complete restoration including debris removal, repairs, and mold prevention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Flood Cleanup Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide emergency flood cleanup services throughout Jacksonville and surrounding areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
                <p className="text-gray-600 mb-4">
                  Coastal flood cleanup with special attention to saltwater damage and beach property considerations.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Same-day response available</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
                <p className="text-gray-600 mb-4">
                  Suburban flood cleanup with large property access and upscale home restoration.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Large property specialists</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
                <p className="text-gray-600 mb-4">
                  Historic district flood cleanup with careful handling of older buildings and architectural features.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Historic building experts</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
                <p className="text-gray-600 mb-4">
                  Upscale neighborhood flood cleanup with premium service and careful property protection.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Premium service available</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
                <p className="text-gray-600 mb-4">
                  Commercial and residential flood cleanup with bulk removal and business project services.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Commercial specialists</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
                <p className="text-gray-600 mb-4">
                  Suburban flood cleanup with large lot access and family business handling.
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Family business experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Emergency Flood Cleanup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't wait! Immediate response is crucial to prevent further damage and mold growth. Call us now for emergency flood cleanup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9044563851"
                className="bg-gray-500 hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>EMERGENCY: (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Quote</span>
              </Link>
            </div>
            <div className="mt-6 p-4 bg-blue-800 rounded-lg max-w-2xl mx-auto">
              <p className="text-blue-100 font-semibold">
                ⚡ 24/7 Emergency Response: We're here when you need us most! ⚡
              </p>
            </div>
          </div>
        </section>
      </div>
  )
}
