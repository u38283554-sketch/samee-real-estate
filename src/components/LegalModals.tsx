import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#111518]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-stone-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden text-stone-800"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#C5A059]" />
            ) : (
              <FileText className="w-5 h-5 text-[#C5A059]" />
            )}
            <h3 className="font-serif text-xl font-medium text-stone-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                At <strong>{BUSINESS_INFO.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us during property inquiries and consultations.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">1. Information We Collect</h4>
              <p>
                When you submit an inquiry through our website, we collect your name, contact phone number, preferred property type, location preferences, and any specific notes provided.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">2. How We Use Your Information</h4>
              <p>
                Your information is used strictly to communicate with you regarding suitable real estate opportunities, coordinate site visits, and provide consultation services in Madurai. We do not sell, rent, or trade your contact information to third-party advertisers.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">3. Direct Communications</h4>
              <p>
                By providing your phone number, you authorize our brokerage consultant to contact you directly via phone call, SMS, or WhatsApp regarding your specific property query.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">4. Contact</h4>
              <p>
                For privacy inquiries or to request deletion of your contact records, contact {BUSINESS_INFO.name} at {BUSINESS_INFO.phone} or visit us at {BUSINESS_INFO.address}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                Welcome to the official website of <strong>{BUSINESS_INFO.name}</strong>. By accessing this website or submitting property inquiries, you agree to these Terms and Conditions.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">1. Nature of Services</h4>
              <p>
                {BUSINESS_INFO.name} operates as an independent real estate consultancy and property brokerage based in Sambakulam, Madurai, Tamil Nadu. We assist buyers, sellers, tenants, and investors in identifying and negotiating real estate opportunities.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">2. Property Information &amp; Verification</h4>
              <p>
                Showcase listings and layout illustrations on this website serve as representative guidance. Final transaction terms, legal title documentation, government approvals (DTCP/RERA/Corporation), and property boundary demarcations must be verified independently by prospective buyers before entering into formal purchase agreements.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">3. Brokerage &amp; Consultation</h4>
              <p>
                Professional brokerage commissions or consultation fees are determined in accordance with established local market practices and will be agreed upon mutually prior to concluding transactions.
              </p>
              <h4 className="font-semibold text-stone-900 text-sm pt-2">4. Governing Law</h4>
              <p>
                These terms are governed by the laws applicable in Madurai, Tamil Nadu, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
