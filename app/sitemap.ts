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
    ...servicePages,
    ...locationPages,
    ...mattressLocationPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '/post' ? 'daily' : page === '/services' || page === '/estimation' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : 
              page === '/services' || page === '/estimation' ? 0.9 : 
              page === '/mattress-removal' || page === '/furniture-removal' || page === '/appliance-removal' || page === '/storm-cleanup' || page === '/hurricane-debris-removal' || page === '/tree-debris-removal' || page === '/foreclosure-cleanout' || page === '/medical-office-cleanout' || page === '/restaurant-cleanout' || page === '/apartment-cleanout' || page === '/storage-unit-cleanout' || page === '/basement-cleanout' || page === '/office-cleanout' || page === '/warehouse-cleanout' || page === '/hotel-cleanout' || page === '/school-cleanout' || page === '/church-cleanout' || page === '/same-day-junk-removal' || page === '/emergency-cleanup' || page === '/hoarding-cleanup' || page === '/estate-cleanout' ? 0.85 :
              page === '/garage-cleanout' || page === '/construction-debris-removal' ? 0.8 :
              page.includes('junk-removal-') ? 0.75 : 0.7,
  }))
}
