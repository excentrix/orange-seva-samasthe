/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the lines below if you want to disable Turbopack
  experimental: {
    turbo: {}, // Disable Turbopack
  },
  images: {
    remotePatterns: [
      {
        // Specify the domains and any additional settings if necessary
        protocol: 'https', // Assuming your images are served over HTTPS
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
        hostname: 'd1muf25xaso8hp.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
