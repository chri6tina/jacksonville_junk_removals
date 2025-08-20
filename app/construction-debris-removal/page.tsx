import Link from 'next/link'
import { Wrench, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, HardHat, Building, Hammer, Ruler, AlertTriangle, Package } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function ConstructionDebrisRemovalPage() {
  return (
    <>
      <SEOHead
        title="Construction Debris Removal Jacksonville | Project Management & Specialized Equipment"
        description="Professional construction debris removal in Jacksonville with project management and specialized equipment. We handle demolition waste, renovation debris, and construction cleanup with licensed crews. Get a free quote today!"
        keywords="construction debris removal Jacksonville, demolition waste removal, renovation debris cleanup, construction cleanup Jacksonville, project management, specialized equipment, construction waste disposal"
        canonical="/construction-debris-removal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <HardHat className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Construction Debris Removal Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional construction debris removal with project management and specialized equipment. We handle demolition waste, renovation debris, and construction cleanup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-orange-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <HardHat className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Project Management • Specialized Equipment • Licensed Crews • Same-Day Service Available
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Construction Debris Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Construction Debris Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From demolition waste to renovation debris, we handle all types of construction cleanup with project management and specialized equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Demolition Waste */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Hammer className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Demolition Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of demolition debris including concrete, wood, metal, and structural materials.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Concrete & masonry
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Wood & lumber
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Metal & rebar
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Structural debris
                </li>
              </ul>
            </div>

            {/* Renovation Debris */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Renovation Debris
              </h3>
              <p className="text-gray-600 mb-4">
                Clean up after renovation projects including drywall, flooring, cabinets, and fixtures.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Drywall & plaster
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Flooring materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Cabinets & fixtures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Paint & materials
                </li>
              </ul>
            </div>

            {/* Construction Cleanup */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Construction Cleanup
              </h3>
              <p className="text-gray-600 mb-4">
                Post-construction cleanup and final site preparation for new projects and renovations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Site preparation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Final cleanup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Material disposal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Site restoration
                </li>
              </ul>
            </div>

            {/* Roofing Debris */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <HardHat className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Roofing Debris
              </h3>
              <p className="text-gray-600 mb-4">
                Remove roofing materials, shingles, and related debris from roof replacement projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Old shingles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Roofing materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Flashing & vents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Underlayment
                </li>
              </ul>
            </div>

            {/* Interior Remodeling */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Ruler className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interior Remodeling
              </h3>
              <p className="text-gray-600 mb-4">
                Clean up after interior remodeling projects including kitchen, bathroom, and room renovations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Kitchen remodels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Bathroom renovations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Room additions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Basement finishing
                </li>
              </ul>
            </div>

            {/* Exterior Projects */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Exterior Projects
              </h3>
              <p className="text-gray-600 mb-4">
                Clean up after exterior construction including siding, decking, and landscaping projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Siding replacement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Deck construction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Landscaping projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Driveway work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Construction Debris Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Construction Debris Removal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local construction debris experts with project management and specialized equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600">
                Full project coordination from initial planning to final cleanup and site restoration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Equipment</h3>
              <p className="text-gray-600">
                Professional equipment designed specifically for construction debris removal and handling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Full licensing and insurance coverage for all construction debris removal services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast response times with same-day construction debris removal available for urgent projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's construction regulations and disposal requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville contractors for our construction debris expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Debris Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Construction Debris Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for safe, efficient, and project-managed construction debris removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your construction project scope, debris types, and removal requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Planning & Scheduling</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed removal plan and schedule that works with your construction timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area, organize debris, and set up safe removal zones.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Efficient Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes construction debris using specialized equipment and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Site Restoration</h3>
              <p className="text-gray-600 text-sm">
                We clean up the site and prepare it for the next phase of your construction project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Services */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive project management to ensure your construction debris removal is seamless and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <HardHat className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Coordination</h3>
              <p className="text-gray-600 mb-4">
                Coordinate with contractors, architects, and project managers to ensure seamless debris removal.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Keeping projects on schedule
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Timeline Management</h3>
              <p className="text-gray-600 mb-4">
                Manage removal schedules to minimize construction delays and keep projects moving forward.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Optimizing project flow
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure all debris removal meets safety standards and construction site requirements.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Protecting your team
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment Management</h3>
              <p className="text-gray-600 mb-4">
                Provide the right equipment and crew for each specific construction debris removal project.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Right tools for the job
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Restoration</h3>
              <p className="text-gray-600 mb-4">
                Clean and prepare construction sites for the next phase of your building project.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Ready for next steps
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600 mb-4">
                Ensure all debris removal meets your quality standards and project specifications.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Exceeding expectations
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
              Construction Debris Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive construction debris removal services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal construction debris removal with special attention to beach property considerations and salt air protection.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban construction debris removal with large property access and upscale project handling.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district construction debris removal with careful handling of older homes and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic renovation experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood construction debris removal with premium service and careful property protection.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential construction debris removal with bulk debris and business project services.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Commercial specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban construction debris removal with large lot access and family home project handling.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family home experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Construction Debris Removal?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let construction debris slow down your project. Our local experts are ready to help with project management and specialized equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-orange-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
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
              We offer comprehensive cleanup services beyond just construction debris removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/renovation-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Renovation Cleanup
                </h3>
                <p className="text-gray-600">
                  Post-renovation cleanup and debris removal for home improvement projects.
                </p>
              </div>
            </Link>

            <Link href="/appliance-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Building className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Appliance Removal
                </h3>
                <p className="text-gray-600">
                  Professional appliance removal with eco-friendly disposal and recycling.
                </p>
              </div>
            </Link>

            <Link href="/furniture-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <HardHat className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Furniture Removal
                </h3>
                <p className="text-gray-600">
                  Professional furniture removal with donation partnerships and careful handling.
                </p>
              </div>
            </Link>

            <Link href="/same-day-junk-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Same-Day Junk Removal
                </h3>
                <p className="text-gray-600">
                  Fast, guaranteed junk removal when you need it most.
                </p>
              </div>
            </Link>

            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
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
