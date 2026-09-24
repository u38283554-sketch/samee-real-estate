import React from 'react';
import { X, MapPin, CheckCircle, MessageCircle, Phone, Home, Sparkles, Building, Layers } from 'lucide-react';
import { PropertyListing } from '../types';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppPropertyInquiryLink } from '../utils/whatsapp';

interface PropertyModalProps {
  property: PropertyListing | null;
  onClose: () => void;
  onInquireNow: (property: PropertyListing) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onInquireNow,
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111518]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-property-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-stone-900">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded bg-[#C5A059] text-white uppercase tracking-wider mb-2">
              {property.status}
            </div>
            <h3 id="modal-property-title" className="font-serif text-2xl sm:text-3xl font-medium leading-tight">
              {property.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-200 mt-1">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Transparent Placeholder Disclosure */}
          <div className="bg-stone-50 border border-stone-200 rounded-lg p-3.5 text-xs text-stone-600 leading-relaxed">
            <span className="font-semibold text-stone-900 block mb-0.5">Consultation Showcase Note:</span>
            This listing represents a standard configuration model for properties in Madurai. Real-time availability, title documents, and pricing vary per specific seller or project in Sambakulam and adjoining areas.
          </div>

          {/* Quick Specs Grid */}
          {property.highlights && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                Key Configuration Highlights
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {property.highlights.bedrooms && (
                  <div className="p-3 bg-stone-50 rounded border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase">Bedrooms</span>
                    <span className="font-semibold text-stone-900">{property.highlights.bedrooms}</span>
                  </div>
                )}
                {property.highlights.bathrooms && (
                  <div className="p-3 bg-stone-50 rounded border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase">Bathrooms</span>
                    <span className="font-semibold text-stone-900">{property.highlights.bathrooms}</span>
                  </div>
                )}
                {property.highlights.superArea && (
                  <div className="p-3 bg-stone-50 rounded border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase">Area / Footprint</span>
                    <span className="font-semibold text-stone-900">{property.highlights.superArea}</span>
                  </div>
                )}
                {property.highlights.facing && (
                  <div className="p-3 bg-stone-50 rounded border border-stone-100">
                    <span className="text-stone-400 block text-[10px] uppercase">Orientation</span>
                    <span className="font-semibold text-stone-900">{property.highlights.facing}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              Property Overview
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Verified Feature Attributes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
              Features &amp; Guidance Inclusions
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {property.keyDetails.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Guidance */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-stone-500 block uppercase tracking-wider">Pricing Structure</span>
              <span className="text-lg font-serif font-semibold text-stone-900">
                {property.priceDisplay}
              </span>
              <span className="text-[11px] text-stone-500 block">Direct consultation with broker</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={createWhatsAppPropertyInquiryLink(property)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#111518] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
