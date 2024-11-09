import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { locales, localePrefix, defaultLocale } from "@/i18n/config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    localePrefix,
  });

export type LocalizedLinkHref = React.ComponentProps<typeof Link>["href"];
