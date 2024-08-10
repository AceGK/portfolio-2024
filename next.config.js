/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com'],
    minimumCacheTTL: 60,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/rico-pearson',
        destination: 'https://photos.acekisch.com/-ricopearson/gallery',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
