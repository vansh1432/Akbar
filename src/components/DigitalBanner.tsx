import React from 'react';
import { CreditCard, Award, FileText, HeartHandshake, FileEdit, Printer, Landmark, Building2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const DigitalBanner: React.FC = () => {
  const coreServices = [
    { name: 'Aadhaar', hi: 'आधार कार्ड', icon: CreditCard, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { name: 'PAN', hi: 'पैन कार्ड', icon: Award, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/30' },
    { name: 'Certificate', hi: 'आय/जाति/निवास', icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { name: 'Pension', hi: 'पेंशन योजनाएं', icon: HeartHandshake, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
    { name: 'Online Forms', hi: 'सरकारी फॉर्म', icon: FileEdit, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/30' },
    { name: 'Printing', hi: 'प्रिंटिंग व लेमिनेशन', icon: Printer, color: 'text-amber-300', bg: 'bg-amber-400/10 border-amber-400/30' },
    { name: 'Banking', hi: 'AEPS नकद निकासी', icon: Landmark, color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/30' },
    { name: 'CSC', hi: 'डिजिटल सेवा', icon: Building2, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 border-y border-blue-900/60 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-white to-blue-400 shadow-lg mx-auto mb-3">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="MANU JAN SEVA KENDRA Logo"
              className="w-full h-full object-cover rounded-full bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            ONE-STOP DIGITAL SEVA CENTRE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1">
            "सभी डिजिटल एवं ऑनलाइन सेवाएं एक ही स्थान पर"
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            मनु जन सेवा केंद्र, धिमीश्री (शमसाबाद) - ग्रामीणों एवं विद्यार्थियों के लिए त्वरित, सुलभ व भरोसेमंद केंद्र।
          </p>
        </div>

        {/* Icons Grid: Aadhaar | PAN | Certificate | Pension | Online Forms | Printing | Banking | CSC */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href="#services"
                className={`flex flex-col items-center justify-center p-4 rounded-xl border ${service.bg} backdrop-blur-sm hover:scale-105 transition-all duration-200 group text-center`}
              >
                <div className={`p-3 rounded-lg ${service.color} mb-2.5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  {service.name}
                </span>
                <span className="text-[11px] text-slate-300 mt-0.5">
                  {service.hi}
                </span>
              </a>
            );
          })}
        </div>

        {/* Quick WhatsApp assistance pill */}
        <div className="mt-8 text-center">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors bg-emerald-950/60 border border-emerald-700/60 px-4 py-2 rounded-full"
          >
            <span>दस्तावेज व्हाट्सएप पर भेजें और प्रिंट तैयार पाएं (WhatsApp: 8534070445)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
