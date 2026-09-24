import React from 'react';
import { Send, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppDirectLink } from '../utils/whatsapp';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Requirements',
      desc: "Tell us the type of property you're looking for and your preferred location.",
      icon: Send,
    },
    {
      num: '02',
      title: 'Discuss Your Options',
      desc: 'Connect with the team to explore relevant property opportunities.',
      icon: MessageCircle,
    },
    {
      num: '03',
      title: 'Move Forward With Clarity',
      desc: 'Get in touch to discuss the next steps for your property requirements.',
      icon: CheckCircle2,
    },
  ];

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
            Clear &amp; Simple Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Three straightforward steps from your initial inquiry to discussing property options in Madurai.
          </p>
        </div>

        {/* Steps Grid: Horizontal on desktop, vertical timeline on mobile */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-24 right-24 h-px bg-stone-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#FAF8F5] rounded-xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between relative group hover:border-[#C5A059]/60 transition-colors"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-[#C5A059] shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-serif text-3xl font-light text-[#C5A059]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-stone-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-stone-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-400">
                    <span>Step {idx + 1} of 3</span>
                    <span className="text-[#C5A059] font-medium">Clear &amp; Transparent</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToInquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#B59045] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-sm"
          >
            <span>Start Step 01: Share Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={createWhatsAppDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Direct WhatsApp Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};
