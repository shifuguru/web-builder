import React from 'react';

interface HeroSectionProps {
  brandName: string;
  tagline: string;
  primaryColor: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ brandName, tagline, primaryColor }) => {
  return (
    <section className="py-20 px-4 text-center bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{brandName}</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">{tagline}</p>
      <button className="px-8 py-4 text-white font-semibold rounded-lg" style={{ backgroundColor: primaryColor }}>Get Started</button>
    </section>
  );
};

export default HeroSection;