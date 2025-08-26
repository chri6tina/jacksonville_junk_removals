import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, AlertTriangle, Zap, DollarSign, Star, AlertCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function EmergencyCleanupPage() {
  return (
    <>
      <SEOHead
        title="Emergency Cleanup Jacksonville | 24/7 Emergency Response | Disaster Cleanup (904) 456-3851"
        description="Jacksonville emergency cleanup service. 24/7 emergency response, disaster cleanup, urgent cleanup, emergency junk removal. Professional, licensed, insured emergency service. Call (904) 456-3851 for immediate emergency response."
        keywords="emergency cleanup Jacksonville, 24/7 emergency cleanup Jacksonville, disaster cleanup Jacksonville, urgent cleanup Jacksonville, emergency junk removal Jacksonville, emergency response Jacksonville, Jacksonville emergency service, immediate cleanup Jacksonville"
        canonical="/emergency-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <AlertCircle className="w-16 h-16 text-orange-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Emergency Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-orange-300 font-bold">24/7 EMERGENCY RESPONSE</span><br />
                When disaster strikes, we're here to help immediately. 
                Professional emergency cleanup service throughout Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1-904-456-3851"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>EMERGENCY: (904) 456-3851</span>
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Emergency Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="bg-orange-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🚨 24/7 EMERGENCY CLEANUP SERVICE AVAILABLE 🚨
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for immediate emergency cleanup response
            </p>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Emergency Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We handle all types of emergency cleanup situations with professional equipment and fast response
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Storm Damage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storm Damage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Hurricane damage, flood cleanup, wind damage, and storm debris removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hurricane debris removal</li>
                  <li>• Flood damage cleanup</li>
                  <li>• Wind damage cleanup</li>
                  <li>• Emergency storm response</li>
                </ul>
              </div>

              {/* Fire Damage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fire Damage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Post-fire cleanup, smoke damage restoration, and fire debris removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fire debris removal</li>
                  <li>• Smoke damage cleanup</li>
                  <li>• Structural cleanup</li>
                  <li>• Emergency fire response</li>
                </ul>
              </div>

              {/* Water Damage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Water Damage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Burst pipes, flooding, water damage, and emergency water cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Burst pipe cleanup</li>
                  <li>• Flood damage restoration</li>
                  <li>• Water damage cleanup</li>
                  <li>• Emergency water response</li>
                </ul>
              </div>

              {/* Structural Damage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Structural Damage Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Building collapse, structural damage, and emergency structural cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Building collapse cleanup</li>
                  <li>• Structural debris removal</li>
                  <li>• Emergency structural response</li>
                  <li>• Safety cleanup</li>
                </ul>
              </div>

              {/* Biohazard Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Biohazard Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Emergency biohazard cleanup, trauma cleanup, and hazardous material removal.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Trauma scene cleanup</li>
                  <li>• Biohazard removal</li>
                  <li>• Hazardous material cleanup</li>
                  <li>• Emergency bio response</li>
                </ul>
              </div>

              {/* Vehicle Accidents */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vehicle Accident Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Car accident cleanup, road debris removal, and emergency traffic cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Accident scene cleanup</li>
                  <li>• Road debris removal</li>
                  <li>• Traffic emergency cleanup</li>
                  <li>• Fast road clearance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Emergency Service */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Emergency Cleanup Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When every minute counts, you need a team that responds immediately
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 24/7 Availability */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  24/7 Emergency Response
                </h3>
                <p className="text-gray-600 mb-4">
                  We're available around the clock for emergency situations. No waiting for business hours.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 24/7 availability</li>
                  <li>• No waiting for business hours</li>
                  <li>• Immediate response</li>
                  <li>• Emergency hotline</li>
                </ul>
              </div>

              {/* Fast Response */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Lightning Fast Response
                </h3>
                <p className="text-gray-600 mb-4">
                  We respond within 1-2 hours for emergency situations. Every minute counts.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 1-2 hour response time</li>
                  <li>• Emergency priority</li>
                  <li>• Fast mobilization</li>
                  <li>• Immediate action</li>
                </ul>
              </div>

              {/* Professional Equipment */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional Equipment
                </h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty equipment and tools to handle any emergency cleanup situation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heavy-duty trucks</li>
                  <li>• Professional tools</li>
                  <li>• Safety equipment</li>
                  <li>• Emergency gear</li>
                </ul>
              </div>

              {/* Licensed & Insured */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600 mb-4">
                  Fully licensed and insured for emergency cleanup operations. Your protection is our priority.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Full licensing</li>
                  <li>• Comprehensive insurance</li>
                  <li>• Liability protection</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Local Knowledge */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Jacksonville Knowledge
                </h3>
                <p className="text-gray-600 mb-4">
                  We know Jacksonville neighborhoods, traffic patterns, and local emergency protocols.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Local area knowledge</li>
                  <li>• Traffic pattern awareness</li>
                  <li>• Emergency protocols</li>
                  <li>• Community connections</li>
                </ul>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Experience
                </h3>
                <p className="text-gray-600 mb-4">
                  Years of experience handling emergency cleanup situations throughout Jacksonville.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Emergency experience</li>
                  <li>• Crisis management</li>
                  <li>• Professional training</li>
                  <li>• Proven track record</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Emergency Response Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From emergency call to cleanup completion - here's how we handle urgent situations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Call
                </h3>
                <p className="text-gray-600">
                  Call our 24/7 emergency hotline at (904) 456-3851. We answer immediately.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Immediate Assessment
                </h3>
                <p className="text-gray-600">
                  We assess the emergency situation and mobilize our team within minutes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast Response
                </h3>
                <p className="text-gray-600">
                  Our emergency crew arrives within 1-2 hours with full equipment and supplies.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  We work quickly and safely to restore your property and remove all emergency debris.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Situations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Emergency Situations We Handle
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From natural disasters to accidents, we're equipped for any emergency cleanup need
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Natural Disasters */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🌪️ Natural Disasters
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Hurricane damage cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Flood damage restoration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Tornado damage cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Storm debris removal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Wind damage cleanup</span>
                  </div>
                </div>
              </div>

              {/* Accidents & Incidents */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🚨 Accidents & Incidents
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Fire damage cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Vehicle accident cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Building collapse cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Chemical spill cleanup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Biohazard cleanup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Jacksonville Trusts Our Emergency Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another cleanup company - we're your emergency response team
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Emergency Response
                      </h3>
                      <p className="text-gray-600">
                        We're based right here in Jacksonville and understand local emergency protocols and needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        24/7 Availability
                      </h3>
                      <p className="text-gray-600">
                        Emergencies don't wait for business hours. We're available 24/7 for immediate response.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Response Time
                      </h3>
                      <p className="text-gray-600">
                        We respond within 1-2 hours for emergency situations. Every minute counts in emergencies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and professional tools to handle any emergency cleanup situation safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Emergency Service Areas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800 text-center font-semibold">
                    🚨 24/7 Emergency Service Available in ALL Areas 🚨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-orange-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Emergency Cleanup NOW?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait - call our 24/7 emergency hotline for immediate response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>EMERGENCY: (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Emergency Quote</span>
              </Link>
            </div>
            <div className="mt-6 p-4 bg-orange-800 rounded-lg max-w-2xl mx-auto">
              <p className="text-orange-100 font-semibold">
                ⚡ 24/7 Emergency Response: We're here when you need us most! ⚡
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
                We also provide these related emergency and fast response services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/same-day-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-200">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  Same-Day Service
                </h3>
                <p className="text-sm text-gray-600">
                  Guaranteed same-day junk removal
                </p>
              </Link>

              <Link
                href="/storm-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Storm Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  Hurricane and storm damage cleanup
                </p>
              </Link>

              <Link
                href="/flood-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Flood Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  Water damage and flood restoration
                </p>
              </Link>

              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-orange-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Construction Debris
                </h3>
                <p className="text-sm text-gray-600">
                  Construction and demolition cleanup
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
