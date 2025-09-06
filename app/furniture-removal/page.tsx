import Link from 'next/link'
import type { Metadata } from 'next'
import { Sofa, Truck, Clock, MapPin, Phone, Shield, CheckCircle, Star, Heart, Home, Building, Users, Gift, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Furniture Removal Jacksonville | Donation Partnerships & Careful Handling',
  description: 'Professional furniture removal in Jacksonville with donation partnerships and careful handling. We handle sofas, beds, tables, chairs, and more with eco-friendly disposal and charity donations. Get a free quote today!',
  keywords: 'furniture removal Jacksonville, sofa removal, bed removal, table removal, furniture donation Jacksonville, eco-friendly furniture disposal, furniture pickup service, old furniture removal',
  alternates: {
    canonical: '/furniture-removal',
  },
}

export default function FurnitureRemovalPage() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Sofa className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Furniture Removal Jacksonville
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Professional furniture removal with donation partnerships and careful handling. We give your furniture a second life through charity donations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* Service Alert */}
      <section className="bg-purple-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-5 h-5" />
            <span className="text-lg font-semibold">
              Donation Partnerships • Careful Handling • Same-Day Service Available • Licensed & Insured
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Furniture Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Furniture Removal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From living room furniture to bedroom sets, we handle all types of furniture removal with donation partnerships and eco-friendly disposal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Living Room Furniture */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Living Room Furniture
              </h3>
              <p className="text-gray-600 mb-4">
                Remove and donate living room furniture including sofas, chairs, tables, and entertainment centers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Sofas & loveseats
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Armchairs & recliners
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Coffee tables & end tables
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Entertainment centers
                </li>
              </ul>
            </div>

            {/* Bedroom Furniture */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bedroom Furniture
              </h3>
              <p className="text-gray-600 mb-4">
                Professional removal of bedroom sets including beds, dressers, nightstands, and wardrobes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Beds & bed frames
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Dressers & chests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Nightstands
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Wardrobes & armoires
                </li>
              </ul>
            </div>

            {/* Dining Room Furniture */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dining Room Furniture
              </h3>
              <p className="text-gray-600 mb-4">
                Remove dining room sets including tables, chairs, buffets, and china cabinets with care.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Dining tables
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Dining chairs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Buffets & sideboards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  China cabinets
                </li>
              </ul>
            </div>

            {/* Office Furniture */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Office Furniture
              </h3>
              <p className="text-gray-600 mb-4">
                Business and home office furniture removal including desks, chairs, filing cabinets, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Office desks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Office chairs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Filing cabinets
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Conference tables
                </li>
              </ul>
            </div>

            {/* Outdoor Furniture */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Outdoor Furniture
              </h3>
              <p className="text-gray-600 mb-4">
                Patio and outdoor furniture removal including tables, chairs, umbrellas, and outdoor sets.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Patio tables & chairs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Outdoor umbrellas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Garden furniture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Pool furniture
                </li>
              </ul>
            </div>

            {/* Donation & Recycling */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Donation & Recycling
              </h3>
              <p className="text-gray-600 mb-4">
                Give your furniture a second life through our charity partnerships and recycling programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Charity donations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Habitat for Humanity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Local shelters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  Eco-friendly disposal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Furniture Service */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Jacksonville Chooses Our Furniture Removal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another junk removal company - we're your local furniture removal experts with donation partnerships and careful handling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Donation Partnerships</h3>
              <p className="text-gray-600">
                Strong relationships with local charities to give your furniture a second life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Careful Handling</h3>
              <p className="text-gray-600">
                Professional crews trained to handle furniture with care and respect.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Fast response times with same-day furniture removal available for urgent situations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of Jacksonville's donation opportunities and recycling facilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Equipment</h3>
              <p className="text-gray-600">
                Specialized tools and equipment for safe furniture removal and transportation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5-Star Service</h3>
              <p className="text-gray-600">
                Consistently rated 5-stars by Jacksonville residents for our furniture removal expertise and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Removal Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Furniture Removal Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process for safe, efficient, and donation-focused furniture removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We assess your furniture type, condition, and determine donation potential for proper planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm">
                We prepare the area, protect floors and walls, and organize the removal process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Careful Removal</h3>
              <p className="text-gray-600 text-sm">
                Professional crew removes furniture safely using proper equipment and techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation & Disposal</h3>
              <p className="text-gray-600 text-sm">
                Furniture is donated to charities or responsibly disposed of through eco-friendly methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Partnerships */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Donation Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with local charities and organizations to give your furniture a second life and help those in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Habitat for Humanity</h3>
              <p className="text-gray-600 mb-4">
                Donate furniture to help build homes for families in need throughout Jacksonville.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Building homes, changing lives
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Shelters</h3>
              <p className="text-gray-600 mb-4">
                Support homeless shelters and transitional housing programs with furniture donations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Supporting our community
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Veterans Organizations</h3>
              <p className="text-gray-600 mb-4">
                Help veterans and their families by donating furniture to veteran support programs.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Honoring our heroes
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Family Services</h3>
              <p className="text-gray-600 mb-4">
                Support families in crisis through donations to family service organizations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Strengthening families
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Youth Programs</h3>
              <p className="text-gray-600 mb-4">
                Help youth organizations and after-school programs with furniture donations.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Investing in our future
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Centers</h3>
              <p className="text-gray-600 mb-4">
                Support community centers and neighborhood programs throughout Jacksonville.
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Building community
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
              Furniture Removal Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive furniture removal services throughout Jacksonville and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jacksonville Beach</h3>
              <p className="text-gray-600 mb-4">
                Coastal furniture removal with special attention to beach property considerations and salt air protection.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Same-day service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandarin</h3>
              <p className="text-gray-600 mb-4">
                Suburban furniture removal with large property access and upscale furniture handling.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Large property specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Riverside</h3>
              <p className="text-gray-600 mb-4">
                Historic district furniture removal with careful handling of older homes and antique furniture.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Antique furniture experts</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">San Marco</h3>
              <p className="text-gray-600 mb-4">
                Upscale neighborhood furniture removal with premium service and careful property protection.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Premium service available</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Southside</h3>
              <p className="text-gray-600 mb-4">
                Commercial and residential furniture removal with bulk furniture and business cleanup services.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Commercial specialists</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orange Park</h3>
              <p className="text-gray-600 mb-4">
                Suburban furniture removal with large lot access and family home furniture handling.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Family home experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Furniture Removal?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let old furniture take up space. Our local experts are ready to help with careful removal and donation to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/estimation" 
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-white hover:text-purple-600 border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Schedule Pickup
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
              We offer comprehensive cleanup services beyond just furniture removal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/appliance-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Appliance Removal
                </h3>
                <p className="text-gray-600">
                  Professional appliance removal with eco-friendly disposal and recycling.
                </p>
              </div>
            </Link>

            <Link href="/commercial-junk-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Commercial Cleanout
                </h3>
                <p className="text-gray-600">
                  Business and commercial property cleanup with specialized equipment.
                </p>
              </div>
            </Link>

            <Link href="/estate-cleanout" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Estate Cleanout
                </h3>
                <p className="text-gray-600">
                  Compassionate estate cleanout with careful handling of valuable items.
                </p>
              </div>
            </Link>

            <Link href="/same-day-junk-removal" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Same-Day Junk Removal
                </h3>
                <p className="text-gray-600">
                  Fast, guaranteed junk removal when you need it most.
                </p>
              </div>
            </Link>

            <Link href="/emergency-cleanup" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
                  Emergency Cleanup
                </h3>
                <p className="text-gray-600">
                  24/7 emergency response for urgent cleanup needs.
                </p>
              </div>
            </Link>

            <Link href="/services" className="group">
              <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition duration-300 group-hover:shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition duration-300">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition duration-300">
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
