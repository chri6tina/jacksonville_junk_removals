import Link from 'next/link'
import { Heart, Users, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, TrendingUp, Eye, Brain, Users2, GraduationCap, MessageCircle } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function FamilyHoardingSupportPage() {
  return (
    <>
      <SEOHead
        title="Family Hoarding Support Jacksonville | Family Intervention & Support Services"
        description="Comprehensive family hoarding support in Jacksonville with intervention strategies, family consultation, support groups, and ongoing assistance. We help families navigate hoarding situations with compassion and expertise. Get family support today!"
        keywords="family hoarding support Jacksonville, family hoarding intervention, hoarding family help, family support groups, hoarding family consultation, family hoarding education Florida"
        canonical="/family-hoarding-support"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
                            <Users className="w-16 h-16 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Family Hoarding Support Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive support services for families dealing with hoarding situations. We provide family intervention strategies, support groups, education resources, and ongoing assistance to help families navigate these challenging circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Family Consultation
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Join Support Group
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-pink-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Family Intervention Strategies • Support Groups • Family Consultation • Education Resources • Ongoing Assistance
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Family Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding the Impact of Hoarding on Families
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding affects entire families, creating emotional stress, relationship challenges, and practical difficulties. Our family support services address these complex dynamics with understanding and practical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emotional Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Families experience stress, anxiety, guilt, and frustration when dealing with hoarding situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Stress and anxiety
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Guilt and frustration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Relationship strain
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Emotional exhaustion
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Relationship Challenges
              </h3>
              <p className="text-gray-600 mb-4">
                Hoarding can strain family relationships, create conflicts, and affect communication patterns.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Communication breakdown
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Conflict resolution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Trust issues
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Family dynamics
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Practical Difficulties
              </h3>
              <p className="text-gray-600 mb-4">
                Families face practical challenges including safety concerns, financial issues, and daily living difficulties.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Safety concerns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Financial strain
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Daily living challenges
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Future planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Family Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Family Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our family support services address every aspect of dealing with hoarding situations, from initial consultation to ongoing support and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Consultation</h3>
              <p className="text-gray-600 mb-4">
                Professional consultation to understand family dynamics and develop intervention strategies.
              </p>
              <Link href="/hoarding-intervention" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Groups</h3>
              <p className="text-gray-600 mb-4">
                Peer support groups where families can share experiences and learn from others in similar situations.
              </p>
              <div className="text-sm text-pink-600 font-semibold">
                Peer support
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Education</h3>
              <p className="text-gray-600 mb-4">
                Educational programs to help families understand hoarding and develop effective intervention strategies.
              </p>
              <Link href="/hoarding-education" className="text-pink-600 hover:text-pink-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Communication Strategies</h3>
              <p className="text-gray-600 mb-4">
                Training in effective communication techniques to improve family relationships and intervention success.
              </p>
              <div className="text-sm text-pink-600 font-semibold">
                Better communication
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intervention Planning</h3>
              <p className="text-gray-600 mb-4">
                Collaborative planning for effective hoarding intervention that considers family needs and preferences.
              </p>
              <div className="text-sm text-pink-600 font-semibold">
                Strategic planning
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Continued support and follow-up services to maintain progress and prevent relapse.
              </p>
              <div className="text-sm text-pink-600 font-semibold">
                Long-term support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Intervention Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Family Intervention Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process designed to support families through every stage of hoarding intervention, from initial contact to ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Contact</h3>
              <p className="text-gray-600 text-sm">
                Compassionate initial contact to understand the family situation and provide immediate guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive assessment of family dynamics, relationships, and intervention readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy Development</h3>
              <p className="text-gray-600 text-sm">
                Development of family-specific intervention strategies and communication approaches.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Support</h3>
              <p className="text-gray-600 text-sm">
                Active support during intervention implementation with family guidance and assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Assistance</h3>
              <p className="text-gray-600 text-sm">
                Continued support, follow-up services, and family assistance to maintain progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Group Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Family Support Groups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our family support groups to connect with others facing similar challenges, share experiences, and learn effective intervention strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Peer Support
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with other families dealing with hoarding situations for mutual support and understanding.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Shared experiences
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Emotional support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Practical advice
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Community building
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about hoarding behaviors, intervention strategies, and family support techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Hoarding education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Intervention strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Communication skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Resource information
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Facilitated Discussions
              </h3>
              <p className="text-gray-600 mb-4">
                Professional-facilitated group discussions addressing common family challenges and solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Professional guidance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Structured discussions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Problem-solving
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Support strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Family Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Family Hoarding Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your family support specialists with expertise in hoarding intervention, family dynamics, and ongoing assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Specialists</h3>
              <p className="text-gray-600">
                Our team has specialized training in family dynamics, hoarding intervention, and family support strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Approach</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects family dynamics and individual needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Peer Support</h3>
              <p className="text-gray-600">
                Connect with other families facing similar challenges through our support groups and community programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Resources</h3>
              <p className="text-gray-600">
                Comprehensive education about hoarding behaviors, intervention strategies, and family support techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Strategies</h3>
              <p className="text-gray-600">
                Evidence-based intervention strategies and communication techniques proven to improve family outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and follow-up services to maintain progress and prevent relapse in family situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Family Hoarding Support?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't face hoarding challenges alone. Our family support team is ready to help with consultation, support groups, and ongoing assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Family Consultation
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-pink-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Users2 className="w-5 h-5" />
              Join Support Group
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
              We offer comprehensive hoarding services beyond just family support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <Home className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup with specialized intervention and family support services.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/senior-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                  Senior Support
                </h3>
                <p className="text-gray-600">
                  Specialized hoarding cleanup for seniors with healthcare coordination and family involvement.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
                  Education & Resources
                </h3>
                <p className="text-gray-600">
                  Educational programs and prevention strategies to help families and communities address hoarding.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-pink-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-200 transition duration-300">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition duration-300">
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
