import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Process from '@/components/Process'
import SpecialOffer from '@/components/SpecialOffer'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import ReviewsSection from '@/components/ReviewsSection'
import BookingCalendar from '@/components/BookingCalendar'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  return (
    <>
      <SEOHead
        title="Jacksonville Junk Removal | Professional Cleanout Services | (904) 456-3851"
        description="Jacksonville junk removal service. Professional cleanout, hoarding cleanup, construction debris removal. Licensed, insured, eco-friendly disposal. Call (904) 456-3851 for free estimate."
        keywords="Jacksonville junk removal, Jacksonville cleanout service, hoarding cleanup Jacksonville, construction debris removal Jacksonville, junk removal Jacksonville FL, professional cleanout Jacksonville, eco-friendly disposal Jacksonville, licensed junk removal Jacksonville"
        canonical=""
        ogType="website"
      />
      <Hero />
      <Features />
      <Process />
      <SpecialOffer />
      <ServiceAreas />
      <Testimonials />
      <ReviewsSection />
      <BookingCalendar />
    </>
  )
}
