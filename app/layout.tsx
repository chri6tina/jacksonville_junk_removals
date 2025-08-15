import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ContactBar from '@/components/ContactBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacksonville Junk Removals - #1 Junk Removal Company in Jacksonville, FL',
  description: 'Professional junk removal services in Jacksonville, Florida. Same-day service, transparent pricing, eco-friendly disposal. Get your free quote today!',
  keywords: 'junk removal Jacksonville, Florida, same day service, eco-friendly disposal, mattress removal, commercial cleanout',
  authors: [{ name: 'Jacksonville Junk Removals' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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

