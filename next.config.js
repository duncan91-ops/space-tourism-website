/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/destination",
        destination: "/destination/moon",
        permanent: true,
      },
      {
        source: "/crew",
        destination: "/crew/douglas",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
