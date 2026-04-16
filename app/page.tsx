import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Process from '@/components/Process'
import SpecialOffer from '@/components/SpecialOffer'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import ReviewsSection from '@/components/ReviewsSection'
import BookingCalendar from '@/components/BookingCalendar'

export default function Home() {
  return (
    <>
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
