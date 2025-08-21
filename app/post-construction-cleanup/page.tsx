import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare } from 'lucide-react'
import SEOHead from '@/components/SEOHead'
import Image from 'next/image'

export default function PostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Post-Construction Cleanup Jacksonville | #1 Construction Site Cleanup & Debris Removal (904) 456-3851"
        description="Jacksonville's #1 post-construction cleanup service. Full-service construction site cleanup + debris removal. 3-phase cleaning process, eco-friendly, OSHA certified. Free estimates, instant online booking. Call (904) 456-3851"
        keywords="post-construction cleanup Jacksonville, construction site cleanup Jacksonville, renovation cleaning Jacksonville, construction debris removal Jacksonville, post construction cleaning Florida, Jacksonville construction cleanup"
        canonical="/post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/post-construction-cleanup-hero.jpg"
              alt="Professional post-construction cleanup specialist performing detailed cleaning"
              fill
              className="object-cover"
              priority
            />
            {/* Enhanced overlay for authentic local business feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85"></div>
            {/* Subtle texture overlay for local business authenticity */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Fallback background color in case image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Hammer className="w-16 h-16 text-blue-400 drop-shadow-lg" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Post-Construction Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-lg">
                <span className="text-blue-300 font-bold">JACKSONVILLE'S #1 POST-CONSTRUCTION CLEANUP SERVICE</span><br />
                The ONLY local provider offering construction debris removal + detailed cleaning in one call.<br />
                Transform construction sites into pristine, move-in-ready spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Instant Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span>Schedule Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-blue-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Hammer className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏗️ FULL-SERVICE POST-CONSTRUCTION CLEANUP + DEBRIS REMOVAL 🏗️
              </span>
              <Hammer className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Instant Online Quotes • 100% Satisfaction Guarantee
            </p>
          </div>
        </section>

        {/* Service Packages - Moved Higher Up */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Clear, upfront pricing with no hidden fees - unlike our competitors who require quotes for everything
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Package */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard Package</h3>
                  <p className="text-gray-600">Perfect for small renovations</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">$0.85</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Basic debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Floor cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Basic sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Comprehensive Package */}
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-blue-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Comprehensive Package</h3>
                  <p className="text-gray-600">Complete post-construction solution</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">$1.25</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Full debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Deep surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Window cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Complete sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium Package</h3>
                  <p className="text-gray-600">Luxury finish with haul-off</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">$1.85</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Everything in Comprehensive
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Debris haul-off included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Pressure washing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Air quality restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Final inspection
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Competitive Advantages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why We're Jacksonville's Post-Construction Cleanup Powerhouse
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unlike our competitors, we offer the complete solution: construction debris removal + detailed cleaning in one service call
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Single Source Solution */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Single Source Solution
                </h3>
                <p className="text-gray-600 mb-4">
                  The ONLY local provider that combines construction debris removal with detailed post-construction cleaning.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Debris removal + cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    One call, complete service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    No multiple vendors needed
                  </li>
                </ul>
              </div>

              {/* Transparent Pricing */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 mb-4">
                  Instant online quotes and clear package pricing - no hidden fees or surprise charges.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Instant online quotes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Clear package pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    No hidden fees
                  </li>
                </ul>
              </div>

              {/* Eco-Friendly & Safe */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Eco-Friendly & Safe
                </h3>
                <p className="text-gray-600 mb-4">
                  Green Seal certified products, HEPA filtration, and construction waste recycling.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Green Seal certified
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    HEPA filtration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Waste recycling
                  </li>
                </ul>
              </div>

              {/* OSHA Certified */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  OSHA & EPA Certified
                </h3>
                <p className="text-gray-600 mb-4">
                  Trained crews, bonded & insured, background checked, and safety certified.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    OSHA certified crews
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Bonded & insured
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Background checked
                  </li>
                </ul>
              </div>

              {/* Advanced Technology */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Commercial-grade equipment, digital checklists, and real-time updates.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Commercial equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Digital checklists
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Real-time updates
                  </li>
                </ul>
              </div>

              {/* 100% Satisfaction */}
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-gray-600 mb-4">
                  We're not satisfied until you're completely satisfied with the results.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Satisfaction guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Re-clean if needed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    Before/after photos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Phase Cleaning Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Revolutionary 3-Phase Post-Construction Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unlike competitors who only clean, we handle the complete transformation from construction site to move-in-ready space
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 1: Rough Cleanup */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Phase 1: Rough Cleanup</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Heavy debris removal and surface preparation
                </p>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Construction debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Lumber, drywall, concrete removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Hazardous material cleanup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Surface preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Large debris haul-off
                  </li>
                </ul>
              </div>

              {/* Phase 2: Final Cleaning */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Phase 2: Final Cleaning</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Detailed cleaning and surface restoration
                </p>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Detailed dust removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Surface sanitization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Window cleaning
                  </li>
                </ul>
              </div>

              {/* Phase 3: Touch-up & Inspection */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Phase 3: Touch-up & Inspection</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Final touches and quality assurance
                </p>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    High-traffic area cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Final polish & shine
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Quality inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Before/after photos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600" />
                    Customer sign-off
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What We Clean in Post-Construction Cleanup
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleaning that goes beyond what our competitors offer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Floors */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Floors</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Hardwood restoration</li>
                  <li>Tile & grout cleaning</li>
                  <li>Carpet deep cleaning</li>
                  <li>Concrete polishing</li>
                </ul>
              </div>

              {/* Walls & Ceilings */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Walls & Ceilings</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Drywall dust removal</li>
                  <li>Paint overspray cleanup</li>
                  <li>Texture restoration</li>
                  <li>Spot cleaning</li>
                </ul>
              </div>

              {/* Fixtures & Hardware */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fixtures & Hardware</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Cabinet cleaning</li>
                  <li>Hardware polishing</li>
                  <li>Light fixture cleaning</li>
                  <li>Appliance detailing</li>
                </ul>
              </div>

              {/* Windows & Glass */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Windows & Glass</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Interior window cleaning</li>
                  <li>Glass door cleaning</li>
                  <li>Mirror polishing</li>
                  <li>Frame cleaning</li>
                </ul>
              </div>

              {/* HVAC & Vents */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">HVAC & Vents</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Vent cleaning</li>
                  <li>Duct dust removal</li>
                  <li>Filter replacement</li>
                  <li>Air quality testing</li>
                </ul>
              </div>

              {/* Kitchens & Bathrooms */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchens & Bathrooms</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Appliance cleaning</li>
                  <li>Fixture sanitization</li>
                  <li>Countertop restoration</li>
                  <li>Grout sealing</li>
                </ul>
              </div>

              {/* Exterior Areas */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exterior Areas</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Entryway cleaning</li>
                  <li>Sidewalk cleanup</li>
                  <li>Pressure washing</li>
                  <li>Landscaping cleanup</li>
                </ul>
              </div>

              {/* Specialized Areas */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Areas</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Medical facilities</li>
                  <li>Restaurant kitchens</li>
                  <li>Industrial spaces</li>
                  <li>Retail environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From residential renovations to large commercial projects, we handle it all
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Residential</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>New home construction</li>
                  <li>Home renovations</li>
                  <li>Kitchen remodels</li>
                  <li>Bathroom renovations</li>
                  <li>Basement finishing</li>
                  <li>Garage conversions</li>
                </ul>
              </div>

              {/* Commercial */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Commercial</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Office buildings</li>
                  <li>Retail stores</li>
                  <li>Restaurants</li>
                  <li>Medical facilities</li>
                  <li>Educational institutions</li>
                  <li>Warehouses</li>
                </ul>
              </div>

              {/* Industrial */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Industrial</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Manufacturing facilities</li>
                  <li>Processing plants</li>
                  <li>Distribution centers</li>
                  <li>Chemical plants</li>
                  <li>Power plants</li>
                  <li>Refineries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Construction Site?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who chose Jacksonville's #1 post-construction cleanup service. 
              Get your instant quote today and see why we're the market leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Instant Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                We offer comprehensive services beyond just post-construction cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/renovation-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                    <Hammer className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                    Renovation Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Complete renovation cleanup services for residential and commercial projects.
                  </p>
                </div>
              </Link>

              <Link href="/construction-debris-removal" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                    Construction Debris Removal
                  </h3>
                  <p className="text-gray-600">
                    Professional construction debris removal and disposal services.
                  </p>
                </div>
              </Link>

              <Link href="/commercial-cleanout" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition duration-300">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                    Commercial Cleanout
                  </h3>
                  <p className="text-gray-600">
                    Complete commercial space cleanout and preparation services.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Comprehensive FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our post-construction cleanup services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* General Service Questions */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">General Service Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What is post-construction cleanup?</h4>
                    <p className="text-gray-600 mb-3">
                      Post-construction cleanup is the comprehensive cleaning and debris removal process that occurs after construction, renovation, or remodeling work is completed. It transforms construction sites into clean, move-in-ready spaces by removing all construction debris, dust, and residue while performing detailed cleaning of all surfaces, fixtures, and areas.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How is post-construction cleanup different from regular cleaning?</h4>
                    <p className="text-gray-600 mb-3">
                      Post-construction cleanup is significantly more intensive than regular cleaning. It involves heavy debris removal, construction dust elimination, paint overspray cleanup, adhesive residue removal, and specialized cleaning techniques for construction materials. Regular cleaning services aren't equipped to handle construction debris or the specialized cleaning requirements of post-construction spaces.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What makes your service different from competitors?</h4>
                    <p className="text-gray-600 mb-3">
                      We're the ONLY local provider that combines construction debris removal with detailed post-construction cleaning in one service call. Our competitors typically only offer one or the other, requiring you to hire multiple vendors. We also provide transparent pricing, instant online quotes, and a 100% satisfaction guarantee.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you handle both residential and commercial projects?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we handle both residential and commercial post-construction cleanup projects. From single-room renovations to large commercial buildings, we have the expertise, equipment, and crew size to handle projects of any scale. Our services are tailored to meet the specific requirements of each project type.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & Quotes */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Pricing & Quotes</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do your pricing packages work?</h4>
                    <p className="text-gray-600 mb-3">
                      We offer three transparent pricing packages: Standard ($0.85/sq ft) for basic cleanup, Comprehensive ($1.25/sq ft) for complete solutions, and Premium ($1.85/sq ft) for luxury finishes with debris haul-off. Unlike competitors who require quotes for everything, our pricing is clear and upfront with no hidden fees.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Why is your pricing per square foot?</h4>
                    <p className="text-gray-600 mb-3">
                      Per-square-foot pricing provides transparency and fairness. It accounts for the actual space being cleaned and allows for accurate cost estimation regardless of the amount of debris. This method is more accurate than hourly rates and prevents surprise charges.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer free estimates?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer instant online quotes through our website, and we can also provide free on-site estimates for complex projects. Our online quote system gives you immediate pricing based on your project details, saving you time and providing transparency.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Are there any hidden fees?</h4>
                    <p className="text-gray-600 mb-3">
                      No, there are absolutely no hidden fees. Our pricing is completely transparent, and what you see is what you pay. We include all necessary services in our package pricing, and any additional services are clearly communicated upfront.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer discounts for large projects?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer volume discounts for large projects. Projects over 5,000 square feet typically qualify for discounted rates. Contact us for a custom quote on large-scale projects, and we'll work with you to provide the best possible pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Process & Timeline */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Service Process & Timeline</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What is your 3-phase cleaning process?</h4>
                    <p className="text-gray-600 mb-3">
                      Our 3-phase process includes: Phase 1 (Rough Cleanup) - heavy debris removal and surface preparation; Phase 2 (Final Cleaning) - detailed cleaning and surface restoration; Phase 3 (Touch-up & Inspection) - final touches and quality assurance. This systematic approach ensures nothing is missed and delivers consistent, high-quality results.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How long does post-construction cleanup take?</h4>
                    <p className="text-gray-600 mb-3">
                      Timeline depends on project size and complexity. Small renovations (1-2 rooms) typically take 4-8 hours, medium projects (entire floor) take 1-2 days, and large commercial projects can take 3-7 days. We'll provide a detailed timeline during the estimate process.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you work on weekends or holidays?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer flexible scheduling including weekends and holidays to accommodate your timeline. We understand that construction projects often have tight deadlines, and we're committed to working around your schedule to ensure timely completion.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can you work around my schedule?</h4>
                    <p className="text-gray-600 mb-3">
                      Absolutely! We work around your schedule and can perform cleanup during off-hours if needed. We coordinate with your project timeline and can work in phases if you need certain areas cleaned before others. Our goal is to minimize disruption to your project.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What happens if you find additional issues during cleanup?</h4>
                    <p className="text-gray-600 mb-3">
                      If we discover additional issues during cleanup (like hidden damage, mold, or structural concerns), we immediately notify you and provide options for addressing them. We never proceed with additional work without your approval and clear pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Clean & Don't Clean */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">What We Clean & Don't Clean</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What specific areas do you clean?</h4>
                    <p className="text-gray-600 mb-3">
                      We clean floors (hardwood, tile, carpet, concrete), walls and ceilings (drywall dust, paint overspray), fixtures and hardware (cabinets, hardware, light fixtures), windows and glass, HVAC systems and vents, kitchens and bathrooms, and exterior areas. We also handle specialized areas like medical facilities and industrial spaces.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you clean construction debris from outside?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we clean exterior areas including entryways, sidewalks, landscaping, and can provide pressure washing services. We ensure the entire property, both inside and out, is clean and presentable after construction work.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What types of construction debris do you remove?</h4>
                    <p className="text-gray-600 mb-3">
                      We remove all types of construction debris including lumber, drywall, concrete, metal scraps, insulation, electrical waste, plumbing materials, paint cans, adhesive containers, and packaging materials. We also handle hazardous materials according to safety regulations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you clean HVAC systems and air ducts?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we clean HVAC systems including vents, ductwork, and replace filters. This is crucial for post-construction cleanup as construction dust can significantly impact air quality. We also perform air quality testing to ensure the space is safe for occupancy.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What don't you clean or handle?</h4>
                    <p className="text-gray-600 mb-3">
                      We don't handle structural repairs, electrical work, plumbing work, or any construction-related repairs. We focus solely on cleaning and debris removal. If we discover issues that require professional contractors, we'll refer you to qualified specialists.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety & Certifications */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Safety & Certifications</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Are your crews OSHA certified?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, all our crews are OSHA certified and trained in construction site safety protocols. We follow strict safety guidelines including proper PPE usage, hazard identification, and safe work practices. Your safety and our crew's safety are our top priorities.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you handle hazardous materials?</h4>
                    <p className="text-gray-600 mb-3">
                      We're trained to identify and properly handle hazardous materials according to EPA regulations. Hazardous materials are separated, properly labeled, and disposed of at certified facilities. We never compromise on safety or environmental compliance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Are you insured and bonded?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we're fully insured and bonded. Our insurance covers property damage, personal injury, and worker's compensation. We also carry general liability insurance to protect you and your property during the cleanup process.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you perform background checks on employees?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, all our employees undergo thorough background checks, drug testing, and reference verification. We only hire trustworthy, qualified professionals who meet our high standards for reliability and integrity.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What safety equipment do you use?</h4>
                    <p className="text-gray-600 mb-3">
                      We use professional-grade safety equipment including HEPA filtration systems, respirators, safety goggles, gloves, hard hats, and protective clothing. Our equipment is regularly maintained and meets or exceeds industry safety standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental & Green Practices */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Environmental & Green Practices</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Are your cleaning products eco-friendly?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we use Green Seal certified cleaning products that are safe for people, pets, and the environment. Our products are biodegradable, non-toxic, and effective at removing construction residue without harmful chemical exposure.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you handle waste disposal and recycling?</h4>
                    <p className="text-gray-600 mb-3">
                      We separate and recycle all recyclable materials including metal, wood, cardboard, and plastics. Construction debris is sorted and sent to appropriate recycling facilities. We minimize landfill waste and strive for maximum recycling rates.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you use water conservation methods?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we use water-efficient cleaning methods and equipment. Our processes minimize water usage while maintaining cleaning effectiveness. We also use microfiber cloths and other water-saving techniques to reduce environmental impact.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Are your vehicles fuel-efficient?</h4>
                    <p className="text-gray-600 mb-3">
                      We maintain a fleet of fuel-efficient vehicles and regularly service them to ensure optimal performance. We also plan routes efficiently to minimize fuel consumption and reduce our carbon footprint.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scheduling & Availability */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Scheduling & Availability</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How far in advance should I schedule?</h4>
                    <p className="text-gray-600 mb-3">
                      We recommend scheduling 1-2 weeks in advance for standard projects and 2-4 weeks for large commercial projects. However, we can often accommodate last-minute requests depending on our current schedule and project complexity.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer emergency or same-day service?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer emergency cleanup services for urgent situations. While same-day service isn't always possible for large projects, we can often accommodate emergency requests within 24-48 hours depending on the scope of work.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What areas do you serve in Jacksonville?</h4>
                    <p className="text-gray-600 mb-3">
                      We serve all of Jacksonville and surrounding areas including Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, Mandarin, Riverside, San Marco, Southside, Arlington, and Orange Park. We also serve surrounding counties within a 50-mile radius.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can you work on multiple properties or locations?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we can handle multiple properties or locations simultaneously. We have multiple crews and can coordinate cleanup across different sites. This is especially useful for property management companies or developers with multiple projects.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer ongoing maintenance cleaning?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer ongoing maintenance cleaning services for commercial properties and can set up regular cleaning schedules. This helps maintain the cleanliness achieved through post-construction cleanup and prevents the need for major cleanup projects in the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Assurance & Guarantees */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Quality Assurance & Guarantees</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What is your satisfaction guarantee?</h4>
                    <p className="text-gray-600 mb-3">
                      We offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll return and re-clean the area at no additional cost. We're committed to ensuring you're happy with the results before we consider the job complete.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure quality control?</h4>
                    <p className="text-gray-600 mb-3">
                      We use detailed checklists, before/after photos, and quality inspections at each phase. Our supervisors conduct final walkthroughs with customers, and we use digital quality control systems to ensure nothing is missed. Quality is our top priority.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you provide before and after photos?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we document every project with before and after photos. These photos serve as quality control documentation and provide you with a visual record of the transformation. You'll receive these photos upon project completion.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What if I'm not satisfied with the results?</h4>
                    <p className="text-gray-600 mb-3">
                      If you're not satisfied, we'll immediately address any concerns and re-clean the areas as needed. We won't consider the job complete until you're 100% satisfied. Your satisfaction is our priority, and we stand behind our work.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer follow-up services?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer follow-up services including touch-up cleaning, additional deep cleaning, and ongoing maintenance. We're committed to long-term relationships with our customers and want to ensure your space remains clean and presentable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment & Billing */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Payment & Billing</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What payment methods do you accept?</h4>
                    <p className="text-gray-600 mb-3">
                      We accept all major credit cards, cash, checks, and bank transfers. For commercial clients, we offer net 30 payment terms. We also accept payment through our online portal for convenience and security.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">When is payment due?</h4>
                    <p className="text-gray-600 mb-3">
                      Payment is due upon completion of the project. For large commercial projects, we may require a deposit upfront and the balance upon completion. We'll clearly communicate payment terms during the estimate process.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer financing options?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we offer financing options for large projects through our partner financial institutions. This allows you to spread the cost over time while getting immediate service. Contact us for financing details and qualification requirements.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you provide detailed invoices?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we provide detailed invoices that clearly break down all services performed, materials used, and costs. Our invoices are professional and suitable for business expense tracking and tax purposes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can you work with my insurance company?</h4>
                    <p className="text-gray-600 mb-3">
                      Yes, we can work with insurance companies for covered losses. We're experienced in documenting work for insurance claims and can provide detailed reports and photos to support your claim. Contact us for insurance-related cleanup needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Contact CTA */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our team is here to help with any additional questions you may have
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Get Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
