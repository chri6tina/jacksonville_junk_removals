import Link from 'next/link'
import { GraduationCap, Heart, Users, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, TrendingUp, Eye, Brain } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function SeniorHoardingCleanupPage() {
  return (
    <>
      <SEOHead
        title="Senior Hoarding Cleanup Jacksonville | Elderly Hoarding Services with Healthcare Coordination"
        description="Specialized senior hoarding cleanup in Jacksonville with healthcare coordination, family support, and age-appropriate intervention. Our compassionate team understands the unique needs of elderly hoarders. Get specialized help today!"
        keywords="senior hoarding cleanup Jacksonville, elderly hoarding services, senior hoarding intervention, healthcare coordination, family hoarding support, elderly cleanup Florida"
        canonical="/senior-hoarding-cleanup"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Users className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Senior Hoarding Cleanup Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Specialized hoarding cleanup services for seniors with healthcare coordination, family support, and age-appropriate intervention. We understand the unique challenges faced by elderly individuals and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Senior Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Get Family Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-purple-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Senior-Specific Services • Healthcare Coordination • Family Support • Age-Appropriate Intervention • Compassionate Care
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Senior Hoarding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Senior Hoarding: Unique Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Senior hoarding presents unique challenges that require specialized understanding, healthcare coordination, and family involvement. Our team is trained to address these specific needs with compassion and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healthcare Coordination
              </h3>
              <p className="text-gray-600 mb-4">
                Coordination with healthcare providers, medical professionals, and senior care specialists to ensure comprehensive support.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Medical consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Healthcare provider coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Medication management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Health monitoring
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Involvement
              </h3>
              <p className="text-gray-600 mb-4">
                Active family participation in the intervention process with education, support, and ongoing assistance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Family consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Education programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Support coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Ongoing assistance
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Age-Appropriate Care
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized care that considers the physical, emotional, and cognitive needs of elderly individuals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Physical considerations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Emotional support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Cognitive awareness
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Respectful approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Senior-Specific Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Senior-Specific Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized services address the unique needs of elderly hoarders with healthcare coordination, family support, and age-appropriate intervention strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Senior Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation considering age-specific factors, health conditions, and family dynamics.
              </p>
              <Link href="/hoarding-intervention" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Coordination</h3>
              <p className="text-gray-600 mb-4">
                Coordination with doctors, nurses, and healthcare providers to ensure medical needs are addressed.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Medical collaboration
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive support for families including consultation, education, and ongoing assistance.
              </p>
              <Link href="/family-hoarding-support" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Environment Creation</h3>
              <p className="text-gray-600 mb-4">
                Creating safe, accessible living environments that accommodate senior mobility and safety needs.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Safety first
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Flexible scheduling that accommodates senior routines, medical appointments, and family availability.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Accommodating schedules
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Continued support and follow-up services to maintain progress and prevent relapse in senior situations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Long-term care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Senior Care Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Senior Hoarding Care Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a specialized process designed specifically for elderly hoarders, ensuring healthcare coordination, family involvement, and age-appropriate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Consultation</h3>
              <p className="text-gray-600 text-sm">
                Initial consultation with family members to understand the situation and discuss healthcare coordination needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Assessment</h3>
              <p className="text-gray-600 text-sm">
                Coordination with healthcare providers to assess medical needs, medications, and health considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Senior-Specific Planning</h3>
              <p className="text-gray-600 text-sm">
                Development of intervention plan that considers age-specific factors, mobility, and safety needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Implementation</h3>
              <p className="text-gray-600 text-sm">
                Careful, respectful implementation with attention to senior comfort, safety, and family preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Continued support, follow-up services, and family assistance to maintain progress and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations for Seniors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Special Considerations for Senior Hoarding
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Senior hoarding situations require special attention to health, safety, and family dynamics that differ from other age groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Health & Safety
              </h3>
              <p className="text-gray-600 mb-4">
                Special attention to health conditions, medication management, and safety hazards that may affect elderly individuals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Medication safety
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Fall prevention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Emergency access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Health monitoring
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Dynamics
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding complex family relationships, caregiver stress, and intergenerational dynamics in senior hoarding situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Caregiver support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Family education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Communication strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Conflict resolution
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cognitive Considerations
              </h3>
              <p className="text-gray-600 mb-4">
                Addressing cognitive changes, memory issues, and decision-making challenges that may affect elderly hoarders.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Memory support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Decision assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Cognitive assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Adaptive strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Senior Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Senior Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your senior hoarding specialists with healthcare coordination expertise, family support, and age-appropriate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Coordination</h3>
              <p className="text-gray-600">
                Strong relationships with healthcare providers and medical professionals for comprehensive senior care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Senior Specialists</h3>
              <p className="text-gray-600">
                Specialized training and experience in addressing the unique needs of elderly hoarders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600">
                Comprehensive support for families including consultation, education, and ongoing assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects the dignity and needs of elderly individuals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Accommodating schedules that work with senior routines, medical appointments, and family availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and follow-up services to maintain progress and prevent relapse in senior situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Senior Hoarding Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let hoarding affect your loved one's health and safety. Our specialized senior hoarding cleanup team is ready to help with healthcare coordination and family support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Senior Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-purple-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Family Consultation
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
              We offer comprehensive hoarding services beyond just senior hoarding cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup with specialized intervention and family support services.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive support services for families dealing with hoarding situations.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Education & Resources
                </h3>
                <p className="text-gray-600">
                  Educational programs and prevention strategies to help families and communities address hoarding.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  All Services
                </h3>
                <p className="text-gray-600">
                  View our complete range of hoarding intervention and cleanup services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
