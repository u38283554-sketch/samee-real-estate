import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { LegalModals } from './LegalModals';
import { createWhatsAppDirectLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0D10] text-stone-400 border-t border-stone-800 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-2xl font-semibold text-white uppercase">
                {BUSINESS_INFO.shortName}
              </span>
              <span className="text-[11px] tracking-[0.28em] font-medium text-[#C5A059] uppercase -mt-0.5">
                {BUSINESS_INFO.subtitle}
              </span>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              Your connection to real estate opportunities in Madurai.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <div className="flex items-center text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-white">5.0</span>
              <span>(3 Google Reviews)</span>
              <span>&middot;</span>
              <span>Sambakulam</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('properties')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-stone-200 hover:text-[#C5A059] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  {BUSINESS_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={createWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 text-xs font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-stone-400 text-center sm:text-left">
            &copy; 2026 Samee Reale Estates &amp; House Brokers. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-stone-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button
              type="button"
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-stone-200 transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>&middot;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#C5A059] flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <LegalModals
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </footer>
  );
};
