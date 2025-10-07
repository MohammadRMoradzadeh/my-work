/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  staticPageGenerationTimeout: 60,
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
