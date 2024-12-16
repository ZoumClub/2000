/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.car-logos.org',
      },
      {
        protocol: 'https',
        hostname: 'igbpxesaulnzqaiqdjol.supabase.co',
      },
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;