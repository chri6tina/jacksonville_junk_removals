import Link from 'next/link'
import type { Metadata } from 'next'
import { AlertTriangle, Clock, Phone, MapPin, Shield, CheckCircle, Star, Users, Heart, Truck, Wrench, Recycle, Zap, PhoneCall, Calendar, FileText, Award, Home, Building, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Hoarding Cleanup Jacksonville | 24/7 Crisis Response & Intervention',
  description: '24/7 emergency hoarding cleanup in Jacksonville with immediate crisis response, professional intervention, and rapid cleanup services. Available round-the-clock for urgent hoarding situations. Call now for immediate help!',
  keywords: 'emergency hoarding cleanup Jacksonville, 24/7 hoarding cleanup, crisis hoarding response, emergency hoarding intervention, urgent hoarding cleanup Florida',
  alternates: {
    canonical: '/emergency-hoarding-cleanup',
  },
}

export default function EmergencyHoardingCleanupPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
                            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            24/7 Emergency Hoarding Cleanup
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Immediate crisis response for urgent hoarding situations. Our emergency team is available round-the-clock with rapid intervention, professional assessment, and immediate cleanup services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-904-456-3851" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Emergency Hotline
            </a>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Emergency Service
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-lg font-semibold">
              EMERGENCY RESPONSE AVAILABLE 24/7 • IMMEDIATE CRISIS INTERVENTION • RAPID CLEANUP SERVICES • PROFESSIONAL ASSESSMENT
            </span>
          </div>
        </div>
      </section>

      {/* Emergency Hotline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <PhoneCall className="w-16 h-16 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Hoarding Cleanup Hotline
            </h2>
            <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
              Available 24/7 for immediate crisis response and emergency hoarding cleanup services
            </p>
            <div className="bg-white rounded-lg p-6 border border-red-200 max-w-md mx-auto">
              <a 
                href="tel:+1-904-456-3851" 
                className="text-4xl font-bold text-red-600 hover:text-red-700 transition duration-300"
              >
                (904) 456-3851
              </a>
              <p className="text-gray-600 mt-2">Call anytime - Day or Night</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-904-456-3851" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now for Immediate Help
              </a>
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Emergency Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need Emergency Hoarding Cleanup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When You Need Emergency Hoarding Cleanup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Emergency hoarding cleanup is needed when immediate intervention is required to address safety hazards, health risks, or crisis situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety Hazards
              </h3>
              <p className="text-gray-600 mb-4">
                Immediate intervention when hoarding creates dangerous conditions that threaten safety.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Fire hazards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Structural damage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Blocked exits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Falling debris risk
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Health Emergencies
              </h3>
              <p className="text-gray-600 mb-4">
                Urgent cleanup when hoarding conditions create immediate health risks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Biohazard exposure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Mold infestation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Pest infestation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Air quality issues
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Crisis Situations
              </h3>
              <p className="text-gray-600 mb-4">
                Immediate response for crisis situations requiring urgent intervention.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Family emergencies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Medical emergencies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Legal deadlines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Property violations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you call our emergency hotline, we follow a proven process to provide immediate assistance and rapid cleanup services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Call</h3>
              <p className="text-gray-600 text-sm">
                Immediate response to your emergency call with crisis assessment and safety evaluation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Response</h3>
              <p className="text-gray-600 text-sm">
                Emergency team dispatched within 1-2 hours for immediate crisis intervention and safety assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Action</h3>
              <p className="text-gray-600 text-sm">
                Immediate cleanup of safety hazards and emergency conditions to restore safety and stability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow-up Plan</h3>
              <p className="text-gray-600 text-sm">
                Development of comprehensive cleanup plan and ongoing support for long-term resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Emergency Hoarding Cleanup Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our emergency team provides immediate response and rapid cleanup services for urgent hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Immediate Crisis Intervention</h3>
              <p className="text-gray-600 mb-4">
                Professional crisis intervention with immediate assessment and safety evaluation.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Available 24/7
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Cleanup Response</h3>
              <p className="text-gray-600 mb-4">
                Immediate cleanup of safety hazards and emergency conditions within 1-2 hours.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Rapid response
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Hazard Removal</h3>
              <p className="text-gray-600 mb-4">
                Immediate removal of fire hazards, structural dangers, and safety risks.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Safety first
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                Basic emergency repairs to restore safety and prevent further damage.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Damage control
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Biohazard Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Emergency biohazard cleanup and contamination removal for health safety.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Health protection
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600 mb-4">
                Immediate family support and crisis counseling during emergency situations.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Family care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Emergency Hoarding Cleanup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your emergency response experts with specialized training and rapid response capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock emergency response with no waiting for business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Emergency team dispatched within 1-2 hours for immediate crisis intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Training</h3>
              <p className="text-gray-600">
                Emergency response team trained in crisis intervention and safety protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Understanding and supportive approach during crisis situations and emergencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Immediate focus on safety hazards and risk mitigation during emergency response.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Network</h3>
              <p className="text-gray-600">
                Strong relationships with emergency services, healthcare providers, and social workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Hoarding Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait for business hours. Our emergency team is available 24/7 for immediate crisis response and rapid cleanup services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-904-456-3851" 
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Emergency Hotline
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-red-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Emergency Service
            </Link>
          </div>
          <div className="mt-8 bg-white bg-opacity-20 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-lg font-semibold">Emergency Hotline Available 24/7</p>
            <p className="text-sm opacity-90">No waiting, no delays - immediate crisis response</p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Related Emergency Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive emergency response services beyond just hoarding cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for all types of urgent cleanup needs and crisis situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Home className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup with specialized intervention and family support services.
                </p>
              </div>
            </Link>

            <Link href="/hazardous-waste-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Hazardous Waste
                </h3>
                <p className="text-gray-600">
                  Emergency hazardous waste removal with specialized handling and compliance expertise.
                </p>
              </div>
            </Link>

            <Link href="/biohazard-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Biohazard Cleanup
                </h3>
                <p className="text-gray-600">
                  Emergency biohazard cleanup for contamination and health hazard situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  All Services
                </h3>
                <p className="text-gray-600">
                  View our complete range of emergency response and cleanup services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
