import Link from 'next/link'
import { Users, Phone, Shield, CheckCircle, Star, Clock, MapPin, Calendar, FileText, Award, Home, Building, UserCheck, BookOpen, Target, MessageCircle, Eye, Heart, Megaphone } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingCommunityOutreachPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Community Outreach Jacksonville | Community Programs & Awareness Campaigns"
        description="Comprehensive hoarding community outreach services in Jacksonville including community programs, awareness campaigns, education initiatives, and public outreach. Our outreach specialists work to reduce stigma and increase understanding of hoarding disorder."
        keywords="hoarding community outreach Jacksonville, community programs, awareness campaigns, education initiatives, public outreach Florida"
        canonical="/hoarding-community-outreach"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-50 to-purple-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Megaphone className="w-16 h-16 text-violet-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Community Outreach Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding community outreach services including community programs, awareness campaigns, education initiatives, and public outreach. Our outreach specialists work to reduce stigma and increase understanding of hoarding disorder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Join Outreach Programs
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-violet-600 border-2 border-violet-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Community Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-violet-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Megaphone className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Community Programs • Awareness Campaigns • Education Initiatives • Public Outreach • Stigma Reduction
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Community Outreach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Hoarding Community Outreach: Building Awareness & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hoarding community outreach focuses on building awareness, reducing stigma, and creating supportive communities for individuals and families affected by hoarding disorder. Our outreach programs promote understanding and compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Awareness Campaigns
              </h3>
              <p className="text-gray-600 mb-4">
                Public awareness campaigns to educate the community about hoarding disorder and reduce stigma.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Public education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Media campaigns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Community events
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Stigma reduction
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Community-based programs and initiatives to support individuals and families affected by hoarding.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Support groups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Community workshops
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Peer support networks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Resource fairs
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Professional Training
              </h3>
              <p className="text-gray-600 mb-4">
                Training programs for professionals, first responders, and community leaders about hoarding disorder.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Professional development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  First responder training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Community leader education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Best practices sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Outreach Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive outreach programs designed to build community understanding, support, and resources for hoarding disorder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Public Education</h3>
              <p className="text-gray-600 text-center mb-4">
                Educational programs and campaigns to increase public understanding of hoarding disorder.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Community presentations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Educational materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Media outreach
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Community Workshops</h3>
              <p className="text-gray-600 text-center mb-4">
                Interactive workshops for community members to learn about hoarding and how to help.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Interactive sessions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Skill building
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Resource sharing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Professional Training</h3>
              <p className="text-gray-600 text-center mb-4">
                Specialized training programs for professionals working with hoarding situations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Evidence-based approaches
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Best practices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Continuing education
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Support Networks</h3>
              <p className="text-gray-600 text-center mb-4">
                Building and strengthening community support networks for individuals and families.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Peer connections
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Support groups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Community partnerships
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Resource Development</h3>
              <p className="text-gray-600 text-center mb-4">
                Development and distribution of educational and support resources for the community.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Educational materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Resource guides
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Information sharing
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Community Partnerships</h3>
              <p className="text-gray-600 text-center mb-4">
                Building partnerships with community organizations, agencies, and stakeholders.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Collaboration building
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Resource coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-violet-600" />
                  Joint initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact of Community Outreach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our community outreach programs create positive change by building understanding, reducing stigma, and creating supportive communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reduced Stigma</h3>
              <p className="text-gray-600">
                Community education reduces stigma and promotes understanding and compassion for hoarding disorder.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Awareness</h3>
              <p className="text-gray-600">
                Public awareness campaigns increase understanding of hoarding disorder and available resources.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Networks</h3>
              <p className="text-gray-600">
                Building stronger community support networks for individuals and families affected by hoarding.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Early Intervention</h3>
              <p className="text-gray-600">
                Increased awareness leads to earlier identification and intervention for hoarding situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Competency</h3>
              <p className="text-gray-600">
                Training programs improve professional competency in working with hoarding situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Megaphone className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Mobilization</h3>
              <p className="text-gray-600">
                Outreach programs mobilize communities to create positive change and support systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Outreach Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Outreach Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our outreach specialists provide effective programs with evidence-based approaches to community education and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Outreach Team</h3>
              <p className="text-gray-600">
                Experienced outreach specialists with expertise in community education and engagement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Megaphone className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based Programs</h3>
              <p className="text-gray-600">
                Programs based on research and best practices in community outreach and education.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Approach</h3>
              <p className="text-gray-600">
                Comprehensive approach that addresses all aspects of community awareness and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Partnerships</h3>
              <p className="text-gray-600">
                Strong partnerships with community organizations and stakeholders for maximum impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Commitment</h3>
              <p className="text-gray-600">
                Long-term commitment to building sustainable community awareness and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Impact</h3>
              <p className="text-gray-600">
                Focus on creating measurable impact and positive change in community understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-violet-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community Outreach Efforts
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Help us build a more understanding and supportive community. Join our outreach programs and make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Join Outreach Programs
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-violet-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Community Partnership
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
              We offer comprehensive hoarding services beyond just community outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-violet-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition duration-300">
                  Hoarding Education
                </h3>
                <p className="text-gray-600">
                  Educational programs and resources about hoarding disorder and prevention.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-support-groups" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-violet-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-200 transition duration-300">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition duration-300">
                  Support Groups
                </h3>
                <p className="text-gray-600">
                  Peer support and group therapy for individuals and families affected by hoarding.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-resources" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-violet-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-200 transition duration-300">
                  <FileText className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition duration-300">
                  Hoarding Resources
                </h3>
                <p className="text-gray-600">
                  Educational materials, support resources, and helpful information about hoarding.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
