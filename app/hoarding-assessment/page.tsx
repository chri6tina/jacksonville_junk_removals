import Link from 'next/link'
import { Clipboard, Users, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Wrench, Search, BarChart3, ClipboardCheck, UserPlus, Settings, PieChart, Activity } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingAssessmentPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Assessment Jacksonville | Professional Evaluation & Intervention Planning"
        description="Professional hoarding assessment in Jacksonville with comprehensive evaluation, risk analysis, and intervention planning. Our expert team provides thorough analysis and strategic planning for hoarding situations. Schedule assessment today!"
        keywords="hoarding assessment Jacksonville, hoarding evaluation, hoarding risk analysis, hoarding intervention planning, professional hoarding assessment Florida"
        canonical="/hoarding-assessment"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Clipboard className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Professional Hoarding Assessment Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding assessment and evaluation services with expert analysis, risk assessment, and strategic intervention planning. Our professional team provides thorough evaluation to determine the best course of action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-teal-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Clipboard className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Professional Evaluation • Risk Assessment • Intervention Planning • Safety Analysis • Strategic Recommendations • Comprehensive Reports
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Hoarding Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Professional Hoarding Assessment Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional assessment is the foundation of effective hoarding intervention. Our comprehensive evaluation identifies risks, determines intervention strategies, and creates a roadmap for successful resolution of hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Comprehensive Evaluation
              </h3>
              <p className="text-gray-600 mb-4">
                Thorough assessment of the hoarding situation, including environmental factors, safety concerns, and individual circumstances.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Environmental analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Safety assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Individual evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Risk identification
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Risk Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed analysis of safety risks, health hazards, and potential dangers to determine intervention urgency and approach.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Safety risk evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Health hazard assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Emergency situation analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Risk prioritization
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strategic Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Development of comprehensive intervention strategies tailored to the specific situation and individual needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Intervention strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Resource planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Timeline development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Success metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Assessment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional assessment services provide thorough evaluation and analysis across all aspects of hoarding situations, from initial contact to detailed intervention planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Assessment</h3>
              <p className="text-gray-600 mb-4">
                Preliminary evaluation to understand the scope and urgency of the hoarding situation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Situation overview</li>
                <li>• Urgency determination</li>
                <li>• Initial risk assessment</li>
                <li>• Resource requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Evaluation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive safety assessment including fire hazards, structural concerns, and health risks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fire safety analysis</li>
                <li>• Structural assessment</li>
                <li>• Health hazard evaluation</li>
                <li>• Emergency access review</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Individual Assessment</h3>
              <p className="text-gray-600 mb-4">
                Evaluation of individual circumstances, support systems, and intervention readiness.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personal circumstances</li>
                <li>• Support network analysis</li>
                <li>• Intervention readiness</li>
                <li>• Mental health considerations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Analysis</h3>
              <p className="text-gray-600 mb-4">
                Detailed risk assessment and prioritization to determine intervention urgency and approach.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Risk categorization</li>
                <li>• Priority determination</li>
                <li>• Timeline assessment</li>
                <li>• Resource allocation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intervention Planning</h3>
              <p className="text-gray-600 mb-4">
                Strategic planning for effective intervention including methods, resources, and success metrics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Strategy development</li>
                <li>• Resource planning</li>
                <li>• Timeline creation</li>
                <li>• Success measurement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Reports</h3>
              <p className="text-gray-600 mb-4">
                Detailed written reports with findings, recommendations, and intervention strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Assessment findings</li>
                <li>• Risk analysis</li>
                <li>• Recommendations</li>
                <li>• Action plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, professional assessment process designed to provide comprehensive evaluation and strategic intervention planning for hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Contact</h3>
              <p className="text-gray-600 text-sm">
                Compassionate initial contact to understand the situation and schedule professional assessment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Evaluation</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive on-site evaluation including safety assessment, risk analysis, and environmental evaluation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analysis & Planning</h3>
              <p className="text-gray-600 text-sm">
                Detailed analysis of findings and development of comprehensive intervention strategies and recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Report & Consultation</h3>
              <p className="text-gray-600 text-sm">
                Delivery of comprehensive assessment report and consultation on intervention strategies and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Components */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Assessment Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional assessment provides comprehensive evaluation across all critical aspects of hoarding situations, ensuring thorough understanding and effective intervention planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety & Risk Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of safety concerns, health hazards, and potential risks to individuals and property.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Fire safety evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Structural assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Health hazard analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Emergency access review
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Environmental Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed analysis of the physical environment, clutter levels, and impact on living or working conditions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Clutter level assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Space utilization analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Environmental impact
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Accessibility evaluation
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Users2 className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Individual & Family Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Evaluation of individual circumstances, family dynamics, and support systems for effective intervention planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Personal circumstances
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Family dynamics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Support network analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Intervention readiness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Assessment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Professional Assessment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just assessors - we're hoarding intervention specialists with extensive experience, professional expertise, and proven assessment methodologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Expertise</h3>
              <p className="text-gray-600">
                Extensive experience in hoarding intervention with specialized training in assessment and evaluation techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Systematic Approach</h3>
              <p className="text-gray-600">
                Proven assessment methodology that ensures comprehensive evaluation and consistent results across all situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Service</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects individual circumstances and maintains dignity throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Actionable Results</h3>
              <p className="text-gray-600">
                Clear, actionable recommendations and intervention strategies that lead to successful outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Reports</h3>
              <p className="text-gray-600">
                Detailed written reports with clear findings, risk analysis, and strategic intervention recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and guidance throughout the intervention process and beyond to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Hoarding Assessment?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't face hoarding situations without professional guidance. Our expert assessment team is ready to provide comprehensive evaluation and strategic intervention planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Assessment
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-teal-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Clipboard className="w-5 h-5" />
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
              Our assessment leads to comprehensive hoarding intervention and cleanup services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Home className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup based on assessment findings and intervention planning.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Strategic intervention services based on professional assessment and planning.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Family support services informed by comprehensive assessment and family dynamics analysis.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations identified during assessment.
                </p>
              </div>
            </Link>

            <Link href="/commercial-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Building className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Commercial Cleanup
                </h3>
                <p className="text-gray-600">
                  Business hoarding cleanup services based on workplace assessment and safety evaluation.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
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
