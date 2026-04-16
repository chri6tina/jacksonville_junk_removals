import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, BookOpen, Building, Home, Stethoscope, Utensils, Factory, Hotel, GraduationCap, Church, ShoppingBag, Star, Clock, Shield, Award, Users, DollarSign, Calendar, MapPin, CheckCircle, Info, AlertTriangle, Lightbulb, Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Construction Cleanup Best Practices Jacksonville | Industry Guide (904) 456-3851',
  description: 'Post-construction cleanup best practices and industry guidelines for Jacksonville. Learn compliance standards, maintenance tips, and professional advice. Call (904) 456-3851',
  keywords: 'post-construction cleanup best practices Jacksonville, construction cleanup guidelines Jacksonville, cleanup compliance standards Jacksonville, facility maintenance tips Florida',
  alternates: {
    canonical: '/post-construction-cleanup-best-practices',
  },
}

export default function PostConstructionCleanupBestPracticesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Post-Construction Cleanup Best Practices Jacksonville",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Jacksonville"
    },
    {
      "@type": "City",
      "name": "Jacksonville Beach"
    },
    {
      "@type": "City",
      "name": "Orange Park"
    }
  ],
  "description": "Post-construction cleanup best practices and industry guidelines for Jacksonville. Learn compliance standards, maintenance tips, and professional advice. Call (904) 456-3851"
})
        }}
      />
<div className="absolute inset-0 z-0">
          <Image
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
            fill
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-transparent md:bg-gradient-to-r md:from-primary/95 md:via-primary/80 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent md:hidden"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20 mx-auto lg:mx-0">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-secondary fill-secondary drop-shadow-md" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white tracking-wide uppercase ml-2 text-shadow-sm">Top-Rated Local Service</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl">
                  Best Practices Guide
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-amber-300 font-bold">INDUSTRY EXPERTISE & COMPLIANCE STANDARDS</span><br /> Comprehensive guide to post-construction cleanup best practices.<br /> From healthcare compliance to luxury finish protection.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <Link
                  href="tel:+19044563851"
                  className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
                >
                  <Phone className="w-6 h-6 animate-bounce-gentle" />
                  <span>Call (904) 456-3851</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:-translate-y-1"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Guide Navigation */}
        <section id="guide" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industry Best Practices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert guidance for each industry sector and facility type
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Healthcare Best Practices */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-500">
                <div className="flex items-center mb-6">
                  <Stethoscope className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Infection Control</h4>
                      <p className="text-gray-600 text-sm">Use hospital-grade disinfectants and follow CDC guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">HVAC Cleaning</h4>
                      <p className="text-gray-600 text-sm">Thorough duct system cleaning to prevent airborne contaminants</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Documentation</h4>
                      <p className="text-gray-600 text-sm">Maintain detailed cleaning logs for compliance audits</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="bg-secondary/10 border border-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Critical Compliance
                  </span>
                </div>
              </div>

              {/* Hospitality Best Practices */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-purple-500">
                <div className="flex items-center mb-6">
                  <Hotel className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Hospitality</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Finish Protection</h4>
                      <p className="text-gray-600 text-sm">Protect luxury finishes during cleaning process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Guest Experience</h4>
                      <p className="text-gray-600 text-sm">Ensure 5-star presentation standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Timing</h4>
                      <p className="text-gray-600 text-sm">Complete before guest arrival windows</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="bg-secondary/10 border border-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Luxury Standards
                  </span>
                </div>
              </div>

              {/* Food Service Best Practices */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  <Utensils className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Food Service</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Food Safety</h4>
                      <p className="text-gray-600 text-sm">Use food-safe cleaning products and protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Kitchen Equipment</h4>
                      <p className="text-gray-600 text-sm">Thorough cleaning of all food contact surfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Inspection</h4>
                      <p className="text-gray-600 text-sm">Meet all health department requirements</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="bg-secondary/10 border border-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Health Compliant
                  </span>
                </div>
              </div>

              {/* Industrial Best Practices */}
              <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-500">
                <div className="flex items-center mb-6">
                  <Factory className="w-12 h-12 text-orange-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Industrial</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Safety Compliance</h4>
                      <p className="text-gray-600 text-sm">Follow OSHA and industry safety standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Equipment Protection</h4>
                      <p className="text-gray-600 text-sm">Protect sensitive machinery during cleanup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Production Ready</h4>
                      <p className="text-gray-600 text-sm">Ensure facility is ready for immediate production</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-orange-200">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Safety First
                  </span>
                </div>
              </div>

              {/* Educational Best Practices */}
              <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Educational</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Student Safety</h4>
                      <p className="text-gray-600 text-sm">Use child-safe cleaning products</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Technology Protection</h4>
                      <p className="text-gray-600 text-sm">Carefully clean around computers and equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Learning Environment</h4>
                      <p className="text-gray-600 text-sm">Create optimal learning atmosphere</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="bg-secondary/10 border border-secondary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Student Focused
                  </span>
                </div>
              </div>

              {/* Religious Best Practices */}
              <div className="bg-amber-50 rounded-lg p-8 border-l-4 border-amber-500">
                <div className="flex items-center mb-6">
                  <Church className="w-12 h-12 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Religious</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sacred Space Respect</h4>
                      <p className="text-gray-600 text-sm">Maintain reverence during cleaning process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quiet Operations</h4>
                      <p className="text-gray-600 text-sm">Minimize disruption to worship activities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Worship Ready</h4>
                      <p className="text-gray-600 text-sm">Ensure peaceful, clean environment</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-amber-200">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Sacred Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Standards & Regulations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the regulatory requirements for each industry
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Compliance</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CDC Guidelines</h4>
                      <p className="text-gray-600">Follow Centers for Disease Control cleaning protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">OSHA Standards</h4>
                      <p className="text-gray-600">Comply with Occupational Safety and Health Administration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Joint Commission</h4>
                      <p className="text-gray-600">Meet healthcare facility accreditation standards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Food Service Compliance</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">FDA Guidelines</h4>
                      <p className="text-gray-600">Follow Food and Drug Administration standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Department</h4>
                      <p className="text-gray-600">Meet local health inspection requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-secondary mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">HACCP Principles</h4>
                      <p className="text-gray-600">Implement Hazard Analysis Critical Control Points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Post-Cleanup Maintenance Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Keep your facility clean and compliant after our initial cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Daily Maintenance</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regular surface cleaning</li>
                  <li>• Dust and debris removal</li>
                  <li>• Trash and waste disposal</li>
                  <li>• Floor maintenance</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Weekly Tasks</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deep cleaning schedules</li>
                  <li>• Equipment maintenance</li>
                  <li>• Supply restocking</li>
                  <li>• Quality inspections</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Prevention</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regular inspections</li>
                  <li>• Prompt issue resolution</li>
                  <li>• Staff training</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Expert Tips & Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional advice from our experienced cleanup specialists
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Award className="w-12 h-12 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Timing is Everything</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Schedule your post-construction cleanup at the right time to avoid delays and ensure 
                  optimal results. Consider your facility's operational schedule and compliance deadlines.
                </p>
                <div className="bg-amber-100 rounded-lg p-4">
                  <p className="text-amber-800 font-semibold">
                    💡 Pro Tip: Plan cleanup 2-3 days before your facility needs to be operational 
                    to allow for final inspections and any necessary adjustments.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Team Coordination</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Coordinate with your construction team, facility managers, and our cleanup specialists 
                  to ensure seamless project completion and handover.
                </p>
                <div className="bg-amber-100 rounded-lg p-4">
                  <p className="text-amber-800 font-semibold">
                    💡 Pro Tip: Establish clear communication channels and designate a single point 
                    of contact for all cleanup-related decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Expert Guidance?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Our specialists are here to help you implement these best practices and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Expert Advice</span>
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">All Services</h3>
                  <p className="text-gray-600 text-sm">Complete service overview</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-case-studies" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Award className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">Case Studies</h3>
                  <p className="text-gray-600 text-sm">Real project examples</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup-portfolio" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <ImageIcon className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600">Portfolio</h3>
                  <p className="text-gray-600 text-sm">View our work</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
