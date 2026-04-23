import React from 'react';

interface CTASectionProps {
  primaryColor: string;
}

const CTASection: React.FC<CTASectionProps> = ({ primaryColor }) => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
      <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers</p>
      <button className="px-8 py-4 text-white font-semibold rounded-lg" style={{ backgroundColor: primaryColor }}>Learn More</button>
    </section>
  );
};

export default CTASection;