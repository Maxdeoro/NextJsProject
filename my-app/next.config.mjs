/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',    // no need if production npm start
  images: {
    domains: ['courses-top.ru', 
      'old-images.hb.ru-msk.vkcs.cloud', 
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  });
  return config;
  },
};

export default nextConfig;

