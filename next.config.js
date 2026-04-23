const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/web-builder' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;