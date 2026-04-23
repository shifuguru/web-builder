'use client';

import React from 'react';
import { SiteConfig } from '../config/index';

interface ConfigPanelProps {
  config: SiteConfig;
  onChange: (config: SiteConfig) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ config, onChange }) => {
  const updateField = <K extends keyof SiteConfig>(key: K, value: SiteConfig[K]) => {
    onChange({ ...config, [key]: value });
  };

  const toggleSection = (section: keyof SiteConfig['sections']) => {
    onChange({
      ...config,
      sections: { ...config.sections, [section]: !config.sections[section] },
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Configuration</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
          <input
            type="text"
            value={config.brandName}
            onChange={(e) => updateField('brandName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
          <input
            type="text"
            value={config.tagline}
            onChange={(e) => updateField('tagline', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text</label>
          <input
            type="text"
            value={config.ctaText}
            onChange={(e) => updateField('ctaText', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
            <input
              type="color"
              value={config.primaryColor}
              onChange={(e) => updateField('primaryColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Color</label>
            <input
              type="color"
              value={config.secondaryColor}
              onChange={(e) => updateField('secondaryColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sections</label>
          <div className="space-y-2">
            {(['hero', 'features', 'cta', 'contact'] as const).map((section) => (
              <label key={section} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.sections[section]}
                  onChange={() => toggleSection(section)}
                  className="mr-2 w-4 h-4"
                />
                <span className="capitalize">{section}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
