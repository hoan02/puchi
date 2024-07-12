import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = [
  "en",
  // "cn",
  "de",
  // "es",
  // "fr",
  // "it",
  // "jp",
  // "kr",
  // "ru",
] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/app/profile": {
    en: "/profile",
    // cn: "/profile",
    de: "/profile",
    // es: "/profile",
    // fr: "/profile",
    // it: "/profile",
    // jp: "/profile",
    // kr: "/profile",
    // ru: "/profile",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
