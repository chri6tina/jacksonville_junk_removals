import Link from 'next/link'
import { FileText, CheckCircle, AlertTriangle, Shield, Phone, Mail, Clock } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Jacksonville Junk Removals | Service Agreement & Policies (904) 456-3851"
        description="Jacksonville Junk Removals terms of service. Read our service agreement, policies, and terms for junk removal services. Call (904) 456-3851 for questions about our terms."
        keywords="terms of service Jacksonville junk removal, service agreement Jacksonville, junk removal policies Jacksonville, service terms Jacksonville, Jacksonville junk removal agreement"
        canonical="/terms"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FileText className="w-16 h-16 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-green-300 font-bold">SERVICE AGREEMENT & POLICIES</span><br />
                These terms govern our junk removal services and outline the agreement between
                Jacksonville Junk Removals and our customers.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Service Agreement
                </h2>
                <p className="text-lg text-gray-600">
                  By using our services, you agree to these terms and conditions.
                </p>
              </div>

              <div className="space-y-12">
                {/* Acceptance of Terms */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    Acceptance of Terms
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      By scheduling or using our junk removal services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>
                </div>

                {/* Service Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-8 h-8 text-blue-600 mr-3" />
                    Service Description
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Jacksonville Junk Removals provides professional junk removal and cleanup services including:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Residential and commercial junk removal</li>
                      <li>• Hoarding cleanup and intervention services</li>
                      <li>• Post-construction cleanup</li>
                      <li>• Estate and foreclosure cleanouts</li>
                      <li>• Emergency cleanup services</li>
                      <li>• Specialized cleanup (biohazard, construction debris, etc.)</li>
                    </ul>
                  </div>
                </div>

                {/* Service Scheduling */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="w-8 h-8 text-orange-600 mr-3" />
                    Service Scheduling & Cancellation
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Scheduling</h4>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li>• Services are scheduled based on availability</li>
                      <li>• We provide estimated arrival windows</li>
                      <li>• Same-day service available for emergencies</li>
                      <li>• Weekend and evening appointments available</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 24-hour notice required for cancellations</li>
                      <li>• Late cancellations may incur a fee</li>
                      <li>• Emergency situations handled case-by-case</li>
                      <li>• Weather-related cancellations are free</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Responsibilities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
                    Customer Responsibilities
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      To ensure safe and efficient service, customers must:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Provide clear access to the work area</li>
                      <li>• Remove pets and secure animals</li>
                      <li>• Identify any hazardous materials or special items</li>
                      <li>• Be present or available during scheduled service</li>
                      <li>• Provide accurate information about items to be removed</li>
                      <li>• Ensure safe working conditions for our crew</li>
                    </ul>
                  </div>
                </div>

                {/* Prohibited Items */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                    Prohibited Items
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      For safety and legal reasons, we cannot remove:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Hazardous materials (chemicals, paint, batteries)</li>
                      <li>• Medical waste or sharps</li>
                      <li>• Explosives or firearms</li>
                      <li>• Radioactive materials</li>
                      <li>• Asbestos-containing materials</li>
                      <li>• Items requiring special disposal permits</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Contact us for guidance on proper disposal of these items.
                    </p>
                  </div>
                </div>

                {/* Pricing & Payment */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                    Pricing & Payment
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Pricing</h4>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li>• Free estimates provided for most services</li>
                      <li>• Pricing based on volume, type, and location</li>
                      <li>• Additional fees for special handling or disposal</li>
                      <li>• Emergency service may include premium rates</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Payment</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Payment due upon completion of service</li>
                      <li>• We accept cash, checks, and major credit cards</li>
                      <li>• Commercial accounts may qualify for net terms</li>
                      <li>• Receipts provided for all payments</li>
                    </ul>
                  </div>
                </div>

                {/* Liability & Insurance */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-8 h-8 text-purple-600 mr-3" />
                    Liability & Insurance
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Insurance</h4>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li>• We carry comprehensive liability insurance</li>
                      <li>• Workers' compensation coverage for our employees</li>
                      <li>• Property damage protection during service</li>
                      <li>• Insurance certificates available upon request</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Liability</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• We are not liable for pre-existing damage</li>
                      <li>• Customer must disclose known hazards</li>
                      <li>• We take reasonable care to prevent damage</li>
                      <li>• Claims must be reported within 24 hours</li>
                    </ul>
                  </div>
                </div>

                {/* Disposal & Environmental */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    Disposal & Environmental Responsibility
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      We are committed to environmentally responsible disposal:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Items are sorted for recycling when possible</li>
                      <li>• Donation of usable items to local charities</li>
                      <li>• Proper disposal at licensed facilities</li>
                      <li>• Compliance with environmental regulations</li>
                      <li>• Documentation of disposal methods available</li>
                    </ul>
                  </div>
                </div>

                {/* Service Guarantee */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                    Service Guarantee
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      We stand behind our work with a satisfaction guarantee:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 100% satisfaction guarantee on all services</li>
                      <li>• If you're not satisfied, we'll make it right</li>
                      <li>• No additional charges for rework</li>
                      <li>• Customer feedback always welcome</li>
                    </ul>
                  </div>
                </div>

                {/* Privacy & Data */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    Privacy & Data Protection
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      We protect your privacy and personal information. Please review our <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link> for details on how we collect, use, and protect your data.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-8 h-8 text-orange-600 mr-3" />
                    Changes to Terms
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Phone className="w-8 h-8 text-blue-600 mr-3" />
                    Contact Information
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      For questions about these terms or our services:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Phone:</strong> <a href="tel:+1-904-456-3851" className="text-blue-600 hover:text-blue-800">(904) 456-3851</a></p>
                      <p><strong>Email:</strong> <a href="mailto:info@jacksonvillejunkremovals.com" className="text-blue-600 hover:text-blue-800">info@jacksonvillejunkremovals.com</a></p>
                      <p><strong>Address:</strong> Jacksonville, FL</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-sm text-gray-500">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're here to help clarify any questions about our service terms and policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
