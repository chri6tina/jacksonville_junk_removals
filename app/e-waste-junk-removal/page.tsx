import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Home, DollarSign, Star, Users, FileText, Monitor, Zap, Smartphone, Laptop } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Waste Junk Removal Jacksonville | Computer & Electronics Disposal (904) 456-3851',
  description: 'Professional e-waste junk removal services in Jacksonville, Florida. Safe disposal of computers, TVs, electronics with data security and recycling focus. Licensed, insured, eco-friendly. Call (904) 456-3851',
  keywords: 'e-waste junk removal Jacksonville, computer disposal Jacksonville, electronics disposal Jacksonville, TV disposal Jacksonville, data security Jacksonville, electronics recycling Florida',
  alternates: {
    canonical: '/e-waste-junk-removal',
  },
}

export default function EwasteJunkRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "E-Waste Junk Removal Jacksonville",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jacksonville"
    },
    {
      "@type": "City",
      "name": "Jacksonville Beach"
    },
    {
      "@type": "City",
      "name": "Orange Park"
    }
  ],
  "description": "Professional e-waste junk removal services in Jacksonville, Florida. Safe disposal of computers, TVs, electronics with data security and recycling focus. Licensed, insured, eco-friendly. Call (904) 456-3851"
})
        }}
      />
<div className="absolute inset-0 z-0">
          <Image
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
            fill
            priority
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
                  E-Waste Junk Removal Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-purple-300 font-bold">SECURE & ECO-FRIENDLY</span><br /> Professional e-waste disposal with data security and recycling focus.<br /> Safe disposal of all electronic devices and components.
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
              <Monitor className="w-6 h-6" />
              <span className="text-lg font-semibold">
                💻 PROFESSIONAL E-WASTE DISPOSAL SERVICES 💻
              </span>
              <Monitor className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for secure electronics disposal service
            </p>
          </div>
        </section>

        {/* E-Waste Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                E-Waste Disposal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive electronic waste disposal with data security and environmental responsibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Computer Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Computer Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure disposal of desktop computers, laptops, and computer components.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Desktop computers</li>
                  <li>• Laptops & notebooks</li>
                  <li>• Computer components</li>
                  <li>• Data destruction</li>
                </ul>
              </div>

              {/* TV & Monitor Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  TV & Monitor Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe disposal of televisions, monitors, and display devices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Flat-screen TVs</li>
                  <li>• Computer monitors</li>
                  <li>• CRT displays</li>
                  <li>• LED/LCD screens</li>
                </ul>
              </div>

              {/* Mobile Device Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mobile Device Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure disposal of smartphones, tablets, and mobile devices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Smartphones</li>
                  <li>• Tablets</li>
                  <li>• Mobile accessories</li>
                  <li>• Data wiping</li>
                </ul>
              </div>

              {/* Office Electronics */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Electronics
                </h3>
                <p className="text-gray-600 mb-4">
                  Disposal of office equipment and electronic devices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Printers & scanners</li>
                  <li>• Copiers</li>
                  <li>• Fax machines</li>
                  <li>• Office equipment</li>
                </ul>
              </div>

              {/* Gaming Consoles */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Gaming Consoles
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe disposal of gaming systems and entertainment electronics.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Video game consoles</li>
                  <li>• Gaming accessories</li>
                  <li>• Entertainment systems</li>
                  <li>• Media players</li>
                </ul>
              </div>

              {/* Battery Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Battery Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Proper disposal of batteries and power sources.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Rechargeable batteries</li>
                  <li>• Lithium-ion batteries</li>
                  <li>• Alkaline batteries</li>
                  <li>• Power sources</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security & Recycling */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Data Security & Environmental Responsibility
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our e-waste disposal prioritizes your data security and environmental protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
                <p className="text-gray-600">Complete data destruction and secure handling of sensitive information.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Disposal</h3>
                <p className="text-gray-600">EPA compliant disposal methods with proper documentation and tracking.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recycling Focus</h3>
                <p className="text-gray-600">Maximum recycling and recovery of valuable materials and components.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for Secure E-Waste Disposal?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Protect your data and the environment with professional e-waste disposal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Use Estimation Tool</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
