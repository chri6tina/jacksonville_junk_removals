import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Lock, Eye, CheckCircle, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Jacksonville Junk Removals | Data Protection & Privacy (904) 456-3851',
  description: 'Jacksonville Junk Removals privacy policy. Learn how we protect your personal information, data collection practices, and your privacy rights. Call (904) 456-3851 for questions.',
  keywords: 'privacy policy Jacksonville junk removal, data protection Jacksonville, personal information Jacksonville, privacy rights Jacksonville, data collection Jacksonville, Jacksonville junk removal privacy',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">YOUR PRIVACY MATTERS TO US</span><br />
                We are committed to protecting your personal information and maintaining your privacy.
                This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Our Commitment to Privacy
                </h2>
                <p className="text-lg text-gray-600">
                  At Jacksonville Junk Removals, we respect your privacy and are committed to protecting your personal information.
                </p>
              </div>

              <div className="space-y-12">
                {/* Information We Collect */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Eye className="w-8 h-8 text-blue-600 mr-3" />
                    Information We Collect
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h4>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li>• Name and contact information (phone, email, address)</li>
                      <li>• Service location and property details</li>
                      <li>• Payment information for billing purposes</li>
                      <li>• Photos and documentation of services provided</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Information</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Service requests and scheduling details</li>
                      <li>• Before and after photos of cleanup work</li>
                      <li>• Customer feedback and testimonials</li>
                      <li>• Service history and preferences</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                    How We Use Your Information
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="text-gray-700 space-y-2">
                      <li>• Provide and schedule junk removal services</li>
                      <li>• Communicate about appointments and service updates</li>
                      <li>• Process payments and maintain billing records</li>
                      <li>• Improve our services and customer experience</li>
                      <li>• Comply with legal and regulatory requirements</li>
                      <li>• Send service reminders and promotional offers (with consent)</li>
                    </ul>
                  </div>
                </div>

                {/* Information Sharing */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Lock className="w-8 h-8 text-red-600 mr-3" />
                    Information Sharing
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• With your explicit consent</li>
                      <li>• To comply with legal requirements or court orders</li>
                      <li>• To protect our rights, property, or safety</li>
                      <li>• With trusted service providers who assist in our operations</li>
                      <li>• In emergency situations where safety is at risk</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-8 h-8 text-purple-600 mr-3" />
                    Data Security
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      We implement appropriate security measures to protect your personal information:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Secure data transmission and storage</li>
                      <li>• Limited access to personal information</li>
                      <li>• Regular security assessments and updates</li>
                      <li>• Employee training on privacy protection</li>
                      <li>• Secure disposal of physical and digital records</li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                    Your Privacy Rights
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      You have the right to:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Access your personal information</li>
                      <li>• Correct inaccurate information</li>
                      <li>• Request deletion of your information</li>
                      <li>• Opt-out of marketing communications</li>
                      <li>• File a complaint about our privacy practices</li>
                      <li>• Request information about data sharing practices</li>
                    </ul>
                  </div>
                </div>

                {/* Cookies and Tracking */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Eye className="w-8 h-8 text-orange-600 mr-3" />
                    Cookies and Website Tracking
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      Our website may use cookies and similar technologies to:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Improve website functionality and user experience</li>
                      <li>• Analyze website traffic and usage patterns</li>
                      <li>• Remember your preferences and settings</li>
                      <li>• Provide personalized content and recommendations</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-8 h-8 text-green-600 mr-3" />
                    Children's Privacy
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                    </p>
                  </div>
                </div>

                {/* Policy Updates */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
                    Policy Updates
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700">
                      We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the effective date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Phone className="w-8 h-8 text-blue-600 mr-3" />
                    Contact Us
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      If you have questions about this privacy policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Phone:</strong> <a href="tel:+1-904-456-3851" className="text-blue-600 hover:text-blue-800">(904) 456-3851</a></p>
                      <p><strong>Email:</strong> <a href="mailto:privacy@jacksonvillejunkremovals.com" className="text-blue-600 hover:text-blue-800">privacy@jacksonvillejunkremovals.com</a></p>
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
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're committed to transparency and protecting your privacy. Contact us if you have any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-904-456-3851"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
