// src/types/index.ts

export type ThemeType = 'royal' | 'modern' | 'romantic';
export type LanguageType = 'en' | 'or';

export interface SiteSettings {
  theme: ThemeType;
  defaultLanguage: LanguageType;
  isRsvpActive: boolean;
  seo: {
    title: string;
    description: string;
    ogImage: string; // The image that shows up on WhatsApp sharing
  };
}

export interface Person {
  firstName: string;
  lastName: string;
  bio: {
    en: string;
    or: string; // Odia translation
  };
  imageUrl: string;
  instagramUrl?: string;
}

export interface CoupleDetails {
  bride: Person;
  groom: Person;
}

export interface TimelineMilestone {
  id: string;
  date: string;
  title: {
    en: string;
    or: string;
  };
  description: {
    en: string;
    or: string;
  };
  imageUrl: string;
}

export interface WeddingCeremony {
  id: string;
  title: {
    en: string;
    or: string;
  };
  date: string; // e.g., "2026-11-15"
  time: string; // e.g., "10:00 AM"
  venueName: string;
  address: string;
  googleMapsLink: string;
  imageUrl?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: {
    en: string;
    or: string;
  };
  side: 'bride' | 'groom';
}

export interface GalleryPhoto {
  id: string;
  url: string;
  altText: string;
}

export interface ContactDetails {
  brideSidePhone: string;
  groomSidePhone: string;
  eventManagerPhone?: string;
}