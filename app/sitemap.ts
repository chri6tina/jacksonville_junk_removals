import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jacksonvillejunkremovals.com'
  
  // Core pages
  const corePages = [
    '',
    '/estimation',
    '/services',
    '/contact',
    '/99-junk-removal',
    '/locations',
    '/post',
  ]

  // Post-Construction Cleanup - HIGH PRIORITY (Jacksonville Dominance)
  const postConstructionPages = [
    '/post-construction-cleanup',
    '/residential-post-construction-cleanup',
    '/commercial-post-construction-cleanup',
    '/medical-facility-post-construction-cleanup',
    '/restaurant-post-construction-cleanup',
    '/industrial-post-construction-cleanup',
    '/hotel-post-construction-cleanup',
    '/office-building-post-construction-cleanup',
    '/retail-store-post-construction-cleanup',
    '/educational-facility-post-construction-cleanup',
    '/religious-facility-post-construction-cleanup',
  ]

  // Area-Specific Post-Construction Cleanup - HIGH PRIORITY (NEW)
  const areaSpecificPages = [
    '/post-construction-cleanup-jacksonville-beach',
    '/post-construction-cleanup-downtown-jacksonville',
    '/post-construction-cleanup-southside-jacksonville',
    '/post-construction-cleanup-mandarin-jacksonville',
    '/post-construction-cleanup-orange-park',
  ]
  
  // Strategic Enhancement Pages - HIGH PRIORITY
  const strategicPages = [
    '/post-construction-cleanup-calculator',
    '/post-construction-cleanup-best-practices',
    '/post-construction-cleanup-case-studies',
    '/post-construction-cleanup-portfolio',
    '/post-construction-cleanup-partnerships',
    '/post-construction-cleanup-comparison',
    '/jacksonville-construction-partnerships',
    '/jacksonville-reviews',
  ]

  // Service pages
  const servicePages = [
    '/mattress-removal',
    '/commercial-junk-removal',
    '/hazardous-waste-removal',
    '/construction-debris-removal',
    '/appliance-removal',
    '/yard-waste-removal',
    '/hot-tub-removal',
    '/furniture-removal',
    '/garage-cleanout',
    '/office-furniture-removal',
    '/retail-store-cleanout',
    '/estate-cleanout',
    '/storm-cleanup',
    '/hurricane-debris-removal',
    '/tree-debris-removal',
    '/foreclosure-cleanout',
    '/medical-office-cleanout',
    '/restaurant-cleanout',
    '/apartment-cleanout',
    '/storage-unit-cleanout',
    '/basement-cleanout',
    '/office-cleanout',
    '/warehouse-cleanout',
    '/hotel-cleanout',
    '/school-cleanout',
    '/church-cleanout',
    '/same-day-junk-removal',
    '/emergency-cleanup',
    '/hoarding-cleanup',
    '/renovation-cleanup',
    '/senior-cleanout',
  ]

  // Location pages
  const locationPages = [
    '/junk-removal-downtown-jacksonville',
    '/junk-removal-jacksonville-beach',
    '/junk-removal-riverside',
    '/junk-removal-southside',
    '/junk-removal-mandarin',
    '/junk-removal-arlington',
    '/junk-removal-orange-park',
    '/junk-removal-san-marco',
  ]

  // Area-specific mattress removal pages
  const mattressLocationPages = [
    '/mattress-removal-riverside-jacksonville',
    '/mattress-removal-southside-jacksonville',
    '/mattress-removal-san-marco-jacksonville',
    '/mattress-removal-mandarin-jacksonville',
    '/mattress-removal-jacksonville-beach',
  ]

  const allPages = [
    ...corePages,
    ...postConstructionPages,
    ...areaSpecificPages, // Included new area-specific pages
    ...strategicPages,
    ...servicePages,
    ...locationPages,
    ...mattressLocationPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '/post' ? 'daily' : 
                    page === '/services' || page === '/estimation' ? 'weekly' : 
                    // Post-construction pages updated more frequently for SEO dominance
                    postConstructionPages.includes(page) || strategicPages.includes(page) || areaSpecificPages.includes(page) ? 'weekly' : // Updated change frequency for area-specific pages
                    'monthly',
    priority: page === '' ? 1 : 
              // Post-construction cleanup pages get highest priority for Jacksonville dominance
              postConstructionPages.includes(page) ? 0.95 :
              areaSpecificPages.includes(page) ? 0.95 : // Set high priority for area-specific pages
              strategicPages.includes(page) ? 0.9 :
              page === '/services' || page === '/estimation' ? 0.9 : 
              page === '/mattress-removal' || page === '/furniture-removal' || page === '/appliance-removal' || page === '/storm-cleanup' || page === '/hurricane-debris-removal' || page === '/tree-debris-removal' || page === '/foreclosure-cleanout' || page === '/medical-office-cleanout' || page === '/restaurant-cleanout' || page === '/apartment-cleanout' || page === '/storage-unit-cleanout' || page === '/basement-cleanout' || page === '/office-cleanout' || page === '/warehouse-cleanout' || page === '/hotel-cleanout' || page === '/school-cleanout' || page === '/church-cleanout' || page === '/same-day-junk-removal' || page === '/emergency-cleanup' || page === '/hoarding-cleanup' || page === '/estate-cleanout' || page === '/renovation-cleanup' || page === '/senior-cleanout' ? 0.85 :
              page === '/garage-cleanout' || page === '/construction-debris-removal' ? 0.8 :
              page.includes('junk-removal-') ? 0.75 : 0.7,
  }))
}
