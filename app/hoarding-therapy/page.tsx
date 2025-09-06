import Link from 'next/link'
import type { Metadata } from 'next'
import { Brain, Heart, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hoarding Therapy Jacksonville | Professional Counseling & Mental Health Support',
  description: 'Professional hoarding therapy and counseling services in Jacksonville. Our licensed therapists specialize in hoarding disorder treatment, cognitive behavioral therapy, and mental health support.',
  keywords: 'hoarding therapy Jacksonville, hoarding counseling, hoarding mental health, cognitive behavioral therapy, hoarding treatment, licensed therapists Florida',
  alternates: {
    canonical: '/hoarding-therapy',
  },
}

export default function HoardingTherapyPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Therapy Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hoarding therapy and counseling services with licensed therapists specializing in hoarding disorder treatment, cognitive behavioral therapy, and comprehensive mental health support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Therapy
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Find Therapists
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-teal-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Brain className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Licensed Therapists • Cognitive Behavioral Therapy • Mental Health Support • Specialized Treatment • Evidence-Based Care
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Hoarding Therapy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Therapy: Professional Mental Health Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding therapy provides specialized mental health treatment for hoarding disorder using evidence-based approaches like cognitive behavioral therapy (CBT) to address the underlying causes and patterns of hoarding behavior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cognitive Behavioral Therapy
              </h3>
              <p className="text-gray-600 mb-4">
                Evidence-based CBT specifically designed for hoarding disorder to change thought patterns and behaviors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Thought pattern analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Behavioral modification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Coping strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Progress tracking
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Emotional Support
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive emotional support to address underlying mental health conditions and trauma.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Anxiety management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Depression treatment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Trauma processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Grief counseling
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Licensed Professionals
              </h3>
              <p className="text-gray-600 mb-4">
                Licensed therapists and counselors with specialized training in hoarding disorder treatment.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Board-certified therapists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Hoarding specialization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Continuing education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Evidence-based practice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Approaches */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Therapy Approaches & Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use evidence-based therapy approaches specifically proven effective for hoarding disorder treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Cognitive Behavioral Therapy</h3>
              <p className="text-gray-600 text-center mb-4">
                The gold standard treatment for hoarding disorder, focusing on changing thinking patterns and behaviors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Cognitive restructuring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Exposure therapy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Behavioral experiments
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Acceptance & Commitment Therapy</h3>
              <p className="text-gray-600 text-center mb-4">
                ACT helps develop psychological flexibility and acceptance while working toward valued life goals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Mindfulness training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Value clarification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Commitment strategies
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Trauma-Informed Care</h3>
              <p className="text-gray-600 text-center mb-4">
                Addressing underlying trauma that may contribute to hoarding behaviors using specialized approaches.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  EMDR therapy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Trauma processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Safety building
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Family Therapy</h3>
              <p className="text-gray-600 text-center mb-4">
                Including family members in treatment to improve relationships and support systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Communication skills
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Boundary setting
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Group Therapy</h3>
              <p className="text-gray-600 text-center mb-4">
                Professional-led group therapy sessions combining peer support with clinical expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Peer learning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Skill practice
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Social support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Medication Management</h3>
              <p className="text-gray-600 text-center mb-4">
                Coordination with psychiatrists for medication evaluation and management when appropriate.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Psychiatric evaluation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Medication monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Side effect management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Therapy Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, evidence-based approach to hoarding therapy with clear phases and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of hoarding symptoms, mental health history, and treatment goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Planning</h3>
              <p className="text-gray-600">
                Developing a personalized treatment plan with specific goals and evidence-based interventions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Active Treatment</h3>
              <p className="text-gray-600">
                Regular therapy sessions using proven techniques like CBT and exposure therapy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-teal-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600">
                Ongoing support, relapse prevention, and booster sessions to maintain progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Therapy Goals & Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our therapy focuses on achievable goals that improve quality of life and reduce hoarding behaviors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reduce Hoarding Behaviors</h3>
              <p className="text-gray-600">
                Decrease acquiring behaviors and increase discarding abilities through structured interventions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improve Living Conditions</h3>
              <p className="text-gray-600">
                Create safer, more functional living spaces through gradual decluttering and organization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhance Mental Health</h3>
              <p className="text-gray-600">
                Address underlying depression, anxiety, and other mental health conditions contributing to hoarding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strengthen Relationships</h3>
              <p className="text-gray-600">
                Improve family and social relationships that may have been strained by hoarding behaviors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Develop Coping Skills</h3>
              <p className="text-gray-600">
                Build healthy coping mechanisms and decision-making skills for long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increase Quality of Life</h3>
              <p className="text-gray-600">
                Improve overall life satisfaction, functioning, and engagement in meaningful activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Therapy Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Therapy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our licensed therapists provide specialized, evidence-based treatment specifically designed for hoarding disorder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Expertise</h3>
              <p className="text-gray-600">
                Licensed therapists with specialized training and experience in hoarding disorder treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based Treatment</h3>
              <p className="text-gray-600">
                Using proven therapeutic approaches like CBT that have strong research support for hoarding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Non-judgmental, understanding approach that respects the challenges of hoarding disorder.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Convenient appointment times including evenings and weekends to accommodate your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Individual & Family Options</h3>
              <p className="text-gray-600">
                Both individual therapy and family therapy options to meet different needs and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confidential Environment</h3>
              <p className="text-gray-600">
                Safe, private, and confidential therapeutic environment for open and honest communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Therapy?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward healing and recovery. Our licensed therapists are here to provide the specialized support you need for hoarding disorder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Therapy
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-teal-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Learn More
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
              We offer comprehensive hoarding services beyond just therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-support-groups" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Support Groups
                </h3>
                <p className="text-gray-600">
                  Peer support and group therapy for additional community and shared learning.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-assessment" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <Eye className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Assessment
                </h3>
                <p className="text-gray-600">
                  Professional evaluation and assessment to inform treatment planning.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-teal-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition duration-300">
                  <MessageCircle className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional intervention services to initiate treatment and support.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
