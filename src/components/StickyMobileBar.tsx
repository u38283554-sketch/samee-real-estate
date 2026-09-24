import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppDirectLink } from '../utils/whatsapp';

export const StickyMobileBar: React.FC = () => {
  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111518]/95 backdrop-blur-md border-t border-[#C5A059]/30 p-2.5 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Quick Inquire Button */}
        <button
          type="button"
          onClick={scrollToInquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-stone-800 text-stone-200 hover:text-white transition-colors text-center"
        >
          <Send className="w-4 h-4 text-[#C5A059] mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Inquire</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={createWhatsAppDirectLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-emerald-700 hover:bg-emerald-800 text-white transition-colors text-center shadow-sm"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Call Now Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded bg-[#C5A059] hover:bg-[#B59045] text-white transition-colors text-center shadow-sm"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>
      </div>
    </div>
  );
};
