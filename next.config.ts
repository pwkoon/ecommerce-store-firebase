/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // basePath: "./",
  poweredByHeader: false,
  reactStrictMode: true,
  // trailingSlash: true,
  assetPrefix: isProd ? process.env.WEB_HOST : undefined,
  // assetPrefix: "./",
  // /* config options here */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
