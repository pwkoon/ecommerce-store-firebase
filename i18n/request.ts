// import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers"; // ✅ Import headers
import { routing } from "./routing";

export const locales = ["en", "zh-CN"];

export default getRequestConfig(async () => {
  // ✅ Retrieve locale from request headers
  const headersList = await headers();
  let locale = headersList.get("x-next-intl-locale") || routing.defaultLocale;

  // Validate locale
  if (!routing.locales.includes(locale as "en" | "zh-CN")) {
    locale = routing.defaultLocale;
  }

  const messages = await import(`../messages/${locale}.json`);
  return { messages: messages.default, locale };
});
