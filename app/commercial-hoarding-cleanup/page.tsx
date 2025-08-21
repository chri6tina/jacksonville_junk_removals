import Link from 'next/link'
import { Building, Users, Shield, CheckCircle, Star, Clock, MapPin, Phone, Calendar, FileText, Award, Home, UserCheck, Target, TrendingUp, Eye, Brain, Users2, MessageCircle, Lightbulb, Globe, Heart, AlertTriangle, School, Building2, BookOpen, Video, Headphones, Download, Share2, Mail, PhoneCall, Briefcase, Factory, ShoppingBag, Truck, Zap, Lock, EyeOff, CheckSquare, AlertCircle, ArrowRight, DollarSign, CalendarDays, Clipboard, Wrench } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function CommercialHoardingCleanupPage() {
  return (
    <>
      <SEOHead
        title="Commercial Hoarding Cleanup Jacksonville | Business & Workplace Hoarding Services"
        description="Professional commercial hoarding cleanup in Jacksonville for businesses, offices, warehouses, and retail stores. We handle workplace hoarding situations with discretion, efficiency, and minimal business disruption. Get commercial cleanup today!"
        keywords="commercial hoarding cleanup Jacksonville, business hoarding cleanup, workplace hoarding, office hoarding cleanup, warehouse hoarding, retail store hoarding Florida"
        canonical="/commercial-hoarding-cleanup"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Building className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Commercial Hoarding Cleanup Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hoarding cleanup services for businesses, offices, warehouses, and retail stores. We handle workplace hoarding situations with discretion, efficiency, and minimal business disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Business Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Business Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-amber-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Building className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Business Hoarding Cleanup • Office Cleanouts • Warehouse Hoarding • Retail Store Cleanup • Minimal Disruption • Professional Discretion
            </span>
          </div>
        </div>
      </section>

      {/* Understanding Commercial Hoarding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understanding Commercial Hoarding
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Commercial hoarding affects businesses of all sizes, creating safety hazards, productivity issues, and potential legal liabilities. Our specialized services address these workplace challenges with professional expertise and business-focused solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety Hazards
              </h3>
              <p className="text-gray-600 mb-4">
                Workplace hoarding creates fire hazards, blocked exits, and unsafe working conditions that violate safety regulations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Fire code violations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Blocked emergency exits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Trip and fall hazards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Air quality issues
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Productivity Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Cluttered workspaces reduce efficiency, increase stress, and negatively impact employee morale and performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Reduced efficiency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Employee stress
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Lost productivity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Customer perception
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Legal Liabilities
              </h3>
              <p className="text-gray-600 mb-4">
                Businesses face potential legal issues including OSHA violations, insurance problems, and liability for workplace accidents.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  OSHA violations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Insurance issues
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Accident liability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Regulatory compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Commercial Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive commercial hoarding services address workplace hoarding situations across various business environments with specialized expertise and minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Cleanouts</h3>
              <p className="text-gray-600 mb-4">
                Professional cleanup of office spaces, cubicles, and workstations affected by hoarding behaviors.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Individual workstations</li>
                <li>• Conference rooms</li>
                <li>• Storage areas</li>
                <li>• Break rooms</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warehouse Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Large-scale cleanup of warehouse facilities, storage units, and industrial spaces with hoarding issues.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Storage facilities</li>
                <li>• Industrial spaces</li>
                <li>• Loading docks</li>
                <li>• Equipment areas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail Store Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Cleanup of retail environments including stockrooms, display areas, and customer-facing spaces.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Stockrooms</li>
                <li>• Display areas</li>
                <li>• Back offices</li>
                <li>• Storage closets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Buildings</h3>
              <p className="text-gray-600 mb-4">
                Cleanup of professional office buildings, medical offices, and service businesses with hoarding issues.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical offices</li>
                <li>• Law firms</li>
                <li>• Consulting firms</li>
                <li>• Service businesses</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment & Machinery</h3>
              <p className="text-gray-600 mb-4">
                Cleanup around industrial equipment, machinery, and operational areas to restore safety and functionality.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Production areas</li>
                <li>• Equipment access</li>
                <li>• Maintenance spaces</li>
                <li>• Safety zones</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <EyeOff className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discrete Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Professional, discrete cleanup services that maintain business confidentiality and minimize employee awareness.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Confidential service</li>
                <li>• Minimal disruption</li>
                <li>• Professional discretion</li>
                <li>• Employee privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commercial Cleanup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven business-focused process designed to minimize disruption, maintain confidentiality, and restore workplace safety and productivity efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Assessment</h3>
              <p className="text-gray-600 text-sm">
                Confidential assessment of the workplace situation, safety concerns, and business impact evaluation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600 text-sm">
                Development of a cleanup plan that minimizes business disruption and maintains operational continuity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discrete Execution</h3>
              <p className="text-gray-600 text-sm">
                Professional cleanup execution with minimal employee awareness and maximum efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Restoration</h3>
              <p className="text-gray-600 text-sm">
                Complete restoration of workplace safety, compliance, and operational functionality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevention Support</h3>
              <p className="text-gray-600 text-sm">
                Ongoing support and prevention strategies to maintain clean, safe, and productive work environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Business Benefits of Professional Cleanup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional commercial hoarding cleanup delivers measurable benefits that improve workplace safety, productivity, and business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Restore workplace safety and ensure compliance with OSHA regulations and safety standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  OSHA compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Fire safety restoration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Emergency access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Hazard elimination
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Productivity Improvement
              </h3>
              <p className="text-gray-600 mb-4">
                Increase workplace efficiency, employee morale, and overall business productivity.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Improved efficiency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Better morale
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Faster workflows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Enhanced focus
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cost Savings
              </h3>
              <p className="text-gray-600 mb-4">
                Reduce insurance costs, avoid regulatory fines, and prevent expensive workplace accidents.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Lower insurance costs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Avoid fines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Prevent accidents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Reduce liability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Commercial Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Commercial Hoarding Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just cleanup specialists - we're business partners who understand workplace dynamics, safety requirements, and operational continuity needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of workplace dynamics, safety regulations, and business operational requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeOff className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Discretion</h3>
              <p className="text-gray-600">
                Complete confidentiality and professional discretion to protect business reputation and employee privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Minimal Disruption</h3>
              <p className="text-gray-600">
                Strategic planning and execution to minimize business disruption and maintain operational continuity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Focus</h3>
              <p className="text-gray-600">
                Primary focus on workplace safety, OSHA compliance, and elimination of workplace hazards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful commercial cleanups with measurable improvements in safety and productivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                Continued support and prevention strategies to maintain clean, safe, and productive work environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Commercial Cleanup?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let workplace hoarding affect your business safety, productivity, or compliance. Our professional team is ready to restore your workplace efficiently and discreetly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Business Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-amber-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Building className="w-5 h-5" />
              Schedule Business Consultation
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
              We offer comprehensive hoarding services beyond just commercial cleanup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <Home className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
                  Residential Cleanup
                </h3>
                <p className="text-gray-600">
                  Professional hoarding cleanup for homes and residential properties with family support services.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-intervention" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <UserCheck className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
                  Hoarding Intervention
                </h3>
                <p className="text-gray-600">
                  Professional hoarding intervention with assessment, planning, and ongoing support.
                </p>
              </div>
            </Link>

            <Link href="/emergency-hoarding-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency hoarding cleanup for crisis situations requiring immediate intervention.
                </p>
              </div>
            </Link>

            <Link href="/family-hoarding-support" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <Users2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
                  Family Support
                </h3>
                <p className="text-gray-600">
                  Comprehensive family support services including intervention strategies and support groups.
                </p>
              </div>
            </Link>

            <Link href="/hoarding-education" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
                  Education & Prevention
                </h3>
                <p className="text-gray-600">
                  Educational programs and prevention strategies to help businesses and families address hoarding.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition duration-300">
                  <Star className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition duration-300">
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
