import Link from 'next/link'
import { AlertTriangle, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Zap, Recycle, Package, Wrench, DollarSign, Users } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HazardousWasteRemovalPage() {
  return (
    <>
      <SEOHead
        title="Hazardous Waste Removal Jacksonville | Specialized Handling & Compliance"
        description="Professional hazardous waste removal in Jacksonville with specialized handling and compliance expertise. We handle chemicals, electronics, medical waste, and hazardous materials with licensed crews and safety protocols. Get a free quote today!"
        keywords="hazardous waste removal Jacksonville, chemical disposal, medical waste removal, electronics disposal, hazardous material cleanup, compliance expertise Jacksonville"
        canonical="/hazardous-waste-removal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Hazardous Waste Removal Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional hazardous waste removal with specialized handling and compliance expertise. We handle chemicals, electronics, medical waste, and hazardous materials safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Specialized Handling • Compliance Expertise • Licensed Crews • Safety Protocols
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Hazardous Waste Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Hazardous Waste Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From chemicals to electronics, we handle all types of hazardous waste with specialized handling and compliance expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chemical Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Chemical Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of chemical waste including cleaning products, solvents, and industrial chemicals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Cleaning products
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Solvents & thinners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Industrial chemicals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Paint & coatings
                </li>
              </ul>
            </div>

            {/* Electronics & E-Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Electronics & E-Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of electronic waste including computers, TVs, and electronic devices.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Computers & laptops
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  TVs & monitors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Cell phones
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Electronic devices
                </li>
              </ul>
            </div>

            {/* Medical Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Medical Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of medical waste including sharps, medications, and medical supplies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Sharps & needles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Expired medications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Medical supplies
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Biohazard materials
                </li>
              </ul>
            </div>

            {/* Paint & Coatings */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Paint & Coatings
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of paint, coatings, and related materials with proper handling.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Latex paint
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Oil-based paint
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Paint thinners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Stains & varnishes
                </li>
              </ul>
            </div>

            {/* Automotive Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Automotive Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of automotive waste including oil, antifreeze, and automotive chemicals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Motor oil
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Antifreeze
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Brake fluid
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Automotive chemicals
                </li>
              </ul>
            </div>

            {/* Industrial Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industrial Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of industrial waste including manufacturing byproducts and industrial chemicals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Manufacturing waste
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Industrial chemicals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Process waste
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  Contaminated materials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Hazardous Waste Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Hazardous Waste Removal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local hazardous waste experts with specialized handling and compliance expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Handling</h3>
              <p className="text-gray-600">
                Professional handling of hazardous materials with proper safety protocols and equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of federal, state, and local hazardous waste regulations and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Full licensing and insurance coverage for all hazardous waste removal services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Response</h3>
              <p className="text-gray-600">
                Fast response times for urgent hazardous waste removal and emergency situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's hazardous waste regulations and disposal facilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville businesses for our hazardous waste expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hazardous Waste Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Hazardous Waste Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for safe, compliant, and specialized hazardous waste removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your hazardous waste type, quantity, and compliance requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed removal plan with proper safety protocols and compliance measures.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes hazardous waste using specialized equipment and safety protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proper Disposal</h3>
              <p className="text-gray-600 text-sm">
                We transport waste to licensed disposal facilities with proper documentation and tracking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 text-sm">
                We provide complete documentation for compliance and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Benefits */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Safety & Compliance Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our specialized hazardous waste removal services benefit Jacksonville businesses and ensure compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Protection</h3>
              <p className="text-gray-600 mb-4">
                Protect your employees, customers, and property from hazardous material exposure.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Keep everyone safe
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with federal, state, and local hazardous waste regulations.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Avoid costly fines
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Control</h3>
              <p className="text-gray-600 mb-4">
                Avoid expensive fines, legal issues, and cleanup costs from improper disposal.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Protect your bottom line
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Responsibility</h3>
              <p className="text-gray-600 mb-4">
                Ensure hazardous materials are disposed of in environmentally responsible ways.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Protect our environment
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Liability Protection</h3>
              <p className="text-gray-600 mb-4">
                Reduce liability risks and protect your business from hazardous waste incidents.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Protect your business
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Reputation</h3>
              <p className="text-gray-600 mb-4">
                Maintain a professional reputation as a responsible and compliant business.
              </p>
              <div className="text-sm text-red-600 font-semibold">
                Build trust & credibility
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
              Hazardous Waste Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive hazardous waste removal services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal hazardous waste removal with special attention to beach property considerations and tourism businesses.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban hazardous waste removal with large property access and upscale business handling.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district hazardous waste removal with careful handling of older buildings and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic building experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood hazardous waste removal with premium service and careful property protection.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and industrial hazardous waste removal with bulk removal and business project services.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Commercial specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban hazardous waste removal with large lot access and family business handling.
              </p>
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family business experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Hazardous Waste Removal?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't risk safety or compliance. Our local experts are ready to help with specialized hazardous waste removal and disposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-red-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
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
              We offer comprehensive cleanup services beyond just hazardous waste removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/commercial-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Package className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Commercial Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional commercial cleanout with business expertise and project management.
                </p>
              </div>
            </Link>

            <Link href="/construction-debris-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Construction Debris
                </h3>
                <p className="text-gray-600">
                  Professional construction debris removal with project management and specialized equipment.
                </p>
              </div>
            </Link>

            <Link href="/same-day-junk-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Same-Day Junk Removal
                </h3>
                <p className="text-gray-600">
                  Fast, guaranteed junk removal when you need it most.
                </p>
              </div>
            </Link>

            <Link href="/mattress-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
                  Mattress Removal
                </h3>
                <p className="text-gray-600">
                  Professional mattress removal with eco-friendly disposal and recycling partnerships.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition duration-300">
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
