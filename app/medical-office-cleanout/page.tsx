import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, Building, CheckCircle, Wrench, DollarSign, Heart } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function MedicalOfficeCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Medical Office Cleanout Jacksonville | Healthcare Facility Cleanup | Medical Equipment Removal"
        description="Jacksonville medical office cleanout and healthcare facility cleanup services. Professional medical equipment removal, office furniture disposal, and medical waste cleanup. HIPAA compliant, licensed, and insured. Call (904) 456-3851 for immediate service."
        keywords="medical office cleanout Jacksonville, healthcare facility cleanup Jacksonville, medical equipment removal Jacksonville, medical office furniture disposal Jacksonville, medical waste cleanup Jacksonville, HIPAA compliant cleanup Jacksonville, medical office Jacksonville, healthcare cleanup Jacksonville, medical facility Jacksonville, Jacksonville medical services"
        canonical="https://jacksonvillejunkremovals.com/medical-office-cleanout"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Medical Office Cleanout Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Professional medical office cleanout and healthcare facility cleanup. 
                HIPAA compliant, licensed, and insured for medical equipment removal and office cleanup in Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Medical Office Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏥 HIPAA COMPLIANT MEDICAL OFFICE CLEANOUT SERVICES 🏥
              </span>
              <Heart className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional medical office cleanout and healthcare facility cleanup
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Medical Office Cleanout Services in Jacksonville
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive medical office cleanout and healthcare facility cleanup for all types of medical practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Medical Equipment Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Medical Equipment Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal and disposal of medical equipment including exam tables, diagnostic equipment, and medical devices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Exam table removal</li>
                  <li>• Diagnostic equipment</li>
                  <li>• Medical devices</li>
                  <li>• Safe disposal</li>
                </ul>
              </div>

              {/* Office Furniture Disposal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Building className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Furniture Disposal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete removal of office furniture including desks, chairs, filing cabinets, and waiting room furniture.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Desk and chair removal</li>
                  <li>• Filing cabinet disposal</li>
                  <li>• Waiting room furniture</li>
                  <li>• Reception area cleanup</li>
                </ul>
              </div>

              {/* Medical Waste Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Medical Waste Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional cleanup of medical waste and hazardous materials following safety protocols.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hazardous material removal</li>
                  <li>• Safety protocol compliance</li>
                  <li>• Medical waste disposal</li>
                  <li>• Biohazard cleanup</li>
                </ul>
              </div>

              {/* HIPAA Compliant Service */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  HIPAA Compliant Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete HIPAA compliance during cleanout to protect patient privacy and medical information.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Patient privacy protection</li>
                  <li>• Medical record security</li>
                  <li>• HIPAA compliance</li>
                  <li>• Confidential disposal</li>
                </ul>
              </div>

              {/* Fast Turnaround */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast Turnaround Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick turnaround times to minimize disruption to medical practice operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Same-day service</li>
                  <li>• Quick turnaround</li>
                  <li>• Minimal disruption</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </div>

              {/* Cost-Effective Solutions */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cost-Effective Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Competitive pricing for medical office cleanout services to maximize your budget efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Competitive pricing</li>
                  <li>• Volume discounts</li>
                  <li>• No hidden fees</li>
                  <li>• Free estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Medical Office Cleanout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Jacksonville Junk Removals for Medical Office Cleanout?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're your local Jacksonville neighbors with medical office cleanout experience and HIPAA compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Medical Office Cleanout Experience
                      </h3>
                      <p className="text-gray-600">
                        We have extensive experience with medical office cleanout in Jacksonville and understand healthcare facility requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        HIPAA Compliance
                      </h3>
                      <p className="text-gray-600">
                        Complete HIPAA compliance during cleanout to protect patient privacy and medical information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during medical office cleanout operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and tools to handle any size medical office cleanout job efficiently and safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Medical Office Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Professional Medical Office Cleanout?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get your medical office ready for renovation or closure with our HIPAA compliant cleanup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-blue-500 hover:bg-blue-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Get Free Estimate</span>
              </Link>
            </div>
            <p className="mt-6 text-blue-200">
              HIPAA compliant medical office cleanout services for healthcare facilities and medical practices
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We also provide these related commercial and office cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/commercial-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Commercial Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Commercial property and business cleanup
                </p>
              </Link>

              <Link
                href="/office-furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Office Furniture
                </h3>
                <p className="text-sm text-gray-600">
                  Professional office furniture removal
                </p>
              </Link>

              <Link
                href="/retail-store-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Retail Store Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Retail store and commercial space cleanup
                </p>
              </Link>

              <Link
                href="/foreclosure-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Building className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Foreclosure Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Bank owned property and foreclosure cleanup
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
