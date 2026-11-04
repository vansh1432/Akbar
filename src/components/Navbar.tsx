import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'होम', en: 'Home', href: '#home' },
    { name: 'हमारे बारे में', en: 'About Us', href: '#about' },
    { name: 'सेवाएं', en: 'Services', href: '#services' },
    { name: 'रेट लिस्ट', en: 'Rate List', href: '#rate-list' },
    { name: 'संपर्क', en: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>धीमीश्री, शमसाबाद, आगरा (उ.प्र.)</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>सुबह 7:30 से रात 8:30 तक (खुला है)</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <span className="text-slate-400">संचालक: <strong className="text-white font-semibold">अंगद कुशवाह</strong></span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>8534070445</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand Name */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-blue-800 via-amber-500 to-blue-900 shadow-md shadow-blue-950/20 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="MANU JAN SEVA KENDRA Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-xl tracking-tight text-blue-950 font-['Plus_Jakarta_Sans',sans-serif] uppercase">
                    MANU JAN SEVA KENDRA
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="text-amber-700 font-semibold">मनु जन सेवा केंद्र</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 hidden sm:inline">& CSC डिजिटल सेवा</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-800 rounded-lg hover:bg-blue-50/80 transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="block text-[10px] text-slate-600 font-normal">{link.en}</span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all hover:shadow-emerald-600/20 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold shadow-sm transition-all hover:shadow-blue-900/20 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>कॉल करें (8534070445)</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2 rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100 sm:hidden"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                >
                  <span className="font-semibold">{link.name}</span>
                  <span className="text-xs text-slate-600">{link.en}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-blue-900 text-white font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>कॉल करें: 8534070445</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp पर संपर्क करें</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
