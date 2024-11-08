import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;

export const locales = [
  "en",
  "cn",
  "de",
  "es",
  "fr",
  "it",
  "jp",
  "kr",
  "ru",
] as const;
export type Locale = (typeof locales)[number];

// export const pathnames: Pathnames<typeof locales> = {
//   "/": "/",
//   "/app/profile": {
//     en: "/profile",
//     cn: "/profile",
//     de: "/profile",
//     es: "/profile",
//     fr: "/profile",
//     it: "/profile",
//     jp: "/profile",
//     kr: "/profile",
//     ru: "/profile",
//   },
//   "/app/learn": {
//     en: "/learn",
//     cn: "/learn",
//     de: "/learn",
//     es: "/learn",
//     fr: "/learn",
//     it: "/learn",
//     jp: "/learn",
//     kr: "/learn",
//     ru: "/learn",
//   },
// };

export const localePrefix: LocalePrefix<typeof locales> = "always";