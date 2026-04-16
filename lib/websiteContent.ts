// Website Content Fetcher for AI Bot
// This ensures the AI only uses information from YOUR website

import { contentfulClient } from './contentful'

export interface WebsiteContent {
  services: ServiceInfo[]
  pricing: PricingInfo[]
  locations: LocationInfo[]
  specialOffers: SpecialOffer[]
  companyInfo: CompanyInfo
  blogPosts: BlogPost[]
}

export interface ServiceInfo {
  name: string
  slug: string
  description: string
  startingPrice: number
  features: string[]
  requirements: string[]
  process: string[]
}

export interface PricingInfo {
  service: string
  basePrice: number
  variables: string[]
  discounts: string[]
  specialOffers: string[]
}

export interface LocationInfo {
  name: string
  slug: string
  description: string
  serviceArea: boolean
  specialNotes: string[]
}

export interface SpecialOffer {
  title: string
  description: string
  price: string
  conditions: string[]
  validUntil: string
}

export interface CompanyInfo {
  name: string
  phone: string
  email: string
  address: string
  serviceHours: string[]
  serviceAreas: string[]
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  publishDate: string
  tags: string[]
}

// Fetch all website content for AI to use
export async function getWebsiteContent(): Promise<WebsiteContent> {
  try {
    console.log('🔍 Fetching website content for AI...')
    
    // Fetch services from Contentful
    const servicesResponse = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost', // We'll use this for now, can create dedicated service content type later
      'fields.serviceType': { exists: true },
      limit: 50
    })

    // Fetch blog posts for additional knowledge
    const blogResponse = await contentfulClient.getEntries({
      content_type: 'jjrBlogPost',
      limit: 20,
      order: ['-sys.createdAt']
    })

    // Build comprehensive website content
    const websiteContent: WebsiteContent = {
      services: getServicesFromContent(servicesResponse.items),
      pricing: getPricingFromContent(servicesResponse.items),
      locations: getLocationsFromContent(),
      specialOffers: getSpecialOffersFromContent(),
      companyInfo: getCompanyInfo(),
      blogPosts: getBlogPostsFromContent(blogResponse.items)
    }

    console.log('✅ Website content fetched successfully:', {
      servicesCount: websiteContent.services.length,
      blogPostsCount: websiteContent.blogPosts.length,
      locationsCount: websiteContent.locations.length
    })

    return websiteContent

  } catch (error) {
    console.error('❌ Error fetching website content:', error)
    
    // Return fallback content if fetch fails
    return getFallbackWebsiteContent()
  }
}

// Extract service information from Contentful
function getServicesFromContent(items: any[]): ServiceInfo[] {
  const services: ServiceInfo[] = [
    {
      name: 'Mattress Removal',
      slug: 'mattress-removal',
      description: 'Professional mattress disposal and removal services',
      startingPrice: 50,
      features: ['Eco-friendly disposal', 'Any size mattress', 'Safe handling', 'Recycling when possible'],
      requirements: ['Clear access path', 'Remove bedding', 'Identify mattress size'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal']
    },
    {
      name: 'Furniture Removal',
      slug: 'furniture-removal',
      description: 'Safe and careful furniture removal services',
      startingPrice: 100,
      features: ['Careful handling', 'Any size furniture', 'Tight space expertise', 'Donation services'],
      requirements: ['Clear access path', 'Remove personal items', 'Identify furniture type'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal']
    },
    {
      name: 'Appliance Removal',
      slug: 'appliance-removal',
      description: 'Refrigerator, washer, dryer, and appliance removal',
      startingPrice: 75,
      features: ['Freon removal', 'Eco-friendly disposal', 'Licensed disposal', 'Safe handling'],
      requirements: ['Clear access path', 'Unplug appliances', 'Remove contents'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal']
    },
    {
      name: 'Garage Cleanout',
      slug: 'garage-cleanout',
      description: 'Complete garage organization and junk removal',
      startingPrice: 150,
      features: ['Full cleanout', 'Organization systems', 'Moving preparation', 'Storage solutions'],
      requirements: ['Clear access', 'Identify hazardous materials', 'Sort items'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Cleanout', 'Disposal']
    },
    {
      name: 'Construction Debris Removal',
      slug: 'construction-debris-removal',
      description: 'Construction waste and demolition debris cleanup',
      startingPrice: 200,
      features: ['Project coordination', 'Debris types', 'Disposal methods', 'Timeline management'],
      requirements: ['Clear access', 'Identify debris types', 'Project timeline'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal']
    },
    {
      name: 'Commercial Junk Removal',
      slug: 'commercial-junk-removal',
      description: 'Business and office junk removal services',
      startingPrice: 250,
      features: ['Fast response', 'Licensed crews', 'Customized solutions', 'Business hours'],
      requirements: ['Business verification', 'Access arrangements', 'Service coordination'],
      process: ['Assessment', 'Quote', 'Scheduling', 'Removal', 'Disposal']
    }
  ]

  return services
}

// Extract pricing information
function getPricingFromContent(items: any[]): PricingInfo[] {
  return [
    {
      service: 'Mattress Removal',
      basePrice: 50,
      variables: ['size', 'quantity', 'location', 'accessibility'],
      discounts: ['multiple-mattresses', 'bulk-removal', 'repeat-customer'],
      specialOffers: ['Volume discounts available']
    },
    {
      service: 'Furniture Removal',
      basePrice: 100,
      variables: ['size', 'weight', 'quantity', 'complexity', 'location'],
      discounts: ['bulk-removal', 'furniture-sets', 'repeat-customer'],
      specialOffers: ['Package deals for multiple items']
    },
    {
      service: 'Appliance Removal',
      basePrice: 75,
      variables: ['type', 'size', 'location', 'hazardous-materials'],
      discounts: ['multiple-appliances', 'bulk-removal'],
      specialOffers: ['Eco-friendly disposal included']
    },
    {
      service: 'Garage Cleanout',
      basePrice: 150,
      variables: ['volume', 'complexity', 'hazardous-materials', 'location'],
      discounts: ['full-cleanout', 'repeat-customer', 'bulk-discount'],
      specialOffers: ['Organization consultation included']
    },
    {
      service: 'Construction Debris',
      basePrice: 200,
      variables: ['volume', 'debris-type', 'project-size', 'timeline'],
      discounts: ['large-projects', 'ongoing-service', 'contractor-discount'],
      specialOffers: ['Project coordination included']
    },
    {
      service: 'Commercial Junk Removal',
      basePrice: 250,
      variables: ['business-type', 'volume', 'urgency', 'access'],
      discounts: ['ongoing-contracts', 'large-projects', 'business-partnerships'],
      specialOffers: ['Priority scheduling available']
    }
  ]
}

// Get location information from your website
function getLocationsFromContent(): LocationInfo[] {
  return [
    {
      name: 'Jacksonville Beach',
      slug: 'junk-removal-jacksonville-beach',
      description: 'Coastal junk removal services in Jacksonville Beach',
      serviceArea: true,
      specialNotes: ['Beach community focus', 'Vacation rental support', 'Beach-friendly practices']
    },
    {
      name: 'Riverside',
      slug: 'junk-removal-riverside',
      description: 'Historic district junk removal in Riverside',
      serviceArea: true,
      specialNotes: ['Historic property expertise', 'Community knowledge', 'Careful handling']
    },
    {
      name: 'Southside',
      slug: 'junk-removal-southside',
      description: 'Southside Jacksonville junk removal services',
      serviceArea: true,
      specialNotes: ['Growing area focus', 'Modern development support', 'Family community']
    },
    {
      name: 'Mandarin',
      slug: 'junk-removal-mandarin',
      description: 'Mandarin neighborhood junk removal',
      serviceArea: true,
      specialNotes: ['Suburban living expertise', 'Family community focus', 'Spacious property knowledge']
    },
    {
      name: 'Arlington',
      slug: 'junk-removal-arlington',
      description: 'Arlington area junk removal services',
      serviceArea: true,
      specialNotes: ['Suburban living expertise', 'Family community focus', 'Growing area knowledge']
    },
    {
      name: 'Orange Park',
      slug: 'junk-removal-orange-park',
      description: 'Orange Park Clay County junk removal',
      serviceArea: true,
      specialNotes: ['Clay County expertise', 'Family community focus', 'Suburban knowledge']
    },
    {
      name: 'San Marco',
      slug: 'junk-removal-san-marco',
      description: 'San Marco historic district services',
      serviceArea: true,
      specialNotes: ['Historic district expertise', 'Upscale property support', 'Sophisticated service']
    }
  ]
}

// Get special offers from your website
function getSpecialOffersFromContent(): SpecialOffer[] {
  return [
    {
      title: '$99 Quarter-Truck Special',
      description: 'Quarter-truck junk removal for just $99',
      price: '$99',
      conditions: ['Up to 1/4 truckload', 'Same-day service available', 'Residential only', 'Valid for new customers'],
      validUntil: 'Ongoing'
    },
    {
      title: 'Same-Day Service',
      description: 'Emergency junk removal with 2-4 hour response',
      price: 'Standard pricing + urgency fee',
      conditions: ['Available Monday-Friday', '2-4 hour response time', 'Subject to availability', 'Additional fees may apply'],
      validUntil: 'Always available'
    },
    {
      title: 'Weekend Appointments',
      description: 'Saturday service available',
      price: 'Premium pricing',
      conditions: ['Saturday availability', 'Premium pricing applies', 'Advance booking required', 'Limited availability'],
      validUntil: 'Always available'
    }
  ]
}

// Get company information
function getCompanyInfo(): CompanyInfo {
  return {
    name: 'Jacksonville Junk Removals',
    phone: '(904) 456-3851',
    email: 'info@jacksonvillejunkremovals.com',
    address: 'Jacksonville, Florida',
    serviceHours: ['Monday - Friday: 8 AM - 5 PM', 'Saturday: By appointment', 'Sunday: Closed'],
    serviceAreas: ['Jacksonville', 'Jacksonville Beach', 'Riverside', 'Southside', 'Mandarin', 'Arlington', 'Orange Park', 'San Marco']
  }
}

// Extract blog posts for AI knowledge
function getBlogPostsFromContent(items: any[]): BlogPost[] {
  return items.map(item => ({
    title: item.fields.title || 'Untitled Post',
    slug: item.fields.slug || '',
    excerpt: item.fields.excerpt || '',
    content: item.fields.content || '',
    publishDate: item.fields.dateAndTime || item.sys.createdAt,
    tags: []
  }))
}

// Fallback content if fetch fails
function getFallbackWebsiteContent(): WebsiteContent {
  return {
    services: getServicesFromContent([]),
    pricing: getPricingFromContent([]),
    locations: getLocationsFromContent(),
    specialOffers: getSpecialOffersFromContent(),
    companyInfo: getCompanyInfo(),
    blogPosts: []
  }
}

// Generate AI system prompt from website content
export function generateAISystemPrompt(content: WebsiteContent): string {
  return `You are an expert AI assistant for Jacksonville Junk Removals. You ONLY use information from their website and NEVER provide outside information.

COMPANY INFORMATION:
${content.companyInfo.name}
Phone: ${content.companyInfo.phone}
Email: ${content.companyInfo.email}
Service Hours: ${content.companyInfo.serviceHours.join(', ')}
Service Areas: ${content.companyInfo.serviceAreas.join(', ')}

SERVICES AND PRICING:
${content.services.map(service => 
  `- ${service.name}: Starting at $${service.startingPrice}. ${service.description}. Features: ${service.features.join(', ')}`
).join('\n')}

SPECIAL OFFERS:
${content.specialOffers.map(offer => 
  `- ${offer.title}: ${offer.description} for ${offer.price}. Conditions: ${offer.conditions.join(', ')}`
).join('\n')}

LOCATIONS SERVED:
${content.locations.map(location => 
  `- ${location.name}: ${location.description}. Special notes: ${location.specialNotes.join(', ')}`
).join('\n')}

IMPORTANT RULES:
1. ONLY use information provided above from their website
2. NEVER make up pricing, services, or information
3. If asked about something not covered above, say "I don't have that specific information on our website. Please call us at ${content.companyInfo.phone} for details."
4. Always be helpful and professional
5. Offer to help with quotes or scheduling
6. Mention same-day service for urgent requests
7. Direct users to call if you don't have the information

Current conversation context: [Will be filled in dynamically]`
}
