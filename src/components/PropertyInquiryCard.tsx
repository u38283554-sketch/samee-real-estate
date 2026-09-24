import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle2, AlertCircle, Sparkles, Building2, MapPin } from 'lucide-react';
import { LookingForType, PropertyCategory, InquiryFormData, StoredInquiry } from '../types';
import { BUSINESS_INFO, POPULAR_MADURAI_AREAS } from '../data/businessInfo';
import { createWhatsAppInquiryLink } from '../utils/whatsapp';
import { saveInquiry } from '../utils/inquiryStorage';

const LOOKING_FOR_OPTIONS: LookingForType[] = [
  'Buy a Property',
  'Rent a Property',
  'Sell a Property',
  'Real Estate Consultation',
];

const PROPERTY_TYPE_OPTIONS: PropertyCategory[] = [
  'Residential',
  'Commercial',
  'Land / Plot',
  'House / Villa',
  'Apartment',
];

const BUDGET_OPTIONS = [
  'Under ₹25 Lakhs',
  '₹25 Lakhs – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹2 Crores',
  'Above ₹2 Crores',
  'Flexible / Open for Discussion',
];

export const PropertyInquiryCard: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    lookingFor: 'Buy a Property',
    propertyType: 'House / Villa',
    preferredLocation: '',
    budget: '',
    name: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedInquiry, setSubmittedInquiry] = useState<StoredInquiry | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
      if (cleanPhone.length < 8) {
        errs.phone = 'Please enter a valid phone number (minimum 8 digits)';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const stored = saveInquiry(formData);
      setSubmittedInquiry(stored);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedInquiry(null);
    setFormData({
      lookingFor: 'Buy a Property',
      propertyType: 'House / Villa',
      preferredLocation: '',
      budget: '',
      name: '',
      phone: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="inquiry-section" className="relative -mt-8 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white rounded-xl shadow-xl border border-stone-200/90 overflow-hidden">
        {/* Card Header */}
        <div className="bg-[#111518] px-6 sm:px-8 py-6 text-white border-b border-[#C5A059]/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                Property Search &amp; Advisory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Let&apos;s Find Your Next Property
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md">
              Share your criteria directly with Samee Reale Estates &amp; House Brokers for local property guidance in Madurai.
            </p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 md:p-10 bg-[#FAF8F5]">
          {submittedInquiry ? (
            /* Confirmation State with transparent delivery notice and direct WhatsApp action */
            <div className="py-6 sm:py-8 max-w-2xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border border-emerald-200 text-emerald-600">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium mb-2">
                  Thank You, {submittedInquiry.name}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Your property inquiry details have been successfully prepared and saved for your session (Ref: <span className="font-mono text-xs font-semibold">{submittedInquiry.id}</span>).
                </p>
              </div>

              {/* Inquiry Summary Review Box */}
              <div className="bg-white rounded-lg p-5 border border-stone-200 text-left text-xs sm:text-sm space-y-2 text-stone-700 shadow-sm">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-stone-100">
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Service</span>
                    <span className="font-medium text-stone-900">{submittedInquiry.lookingFor}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Property Type</span>
                    <span className="font-medium text-stone-900">{submittedInquiry.propertyType}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Location</span>
                    <span className="font-medium text-stone-900">
                      {submittedInquiry.preferredLocation || 'Madurai (General)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase">Budget</span>
                    <span className="font-medium text-stone-900">{submittedInquiry.budget || 'Open / Discussion'}</span>
                  </div>
                </div>
                {submittedInquiry.message && (
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-stone-400 block text-[11px] uppercase">Requirements Note</span>
                    <p className="text-stone-800 italic">{submittedInquiry.message}</p>
                  </div>
                )}
              </div>

              {/* Honest Delivery Notification & Conversion Triggers */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-4 text-xs text-amber-900 leading-relaxed text-left">
                <p className="font-medium mb-1 flex items-center gap-1.5 text-amber-950">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  Connect Instantly with Samee Reale Estates:
                </p>
                To ensure your requirement is received immediately without delay, we have formatted your complete inquiry for WhatsApp or direct phone consultation below.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={createWhatsAppInquiryLink(submittedInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 82486 52873)</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111518] hover:bg-stone-800 text-white text-sm font-semibold rounded transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call Consultant Now</span>
                </a>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-2"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Field 1: Looking For */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  1. What Are You Looking For? <span className="text-amber-700">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {LOOKING_FOR_OPTIONS.map((option) => {
                    const isSelected = formData.lookingFor === option;
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData({ ...formData, lookingFor: option })}
                        className={`px-3 py-2.5 text-xs font-medium rounded border text-center transition-all ${
                          isSelected
                            ? 'bg-[#111518] text-white border-[#111518] shadow-sm'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-400 hover:bg-stone-50'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 2: Property Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  2. Property Type <span className="text-amber-700">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {PROPERTY_TYPE_OPTIONS.map((cat) => {
                    const isSelected = formData.propertyType === cat;
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setFormData({ ...formData, propertyType: cat })}
                        className={`px-3 py-2 text-xs font-medium rounded border text-center transition-all ${
                          isSelected
                            ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-sm'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-400 hover:bg-stone-50'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 3: Location & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Location */}
                <div>
                  <label htmlFor="preferredLocation" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    3. Preferred Location in Madurai
                  </label>
                  <div className="relative">
                    <input
                      id="preferredLocation"
                      type="text"
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      placeholder="e.g., Sambakulam, K.K. Nagar, Anna Nagar..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-stone-900 placeholder:text-stone-400"
                    />
                  </div>
                  {/* Quick Madurai area pills */}
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-stone-400 font-medium">Quick suggestions:</span>
                    {POPULAR_MADURAI_AREAS.slice(0, 5).map((area) => (
                      <button
                        type="button"
                        key={area}
                        onClick={() => setFormData({ ...formData, preferredLocation: area })}
                        className="text-[11px] px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded transition-colors"
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    4. Estimated Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-stone-900"
                  >
                    <option value="">Select budget range (Optional)</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Client Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-200">
                {/* Name */}
                <div>
                  <label htmlFor="clientName" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    5. Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="clientName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-stone-900 placeholder:text-stone-400 ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="clientPhone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    6. Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="clientPhone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-stone-900 placeholder:text-stone-400 ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Message / Additional Requirements */}
              <div>
                <label htmlFor="clientMessage" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  7. Specific Requirements / Notes (Optional)
                </label>
                <textarea
                  id="clientMessage"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., Looking for immediate possession, 3 BHK villa with east facing near Sambakulam main road..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-stone-900 placeholder:text-stone-400 resize-none"
                />
              </div>

              {/* Form Submission CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Direct consultation with Samee Reale Estates &amp; House Brokers</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#C5A059] hover:bg-[#B59045] text-white text-sm font-semibold tracking-wide uppercase rounded shadow transition-all duration-200 active:scale-98 disabled:opacity-50"
                >
                  <span>Send Property Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
