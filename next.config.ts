// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {}, // Disable Turbopack
  },
  images: {
    domains: ["cdn.sanity.io", "picsum.photos", "d1muf25xaso8hp.cloudfront.net"],
  },
};

export default nextConfig;
