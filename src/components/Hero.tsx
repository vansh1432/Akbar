import React from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle2, Shield, Laptop, Printer, CreditCard, Award, FileText, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-blue-900/50">
      {/* Background Subtle Geometric Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Saffron/Blue Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, Subheading, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Brand Logo & Trust indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-white to-blue-400 shadow-xl shadow-blue-900/50 shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="MANU JAN SEVA KENDRA Official Seal Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-xs text-blue-200 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-amber-300">CSC अधिकृत डिजिटल सेवा केंद्र</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>धीमीश्री, शमसाबाद (आगरा)</span>
                </div>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-amber-400 font-['Plus_Jakarta_Sans',sans-serif] tracking-wider text-xl sm:text-2xl mb-1 uppercase">
                  MANU JAN SEVA KENDRA
                </span>
                <span className="block text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
                  आपकी सभी डिजिटल एवं ऑनलाइन सेवाओं का विश्वसनीय केंद्र
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 font-medium max-w-2xl mx-auto lg:mx-0">
                "सरकारी एवं गैर-सरकारी ऑनलाइन सेवाएं एक ही स्थान पर"
              </p>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                आय, जाति, निवास प्रमाण पत्र, नया पैन कार्ड व सुधार, आधार कार्ड प्रिंट, सभी सरकारी ऑनलाइन फॉर्म, पेंशन आवेदन, बिजली बिल भुगतान, बैंकिंग सेवाएं एवं हाई स्पीड लेजर प्रिंटिंग की विश्वसनीय सुविधा।
              </p>
            </div>

            {/* 3 Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span>📞 Call Now (8534070445)</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('नमस्ते मनु जन सेवा केंद्र, मुझे ऑनलाइन सेवा के संबंध में जानकारी चाहिए।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>💬 WhatsApp</span>
              </a>

              {/* Get Directions */}
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-blue-900/90 hover:bg-blue-800 text-white font-semibold text-base border border-blue-600/60 shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>📍 Get Directions</span>
              </a>
            </div>

            {/* Highlights row */}
            <div className="pt-4 border-t border-blue-900/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">त्वरित एवं पारदर्शी सेवा</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">सरकारी मानक अनुसार</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">उचित न्यूनतम दरें</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">7 दिन सुबह 7:30 से सेवा</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Graphic Presentation (Digital Seva Kendra Graphics) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Frame representing the CSC Digital Hub */}
              <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-blue-950/90 border-2 border-blue-600/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                
                {/* Decorative Indian Tricolor Subtle Strip Top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                  <div className="w-1/3 bg-amber-500" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-emerald-500" />
                </div>

                {/* Hub Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-white to-blue-400 shadow-md shrink-0">
                      <img
                        src={BUSINESS_INFO.logoUrl}
                        alt="MANU JAN SEVA KENDRA CSC Seal"
                        className="w-full h-full object-cover rounded-full bg-white"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white tracking-wide">मनु जन सेवा केंद्र</h2>
                      <p className="text-[11px] text-slate-400">प्रो. अंगद कुशवाह · मो. 8534070445</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-600/50">
                    अधिकृत केंद्र
                  </span>
                </div>

                {/* Visual Graphics Grid showing Core Digital Services */}
                <div className="grid grid-cols-2 gap-3.5 my-4">
                  {/* Item 1: Aadhaar Card */}
                  <div className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-3 border border-slate-700/60 transition-all hover:border-amber-400/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">डाउनलोड ₹50</span>
                    </div>
                    <div className="text-xs font-bold text-white">आधार कार्ड सेवाएं</div>
                    <div className="text-[11px] text-slate-400">प्रिंट, बायोमेट्रिक व ई-केवाईसी</div>
                  </div>

                  {/* Item 2: PAN Card */}
                  <div className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-3 border border-slate-700/60 transition-all hover:border-blue-400/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-blue-300 font-bold">मात्र ₹250</span>
                    </div>
                    <div className="text-xs font-bold text-white">पैन कार्ड (PAN Card)</div>
                    <div className="text-[11px] text-slate-400">नया आवेदन व त्वरित सुधार</div>
                  </div>

                  {/* Item 3: Certificates */}
                  <div className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-3 border border-slate-700/60 transition-all hover:border-emerald-400/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">मात्र ₹100</span>
                    </div>
                    <div className="text-xs font-bold text-white">आय, जाति, निवास</div>
                    <div className="text-[11px] text-slate-400">ई-डिस्ट्रिक्ट प्रमाणित आवेदन</div>
                  </div>

                  {/* Item 4: Printing & Binding */}
                  <div className="bg-slate-800/80 hover:bg-slate-800 rounded-xl p-3 border border-slate-700/60 transition-all hover:border-purple-400/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                        <Printer className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] text-amber-300 font-bold">₹2 से शुरू</span>
                    </div>
                    <div className="text-xs font-bold text-white">प्रिंट, बाइंडिंग, लैमिनेशन</div>
                    <div className="text-[11px] text-slate-400">व्हाट्सएप पीडीएफ प्रिंट ₹2</div>
                  </div>
                </div>

                {/* Direct Help Footer inside the card */}
                <div className="bg-blue-950/70 rounded-xl p-3 border border-blue-800/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">ऑनलाइन फॉर्म एवं रिजल्ट</div>
                      <div className="text-[11px] text-slate-300">एडमिट कार्ड, काउंसलिंग, स्कॉलरशिप</div>
                    </div>
                  </div>

                  <a
                    href="#services"
                    className="shrink-0 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group"
                  >
                    <span>सभी 20 सेवाएं</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 rounded-xl py-2 px-3.5 shadow-xl border border-slate-200 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">100% विश्वसनीय व त्रुटिरहित</div>
                  <div className="text-[10px] text-slate-500">धीमीश्री, शमसाबाद (आगरा)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
