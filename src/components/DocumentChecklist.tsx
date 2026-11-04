import React, { useState } from 'react';
import { FileCheck, CheckCircle2, AlertCircle, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';

export const DocumentChecklist: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const checklists = [
    {
      titleHi: 'आय, जाति, निवास प्रमाण पत्र',
      titleEn: 'Certificates (Income / Caste / Domicile)',
      docs: [
        'आधार कार्ड (Aadhaar Card)',
        'पासपोर्ट साइज रंगीन फोटो (1 फोटो)',
        'स्वप्रमाणित घोषणा पत्र (केंद्र पर उपलब्ध)',
        'राशन कार्ड अथवा बिजली बिल की प्रति',
        'जाति प्रमाण पत्र हेतु: परिवार का पुराना जाति प्रमाण पत्र या खतौनी'
      ],
      tip: 'आवेदन के बाद 3 से 7 कार्य दिवस में ऑनलाइन डिजिटल हस्ताक्षरित प्रमाण पत्र प्राप्त हो जाता है।'
    },
    {
      titleHi: 'नया पैन कार्ड (PAN Apply)',
      titleEn: 'New PAN Card Application',
      docs: [
        'आधार कार्ड (Aadhaar Card)',
        '2 हालिया पासपोर्ट साइज फोटो',
        'हस्ताक्षर (सफेद कागज पर)',
        'आधार से लिंक मोबाइल नंबर (तत्काल ई-पैन हेतु)'
      ],
      tip: 'ई-पैन 24 से 48 घंटे में ईमेल पर आ जाता है एवं प्लास्टिक कार्ड डाक द्वारा घर पहुंचता है।'
    },
    {
      titleHi: 'यूपी छात्रवृत्ति (UP Scholarship)',
      titleEn: 'Scholarship Application',
      docs: [
        'गत वर्ष की अंकतालिका (Marksheet)',
        'संस्थान में जमा फीस की रसीद एवं छात्र पंजीयन संख्या',
        'आय, जाति एवं निवास प्रमाण पत्र',
        'आधार कार्ड एवं आधार सीडेड बैंक पासबुक',
        'नवीनतम पासपोर्ट साइज फोटो'
      ],
      tip: 'स्कॉलरशिप फॉर्म फाइनल सबमिट करने से पहले संस्थान में जांच (प्रारंभिक प्रिंट) अवश्य कराएं।'
    },
    {
      titleHi: 'पेंशन योजनाएं (वृद्धा / विधवा / दिव्यांग)',
      titleEn: 'Pension Applications',
      docs: [
        'आधार कार्ड एवं आधार से लिंक मोबाइल नंबर',
        'बैंक खाता पासबुक',
        'आय प्रमाण पत्र (तहसील द्वारा जारी)',
        'विधवा पेंशन हेतु: पति का मृत्यु प्रमाण पत्र',
        'दिव्यांग पेंशन हेतु: सीएमओ द्वारा जारी दिव्यांगता प्रमाण पत्र'
      ],
      tip: 'सालाना ई-केवाईसी (e-KYC) भी हमारे केंद्र पर बायोमेट्रिक द्वारा तुरंत कराई जाती है।'
    },
    {
      titleHi: 'आधार बैंकिंग (AEPS नकद निकासी)',
      titleEn: 'Cash Withdrawal via Aadhaar',
      docs: [
        'आधार नंबर',
        'बैंक का नाम',
        'व्यक्तिगत उपस्थिति (बायोमेट्रिक फिंगरप्रिंट लगाने हेतु)'
      ],
      tip: 'बैंक जाने की जरूरत नहीं, किसी भी बैंक खाते से तुरंत पैसे निकालें व बैलेंस चेक करें।'
    }
  ];

  return (
    <section className="py-14 bg-blue-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-white border border-blue-200 px-3 py-1 rounded-full mb-2.5">
            नागरिक सहायता गाइड · Citizen Guidance
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            दुकान पर आने से पहले: कौन से दस्तावेज साथ लाएं?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            समय की बचत के लिए आवश्यक कागजात साथ लाएं या घर बैठे व्हाट्सएप पर भेजें:
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 mb-6">
          {checklists.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === idx
                  ? 'bg-blue-900 text-white shadow-sm ring-2 ring-blue-900/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item.titleHi}
            </button>
          ))}
        </div>

        {/* Active Checklist Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                {checklists[activeTab].titleEn}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                {checklists[activeTab].titleHi} हेतु जरूरी कागजात:
              </h3>
            </div>
            <FileCheck className="w-8 h-8 text-blue-800 shrink-0" />
          </div>

          <div className="space-y-3 mb-6">
            {checklists[activeTab].docs.map((doc, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-semibold">{doc}</span>
              </div>
            ))}
          </div>

          {/* Useful Tip Box */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">महत्वपूर्ण सुझाव: </strong>
              <span>{checklists[activeTab].tip}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">
              कोई दस्तावेज उपलब्ध न हो तो संपर्क करें: <strong>{BUSINESS_INFO.phone}</strong>
            </span>
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`नमस्ते, मुझे "${checklists[activeTab].titleHi}" के लिए कागजात चेक कराने हैं।`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>व्हाट्सएप पर कागजात भेजें</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
