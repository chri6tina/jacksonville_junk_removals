import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Lock, Eye, CheckCircle, Phone, Mail, Star } from 'lucide-react'

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
                  Privacy Policy
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">YOUR PRIVACY MATTERS TO US</span><br /> We are committed to protecting your personal information and maintaining your privacy. This policy explains how we collect, use, and safeguard your data.
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
                    <Eye className="w-8 h-8 text-secondary mr-3" />
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
                    <CheckCircle className="w-8 h-8 text-secondary mr-3" />
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
                    <Lock className="w-8 h-8 text-secondary mr-3" />
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
                    <Shield className="w-8 h-8 text-secondary mr-3" />
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
                    <CheckCircle className="w-8 h-8 text-secondary mr-3" />
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
                    <Shield className="w-8 h-8 text-secondary mr-3" />
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
                    <CheckCircle className="w-8 h-8 text-secondary mr-3" />
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
                    <Phone className="w-8 h-8 text-secondary mr-3" />
                    Contact Us
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">
                      If you have questions about this privacy policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Phone:</strong> <a href="tel:+1-904-456-3851" className="text-secondary hover:text-primary">(904) 456-3851</a></p>
                      <p><strong>Email:</strong> <a href="mailto:privacy@jacksonvillejunkremovals.com" className="text-secondary hover:text-primary">privacy@jacksonvillejunkremovals.com</a></p>
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
        <section className="py-20 bg-primary text-white">
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
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (904) 456-3851</span>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
