import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { createWhatsAppDirectLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111518]/95 backdrop-blur-md shadow-md py-3 text-white border-b border-[#C5A059]/20'
            : 'bg-gradient-to-b from-[#111518]/90 via-[#111518]/60 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Text Logo */}
            <a
              href="#home"
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
            >
              <span className="font-serif tracking-[0.18em] text-xl sm:text-2xl font-semibold text-white group-hover:text-[#C5A059] transition-colors uppercase">
                {BUSINESS_INFO.shortName}
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-[#C5A059] uppercase -mt-0.5">
                {BUSINESS_INFO.subtitle}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-stone-300 hover:text-[#C5A059] transition-colors relative py-1 hover:border-b-2 hover:border-[#C5A059]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={createWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/30 rounded border border-emerald-500/30 transition-colors"
                title="Chat with Samee Reale on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-[#C5A059] hover:bg-[#B59045] rounded shadow-sm transition-all duration-200 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="sm:hidden p-2 text-[#C5A059] hover:bg-white/10 rounded focus:outline-none"
                aria-label="Call business"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111518] border-b border-stone-800 px-4 pt-4 pb-6 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 text-stone-300 hover:text-[#C5A059] hover:bg-stone-900 rounded text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1 text-xs text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Sambakulam, Madurai</span>
                </div>
                <a
                  href={createWhatsAppDirectLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-600/30 rounded"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold tracking-wide uppercase text-white bg-[#C5A059] hover:bg-[#B59045] rounded"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
