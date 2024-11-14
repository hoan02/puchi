import { Pathnames, LocalePrefixMode } from "next-intl/routing";

export const defaultLocale = "en" as const;

export const locales = [
  "en",
  "zh",
  "de",
  "es",
  "fr",
  "it",
  "ja",
  "kr",
  "ru",
] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/settings": "/settings/account",
};

export type Locale = (typeof locales)[number];

export const localePrefix: LocalePrefixMode = "always";
