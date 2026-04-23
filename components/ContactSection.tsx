import React from 'react';

interface ContactSectionProps {
  secondaryColor: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ secondaryColor }) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">Get in touch with our team</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <span className="text-2xl mr-2">📧</span>
            <span className="text-gray-700">hello@yourbusiness.com</span>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">📞</span>
            <span className="text-gray-700">(555) 123-4567</span>
          </div>
        </div>
        <button className="mt-8 px-8 py-4 text-white font-semibold rounded-lg" style={{ backgroundColor: secondaryColor }}>Contact Now</button>
      </div>
    </section>
  );
};

export default ContactSection;