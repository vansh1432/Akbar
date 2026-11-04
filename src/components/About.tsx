import React from 'react';
import { ShieldCheck, Zap, Headphones, Cpu, MapPin, User, Phone, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const About: React.FC = () => {
  const pillars = [
    {
      titleEn: 'Professional Service',
      titleHi: 'पेशेवर एवं सटीक सेवा',
      desc: 'सरकारी पोर्टलों पर बिना किसी त्रुटि के फॉर्म भरना, दस्तावेजों की सही स्कैनिंग एवं सटीक दिशा-निर्देश।',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      titleEn: 'Fast Processing',
      titleHi: 'त्वरित एवं समयबद्ध कार्य',
      desc: 'हाई-स्पीड इंटरनेट, लेजर प्रिंटर व अनुभवी संचालक द्वारा आपका कार्य न्यूनतम समय में पूरा किया जाता है।',
      icon: Zap,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      titleEn: 'Customer Support',
      titleHi: 'व्यक्तिगत सहायता व मार्गदर्शन',
      desc: 'ग्रामीण व विद्यार्थियों को योजनाओं की पात्रता, आवश्यक दस्तावेजों की जानकारी व पूर्ण मार्गदर्शन प्रदान करना।',
      icon: Headphones,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      titleEn: 'Digital Services',
      titleHi: 'संपूर्ण डिजिटल समाधान',
      desc: 'आधार, पैन, ई-डिस्ट्रिक्ट, छात्रवृत्ति, बैंकिंग, बिजली बिल से लेकर लैमिनेशन व बाइंडिंग सब एक ही छत के नीचे।',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full mb-3">
            परिचय एवं विशेषताएं · About Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            हमारे बारे में
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            "MANU JAN SEVA KENDRA में आपको विभिन्न डिजिटल, ऑनलाइन एवं दस्तावेज संबंधी सेवाएं एक ही स्थान पर उपलब्ध कराई जाती हैं। हमारा उद्देश्य ग्राहकों को सरल, तेज और सुविधाजनक डिजिटल सेवाएं उपलब्ध कराना है।"
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                    {pillar.titleEn}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                    {pillar.titleHi}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>गुणवत्ता की गारंटी</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Profile / Proprietor Highlight Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Operator Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-blue-800 to-emerald-600 shadow-md shrink-0">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="MANU JAN SEVA KENDRA Official Seal"
                    className="w-full h-full object-cover rounded-full bg-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs text-slate-600 font-bold uppercase tracking-wider">संचालक एवं प्रोप्राइटर (Proprietor)</div>
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    {BUSINESS_INFO.proprietor} ({BUSINESS_INFO.proprietorHi})
                  </h4>
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    अधिकृत जन सेवा केंद्र एवं सीएससी संचालक
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                धीमीश्री एवं शमसाबाद क्षेत्र के सभी नागरिकों, किसानों और छात्र-छात्राओं को सरकारी योजनाओं, छात्रवृत्ति फॉर्म, पेंशन, आधार, पैन एवं दस्तावेजीकरण की सुगम सेवाएं बिना किसी बिचौलिए के सही सरकारी मानकों पर उपलब्ध कराना हमारा संकल्प है।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>स्थान:</strong> {BUSINESS_INFO.locationHi}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>समय:</strong> प्रतिदिन सुबह 7:30 से रात 8:30 तक</span>
                </div>
              </div>
            </div>

            {/* Quick Equipment & Facility Highlights */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-inner space-y-3.5">
              <h5 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                केंद्र पर उपलब्ध आधुनिक सुविधाएं
              </h5>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>हाई-स्पीड लेजर प्रिंटर (Single & Double Sided)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>एचडी कलर फोटो प्रिंटर व लैमिनेशन मशीन</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>प्रोजेक्ट व नोट्स हेतु हैवी-ड्यूटी स्पाइरल बाइंडिंग</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>बायोमेट्रिक फिंगरप्रिंट स्कैनर (AEPS / आधार निकासी)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>इनवर्टर व बैकअप बिजली सुविधा (निर्बाध कार्य)</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>सीधे फोन पर जानकारी लें: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
