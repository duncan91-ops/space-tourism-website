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
        destination: "/crew/commander",
        permanent: true,
      },
      {
        source: "/technology",
        destination: "/technology/launch-vehicle",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
