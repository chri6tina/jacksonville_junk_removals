import Link from 'next/link'
import { Building, Calculator, BookOpen, Image, Award, Users, ArrowRight } from 'lucide-react'

interface StrategicInternalLinkingProps {
  currentPage?: string
  showCalculator?: boolean
  showPortfolio?: boolean
  showBestPractices?: boolean
  showCaseStudies?: boolean
  showPartnerships?: boolean
}

export default function StrategicInternalLinking({
  currentPage = 'post-construction-cleanup',
  showCalculator = true,
  showPortfolio = true,
  showBestPractices = true,
  showCaseStudies = true,
  showPartnerships = true
}: StrategicInternalLinkingProps) {
  
  const industryServices = [
    { name: 'Residential', href: '/residential-post-construction-cleanup', icon: Building, color: 'blue' },
    { name: 'Commercial', href: '/commercial-post-construction-cleanup', icon: Building, color: 'blue' },
    { name: 'Medical', href: '/medical-facility-post-construction-cleanup', icon: Building, color: 'red' },
    { name: 'Restaurants', href: '/restaurant-post-construction-cleanup', icon: Building, color: 'green' },
    { name: 'Industrial', href: '/industrial-post-construction-cleanup', icon: Building, color: 'orange' },
    { name: 'Hotels', href: '/hotel-post-construction-cleanup', icon: Building, color: 'purple' },
    { name: 'Educational', href: '/educational-facility-post-construction-cleanup', icon: Building, color: 'blue' },
    { name: 'Religious', href: '/religious-facility-post-construction-cleanup', icon: Building, color: 'amber' },
    { name: 'Retail', href: '/retail-store-post-construction-cleanup', icon: Building, color: 'pink' },
    { name: 'Office Buildings', href: '/office-building-post-construction-cleanup', icon: Building, color: 'indigo' },
  ]

  const strategicTools = [
    { name: 'Cost Calculator', href: '/post-construction-cleanup-calculator', icon: Calculator, description: 'Get instant estimates', color: 'teal', show: showCalculator },
    { name: 'Best Practices Guide', href: '/post-construction-cleanup-best-practices', icon: BookOpen, description: 'Industry expertise', color: 'amber', show: showBestPractices },
    { name: 'Project Portfolio', href: '/post-construction-cleanup-portfolio', icon: Image, description: 'View our work', color: 'rose', show: showPortfolio },
    { name: 'Case Studies', href: '/post-construction-cleanup-case-studies', icon: Award, description: 'Real project examples', color: 'emerald', show: showCaseStudies },
    { name: 'Contractor Partnerships', href: '/post-construction-cleanup-partnerships', icon: Users, description: 'Industry network', color: 'violet', show: showPartnerships },
  ].filter(tool => tool.show)

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
      red: 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100',
      green: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100',
      orange: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
      purple: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100',
      amber: 'bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100',
      pink: 'bg-pink-50 border-pink-200 text-pink-800 hover:bg-pink-100',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100',
      teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
      rose: 'bg-rose-50 border-rose-200 text-rose-800 hover:bg-rose-100',
      emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100',
      violet: 'bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100',
    }
    return colorMap[color] || 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100'
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Tools Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Tools & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, execute, and manage your post-construction cleanup project in Jacksonville
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group block"
              >
                <div className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200 border-l-4 border-l-${tool.color}-500 group-hover:scale-105`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-${tool.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <tool.icon className={`w-6 h-6 text-${tool.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{tool.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Industry Services Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized post-construction cleanup for every industry in Jacksonville
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {industryServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group block"
              >
                <div className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 group-hover:border-${service.color}-300 group-hover:scale-105`}>
                  <div className="text-center">
                    <div className={`w-10 h-10 bg-${service.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <service.icon className={`w-5 h-5 text-${service.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200 text-sm">
                      {service.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Construction Site?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Get instant quotes, expert guidance, and professional service for your Jacksonville project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Get Free Estimate</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
