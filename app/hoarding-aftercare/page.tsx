import Link from 'next/link'
import type { Metadata } from 'next'
import { Heart, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Aftercare Jacksonville | Post-Cleanup Support & Maintenance',
  description: 'Comprehensive hoarding aftercare services in Jacksonville including post-cleanup support, maintenance programs, relapse prevention, and ongoing assistance. Our aftercare specialists help maintain progress and prevent relapse.',
  keywords: 'hoarding aftercare Jacksonville, post-cleanup support, maintenance programs, relapse prevention, ongoing assistance Florida',
  alternates: {
    canonical: '/hoarding-aftercare',
  },
}

export default function HoardingAftercarePage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Aftercare Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding aftercare services including post-cleanup support, maintenance programs, relapse prevention, and ongoing assistance. Our aftercare specialists help maintain progress and prevent relapse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Start Aftercare Plan
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Get Aftercare Support
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-teal-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Post-Cleanup Support • Maintenance Programs • Relapse Prevention • Ongoing Assistance • Progress Monitoring
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Hoarding Aftercare */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Aftercare: Post-Cleanup Support & Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding aftercare is essential for maintaining the progress achieved during cleanup and preventing relapse. Our comprehensive aftercare services provide ongoing support, maintenance programs, and relapse prevention strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Post-Cleanup Support
              </h3>
              <p className="text-gray-600 mb-4">
                Ongoing assistance and guidance after the initial cleanup to help maintain progress and establish new habits.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Progress monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Habit formation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Emotional support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Adjustment assistance
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Maintenance Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Structured programs designed to maintain clean living spaces and prevent the re-accumulation of items.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Regular check-ins
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Maintenance schedules
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Organization systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Progress tracking
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Relapse Prevention
              </h3>
              <p className="text-gray-600 mb-4">
                Proactive strategies and support systems to prevent relapse and maintain long-term success.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Early warning signs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Coping strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Support networks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Crisis intervention
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aftercare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive aftercare services designed to support long-term success and prevent relapse after hoarding cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Ongoing Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Continuous emotional and practical support to help maintain progress and address challenges.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Regular check-ins
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Emotional support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Problem-solving
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Maintenance Programs</h3>
              <p className="text-gray-600 text-center mb-4">
                Structured programs to maintain clean living spaces and prevent re-accumulation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Cleaning schedules
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Organization systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Progress tracking
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Relapse Prevention</h3>
              <p className="text-gray-600 text-center mb-4">
                Proactive strategies and support systems to prevent relapse and maintain success.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Early warning signs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Coping strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Crisis intervention
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Family Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Ongoing support for families to help maintain progress and prevent relapse.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Family counseling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Communication skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Support strategies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Therapy & Counseling</h3>
              <p className="text-gray-600 text-center mb-4">
                Ongoing mental health support to address underlying issues and maintain progress.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Individual therapy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Group therapy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Cognitive behavioral therapy
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Home Maintenance</h3>
              <p className="text-gray-600 text-center mb-4">
                Practical assistance with home maintenance and organization to prevent relapse.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Regular cleanups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Organization systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Maintenance schedules
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Aftercare Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to maintaining progress and preventing relapse after hoarding cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of current progress and identification of support needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Plan Development</h3>
              <p className="text-gray-600">
                Creation of personalized aftercare plan with specific goals and strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation & Monitoring</h3>
              <p className="text-gray-600">
                Active implementation of aftercare strategies with regular progress monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Maintenance</h3>
              <p className="text-gray-600">
                Ongoing support and maintenance to ensure long-term success and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Aftercare */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Hoarding Aftercare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how comprehensive aftercare services can help maintain progress and prevent relapse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevents Relapse</h3>
              <p className="text-gray-600">
                Proactive strategies and support systems help prevent relapse and maintain progress.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintains Progress</h3>
              <p className="text-gray-600">
                Ongoing support helps maintain the progress achieved during initial cleanup.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Stability</h3>
              <p className="text-gray-600">
                Supports family stability and prevents the return of hoarding behaviors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Success</h3>
              <p className="text-gray-600">
                Establishes sustainable habits and systems for long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Provides continuous emotional and practical support throughout the recovery journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Change</h3>
              <p className="text-gray-600">
                Creates lasting behavioral changes and sustainable living environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Aftercare Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Aftercare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our aftercare specialists provide comprehensive support with specialized expertise in maintaining hoarding recovery progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aftercare Specialists</h3>
              <p className="text-gray-600">
                Trained professionals with specialized expertise in hoarding aftercare and relapse prevention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Understanding and supportive approach focused on long-term success and well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Methods</h3>
              <p className="text-gray-600">
                Evidence-based approaches and proven strategies for maintaining progress and preventing relapse.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Involvement</h3>
              <p className="text-gray-600">
                Comprehensive support for families to help maintain progress and prevent relapse.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Commitment</h3>
              <p className="text-gray-600">
                Ongoing support and commitment to long-term success and relapse prevention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Plans</h3>
              <p className="text-gray-600">
                Customized aftercare plans tailored to individual needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Aftercare Support?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let your progress slip away. Our aftercare specialists are here to help maintain your success and prevent relapse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Start Aftercare Plan
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-teal-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Contact Us
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
              We offer comprehensive hoarding services beyond just aftercare support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-recovery" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Recovery
                </h3>
                <p className="text-gray-600">
                  Long-term recovery services with relapse prevention and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-prevention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Prevention
                </h3>
                <p className="text-gray-600">
                  Proactive strategies and maintenance programs to prevent hoarding behaviors.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-support-groups" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Support Groups
                </h3>
                <p className="text-gray-600">
                  Peer support and group therapy for ongoing recovery and maintenance.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
