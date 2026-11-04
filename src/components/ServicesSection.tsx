import React, { useState, useMemo } from 'react';
import { 
  Fingerprint, CreditCard, FileSpreadsheet, Award, Home, 
  HeartHandshake, ShieldCheck, Zap, Smartphone, FileEdit, 
  GraduationCap, Camera, Copy, Printer, Palette, FileText, 
  Layers, BookOpen, Landmark, Building2, Search, MessageCircle, 
  Info, Check, Clock
} from 'lucide-react';
import { SERVICES_LIST, CATEGORIES } from '../data/servicesData';
import { BUSINESS_INFO } from '../data/ratesData';
import { ServiceItem } from '../types';

// Map icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  Fingerprint,
  CreditCard,
  FileSpreadsheet,
  Award,
  Home,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Smartphone,
  FileEdit,
  GraduationCap,
  Camera,
  Copy,
  Printer,
  Palette,
  FileText,
  Layers,
  BookOpen,
  Landmark,
  Building2,
};

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalDoc, setActiveModalDoc] = useState<ServiceItem | null>(null);

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery = !query || 
        service.titleHi.toLowerCase().includes(query) ||
        service.titleEn.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full mb-3">
            नागरिक एवं डिजिटल सेवाएं · All 20 Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            हमारी प्रमुख सेवाएं (Services)
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            सरकारी योजनाओं, प्रमाण पत्रों, ऑनलाइन फॉर्म, बैंकिंग व प्रिंटिंग से जुड़ी सभी 20 सेवाएं एक ही स्थान पर उपलब्ध हैं।
          </p>
        </div>

        {/* Search Bar & Interactive Category Filter */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="सेवा का नाम खोजें (जैसे: आधार, पैन, आय प्रमाण पत्र, प्रिंट, स्कॉलरशिप, बिल)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base text-slate-800 placeholder:text-slate-600 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-600 hover:text-slate-800 bg-slate-200 px-2 py-1 rounded"
              >
                हटाएं
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented functional controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-sm ring-2 ring-blue-900/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{cat.labelHi}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-600 px-1">
            <span>दिखाई जा रही सेवाएं: <strong>{filteredServices.length}</strong> / {SERVICES_LIST.length}</span>
            <span>धीमीश्री (शमसाबाद) · 8534070445</span>
          </div>
        </div>

        {/* Services Grid (20 Cards) */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-base font-medium">कोई सेवा नहीं मिली। कृपया कोई अन्य शब्द खोजें।</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs font-bold text-blue-700 hover:underline"
            >
              सभी 20 सेवाएं देखें
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || FileText;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="p-5">
                    
                    {/* Top Row: Icon, Service index & price hint */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-900 flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="text-right">
                        {service.startingPrice && (
                          <div className="text-xs font-extrabold text-blue-950 bg-amber-100/70 border border-amber-300/60 px-2 py-0.5 rounded">
                            {service.startingPrice}
                          </div>
                        )}
                        <span className="text-[10px] text-slate-600">#{index + 1}</span>
                      </div>
                    </div>

                    {/* Hindi Title & English Subtitle */}
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {service.titleHi}
                    </h3>
                    <div className="text-xs text-slate-600 font-medium mb-2.5">
                      {service.titleEn}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Estimated processing time indicator */}
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>प्रक्रिया समय: <strong>{service.estimatedTime}</strong></span>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                    {/* Required Docs Trigger */}
                    {service.requiredDocs && service.requiredDocs.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => setActiveModalDoc(service)}
                        className="text-xs font-semibold text-slate-700 hover:text-blue-900 flex items-center gap-1 p-1 hover:underline"
                        title="जरूरी दस्तावेज देखें"
                      >
                        <Info className="w-3.5 h-3.5 text-blue-600" />
                        <span>कागजात</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-600">पक्की रसीद</span>
                    )}

                    {/* WhatsApp Action Button with prefilled text */}
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`नमस्ते, मुझे "${service.titleHi}" के बारे में जानकारी चाहिए और इसे करवाना है।`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                      <span>पूछताछ करें</span>
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Modal for Required Documents */}
        {activeModalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">
                    आवश्यक दस्तावेज सूची (Documents Required)
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    {activeModalDoc.titleHi}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalDoc(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-2.5">
                <p className="text-xs text-slate-600 mb-2">
                  इस सेवा के लिए कृपया निम्नलिखित दस्तावेज साथ लाएं या व्हाट्सएप पर भेजें:
                </p>
                {activeModalDoc.requiredDocs?.map((doc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-800 bg-blue-50/60 p-2 rounded-lg border border-blue-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-semibold text-blue-900 hover:underline"
                >
                  फोन पर समझें: 8534070445
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`नमस्ते, मुझे "${activeModalDoc.titleHi}" के लिए दस्तावेज भेजने हैं।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>कागजात व्हाट्सएप भेजें</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
