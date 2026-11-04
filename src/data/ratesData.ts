import { RateCategory } from '../types';

export const RATE_LIST_DATA: RateCategory[] = [
  {
    categoryHi: 'प्रमाण पत्र सेवाएं',
    categoryEn: 'Certificate Services',
    items: [
      { nameHi: 'आय प्रमाण पत्र', nameEn: 'Income Certificate', price: '₹100', note: 'ई-डिस्ट्रिक्ट पोर्टल शुल्क सहित' },
      { nameHi: 'जाति प्रमाण पत्र', nameEn: 'Caste Certificate', price: '₹100', note: 'OBC / SC / ST' },
      { nameHi: 'निवास प्रमाण पत्र', nameEn: 'Domicile / Residence Certificate', price: '₹100', note: 'मूल निवास' },
    ]
  },
  {
    categoryHi: 'ऑनलाइन सेवाएं',
    categoryEn: 'Online Applications',
    items: [
      { nameHi: 'सामान्य ऑनलाइन फॉर्म', nameEn: 'General Online Job / Exam Form', price: '₹100 से शुरू', note: 'फॉर्म की जटिलता अनुसार' },
      { nameHi: 'Scholarship Form', nameEn: 'UP छात्रवृत्ति ऑनलाइन आवेदन', price: '₹100', note: 'प्री एवं पोस्ट मैट्रिक' },
      { nameHi: 'Pension Application', nameEn: 'पेंशन आवेदन (वृद्धा / विधवा / दिव्यांग)', price: '₹100', note: 'ऑनलाइन रजिस्ट्रेशन' },
      { nameHi: 'Ration Card Application', nameEn: 'राशन कार्ड नया आवेदन / संशोधन', price: '₹100', note: 'पात्रता सूची जांच सहित' },
    ]
  },
  {
    categoryHi: 'PAN Services',
    categoryEn: 'PAN Card Services',
    items: [
      { nameHi: 'PAN Apply (नया पैन कार्ड)', nameEn: 'New PAN Card Application', price: '₹250', note: 'डिजिटल ई-पैन व फिजिकल कार्ड' },
      { nameHi: 'PAN Correction (पैन सुधार)', nameEn: 'PAN Card Correction / Update', price: '₹250', note: 'नाम / जन्मतिथि / पता सुधार' },
    ]
  },
  {
    categoryHi: 'Aadhaar Services',
    categoryEn: 'Aadhaar Card Download & Print',
    items: [
      { nameHi: 'Aadhaar Download', nameEn: 'आधार डाउनलोड व लेमिनेटेड प्रिंट', price: '₹50', note: 'ओटीपी / बायोमेट्रिक द्वारा' },
    ]
  },
  {
    categoryHi: 'Printing & Documents',
    categoryEn: 'Printing, Binding & Lamination',
    items: [
      { nameHi: 'Photocopy (फोटोकॉपी)', nameEn: 'Photocopy (Single/Double)', price: '₹3/Page', note: 'स्पष्ट एवं डार्क कॉपी' },
      { nameHi: 'B/W Print (ब्लैक एंड व्हाइट प्रिंट)', nameEn: 'Black & White Laser Print', price: '₹3/Page', note: 'हाई स्पीड लेजर' },
      { nameHi: 'Colour Print (कलर प्रिंट)', nameEn: 'Colour Print (High Quality)', price: '₹20/Page', note: 'फोटो क्वालिटी प्रिंट' },
      { nameHi: 'Spiral Binding (स्पाइरल बाइंडिंग)', nameEn: 'Spiral Binding Work', price: '₹30 से शुरू', note: 'कवर व ट्रांसपेरेंट शीट सहित' },
      { nameHi: 'Lamination (लेमिनेशन)', nameEn: 'Heavy Document Lamination', price: '₹20 से शुरू', note: 'मजबूत सुरक्षा' },
      { nameHi: 'PDF Print (मोबाइल/व्हाट्सएप)', nameEn: 'PDF Print (Mobile/WhatsApp)', price: '₹2/Page', note: 'सीधे व्हाट्सएप से भेजकर' },
    ]
  }
];

export const RATE_NOTE = "सेवा शुल्क कार्य एवं सरकारी शुल्क के अनुसार अलग हो सकता है।";

export const BUSINESS_INFO = {
  nameHi: 'मनु जन सेवा केंद्र',
  nameEn: 'MANU JAN SEVA KENDRA',
  subHeading: 'आपकी सभी डिजिटल एवं ऑनलाइन सेवाओं का विश्वसनीय केंद्र',
  tagline: 'सरकारी एवं गैर-सरकारी ऑनलाइन सेवाएं एक ही स्थान पर',
  proprietor: 'Angad Kushwah',
  proprietorHi: 'अंगद कुशवाह',
  phone: '8534070445',
  phoneDisplay: '+91 85340 70445',
  whatsappUrl: 'https://wa.me/918534070445',
  location: 'Dhimishri, Shamsabad, Agra, Uttar Pradesh',
  locationHi: 'धीमीश्री, शमसाबाद, आगरा, उत्तर प्रदेश',
  logoUrl: '/logo.jpg',
  logoAssetUrl: '/src/assets/images/manu_logo_1790931772985.jpg',
  mapUrl: 'https://www.google.com/maps/place/Manu+Jan+sewa+Kendra+%26CSC+centre/@27.0232922,78.1962947,72m/data=!3m1!1e3!4m6!3m5!1s0x3974136a1fef917d:0xbb42776efde12f8c!8m2!3d27.0233931!4d78.196499!16s%2Fg%2F11tdfnz5w6?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D',
  embedMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14202.946764491763!2d78.194200!3d27.023393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974136a1fef917d%3A0xbb42776efde12f8c!2sManu%20Jan%20sewa%20Kendra%20%26CSC%20centre!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin',
  timings: 'सोमवार - रविवार : सुबह 07:30 बजे से सायं 08:30 बजे तक',
  timingsEn: 'Mon - Sun : 7:30 AM to 8:30 PM (All 7 Days Open)',
};
