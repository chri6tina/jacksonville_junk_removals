import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, MapPin, Clock, Shield, Truck, CheckCircle, Hammer, DollarSign, Star, Building, Home, Car, ShoppingBag, GraduationCap, Hospital, Factory, TreePine, Leaf, Waves, Building2, Users, Award, Target, Zap, BookOpen, Microscope, Computer, Paintbrush, HardHat, Wrench, FileText, Calendar, CheckSquare, Handshake, Search, Filter, Store, Church, Hotel } from 'lucide-react'
import StrategicInternalLinking from '@/components/StrategicInternalLinking'

export const metadata: Metadata = {
  title: 'Jacksonville Business Directory | Local Companies & Services (904) 456-3851',
  description: 'Comprehensive Jacksonville business directory featuring local companies, contractors, and services. Find trusted Jacksonville businesses for all your needs. Call (904) 456-3851',
  keywords: 'Jacksonville business directory, Jacksonville companies, Jacksonville contractors, Jacksonville services, local businesses Jacksonville FL, Jacksonville business listings',
  alternates: {
    canonical: '/jacksonville-business-directory',
  },
}

export default function JacksonvilleBusinessDirectoryPage() {
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
                  Jacksonville Business <br /> <span className="text-blue-300">Directory</span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-xl font-medium drop-shadow-md mx-auto lg:mx-0">
                  <span className="text-blue-300 font-bold">COMPREHENSIVE DIRECTORY OF JACKSONVILLE BUSINESSES & SERVICES</span><br /> Find trusted local companies, contractors, and services<br /> Supporting Jacksonville's business community since 2020.
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

        {/* Jacksonville Business Directory Alert */}
        <section className="bg-primary text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Building className="w-6 h-6" />
              <span className="text-lg font-semibold">
                🏢 JACKSONVILLE BUSINESS DIRECTORY & LOCAL SERVICES 🏢
              </span>
              <Building className="w-6 h-6" />
            </div>
            <p className="mt-2 text-sm">
              Call (904) 456-3851 • Supporting Jacksonville Businesses • Local Business Network
            </p>
          </div>
        </section>

        {/* Business Categories Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Business Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of Jacksonville's diverse business landscape
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Construction & Contractors */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <HardHat className="w-12 h-12 text-orange-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Construction & Contractors</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  General contractors, specialty contractors, and construction companies serving Jacksonville.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• General contractors</li>
                  <li>• Specialty contractors</li>
                  <li>• Construction management</li>
                  <li>• Development companies</li>
                </ul>
                <Link
                  href="/jacksonville-construction-partnerships"
                  className="text-orange-600 hover:text-orange-800 font-semibold"
                >
                  View Construction Partnerships →
                </Link>
              </div>

              {/* Healthcare & Medical */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Hospital className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare & Medical</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Medical facilities, healthcare providers, and medical services across Jacksonville.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Medical facilities</li>
                  <li>• Healthcare providers</li>
                  <li>• Medical equipment</li>
                  <li>• Health services</li>
                </ul>
                <Link
                  href="/medical-facility-post-construction-cleanup"
                  className="text-secondary hover:text-primary font-semibold"
                >
                  View Healthcare Directory →
                </Link>
              </div>

              {/* Hospitality & Tourism */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Hotel className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Hospitality & Tourism</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Hotels, restaurants, and tourism businesses serving Jacksonville visitors.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Hotels & resorts</li>
                  <li>• Restaurants & dining</li>
                  <li>• Tourism services</li>
                  <li>• Event venues</li>
                </ul>
                <Link
                  href="/hotel-post-construction-cleanup"
                  className="text-secondary hover:text-primary font-semibold"
                >
                  View Hospitality Directory →
                </Link>
              </div>

              {/* Education & Training */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Education & Training</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Schools, universities, and educational institutions throughout Jacksonville.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Schools & universities</li>
                  <li>• Training centers</li>
                  <li>• Educational services</li>
                  <li>• Learning resources</li>
                </ul>
                <Link
                  href="/educational-facility-post-construction-cleanup"
                  className="text-secondary hover:text-primary font-semibold"
                >
                  View Education Directory →
                </Link>
              </div>

              {/* Manufacturing & Industrial */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Factory className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Manufacturing & Industrial</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Manufacturing companies, industrial facilities, and production businesses.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Manufacturing companies</li>
                  <li>• Industrial facilities</li>
                  <li>• Production services</li>
                  <li>• Industrial equipment</li>
                </ul>
                <Link
                  href="/industrial-post-construction-cleanup"
                  className="text-secondary hover:text-primary font-semibold"
                >
                  View Industrial Directory →
                </Link>
              </div>

              {/* Retail & Commerce */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Store className="w-12 h-12 text-secondary mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Retail & Commerce</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Retail stores, shopping centers, and commercial businesses in Jacksonville.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Retail stores</li>
                  <li>• Shopping centers</li>
                  <li>• Commercial services</li>
                  <li>• Business services</li>
                </ul>
                <Link
                  href="/retail-store-post-construction-cleanup"
                  className="text-secondary hover:text-primary font-semibold"
                >
                  View Retail Directory →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Jacksonville Area Business Coverage */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jacksonville Area Business Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive business coverage across all major Jacksonville areas and neighborhoods
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Jacksonville Beach */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Waves className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Jacksonville Beach</h3>
                </div>
                <p className="text-gray-600 mb-4">Beachfront businesses, tourism, and coastal services</p>
                <div className="text-sm text-gray-500">
                  <div>• Tourism businesses</div>
                  <div>• Beach services</div>
                  <div>• Coastal construction</div>
                </div>
              </div>

              {/* Downtown Jacksonville */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-gray-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Downtown Jacksonville</h3>
                </div>
                <p className="text-gray-600 mb-4">Urban businesses, offices, and corporate services</p>
                <div className="text-sm text-gray-500">
                  <div>• Corporate offices</div>
                  <div>• Financial services</div>
                  <div>• Urban development</div>
                </div>
              </div>

              {/* Southside */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Southside</h3>
                </div>
                <p className="text-gray-600 mb-4">Suburban businesses, retail, and family services</p>
                <div className="text-sm text-gray-500">
                  <div>• Retail centers</div>
                  <div>• Family services</div>
                  <div>• Suburban development</div>
                </div>
              </div>

              {/* Mandarin */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <TreePine className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Mandarin</h3>
                </div>
                <p className="text-gray-600 mb-4">Residential services, local businesses, and community</p>
                <div className="text-sm text-gray-500">
                  <div>• Local services</div>
                  <div>• Community businesses</div>
                  <div>• Residential support</div>
                </div>
              </div>

              {/* Orange Park */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Home className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Orange Park</h3>
                </div>
                <p className="text-gray-600 mb-4">Family businesses, services, and community support</p>
                <div className="text-sm text-gray-500">
                  <div>• Family services</div>
                  <div>• Community support</div>
                  <div>• Local businesses</div>
                </div>
              </div>

              {/* Arlington */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Building2 className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Arlington</h3>
                </div>
                <p className="text-gray-600 mb-4">Industrial businesses, manufacturing, and services</p>
                <div className="text-sm text-gray-500">
                  <div>• Manufacturing</div>
                  <div>• Industrial services</div>
                  <div>• Business support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Directory Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Jacksonville Business Directory
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How our comprehensive business directory serves Jacksonville's business community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Business Discovery</h3>
                <p className="text-gray-600">Find local Jacksonville businesses quickly and efficiently</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business Network</h3>
                <p className="text-gray-600">Connect with trusted Jacksonville businesses and services</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Verified Jacksonville businesses with proven track records</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Area-Specific Services</h3>
                <p className="text-gray-600">Find businesses serving your specific Jacksonville area</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-600">Support local Jacksonville businesses and economic growth</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 border border-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Access</h3>
                <p className="text-gray-600">Fast access to Jacksonville business information and services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Internal Linking Component */}
        <StrategicInternalLinking 
          currentPage="jacksonville-business-directory"
          showCalculator={true}
          showPortfolio={true}
          showBestPractices={true}
          showCaseStudies={true}
          showPartnerships={true}
        />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Jacksonville's Business Directory?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Add your business to our comprehensive Jacksonville business directory and connect with local customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Add Your Business</span>
              </Link>
              <Link
                href="/jacksonville-construction-partnerships"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>View Partnership Opportunities</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}

