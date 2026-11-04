import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, User, Send, CheckCircle2, Clock, ExternalLink, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/ratesData';
import { SERVICES_LIST } from '../data/servicesData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    service: 'आय प्रमाण पत्र (Income Certificate)',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }
    setSubmittedData({ ...formData });
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: 'आय प्रमाण पत्र (Income Certificate)',
      message: '',
    });
  };

  const sendSubmittedViaWhatsApp = () => {
    if (!submittedData) return;
    const text = encodeURIComponent(
      `नमस्ते मनु जन सेवा केंद्र,\n\nमेरा नाम: ${submittedData.name}\nमोबाइल: ${submittedData.phone}\nआवश्यक सेवा: ${submittedData.service}\nसंदेश: ${submittedData.message || 'कृपया मार्गदर्शन करें।'}`
    );
    window.open(`${BUSINESS_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100/80 px-3 py-1 rounded-full mb-3">
            संपर्क एवं पता · Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            संपर्क करें (Contact Us)
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-slate-600">
            किसी भी सेवा, फॉर्म या सहायता के लिए सीधे केंद्र पर आएं, फोन करें अथवा ऑनलाइन फॉर्म भरकर संपर्क करें।
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Map (Left), Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Details, Map & Direct Triggers (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Business Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-800">
                    DIGITAL SEVA KENDRA
                  </span>
                  <h3 className="text-2xl font-black text-blue-950 font-['Plus_Jakarta_Sans',sans-serif]">
                    {BUSINESS_INFO.nameEn}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    मनु जन सेवा केंद्र एवं सीएससी सेंटर
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 to-blue-900 shadow-md shrink-0">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="MANU JAN SEVA KENDRA Official Logo"
                    className="w-full h-full object-cover rounded-full bg-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Key Details List */}
              <div className="space-y-4 text-sm text-slate-700">
                {/* Proprietor */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block uppercase">संचालक / Proprietor</span>
                    <strong className="text-slate-900 text-base">{BUSINESS_INFO.proprietor}</strong>
                    <span className="text-xs text-slate-600 ml-1.5">({BUSINESS_INFO.proprietorHi})</span>
                  </div>
                </div>

                {/* Mobile / Call */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block uppercase">मोबाइल नंबर / Mobile</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-base font-extrabold text-blue-900 hover:text-blue-700 hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-600 block">कॉल एवं व्हाट्सएप सेवा सक्रिय</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block uppercase">पता / Location</span>
                    <p className="text-slate-900 font-bold">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-slate-600">
                      {BUSINESS_INFO.locationHi}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 border border-indigo-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-bold block uppercase">दुकान खुलने का समय</span>
                    <p className="text-slate-900 font-semibold text-xs sm:text-sm">
                      {BUSINESS_INFO.timings}
                    </p>
                    <span className="text-xs text-emerald-700 font-bold">सोमवार से रविवार (सातों दिन सेवा उपलब्ध)</span>
                  </div>
                </div>
              </div>

              {/* 3 Action Buttons */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('नमस्ते मनु जन सेवा केंद्र, मुझे ऑनलाइन सेवा की जानकारी चाहिए।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

            {/* Google Maps Visual Box with Real Link */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-bold text-slate-900">गूगल मैप लोकेशन (Google Maps)</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-800 hover:underline flex items-center gap-1"
                >
                  <span>बड़ा नक्शा देखें</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-200 border border-slate-200 group">
                <iframe
                  title="Manu Jan Sewa Kendra Google Map Location"
                  src={BUSINESS_INFO.embedMapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating overlay chip */}
                <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-md border border-slate-200 text-[11px] text-slate-800">
                  <strong>मनु जन सेवा केंद्र & CSC Centre</strong> · धिमीश्री
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative">
              
              <div className="mb-6">
                <span className="text-xs uppercase font-extrabold tracking-wider text-blue-900 block">
                  ONLINE INQUIRY FORM
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  ऑनलाइन पूछताछ / सेवा अनुरोध
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  अपनी आवश्यकता नीचे भरें, हम जल्द से जल्द आपसे संपर्क करेंगे।
                </p>
              </div>

              {/* Success Confirmation Card */}
              {submitted && submittedData ? (
                <div className="py-8 px-4 text-center space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in duration-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-extrabold text-emerald-900">
                      धन्यवाद, {submittedData.name}!
                    </h4>
                    <p className="text-sm text-emerald-800 font-medium">
                      आपका अनुरोध सफलतापूर्वक दर्ज कर लिया गया है।
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-emerald-200 text-left text-xs space-y-2 text-slate-700 max-w-sm mx-auto shadow-xs">
                    <div><strong>नाम:</strong> {submittedData.name}</div>
                    <div><strong>मोबाइल:</strong> {submittedData.phone}</div>
                    <div><strong>चुनी गई सेवा:</strong> {submittedData.service}</div>
                    {submittedData.message && <div><strong>संदेश:</strong> {submittedData.message}</div>}
                  </div>

                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    संचालक अंगद कुशवाह (8534070445) द्वारा आपकी सहायता की जाएगी। त्वरित उत्तर के लिए आप इसे सीधे व्हाट्सएप पर भी भेज सकते हैं:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={sendSubmittedViaWhatsApp}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>व्हाट्सएप पर भेजें</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300"
                    >
                      नया संदेश भेजें
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      आपका पूरा नाम (Name) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="उदाहरण: राहुल कुशवाह"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      मोबाइल नंबर (Mobile Number) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10 अंकों का मोबाइल नंबर (जैसे: 98XXXXXXXX)"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Select Service */}
                  <div>
                    <label htmlFor="form-service" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      सेवा चुनें (Select Service) <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={`${srv.titleHi} (${srv.titleEn})`}>
                          {srv.titleHi}
                        </option>
                      ))}
                      <option value="अन्य सामान्य ऑनलाइन पूछताछ">अन्य सामान्य ऑनलाइन पूछताछ</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      संदेश या अतिरिक्त विवरण (Message)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="आपको किस प्रकार की सहायता या दस्तावेज की जानकारी चाहिए..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 placeholder:text-slate-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>फॉर्म जमा करें (Submit Inquiry)</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-600 text-center pt-1">
                    * जमा करने के उपरांत पुष्टि संदेश तुरंत दिखाई देगा।
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
