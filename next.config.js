/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Empty turbopack config to use Turbopack (Next.js 16 default)
  // Path aliases are configured in tsconfig.json
  turbopack: {},
};

module.exports = nextConfig;
