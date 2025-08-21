import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, Heart, Sparkles, Briefcase } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function CommercialPostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Commercial Post-Construction Cleanup Jacksonville | Office, Retail & Warehouse Cleaning (904) 456-3851"
        description="Jacksonville commercial post-construction cleanup for office buildings, retail stores, warehouses, and commercial facilities. Professional cleaning for businesses and property managers. Free estimates, instant quotes. Call (904) 456-3851"
        keywords="commercial post-construction cleanup Jacksonville, office building cleaning Jacksonville, retail construction cleanup Jacksonville, warehouse post-construction cleaning Florida, commercial facility cleanup Jacksonville"
        canonical="/commercial-post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Building className="w-16 h-16 text-indigo-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Commercial Post-Construction Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-indigo-300 font-bold">PROFESSIONAL CLEANUP FOR COMMERCIAL FACILITIES</span><br />
                Transform your construction site into a business-ready commercial space.<br />
                Specialized cleaning for offices, retail, warehouses, and commercial facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Instant Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Schedule Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-indigo-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Building className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏢 PROFESSIONAL COMMERCIAL POST-CONSTRUCTION CLEANUP 🏢
              </span>
              <Building className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Office Buildings • Retail Stores • Warehouses • Commercial Facilities
            </p>
          </div>
        </section>

        {/* Why Choose Commercial Specialists */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Commercial Post-Construction Cleanup Specialists
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that your commercial facility needs to be business-ready. Our specialized commercial cleaning ensures every detail is perfect for opening day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Commercial Expertise */}
              <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commercial Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized knowledge of commercial construction materials, finishes, and business requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Office buildings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Retail facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Warehouse spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Industrial facilities
                  </li>
                </ul>
              </div>

              {/* Business-Ready Results */}
              <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Business-Ready Results
                </h3>
                <p className="text-gray-600 mb-4">
                  Every surface cleaned to perfection so you can open for business immediately without delays.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Customer-ready spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    No construction dust
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Professional appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Immediate occupancy
                  </li>
                </ul>
              </div>

              {/* Compliance & Safety */}
              <div className="bg-indigo-50 rounded-lg p-8 border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compliance & Safety
                </h3>
                <p className="text-gray-600 mb-4">
                  OSHA compliance, safety protocols, and commercial-grade cleaning standards for business environments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    OSHA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Safety protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Commercial standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Liability protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Commercial Post-Construction Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleaning services designed specifically for commercial construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Office Buildings */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Office Buildings</h3>
                <p className="text-gray-600 text-center mb-4">
                  Complete cleanup for office buildings, corporate headquarters, and professional workspaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Executive suites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Conference rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Common areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Break rooms
                  </li>
                </ul>
              </div>

              {/* Retail Stores */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Retail Stores</h3>
                <p className="text-gray-600 text-center mb-4">
                  Specialized cleanup for retail stores, shopping centers, and customer-facing spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Sales floors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Fitting rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Storage areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Customer service areas
                  </li>
                </ul>
              </div>

              {/* Warehouses */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Warehouses</h3>
                <p className="text-gray-600 text-center mb-4">
                  Industrial-grade cleanup for warehouses, distribution centers, and storage facilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Loading docks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Storage areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Office spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Equipment areas
                  </li>
                </ul>
              </div>

              {/* Medical Facilities */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Medical Facilities</h3>
                <p className="text-gray-600 text-center mb-4">
                  Healthcare-compliant cleaning for medical offices, clinics, and healthcare facilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Exam rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Waiting areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Sterile environments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Compliance standards
                  </li>
                </ul>
              </div>

              {/* Restaurants */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Restaurants</h3>
                <p className="text-gray-600 text-center mb-4">
                  Food safety compliant cleaning for restaurants, kitchens, and dining establishments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Kitchen areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Dining rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Food prep areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Health code compliance
                  </li>
                </ul>
              </div>

              {/* Industrial Facilities */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Industrial Facilities</h3>
                <p className="text-gray-600 text-center mb-4">
                  Heavy-duty cleanup for manufacturing plants, processing facilities, and industrial spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Production areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Equipment cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Safety compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Hazardous material handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Commercial Post-Construction Cleanup Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A specialized process designed specifically for commercial projects to ensure your facility is business-ready
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Assessment</h3>
                <p className="text-gray-600">
                  Evaluate the construction scope and identify specific business requirements for your facility.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Debris Removal</h3>
                <p className="text-gray-600">
                  Remove all construction debris, materials, and waste from your commercial property.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Cleaning</h3>
                <p className="text-gray-600">
                  Comprehensive cleaning of all surfaces, fixtures, and areas of your commercial facility.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Readiness</h3>
                <p className="text-gray-600">
                  Quality check and business approval to ensure your facility is ready for customers and operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Commercial Post-Construction Cleanup Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent pricing designed for commercial projects with no hidden fees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Commercial Package */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Basic Commercial</h3>
                  <p className="text-gray-600">Small commercial projects</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-indigo-600">$0.95</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Basic debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Floor cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Basic sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Standard Commercial Package */}
              <div className="bg-indigo-50 rounded-lg p-8 border-2 border-indigo-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard Commercial</h3>
                  <p className="text-gray-600">Complete commercial facilities</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-indigo-600">$1.35</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Full debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Deep surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Window cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Complete sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Premium Commercial Package */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium Commercial</h3>
                  <p className="text-gray-600">Luxury finishes & large facilities</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-indigo-600">$1.95</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Debris haul-off included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Pressure washing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Air quality restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    Final inspection
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make Your Commercial Facility Business-Ready?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied business owners who chose our specialized commercial post-construction cleanup service. 
              Get your instant quote today and transform your construction site into a professional, customer-ready facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Instant Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive commercial services beyond just post-construction cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Hammer className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                    Post-Construction Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive post-construction cleanup for all types of projects.
                  </p>
                </div>
              </Link>

              <Link href="/commercial-cleanout" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Building className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                    Commercial Cleanout
                  </h3>
                  <p className="text-gray-600">
                    Complete commercial space cleanout and preparation services.
                  </p>
                </div>
              </Link>

              <Link href="/construction-debris-removal" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Truck className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                    Construction Debris Removal
                  </h3>
                  <p className="text-gray-600">
                    Professional construction debris removal and disposal services.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
