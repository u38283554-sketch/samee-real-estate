import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  ExternalLink,
  Edit2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ContactFormData } from '../types';
import { createWhatsAppDirectLink } from '../utils/whatsapp';

export const ContactLocationSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    interestedIn: 'Buying a Property in Madurai',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [currentHours, setCurrentHours] = useState(BUSINESS_INFO.hours);
  const [tempHours, setTempHours] = useState(BUSINESS_INFO.hours);

  const interestOptions = [
    'Buying a Property in Madurai',
    'Renting / Leasing a Property',
    'Selling a Property / Listing Assistance',
    'Plot / Land Investment Advisory',
    'Commercial Space Brokerage',
    'General Consultation',
  ];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number';
    } else {
      const clean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
      if (clean.length < 8) {
        errs.phone = 'Please enter a valid phone number';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct formulation
    setIsSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = [
      `*Direct Inquiry — Samee Reale Estates & House Brokers*`,
      `• *Name:* ${formData.fullName}`,
      `• *Phone:* ${formData.phone}`,
      `• *Interested In:* ${formData.interestedIn}`,
      formData.message ? `• *Message:* ${formData.message}` : '',
      ``,
      `Hello Samee Reale Estates, I sent this message via your website contact form. Please let me know when we can connect.`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/918248652873?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleUpdateHours = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentHours(tempHours);
    setIsHoursModalOpen(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#111518] text-white relative overflow-hidden">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Let&apos;s Talk About Your Property Goals.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Reach out to Samee Reale Estates &amp; House Brokers directly for property inquiries, broker guidance, or to schedule a visit in Sambakulam, Madurai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Business Information & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
              {/* Business Name */}
              <div>
                <h3 className="font-serif text-2xl font-medium text-white mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase">
                  {BUSINESS_INFO.category} · Madurai, Tamil Nadu
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm text-stone-200">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                      Consultancy Office Address
                    </span>
                    <p className="text-stone-200 leading-relaxed font-normal mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                      Direct Phone / Mobile
                    </span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-stone-100 hover:text-[#C5A059] font-medium text-base transition-colors inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                        Operational Hours
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsHoursModalOpen(true)}
                        className="text-[10px] text-[#C5A059] hover:text-[#B59045] flex items-center gap-1 transition-colors"
                        title="Update listed hours"
                      >
                        <Edit2 className="w-2.5 h-2.5" />
                        <span>Owner Update</span>
                      </button>
                    </div>
                    <p className="text-stone-100 font-medium mt-0.5">
                      {currentHours}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      (As provided; call or WhatsApp anytime for property queries.)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now, WhatsApp Us, Get Directions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C5A059] hover:bg-[#B59045] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-md text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={createWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-stone-900">
              <div className="px-4 py-3 bg-[#181D24] border-b border-white/10 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="font-medium">Sambakulam, Madurai Map Location</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-64 sm:h-72 w-full">
                <iframe
                  title="Samee Reale Estates Location Map - Sambakulam Madurai"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[25%] contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Advisory Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-stone-900 rounded-xl p-6 sm:p-8 md:p-10 shadow-xl border border-stone-200">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                Direct Message
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Fill out your details and we will promptly respond to your property request.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-medium text-stone-900">
                    Message Prepared
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. To ensure instantaneous receipt on the consultant’s mobile, you can forward this immediately via WhatsApp.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>

                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111518] hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C5A059]" />
                      <span>Call Directly</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        interestedIn: interestOptions[0],
                        message: '',
                      });
                    }}
                    className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contactFullName" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactFullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g., Rajesh Kumar"
                      className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 82486 52873"
                      className={`w-full px-3.5 py-2.5 text-sm bg-stone-50 border rounded text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-stone-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Interested In */}
                  <div>
                    <label htmlFor="interestedIn" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Interested In
                    </label>
                    <select
                      id="interestedIn"
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contactMessage" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Message / Inquiry Details
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements or query..."
                      className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded text-stone-900 placeholder:text-stone-400 resize-none focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#C5A059] hover:bg-[#B59045] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-md mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-stone-500 text-center pt-2">
                    Direct broker response · No automated bots · Strict client confidentiality
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Business Owner Update Hours Modal (as requested: "allow the owner to update this if needed") */}
      {isHoursModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white text-stone-900 rounded-xl p-6 max-w-md w-full shadow-2xl border border-stone-200">
            <h4 className="font-serif text-xl font-medium mb-1">
              Update Operational Business Hours
            </h4>
            <p className="text-xs text-stone-600 mb-4">
              Owner control panel to update listed availability for Samee Reale Estates.
            </p>

            <form onSubmit={handleUpdateHours} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Business Hours Display
                </label>
                <input
                  type="text"
                  value={tempHours}
                  onChange={(e) => setTempHours(e.target.value)}
                  placeholder="e.g., Open 24 hours OR Mon-Sat: 9:00 AM - 8:00 PM"
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded focus:ring-1 focus:ring-[#C5A059] text-stone-900"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsHoursModalOpen(false)}
                  className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C5A059] hover:bg-[#B59045] text-white text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Save Hours
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
