import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureShowcase />
        <PricingSection />
        <Testimonials />
      </main>
      <Footer />
      {/* Scroll-reveal observer — client-only, renders null */}
      <ScrollReveal />
    </>
  );
}
