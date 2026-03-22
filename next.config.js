/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {}, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '9c1d08050eb7db8d4704e1dad847a643.cdn.bubble.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd1muf25xaso8hp.cloudfront.net',
        port: '',
        pathname: '/**', 
      },
    ],
    deviceSizes: [640, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

module.exports = nextConfig;
