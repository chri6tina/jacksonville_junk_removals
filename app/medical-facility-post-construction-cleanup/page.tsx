import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Stethoscope, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, AlertTriangle, Microscope, Heart, Syringe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical Facility Post-Construction Cleanup Jacksonville | Healthcare Compliance Cleaning (904) 456-3851',
  description: 'Professional medical facility post-construction cleanup in Jacksonville. Healthcare compliance cleaning, sterilization protocols, OSHA standards. Free estimates, certified technicians. Call (904) 456-3851',
  keywords: 'medical facility post-construction cleanup Jacksonville, healthcare construction cleanup Jacksonville, hospital construction cleanup Jacksonville, medical office construction cleaning Jacksonville, healthcare compliance cleaning Florida',
  alternates: {
    canonical: '/medical-facility-post-construction-cleanup',
  },
}

export default function MedicalFacilityPostConstructionCleanupPage() {
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
                  Medical Facility Post-Construction Cleanup
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">JACKSONVILLE'S #1 HEALTHCARE CONSTRUCTION CLEANUP SERVICE</span><br /> Specialized cleaning for hospitals, clinics, and medical facilities.<br /> Healthcare compliance, sterilization protocols, and OSHA standards.
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

        {/* Service Alert */}
        <section className="bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <p className="text-yellow-800 font-semibold text-lg">
                <strong>Healthcare Compliance Required:</strong> All medical facility cleanups follow strict sterilization protocols and meet OSHA, CDC, and Joint Commission standards.
              </p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional medical facility construction cleanup with healthcare compliance guarantees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Medical Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Microscope className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Medical Cleanup</h3>
                  <p className="text-gray-600">Small medical offices & clinics</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$2.50</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Construction debris removal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Surface cleaning & sanitization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Healthcare compliance verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic sterilization protocols</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Standard Medical Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-secondary/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Medical Cleanup</h3>
                  <p className="text-gray-600">Hospitals & medical centers</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$3.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete construction cleanup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced sterilization protocols</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>OSHA & CDC compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Joint Commission standards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Air quality testing</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>

              {/* Premium Medical Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <div className="text-center mb-6">
                  <Syringe className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Medical Cleanup</h3>
                  <p className="text-gray-600">Surgical suites & sterile environments</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">$5.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Complete sterile environment prep</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced HEPA filtration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Microbial testing & validation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>FDA compliance certification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Post-cleanup validation report</span>
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-colors duration-200 block text-center"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Compliance Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Compliance & Safety
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our medical facility cleanup meets the highest healthcare industry standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">OSHA Compliance</h3>
                </div>
                <p className="text-gray-600">
                  Full compliance with Occupational Safety and Health Administration standards for healthcare environments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Microscope className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">CDC Guidelines</h3>
                </div>
                <p className="text-gray-600">
                  Following Centers for Disease Control and Prevention guidelines for healthcare facility cleaning.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Joint Commission</h3>
                </div>
                <p className="text-gray-600">
                  Meeting Joint Commission accreditation standards for healthcare facility cleanliness.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">EPA Registered</h3>
                </div>
                <p className="text-gray-600">
                  Using EPA-registered disinfectants and cleaning products approved for healthcare use.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">HEPA Filtration</h3>
                </div>
                <p className="text-gray-600">
                  Advanced HEPA filtration systems for air quality control in sensitive medical environments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <CheckSquare className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Validation Testing</h3>
                </div>
                <p className="text-gray-600">
                  Post-cleanup testing and validation to ensure compliance with healthcare standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Facility Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Medical Facility Types We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized cleaning for all types of healthcare construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Building className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospitals</h3>
                <p className="text-gray-600">
                  Full-service hospitals, emergency rooms, and medical centers
                </p>
              </div>

              <div className="text-center">
                <Stethoscope className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Clinics</h3>
                <p className="text-gray-600">
                  Outpatient clinics, urgent care centers, and specialty practices
                </p>
              </div>

              <div className="text-center">
                <Syringe className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Surgical Centers</h3>
                <p className="text-gray-600">
                  Ambulatory surgical centers and operating room suites
                </p>
              </div>

              <div className="text-center">
                <Microscope className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Laboratories</h3>
                <p className="text-gray-600">
                  Medical laboratories, research facilities, and testing centers
                </p>
              </div>

              <div className="text-center">
                <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dental Offices</h3>
                <p className="text-gray-600">
                  Dental practices, orthodontic offices, and oral surgery centers
                </p>
              </div>

              <div className="text-center">
                <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rehabilitation Centers</h3>
                <p className="text-gray-600">
                  Physical therapy, occupational therapy, and rehabilitation facilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Medical Facility Cleanup?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Healthcare Certified Technicians</h3>
                    <p className="text-gray-600">
                      Our team is trained in healthcare facility cleaning protocols and safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compliance Guarantee</h3>
                    <p className="text-gray-600">
                      We guarantee compliance with all healthcare industry standards and regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">
                      Available for emergency medical facility cleanup when time is critical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Insurance & Bonding</h3>
                    <p className="text-gray-600">
                      Fully insured and bonded for medical facility work with healthcare-specific coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Documentation & Reports</h3>
                    <p className="text-gray-600">
                      Complete documentation of cleaning procedures and compliance verification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Jacksonville Service</h3>
                    <p className="text-gray-600">
                      Fast response times and local expertise in Jacksonville healthcare regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Healthcare-Compliant Construction Cleanup?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get your medical facility ready for patients with our professional post-construction cleanup service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/commercial-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Building className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Commercial Post-Construction</h3>
                  <p className="text-gray-600 text-sm">Office buildings and commercial facilities</p>
                </div>
              </Link>
              
              <Link href="/residential-post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Home className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">Residential Post-Construction</h3>
                  <p className="text-gray-600 text-sm">New homes and renovation projects</p>
                </div>
              </Link>
              
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <Wrench className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary">General Post-Construction</h3>
                  <p className="text-gray-600 text-sm">All types of construction cleanup</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
