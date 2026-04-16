import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, Users, CheckCircle, Star, Clock, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Wrench, Search, BarChart3, ClipboardCheck, UserPlus, Settings, PieChart, Activity, Navigation, Car, Bus, Train, Plane, Anchor, Ship, Compass, Map, Flag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mandarin Hoarding Cleanup Jacksonville | Local Expertise & Suburban Community Support',
  description: 'Professional hoarding cleanup services in Mandarin, Jacksonville with local expertise, suburban community understanding, and compassionate intervention. Serving Mandarin area with specialized hoarding cleanup.',
  keywords: 'Mandarin hoarding cleanup Jacksonville, Mandarin hoarding cleanup Florida, Mandarin hoarding intervention, Mandarin hoarding assessment, Mandarin hoarding support, Mandarin hoarding cleanup services',
  alternates: {
    canonical: '/mandarin-hoarding-cleanup',
  },
}

export default function MandarinHoardingCleanupPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Mandarin Hoarding Cleanup Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hoarding cleanup services in Mandarin, Jacksonville, FL. We serve the Mandarin area with local expertise, suburban community understanding, and compassionate hoarding intervention and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Mandarin Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Mandarin Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-orange-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Mandarin Area Specialists • Local Community Understanding • Suburban Property Expertise • Quick Mandarin Response • Community-Focused Service • Mandarin Hoarding Intervention
            </span>
          </div>
        </div>
      </section>

      {/* Mandarin Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mandarin Area Hoarding Cleanup Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique characteristics of Mandarin and surrounding areas. Our local expertise includes suburban property considerations, community dynamics, and neighborhood-specific hoarding intervention strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Suburban Property Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized understanding of suburban homes, yards, and community considerations in Mandarin and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Suburban home layouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Yard and garage considerations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Community guidelines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Neighborhood dynamics
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Local Community Understanding
              </h3>
              <p className="text-gray-600 mb-4">
                Deep knowledge of Mandarin's community structure, local resources, and family dynamics for effective intervention.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Community resources
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Local support networks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Family dynamics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Cultural considerations
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Mandarin Response
              </h3>
              <p className="text-gray-600 mb-4">
                Fast response times for Mandarin area residents with local team availability and community-focused scheduling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Local team availability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Emergency response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Community priority
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mandarin Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mandarin Area Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hoarding services specifically designed for Mandarin area residents, addressing the unique needs of suburban communities and local families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mandarin Assessment</h3>
              <p className="text-gray-600 mb-4">
                Local hoarding assessment with Mandarin area expertise and community-specific considerations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Local property evaluation</li>
                <li>• Community guidelines review</li>
                <li>• Family dynamics assessment</li>
                <li>• Mandarin-specific planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suburban Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanup services for suburban homes, yards, and garages in Mandarin area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Home interior cleanup</li>
                <li>• Yard and garage organization</li>
                <li>• Community compliance</li>
                <li>• Neighborhood consideration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Intervention</h3>
              <p className="text-gray-600 mb-4">
                Family-focused intervention strategies tailored to Mandarin area family dynamics and support networks.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family consultation</li>
                <li>• Support network building</li>
                <li>• Community resources</li>
                <li>• Ongoing family support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                Quick emergency response for urgent hoarding situations in Mandarin with local team availability.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 emergency service</li>
                <li>• Local team response</li>
                <li>• Crisis intervention</li>
                <li>• Immediate assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Programs</h3>
              <p className="text-gray-600 mb-4">
                Local prevention programs and maintenance services to prevent hoarding relapse in Mandarin area.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prevention strategies</li>
                <li>• Maintenance programs</li>
                <li>• Community support</li>
                <li>• Ongoing assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Continued support and guidance for Mandarin area residents to maintain progress and prevent relapse.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular check-ins</li>
                <li>• Progress monitoring</li>
                <li>• Community resources</li>
                <li>• Long-term support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mandarin Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mandarin Area Hoarding Cleanup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 5-step process is specifically designed for Mandarin area residents, considering local community dynamics and suburban property characteristics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Assessment</h3>
              <p className="text-gray-600 text-sm">
                Mandarin area evaluation with community-specific considerations and local property expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Planning</h3>
              <p className="text-gray-600 text-sm">
                Intervention planning that considers Mandarin community guidelines and neighborhood dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Cleanup</h3>
              <p className="text-gray-600 text-sm">
                Professional cleanup with Mandarin area expertise and suburban property considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Local support network building and Mandarin community resource connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Assistance</h3>
              <p className="text-gray-600 text-sm">
                Continued support and maintenance programs for Mandarin area residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandarin Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Mandarin Area Hoarding Cleanup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Mandarin area expertise provides unique advantages for local residents dealing with hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Mandarin Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Mandarin area characteristics, community dynamics, and local considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Local Response</h3>
              <p className="text-gray-600">
                Fast response times for Mandarin area residents with local team availability and community priority.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Understanding</h3>
              <p className="text-gray-600">
                Understanding of Mandarin community guidelines, family dynamics, and local support networks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suburban Property Knowledge</h3>
              <p className="text-gray-600">
                Specialized expertise in suburban homes, yards, and community compliance considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Resource Network</h3>
              <p className="text-gray-600">
                Connections to Mandarin area resources, support services, and community assistance programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Commitment</h3>
              <p className="text-gray-600">
                Long-term commitment to Mandarin area residents with ongoing support and community involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Mandarin Area Hoarding Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our Mandarin area expertise ensures you get the best hoarding cleanup service with local understanding and community-focused support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Mandarin Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-orange-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Mandarin Service
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
              Our Mandarin area hoarding services work together with our comprehensive hoarding intervention and cleanup services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup services to restore your living environment to a safe, clean state.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-prevention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Prevention Programs
                </h3>
                <p className="text-gray-600">
                  Prevention strategies and maintenance programs to prevent hoarding behaviors from recurring.
                </p>
              </div>
            </Link>

            <Link href="/junk-removal-mandarin" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Mandarin Junk Removal
                </h3>
                <p className="text-gray-600">
                  General junk removal services in Mandarin area for regular cleanup and organization needs.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  All Services
                </h3>
                <p className="text-gray-600">
                  View our complete range of hoarding intervention, cleanup, and prevention services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
