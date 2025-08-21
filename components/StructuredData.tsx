'use client'

import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jacksonville Junk Removals",
    "alternateName": "JJR Junk Removal",
    "description": "Jacksonville's #1 post-construction cleanup and junk removal company offering same-day service, free estimates, and eco-friendly disposal. Specialized construction site cleanup, debris removal, and professional cleaning across all Jacksonville areas including Jacksonville Beach, Downtown, Southside, Mandarin, and Orange Park.",
    "url": "https://jacksonvillejunkremovals.com",
    "telephone": "+1-904-456-3851",
    "email": "info@jacksonvillejunkremovals.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jacksonville, FL",
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
      "Mo-Su 00:00-23:59"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Jacksonville"
      },
      {
        "@type": "City", 
        "name": "Jacksonville Beach"
      },
      {
        "@type": "City",
        "name": "Atlantic Beach"
      },
      {
        "@type": "City",
        "name": "Neptune Beach"
      },
      {
        "@type": "City",
        "name": "Ponte Vedra Beach"
      },
      {
        "@type": "City",
        "name": "Mandarin"
      },
      {
        "@type": "City",
        "name": "Orange Park"
      },
      {
        "@type": "City",
        "name": "Southside"
      },
      {
        "@type": "City",
        "name": "Arlington"
      },
      {
        "@type": "City",
        "name": "San Marco"
      },
      {
        "@type": "City",
        "name": "Riverside"
      },
      {
        "@type": "City",
        "name": "Clay County"
      },
      {
        "@type": "City",
        "name": "Duval County"
      }
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
      "name": "Jacksonville Post-Construction Cleanup & Junk Removal Services",
      "itemListElement": [
        // Post-Construction Cleanup Services (Priority)
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleanup",
            "description": "Complete construction site cleanup and debris removal for all facility types"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Post-Construction Cleanup",
            "description": "Home renovation and construction cleanup with family-ready protocols"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Post-Construction Cleanup",
            "description": "Business facility construction cleanup and professional environment preparation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Facility Post-Construction Cleanup",
            "description": "Healthcare facility construction cleanup with medical-grade standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hotel Post-Construction Cleanup",
            "description": "Hospitality facility construction cleanup with luxury finish protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Post-Construction Cleanup",
            "description": "Manufacturing and industrial facility construction cleanup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Facility Post-Construction Cleanup",
            "description": "School and university construction cleanup with student safety protocols"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Religious Facility Post-Construction Cleanup",
            "description": "Church and temple construction cleanup with sacred space respect"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Building Post-Construction Cleanup",
            "description": "Corporate office construction cleanup with business-ready standards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restaurant Post-Construction Cleanup",
            "description": "Food service facility construction cleanup with health code compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Store Post-Construction Cleanup",
            "description": "Retail facility construction cleanup with customer-ready presentation"
          }
        },
        // Traditional Junk Removal Services
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
          "name": "Sarah Johnson"
        },
        "reviewBody": "Jacksonville Junk Removals did an amazing job cleaning up our post-construction site. Professional, thorough, and completed ahead of schedule. Highly recommend for any Jacksonville area project!"
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
          "name": "Mike Rodriguez"
        },
        "reviewBody": "Outstanding service for our downtown Jacksonville office renovation. They understood the urban logistics and delivered pristine results. The team was professional and efficient."
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
    "numberOfEmployees": "25-50",
    "slogan": "Jacksonville's #1 Post-Construction Cleanup & Junk Removal Specialists",
    "knowsAbout": [
      "Post-construction cleanup",
      "Construction debris removal",
      "Jacksonville area construction",
      "Beach area construction protocols",
      "Urban construction logistics",
      "Medical facility cleaning",
      "Educational facility cleaning",
      "Religious facility cleaning",
      "Hotel and hospitality cleaning",
      "Industrial facility cleaning",
      "Junk Removal",
      "Waste Disposal",
      "Recycling",
      "Eco-friendly Disposal",
      "Commercial Cleanup",
      "Residential Cleanup"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "description": "Free estimates for post-construction cleanup projects",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "description": "Same-day service available for urgent cleanup needs",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "description": "Free junk removal estimates",
        "price": "0",
        "priceCurrency": "USD"
      }
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
