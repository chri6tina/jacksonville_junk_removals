import Link from 'next/link'
import { Phone, Clock, MapPin, Shield, Truck, CheckCircle, Heart, DollarSign, Star, Users, Home } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function HoardingCleanupPage() {
  return (
    <>
      <SEOHead
        title="Hoarding Cleanup Jacksonville | Professional Hoarding Cleanup | Compassionate Service (904) 456-3851"
        description="Jacksonville hoarding cleanup service. Professional, compassionate hoarding cleanup, hoarding intervention, extreme clutter removal. Licensed, insured, sensitive approach. Call (904) 456-3851 for professional hoarding cleanup."
        keywords="hoarding cleanup Jacksonville, hoarding intervention Jacksonville, extreme clutter removal Jacksonville, hoarding cleanup service Jacksonville, professional hoarding cleanup Jacksonville, Jacksonville hoarding cleanup, hoarding help Jacksonville"
        canonical="https://jacksonvillejunkremovals.com/hoarding-cleanup"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Heart className="w-16 h-16 text-purple-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hoarding Cleanup Jacksonville
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                <span className="text-purple-300 font-bold">COMPASSIONATE & PROFESSIONAL</span><br />
                Professional hoarding cleanup with sensitivity and care. 
                We help restore homes and lives throughout Jacksonville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Hoarding Cleanup Quote</span>
                </Link>
                <Link
                  href="/estimation"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Alert */}
        <section className="bg-purple-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">
                💜 PROFESSIONAL HOARDING CLEANUP SERVICES 💜
              </span>
              <Heart className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 for compassionate hoarding cleanup service
            </p>
          </div>
        </section>

        {/* Understanding Hoarding */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Understanding Hoarding Cleanup
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We approach hoarding cleanup with compassion, understanding, and professional expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Compassionate Approach
                      </h3>
                      <p className="text-gray-600">
                        We understand that hoarding is a complex issue. Our team approaches every situation with empathy, respect, and dignity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Family Involvement
                      </h3>
                      <p className="text-gray-600">
                        We work closely with families to ensure the cleanup process respects the individual's needs and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Standards
                      </h3>
                      <p className="text-gray-600">
                        Our team is trained in hoarding cleanup protocols, safety procedures, and biohazard handling.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Home Restoration
                      </h3>
                      <p className="text-gray-600">
                        We don't just remove items - we help restore your home to a safe, clean, and livable condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Signs You May Need Hoarding Cleanup
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Rooms are difficult to navigate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Excessive clutter accumulation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Safety hazards in the home</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Difficulty maintaining cleanliness</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Family or friend concerns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Health department notices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hoarding Cleanup Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Hoarding Cleanup Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial assessment to complete home restoration, we handle every aspect of hoarding cleanup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Initial Assessment */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Initial Assessment
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional evaluation of the situation, safety concerns, and cleanup requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Safety assessment</li>
                  <li>• Cleanup planning</li>
                  <li>• Timeline estimation</li>
                  <li>• Cost evaluation</li>
                </ul>
              </div>

              {/* Item Sorting & Organization */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Item Sorting & Organization
                </h3>
                <p className="text-gray-600 mb-4">
                  Careful sorting of items into keep, donate, recycle, and dispose categories.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Respectful item handling</li>
                  <li>• Family decision support</li>
                  <li>• Donation coordination</li>
                  <li>• Recycling options</li>
                </ul>
              </div>

              {/* Deep Cleaning */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Deep Cleaning & Sanitization
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive cleaning, sanitization, and deodorization of all affected areas.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Surface cleaning</li>
                  <li>• Sanitization</li>
                  <li>• Deodorization</li>
                  <li>• Air quality improvement</li>
                </ul>
              </div>

              {/* Structural Repairs */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Structural Repairs
                </h3>
                <p className="text-gray-600 mb-4">
                  Assessment and basic repairs for damage caused by hoarding conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Damage assessment</li>
                  <li>• Basic repairs</li>
                  <li>• Safety improvements</li>
                  <li>• Professional referrals</li>
                </ul>
              </div>

              {/* Biohazard Cleanup */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Biohazard Cleanup
                </h3>
                <p className="text-gray-600 mb-4">
                  Safe removal and disposal of hazardous materials and biohazards.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hazardous material removal</li>
                  <li>• Biohazard cleanup</li>
                  <li>• Safe disposal</li>
                  <li>• Health protection</li>
                </ul>
              </div>

              {/* Aftercare Support */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Aftercare Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Ongoing support and resources to maintain a clean, organized home.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Maintenance tips</li>
                  <li>• Resource referrals</li>
                  <li>• Follow-up support</li>
                  <li>• Prevention strategies</li>
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
                Our Compassionate Approach to Hoarding Cleanup
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that every hoarding situation is unique and requires a personalized approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Compassionate Consultation
                </h3>
                <p className="text-gray-600">
                  We begin with a sensitive, no-pressure consultation to understand your needs and concerns.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customized Plan
                </h3>
                <p className="text-gray-600">
                  We create a personalized cleanup plan that respects your timeline and preferences.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Respectful Execution
                </h3>
                <p className="text-gray-600">
                  Our team works with care and respect, involving you in decisions about your belongings.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complete Restoration
                </h3>
                <p className="text-gray-600">
                  We restore your home to a safe, clean, and comfortable living environment.
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
                Why Choose Our Hoarding Cleanup Service?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're not just another cleanup company - we're your partners in home restoration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Specialized Training
                      </h3>
                      <p className="text-gray-600">
                        Our team is specifically trained in hoarding cleanup protocols, safety procedures, and compassionate care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Licensed & Insured
                      </h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your protection during hoarding cleanup operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Equipment
                      </h3>
                      <p className="text-gray-600">
                        Heavy-duty equipment and professional tools to handle any size hoarding cleanup job safely.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
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
                  Hoarding Cleanup Areas We Serve
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Jacksonville Beach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Riverside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Southside</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Mandarin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Arlington</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Orange Park</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">San Marco</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">All of Duval County</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                  <p className="text-sm text-purple-800 text-center font-semibold">
                    💜 Compassionate Service Available in ALL Areas 💜
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Restore Your Home?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get started with a compassionate, professional hoarding cleanup consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-6 h-6" />
                <span>Get Free Consultation</span>
              </Link>
              <a
                href="tel:+1-904-456-3851"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-xl transition-colors duration-200 flex items-center justify-center"
              >
                <span>Call (904) 456-3851</span>
              </a>
            </div>
            <p className="mt-6 text-purple-200">
              Professional, compassionate hoarding cleanup services for Jacksonville families
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
                We also provide these related cleanup and organization services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/estate-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-200">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  Estate Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Complete home and estate cleanup
                </p>
              </Link>

              <Link
                href="/garage-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-200">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  Garage Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Garage organization and cleanup
                </p>
              </Link>

              <Link
                href="/basement-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-200">
                  Basement Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Basement organization and cleanup
                </p>
              </Link>

              <Link
                href="/storage-unit-cleanout"
                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-purple-50 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-yellow-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-200">
                  Storage Unit Cleanout
                </h3>
                <p className="text-sm text-gray-600">
                  Storage unit organization and cleanup
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
