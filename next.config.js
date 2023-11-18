/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "src/styles/utils/_variables.scss";`,
  },
  images: {
    domains: ['drive.google.com'],
  },
};

module.exports = nextConfig;
