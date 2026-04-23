import React from 'react';
import { SiteConfig } from '../config/index';

interface SitePreviewProps {
  config: SiteConfig;
}

const SitePreview: React.FC<SitePreviewProps> = ({ config }) => {
  const { brandName, tagline, ctaText, primaryColor, secondaryColor, sections } = config;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b" style={{ borderColor: primaryColor }}>
        <span className="text-xl font-bold" style={{ color: primaryColor }}>
          {brandName}
        </span>
      </header>

      {/* Hero */}
      {sections.hero && (
        <section
          className="px-6 py-20 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
        >
          <h1 className="text-4xl font-bold mb-4">{brandName}</h1>
          <p className="text-xl mb-8 opacity-90">{tagline}</p>
          <button className="px-6 py-3 bg-white font-semibold rounded-lg" style={{ color: primaryColor }}>
            {ctaText}
          </button>
        </section>
      )}

      {/* Features */}
      {sections.features && (
        <section className="px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: secondaryColor }}>
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Fast', 'Reliable', 'Modern'].map((feature) => (
              <div key={feature} className="p-6 rounded-lg border text-center" style={{ borderColor: primaryColor }}>
                <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>{feature}</h3>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {sections.cta && (
        <section className="px-6 py-16 text-center" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
          <button className="px-6 py-3 bg-white font-semibold rounded-lg" style={{ color: primaryColor }}>
            {ctaText}
          </button>
        </section>
      )}

      {/* Contact */}
      {sections.contact && (
        <section className="px-6 py-16 bg-gray-50">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: secondaryColor }}>
            Contact Us
          </h2>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md"
              style={{ borderColor: primaryColor }}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md"
              style={{ borderColor: primaryColor }}
            />
            <button
              type="button"
              className="w-full py-2 text-white rounded-md font-semibold"
              style={{ backgroundColor: primaryColor }}
            >
              Send Message
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default SitePreview;
