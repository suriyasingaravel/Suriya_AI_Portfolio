/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    // Don't block build on eslint errors
    ignoreDuringBuilds: true,
  },
  output: 'export',
};

module.exports = nextConfig;
