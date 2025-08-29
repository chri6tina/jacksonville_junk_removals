'use client'

import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals",
    "alternateName": "JJR Junk Removal",
    "description": "Jacksonville's premier junk removal company offering same-day service, free estimates, and eco-friendly disposal. Professional mattress removal, furniture removal, appliance removal, garage cleanout, and construction debris removal services.",
    "url": "https://jacksonvillejunkremovals.com",
    "telephone": "+1-904-456-3851",
    "email": "info@jacksonvillejunkremovals.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jacksonville",
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
    "openingHours": [
      "Mo-Su 07:00-19:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "areaServed": [
      "Jacksonville",
      "Jacksonville Beach",
      "Riverside",
      "Southside",
      "Mandarin",
      "Arlington",
      "Orange Park",
      "San Marco",
      "Orange Park",
      "Clay County",
      "Duval County"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "30.3322",
        "longitude": "-81.6557"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Junk Removal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Junk Removal",
            "description": "Complete junk removal for homes and apartments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Junk Removal",
            "description": "Business and office junk removal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mattress Removal",
            "description": "Professional mattress disposal and removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Furniture Removal",
            "description": "Safe and careful furniture removal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Appliance Removal",
            "description": "Refrigerator, washer, dryer, and appliance removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Debris Removal",
            "description": "Construction waste and demolition debris cleanup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estate Cleanout",
            "description": "Complete estate and property cleanout services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flood Cleanup",
            "description": "Emergency flood cleanup and water damage restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Cleanout",
            "description": "Full garage organization and junk removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yard Waste Removal",
            "description": "Landscaping debris and yard waste disposal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hot Tub Removal",
            "description": "Professional hot tub and spa removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hazardous Waste Removal",
            "description": "Safe disposal of hazardous materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Furniture Removal",
            "description": "Commercial office furniture and equipment removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Store Cleanout",
            "description": "Complete retail store cleanup and junk removal"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Amazing service! They were fast, professional, and cleaned up everything perfectly. Highly recommend!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike R."
        },
        "reviewBody": "Best junk removal company in Jacksonville. Fair pricing and excellent customer service."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jennifer L."
        },
        "reviewBody": "They made my garage cleanout so easy. Professional crew and great communication throughout."
      }
    ],
    "sameAs": [
      "https://www.google.com/maps?cid=your-google-business-id",
      "https://www.facebook.com/jacksonvillejunkremovals",
      "https://www.instagram.com/jacksonvillejunkremovals",
      "https://www.yelp.com/biz/jacksonville-junk-removals"
    ],
    "image": "https://jacksonvillejunkremovals.com/logo.png",
    "logo": "https://jacksonvillejunkremovals.com/logo.png",
    "foundingDate": "2020",
    "numberOfEmployees": "15",
    "slogan": "Fast, Reliable, Eco-Friendly Junk Removal in Jacksonville",
    "knowsAbout": [
      "Junk Removal",
      "Waste Disposal",
      "Recycling",
      "Eco-friendly Disposal",
      "Jacksonville Area",
      "Commercial Cleanup",
      "Residential Cleanup"
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
