/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['courses-top.ru', 
      'old-images.hb.ru-msk.vkcs.cloud', 
      'old-images.hb.ru-msk.vkcs.cloudhttp',
      'courses-top.ruhttps'
    ]
  },
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
