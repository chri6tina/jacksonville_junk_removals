import Link from 'next/link'
import { Briefcase, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users, GraduationCap } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingEmploymentSupportPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Employment Support Jacksonville | Job Assistance & Vocational Services"
        description="Comprehensive hoarding employment support services in Jacksonville including job assistance, vocational training, career counseling, and employment coordination. Our employment specialists help individuals affected by hoarding find and maintain employment."
        keywords="hoarding employment support Jacksonville, job assistance, vocational training, career counseling, employment coordination Florida"
        canonical="/hoarding-employment-support"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Employment Support Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding employment support services including job assistance, vocational training, career counseling, and employment coordination. Our employment specialists help individuals affected by hoarding find and maintain employment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Employment Help
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Career Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Briefcase className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Job Assistance • Vocational Training • Career Counseling • Employment Coordination • Skills Development
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Employment Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Employment Support: Career Stability & Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding employment support addresses the career and vocational challenges faced by individuals affected by hoarding situations. Our employment specialists help ensure career stability and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Job Assistance
              </h3>
              <p className="text-gray-600 mb-4">
                Direct assistance with job search, application processes, and maintaining employment for individuals affected by hoarding.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Job search support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Application assistance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Interview preparation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Job placement
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Vocational Training
              </h3>
              <p className="text-gray-600 mb-4">
                Skills development and vocational training programs to enhance employability and career prospects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Skills assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Training programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Certification support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Professional development
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Career Counseling
              </h3>
              <p className="text-gray-600 mb-4">
                Professional career counseling and guidance to help individuals navigate career challenges and opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Career planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Goal setting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Skills analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Career transition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Employment Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive employment support services designed to help individuals affected by hoarding achieve career stability and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Job Search Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Comprehensive assistance with job search strategies and employment opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Resume writing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Job matching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Application support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Skills Development</h3>
              <p className="text-gray-600 text-center mb-4">
                Training and development programs to enhance employability and job readiness.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Technical training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Soft skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Professional certification
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Career Counseling</h3>
              <p className="text-gray-600 text-center mb-4">
                Professional guidance and counseling for career planning and development.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Career assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Goal planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Strategy development
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Interview Preparation</h3>
              <p className="text-gray-600 text-center mb-4">
                Comprehensive interview preparation and practice to improve job prospects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Mock interviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Interview skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Confidence building
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Workplace Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Ongoing support and guidance for maintaining employment and workplace success.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Job retention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Workplace accommodation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Performance support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Employer Relations</h3>
              <p className="text-gray-600 text-center mb-4">
                Building relationships with employers to create opportunities and understanding.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Employer education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Job development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Partnership building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Employment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Employment Support Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to providing comprehensive employment support and helping individuals achieve career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Employment Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of skills, interests, and employment needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Planning</h3>
              <p className="text-gray-600">
                Development of personalized career plan with specific goals and strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills Development</h3>
              <p className="text-gray-600">
                Training and development programs to enhance employability and job readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Placement & Support</h3>
              <p className="text-gray-600">
                Job placement assistance and ongoing support for employment maintenance and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Employment Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Employment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our employment specialists provide comprehensive support with specialized expertise in helping individuals affected by hoarding achieve career success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employment Specialists</h3>
              <p className="text-gray-600">
                Trained professionals with specialized expertise in employment support and career development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                Full range of employment services from assessment to job placement and ongoing support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Advocacy</h3>
              <p className="text-gray-600">
                Strong advocacy for employment rights and workplace accommodation needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employer Partnerships</h3>
              <p className="text-gray-600">
                Established relationships with employers to create opportunities and understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Support</h3>
              <p className="text-gray-600">
                Ongoing support for employment maintenance and career advancement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                Customized employment plans tailored to individual skills, interests, and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let employment challenges hold you back. Our employment specialists are here to help you achieve career success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Employment Help
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Career Consultation
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
              We offer comprehensive hoarding services beyond just employment support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-financial-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Financial Support
                </h3>
                <p className="text-gray-600">
                  Financial assistance and budget planning to support employment goals.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Hoarding Education
                </h3>
                <p className="text-gray-600">
                  Educational programs and workplace awareness training.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-support-groups" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Support Groups
                </h3>
                <p className="text-gray-600">
                  Peer support and group therapy for career and employment challenges.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
