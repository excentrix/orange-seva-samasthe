/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the lines below if you want to disable Turbopack
  // experimental: {
  //   turbo: {}, // Disable Turbopack
  // },
  images: {
    domains: ["cdn.sanity.io", "picsum.photos", "d1muf25xaso8hp.cloudfront.net"],
  },
};

module.exports = nextConfig;
