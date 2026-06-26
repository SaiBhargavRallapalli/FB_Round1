'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureShowcase from '@/components/FeatureShowcase';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
  /* Scroll-reveal using IntersectionObserver — no layout thrash, GPU-only */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    </>
  );
}
