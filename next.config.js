/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/brochure",
        destination: "/brochure.html",
      },
    ];
  },
};

module.exports = nextConfig;
