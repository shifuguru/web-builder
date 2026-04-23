import React from 'react';
import { SiteConfig } from '../config/index';

interface SitePreviewProps {
  config: SiteConfig;
}

const SitePreview: React.FC<SitePreviewProps> = ({ config }) => {
  return (
    <div
      className="min-h-screen bg-white"
      style={
        {
          ['--primary' as any]: config.primaryColor,
          ['--secondary' as any]: config.secondaryColor,
        }
      }
    >
      <Header brandName={config.brandName} />

      {config.sections.hero && <HeroSection config={config} />}
      {config.sections.features && <FeaturesSection config={config} />}
      {config.sections.cta && <CTASection config={config} />}
      {config.sections.contact && <ContactSection config={config} />}
    </div>
  );
};

export default SitePreview;

/* =========================
   Sections
========================= */

const Header: React.FC<{ brandName: string }> = ({ brandName }) => (
  <header className="px-6 py-4 border-b border-[var(--primary)]">
    <div className="max-w-6xl mx-auto">
      <span className="text-xl font-bold text-[var(--primary)]">
        {brandName}
      </span>
    </div>
  </header>
);

const HeroSection: React.FC<{ config: SiteConfig }> = ({ config }) => (
  <section
    className="px-6 py-20 text-center text-white"
    style={{
      background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
    }}
  >
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {config.brandName}
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90">
        {config.tagline}
      </p>
      <button className="px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg">
        {config.ctaText}
      </button>
    </div>
  </section>
);

const FeaturesSection: React.FC<{ config: SiteConfig }> = ({ config }) => (
  <section className="px-6 py-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-10 text-[var(--secondary)]">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {config.features?.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border text-center border-[var(--primary)]"
          >
            <h3 className="font-semibold mb-2 text-[var(--primary)]">
              {feature}
            </h3>
            <p className="text-gray-600 text-sm">
              Placeholder description text.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection: React.FC<{ config: SiteConfig }> = ({ config }) => (
  <section className="px-6 py-16 text-center bg-[var(--primary)]">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">
        Ready to get started?
      </h2>
      <button className="px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg">
        {config.ctaText}
      </button>
    </div>
  </section>
);

const ContactSection: React.FC<{ config: SiteConfig }> = ({ config }) => (
  <section className="px-6 py-16 bg-gray-50">
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-[var(--secondary)]">
        Contact Us
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded-md border-[var(--primary)]"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded-md border-[var(--primary)]"
        />
        <button
          type="button"
          className="w-full py-2 text-white rounded-md font-semibold bg-[var(--primary)]"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);