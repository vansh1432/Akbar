/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DigitalBanner } from './components/DigitalBanner';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { RateListSection } from './components/RateListSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DocumentChecklist } from './components/DocumentChecklist';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Hind','Plus_Jakarta_Sans',sans-serif] selection:bg-blue-900 selection:text-white pb-14 sm:pb-0">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero />

        {/* Digital Services Banner with core icons */}
        <DigitalBanner />

        {/* About Section (हमारे बारे में) */}
        <About />

        {/* Services Section (All 20 Services) */}
        <ServicesSection />

        {/* Rate List Section (आधिकारिक रेट लिस्ट + कैलकुलेटर) */}
        <RateListSection />

        {/* Why Choose Us Section (4 Cards) */}
        <WhyChooseUs />

        {/* Document Checklist Guide (नागरिक सहायता) */}
        <DocumentChecklist />

        {/* Contact Section & Form (संपर्क एवं ऑनलाइन फॉर्म) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
