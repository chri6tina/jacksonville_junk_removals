import Link from 'next/link'
import type { Metadata } from 'next'
import { Utensils, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Wrench, Recycle, AlertTriangle, DollarSign, Users, ChefHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant Cleanout Jacksonville | Commercial Kitchen & Food Safety Expertise',
  description: 'Professional restaurant cleanout in Jacksonville with commercial kitchen expertise and food safety compliance. We handle restaurant cleanup, kitchen equipment removal, and hospitality industry cleanout with licensed crews and specialized expertise. Get a free quote today!',
  keywords: 'restaurant cleanout Jacksonville, restaurant cleanup, commercial kitchen, food safety compliance, hospitality industry, kitchen equipment removal Jacksonville',
  alternates: {
    canonical: '/restaurant-cleanout',
  },
}

export default function RestaurantCleanoutPage() {
  return (
    <>
      

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
                  Restaurant Cleanout Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  Professional restaurant cleanout with commercial kitchen expertise and food safety compliance. We handle restaurant cleanup, kitchen equipment removal, and hospitality industry cleanout efficiently.
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
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <ChefHat className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Commercial Kitchen • Food Safety Compliance • Hospitality Industry • Same-Day Service Available
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Restaurant Cleanout Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Restaurant Cleanout Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial kitchen expertise to food safety compliance, we handle all types of restaurant cleanout with hospitality industry knowledge and specialized equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Kitchen Expertise */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <ChefHat className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Commercial Kitchen Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                Professional understanding of commercial kitchen layouts, equipment, and operational requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Kitchen layout knowledge
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Equipment specifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Operational workflows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Industry standards
                </li>
              </ul>
            </div>

            {/* Food Safety Compliance */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-4">
                Food Safety Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with food safety regulations and health department requirements during cleanout.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Health department standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Food safety protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Contamination prevention
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Sanitation requirements
                </li>
              </ul>
            </div>

            {/* Kitchen Equipment Removal */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kitchen Equipment Removal
              </h3>
              <p className="text-gray-600 mb-4">
                Professional removal of commercial kitchen equipment and appliances during restaurant cleanout.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Commercial ovens
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Refrigeration units
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Cooking equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Ventilation systems
                </li>
              </ul>
            </div>

            {/* Hospitality Industry Knowledge */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hospitality Industry Knowledge
              </h3>
              <p className="text-gray-600 mb-4">
                Deep understanding of hospitality industry requirements and restaurant operational needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Industry regulations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Operational standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Customer expectations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Market trends
                </li>
              </ul>
            </div>

            {/* Dining Area Cleanup */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Utensils className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dining Area Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleanup of dining areas, seating, and customer-facing spaces during restaurant cleanout.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Seating removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Table cleanup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Décor removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Space restoration
                </li>
              </ul>
            </div>

            {/* Specialized Equipment Handling */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialized Equipment Handling
              </h3>
              <p className="text-gray-600 mb-4">
                Professional handling of specialized restaurant equipment and commercial kitchen machinery.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Heavy machinery
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Specialized tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Safe disassembly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  Equipment protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Restaurant Cleanout Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Restaurant Cleanout
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local restaurant cleanout experts with commercial kitchen expertise and food safety compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial Kitchen Expertise</h3>
              <p className="text-gray-600">
                Professional understanding of commercial kitchen layouts, equipment, and operational requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food Safety Compliance</h3>
              <p className="text-gray-600">
                Ensure compliance with food safety regulations and health department requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospitality Industry</h3>
              <p className="text-gray-600">
                Deep understanding of hospitality industry requirements and restaurant operational needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Equipment</h3>
              <p className="text-gray-600">
                Professional removal of commercial kitchen equipment and appliances during cleanout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Knowledge</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's restaurant scene and hospitality industry landscape.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville restaurants for our cleanout expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Cleanout Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Restaurant Cleanout Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for efficient, food safety-focused, and hospitality industry-compliant restaurant cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kitchen Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your restaurant kitchen, equipment, and cleanout requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed plan considering food safety and health department compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes kitchen equipment and appliances with specialized handling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deep Cleaning</h3>
              <p className="text-gray-600 text-sm">
                We perform deep cleaning and sanitization for health department compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Completion</h3>
              <p className="text-gray-600 text-sm">
                We complete the cleanout and ensure the space meets health department standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Restaurant Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our commercial kitchen expertise and food safety compliance benefit Jacksonville restaurants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Department Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with health department standards and food safety regulations.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Stay compliant
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Reduce costs associated with health violations and compliance issues.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Save money
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kitchen Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize kitchen layout and equipment placement for improved operational efficiency.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Boost efficiency
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Staff Safety</h3>
              <p className="text-gray-600 mb-4">
                Create safer working environments for kitchen staff and restaurant employees.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Protect your team
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Confidence</h3>
              <p className="text-gray-600 mb-4">
                Build customer confidence with professional kitchen cleanout and food safety standards.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Build trust
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Results</h3>
              <p className="text-gray-600 mb-4">
                Professional restaurant cleanout with guaranteed commercial kitchen expertise.
              </p>
              <div className="text-sm text-secondary font-semibold">
                Quality guaranteed
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
              Restaurant Cleanout Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive restaurant cleanout services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal restaurant cleanout with special attention to beach dining considerations and seasonal operations.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban restaurant cleanout with large property access and upscale dining organization.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district restaurant cleanout with careful handling of older buildings and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic building experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood restaurant cleanout with premium service and careful hospitality protection.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential restaurant cleanout with bulk cleanup and hospitality project services.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Hospitality specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban restaurant cleanout with large lot access and family dining organization.
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family dining experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Restaurant Cleanout?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let kitchen transitions impact your food safety compliance. Our local experts are ready to help with commercial kitchen expertise and food safety compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-secondary border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
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
              We offer comprehensive cleanup services beyond just restaurant cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/office-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <ChefHat className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Office Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional office cleanout with business continuity focus and minimal disruption.
                </p>
              </div>
            </Link>

            <Link href="/warehouse-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Warehouse Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional warehouse cleanout with industrial organization and heavy equipment expertise.
                </p>
              </div>
            </Link>

            <Link href="/apartment-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Apartment Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional apartment cleanout with tenant transition expertise and move-out coordination.
                </p>
              </div>
            </Link>

            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/hazardous-waste-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
                  Hazardous Waste
                </h3>
                <p className="text-gray-600">
                  Professional hazardous waste removal with specialized handling and compliance expertise.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary/30 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition duration-300">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-secondary transition duration-300">
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
