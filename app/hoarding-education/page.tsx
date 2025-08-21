import Link from 'next/link'
import { BookOpen, GraduationCap, Users, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookMarked, Video, Headphones, Download, Share2, Mail, PhoneCall } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingEducationPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Education Jacksonville | Prevention Strategies & Educational Programs"
        description="Comprehensive hoarding education in Jacksonville with prevention strategies, educational programs, community outreach, and early intervention resources. Learn about hoarding behaviors and prevention techniques. Get educated today!"
        keywords="hoarding education Jacksonville, hoarding prevention strategies, hoarding educational programs, hoarding community outreach, hoarding early intervention, hoarding awareness Florida"
        canonical="/hoarding-education"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Education Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive educational programs and prevention strategies to help families, communities, and professionals understand hoarding behaviors and implement early intervention techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Educational Session
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Join Community Program
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Educational Programs • Prevention Strategies • Community Outreach • Early Intervention • Professional Training • Resource Library
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Hoarding Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Hoarding Education Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Education is the foundation of prevention and early intervention. Understanding hoarding behaviors helps families, communities, and professionals identify warning signs and implement effective strategies before situations become severe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Early Recognition
              </h3>
              <p className="text-gray-600 mb-4">
                Learn to identify early warning signs of hoarding behaviors before they become severe problems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Behavioral patterns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Environmental changes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Social withdrawal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Decision-making difficulties
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Prevention Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                Implement effective prevention strategies to stop hoarding behaviors before they escalate.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Organizational systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Decision-making frameworks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Support networks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Professional guidance
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Understanding Causes
              </h3>
              <p className="text-gray-600 mb-4">
                Gain insight into the psychological and environmental factors that contribute to hoarding behaviors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Psychological factors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Trauma and loss
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Environmental triggers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Coping mechanisms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Educational Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our educational programs are designed for different audiences and learning styles, from interactive workshops to professional training sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Education</h3>
              <p className="text-gray-600 mb-4">
                Interactive workshops for families dealing with hoarding situations, including intervention strategies and support techniques.
              </p>
              <Link href="/family-hoarding-support" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Training</h3>
              <p className="text-gray-600 mb-4">
                Specialized training for healthcare professionals, social workers, and property managers on hoarding recognition and intervention.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                Professional development
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <School className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Workshops</h3>
              <p className="text-gray-600 mb-4">
                Public workshops and seminars to raise awareness and provide basic education about hoarding behaviors and prevention.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                Community outreach
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Online Learning</h3>
              <p className="text-gray-600 mb-4">
                Digital educational resources including webinars, video courses, and interactive learning modules for remote access.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                Digital resources
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Group Education</h3>
              <p className="text-gray-600 mb-4">
                Educational components integrated into support group meetings to provide learning opportunities alongside peer support.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                Integrated learning
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Programs</h3>
              <p className="text-gray-600 mb-4">
                Tailored educational programs designed for specific organizations, communities, or groups with unique needs.
              </p>
              <div className="text-sm text-indigo-600 font-semibold">
                Personalized content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hoarding Prevention Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn proven strategies to prevent hoarding behaviors from developing or escalating, including organizational systems, decision-making frameworks, and support networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational Systems</h3>
              <p className="text-gray-600 text-sm">
                Implement effective organizational systems and decluttering routines to maintain order and prevent accumulation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Decision-Making Frameworks</h3>
              <p className="text-gray-600 text-sm">
                Develop clear decision-making frameworks for evaluating possessions and determining what to keep or discard.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Networks</h3>
              <p className="text-gray-600 text-sm">
                Build and maintain support networks of family, friends, and professionals who can provide guidance and assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Guidance</h3>
              <p className="text-gray-600 text-sm">
                Seek professional guidance early when signs of hoarding behaviors begin to appear or escalate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Educational Resource Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of educational materials, including guides, videos, worksheets, and reference materials for understanding and addressing hoarding behaviors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Guides
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides covering hoarding behaviors, intervention strategies, and prevention techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Understanding hoarding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Intervention strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Prevention techniques
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Family support guides
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Video Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Educational videos, webinars, and demonstrations covering various aspects of hoarding intervention and prevention.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Educational webinars
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Intervention demonstrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Expert interviews
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Success stories
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Downloadable Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Printable worksheets, checklists, and assessment tools for personal use and professional application.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Assessment tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Action plans
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Progress trackers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  Resource lists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Outreach & Awareness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to raising awareness about hoarding behaviors and prevention strategies throughout the Jacksonville community through various outreach initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Public Speaking</h3>
              <p className="text-gray-600">
                Community presentations and speaking engagements to raise awareness about hoarding behaviors and prevention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Programs</h3>
              <p className="text-gray-600">
                Educational programs in schools to teach students about organization, decision-making, and healthy habits.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Training</h3>
              <p className="text-gray-600">
                Training programs for businesses and organizations to recognize and address workplace hoarding situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Events</h3>
              <p className="text-gray-600">
                Participation in community events, health fairs, and awareness campaigns to reach diverse audiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media</h3>
              <p className="text-gray-600">
                Educational content and awareness campaigns through social media platforms to reach wider audiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Newsletter</h3>
              <p className="text-gray-600">
                Regular educational newsletters with tips, resources, and updates on hoarding prevention and intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Hoarding Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just educators - we're hoarding intervention specialists with real-world experience and proven educational approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our team has extensive experience in hoarding intervention and prevention, providing real-world insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Approach</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects individual circumstances and learning needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Methods</h3>
              <p className="text-gray-600">
                Evidence-based educational approaches and prevention strategies proven to be effective in real situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Strong commitment to community education and outreach to prevent hoarding situations before they develop.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookMarked className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Resources</h3>
              <p className="text-gray-600">
                Extensive library of educational materials, resources, and ongoing support for continued learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued educational support and follow-up to ensure long-term success in prevention and intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn About Hoarding Prevention?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait until hoarding becomes a problem. Our educational programs can help you understand, prevent, and address hoarding behaviors effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Educational Session
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-indigo-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Access Resource Library
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
              We offer comprehensive hoarding services beyond just education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <Home className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup with specialized intervention and family support services.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/senior-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                  Senior Support
                </h3>
                <p className="text-gray-600">
                  Specialized hoarding cleanup for seniors with healthcare coordination and family involvement.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
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
