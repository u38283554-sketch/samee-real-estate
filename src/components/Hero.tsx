import React from 'react';
import { Star, ArrowDown, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import heroEstateImg from '../assets/images/madurai_luxury_estate_1790247213905.jpg';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0D1217]"
    >
      {/* Background Photography with Warm Charcoal Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroEstateImg}
          alt="Luxury residential property in Madurai, Tamil Nadu"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          onError={(e) => {
            // Elegant fallback to architectural luxury photography
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
          }}
        />
        {/* Layered luxury gradient: dark navy/charcoal for deep contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1217] via-[#0D1217]/75 to-[#0D1217]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,18,23,0.6)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Factual Trust Badge (Strictly verified info: 5.0 Google Rating • 3 Reviews) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-900/80 border border-[#C5A059]/40 backdrop-blur-md text-stone-200 text-xs sm:text-sm mb-6 shadow-lg">
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-white tracking-wide">5.0 Google Rating</span>
          <span className="text-[#C5A059]">•</span>
          <span className="text-stone-300">3 Reviews</span>
        </div>

        {/* Location Subhead Kicker */}
        <div className="flex items-center gap-2 text-stone-300/90 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Sambakulam, Madurai · Tamil Nadu</span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-[1.15] mb-6 drop-shadow-sm max-w-3xl">
          Find a Place You&apos;ll Be Proud to Call Home.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl mb-10 text-balance">
          Discover the right property with Samee Reale Estates &amp; House Brokers. Your trusted connection to real estate opportunities in Madurai.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => scrollToSection('inquiry-section')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-[#C5A059] hover:bg-[#B59045] rounded shadow-lg transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:ring-offset-2 focus:ring-offset-[#0D1217]"
          >
            <span>Explore Properties</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded backdrop-blur-sm transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Minimalist Trust Signals */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-stone-300 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-lg font-medium text-white">Madurai Focus</span>
            <span className="text-stone-400 text-xs">Sambakulam &amp; Surrounds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-lg font-medium text-white">Direct Advisory</span>
            <span className="text-stone-400 text-xs">Buying, Renting &amp; Selling</span>
          </div>
          <div className="hidden sm:flex flex-col items-center gap-1 col-span-1">
            <span className="font-serif text-lg font-medium text-white">24/7 Availability</span>
            <span className="text-stone-400 text-xs">Open for Inquiries</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollToSection('inquiry-section')}
          className="mt-8 text-stone-400 hover:text-[#C5A059] transition-colors flex flex-col items-center gap-1 group focus:outline-none"
          aria-label="Scroll to search and inquiry form"
        >
          <span className="text-[11px] tracking-widest uppercase font-medium">Scroll to Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#C5A059]" />
        </button>
      </div>
    </section>
  );
};
