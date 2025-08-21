import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Home, Wrench, Users, Award, Leaf, Zap, Target, MessageCircle, Eye, Building, Car, CheckSquare, Heart, Sparkles } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function ResidentialPostConstructionCleanupPage() {
  return (
    <>
      <SEOHead
        title="Residential Post-Construction Cleanup Jacksonville | New Home & Renovation Cleaning (904) 456-3851"
        description="Jacksonville residential post-construction cleanup for new homes, renovations, and remodeling projects. Specialized cleaning for homeowners and builders. Free estimates, instant quotes. Call (904) 456-3851"
        keywords="residential post-construction cleanup Jacksonville, new home cleaning Jacksonville, renovation cleaning Jacksonville, home remodeling cleanup Florida, residential construction cleanup Jacksonville"
        canonical="/residential-post-construction-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Home className="w-16 h-16 text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Residential Post-Construction Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-green-300 font-bold">SPECIALIZED CLEANUP FOR NEW HOMES & RENOVATIONS</span><br />
                Transform your construction site into a move-in-ready dream home.<br />
                Professional cleaning that makes your new space shine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/estimation"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Instant Quote</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Schedule Cleanup</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-green-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏠 SPECIALIZED RESIDENTIAL POST-CONSTRUCTION CLEANUP 🏠
              </span>
              <Home className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • New Home Cleaning • Renovation Cleanup • Move-in Ready Results
            </p>
          </div>
        </section>

        {/* Why Choose Residential Specialists */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Residential Post-Construction Cleanup Specialists
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that your home is your sanctuary. Our specialized residential cleaning ensures every detail is perfect for move-in day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Residential Expertise */}
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Residential Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized knowledge of residential construction materials, finishes, and cleaning requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    New home construction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Home renovations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Remodeling projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Addition construction
                  </li>
                </ul>
              </div>

              {/* Family-Safe Cleaning */}
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Family-Safe Cleaning
                </h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly products and safe cleaning methods perfect for families with children and pets.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Non-toxic cleaners
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    HEPA filtration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Pet-safe products
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Child-friendly methods
                  </li>
                </ul>
              </div>

              {/* Move-in Ready Results */}
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Move-in Ready Results
                </h3>
                <p className="text-gray-600 mb-4">
                  Every surface cleaned to perfection so you can move in immediately without any additional cleaning.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Spotless surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No construction dust
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fresh air quality
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Immediate occupancy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Residential Post-Construction Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleaning services designed specifically for residential construction and renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* New Home Construction */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">New Home Construction</h3>
                <p className="text-gray-600 text-center mb-4">
                  Complete cleanup for newly constructed homes from foundation to finishing touches.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Foundation cleanup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Framing debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Drywall dust removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Final finishing cleanup
                  </li>
                </ul>
              </div>

              {/* Home Renovations */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Hammer className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Home Renovations</h3>
                <p className="text-gray-600 text-center mb-4">
                  Specialized cleanup for kitchen, bathroom, and whole-house renovation projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen remodel cleanup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom renovation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Basement finishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Garage conversion
                  </li>
                </ul>
              </div>

              {/* Interior Finishing */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Interior Finishing</h3>
                <p className="text-gray-600 text-center mb-4">
                  Detailed cleaning of all interior surfaces, fixtures, and finishes.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Wall & ceiling cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Window cleaning
                  </li>
                </ul>
              </div>

              {/* Kitchen & Bathroom */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Kitchen & Bathroom</h3>
                <p className="text-gray-600 text-center mb-4">
                  Specialized cleaning for kitchens and bathrooms with attention to food safety and hygiene.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Appliance cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Cabinet detailing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Countertop restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fixture sanitization
                  </li>
                </ul>
              </div>

              {/* Floor & Carpet Care */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Floor & Carpet Care</h3>
                <p className="text-gray-600 text-center mb-4">
                  Professional floor cleaning and restoration for all types of residential flooring.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Hardwood restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Tile & grout cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Carpet deep cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Concrete polishing
                  </li>
                </ul>
              </div>

              {/* Air Quality Restoration */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Air Quality Restoration</h3>
                <p className="text-gray-600 text-center mb-4">
                  Remove construction dust and restore healthy indoor air quality for your family.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    HVAC duct cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Vent cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Air filtration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Dust removal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Residential Post-Construction Cleanup Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A specialized process designed specifically for residential projects to ensure your home is move-in ready
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Assessment</h3>
                <p className="text-gray-600">
                  Evaluate the construction scope and identify specific cleaning requirements for your home.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Debris Removal</h3>
                <p className="text-gray-600">
                  Remove all construction debris, materials, and waste from your property.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Cleaning</h3>
                <p className="text-gray-600">
                  Comprehensive cleaning of all surfaces, fixtures, and areas of your home.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Inspection</h3>
                <p className="text-gray-600">
                  Quality check and customer approval to ensure your home is move-in ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Residential Post-Construction Cleanup Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent pricing designed for residential projects with no hidden fees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Basic Package</h3>
                  <p className="text-gray-600">Small renovations & updates</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-green-600">$0.75</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Basic debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Floor cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Basic sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Standard Package */}
              <div className="bg-green-50 rounded-lg p-8 border-2 border-green-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">MOST POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard Package</h3>
                  <p className="text-gray-600">Complete home renovations</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-green-600">$1.15</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Full debris removal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Deep surface cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Floor restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Fixture polishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Window cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete sanitization
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>

              {/* Premium Package */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium Package</h3>
                  <p className="text-gray-600">Luxury finishes & new construction</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-green-600">$1.65</span>
                  <span className="text-gray-600">/sq ft</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Everything in Standard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Debris haul-off included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Pressure washing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Air quality restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Final inspection
                  </li>
                </ul>
                <Link
                  href="/estimation"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors duration-200"
                >
                  Get Instant Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make Your New Home Move-in Ready?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied homeowners who chose our specialized residential post-construction cleanup service. 
              Get your instant quote today and transform your construction site into a beautiful, clean home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Instant Quote</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
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
                We offer comprehensive residential services beyond just post-construction cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/post-construction-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                    <Hammer className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                    Post-Construction Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive post-construction cleanup for all types of projects.
                  </p>
                </div>
              </Link>

              <Link href="/renovation-cleanup" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                    <Wrench className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                    Renovation Cleanup
                  </h3>
                  <p className="text-gray-600">
                    Specialized cleanup services for home renovation and remodeling projects.
                  </p>
                </div>
              </Link>

              <Link href="/construction-debris-removal" className="group">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                    <Truck className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
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
