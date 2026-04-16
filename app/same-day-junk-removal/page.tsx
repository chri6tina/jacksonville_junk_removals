import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Zap, DollarSign, Star, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Same Day Junk Removal Jacksonville | 24 Hour Service | Fast Cleanup (904) 456-3851',
  description: 'Jacksonville same day junk removal service. 24 hour emergency cleanup, fast response, guaranteed same-day service. Professional, licensed, insured. Call (904) 456-3851 for immediate service.',
  keywords: 'same day junk removal Jacksonville, 24 hour junk removal Jacksonville, emergency junk removal Jacksonville, fast junk removal Jacksonville, same day cleanup Jacksonville, urgent junk removal Jacksonville, Jacksonville same day service, immediate junk removal Jacksonville',
  alternates: {
    canonical: '/same-day-junk-removal',
  },
}

export default function SameDayJunkRemovalPage() {
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
  "serviceType": "Same Day Junk Removal Jacksonville",
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
  "description": "Jacksonville same day junk removal service. 24 hour emergency cleanup, fast response, guaranteed same-day service. Professional, licensed, insured. Call (904) 456-3851 for immediate service."
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
                  Same Day Junk Removal Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-red-300 font-bold">24 HOUR EMERGENCY SERVICE</span><br /> Fast, reliable same-day junk removal when you need it most. Professional cleanup service throughout Jacksonville.
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
                🚨 24/7 EMERGENCY SAME-DAY SERVICE AVAILABLE 🚨
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for immediate same-day junk removal service
            </p>
          </div>
        </section>

        {/* Why Same-Day Service */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Same-Day Junk Removal?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When you need junk removed fast, we're your Jacksonville neighbors ready to help immediately
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Speed */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lightning Fast Response
                </h3>
                <p className="text-gray-600 mb-4">
                  Same-day service guaranteed. We respond within hours, not days.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Response within 2-4 hours</li>
                  <li>• Same-day completion</li>
                  <li>• No waiting for appointments</li>
                  <li>• Emergency availability</li>
                </ul>
              </div>

              {/* Local Advantage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Jacksonville Service
                </h3>
                <p className="text-gray-600 mb-4">
                  We're your neighbors, not a faceless corporation. Local knowledge means faster service.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Jacksonville-based team</li>
                  <li>• Local traffic knowledge</li>
                  <li>• Community connections</li>
                  <li>• Faster arrival times</li>
                </ul>
              </div>

              {/* Professional */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional & Licensed
                </h3>
                <p className="text-gray-600 mb-4">
                  Same-day service doesn't mean cutting corners. We maintain professional standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fully licensed & insured</li>
                  <li>• Professional equipment</li>
                  <li>• Trained crew</li>
                  <li>• Quality guaranteed</li>
                </ul>
              </div>

              {/* Cost Effective */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 mb-4">
                  Same-day service at fair prices. No emergency upcharges for local customers.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fair same-day pricing</li>
                  <li>• No hidden fees</li>
                  <li>• Free estimates</li>
                  <li>• Local customer discounts</li>
                </ul>
              </div>

              {/* Flexible */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600 mb-4">
                  We work around your schedule, not the other way around.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Early morning service</li>
                  <li>• Evening appointments</li>
                  <li>• Weekend availability</li>
                  <li>• Holiday service</li>
                </ul>
              </div>

              {/* Guaranteed */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-600 mb-4">
                  We guarantee same-day completion or your money back.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day guarantee</li>
                  <li>• Money-back promise</li>
                  <li>• Customer satisfaction</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Same-Day Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How Same-Day Service Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple, fast, and reliable - here's how we get your junk removed the same day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Call or Text
                </h3>
                <p className="text-gray-600">
                  Call (904) 456-3851 or text us. We'll get back to you within minutes, not hours.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quick Assessment
                </h3>
                <p className="text-gray-600">
                  We'll assess your needs over the phone and give you a same-day estimate.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Same-Day Arrival
                </h3>
                <p className="text-gray-600">
                  Our crew arrives within 2-4 hours, ready to work immediately.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Job Complete
                </h3>
                <p className="text-gray-600">
                  We finish the job the same day and leave your space clean and ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Same-Day Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Same-Day Services We Provide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From furniture to construction debris, we handle it all with same-day service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Furniture Removal */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🪑 Furniture Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Couches, beds, tables, chairs - removed same day
                </p>
              </div>

              {/* Appliance Removal */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🏠 Appliance Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Refrigerators, washers, dryers, dishwashers
                </p>
              </div>

              {/* Mattress Removal */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🛏️ Mattress Removal
                </h3>
                <p className="text-sm text-gray-600">
                  All mattress sizes, box springs, bed frames
                </p>
              </div>

              {/* Construction Debris */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🏗️ Construction Debris
                </h3>
                <p className="text-sm text-gray-600">
                  Renovation waste, drywall, lumber, concrete
                </p>
              </div>

              {/* Garage Cleanout */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🚗 Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete garage organization and cleanup
                </p>
              </div>

              {/* Estate Cleanout */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🏛️ Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete home cleanout and organization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Jacksonville Chooses Our Same-Day Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another junk removal company - we're your Jacksonville neighbors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Jacksonville Business
                      </h3>
                      <p className="text-gray-600">
                        We're based right here in Jacksonville, not a national chain. We understand local needs and respond faster.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Same-Day Guarantee
                      </h3>
                      <p className="text-gray-600">
                        We guarantee same-day completion or your money back. No excuses, no delays.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty trucks and equipment to handle any size job efficiently and safely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection. Professional standards every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Same-Day Service Areas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-primary text-center font-semibold">
                    🚨 Same-Day Service Available in ALL Areas 🚨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-red-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Same-Day Junk Removal NOW?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait for tomorrow - call us today for immediate same-day service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-gray-500 hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Same-Day Quote</span>
              </Link>
            </div>
            <div className="mt-6 p-4 bg-red-800 rounded-lg max-w-2xl mx-auto">
              <p className="text-red-100 font-semibold">
                ⚡ Same-Day Service Guarantee: We'll complete your job today or your money back! ⚡
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We also provide these related fast and emergency services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/emergency-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-red-200 transition-colors duration-200">
                  <AlertTriangle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Emergency Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  24/7 emergency response
                </p>
              </Link>

              <Link
                href="/storm-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Storm Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  Hurricane and storm debris removal
                </p>
              </Link>

              <Link
                href="/furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Furniture Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Same-day furniture pickup
                </p>
              </Link>

              <Link
                href="/appliance-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Appliance Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Fast appliance disposal
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
