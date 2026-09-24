import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Filter, 
  ArrowUpRight, 
  Building2, 
  Check, 
  MessageCircle, 
  Phone,
  Eye,
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { PropertyCategory, PropertyListing } from '../types';
import { DEMO_SAMPLE_LISTINGS, BUSINESS_INFO } from '../data/businessInfo';
import { PropertyModal } from './PropertyModal';
import { createWhatsAppPropertyInquiryLink } from '../utils/whatsapp';

export const FeaturedProperties: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'showcase' | 'live'>('showcase');
  const [activeModalProperty, setActiveModalProperty] = useState<PropertyListing | null>(null);

  const categories = ['All', 'House / Villa', 'Apartment', 'Land / Plot', 'Commercial'];

  // Filtered listings
  const filteredListings = useMemo(() => {
    if (activeTab === 'live') {
      // Live inventory is kept empty as instructed when no verified private listings have been provided by owner
      return [];
    }

    return DEMO_SAMPLE_LISTINGS.filter((item) => {
      const matchesType = selectedType === 'All' || item.propertyType === selectedType;
      const matchesSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.areaName.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery, activeTab]);

  const scrollToInquiry = () => {
    const el = document.getElementById('inquiry-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="properties" className="py-20 bg-[#FBF9F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
            Curated Portfolio &amp; Discovery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-medium tracking-tight mb-4">
            Explore Your Next Possibility
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            From finding a home to exploring property opportunities, discover spaces that match your goals in Madurai.
          </p>
        </div>

        {/* Inventory Mode Selector & Filter Toolbar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-stone-200 shadow-sm mb-10 space-y-5">
          {/* Inventory Mode Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg max-w-fit">
              <button
                type="button"
                onClick={() => setActiveTab('showcase')}
                className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'showcase'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Consultation Showcase (4 Models)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('live')}
                className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeTab === 'live'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Live Inventory (Updating)
              </button>
            </div>

            {/* Note badge */}
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <Info className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>Representative layouts displayed for consultation advisory.</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedType === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedType(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                      isActive
                        ? 'bg-[#111518] text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search area (e.g. Sambakulam)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-stone-400 hover:text-stone-600 absolute right-2.5 top-1/2 -translate-y-1/2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Listings Display Grid OR Polished Empty State */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredListings.map((property) => (
              <article
                key={property.id}
                className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Property Card Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* Status Kicker */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#111518]/90 text-[#C5A059] border border-[#C5A059]/40 rounded backdrop-blur-sm">
                      {property.status}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-300 block">
                        Estimated Guidance
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-white">
                        {property.priceDisplay}
                      </span>
                    </div>

                    <span className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-stone-100 font-medium">
                      {property.propertyType}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 group-hover:text-[#B59045] transition-colors mb-2">
                      {property.title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                      {property.description}
                    </p>

                    {/* Key Details Points */}
                    <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-t border-stone-100 text-xs text-stone-600">
                      {property.keyDetails.slice(0, 4).map((detail, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#C5A059] shrink-0" />
                          <span className="truncate">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveModalProperty(property)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={createWhatsAppPropertyInquiryLink(property)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B59045] rounded transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Polished Empty State as specified in brief */
          <div className="bg-white rounded-xl border border-stone-200 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm space-y-4">
            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-500">
              <Building2 className="w-7 h-7 text-[#C5A059]" />
            </div>

            <h3 className="font-serif text-2xl text-stone-900 font-medium">
              New property opportunities will appear here.
            </h3>

            <p className="text-stone-600 text-sm leading-relaxed max-w-lg mx-auto">
              Our live listing inventory is updated directly via verified client agreements. Contact Samee Reale Estates &amp; House Brokers to discuss your specific property requirements or browse our consultation showcase.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollToInquiry}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#C5A059] hover:bg-[#B59045] text-white text-xs font-semibold uppercase tracking-wider rounded shadow transition-colors"
              >
                Submit Your Requirements
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('showcase');
                  setSelectedType('All');
                  setSearchQuery('');
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                View Showcase Models
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Property Details Modal */}
      <PropertyModal
        property={activeModalProperty}
        onClose={() => setActiveModalProperty(null)}
        onInquireNow={(prop) => {
          setActiveModalProperty(null);
          scrollToInquiry();
        }}
      />
    </section>
  );
};
