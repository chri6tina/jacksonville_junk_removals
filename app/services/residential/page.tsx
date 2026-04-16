import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Home, DollarSign, Star, Users, FileText, Sofa, Package, Warehouse, Leaf, Bath, Refrigerator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Junk Removal Jacksonville | Home Cleanout & Cleanup Services (904) 456-3851',
  description: 'Professional residential junk removal services in Jacksonville, Florida. Home cleanouts, garage organization, moving cleanup, and residential property maintenance. Licensed, insured, eco-friendly. Call (904) 456-3851',
  keywords: 'residential junk removal Jacksonville, home cleanout Jacksonville, garage cleanup Jacksonville, moving cleanup Jacksonville, residential cleanup Jacksonville, home junk removal Florida',
  alternates: {
    canonical: '/services/residential',
  },
}

export default function ResidentialJunkRemovalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Home className="w-16 h-16 text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Residential Junk Removal Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-blue-300 font-bold">PROFESSIONAL & COMPASSIONATE</span><br />
                Complete home cleanouts, garage organization, and residential property cleanup.<br />
                Making your home clean, organized, and clutter-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Residential Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 PROFESSIONAL RESIDENTIAL JUNK REMOVAL SERVICES 🏠
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional residential cleanup service
            </p>
          </div>
        </section>

        {/* Residential Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Residential Junk Removal Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive residential cleanup services designed to transform your home from cluttered to clean
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Home Cleanouts */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Home Cleanouts
                </h3>
                <p className="text-gray-600 mb-4">
                  Full home cleanouts for moving, estate sales, or major decluttering projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Room-by-room cleanup</li>
                  <li>• Furniture removal</li>
                  <li>• Personal item handling</li>
                  <li>• Complete property clearing</li>
                </ul>
              </div>

              {/* Garage Cleanout */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Warehouse className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Garage Organization
                </h3>
                <p className="text-gray-600 mb-4">
                  Transform your cluttered garage into an organized, functional space.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Tool organization</li>
                  <li>• Storage solutions</li>
                  <li>• Debris removal</li>
                  <li>• Space optimization</li>
                </ul>
              </div>

              {/* Moving Cleanup */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Moving Preparation
                </h3>
                <p className="text-gray-600 mb-4">
                  Pre-move cleanup and post-move debris removal for smooth transitions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Pre-move decluttering</li>
                  <li>• Post-move cleanup</li>
                  <li>• Donation coordination</li>
                  <li>• Property preparation</li>
                </ul>
              </div>

              {/* Furniture Removal */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Sofa className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Furniture Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional removal of old furniture with donation options for usable items.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Large furniture handling</li>
                  <li>• Donation coordination</li>
                  <li>• Safe removal techniques</li>
                  <li>• Eco-friendly disposal</li>
                </ul>
              </div>

              {/* Appliance Removal */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Refrigerator className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Appliance Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal and disposal of old appliances including refrigerators and washers.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Freon removal</li>
                  <li>• Safe disposal</li>
                  <li>• Recycling options</li>
                  <li>• Same-day service</li>
                </ul>
              </div>

              {/* Yard Waste */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Yard Waste Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Landscaping debris, tree trimmings, and outdoor cleanup services.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Landscaping debris</li>
                  <li>• Tree trimmings</li>
                  <li>• Seasonal cleanup</li>
                  <li>• Composting options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Residential Junk Removal
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that your home is your sanctuary. Our residential services are designed with care and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Full protection for your home and peace of mind during cleanup projects.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">Responsible disposal with recycling and donation options for usable items.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times for urgent cleanup needs and flexible scheduling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transparent Residential Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                No hidden fees, no surprises. Clear pricing for all residential cleanup services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Cleanout</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$150</div>
                <p className="text-gray-600 mb-6">Perfect for single rooms or small areas</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• 1-2 truck loads</li>
                  <li>• 2-3 hour service</li>
                  <li>• Basic cleanup</li>
                  <li>• Same-day available</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-500 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Medium Cleanout</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$300</div>
                <p className="text-gray-600 mb-6">Ideal for garage cleanouts or moving prep</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• 2-3 truck loads</li>
                  <li>• 4-6 hour service</li>
                  <li>• Comprehensive cleanup</li>
                  <li>• Donation coordination</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Cleanout</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$500+</div>
                <p className="text-gray-600 mb-6">Complete home cleanouts and major projects</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• 4+ truck loads</li>
                  <li>• Full-day service</li>
                  <li>• Complete property clearing</li>
                  <li>• Project management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with professional residential junk removal. Free estimates, same-day service, and eco-friendly disposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
              <Link
                href="/estimation"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Use Estimation Tool</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
