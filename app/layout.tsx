import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ContactBar from '@/components/ContactBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import SmartChat from '@/components/SmartChat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacksonville Junk Removals - #1 Junk Removal Company in Jacksonville, FL',
  description: 'Professional junk removal services in Jacksonville, Florida. Same-day service, transparent pricing, eco-friendly disposal. Get your free quote today!',
  keywords: 'junk removal Jacksonville, Florida, same day service, eco-friendly disposal, mattress removal, commercial cleanout',
  authors: [{ name: 'Jacksonville Junk Removals' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Jacksonville Junk Removals - #1 Junk Removal Company in Jacksonville, FL',
    description: 'Professional junk removal services in Jacksonville, Florida. Same-day service, transparent pricing, eco-friendly disposal.',
    url: 'https://jacksonvillejunkremovals.com',
    siteName: 'Jacksonville Junk Removals',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'JJR Junk',
    'application-name': 'Jacksonville Junk Removals',
    'msapplication-TileColor': '#00C5F5',
    'theme-color': '#00C5F5',
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
        <SmartChat />
      </body>
    </html>
  )
}

