import React, { useState } from 'react';
import { IndianRupee, FileText, Printer, Calculator, MessageCircle, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { RATE_LIST_DATA, RATE_NOTE, BUSINESS_INFO } from '../data/ratesData';

export const RateListSection: React.FC = () => {
  // Interactive Calculator State for Printing & Common Services
  const [photocopyPages, setPhotocopyPages] = useState<number>(0);
  const [bwPrintPages, setBwPrintPages] = useState<number>(0);
  const [colourPrintPages, setColourPrintPages] = useState<number>(0);
  const [pdfPrintPages, setPdfPrintPages] = useState<number>(0);
  const [laminationCount, setLaminationCount] = useState<number>(0);
  const [spiralBindingCount, setSpiralBindingCount] = useState<number>(0);
  const [includeCertificate, setIncludeCertificate] = useState<boolean>(false);
  const [includePan, setIncludePan] = useState<boolean>(false);

  // Calculate estimated total
  const calculatedTotal = 
    (photocopyPages * 3) +
    (bwPrintPages * 3) +
    (colourPrintPages * 20) +
    (pdfPrintPages * 2) +
    (laminationCount * 20) +
    (spiralBindingCount * 30) +
    (includeCertificate ? 100 : 0) +
    (includePan ? 250 : 0);

  const hasSelections = calculatedTotal > 0;

  const resetCalculator = () => {
    setPhotocopyPages(0);
    setBwPrintPages(0);
    setColourPrintPages(0);
    setPdfPrintPages(0);
    setLaminationCount(0);
    setSpiralBindingCount(0);
    setIncludeCertificate(false);
    setIncludePan(false);
  };

  const generateWhatsAppQuote = () => {
    const lines = ['नमस्ते मनु जन सेवा केंद्र, मुझे निम्नलिखित कार्य करवाना है:'];
    if (photocopyPages > 0) lines.push(`- फोटोकॉपी: ${photocopyPages} पेज (₹${photocopyPages * 3})`);
    if (bwPrintPages > 0) lines.push(`- B/W प्रिंट: ${bwPrintPages} पेज (₹${bwPrintPages * 3})`);
    if (pdfPrintPages > 0) lines.push(`- PDF प्रिंट: ${pdfPrintPages} पेज (₹${pdfPrintPages * 2})`);
    if (colourPrintPages > 0) lines.push(`- कलर प्रिंट: ${colourPrintPages} पेज (₹${colourPrintPages * 20})`);
    if (laminationCount > 0) lines.push(`- लेमिनेशन: ${laminationCount} नग (₹${laminationCount * 20})`);
    if (spiralBindingCount > 0) lines.push(`- स्पाइरल बाइंडिंग: ${spiralBindingCount} (₹${spiralBindingCount * 30})`);
    if (includeCertificate) lines.push(`- प्रमाण पत्र (आय/जाति/निवास): 1 (₹100)`);
    if (includePan) lines.push(`- पैन कार्ड आवेदन: 1 (₹250)`);
    lines.push(`\nकुल अनुमानित राशि: ₹${calculatedTotal}`);
    lines.push(`कृपया समय और उपलब्धता बताएं।`);
    return encodeURIComponent(lines.join('\n'));
  };

  return (
    <section id="rate-list" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full mb-3">
            पारदर्शी दर सूची · Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            आधिकारिक रेट लिस्ट (Rate List)
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            मनु जन सेवा केंद्र में सभी सेवाओं की दरें पूर्णतः पारदर्शी और उचित हैं। कोई छुपा हुआ शुल्क नहीं।
          </p>
        </div>

        {/* Pricing Tables Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Official Rate Tables (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {RATE_LIST_DATA.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-950 px-5 py-3.5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <h3 className="font-bold text-base sm:text-lg tracking-wide text-white">
                      {cat.categoryHi}
                    </h3>
                  </div>
                  <span className="text-xs text-blue-200 font-medium hidden sm:inline">
                    {cat.categoryEn}
                  </span>
                </div>

                {/* Table rows */}
                <div className="divide-y divide-slate-100">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-blue-50/40 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {item.nameHi}
                        </div>
                        <div className="text-xs text-slate-600 flex items-center gap-2">
                          <span>{item.nameEn}</span>
                          {item.note && (
                            <>
                              <span className="text-slate-300">·</span>
                              <span className="text-slate-600">{item.note}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-extrabold text-sm sm:text-base border border-emerald-200">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Required Note Callout */}
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-xs uppercase tracking-wide text-amber-800 block">
                  महत्वपूर्ण सूचना (Note):
                </span>
                <p className="text-sm font-semibold mt-0.5">
                  "{RATE_NOTE}"
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  दस्तावेजों के ऑनलाइन सत्यापन, चालान या विशेष सरकारी पोर्टल शुल्क लागू होने की स्थिति में वास्तविक शुल्क भिन्न हो सकता है।
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bill Estimator (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl border-2 border-blue-900/20 shadow-lg p-5 sm:p-6 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">त्वरित बिल कैलकुलेटर</h3>
                    <p className="text-[11px] text-slate-500">Quick Rate Estimator</p>
                  </div>
                </div>

                {hasSelections && (
                  <button
                    type="button"
                    onClick={resetCalculator}
                    className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold"
                    title="रीसेट करें"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>रीसेट</span>
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-600">
                अपनी आवश्यकता अनुसार मात्रा चुनें और अनुमानित शुल्क देखकर व्हाट्सएप पर तुरंत ऑर्डर भेजें:
              </p>

              {/* Calculator Inputs */}
              <div className="space-y-3.5 text-xs">
                
                {/* PDF Print (WhatsApp) - ₹2/page */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">PDF Print (व्हाट्सएप से)</span>
                    <span className="text-[11px] text-slate-500">₹2 प्रति पेज</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPdfPrintPages(Math.max(0, pdfPrintPages - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{pdfPrintPages}</span>
                    <button
                      type="button"
                      onClick={() => setPdfPrintPages(pdfPrintPages + 1)}
                      className="w-7 h-7 rounded bg-blue-900 text-white font-bold hover:bg-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Photocopy - ₹3/page */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">फोटोकॉपी (Photocopy)</span>
                    <span className="text-[11px] text-slate-500">₹3 प्रति पेज</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setPhotocopyPages(Math.max(0, photocopyPages - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{photocopyPages}</span>
                    <button
                      type="button"
                      onClick={() => setPhotocopyPages(photocopyPages + 1)}
                      className="w-7 h-7 rounded bg-blue-900 text-white font-bold hover:bg-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* B/W Print - ₹3/page */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">B/W लेजर प्रिंट</span>
                    <span className="text-[11px] text-slate-500">₹3 प्रति पेज</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setBwPrintPages(Math.max(0, bwPrintPages - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{bwPrintPages}</span>
                    <button
                      type="button"
                      onClick={() => setBwPrintPages(bwPrintPages + 1)}
                      className="w-7 h-7 rounded bg-blue-900 text-white font-bold hover:bg-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Colour Print - ₹20/page */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">कलर प्रिंट (Colour)</span>
                    <span className="text-[11px] text-slate-500">₹20 प्रति पेज</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setColourPrintPages(Math.max(0, colourPrintPages - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{colourPrintPages}</span>
                    <button
                      type="button"
                      onClick={() => setColourPrintPages(colourPrintPages + 1)}
                      className="w-7 h-7 rounded bg-blue-900 text-white font-bold hover:bg-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Lamination - ₹20 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-bold text-slate-800 block">लेमिनेशन (Lamination)</span>
                    <span className="text-[11px] text-slate-500">₹20 प्रति नग</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setLaminationCount(Math.max(0, laminationCount - 1))}
                      className="w-7 h-7 rounded bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{laminationCount}</span>
                    <button
                      type="button"
                      onClick={() => setLaminationCount(laminationCount + 1)}
                      className="w-7 h-7 rounded bg-blue-900 text-white font-bold hover:bg-blue-800"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Quick Checkboxes for Common Services */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeCertificate}
                      onChange={(e) => setIncludeCertificate(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900 focus:ring-blue-600"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      प्रमाण पत्र (आय / जाति / निवास) — ₹100
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includePan}
                      onChange={(e) => setIncludePan(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-900 focus:ring-blue-600"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      नया पैन कार्ड (PAN Card) — ₹250
                    </span>
                  </label>
                </div>
              </div>

              {/* Total Display */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-slate-900 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    अनुमानित कुल राशि
                  </span>
                  <span className="text-2xl font-black text-blue-950 font-['Plus_Jakarta_Sans',sans-serif]">
                    ₹{calculatedTotal}
                  </span>
                </div>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${generateWhatsAppQuote()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                    hasSelections
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20 active:scale-98'
                      : 'bg-slate-200 text-slate-500 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>व्हाट्सएप पर ऑर्डर / पूछताछ भेजें</span>
                </a>

                <p className="text-[10px] text-slate-600 text-center mt-2">
                  * फाइल व्हाट्सएप (8534070445) पर भेजकर दुकान पहुंचने से पहले प्रिंट करा सकते हैं।
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
