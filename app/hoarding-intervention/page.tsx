import Link from 'next/link'
import { UserCheck, Clipboard, Users, Heart, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, GraduationCap, BookOpen, Target, TrendingUp, Eye, Brain } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingInterventionPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Intervention Jacksonville | Professional Assessment & Intervention Planning"
        description="Professional hoarding intervention in Jacksonville with comprehensive assessment, family consultation, and intervention planning. Our specialized team provides compassionate intervention services with mental health awareness. Get professional help today!"
        keywords="hoarding intervention Jacksonville, hoarding assessment Florida, professional hoarding intervention, hoarding consultation, family hoarding support, hoarding intervention planning"
        canonical="/hoarding-intervention"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-teal-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <UserCheck className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Professional Hoarding Intervention Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding intervention with professional assessment, family consultation, and strategic intervention planning. Our specialized team understands the complex nature of hoarding and provides compassionate, effective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <UserCheck className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Professional Assessment • Family Consultation • Intervention Planning • Mental Health Awareness • Ongoing Support
            </span>
          </div>
        </div>
      </section>

      {/* What is Hoarding Intervention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding intervention is a professional, compassionate approach to addressing hoarding behaviors through assessment, planning, and strategic intervention strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of the hoarding situation, safety risks, and intervention requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Safety evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Risk assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Intervention planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Resource identification
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mental Health Awareness
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding hoarding as a complex mental health condition requiring specialized intervention approaches.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Behavioral understanding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Compassionate approach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Professional collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Support strategies
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Involvement
              </h3>
              <p className="text-gray-600 mb-4">
                Active family participation in the intervention process with education, support, and ongoing assistance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Family consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Education programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Support coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Ongoing assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Intervention Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Intervention Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven, compassionate process designed to address hoarding situations effectively while supporting the individual and family throughout the journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Contact</h3>
              <p className="text-gray-600 text-sm">
                Compassionate initial contact to understand the situation and provide immediate guidance and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of the hoarding situation, safety risks, and intervention requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intervention Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed planning with family, mental health professionals, and other stakeholders for successful intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation & Support</h3>
              <p className="text-gray-600 text-sm">
                Professional implementation of the intervention plan with ongoing support and follow-up services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Assessment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive assessment process evaluates all aspects of the hoarding situation to develop an effective intervention strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of safety hazards, structural integrity, and immediate risks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Fire hazard evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Structural damage assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Exit accessibility review
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Emergency response planning
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Health & Wellness Evaluation
              </h3>
              <p className="text-gray-600 mb-4">
                Assessment of health risks, environmental conditions, and wellness factors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Air quality assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Contamination evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Health risk identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Wellness factor analysis
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Intervention Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic planning for effective intervention with timeline and resource allocation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Strategy development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Timeline planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Resource allocation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Success metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Intervention Strategies & Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ evidence-based intervention strategies tailored to each individual's unique situation and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gradual Intervention</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step approach that respects the individual's pace and comfort level during the intervention process.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Respectful approach
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family-Centered Approach</h3>
              <p className="text-gray-600 mb-4">
                Active involvement of family members in the intervention process with education and support.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Family involvement
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive education about hoarding behaviors, prevention strategies, and maintenance techniques.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Knowledge building
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Coordination with mental health professionals, social workers, and healthcare providers.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Professional network
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Support</h3>
              <p className="text-gray-600 mb-4">
                Ongoing support and follow-up services to maintain progress and prevent relapse.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Sustained success
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored intervention strategies based on individual needs, preferences, and circumstances.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Personalized care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Intervention Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Hoarding Intervention Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your hoarding intervention experts with specialized training, mental health awareness, and comprehensive support services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Training</h3>
              <p className="text-gray-600">
                Our team has specialized training in hoarding intervention, mental health awareness, and intervention strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Approach</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects the individual and family throughout the intervention process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600">
                Comprehensive support for families including consultation, education, and ongoing assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Network</h3>
              <p className="text-gray-600">
                Strong relationships with mental health professionals, social workers, and healthcare providers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based Methods</h3>
              <p className="text-gray-600">
                Proven intervention strategies and methods based on research and professional best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and follow-up services to ensure long-term success and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Hoarding Intervention?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let hoarding control your life or your family's well-being. Our professional intervention team is ready to help with assessment, planning, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-green-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Consultation
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
              We offer comprehensive hoarding services beyond just intervention and assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup with specialized intervention and family support services.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive support services for families dealing with hoarding situations.
                </p>
              </div>
            </Link>

            <Link href="/senior-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Senior Support
                </h3>
                <p className="text-gray-600">
                  Specialized hoarding cleanup for seniors with healthcare coordination and family involvement.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Education & Resources
                </h3>
                <p className="text-gray-600">
                  Educational programs and prevention strategies to help families and communities address hoarding.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
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
