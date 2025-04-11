/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: '/ZellitMarketplace',
  assetPrefix: '/ZellitMarketplace/',
  trailingSlash: true
}

module.exports = nextConfig 