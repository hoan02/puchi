import { LocalePrefix } from "next-intl/routing";

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
export type Locale = (typeof locales)[number];

export const localePrefix: LocalePrefix<typeof locales> = "always";
