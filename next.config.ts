import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // basePath: "./",
  poweredByHeader: false,
  reactStrictMode: true,
  // trailingSlash: true,
  // assetPrefix: isProd ? process.env.WEB_HOST : undefined,
  // assetPrefix: "./",
  // /* config options here */
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/images/:path*", // Applies to all images in /public/images/
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1-year cache
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
