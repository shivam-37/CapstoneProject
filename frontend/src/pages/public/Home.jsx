import React, { useEffect } from 'react';
import Navbar from '../../components/landing/Navbar';
import Hero from '../../components/landing/Hero';
import LogoCloud from '../../components/landing/LogoCloud';
import Features from '../../components/landing/Features';
import HowItWorks from '../../components/landing/HowItWorks';
import AISection from '../../components/landing/AISection';
import ProductShowcase from '../../components/landing/ProductShowcase';
import StudentSuccess from '../../components/landing/StudentSuccess';
import Testimonials from '../../components/landing/Testimonials';
import CTASection from '../../components/landing/CTASection';
import Footer from '../../components/landing/Footer';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <AISection />
        <ProductShowcase />
        <StudentSuccess />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
