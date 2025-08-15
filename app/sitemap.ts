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
    changeFrequency: page === '/post' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page === '/services' || page === '/estimation' ? 0.9 : 0.8,
  }))
}
