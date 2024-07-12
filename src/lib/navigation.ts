import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

import { locales, pathnames, localePrefix } from "@/lib/config";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

export type LocalizedLinkHref = React.ComponentProps<typeof Link>["href"];
