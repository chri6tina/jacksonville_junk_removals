import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Home, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Renovation Cleanup Jacksonville | Post Construction Cleanup | Construction Debris Removal (904) 456-3851',
  description: 'Jacksonville renovation cleanup service. Post construction cleanup, construction debris removal, renovation waste cleanup. Professional, licensed, insured renovation cleanup. Call (904) 456-3851 for renovation cleanup.',
  keywords: 'renovation cleanup Jacksonville, post construction cleanup Jacksonville, construction debris removal Jacksonville, renovation waste cleanup Jacksonville, construction cleanup Jacksonville, Jacksonville renovation cleanup, post renovation cleanup Jacksonville',
  alternates: {
    canonical: '/renovation-cleanup',
  },
}

export default function RenovationCleanupPage() {
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
                  Renovation Cleanup Jacksonville
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-cyan-300 font-bold">POST-CONSTRUCTION CLEANUP</span><br /> Professional renovation cleanup and construction debris removal. We transform construction sites into clean, livable spaces throughout Jacksonville.
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
        <section className="bg-cyan-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Hammer className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏗️ PROFESSIONAL RENOVATION CLEANUP SERVICES 🏗️
              </span>
              <Hammer className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for professional renovation cleanup service
            </p>
          </div>
        </section>

        {/* Renovation Cleanup Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Renovation Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive cleanup services for all types of renovation and construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction Debris Removal */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Construction Debris Removal
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete removal of all construction materials, debris, and waste from renovation sites.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Drywall and lumber removal</li>
                  <li>• Concrete and masonry debris</li>
                  <li>• Metal and plastic waste</li>
                  <li>• Complete site cleanup</li>
                </ul>
              </div>

              {/* Interior Renovation Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Interior Renovation Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleanup of interior spaces after kitchen, bathroom, or room renovations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kitchen renovation cleanup</li>
                  <li>• Bathroom renovation cleanup</li>
                  <li>• Room renovation cleanup</li>
                  <li>• Interior dust removal</li>
                </ul>
              </div>

              {/* Exterior Renovation Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Exterior Renovation Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete cleanup of exterior areas after siding, roofing, or landscaping projects.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Siding renovation cleanup</li>
                  <li>• Roofing project cleanup</li>
                  <li>• Landscaping cleanup</li>
                  <li>• Exterior debris removal</li>
                </ul>
              </div>

              {/* Final Cleaning & Detailing */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Final Cleaning & Detailing
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed cleaning to prepare your renovated space for move-in or use.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Surface cleaning</li>
                  <li>• Dust removal</li>
                  <li>• Final detailing</li>
                  <li>• Move-in ready condition</li>
                </ul>
              </div>

              {/* Hazardous Material Cleanup */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Hazardous Material Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal and disposal of hazardous materials from renovation sites.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Asbestos removal</li>
                  <li>• Lead paint cleanup</li>
                  <li>• Chemical waste disposal</li>
                  <li>• Safety compliance</li>
                </ul>
              </div>

              {/* Property Restoration */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Property Restoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete restoration of your property to its pre-renovation condition.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Property cleanup</li>
                  <li>• Landscape restoration</li>
                  <li>• Curb appeal enhancement</li>
                  <li>• Final inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Renovation Cleanup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Renovation Cleanup Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional renovation cleanup provides numerous benefits for property owners and contractors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Safety & Compliance */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Safety & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  Ensure safety and compliance with local regulations and building codes.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Safety standards</li>
                  <li>• Code compliance</li>
                  <li>• Hazard removal</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Property Value */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Maximize Property Value
                </h3>
                <p className="text-gray-600 mb-4">
                  Clean, well-maintained properties command higher values and faster sales.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Higher property values</li>
                  <li>• Faster sales</li>
                  <li>• Market appeal</li>
                  <li>• Investment protection</li>
                </ul>
              </div>

              {/* Time Savings */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Time Savings
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional teams work efficiently to complete cleanup quickly.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Fast completion</li>
                  <li>• Efficient process</li>
                  <li>• Professional speed</li>
                  <li>• Project timeline</li>
                </ul>
              </div>

              {/* Professional Equipment */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Professional Equipment
                </h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty equipment and tools to handle any size renovation cleanup job.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heavy-duty trucks</li>
                  <li>• Professional tools</li>
                  <li>• Safety equipment</li>
                  <li>• Efficient cleanup</li>
                </ul>
              </div>

              {/* Licensed & Insured */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600 mb-4">
                  Fully licensed and insured for your protection during renovation cleanup.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Full licensing</li>
                  <li>• Comprehensive insurance</li>
                  <li>• Liability protection</li>
                  <li>• Professional standards</li>
                </ul>
              </div>

              {/* Local Expertise */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Local Jacksonville Expertise
                </h3>
                <p className="text-gray-600 mb-4">
                  We understand local building codes, regulations, and disposal requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Local knowledge</li>
                  <li>• Code compliance</li>
                  <li>• Disposal regulations</li>
                  <li>• Community connections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Cleanup Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Renovation Cleanup Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures thorough and efficient renovation cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Site Assessment
                </h3>
                <p className="text-gray-600">
                  We assess the renovation site, identify debris types, and create a cleanup plan.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Debris Removal
                </h3>
                <p className="text-gray-600">
                  We systematically remove all construction debris, materials, and waste from the site.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Deep Cleaning
                </h3>
                <p className="text-gray-600">
                  We perform thorough cleaning, dust removal, and surface preparation.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Final Inspection
                </h3>
                <p className="text-gray-600">
                  We conduct a final inspection to ensure the space is clean and ready for use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Renovation Types We Clean Up
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We handle cleanup for all types of renovation and construction projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Residential Renovations */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🏠 Residential Renovations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Kitchen renovations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Bathroom renovations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Room additions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Basement finishing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Attic conversions</span>
                  </div>
                </div>
              </div>

              {/* Commercial Renovations */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  🏢 Commercial Renovations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Office renovations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Retail space updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Restaurant renovations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Warehouse updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Industrial renovations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Jacksonville Trusts Our Renovation Cleanup Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another cleanup company - we're your renovation completion partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Renovation Cleanup Expertise
                      </h3>
                      <p className="text-gray-600">
                        Years of experience handling renovation cleanup, construction debris, and post-project restoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Standards
                      </h3>
                      <p className="text-gray-600">
                        Licensed, insured, and trained professionals handle your renovation cleanup with the highest standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Jacksonville Knowledge
                      </h3>
                      <p className="text-gray-600">
                        We understand local building codes, disposal regulations, and community requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Complete Project Support
                      </h3>
                      <p className="text-gray-600">
                        We support your renovation project from start to finish, ensuring a clean, safe completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Renovation Cleanup Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-cyan-100 rounded-lg">
                  <p className="text-sm text-cyan-800 text-center font-semibold">
                    🏗️ Professional Renovation Cleanup Available in ALL Areas 🏗️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-cyan-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Complete Your Renovation?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started with professional renovation cleanup and construction debris removal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Quote</span>
              </Link>
              <a
                href="tel:+1-904-456-3851"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Call (904) 456-3851</span>
              </a>
            </div>
            <p className="mt-6 text-cyan-200">
              Professional renovation cleanup services for Jacksonville contractors and property owners
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We also provide these related construction and cleanup services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/construction-debris-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                  Construction Debris
                </h3>
                <p className="text-sm text-gray-600">
                  Construction and demolition debris removal
                </p>
              </Link>

              <Link
                href="/same-day-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Same-Day Service
                </h3>
                <p className="text-sm text-gray-600">
                  Fast same-day junk removal
                </p>
              </Link>

              <Link
                href="/emergency-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Emergency Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  24/7 emergency response
                </p>
              </Link>

              <Link
                href="/estate-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-secondary transition-colors duration-200">
                  Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete estate and property cleanup
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
