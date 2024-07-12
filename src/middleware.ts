import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { defaultLocale, locales } from "./config";

export default clerkMiddleware(
  (auth, req) => {
    const pathname = req.nextUrl.pathname;
    const isAppRoute = pathname === "/app" || pathname.startsWith("/app/");

    const intlMiddleware = createMiddleware({
      locales,
      defaultLocale,
    });

    if (isAppRoute) {
      // Add a hint that we can read in `i18n.ts`
      req.headers.set("x-app-route", "true");
      return NextResponse.next({ headers: req.headers });
    } else {
      return intlMiddleware(req);
    }
  },
  { debug: process.env.NODE_ENV === "development" }
);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(de|en)/:path*",
    "/app/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
