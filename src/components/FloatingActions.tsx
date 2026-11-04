import React from 'react';
import { Phone, MessageCircle, MapPin, IndianRupee } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Floating WhatsApp and Call buttons for Desktop / Tablet */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-blue-900 hover:bg-blue-950 text-white shadow-xl hover:shadow-blue-900/40 border border-blue-700/50 transition-all hover:scale-105"
          aria-label="Call Angad Kushwah"
        >
          <Phone className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-bold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            कॉल करें: 8534070445
          </span>
        </a>

        {/* WhatsApp Button with pulse effect */}
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('नमस्ते मनु जन सेवा केंद्र, मुझे ऑनलाइन सेवा संबंधी सहायता चाहिए।')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-600/40 border border-emerald-400/40 transition-all hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>

          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="text-xs font-extrabold tracking-wide">
            WhatsApp सहायता
          </span>
        </a>

      </div>

      {/* Mobile Sticky Bottom Quick-Bar (Fixed at bottom on phones) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1.5 text-center">
          
          {/* Call */}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mb-0.5 text-blue-900">
              <Phone className="w-3.5 h-3.5 fill-blue-900" />
            </div>
            <span className="text-[10px] font-bold">कॉल</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('नमस्ते मनु जन सेवा केंद्र, मुझे सहायता चाहिए।')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center mb-0.5 text-emerald-700">
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-700 text-white" />
            </div>
            <span className="text-[10px] font-bold">WhatsApp</span>
          </a>

          {/* Rate List */}
          <a
            href="#rate-list"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center mb-0.5 text-slate-800">
              <IndianRupee className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-bold">रेट लिस्ट</span>
          </a>

          {/* Directions */}
          <a
            href={BUSINESS_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center mb-0.5 text-amber-700">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-bold">रास्ता</span>
          </a>

        </div>
      </div>
    </>
  );
};
