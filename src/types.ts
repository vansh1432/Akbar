export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  category: 'certificates' | 'online_forms' | 'identity_pan' | 'printing_stationery' | 'banking_recharge';
  description: string;
  iconName: string;
  estimatedTime: string;
  popular?: boolean;
  requiredDocs?: string[];
  startingPrice?: string;
}

export interface RateItem {
  nameHi: string;
  nameEn: string;
  price: string;
  note?: string;
}

export interface RateCategory {
  categoryHi: string;
  categoryEn: string;
  items: RateItem[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
