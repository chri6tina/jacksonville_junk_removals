import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Home, DollarSign, Star, Users, FileText, AlertTriangle, TestTube, Biohazard, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hazardous Waste Removal Jacksonville | Safe Chemical & Biohazard Disposal (904) 456-3851',
  description: 'Professional hazardous waste removal services in Jacksonville, Florida. Safe handling of chemicals, biohazards, and dangerous materials. Licensed, insured, EPA compliant. Call (904) 456-3851',
  keywords: 'hazardous waste removal Jacksonville, chemical disposal Jacksonville, biohazard cleanup Jacksonville, dangerous materials Jacksonville, EPA compliant disposal Florida',
  alternates: {
    canonical: '/hazardous-waste-removal',
  },
}

export default function HazardousWasteRemovalPage() {
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
                  Hazardous Waste Removal Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-red-300 font-bold">SAFE & COMPLIANT</span><br /> Professional hazardous waste removal with proper safety protocols and EPA compliance.<br /> Protecting your safety and the environment.
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

        {/* Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                ⚠️ PROFESSIONAL HAZARDOUS WASTE REMOVAL SERVICES ⚠️
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for safe hazardous waste disposal service
            </p>
          </div>
        </section>

        {/* Hazardous Waste Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Hazardous Waste Removal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Safe handling and disposal of all types of hazardous materials and dangerous substances
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Chemical Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <TestTube className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Chemical Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal and disposal of industrial chemicals, solvents, and laboratory materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Industrial chemicals</li>
                  <li>• Laboratory solvents</li>
                  <li>• Cleaning chemicals</li>
                  <li>• Paint thinners</li>
                </ul>
              </div>

              {/* Biohazard Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Biohazard className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Biohazard Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup of biological hazards and contaminated materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Medical waste</li>
                  <li>• Contaminated materials</li>
                  <li>• Safety protocols</li>
                  <li>• Proper disposal</li>
                </ul>
              </div>

              {/* Electronic Waste */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Electronic Waste
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe disposal of electronics containing hazardous components and materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Computer components</li>
                  <li>• Battery disposal</li>
                  <li>• Data security</li>
                  <li>• Recycling focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Compliance */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Safety & Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our hazardous waste removal follows strict safety protocols and regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Certified</h3>
                <p className="text-gray-600">Fully licensed hazardous waste handlers with proper certifications and training.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">EPA Compliant</h3>
                <p className="text-gray-600">All disposal methods meet EPA standards and regulatory requirements.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Equipment</h3>
                <p className="text-gray-600">Proper containment and transportation equipment for safe handling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Safe Hazardous Waste Disposal?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't risk improper disposal. Get professional hazardous waste removal with full safety protocols and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Use Estimation Tool</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
