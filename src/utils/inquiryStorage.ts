import { InquiryFormData, StoredInquiry } from '../types';

const STORAGE_KEY = 'samee_reale_client_inquiries';

export function saveInquiry(data: InquiryFormData): StoredInquiry {
  const newInquiry: StoredInquiry = {
    ...data,
    id: `INQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const existing = getStoredInquiries();
    const updated = [newInquiry, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not save inquiry to local storage', err);
  }

  return newInquiry;
}

export function getStoredInquiries(): StoredInquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}
