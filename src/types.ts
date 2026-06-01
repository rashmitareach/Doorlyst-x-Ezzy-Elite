/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SectionId = 
  | "hero" 
  | "about-doorlyst" 
  | "about-ezzy" 
  | "ezzy-branding"
  | "ezzy-branding-2"
  | "ezzy-branding-content-strategy"
  | "ezzy-branding-social-media"
  | "ezzy-branding-luxury-lifestyle"
  | "ezzy-reels-cinematic"
  | "ads-and-marketing"
  | "ads-marketing-brand-engine"
  | "buyer-personas"
  | "buyer-conversion-map"
  | "doorlyst-legacy-connection";

export interface Persona {
  id: string;
  name: string;
  tag: string;
  description: string;
  defaultCustomText: string;
}

export interface MatchResult {
  buyerPersona: string;
  psychographics: string;
  drivers: string[];
  adCopy: {
    headline: string;
    instagramGridText: string;
    linkedinText: string;
    whatsappHook: string;
  };
  unitDesign: string;
  funnelStrategy: string;
  isDemo?: boolean;
}

export interface EpicProject {
  name: string;
  location: string;
  year: string;
  quote: string;
  description: string;
  bgUrl: string;
}
