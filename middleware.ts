import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh-CN"], // Supported locales
  defaultLocale: "en", // Default locale
});

export async function getRequestConfig(req: NextRequest) {
  // Extract the locale from the 'Accept-Language' header
  const locale = req.headers.get("accept-language")?.split(",")[0] || "en";
  return { locale }; // Return the locale
}

export const config = {
  matcher: [
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|zh-CN)/:path*",

    // "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
