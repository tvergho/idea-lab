const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages],
], {
  images: {
    domains: ['cdn.sanity.io'],
  },
  target: 'experimental-serverless-trace',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/home',
        },
      ],
    };
  },
});
