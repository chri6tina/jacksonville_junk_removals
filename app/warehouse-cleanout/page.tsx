import Link from 'next/link'
import { Warehouse, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Wrench, Recycle, AlertTriangle, DollarSign, Users, Forklift } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function WarehouseCleanoutPage() {
  return (
    <>
      <SEOHead
        title="Warehouse Cleanout Jacksonville | Industrial Organization & Heavy Equipment Expertise"
        description="Professional warehouse cleanout in Jacksonville with industrial organization and heavy equipment expertise. We handle warehouse cleanup, industrial organization, and bulk project management with licensed crews and specialized equipment. Get a free quote today!"
        keywords="warehouse cleanout Jacksonville, warehouse cleanup, industrial organization, heavy equipment, bulk project management, warehouse organization Jacksonville"
        canonical="/warehouse-cleanout"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Warehouse className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Warehouse Cleanout Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional warehouse cleanout with industrial organization and heavy equipment expertise. We handle warehouse cleanup, industrial organization, and bulk project management efficiently.
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
            <Forklift className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Industrial Organization • Heavy Equipment • Bulk Project Management • Same-Day Service Available
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Warehouse Cleanout Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Warehouse Cleanout Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From industrial organization to heavy equipment handling, we handle all types of warehouse cleanout with industrial expertise and bulk project management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industrial Organization */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Warehouse className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industrial Organization
              </h3>
              <p className="text-gray-600 mb-4">
                Professional organization of warehouse spaces for improved workflow and efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Workflow optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Space utilization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Storage systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Safety compliance
                </li>
              </ul>
            </div>

            {/* Heavy Equipment Handling */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Forklift className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Heavy Equipment Handling
              </h3>
              <p className="text-gray-600 mb-4">
                Professional handling of heavy machinery and industrial equipment during cleanout.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Machinery removal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Equipment relocation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Safe disassembly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Specialized tools
                </li>
              </ul>
            </div>

            {/* Bulk Project Management */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bulk Project Management
              </h3>
              <p className="text-gray-600 mb-4">
                Professional management of large-scale warehouse cleanout projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Project planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Timeline management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Resource coordination
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Progress tracking
                </li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Inventory Management
              </h3>
              <p className="text-gray-600 mb-4">
                Professional handling of warehouse inventory during cleanout operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Inventory assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Item categorization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Safe handling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Documentation
                </li>
              </ul>
            </div>

            {/* Safety & Compliance */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Safety & Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure safety and compliance with industrial regulations during cleanout.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Safety protocols
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  OSHA compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Hazard assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Protective measures
                </li>
              </ul>
            </div>

            {/* Specialized Equipment */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialized Equipment
              </h3>
              <p className="text-gray-600 mb-4">
                Professional equipment for warehouse access and specialized cleanout operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Forklifts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Cranes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Lifting equipment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  Material handling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Warehouse Cleanout Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Warehouse Cleanout
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local warehouse cleanout experts with industrial organization and heavy equipment expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Warehouse className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industrial Organization</h3>
              <p className="text-gray-600">
                Professional organization of warehouse spaces for improved workflow and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Forklift className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heavy Equipment</h3>
              <p className="text-gray-600">
                Professional handling of heavy machinery and industrial equipment during cleanout.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bulk Project Management</h3>
              <p className="text-gray-600">
                Professional management of large-scale warehouse cleanout projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast response times with same-day warehouse cleanout available for urgent needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's industrial facilities and warehouse requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville businesses for our warehouse cleanout expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Cleanout Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Warehouse Cleanout Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for efficient, industrial-focused, and safely managed warehouse cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industrial Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your warehouse space, equipment, and organizational requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Planning</h3>
              <p className="text-gray-600 text-sm">
                We create a detailed plan considering safety protocols and industrial compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Handling</h3>
              <p className="text-gray-600 text-sm">
                Professional crew handles heavy equipment and machinery with specialized tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organization</h3>
              <p className="text-gray-600 text-sm">
                We organize remaining items and optimize warehouse space for improved workflow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Completion</h3>
              <p className="text-gray-600 text-sm">
                We complete the cleanout and ensure warehouse operations can resume safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Benefits */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industrial Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our industrial organization and heavy equipment expertise benefit Jacksonville warehouses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Warehouse className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved Workflow</h3>
              <p className="text-gray-600 mb-4">
                Optimize warehouse layout and organization for improved productivity and efficiency.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Boost productivity
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Reduce operational costs through better space utilization and workflow optimization.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Save money
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with industrial safety regulations and OSHA requirements.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Stay compliant
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Forklift className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize equipment placement and workflow for improved operational efficiency.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Maximize efficiency
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Safety</h3>
              <p className="text-gray-600 mb-4">
                Create safer working environments for warehouse employees and staff.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
                Protect your team
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-orange-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Results</h3>
              <p className="text-gray-600 mb-4">
                Professional warehouse organization with guaranteed industrial expertise.
              </p>
              <div className="text-sm text-orange-600 font-semibold">
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
              Warehouse Cleanout Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive warehouse cleanout services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal warehouse cleanout with special attention to beach industrial considerations and seasonal operations.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban warehouse cleanout with large property access and upscale industrial organization.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district warehouse cleanout with careful handling of older industrial buildings and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic building experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood warehouse cleanout with premium service and careful industrial protection.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential warehouse cleanout with bulk cleanup and industrial project services.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Industrial specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban warehouse cleanout with large lot access and family business industrial organization.
              </p>
              <div className="flex items-center gap-2 text-orange-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family business experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Warehouse Cleanout?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let warehouse disorganization impact your operations. Our local experts are ready to help with industrial organization and heavy equipment expertise.
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
              We offer comprehensive cleanup services beyond just warehouse cleanout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/office-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Warehouse className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Office Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional office cleanout with business continuity focus and minimal disruption.
                </p>
              </div>
            </Link>

            <Link href="/commercial-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Commercial Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional commercial cleanout with business expertise and project management.
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

            <Link href="/hazardous-waste-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition duration-300">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition duration-300">
                  Hazardous Waste
                </h3>
                <p className="text-gray-600">
                  Professional hazardous waste removal with specialized handling and compliance expertise.
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
