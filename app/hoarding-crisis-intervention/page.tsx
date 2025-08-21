import Link from 'next/link'
import { AlertTriangle, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users, Heart } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingCrisisInterventionPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Crisis Intervention Jacksonville | 24/7 Emergency Response & Safety"
        description="24/7 hoarding crisis intervention services in Jacksonville for emergency situations, safety threats, and immediate intervention needs. Our crisis team provides rapid response and professional crisis management."
        keywords="hoarding crisis intervention Jacksonville, emergency hoarding response, 24/7 crisis support, safety intervention, emergency cleanup, crisis management Florida"
        canonical="/hoarding-crisis-intervention"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Crisis Intervention Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            24/7 hoarding crisis intervention services for emergency situations, safety threats, and immediate intervention needs. Our crisis team provides rapid response and professional crisis management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Emergency Response
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Crisis Hotline
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
              24/7 Crisis Response • Emergency Safety • Immediate Intervention • Professional Crisis Management • Rapid Response
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Crisis Intervention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Crisis Intervention: Emergency Response & Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding crisis intervention addresses immediate safety threats, emergency situations, and urgent intervention needs that require immediate professional response and crisis management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emergency Situations
              </h3>
              <p className="text-gray-600 mb-4">
                Immediate response to life-threatening situations, fire hazards, structural damage, and health emergencies.
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
                  Health emergencies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety threats
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                24/7 Availability
              </h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock crisis response team available for immediate intervention and emergency situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Immediate response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency hotline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Rapid deployment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Crisis coordination
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Crisis Management
              </h3>
              <p className="text-gray-600 mb-4">
                Trained crisis intervention specialists with expertise in emergency response and safety management.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Crisis specialists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency procedures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Risk assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crisis Intervention Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive crisis intervention services designed to address immediate safety threats and emergency situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Emergency Assessment</h3>
              <p className="text-gray-600 text-center mb-4">
                Rapid evaluation of crisis situations to determine immediate safety risks and intervention needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Risk assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency protocols
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center">24/7 Crisis Hotline</h3>
              <p className="text-gray-600 text-center mb-4">
                Immediate access to crisis intervention specialists for emergency situations and urgent support.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Crisis counseling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Resource coordination
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Safety Intervention</h3>
              <p className="text-gray-600 text-center mb-4">
                Immediate intervention to address safety threats and create secure living environments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Hazard removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency cleanup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety restoration
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Crisis Coordination</h3>
              <p className="text-gray-600 text-center mb-4">
                Coordination with emergency services, mental health professionals, and social services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Mental health support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Social services
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Crisis Counseling</h3>
              <p className="text-gray-600 text-center mb-4">
                Immediate emotional support and crisis counseling for individuals and families in crisis.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emotional support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Crisis stabilization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety planning
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Emergency Cleanup</h3>
              <p className="text-gray-600 text-center mb-4">
                Immediate cleanup services to address safety hazards and restore basic living conditions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Hazard removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Emergency decluttering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Safety restoration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Response Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Crisis Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, rapid response system designed to address crisis situations quickly and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crisis Call</h3>
              <p className="text-gray-600">
                Immediate response to crisis calls through our 24/7 hotline with rapid assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Assessment</h3>
              <p className="text-gray-600">
                Quick evaluation of safety risks and immediate intervention needs on-site.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Intervention</h3>
              <p className="text-gray-600">
                Swift implementation of safety measures and emergency response protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Crisis Resolution</h3>
              <p className="text-gray-600">
                Stabilization of the crisis situation and coordination of ongoing support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Crisis Intervention */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              When to Call Crisis Intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognize the warning signs that indicate a hoarding situation requires immediate crisis intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Safety Threats</h3>
              <p className="text-gray-600">
                Fire hazards, structural damage, blocked exits, or imminent collapse risks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Emergencies</h3>
              <p className="text-gray-600">
                Medical emergencies, inability to access medical care, or severe health deterioration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Crisis</h3>
              <p className="text-gray-600">
                Family safety at risk, child endangerment, or domestic violence situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Issues</h3>
              <p className="text-gray-600">
                Eviction notices, code violations, or legal action requiring immediate response.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health Crisis</h3>
              <p className="text-gray-600">
                Suicidal thoughts, severe depression, or acute mental health deterioration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Urgent Intervention</h3>
              <p className="text-gray-600">
                Situations requiring immediate professional intervention to prevent further harm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Crisis Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Crisis Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our crisis intervention team provides immediate, professional response with specialized expertise in hoarding crisis situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock crisis response team available for immediate intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Crisis Specialists</h3>
              <p className="text-gray-600">
                Trained professionals with specialized expertise in hoarding crisis intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                Immediate focus on safety and risk reduction in crisis situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Coordination</h3>
              <p className="text-gray-600">
                Coordination with emergency services, mental health professionals, and social services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Understanding and supportive approach during crisis situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Quick deployment and immediate intervention for crisis situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Crisis Intervention?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait if you're experiencing a hoarding crisis. Our 24/7 crisis intervention team is ready to provide immediate help and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Emergency Response
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-red-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Crisis Hotline
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Related Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive hoarding services beyond just crisis intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup services for urgent situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional assessment and intervention planning for hoarding situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-assessment" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Hoarding Assessment
                </h3>
                <p className="text-gray-600">
                  Professional evaluation and intervention planning for hoarding situations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
