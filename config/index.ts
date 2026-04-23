export interface SiteConfig {
  brandName: string;
  tagline: string;
  ctaText: string;
  primaryColor: string;
  secondaryColor: string;
  features: string[];
  sections: {
    hero: boolean;
    features: boolean;
    cta: boolean;
    contact: boolean;
  };
}

export const defaultConfig: SiteConfig = {
  brandName: 'Your Brand',
  tagline: 'Building the future, one pixel at a time',
  ctaText: 'Get Started',
  primaryColor: '#3B82F6',
  secondaryColor: '#1E40AF',
  features: ['Fast', 'Reliable', 'Modern'],
  sections: {
    hero: true,
    features: true,
    cta: true,
    contact: true,
  },
};