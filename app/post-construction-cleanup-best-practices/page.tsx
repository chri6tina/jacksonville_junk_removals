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
        <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <BookOpen className="w-16 h-16 text-amber-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Best Practices Guide
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-amber-300 font-bold">INDUSTRY EXPERTISE & COMPLIANCE STANDARDS</span><br />
                Comprehensive guide to post-construction cleanup best practices.<br />
                From healthcare compliance to luxury finish protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guide"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Read Guide</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Get Expert Advice</span>
                </Link>
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
              <div className="bg-red-50 rounded-lg p-8 border-l-4 border-red-500">
                <div className="flex items-center mb-6">
                  <Stethoscope className="w-12 h-12 text-red-600 mr-4" />
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
                <div className="mt-6 pt-4 border-t border-red-200">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Critical Compliance
                  </span>
                </div>
              </div>

              {/* Hospitality Best Practices */}
              <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-500">
                <div className="flex items-center mb-6">
                  <Hotel className="w-12 h-12 text-purple-600 mr-4" />
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
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Luxury Standards
                  </span>
                </div>
              </div>

              {/* Food Service Best Practices */}
              <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-500">
                <div className="flex items-center mb-6">
                  <Utensils className="w-12 h-12 text-green-600 mr-4" />
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
                <div className="mt-6 pt-4 border-t border-green-200">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
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
              <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-blue-600 mr-4" />
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
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
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
                    <Shield className="w-6 h-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">CDC Guidelines</h4>
                      <p className="text-gray-600">Follow Centers for Disease Control cleaning protocols</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-red-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">OSHA Standards</h4>
                      <p className="text-gray-600">Comply with Occupational Safety and Health Administration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-red-600 mr-3 mt-1" />
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
                    <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">FDA Guidelines</h4>
                      <p className="text-gray-600">Follow Food and Drug Administration standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Health Department</h4>
                      <p className="text-gray-600">Meet local health inspection requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-600 mr-3 mt-1" />
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
