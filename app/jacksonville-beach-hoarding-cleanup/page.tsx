import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, Users, Shield, CheckCircle, Star, Clock, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Wrench, Search, BarChart3, ClipboardCheck, UserPlus, Settings, PieChart, Activity, Navigation, Car, Bus, Train, Plane, Anchor, Ship, Compass, Map, Flag, Waves, Umbrella, Sun, Fish } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jacksonville Beach Hoarding Cleanup | Beach Area Hoarding Services JAX Beach',
  description: 'Professional hoarding cleanup services in Jacksonville Beach, FL. We serve the beach area with coastal expertise, quick response times, and community-focused hoarding intervention. Get beach area hoarding cleanup today!',
  keywords: 'Jacksonville Beach hoarding cleanup, JAX Beach hoarding services, beach area hoarding cleanup, coastal hoarding removal, Florida beach hoarding cleanup, Jacksonville Beach junk removal',
  alternates: {
    canonical: '/jacksonville-beach-hoarding-cleanup',
  },
}

export default function JacksonvilleBeachHoardingCleanupPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
                            <Waves className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Jacksonville Beach Hoarding Cleanup
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hoarding cleanup services in Jacksonville Beach, FL. We serve the beach area with coastal expertise, quick response times, and community-focused hoarding intervention and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Beach Area Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Beach Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Waves className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Jacksonville Beach Service Area • Coastal Expertise • Beach Community Focus • Quick Response • Professional Discretion • Comprehensive Solutions
            </span>
          </div>
        </div>
      </section>

      {/* Jacksonville Beach Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving Jacksonville Beach with Coastal Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As your local Jacksonville Beach hoarding cleanup specialists, we understand the unique challenges and community needs of the beach area. Our coastal expertise ensures sensitive handling of beach properties and community standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Waves className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Beach Service Area
              </h3>
              <p className="text-gray-600 mb-4">
                We serve all of Jacksonville Beach including beachfront properties, coastal neighborhoods, and surrounding beach communities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Beachfront properties
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Coastal neighborhoods
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Beach communities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Oceanview residences
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Beach Response
              </h3>
              <p className="text-gray-600 mb-4">
                Our beach area location means faster response times and more flexible scheduling for beach residents and businesses.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Same-day response
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Flexible scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Emergency availability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Local team access
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Beach Community Focus
              </h3>
              <p className="text-gray-600 mb-4">
                We're part of the Jacksonville Beach community and committed to maintaining the beauty and safety of our beach area.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Beach business support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Community involvement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Beach area preservation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  Neighborhood safety
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Area Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Jacksonville Beach Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive hoarding services are specifically tailored to meet the needs of Jacksonville Beach residents and businesses, from beachfront properties to coastal commercial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beachfront Residential</h3>
              <p className="text-gray-600 mb-4">
                Hoarding cleanup for beachfront homes, condos, and residential properties with coastal expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Beachfront homes</li>
                <li>• Oceanview condos</li>
                <li>• Coastal residences</li>
                <li>• Beach communities</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Commercial</h3>
              <p className="text-gray-600 mb-4">
                Business hoarding cleanup for beach area offices, retail spaces, and commercial properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Beach offices</li>
                <li>• Coastal retail</li>
                <li>• Beach businesses</li>
                <li>• Commercial spaces</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Umbrella className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vacation Properties</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleanup for vacation rentals, beach houses, and seasonal properties.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vacation rentals</li>
                <li>• Beach houses</li>
                <li>• Seasonal properties</li>
                <li>• Rental management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Family Support</h3>
              <p className="text-gray-600 mb-4">
                Family-focused hoarding intervention and support services for beach area families.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family consultation</li>
                <li>• Intervention planning</li>
                <li>• Support groups</li>
                <li>• Ongoing assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency hoarding cleanup for beach area crisis situations requiring immediate intervention.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 24/7 availability</li>
                <li>• Crisis response</li>
                <li>• Immediate intervention</li>
                <li>• Beach area coverage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Community Education</h3>
              <p className="text-gray-600 mb-4">
                Community education and prevention programs specifically for Jacksonville Beach residents.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Community workshops</li>
                <li>• Prevention programs</li>
                <li>• Beach area resources</li>
                <li>• Local outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Area Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Jacksonville Beach Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process designed specifically for Jacksonville Beach, ensuring efficient service, minimal disruption, and community-focused solutions for the beach area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beach Area Contact</h3>
              <p className="text-gray-600 text-sm">
                Quick local response to beach area residents and businesses with immediate guidance and scheduling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coastal Assessment</h3>
              <p className="text-gray-600 text-sm">
                Local team assessment considering beach-specific factors and coastal community considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beach Community Planning</h3>
              <p className="text-gray-600 text-sm">
                Planning that considers beach community needs, coastal preservation, and minimal disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coastal Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional cleanup execution by our beach area team with community awareness and coastal sensitivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beach Community Follow-up</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and follow-up to maintain beach community standards and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Area Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Jacksonville Beach Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cleanup company - we're your Jacksonville Beach neighbors with coastal expertise, community commitment, and proven hoarding intervention solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Area Presence</h3>
              <p className="text-gray-600">
                We're based in and serve Jacksonville Beach, ensuring quick response times and local coastal understanding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Beach Response</h3>
              <p className="text-gray-600">
                Our beach area location means faster response times and more flexible scheduling for local residents.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Beach Community Focus</h3>
              <p className="text-gray-600">
                Strong commitment to Jacksonville Beach community well-being and coastal preservation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Coastal Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of beach properties, coastal considerations, and beach community dynamics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Standards</h3>
              <p className="text-gray-600">
                Maintain the highest professional standards while serving our beach community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Beach Support</h3>
              <p className="text-gray-600">
                Continued support and follow-up to maintain beach community standards and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Jacksonville Beach Hoarding Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let hoarding affect your Jacksonville Beach home or business. Our local team is ready to restore your space with community-focused service and coastal expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Beach Area Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-blue-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Waves className="w-5 h-5" />
              Schedule Beach Service
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
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  General Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup services for all of Jacksonville and surrounding areas.
                </p>
              </div>
            </Link>

            <Link href="/downtown-jacksonville-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Downtown Services
                </h3>
                <p className="text-gray-600">
                  Downtown Jacksonville hoarding cleanup services for urban properties and businesses.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/commercial-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Commercial Cleanup
                </h3>
                <p className="text-gray-600">
                  Business hoarding cleanup services for offices, retail spaces, and commercial properties.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
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
