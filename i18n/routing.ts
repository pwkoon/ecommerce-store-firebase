import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "zh-CN"],
  defaultLocale: "en",
  // localePrefix: {
  //   mode: "always",
  //   prefixes: {
  //     en: "/en",
  //     "zh-CN": "/cn",
  //   },
  // },
  pathnames: {
    "/": "/",
    "/reviews": {
      en: "/reviews",
      "zh-CN": "/reviews",
    },
    "/gallery": {
      en: "/gallery",
      "zh-CN": "/gallery",
    },
    "/sign-in": {
      en: "/sign-in",
      "zh-CN": "/sign-in",
    },
    "/sign-up": {
      en: "/sign-up",
      "zh-CN": "/sign-up",
    },
    "/verify-email": {
      en: "/verify-email",
      "zh-CN": "/verify-email",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames; // Type for the available pathnames
export type Locale = (typeof routing.locales)[number]; // Type for the available locales

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
