import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyInquiryCard } from './components/PropertyInquiryCard';
import { FeaturedProperties } from './components/FeaturedProperties';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#181D24] selection:bg-[#C5A059]/20 selection:text-[#181D24]">
      {/* Top Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Full Screen Hero with luxury visual & trust badge */}
        <Hero />

        {/* Property Search & Inquiry Card overlapping hero */}
        <PropertyInquiryCard />

        {/* Featured Properties showcase & polished empty state */}
        <FeaturedProperties />

        {/* About Samee Reale Estates & House Brokers */}
        <AboutSection />

        {/* 4 Feature Why Choose Us Cards */}
        <WhyChooseUs />

        {/* 3-Step How It Works */}
        <HowItWorks />

        {/* Verified 5.0 Google Rating & Customer Review */}
        <ReviewsSection />

        {/* Dark Luxury Location & Contact with Interactive Map */}
        <ContactLocationSection />
      </main>

      {/* Multi-column Premium Footer */}
      <Footer />

      {/* Sticky Mobile Contact Bar */}
      <StickyMobileBar />
    </div>
  );
}
