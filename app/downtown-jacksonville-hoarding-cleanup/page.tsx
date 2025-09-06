import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, Users, Shield, CheckCircle, Star, Clock, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Wrench, Search, BarChart3, ClipboardCheck, UserPlus, Settings, PieChart, Activity, Navigation, Car, Bus, Train, Plane, Anchor, Ship, Compass, Map, Flag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Downtown Jacksonville Hoarding Cleanup | Local Hoarding Services Downtown JAX',
  description: 'Professional hoarding cleanup services in Downtown Jacksonville, FL. We serve the downtown area with local expertise, quick response times, and community-focused hoarding intervention. Get downtown hoarding cleanup today!',
  keywords: 'downtown Jacksonville hoarding cleanup, Jacksonville FL hoarding cleanup, downtown JAX hoarding services, Jacksonville hoarding removal, Florida hoarding cleanup, downtown Jacksonville junk removal',
  alternates: {
    canonical: '/downtown-jacksonville-hoarding-cleanup',
  },
}

export default function DowntownJacksonvilleHoardingCleanupPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Downtown Jacksonville Hoarding Cleanup
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hoarding cleanup services in Downtown Jacksonville, FL. We serve the downtown area with local expertise, quick response times, and community-focused hoarding intervention and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Downtown Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Downtown Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-emerald-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Downtown Jacksonville Service Area • Local Expertise • Quick Response • Community Focus • Professional Discretion • Comprehensive Solutions
            </span>
          </div>
        </div>
      </section>

      {/* Downtown Jacksonville Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Downtown Jacksonville with Local Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As your local Downtown Jacksonville hoarding cleanup specialists, we understand the unique challenges and community needs of the downtown area. Our local presence ensures quick response times and personalized service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Navigation className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Downtown Service Area
              </h3>
              <p className="text-gray-600 mb-4">
                We serve all of Downtown Jacksonville including the Central Business District, LaVilla, and surrounding downtown neighborhoods.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Central Business District
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  LaVilla Historic District
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Downtown Riverside
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Brooklyn Neighborhood
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Local Response
              </h3>
              <p className="text-gray-600 mb-4">
                Our downtown location means faster response times and more flexible scheduling for downtown residents and businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Same-day response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Emergency availability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Local team access
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Focus
              </h3>
              <p className="text-gray-600 mb-4">
                We're part of the Downtown Jacksonville community and committed to maintaining the beauty and safety of our downtown area.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Local business support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Community involvement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Downtown preservation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Neighborhood safety
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downtown Jacksonville Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive hoarding services are specifically tailored to meet the needs of Downtown Jacksonville residents and businesses, from residential properties to commercial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Residential</h3>
              <p className="text-gray-600 mb-4">
                Hoarding cleanup for downtown apartments, condos, and residential properties with local expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Downtown apartments</li>
                <li>• Condominiums</li>
                <li>• Historic homes</li>
                <li>• Residential complexes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Commercial</h3>
              <p className="text-gray-600 mb-4">
                Business hoarding cleanup for downtown offices, retail spaces, and commercial properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Office buildings</li>
                <li>• Retail stores</li>
                <li>• Professional offices</li>
                <li>• Commercial spaces</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic Properties</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanup for downtown's historic properties and buildings with preservation in mind.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Historic buildings</li>
                <li>• Preservation focus</li>
                <li>• Cultural sensitivity</li>
                <li>• Heritage protection</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600 mb-4">
                Family-focused hoarding intervention and support services for downtown families.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family consultation</li>
                <li>• Intervention planning</li>
                <li>• Support groups</li>
                <li>• Ongoing assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency hoarding cleanup for downtown crisis situations requiring immediate intervention.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 availability</li>
                <li>• Crisis response</li>
                <li>• Immediate intervention</li>
                <li>• Downtown coverage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Education</h3>
              <p className="text-gray-600 mb-4">
                Community education and prevention programs specifically for Downtown Jacksonville residents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Community workshops</li>
                <li>• Prevention programs</li>
                <li>• Local resources</li>
                <li>• Downtown outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Downtown Jacksonville Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process designed specifically for Downtown Jacksonville, ensuring efficient service, minimal disruption, and community-focused solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Contact</h3>
              <p className="text-gray-600 text-sm">
                Quick local response to downtown residents and businesses with immediate guidance and scheduling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown Assessment</h3>
              <p className="text-gray-600 text-sm">
                Local team assessment considering downtown-specific factors and community considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Planning</h3>
              <p className="text-gray-600 text-sm">
                Planning that considers downtown community needs, historic preservation, and minimal disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional cleanup execution by our downtown team with community awareness and sensitivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Follow-up</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and follow-up to maintain downtown community standards and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downtown Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Downtown Jacksonville Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your Downtown Jacksonville neighbors with local expertise, community commitment, and proven hoarding intervention solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Presence</h3>
              <p className="text-gray-600">
                We're based in and serve Downtown Jacksonville, ensuring quick response times and local understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600">
                Our downtown location means faster response times and more flexible scheduling for local residents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Strong commitment to Downtown Jacksonville community well-being and preservation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of downtown properties, historic considerations, and community dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Standards</h3>
              <p className="text-gray-600">
                Maintain the highest professional standards while serving our downtown community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and follow-up to maintain downtown community standards and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Downtown Jacksonville Hoarding Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let hoarding affect your Downtown Jacksonville home or business. Our local team is ready to restore your space with community-focused service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Downtown Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-emerald-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Downtown Service
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
              We offer comprehensive hoarding services throughout Jacksonville and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Home className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
                  General Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup services for all of Jacksonville and surrounding areas.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/commercial-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Building className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
                  Commercial Cleanup
                </h3>
                <p className="text-gray-600">
                  Business hoarding cleanup services for offices, retail spaces, and commercial properties.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition duration-300">
                  <Star className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition duration-300">
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
