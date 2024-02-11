/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: "/Travel-website",
  assetPrefix: "/Travel-website",
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
