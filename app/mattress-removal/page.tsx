import Link from 'next/link'
import { Bed, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Leaf, Recycle, AlertTriangle, Package, Wrench, DollarSign } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function MattressRemovalPage() {
  return (
    <>
      <SEOHead
        title="Mattress Removal Jacksonville | Eco-Friendly Disposal & Recycling"
        description="Professional mattress removal in Jacksonville with eco-friendly disposal and recycling partnerships. We handle all mattress types, box springs, and bed frames with licensed crews and responsible disposal. Get a free quote today!"
        keywords="mattress removal Jacksonville, mattress disposal, box spring removal, bed frame removal, eco-friendly mattress disposal, mattress recycling Jacksonville, mattress pickup"
        canonical="/mattress-removal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Bed className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Mattress Removal Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional mattress removal with eco-friendly disposal and recycling partnerships. We handle all mattress types, box springs, and bed frames responsibly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Leaf className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Eco-Friendly Disposal • Recycling Partnerships • Licensed Crews • Same-Day Service Available
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Mattress Removal Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Mattress Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From standard mattresses to specialty beds, we handle all types of mattress removal with eco-friendly disposal and recycling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Mattresses */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Bed className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Standard Mattresses
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of standard mattresses including twin, full, queen, and king sizes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Twin & twin XL
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Full & full XL
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Queen & king
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  California king
                </li>
              </ul>
            </div>

            {/* Box Springs */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Box Springs
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of box springs, foundation bases, and bed support systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Standard box springs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Foundation bases
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Bed support systems
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Platform beds
                </li>
              </ul>
            </div>

            {/* Bed Frames */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bed Frames
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of bed frames, headboards, footboards, and bed hardware.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Metal bed frames
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Wooden bed frames
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Headboards & footboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Bed hardware
                </li>
              </ul>
            </div>

            {/* Specialty Beds */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specialty Beds
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of specialty beds including adjustable, hospital, and custom beds.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Adjustable beds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Hospital beds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Custom beds
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Bunk beds
                </li>
              </ul>
            </div>

            {/* Memory Foam & Hybrid */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Memory Foam & Hybrid
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and dispose of memory foam, hybrid, and specialty mattress materials.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Memory foam mattresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Hybrid mattresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Gel mattresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Latex mattresses
                </li>
              </ul>
            </div>

            {/* Bedroom Sets */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bedroom Sets
              </h3>
              <p className="text-gray-600 mb-4">
                Complete bedroom set removal including mattresses, furniture, and accessories.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Complete bed sets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Bedroom furniture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Bedding accessories
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Room cleanouts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Mattress Removal Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Mattress Removal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local mattress removal experts with eco-friendly disposal and recycling partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly Disposal</h3>
              <p className="text-gray-600">
                Responsible mattress disposal that protects the environment and reduces landfill waste.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recycling Partnerships</h3>
              <p className="text-gray-600">
                Partnerships with local recycling facilities to maximize mattress material recovery.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                Full licensing and insurance coverage for all mattress removal services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Equipment</h3>
              <p className="text-gray-600">
                Professional equipment designed specifically for mattress handling and removal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's disposal regulations and recycling opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville residents for our mattress removal expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mattress Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mattress Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process for safe, efficient, and eco-friendly mattress removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your mattress type, size, and removal requirements for proper handling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area and protect your floors and walls during the removal process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes your mattress safely using proper techniques and equipment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Disposal</h3>
              <p className="text-gray-600 text-sm">
                We transport your mattress to recycling facilities for eco-friendly disposal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cleanup</h3>
              <p className="text-gray-600 text-sm">
                We clean up the area and leave your space ready for your new mattress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Benefits */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eco-Friendly Mattress Disposal Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our eco-friendly mattress removal services benefit Jacksonville and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Protection</h3>
              <p className="text-gray-600 mb-4">
                Reduce landfill waste and prevent harmful chemicals from leaching into the environment.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Protect our planet
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Recovery</h3>
              <p className="text-gray-600 mb-4">
                Recover valuable materials like steel, foam, and fabric for reuse in new products.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Maximize resource value
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 mb-4">
                Avoid landfill fees and reduce disposal costs through recycling partnerships.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Save money & resources
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with Jacksonville's waste disposal and environmental regulations.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Stay compliant
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Support local recycling initiatives and contribute to Jacksonville's sustainability goals.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Build a better community
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Sustainability</h3>
              <p className="text-gray-600 mb-4">
                Help create a more sustainable future for Jacksonville and future generations.
              </p>
              <div className="text-sm text-green-600 font-semibold">
                Invest in tomorrow
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
              Mattress Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive mattress removal services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal mattress removal with special attention to beach property considerations and vacation rentals.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban mattress removal with large property access and upscale home handling.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district mattress removal with careful handling of older homes and renovation projects.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Historic home experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood mattress removal with premium service and careful property protection.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential mattress removal with bulk removal and business project services.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Commercial specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban mattress removal with large lot access and family home handling.
              </p>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family home experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Mattress Removal?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let old mattresses take up space. Our local experts are ready to help with eco-friendly mattress removal and recycling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-green-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
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
              We offer comprehensive cleanup services beyond just mattress removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/furniture-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Furniture Removal
                </h3>
                <p className="text-gray-600">
                  Professional furniture removal with donation partnerships and careful handling.
                </p>
              </div>
            </Link>

            <Link href="/appliance-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Appliance Removal
                </h3>
                <p className="text-gray-600">
                  Professional appliance removal with eco-friendly disposal and recycling.
                </p>
              </div>
            </Link>

            <Link href="/same-day-junk-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Same-Day Junk Removal
                </h3>
                <p className="text-gray-600">
                  Fast, guaranteed junk removal when you need it most.
                </p>
              </div>
            </Link>

            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/commercial-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Bed className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
                  Commercial Cleanout
                </h3>
                <p className="text-gray-600">
                  Professional commercial cleanout with business expertise and project management.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition duration-300">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition duration-300">
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
