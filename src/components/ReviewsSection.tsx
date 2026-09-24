import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FBF9F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
            Verified Client Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight">
            Client Rating &amp; Reviews
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Authentic public Google rating and client feedback for Samee Reale Estates &amp; House Brokers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Overall Rating Overview Card */}
          <div className="lg:col-span-5 bg-[#111518] text-white rounded-xl p-8 border border-[#C5A059]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded text-[11px] font-semibold uppercase tracking-wider text-[#C5A059] mb-6">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Google Business Profile</span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-5xl sm:text-6xl font-semibold text-white">
                  5.0
                </span>
                <span className="text-stone-400 text-sm">/ 5.0</span>
              </div>

              <div className="flex items-center gap-1 text-[#D4AF37] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-stone-300 text-sm font-medium">
                Based on 3 public Google reviews
              </p>
              <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                Reflecting responsive communication and guided real estate broker assistance in Sambakulam, Madurai.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-stone-800">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:text-[#B59045] transition-colors"
              >
                <span>View Google Business Location</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Verified Review Card & Future Feedback Prompt */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* The single authentic verified customer review */}
            <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full relative">
              <Quote className="w-10 h-10 text-stone-100 absolute top-6 right-6 -z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 font-medium leading-relaxed mb-6">
                  &ldquo;{BUSINESS_INFO.googleReview.text}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">
                    {BUSINESS_INFO.googleReview.author}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {BUSINESS_INFO.googleReview.date}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Review</span>
                </div>
              </div>
            </div>

            {/* Factual Note: Open for new client experiences */}
            <div className="bg-stone-100/80 rounded-xl p-5 border border-stone-200 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-semibold text-stone-800 block mb-0.5">
                  Have you consulted with Samee Reale Estates?
                </span>
                <span>We value honest feedback from property seekers and sellers across Madurai.</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-white hover:bg-stone-50 border border-stone-300 rounded text-stone-800 font-medium text-xs transition-colors text-center"
              >
                Share Feedback on Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
