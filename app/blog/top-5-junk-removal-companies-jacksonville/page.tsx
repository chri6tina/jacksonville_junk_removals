import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Star, CheckCircle, Phone, MapPin, Truck, Shield, Leaf, DollarSign } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Top 5 Junk Removal Companies in Jacksonville: How to Choose the Right One',
  description: 'Discover the best junk removal companies in Jacksonville, Florida. Learn what to look for when choosing a professional service provider. Expert guide with tips and recommendations.',
  keywords: 'top junk removal companies Jacksonville, best junk removal Jacksonville, Jacksonville junk removal guide, choose junk removal company',
}

export default function Top5JunkRemovalCompaniesPage() {
  return (
    <>
      <SEOHead
        title="Top 5 Junk Removal Companies Jacksonville | Best Cleanout Services | (904) 456-3851"
        description="Discover the top 5 junk removal companies in Jacksonville. Compare services, pricing, and customer reviews. Professional cleanout services you can trust. Call (904) 456-3851."
        keywords="top junk removal companies Jacksonville, best junk removal Jacksonville, Jacksonville junk removal companies, junk removal comparison Jacksonville, professional cleanout Jacksonville"
        canonical="/blog/top-5-junk-removal-companies-jacksonville"
        ogType="article"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md mb-6">
            <Star className="w-5 h-5" />
            <span className="text-sm font-bold">FEATURED ARTICLE</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Top 5 Junk Removal Companies
            <br />
            <span className="text-yellow-400">in Jacksonville</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            How to Choose the Right Professional Service Provider for Your Junk Removal Needs
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choosing the right junk removal company in Jacksonville can make all the difference between a smooth, 
              professional experience and a frustrating ordeal. With so many options available, it's essential to know 
              what to look for and how to evaluate different service providers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes a Great Junk Removal Company?
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Before we dive into our top recommendations, let's explore the key factors that separate excellent 
              junk removal companies from mediocre ones:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licensing & Insurance</h3>
                  <p className="text-gray-600 text-sm">
                    Proper licensing ensures compliance with local regulations, while insurance protects you from liability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Equipment</h3>
                  <p className="text-gray-600 text-sm">
                    Quality equipment ensures efficient removal and minimizes damage to your property.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly Practices</h3>
                  <p className="text-gray-600 text-sm">
                    Responsible disposal and recycling demonstrate environmental consciousness and community care.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Clear, upfront pricing without hidden fees builds trust and prevents surprises.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Top 5 Junk Removal Companies in Jacksonville
            </h2>

            <div className="space-y-12 mb-12">
              {/* Company 1 */}
              <div className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      1. Jacksonville Junk Removals
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0 (500+ reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Starting at $75</div>
                    <div className="text-sm text-gray-500">No hidden fees</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Why They're #1:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Same-day service available</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>100% eco-friendly disposal</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Licensed & fully insured</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Local Jacksonville expertise</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Services Offered:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Residential junk removal</li>
                      <li>• Commercial cleanouts</li>
                      <li>• Construction debris</li>
                      <li>• Estate cleanouts</li>
                      <li>• Appliance removal</li>
                      <li>• Hot tub removal</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+19047423531"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (904) 742-3531</span>
                  </a>
                  <Link
                    href="/contact"
                    className="border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>

              {/* Company 2 */}
              <div className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      2. Junk King Jacksonville
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <Star className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">4.2 (300+ reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Starting at $99</div>
                    <div className="text-sm text-gray-500">Quarter-truck special</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strengths:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Nationwide franchise</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>60% recycling rate</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Online booking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Professional crews</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Areas for Improvement:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Higher pricing than local companies</li>
                      <li>• Less personalized service</li>
                      <li>• Limited local knowledge</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company 3 */}
              <div className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      3. 1-800-GOT-JUNK?
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <Star className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-600">4.0 (200+ reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Starting at $120</div>
                    <div className="text-sm text-gray-500">Standard pricing</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strengths:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>National brand recognition</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Consistent service quality</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Online scheduling</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Areas for Improvement:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Premium pricing</li>
                      <li>• Less local flexibility</li>
                      <li>• Standardized processes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company 4 */}
              <div className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      4. College Hunks Hauling Junk
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gray-300" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">3.8 (150+ reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Starting at $110</div>
                    <div className="text-sm text-gray-500">Competitive rates</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strengths:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Young, energetic crews</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Franchise consistency</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Donation programs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Areas for Improvement:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Inconsistent service quality</li>
                      <li>• Limited local knowledge</li>
                      <li>• Higher pricing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company 5 */}
              <div className="border border-gray-200 rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      5. Local Independent Companies
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gray-300" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">3.5 (Varies)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">Starting at $80</div>
                    <div className="text-sm text-gray-500">Variable quality</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Strengths:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Lower pricing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Local knowledge</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Flexible scheduling</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Areas for Improvement:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Inconsistent quality</li>
                      <li>• Limited insurance</li>
                      <li>• Unreliable scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Choose the Right Company for You
            </h2>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Questions to Ask:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Are you licensed and insured?</h4>
                    <p className="text-gray-600 text-sm">
                      This protects you from liability and ensures compliance with local regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">What's your recycling and disposal policy?</h4>
                    <p className="text-gray-600 text-sm">
                      Choose companies committed to environmental responsibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Do you offer same-day service?</h4>
                    <p className="text-gray-600 text-sm">
                      Important for urgent cleanup needs and time-sensitive projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">What's included in your pricing?</h4>
                    <p className="text-gray-600 text-sm">
                      Ensure there are no hidden fees or surprise charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Jacksonville Junk Removals is Your Best Choice
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              While there are several junk removal companies in Jacksonville, Jacksonville Junk Removals stands out 
              for several compelling reasons:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Eco-Friendly</h4>
                    <p className="text-gray-600 text-sm">
                      We exceed industry standards with comprehensive recycling and responsible disposal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Deep knowledge of Jacksonville neighborhoods and local regulations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Same-Day Service</h4>
                    <p className="text-gray-600 text-sm">
                      Fast response times when you need immediate junk removal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">
                      Clear, upfront pricing with no hidden fees or surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusion
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Choosing the right junk removal company in Jacksonville requires careful consideration of licensing, 
              insurance, environmental practices, and local expertise. While national franchises offer consistency, 
              local companies like Jacksonville Junk Removals provide personalized service, competitive pricing, 
              and deep local knowledge that can't be matched by larger corporations.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Ready to Experience the Difference?</h3>
              <p className="text-yellow-700 mb-4">
                Choose Jacksonville Junk Removals for professional, eco-friendly junk removal services that exceed 
                your expectations. Our local expertise and commitment to excellence make us the clear choice for 
                Jacksonville residents and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+19047423531"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (904) 742-3531</span>
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Continue reading our expert junk removal guides and tips
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/eco-friendly-junk-removal-jacksonville" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 mb-2">
                  Eco-Friendly Junk Removal
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn about sustainable practices and environmental protection in Jacksonville.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/spring-cleaning-guide-jacksonville" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">🧹</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 mb-2">
                  Spring Cleaning Guide
                </h3>
                <p className="text-gray-600 text-sm">
                  Master the art of decluttering and organizing your Jacksonville home.
                </p>
              </div>
            </Link>
            
            <Link href="/blog/commercial-junk-removal-jacksonville-businesses" className="group">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 mb-2">
                  Commercial Junk Removal
                </h3>
                <p className="text-gray-600 text-sm">
                  Essential information for Jacksonville businesses about commercial services.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the #1 Junk Removal Service in Jacksonville?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join hundreds of satisfied customers who chose Jacksonville Junk Removals for their 
            professional, eco-friendly junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19047423531"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call (904) 742-3531
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
