/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web-builder',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig