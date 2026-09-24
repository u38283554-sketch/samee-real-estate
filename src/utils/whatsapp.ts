import { InquiryFormData, PropertyListing } from '../types';
import { BUSINESS_INFO } from '../data/businessInfo';

export function createWhatsAppInquiryLink(data: InquiryFormData): string {
  const phone = '918248652873';
  
  const text = [
    `*Property Inquiry — Samee Reale Estates & House Brokers*`,
    `----------------------------------------`,
    `• *Looking For:* ${data.lookingFor}`,
    `• *Property Type:* ${data.propertyType}`,
    `• *Preferred Location:* ${data.preferredLocation || 'Madurai (Sambakulam & Surrounds)'}`,
    `• *Budget:* ${data.budget || 'Open / Discussion'}`,
    `• *Client Name:* ${data.name}`,
    `• *Contact Number:* ${data.phone}`,
    data.message ? `• *Requirements / Message:* ${data.message}` : '',
    `----------------------------------------`,
    `Hello Samee Reale Estates, please share suitable property opportunities and assist me with this inquiry.`,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function createWhatsAppDirectLink(customMessage?: string): string {
  const phone = '918248652873';
  const defaultText = customMessage || `Hello Samee Reale Estates & House Brokers, I would like to consult with you regarding property opportunities in Madurai.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
}

export function createWhatsAppPropertyInquiryLink(property: PropertyListing): string {
  const phone = '918248652873';
  const text = [
    `*Inquiry for ${property.title}*`,
    `• Category: ${property.propertyType}`,
    `• Location: ${property.location}`,
    `• Reference: ${property.id}`,
    ``,
    `Hello Samee Reale Estates & House Brokers, I saw this property listing showcase on your website and would like more details and consultation.`,
  ].join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
