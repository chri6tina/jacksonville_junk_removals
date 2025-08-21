import Link from 'next/link'
import { Shield, Users, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, Building, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Wrench, Search, BarChart3, ClipboardCheck, UserPlus, Settings, PieChart, Activity, Navigation, Car, Bus, Train, Plane, Anchor, Ship, Compass, Map, Flag } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingPreventionPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Prevention Jacksonville | Proactive Strategies & Maintenance Programs"
        description="Comprehensive hoarding prevention in Jacksonville with proactive strategies, maintenance programs, and ongoing support to prevent hoarding behaviors from developing or recurring. Get prevention help today!"
        keywords="hoarding prevention Jacksonville, hoarding prevention strategies, hoarding maintenance programs, prevent hoarding relapse, hoarding prevention Florida, ongoing hoarding support"
        canonical="/hoarding-prevention"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hoarding Prevention Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Comprehensive hoarding prevention strategies and maintenance programs to prevent hoarding behaviors from developing or recurring. Our proactive approach ensures long-term success and healthy living environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Prevention Consultation
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Join Prevention Program
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Proactive Prevention Strategies • Maintenance Programs • Ongoing Support • Relapse Prevention • Healthy Living Environments • Long-term Success
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Hoarding Prevention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Hoarding Prevention Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prevention is the key to long-term success in managing hoarding behaviors. Our proactive approach helps individuals and families maintain clean, safe, and healthy living environments while preventing the development or recurrence of hoarding situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Early Intervention
              </h3>
              <p className="text-gray-600 mb-4">
                Identify and address hoarding tendencies before they become severe problems requiring extensive cleanup.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Early warning signs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Behavioral patterns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Risk assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Proactive strategies
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Relapse Prevention
              </h3>
              <p className="text-gray-600 mb-4">
                Maintain progress after cleanup and prevent hoarding behaviors from recurring through ongoing support and strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Progress maintenance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Relapse prevention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Ongoing support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Long-term success
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healthy Living
              </h3>
              <p className="text-gray-600 mb-4">
                Create and maintain healthy, safe, and comfortable living environments that support overall well-being.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Safe environments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Healthy spaces
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Comfortable living
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Well-being support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Prevention Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our prevention services provide proactive strategies, ongoing support, and maintenance programs to prevent hoarding behaviors and maintain healthy living environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation to identify risk factors and develop personalized prevention strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Risk factor identification</li>
                <li>• Behavioral analysis</li>
                <li>• Prevention planning</li>
                <li>• Strategy development</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Education</h3>
              <p className="text-gray-600 mb-4">
                Educational programs and workshops to teach prevention strategies and healthy organizational habits.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prevention workshops</li>
                <li>• Organizational skills</li>
                <li>• Decision-making training</li>
                <li>• Healthy habits</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600 mb-4">
                Personalized prevention strategies and action plans tailored to individual needs and circumstances.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Personalized plans</li>
                <li>• Action strategies</li>
                <li>• Goal setting</li>
                <li>• Progress tracking</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Programs</h3>
              <p className="text-gray-600 mb-4">
                Ongoing maintenance programs to prevent relapse and maintain clean, organized living spaces.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular check-ins</li>
                <li>• Maintenance support</li>
                <li>• Progress monitoring</li>
                <li>• Ongoing assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Support</h3>
              <p className="text-gray-600 mb-4">
                Family-focused prevention support including education, communication strategies, and intervention planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Family education</li>
                <li>• Communication training</li>
                <li>• Support strategies</li>
                <li>• Intervention planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Continued support and guidance to ensure long-term success and prevent hoarding behaviors from recurring.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular support</li>
                <li>• Progress monitoring</li>
                <li>• Crisis intervention</li>
                <li>• Long-term assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proven Prevention Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based prevention strategies are designed to stop hoarding behaviors before they develop and maintain progress after cleanup interventions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational Systems</h3>
              <p className="text-gray-600 text-sm">
                Implement effective organizational systems and decluttering routines to maintain order and prevent accumulation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Decision-Making Frameworks</h3>
              <p className="text-gray-600 text-sm">
                Develop clear decision-making frameworks for evaluating possessions and determining what to keep or discard.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Networks</h3>
              <p className="text-gray-600 text-sm">
                Build and maintain support networks of family, friends, and professionals who can provide guidance and assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
              <p className="text-gray-600 text-sm">
                Establish regular maintenance routines and check-ins to prevent relapse and maintain progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prevention Programs & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive prevention programs provide ongoing support, education, and maintenance strategies to ensure long-term success in preventing hoarding behaviors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Individual Prevention Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Personalized prevention programs designed for individuals with specific needs and circumstances.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Personalized strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Individual coaching
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Progress monitoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Ongoing support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Family Prevention Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Family-focused prevention programs that educate and support entire families in maintaining healthy living environments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Family education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Communication training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Support strategies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Family dynamics
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <School className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Prevention Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Community-wide prevention programs and workshops to raise awareness and provide prevention education.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Community workshops
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Awareness campaigns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Prevention education
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Resource sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Prevention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Hoarding Prevention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just prevention specialists - we're hoarding intervention experts with proven prevention strategies and long-term support commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Expertise</h3>
              <p className="text-gray-600">
                Extensive experience in hoarding prevention with proven strategies and successful outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Strategies</h3>
              <p className="text-gray-600">
                Evidence-based prevention strategies that have been proven effective in real-world situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Support</h3>
              <p className="text-gray-600">
                Understanding and supportive approach that respects individual circumstances and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Commitment</h3>
              <p className="text-gray-600">
                Ongoing support and commitment to long-term success in preventing hoarding behaviors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Focus</h3>
              <p className="text-gray-600">
                Family-focused approach that addresses the needs of entire families and support networks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and guidance to ensure long-term success and prevent relapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Hoarding Prevention?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait until hoarding becomes a problem. Our prevention programs can help you maintain healthy, organized living environments and prevent hoarding behaviors from developing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule Prevention Consultation
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-green-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Join Prevention Program
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
              Our prevention services work together with our comprehensive hoarding intervention and cleanup services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup services to restore your living environment to a safe, clean state.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-assessment" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hoarding Assessment
                </h3>
                <p className="text-gray-600">
                  Professional assessment and evaluation to understand your situation and develop intervention strategies.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Education & Resources
                </h3>
                <p className="text-gray-600">
                  Educational programs and prevention strategies to help families and communities address hoarding.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
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
