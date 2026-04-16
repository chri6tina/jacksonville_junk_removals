import Link from 'next/link'
import type { Metadata } from 'next'
import { Clipboard, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Case Management Jacksonville | Comprehensive Case Coordination & Support',
  description: 'Comprehensive hoarding case management services in Jacksonville including case coordination, service planning, resource management, and care oversight. Our case managers provide integrated support for individuals and families affected by hoarding.',
  keywords: 'hoarding case management Jacksonville, case coordination, service planning, resource management, care oversight Florida',
  alternates: {
    canonical: '/hoarding-case-management',
  },
}

export default function HoardingCaseManagementPage() {
  return (
    <>
      

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
                  Hoarding Case Management Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  Comprehensive hoarding case management services including case coordination, service planning, resource management, and care oversight. Our case managers provide integrated support for individuals and families affected by hoarding.
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
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Clipboard className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Case Coordination • Service Planning • Resource Management • Care Oversight • Integrated Support
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Case Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Case Management: Coordinated Care & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding case management provides comprehensive coordination of all services and support for individuals and families affected by hoarding situations. Our case managers ensure integrated, effective care across all providers and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Clipboard className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Case Coordination
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coordination of all services, providers, and support systems for individuals and families.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Service coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Provider communication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Care integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  System navigation
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Service Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive service planning to ensure all needs are identified and addressed through coordinated care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Needs assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Care planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Goal setting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Progress monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Resource Management
              </h3>
              <p className="text-gray-600 mb-4">
                Efficient management and coordination of all resources, services, and support systems available.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Resource allocation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Service optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Cost management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Quality assurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Management Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Case Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive case management services designed to coordinate and integrate all aspects of care and support for hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clipboard className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Comprehensive Assessment</h3>
              <p className="text-gray-600 text-center mb-4">
                Thorough assessment of all needs, resources, and support requirements for comprehensive care planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Needs assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Risk evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Resource identification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Care Plan Development</h3>
              <p className="text-gray-600 text-center mb-4">
                Development of comprehensive care plans that coordinate all services and support systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Personalized planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Goal setting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Timeline development
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Service Coordination</h3>
              <p className="text-gray-600 text-center mb-4">
                Active coordination of all services, providers, and support systems to ensure integrated care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Provider coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Service integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Communication facilitation
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Family Coordination</h3>
              <p className="text-gray-600 text-center mb-4">
                Coordination of support and services for all family members affected by hoarding situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Family meetings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Support coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Communication support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Progress Monitoring</h3>
              <p className="text-gray-600 text-center mb-4">
                Ongoing monitoring of progress and adjustment of care plans to ensure optimal outcomes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Regular reviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Plan adjustments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Outcome tracking
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Crisis Management</h3>
              <p className="text-gray-600 text-center mb-4">
                Emergency coordination and crisis management to address urgent situations and needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Crisis response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Emergency coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Safety planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Management Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Case Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to comprehensive case management and coordination of all services and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-600">
                Comprehensive assessment of all needs, resources, and support requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Plan Development</h3>
              <p className="text-gray-600">
                Development of comprehensive care plan with specific goals and coordination strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Coordination</h3>
              <p className="text-gray-600">
                Active coordination and integration of all services, providers, and support systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Management</h3>
              <p className="text-gray-600">
                Continuous case management and coordination to ensure optimal outcomes and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Case Management */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Case Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our case managers provide comprehensive coordination with specialized expertise in managing complex hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Case Managers</h3>
              <p className="text-gray-600">
                Certified and experienced case managers with specialized expertise in hoarding situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clipboard className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Coordination</h3>
              <p className="text-gray-600">
                Complete coordination of all services, providers, and support systems for integrated care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Ongoing quality assurance and monitoring to ensure high-quality care and outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family-Centered Approach</h3>
              <p className="text-gray-600">
                Family-centered case management that involves and supports all family members.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Available for crisis management and emergency coordination when needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Outcome-Focused</h3>
              <p className="text-gray-600">
                Focus on achieving optimal outcomes through effective case management and coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Case Management Support?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't navigate complex systems alone. Our case managers are here to coordinate and integrate all your services and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Case Management
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-secondary border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Case Coordination Consultation
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
              We offer comprehensive hoarding services beyond just case management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-social-services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Social Services
                </h3>
                <p className="text-gray-600">
                  Social worker coordination and comprehensive social support services.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-assessment" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Hoarding Assessment
                </h3>
                <p className="text-gray-600">
                  Professional evaluation and intervention planning for hoarding situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional assessment and intervention planning for hoarding situations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
