import Link from 'next/link'
import { Stethoscope, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users, Heart } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingMedicalSupportPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Medical Support Jacksonville | Healthcare Coordination & Medical Assistance"
        description="Comprehensive hoarding medical support services in Jacksonville including healthcare coordination, medical assistance, health monitoring, and coordination with healthcare providers. Our medical specialists help ensure proper healthcare access."
        keywords="hoarding medical support Jacksonville, healthcare coordination, medical assistance, health monitoring, healthcare providers Florida"
        canonical="/hoarding-medical-support"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Stethoscope className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Medical Support Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding medical support services including healthcare coordination, medical assistance, health monitoring, and coordination with healthcare providers. Our medical specialists help ensure proper healthcare access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Medical Support
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Medical Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Stethoscope className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Healthcare Coordination • Medical Assistance • Health Monitoring • Provider Coordination • Access Support
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Medical Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Medical Support: Healthcare Coordination & Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding medical support addresses the healthcare needs and coordination challenges of individuals affected by hoarding situations. Our medical specialists ensure proper healthcare access and coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healthcare Coordination
              </h3>
              <p className="text-gray-600 mb-4">
                Coordination between healthcare providers, specialists, and support services to ensure comprehensive care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Provider coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Care planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Service integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Follow-up coordination
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Medical Assistance
              </h3>
              <p className="text-gray-600 mb-4">
                Direct medical support and assistance to address health concerns and ensure proper medical care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Health assessments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Medical monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Treatment support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Medication management
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Health Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Ongoing monitoring of health status and early intervention for emerging health concerns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Regular check-ins
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Health tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Early intervention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Emergency response
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Medical Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical support services designed to ensure proper healthcare access and coordination for individuals affected by hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Healthcare Coordination</h3>
              <p className="text-gray-600 text-center mb-4">
                Coordination between healthcare providers, specialists, and support services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Provider communication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Care plan coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Service integration
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Medical Assistance</h3>
              <p className="text-gray-600 text-center mb-4">
                Direct medical support and assistance for health concerns and medical care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Health assessments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Treatment support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Medication management
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Health Monitoring</h3>
              <p className="text-gray-600 text-center mb-4">
                Ongoing monitoring of health status and early intervention for health concerns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Regular check-ins
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Health tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Early intervention
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Provider Coordination</h3>
              <p className="text-gray-600 text-center mb-4">
                Coordination with healthcare providers, specialists, and support services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Specialist referrals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Care coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Communication support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Health Education</h3>
              <p className="text-gray-600 text-center mb-4">
                Education about health conditions, treatment options, and self-care strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Condition education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Treatment options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Self-care strategies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Home Health Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Support for home health needs and coordination with home health services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Home health coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Equipment support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Care coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Support Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Medical Support Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to providing comprehensive medical support and healthcare coordination for hoarding-related health issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of current health status and identification of healthcare needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Plan Development</h3>
              <p className="text-gray-600">
                Creation of personalized healthcare plan with specific goals and coordination strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Provider Coordination</h3>
              <p className="text-gray-600">
                Active coordination with healthcare providers and implementation of care plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous monitoring, support, and coordination to ensure optimal healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Coordination Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Healthcare Coordination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how comprehensive healthcare coordination can improve health outcomes and ensure proper medical care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Care Quality</h3>
              <p className="text-gray-600">
                Better coordination between providers leads to improved care quality and outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Health Outcomes</h3>
              <p className="text-gray-600">
                Coordinated care leads to better health outcomes and improved quality of life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Provider Communication</h3>
              <p className="text-gray-600">
                Improved communication between healthcare providers and support services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eliminated Gaps</h3>
              <p className="text-gray-600">
                Identification and elimination of gaps in healthcare services and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Communication</h3>
              <p className="text-gray-600">
                Better communication between patients, families, and healthcare providers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Care</h3>
              <p className="text-gray-600">
                Comprehensive care approach that addresses all aspects of health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Medical Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical specialists provide comprehensive support with specialized expertise in hoarding-related healthcare coordination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Specialists</h3>
              <p className="text-gray-600">
                Trained professionals with specialized expertise in healthcare coordination and medical support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of healthcare systems and coordination challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Advocacy</h3>
              <p className="text-gray-600">
                Strong advocacy for patient needs and healthcare access rights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Provider Relationships</h3>
              <p className="text-gray-600">
                Established relationships with healthcare providers and support services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Coordination</h3>
              <p className="text-gray-600">
                Quick response to healthcare needs and timely coordination of services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                Customized healthcare coordination plans tailored to individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Medical Support?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let healthcare coordination challenges prevent you from getting the care you need. Our medical specialists are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Medical Support
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-green-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Medical Consultation
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
              We offer comprehensive hoarding services beyond just medical support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-therapy" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Therapy
                </h3>
                <p className="text-gray-600">
                  Professional therapy and counseling services for hoarding disorder.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-assessment" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Assessment
                </h3>
                <p className="text-gray-600">
                  Professional evaluation and intervention planning for hoarding situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-support-groups" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Support Groups
                </h3>
                <p className="text-gray-600">
                  Peer support and group therapy for individuals affected by hoarding.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
