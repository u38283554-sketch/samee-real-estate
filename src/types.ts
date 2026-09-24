export type LookingForType = 
  | 'Buy a Property'
  | 'Rent a Property'
  | 'Sell a Property'
  | 'Real Estate Consultation';

export type PropertyCategory = 
  | 'Residential'
  | 'Commercial'
  | 'Land / Plot'
  | 'House / Villa'
  | 'Apartment';

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  areaName: string;
  propertyType: PropertyCategory;
  priceDisplay: string;
  description: string;
  keyDetails: string[];
  imageUrl: string;
  isSamplePlaceholder: boolean;
  status: 'Consultation Showcase' | 'Under Discussion' | 'Available for Inquiry';
  highlights?: {
    bedrooms?: string;
    bathrooms?: string;
    superArea?: string;
    facing?: string;
  };
}

export interface InquiryFormData {
  lookingFor: LookingForType;
  propertyType: PropertyCategory;
  preferredLocation: string;
  budget: string;
  name: string;
  phone: string;
  message: string;
}

export interface StoredInquiry extends InquiryFormData {
  id: string;
  createdAt: string;
  dispatchedViaWhatsApp?: boolean;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  interestedIn: string;
  message: string;
}
