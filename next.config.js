/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "api/public",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
