/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"]
  },
  basePath: '/movieapp',
  assetPrefix: '/movieapp/',
};

export default nextConfig;
