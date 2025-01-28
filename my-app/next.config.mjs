/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  // swcMinify: true,
  });
  return config;
  },
};

export default nextConfig;
// exports.module = nextConfig;
