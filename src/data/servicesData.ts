import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'aadhar-print',
    titleHi: 'आधार कार्ड प्रिंट व डाउनलोड',
    titleEn: 'Aadhar Card Print & Download',
    category: 'identity_pan',
    description: 'ओटीपी या बायोमेट्रिक द्वारा ओरिजिनल पीवीसी या एचडी लैमिनेटेड आधार कार्ड तुरंत डाउनलोड व प्रिंट।',
    iconName: 'Fingerprint',
    estimatedTime: '5-10 मिनट',
    popular: true,
    startingPrice: '₹50',
    requiredDocs: ['आधार नंबर या एनरोलमेंट स्लिप', 'रजिस्टर्ड मोबाइल नंबर (OTP हेतु)']
  },
  {
    id: 'pan-card',
    titleHi: 'पैन कार्ड सेवाएं (नया / सुधार)',
    titleEn: 'PAN Card Services (New / Correction)',
    category: 'identity_pan',
    description: 'नया डिजिटल पैन कार्ड आवेदन, नाम/जन्मतिथि सुधार, माइनर से मेजर व खोए पैन कार्ड की पुन: प्राप्ति।',
    iconName: 'CreditCard',
    estimatedTime: 'त्वरित ऑनलाइन आवेदन',
    popular: true,
    startingPrice: '₹250',
    requiredDocs: ['आधार कार्ड', '2 पासपोर्ट साइज फोटो', 'हस्ताक्षर']
  },
  {
    id: 'income-cert',
    titleHi: 'आय प्रमाण पत्र (Income Certificate)',
    titleEn: 'Income Certificate (e-District UP)',
    category: 'certificates',
    description: 'तहसील व ई-डिस्ट्रिक्ट पोर्टल के माध्यम से आधिकारिक आय प्रमाण पत्र का त्वरित ऑनलाइन आवेदन।',
    iconName: 'FileSpreadsheet',
    estimatedTime: '3-7 कार्य दिवस',
    popular: true,
    startingPrice: '₹100',
    requiredDocs: ['आधार कार्ड', 'स्वप्रमाणित घोषणा पत्र', 'राशन कार्ड / बिजली बिल', 'फोटो']
  },
  {
    id: 'caste-cert',
    titleHi: 'जाति प्रमाण पत्र (Caste Certificate)',
    titleEn: 'Caste Certificate (OBC/SC/ST)',
    category: 'certificates',
    description: 'ई-डिस्ट्रिक्ट उत्तर प्रदेश द्वारा सामान्य, पिछड़ी एवं अनुसूचित जाति हेतु वैध जाति प्रमाण पत्र आवेदन।',
    iconName: 'Award',
    estimatedTime: '3-7 कार्य दिवस',
    popular: true,
    startingPrice: '₹100',
    requiredDocs: ['आधार कार्ड', 'परिवार का पुराना जाति प्रमाण पत्र / खतौनी', 'स्वप्रमाणित घोषणा', 'फोटो']
  },
  {
    id: 'domicile-cert',
    titleHi: 'निवास प्रमाण पत्र (Domicile Certificate)',
    titleEn: 'Residence / Domicile Certificate',
    category: 'certificates',
    description: 'मूल निवास एवं स्थायी प्रमाण पत्र का ऑनलाइन पंजीकरण व डिजिटल सत्यापन सेवा।',
    iconName: 'Home',
    estimatedTime: '3-7 कार्य दिवस',
    popular: true,
    startingPrice: '₹100',
    requiredDocs: ['आधार कार्ड', 'वोटर कार्ड / बिजली बिल / राशन कार्ड', 'स्वप्रमाणित घोषणा', 'फोटो']
  },
  {
    id: 'pension-services',
    titleHi: 'पेंशन सेवाएं (वृद्धा / विधवा / दिव्यांग)',
    titleEn: 'Pension Services (SSP / WDP / DAP)',
    category: 'online_forms',
    description: 'वृद्धावस्था पेंशन, विधवा पेंशन एवं दिव्यांग पेंशन के नए आवेदन, ई-केवाईसी व स्टेटस चेक।',
    iconName: 'HeartHandshake',
    estimatedTime: 'तत्काल आवेदन',
    popular: true,
    startingPrice: '₹100',
    requiredDocs: ['आधार कार्ड', 'बैंक पासबुक', 'आय प्रमाण पत्र', 'आयु प्रमाण / मृत्यु प्रमाण (यदि लागू)']
  },
  {
    id: 'ayushman-card',
    titleHi: 'आयुष्मान भारत कार्ड (Golden Card)',
    titleEn: 'Ayushman Card (PM-JAY 5 Lakh)',
    category: 'certificates',
    description: '5 लाख रुपये तक के मुफ्त सरकारी इलाज हेतु आयुष्मान कार्ड ई-केवाईसी व पीवीसी कार्ड प्रिंटिंग।',
    iconName: 'ShieldCheck',
    estimatedTime: '10 मिनट',
    popular: true,
    startingPrice: '₹50',
    requiredDocs: ['राशन कार्ड / परिवार आईडी', 'आधार कार्ड', 'मोबाइल ओटीपी']
  },
  {
    id: 'electricity-bill',
    titleHi: 'बिजली बिल भुगतान (Bijli Bill)',
    titleEn: 'Electricity Bill Payment (DVVNL / UPPCL)',
    category: 'banking_recharge',
    description: 'उत्तर प्रदेश ग्रामीण एवं शहरी बिजली बिल चेक, तत्काल भुगतान एवं पक्की रसीद प्राप्त करें।',
    iconName: 'Zap',
    estimatedTime: 'तत्काल रसीद',
    startingPrice: 'सरकारी दर',
    requiredDocs: ['बिजली बिल खाता संख्या (Account No. / Consumer No.)']
  },
  {
    id: 'mobile-recharge',
    titleHi: 'मोबाइल व डीटीएच रिचार्ज',
    titleEn: 'Mobile & DTH Recharge',
    category: 'banking_recharge',
    description: 'Jio, Airtel, Vi, BSNL एवं सभी डीटीएच (Tata Play, Dish TV, Airtel Digital) का सभी ऑफर्स के साथ रिचार्ज।',
    iconName: 'Smartphone',
    estimatedTime: 'तत्काल',
    startingPrice: 'प्लान अनुसार',
    requiredDocs: ['मोबाइल नंबर / डीटीएच ग्राहक आईडी']
  },
  {
    id: 'online-form-filling',
    titleHi: 'ऑनलाइन फॉर्म भरना (Government & Private)',
    titleEn: 'Online Form Filling (All Jobs & Exams)',
    category: 'online_forms',
    description: 'UP Police, SSC, Railway, आर्मी, शिक्षक भर्ती, CET व सभी सरकारी नौकरियों के त्रुटिरहित ऑनलाइन फॉर्म।',
    iconName: 'FileEdit',
    estimatedTime: '15-20 मिनट',
    popular: true,
    startingPrice: '₹100 से शुरू',
    requiredDocs: ['शैक्षणिक अंकपत्र (Marksheets)', 'आधार कार्ड', 'फोटो व हस्ताक्षर', 'जाति/निवास यदि आवश्यक']
  },
  {
    id: 'scholarship-form',
    titleHi: 'छात्रवृत्ति आवेदन (UP Scholarship)',
    titleEn: 'Scholarship Form (Pre & Post Matric)',
    category: 'online_forms',
    description: 'कक्षा 9वीं से लेकर उच्च शिक्षा, आईटीआई, पॉलिटेक्निक, बीए, बीएससी के लिए छात्रवृत्ति फॉर्म व फाइनल प्रिंट।',
    iconName: 'GraduationCap',
    estimatedTime: '20-30 मिनट',
    popular: true,
    startingPrice: '₹100',
    requiredDocs: ['गत वर्ष की मार्कशीट', 'फीस रसीद व संस्था पंजीयन', 'आय, जाति, निवास', 'आधार व बैंक खाता']
  },
  {
    id: 'passport-photo',
    titleHi: 'पासपोर्ट साइज फोटो (तत्काल)',
    titleEn: 'Passport Size Photo (Instant HD)',
    category: 'printing_stationery',
    description: 'हाई क्वालिटी ग्लॉसी फोटो पेपर पर तुरंत 4, 8 या 16 पासपोर्ट साइज फोटो खिंचवाएं व बनवाएं।',
    iconName: 'Camera',
    estimatedTime: '5 मिनट',
    startingPrice: '₹40 से शुरू',
    requiredDocs: ['व्यक्तिगत उपस्थिति या मोबाइल से फोटो']
  },
  {
    id: 'photocopy',
    titleHi: 'फोटोकॉपी (Photocopy - B/W & Colour)',
    titleEn: 'Photocopy (Heavy-duty High Speed)',
    category: 'printing_stationery',
    description: 'दस्तावेजों, किताबों एवं मार्कशीट की स्पष्ट और डार्क फोटोकॉपी बेहद किफायती दर पर।',
    iconName: 'Copy',
    estimatedTime: 'तत्काल',
    startingPrice: '₹3/पेज',
    requiredDocs: ['मूल दस्तावेज']
  },
  {
    id: 'bw-printing',
    titleHi: 'ब्लैक एंड व्हाइट प्रिंट (B/W Printing)',
    titleEn: 'B/W Laser Printing',
    category: 'printing_stationery',
    description: 'हाई रेजोल्यूशन लेजर प्रिंटर से एडमिट कार्ड, चालान, सरकारी पत्र और प्रोजेक्ट नोट्स की छपाई।',
    iconName: 'Printer',
    estimatedTime: 'तत्काल',
    startingPrice: '₹3/पेज',
    requiredDocs: ['पेनड्राइव, व्हाट्सएप या ईमेल फाइल']
  },
  {
    id: 'colour-printing',
    titleHi: 'कलर प्रिंटिंग (Colour Printing)',
    titleEn: 'Colour High-Res Photo & Document Print',
    category: 'printing_stationery',
    description: 'शानदार वाइब्रेंट कलर प्रिंटिंग - प्रोजेक्ट रिपोर्ट्स, सरकारी प्रमाण पत्र व रंगीन दस्तावेजों हेतु।',
    iconName: 'Palette',
    estimatedTime: 'तत्काल',
    startingPrice: '₹20/पेज',
    requiredDocs: ['डिजिटल फाइल (PDF / JPG / Word)']
  },
  {
    id: 'pdf-printing',
    titleHi: 'पीडीएफ प्रिंट (WhatsApp / Mobile PDF)',
    titleEn: 'PDF Printing (Direct from Phone)',
    category: 'printing_stationery',
    description: 'अपने व्हाट्सएप या फोन से सीधे पीडीएफ फाइल भेजें और तुरंत सस्ती दर पर प्रिंट प्राप्त करें।',
    iconName: 'FileText',
    estimatedTime: 'तत्काल',
    startingPrice: '₹2/पेज',
    requiredDocs: ['मोबाइल से व्हाट्सएप पर दस्तावेज भेजना']
  },
  {
    id: 'lamination',
    titleHi: 'लेमिनेशन (Document Lamination)',
    titleEn: 'High-Micron Heavy Lamination',
    category: 'printing_stationery',
    description: 'मार्कशीट, आधार, वोटर कार्ड एवं जरूरी कागजातों को पानी और धूल से सुरक्षित रखने हेतु प्रीमियम लैमिनेशन।',
    iconName: 'Layers',
    estimatedTime: '3-5 मिनट',
    startingPrice: '₹20 से शुरू',
    requiredDocs: ['दस्तावेज']
  },
  {
    id: 'spiral-binding',
    titleHi: 'स्पाइरल बाइंडिंग (Spiral Binding)',
    titleEn: 'Spiral Binding & Project Work',
    category: 'printing_stationery',
    description: 'छात्रों के प्रोजेक्ट्स, स्टडी नोट्स, ऑफिस फाइल व किताबों की मजबूत व सुंदर स्पाइरल बाइंडिंग।',
    iconName: 'BookOpen',
    estimatedTime: '10 मिनट',
    startingPrice: '₹30 से शुरू',
    requiredDocs: ['प्रिंट किए हुए पेजेस']
  },
  {
    id: 'banking-services',
    titleHi: 'बैंकिंग सेवाएं (AEPS, निकासी व ट्रांसफर)',
    titleEn: 'Banking Services (AEPS & Money Transfer)',
    category: 'banking_recharge',
    description: 'आधार कार्ड द्वारा किसी भी बैंक से फिंगरप्रिंट लगाकर पैसे निकालना, बैलेंस चेक व मनी ट्रांसफर।',
    iconName: 'Landmark',
    estimatedTime: '2-5 मिनट',
    popular: true,
    startingPrice: 'उचित कमीशन दर',
    requiredDocs: ['आधार कार्ड', 'आधार से लिंक बैंक खाता', 'व्यक्तिगत उपस्थिति (फिंगरप्रिंट हेतु)']
  },
  {
    id: 'csc-digital-seva',
    titleHi: 'सीएससी / डिजिटल सेवा केंद्र सेवाएं',
    titleEn: 'CSC / Digital Seva Portal Services',
    category: 'online_forms',
    description: 'राशन कार्ड आवेदन, ई-श्रम कार्ड, किसान सम्मान निधि (PM-Kisan KYC), वोटर आईडी व अन्य जन सेवाएं।',
    iconName: 'Building2',
    estimatedTime: 'त्वरित समाधान',
    popular: true,
    startingPrice: 'उचित सरकारी दर',
    requiredDocs: ['आधार कार्ड', 'मोबाइल नंबर']
  }
];

export const CATEGORIES = [
  { id: 'all', labelHi: 'सभी सेवाएं', labelEn: 'All Services', icon: 'Grid' },
  { id: 'certificates', labelHi: 'प्रमाण पत्र सेवाएं', labelEn: 'Certificates', icon: 'Award' },
  { id: 'online_forms', labelHi: 'ऑनलाइन फॉर्म व योजनाएं', labelEn: 'Online Forms', icon: 'FileEdit' },
  { id: 'identity_pan', labelHi: 'आधार व पैन कार्ड', labelEn: 'Aadhaar & PAN', icon: 'CreditCard' },
  { id: 'printing_stationery', labelHi: 'प्रिंटिंग, फोटोकॉपी व बाइंडिंग', labelEn: 'Printing & Binding', icon: 'Printer' },
  { id: 'banking_recharge', labelHi: 'बैंकिंग व बिल भुगतान', labelEn: 'Banking & Bills', icon: 'Landmark' },
];
