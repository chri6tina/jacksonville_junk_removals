import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.jacksonvillejunkremovals.com/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /post/
Allow: /services/
Allow: /estimation/
Allow: /contact/

# Crawl delay (optional)
Crawl-delay: 1`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
