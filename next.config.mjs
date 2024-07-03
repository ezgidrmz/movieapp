/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"]
  },
  basePath: '/movieapp',
  assetPrefix: '/movieapp/',


};
// next.config.js
module.exports = {
  experimental: {
    // Dinamik sayfalar için `fallback` modunu etkinleştiriyoruz
    outputFileTracing: true,
  },
};

export default nextConfig;
