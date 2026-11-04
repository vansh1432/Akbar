import React from 'react';
import { ShieldCheck, IndianRupee, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'विश्वसनीय सेवा',
      subtitle: 'Trustworthy & Secure',
      desc: 'आपके दस्तावेजों और व्यक्तिगत जानकारी की 100% गोपनीयता। अधिकृत सीएससी पोर्टल द्वारा सुरक्षित एवं वैध कार्य।',
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      title: 'उचित सेवा शुल्क',
      subtitle: 'Transparent & Low Rates',
      desc: 'कोई छिपा हुआ चार्ज नहीं। सरकार द्वारा निर्धारित एवं क्षेत्र में सबसे किफायती दरों पर उच्च स्तरीय सेवा।',
      icon: IndianRupee,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      title: 'तेज ऑनलाइन सेवा',
      subtitle: 'Fast Turnaround Time',
      desc: 'हाई-स्पीड इंटरनेट व आधुनिक प्रिंटिंग सेटअप की बदौलत बिना कतार में घंटों खड़े रहे तुरंत काम पूरा।',
      icon: Zap,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      title: 'एक ही स्थान पर अनेक सुविधाएं',
      subtitle: 'All-in-One Digital Hub',
      desc: 'प्रमाण पत्र, पैन, आधार, ऑनलाइन फॉर्म, बैंकिंग, बिजली बिल, प्रिंटिंग, लेमिनेशन व बाइंडिंग सब एक छत के नीचे।',
      icon: Layers,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full mb-3">
            हमारे विशेष लाभ · Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            हमें ही क्यों चुनें?
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            मनु जन सेवा केंद्र (धीमीश्री, शमसाबाद) पर ग्राहकों के विश्वास, समय और सुविधा को सर्वोपरि रखा जाता है।
          </p>
        </div>

        {/* 4 Highlighted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Checkmark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-emerald-700 font-extrabold text-lg flex items-center gap-1">
                      <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-emerald-700" />
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">
                    ✓ {item.title}
                  </h3>
                  <div className="text-xs text-slate-600 font-medium mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-blue-900">100% संतुष्टि</span>
                  <span>मनु सेवा केंद्र</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Local Trust Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base text-amber-300">
              धीमीश्री, शमसाबाद और आसपास के गांवों का विश्वसनीय केंद्र
            </h4>
            <p className="text-xs text-slate-200 mt-0.5">
              किसी भी सरकारी ऑनलाइन सेवा, फॉर्म या प्रिंटिंग के लिए सीधे संपर्क करें या पधारें।
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              📞 8534070445
            </a>
            <a
              href={BUSINESS_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-700 text-white font-semibold text-xs border border-blue-600 transition-colors"
            >
              📍 रास्ता देखें
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
