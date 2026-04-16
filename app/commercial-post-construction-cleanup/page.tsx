import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, Heart, Sparkles, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Post-Construction Cleanup Jacksonville | Office, Retail & Warehouse Cleaning (904) 456-3851',
  description: 'Jacksonville commercial post-construction cleanup for office buildings, retail stores, warehouses, and commercial facilities. Professional cleaning for businesses and property managers. Free estimates, instant quotes. Call (904) 456-3851',
  keywords: 'commercial post-construction cleanup Jacksonville, office building cleaning Jacksonville, retail construction cleanup Jacksonville, warehouse post-construction cleaning Florida, commercial facility cleanup Jacksonville',
  alternates: {
    canonical: '/commercial-post-construction-cleanup',
  },
}

export default function CommercialPostConstructionCleanupPage() {
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
                  Commercial Post-Construction Cleanup Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-indigo-300 font-bold">PROFESSIONAL CLEANUP FOR COMMERCIAL FACILITIES</span><br /> Transform your construction site into a business-ready commercial space.<br /> Specialized cleaning for offices, retail, warehouses, and commercial facilities.
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
        <section className="bg-primary text-white py-6">
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
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Commercial Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized knowledge of commercial construction materials, finishes, and business requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Office buildings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Retail facilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Warehouse spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Industrial facilities
                  </li>
                </ul>
              </div>

              {/* Business-Ready Results */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Business-Ready Results
                </h3>
                <p className="text-gray-600 mb-4">
                  Every surface cleaned to perfection so you can open for business immediately without delays.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Customer-ready spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    No construction dust
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Professional appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Immediate occupancy
                  </li>
                </ul>
              </div>

              {/* Compliance & Safety */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compliance & Safety
                </h3>
                <p className="text-gray-600 mb-4">
                  OSHA compliance, safety protocols, and commercial-grade cleaning standards for business environments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    OSHA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Safety protocols
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Commercial standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
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
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Office Buildings</h3>
                <p className="text-gray-600 text-center mb-4">
                  Complete cleanup for office buildings, corporate headquarters, and professional workspaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Executive suites
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Conference rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Common areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Break rooms
                  </li>
                </ul>
              </div>

              {/* Retail Stores */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Retail Stores</h3>
                <p className="text-gray-600 text-center mb-4">
                  Specialized cleanup for retail stores, shopping centers, and customer-facing spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Sales floors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Fitting rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Storage areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Customer service areas
                  </li>
                </ul>
              </div>

              {/* Warehouses */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Warehouses</h3>
                <p className="text-gray-600 text-center mb-4">
                  Industrial-grade cleanup for warehouses, distribution centers, and storage facilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Loading docks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Storage areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Office spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Equipment areas
                  </li>
                </ul>
              </div>

              {/* Medical Facilities */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Medical Facilities</h3>
                <p className="text-gray-600 text-center mb-4">
                  Healthcare-compliant cleaning for medical offices, clinics, and healthcare facilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Exam rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Waiting areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Sterile environments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Compliance standards
                  </li>
                </ul>
              </div>

              {/* Restaurants */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Restaurants</h3>
                <p className="text-gray-600 text-center mb-4">
                  Food safety compliant cleaning for restaurants, kitchens, and dining establishments.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Kitchen areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Dining rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Food prep areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Health code compliance
                  </li>
                </ul>
              </div>

              {/* Industrial Facilities */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Industrial Facilities</h3>
                <p className="text-gray-600 text-center mb-4">
                  Heavy-duty cleanup for manufacturing plants, processing facilities, and industrial spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Production areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Equipment cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Safety compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
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
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Assessment</h3>
                <p className="text-gray-600">
                  Evaluate the construction scope and identify specific business requirements for your facility.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Debris Removal</h3>
                <p className="text-gray-600">
                  Remove all construction debris, materials, and waste from your commercial property.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Cleaning</h3>
                <p className="text-gray-600">
                  Comprehensive cleaning of all surfaces, fixtures, and areas of your commercial facility.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-secondary">4</span>
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
                  <span className="text-3xl font-bold text-secondary">$0.95</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Basic debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Floor cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Basic sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Standard Commercial Package */}
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-secondary/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard Commercial</h3>
                  <p className="text-gray-600">Complete commercial facilities</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-secondary">$1.35</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Full debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Deep surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Window cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Complete sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
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
                  <span className="text-3xl font-bold text-secondary">$1.95</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Debris haul-off included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Pressure washing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Air quality restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    Final inspection
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-primary hover:opacity-90 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
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
                className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Instant Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Hammer className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                    Post-Construction Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive post-construction cleanup for all types of projects.
                  </p>
                </div>
              </Link>

              <Link href="/commercial-cleanout" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Building className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                    Commercial Cleanout
                  </h3>
                  <p className="text-gray-600">
                    Complete commercial space cleanout and preparation services.
                  </p>
                </div>
              </Link>

              <Link href="/construction-debris-removal" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition duration-300">
                    <Truck className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
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
  )
}
