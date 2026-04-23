'use client';

import { useState } from 'react';
import ConfigPanel from '../components/ConfigPanel';
import SitePreview from '../components/SitePreview';
import { defaultConfig, SiteConfig } from '../config/index';

export default function Home() {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="order-2 lg:order-1 w-full lg:w-1/3 lg:max-h-screen lg:overflow-y-auto">
        <ConfigPanel config={config} onChange={setConfig} />
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-2/3 lg:max-h-screen lg:overflow-y-auto">
        <SitePreview config={config} />
      </div>
    </div>
  );
}
