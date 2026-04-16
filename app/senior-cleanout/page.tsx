import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Heart, DollarSign, Star, Users, Home, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Senior Cleanout Jacksonville | Elderly Cleanout Services | Compassionate Cleanup (904) 456-3851',
  description: 'Jacksonville senior cleanout service. Compassionate elderly cleanout, senior move assistance, downsizing help. Professional, understanding, licensed service. Call (904) 456-3851 for senior cleanout.',
  keywords: 'senior cleanout Jacksonville, elderly cleanout Jacksonville, senior move assistance Jacksonville, downsizing help Jacksonville, senior cleanup Jacksonville, Jacksonville senior cleanout, elderly Jacksonville',
  alternates: {
    canonical: '/senior-cleanout',
  },
}

export default function SeniorCleanoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-pink-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Senior Cleanout Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-pink-300 font-bold">COMPASSIONATE & UNDERSTANDING</span><br />
                Professional senior cleanout with care and respect. 
                We help seniors and families with downsizing, moving, and home transitions throughout Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Senior Cleanout Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-pink-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-pink-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">
                💝 COMPASSIONATE SENIOR CLEANOUT SERVICES 💝
              </span>
              <Heart className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for compassionate senior cleanout service
            </p>
          </div>
        </section>

        {/* Understanding Senior Needs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Understanding Senior Cleanout Needs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We approach senior cleanout with compassion, patience, and understanding of unique challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Emotional Sensitivity
                      </h3>
                      <p className="text-gray-600">
                        We understand that downsizing and moving can be emotionally challenging. Our team approaches every situation with care and respect.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Family Involvement
                      </h3>
                      <p className="text-gray-600">
                        We work closely with families to ensure the cleanout process respects the senior's wishes and family preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Physical Limitations
                      </h3>
                      <p className="text-gray-600">
                        We handle all the physical work, allowing seniors to focus on decision-making without physical strain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Home Transitions
                      </h3>
                      <p className="text-gray-600">
                        We help seniors transition from large family homes to smaller spaces, assisted living, or family homes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Common Senior Cleanout Situations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Downsizing to smaller homes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Moving to assisted living</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Moving in with family</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Estate planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Health-related moves</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Retirement community moves</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Cleanout Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Senior Cleanout Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final cleanup, we handle every aspect of senior transitions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Initial Consultation */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Initial Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Compassionate consultation to understand needs, timeline, and family preferences.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Family meeting</li>
                  <li>• Needs assessment</li>
                  <li>• Timeline planning</li>
                  <li>• Cost evaluation</li>
                </ul>
              </div>

              {/* Item Sorting & Organization */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Item Sorting & Organization
                </h3>
                <p className="text-gray-600 mb-4">
                  Careful sorting of items into keep, donate, family, and dispose categories.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Respectful item handling</li>
                  <li>• Family decision support</li>
                  <li>• Donation coordination</li>
                  <li>• Memory preservation</li>
                </ul>
              </div>

              {/* Downsizing Support */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Downsizing Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional support for transitioning from large homes to smaller spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Space planning</li>
                  <li>• Furniture selection</li>
                  <li>• Storage solutions</li>
                  <li>• Move coordination</li>
                </ul>
              </div>

              {/* Family Heirloom Protection */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Family Heirloom Protection
                </h3>
                <p className="text-gray-600 mb-4">
                  Special care for family heirlooms, antiques, and sentimental items.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heirloom identification</li>
                  <li>• Safe handling</li>
                  <li>• Family distribution</li>
                  <li>• Preservation advice</li>
                </ul>
              </div>

              {/* Complete Home Cleanup */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Home Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleanup and preparation of the home for sale, rental, or new occupants.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete home cleanup</li>
                  <li>• Surface cleaning</li>
                  <li>• Property preparation</li>
                  <li>• Final inspection</li>
                </ul>
              </div>

              {/* Ongoing Support */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ongoing Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Continued support and resources for maintaining organized spaces.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maintenance tips</li>
                  <li>• Resource referrals</li>
                  <li>• Follow-up support</li>
                  <li>• Family guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Compassionate Approach to Senior Cleanout
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that every senior transition is unique and requires a personalized, caring approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compassionate Consultation
                </h3>
                <p className="text-gray-600">
                  We begin with a caring, no-pressure consultation to understand your family's needs and concerns.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Family Planning
                </h3>
                <p className="text-gray-600">
                  We work with families to create a personalized plan that respects everyone's wishes and timeline.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Caring Execution
                </h3>
                <p className="text-gray-600">
                  Our team works with care and respect, involving families in decisions about belongings.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Transition
                </h3>
                <p className="text-gray-600">
                  We ensure a smooth transition to the new living situation with ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Senior Cleanout Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another cleanup company - we're your family's transition partners
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Senior Care Expertise
                      </h3>
                      <p className="text-gray-600">
                        Our team is specifically trained in senior care, emotional support, and family transition assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during senior cleanout operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and professional tools to handle any size senior cleanout job safely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Local Jacksonville Service
                      </h3>
                      <p className="text-gray-600">
                        We're your neighbors, not a faceless corporation. Local knowledge and community connections matter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Senior Cleanout Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-pink-100 rounded-lg">
                  <p className="text-sm text-pink-800 text-center font-semibold">
                    💝 Compassionate Senior Service Available in ALL Areas 💝
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Senior Transition?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started with a compassionate, professional senior cleanout consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Consultation</span>
              </Link>
              <a
                href="tel:+1-904-456-3851"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Call (904) 456-3851</span>
              </a>
            </div>
            <p className="mt-6 text-pink-200">
              Professional, compassionate senior cleanout services for Jacksonville families
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
                We also provide these related senior and family transition services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/estate-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-pink-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-200">
                  Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete estate and property cleanup
                </p>
              </Link>

              <Link
                href="/hoarding-cleanup"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-pink-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Hoarding Cleanup
                </h3>
                <p className="text-sm text-gray-600">
                  Compassionate hoarding cleanup services
                </p>
              </Link>

              <Link
                href="/furniture-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-pink-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Furniture Removal
                </h3>
                <p className="text-sm text-gray-600">
                  Professional furniture removal services
                </p>
              </Link>

              <Link
                href="/same-day-junk-removal"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-pink-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Same-Day Service
                </h3>
                <p className="text-sm text-gray-600">
                  Fast same-day junk removal
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
