import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Shield, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info & Motto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-blue-500 to-emerald-400 shadow shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="MANU JAN SEVA KENDRA Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                  MANU JAN SEVA KENDRA
                </span>
                <span className="text-xs text-amber-400 font-semibold">मनु जन सेवा केंद्र एवं सीएससी</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-blue-200">
              "Digital Services | Online Forms | CSC Services | Printing | Lamination"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              धीमीश्री, शमसाबाद (आगरा) में स्थित अधिकृत डिजिटल एवं नागरिक सेवा केंद्र। आय, जाति, निवास प्रमाण पत्र, पैन कार्ड, आधार, छात्रवृत्ति, पेंशन, बिजली बिल व समस्त ऑनलाइन फॉर्म भरने का विश्वसनीय प्रतिष्ठान।
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <p>संचालक: <strong className="text-white">{BUSINESS_INFO.proprietor}</strong> ({BUSINESS_INFO.proprietorHi})</p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Quick Links (त्वरित लिंक)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home (होम)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us (हमारे बारे में)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services (सेवाएं)
                </a>
              </li>
              <li>
                <a href="#rate-list" className="hover:text-amber-400 transition-colors">
                  Rate List (रेट लिस्ट)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact (संपर्क)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Timing (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
              Contact & Timings (संपर्क व समय)
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.location}<br />
                  <span className="text-slate-500">{BUSINESS_INFO.locationHi}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:underline font-bold text-sm">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>प्रतिदिन: सुबह 07:30 बजे से रात 08:30 बजे तक (All 7 Days Open)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>गूगल मैप पर केंद्र का स्थान देखें</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Legal & Anti-affiliate Disclaimer */}
      <div className="bg-black/50 border-t border-slate-900 py-4 px-4 text-center text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            सूचना: मनु जन सेवा केंद्र एक निजी अधिकृत सीएससी (CSC) एवं डिजिटल सेवा ऑपरेटर है। हम नागरिकों को आधिकारिक सरकारी पोर्टलों के माध्यम से सुगम ऑनलाइन आवेदन सहायता प्रदान करते हैं।
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors shrink-0"
          >
            <span>शीर्ष पर जाएं</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 py-4 px-4 text-center text-xs text-slate-400 bg-slate-950">
        <p className="font-semibold text-slate-300">
          © 2026 MANU JAN SEVA KENDRA. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
