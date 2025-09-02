'use client'

import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://jacksonvillejunkremovals.com/og-image.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author = 'Jacksonville Junk Removals',
  section,
  tags = [],
  noindex = false,
  nofollow = false
}: SEOHeadProps) {
  const fullTitle = `${title} | Jacksonville Junk Removal | (904) 456-3851`
  const fullDescription = `${description} Call (904) 456-3851 for immediate service. Serving Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, San Marco.`
  
  // Enhanced Jacksonville-specific keywords for SEO dominance
  const jacksonvilleKeywords = [
    'Jacksonville FL', 'Jacksonville Florida', 'Duval County',
    'Jacksonville Beach', 'Riverside Jacksonville', 'Southside Jacksonville',
    'Mandarin Jacksonville', 'Arlington Jacksonville', 'Orange Park FL',
    'San Marco Jacksonville', 'Atlantic Beach', 'Neptune Beach',
    'Ponte Vedra Beach', 'Fleming Island', 'Green Cove Springs'
  ].join(', ')
  
  const enhancedKeywords = keywords ? `${keywords}, ${jacksonvilleKeywords}` : jacksonvilleKeywords
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : nofollow ? 'nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`https://www.jacksonvillejunkremovals.com${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical ? `https://www.jacksonvillejunkremovals.com${canonical}` : 'https://www.jacksonvillejunkremovals.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Jacksonville Junk Removals" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Jacksonville" />
      <meta name="geo.position" content="30.3322;-81.6557" />
      <meta name="ICBM" content="30.3322, -81.6557" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Jacksonville" />
      <meta name="business:contact_data:locality" content="Jacksonville" />
      <meta name="business:contact_data:region" content="FL" />
      <meta name="business:contact_data:postal_code" content="32201" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-904-456-3851" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#00C5F5" />
      
      {/* Schema.org Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jacksonville Junk Removals",
            "description": fullDescription,
            "url": canonical ? `https://www.jacksonvillejunkremovals.com${canonical}` : "https://www.jacksonvillejunkremovals.com",
            "telephone": "+1-904-456-3851",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jacksonville",
              "addressRegion": "FL",
              "postalCode": "32201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.3322",
              "longitude": "-81.6557"
            },
            "openingHours": "Mo-Su 07:00-19:00",
            "priceRange": "$$",
            "areaServed": [
              "Jacksonville",
              "Jacksonville Beach", 
              "Riverside",
              "Southside",
              "Mandarin",
              "Arlington",
              "Orange Park",
              "San Marco"
            ]
          })
        }}
      />
    </Head>
  )
}
