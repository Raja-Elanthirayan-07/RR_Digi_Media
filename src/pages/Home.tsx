import Hero from '@/components/sections/Hero'
import ContactSection from '@/components/sections/ContactSection'
import GallerySection from '@/components/sections/GallerySection'
import PricingSection from '@/components/sections/PricingSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <PricingSection />
      <GallerySection />
      <ContactSection />
    </main>
  )
}
