import Link from 'next/link'
import { Shield, AlertTriangle, Wrench, UserCheck, Phone, MapPin, Clock, Star, CheckCircle, Biohazard, Safety } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function BiohazardHoardingCleanupPage() {
  return (
    <>
      <SEOHead
        title="Biohazard Hoarding Cleanup Jacksonville | Contamination Cleanup | Safety Protocols (904) 456-3851"
        description="Jacksonville biohazard hoarding cleanup service. Professional contamination cleanup, safety protocols, biohazard assessment. Licensed, insured, certified biohazard cleanup. Call (904) 456-3851 for immediate service."
        keywords="biohazard hoarding cleanup Jacksonville, contamination hoarding cleanup Jacksonville, biohazard cleanup Jacksonville, hoarding contamination cleanup Jacksonville, biohazard assessment Jacksonville, safety protocols Jacksonville, contamination protocols Jacksonville, biohazard safety Jacksonville, hoarding health hazards Jacksonville, contamination removal Jacksonville"
        canonical="/biohazard-hoarding-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Biohazard className="w-16 h-16 text-red-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Biohazard Hoarding Cleanup
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-red-300 font-bold">PROFESSIONAL CONTAMINATION CLEANUP</span><br />
                Specialized biohazard cleanup for hoarding situations with contamination and health hazards.
                Licensed, certified, and equipped for the most challenging cleanup scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1-904-456-3851"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (904) 456-3851</span>
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Biohazard Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Alert */}
        <section className="bg-red-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                ⚠️ BIOHAZARD CLEANUP REQUIRES SPECIALIZED EQUIPMENT & TRAINING ⚠️
              </span>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Our certified technicians are equipped with proper PPE and follow strict safety protocols
            </p>
          </div>
        </section>

        {/* Biohazard Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Biohazard Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We handle all types of biohazard contamination with professional equipment and strict safety protocols
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Biological Contamination */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Biohazard className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Biological Contamination
                </h3>
                <p className="text-gray-600 mb-4">
                  Cleanup of biological hazards, bodily fluids, and organic contamination.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Bodily fluid cleanup</li>
                  <li>• Organic contamination removal</li>
                  <li>• Pathogen decontamination</li>
                  <li>• Health hazard assessment</li>
                </ul>
              </div>

              {/* Chemical Contamination */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Chemical Contamination
                </h3>
                <p className="text-gray-600 mb-4">
                  Removal of chemical spills, hazardous materials, and toxic substances.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Chemical spill cleanup</li>
                  <li>• Hazardous material removal</li>
                  <li>• Toxic substance decontamination</li>
                  <li>• Safety protocol implementation</li>
                </ul>
              </div>

              {/* Mold & Mildew */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mold & Mildew
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional mold remediation and mildew removal with health safety focus.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mold assessment & testing</li>
                  <li>• Mildew removal</li>
                  <li>• Air quality improvement</li>
                  <li>• Prevention strategies</li>
                </ul>
              </div>

              {/* Sewage & Water Damage */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sewage & Water Damage
                </h3>
                <p className="text-gray-600 mb-4">
                  Emergency cleanup of sewage backups and contaminated water damage.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Sewage backup cleanup</li>
                  <li>• Contaminated water removal</li>
                  <li>• Structural drying</li>
                  <li>• Sanitization services</li>
                </ul>
              </div>

              {/* Animal Waste & Contamination */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Animal Waste & Contamination
                </h3>
                <p className="text-gray-600 mb-4">
                  Cleanup of animal waste, urine, and related contamination issues.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Animal waste removal</li>
                  <li>• Urine contamination cleanup</li>
                  <li>• Odor elimination</li>
                  <li>• Health hazard assessment</li>
                </ul>
              </div>

              {/* Medical Waste */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <Safety className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Medical Waste
                </h3>
                <p className="text-gray-600 mb-4">
                  Proper disposal and cleanup of medical waste and sharps.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Medical waste disposal</li>
                  <li>• Sharps cleanup</li>
                  <li>• Pharmaceutical disposal</li>
                  <li>• Compliance documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Safety Protocols & Equipment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow strict safety protocols and use professional-grade equipment for all biohazard cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Equipment</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Personal Protective Equipment (PPE)</h4>
                      <p className="text-gray-600">Full-body suits, respirators, gloves, and safety footwear</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">HEPA Filtration Systems</h4>
                      <p className="text-gray-600">Advanced air filtration to remove contaminants and pathogens</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Cleaning Agents</h4>
                      <p className="text-gray-600">Hospital-grade disinfectants and sanitizers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Containment Systems</h4>
                      <p className="text-gray-600">Negative air pressure systems and containment barriers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Protocols</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Risk Assessment</h4>
                      <p className="text-gray-600">Comprehensive evaluation before beginning any cleanup</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Containment Procedures</h4>
                      <p className="text-gray-600">Isolation of affected areas to prevent cross-contamination</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Decontamination Process</h4>
                      <p className="text-gray-600">Multi-stage cleaning and sanitization procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Waste Disposal</h4>
                      <p className="text-gray-600">Proper disposal of contaminated materials and waste</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Biohazard Cleanup Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional biohazard cleanup requires expertise, equipment, and compassion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
                <p className="text-gray-600">Fully licensed and certified for biohazard cleanup operations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                <p className="text-gray-600">State-of-the-art equipment and safety gear for all cleanup scenarios</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trained Technicians</h3>
                <p className="text-gray-600">Certified technicians with specialized biohazard cleanup training</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Service</h3>
                <p className="text-gray-600">Understanding and respectful approach to sensitive situations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Biohazard Cleanup?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't risk your health with DIY cleanup. Our certified professionals handle biohazard situations safely and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Quote</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
