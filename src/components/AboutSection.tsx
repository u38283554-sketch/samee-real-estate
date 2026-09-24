import React from 'react';
import { ArrowRight, Check, MapPin, Phone, Building, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import aboutInteriorImg from '../assets/images/estate_consulting_interior_1790247227376.jpg';

export const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 aspect-[4/3] bg-stone-900">
              <img
                src={aboutInteriorImg}
                alt="Consultation desk at Samee Reale Estates & House Brokers"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Overlay location card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111518]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A059] block font-medium">
                    Consultant Headquarters
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-stone-200">
                    Sambakulam, Madurai · Tamil Nadu
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40">
                  <Building className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Subtle decorative geometric border */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-[#C5A059]/30 -z-10 rounded-bl-3xl" />
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
                About the Consultancy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight leading-[1.2]">
                Your Property Journey, Made Simpler.
              </h2>
            </div>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Samee Reale Estates &amp; House Brokers helps clients connect with real estate opportunities and property-related services in Madurai. Our focus is to make property inquiries straightforward, accessible and client-focused.
            </p>

            <div className="space-y-3 pt-2 text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-100 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-stone-900 font-medium">Local Madurai Focus:</strong> Grounded in Sambakulam and nearby neighborhoods across Madurai, helping clients navigate plots, villas, and commercial spaces.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-100 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-stone-900 font-medium">Direct Broker Communication:</strong> Direct access to the consultant without layers of automated phone menus or confusing paperwork hurdles.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-100 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-stone-900 font-medium">Client-Centric Process:</strong> We listen to your exact budget, preferred area, and intended timeline before recommending options.
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111518] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-md"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-[#C5A059] py-3.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
