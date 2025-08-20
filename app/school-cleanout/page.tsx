import Link from 'next/link'
import { GraduationCap, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Wrench, Recycle, AlertTriangle, DollarSign, Users, BookOpen } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function SchoolCleanoutPage() {
  return (
    <>
      <SEOHead
        title="School Cleanout Jacksonville | Educational Facility & Student Safety Expertise"
        description="Professional school cleanout in Jacksonville with educational facility expertise and student safety focus. We handle school cleanup, educational facility cleanout, and academic environment management with licensed crews and specialized expertise. Get a free quote today!"
        keywords="school cleanout Jacksonville, school cleanup, educational facility, student safety, academic environment, educational cleanout Jacksonville"
        canonical="/school-cleanout"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            School Cleanout Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional school cleanout with educational facility expertise and student safety focus. We handle school cleanup, educational facility cleanout, and academic environment management efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Educational Facility • Student Safety • Academic Environment • Same-Day Service Available
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive School Cleanout Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete School Cleanout Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From educational facility expertise to student safety focus, we handle all types of school cleanout with academic environment knowledge and specialized equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Educational Facility Expertise */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Educational Facility Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                Professional understanding of educational facility requirements and academic operational needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Academic standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Educational protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Facility requirements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Safety standards
                </li>
              </ul>
            </div>

            {/* Student Safety Focus */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Student Safety Focus
              </h3>
              <p className="text-gray-600 mb-4">
                Maintain student safety standards during school cleanout and renovation operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Safety protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Hazard prevention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Child protection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Risk management
                </li>
              </ul>
            </div>

            {/* Academic Environment Knowledge */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Academic Environment Knowledge
              </h3>
              <p className="text-gray-600 mb-4">
                Deep understanding of academic environments and educational facility management requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Learning environments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Educational workflows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Academic protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Facility standards
                </li>
              </ul>
            </div>

            {/* Classroom & Equipment Cleanout */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Classroom & Equipment Cleanout
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanout of classrooms, educational equipment, and academic materials during renovation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Classroom furniture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Educational equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Academic materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Learning tools
                </li>
              </ul>
            </div>

            {/* Administrative Area Cleanup */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Administrative Area Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanup of school administrative areas including offices, meeting rooms, and common spaces.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Office spaces
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Meeting rooms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Common areas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Administrative equipment
                </li>
              </ul>
            </div>

            {/* Specialized Equipment Handling */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialized Equipment Handling
              </h3>
              <p className="text-gray-600 mb-4">
                Professional handling of educational equipment and academic facility machinery.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Educational equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Academic machinery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Safe removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Equipment protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our School Cleanout Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our School Cleanout
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local school cleanout experts with educational facility expertise and student safety focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Facility</h3>
              <p className="text-gray-600">
                Professional understanding of educational facility requirements and academic operational needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Safety</h3>
              <p className="text-gray-600">
                Maintain student safety standards during school cleanout and renovation operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Environment</h3>
              <p className="text-gray-600">
                Deep understanding of academic environments and educational facility management requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Classroom & Equipment</h3>
              <p className="text-gray-600">
                Professional cleanout of classrooms, educational equipment, and academic materials during renovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's educational community and school facility requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville schools for our cleanout expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Cleanout Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our School Cleanout Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for efficient, educational facility-focused, and student safety-maintaining school cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your school for educational facility requirements and student safety considerations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed plan considering student safety and educational facility standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes school equipment and furniture with student safety focus.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Cleaning</h3>
              <p className="text-gray-600 text-sm">
                We perform deep cleaning and sanitization for educational facility standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Completion</h3>
              <p className="text-gray-600 text-sm">
                We complete the cleanout and ensure the space meets educational facility standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Educational Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our educational facility expertise and student safety focus benefit Jacksonville schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Safety</h3>
              <p className="text-gray-600 mb-4">
                Maintain student safety standards and protect children during cleanout operations.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Protect students
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Reduce costs associated with safety violations and non-compliance issues.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Save money
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Standards</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with educational facility standards and academic requirements.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Stay compliant
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Environment</h3>
              <p className="text-gray-600 mb-4">
                Optimize learning environments and classroom layouts for improved educational efficiency.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Boost learning
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff Safety</h3>
              <p className="text-gray-600 mb-4">
                Create safer working environments for teachers and educational staff.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Protect your team
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Results</h3>
              <p className="text-gray-600 mb-4">
                Professional school cleanout with guaranteed educational facility expertise.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Quality guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              School Cleanout Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive school cleanout services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal school cleanout with special attention to beach educational considerations and seasonal operations.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban school cleanout with large property access and upscale educational organization.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district school cleanout with careful handling of older buildings and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic building experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood school cleanout with premium service and careful educational protection.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential school cleanout with bulk cleanup and educational project services.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Educational specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban school cleanout with large lot access and family educational organization.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family education experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional School Cleanout?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let school transitions impact your student safety. Our local experts are ready to help with educational facility expertise and student safety focus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-green-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Service
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
              We offer comprehensive cleanup services beyond just school cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/hotel-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hotel Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional hotel cleanout with hospitality industry expertise and guest experience focus.
                </p>
              </div>
            </Link>

            <Link href="/medical-office-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Medical Office Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional medical office cleanout with HIPAA compliance and medical equipment expertise.
                </p>
              </div>
            </Link>

            <Link href="/apartment-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Apartment Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional apartment cleanout with tenant transition expertise and move-out coordination.
                </p>
              </div>
            </Link>

            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/hazardous-waste-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Hazardous Waste
                </h3>
                <p className="text-gray-600">
                  Professional hazardous waste removal with specialized handling and compliance expertise.
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
                  View our complete range of junk removal and cleanup services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
