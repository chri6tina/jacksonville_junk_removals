import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ContactBar from '@/components/ContactBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacksonville Junk Removal | Same-Day Service | Free Estimates | (904) 456-3851',
  description: 'Jacksonville junk removal company offering same-day service, free estimates, and eco-friendly disposal. Mattress removal, furniture removal, appliance removal, garage cleanout, construction debris removal. Serving Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, San Marco. Call (904) 456-3851 for immediate service.',
  keywords: 'junk removal Jacksonville, Jacksonville junk removal, mattress removal Jacksonville, furniture removal Jacksonville, appliance removal Jacksonville, garage cleanout Jacksonville, construction debris removal Jacksonville, same day junk removal Jacksonville, free junk removal estimate Jacksonville, eco-friendly junk removal Jacksonville, Jacksonville Beach junk removal, Riverside junk removal, Southside junk removal, Mandarin junk removal, Arlington junk removal, Orange Park junk removal, San Marco junk removal, commercial junk removal Jacksonville, residential junk removal Jacksonville, estate cleanout Jacksonville, office furniture removal Jacksonville, retail store cleanout Jacksonville, yard waste removal Jacksonville, hot tub removal Jacksonville, hazardous waste removal Jacksonville, Jacksonville junk removal company, Jacksonville junk removal service, junk removal near me Jacksonville',
  authors: [{ name: 'Jacksonville Junk Removals' }],
  creator: 'Jacksonville Junk Removals',
  publisher: 'Jacksonville Junk Removals',
  category: 'Local Business',
  classification: 'Junk Removal Services',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Jacksonville Junk Removal | Same-Day Service | Free Estimates | (904) 456-3851',
    description: 'Jacksonville junk removal company offering same-day service, free estimates, and eco-friendly disposal. Mattress removal, furniture removal, appliance removal, garage cleanout, construction debris removal. Serving Jacksonville Beach, Riverside, Southside, Mandarin, Arlington, Orange Park, San Marco.',
    url: 'https://jacksonvillejunkremovals.com',
    siteName: 'Jacksonville Junk Removals',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://jacksonvillejunkremovals.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacksonville Junk Removal Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacksonville Junk Removal | Same-Day Service | Free Estimates',
    description: 'Jacksonville junk removal company offering same-day service, free estimates, and eco-friendly disposal. Serving all of Jacksonville and surrounding areas.',
    images: ['https://jacksonvillejunkremovals.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://jacksonvillejunkremovals.com',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'JJR Junk',
    'application-name': 'Jacksonville Junk Removals',
    'msapplication-TileColor': '#00C5F5',
    'theme-color': '#00C5F5',
    'geo.region': 'US-FL',
    'geo.placename': 'Jacksonville',
    'geo.position': '30.3322;-81.6557',
    'ICBM': '30.3322, -81.6557',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <ContactBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  )
}

