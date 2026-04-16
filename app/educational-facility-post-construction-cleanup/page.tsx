import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Award, Target, Zap, BookOpen, Microscope, Computer, Paintbrush } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Educational Facility Post-Construction Cleanup Jacksonville | School & University Cleanup (904) 456-3851',
  description: 'Jacksonville educational facility post-construction cleanup specialists. Serving schools, universities, training centers, and educational institutions across all Jacksonville areas. Call (904) 456-3851',
  keywords: 'educational facility post-construction cleanup Jacksonville, school construction cleanup Jacksonville, university renovation cleaning Florida, educational institution cleanup Jacksonville FL',
  alternates: {
    canonical: '/educational-facility-post-construction-cleanup',
  },
}

export default function EducationalFacilityPostConstructionCleanupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden py-20 border-b-4 border-secondary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_junk_truck.png"
            alt="Jacksonville Junk Removal Services"
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
                  Educational Facility <br /> <span className="text-blue-300">Post-Construction Cleanup</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">JACKSONVILLE'S EDUCATIONAL CLEANUP SPECIALISTS</span><br /> Serving Schools, Universities & Training Centers Across All Jacksonville Areas<br /> Transform construction sites into pristine, learning-ready environments.
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

        {/* Jacksonville Educational Service Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <GraduationCap className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🎓 JACKSONVILLE EDUCATIONAL FACILITY POST-CONSTRUCTION CLEANUP SPECIALISTS 🎓
              </span>
              <GraduationCap className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Serving All Jacksonville Educational Areas • Student-Safe Protocols
            </p>
          </div>
        </section>

        {/* Jacksonville Educational Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Educational Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive post-construction cleanup across all Jacksonville educational institutions and areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Jacksonville Beach Area Schools */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Waves className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach Area</h3>
                <p className="text-gray-600 mb-4">
                  Beach area schools, colleges, and training facilities
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Beach Area Schools</div>
                  <div>• Coastal Colleges</div>
                  <div>• Training Centers</div>
                  <div>• Educational Facilities</div>
                </div>
              </div>

              {/* Downtown Jacksonville Educational */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Downtown Jacksonville</h3>
                <p className="text-gray-600 mb-4">
                  Urban universities, business schools, and professional training
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Urban Universities</div>
                  <div>• Business Schools</div>
                  <div>• Professional Training</div>
                  <div>• Corporate Education</div>
                </div>
              </div>

              {/* Southside Jacksonville Schools */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Home className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside Jacksonville</h3>
                <p className="text-gray-600 mb-4">
                  Suburban schools, community colleges, and family education centers
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Suburban Schools</div>
                  <div>• Community Colleges</div>
                  <div>• Family Education</div>
                  <div>• Community Centers</div>
                </div>
              </div>

              {/* Mandarin & Orange Park Educational */}
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TreePine className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin & Orange Park</h3>
                <p className="text-gray-600 mb-4">
                  Premium schools, private institutions, and growing educational communities
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div>• Premium Schools</div>
                  <div>• Private Institutions</div>
                  <div>• Growing Communities</div>
                  <div>• Educational Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Facility Types */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Educational Facility Types We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleanup services for all types of educational institutions and facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* K-12 Schools */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">K-12 Schools</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Elementary, middle, and high school construction cleanup with student safety as the top priority.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Student safety protocols</li>
                  <li>• Classroom preparation</li>
                  <li>• Playground safety</li>
                  <li>• Cafeteria readiness</li>
                </ul>
              </div>

              {/* Universities & Colleges */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Universities & Colleges</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Higher education facility cleanup including dormitories, research labs, and academic buildings.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Research lab preparation</li>
                  <li>• Dormitory readiness</li>
                  <li>• Academic building cleanup</li>
                  <li>• Technology protection</li>
                </ul>
              </div>

              {/* Training Centers */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Users className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Training Centers</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Professional training facilities, vocational schools, and skill development centers.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional environment</li>
                  <li>• Equipment protection</li>
                  <li>• Safety compliance</li>
                  <li>• Training readiness</li>
                </ul>
              </div>

              {/* Specialized Educational Facilities */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Microscope className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Specialized Facilities</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Science labs, art studios, computer labs, and specialized educational environments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lab safety protocols</li>
                  <li>• Equipment protection</li>
                  <li>• Specialized cleaning</li>
                  <li>• Safety compliance</li>
                </ul>
              </div>

              {/* Early Childhood Centers */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Home className="w-12 h-12 text-amber-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Early Childhood Centers</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Daycare facilities, preschools, and early learning centers with child-safe protocols.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Child-safe protocols</li>
                  <li>• Play area preparation</li>
                  <li>• Safety standards</li>
                  <li>• Health compliance</li>
                </ul>
              </div>

              {/* Community Education */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Community Education</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Community centers, adult education facilities, and continuing education programs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Community standards</li>
                  <li>• Multi-use facilities</li>
                  <li>• Accessibility compliance</li>
                  <li>• Community integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Educational Projects */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Jacksonville Educational Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successfully completed post-construction cleanup projects across Jacksonville educational institutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Jacksonville Beach Elementary School */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jacksonville Beach Elementary School</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Jacksonville Beach Area</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-600">Elementary School Renovation</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">35,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">4 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Student safety, beach area protocols</span>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: School reopened on schedule with pristine, student-ready classrooms and protected beach area finishes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Downtown Jacksonville University */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Downtown Jacksonville University</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Location:</span>
                    <span className="text-gray-600">Downtown Jacksonville</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Project Type:</span>
                    <span className="text-gray-700">University Research Center</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Size:</span>
                    <span className="text-gray-600">75,000 sq ft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Timeline:</span>
                    <span className="text-gray-600">6 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-700">Special Requirements:</span>
                    <span className="text-gray-600">Research lab safety, urban protocols</span>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mt-4">
                    <p className="text-primary font-semibold">
                      Result: Research center opened with pristine labs, protected equipment, and urban-optimized cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Benefits */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us for Jacksonville Educational Facilities?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized expertise combined with Jacksonville area knowledge and educational standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Safety First</h3>
                <p className="text-gray-600">Comprehensive safety protocols designed specifically for educational environments</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jacksonville Expertise</h3>
                <p className="text-gray-600">Deep understanding of all Jacksonville areas and local educational requirements</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Schedule</h3>
                <p className="text-gray-600">Services designed around academic calendars and educational timelines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="educational-facility"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Educational Facility Post-Construction Cleanup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get instant quotes and student-safe service for your Jacksonville educational project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Educational Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Educational Specialists</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
