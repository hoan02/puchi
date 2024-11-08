import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { defaultLocale, locales, localePrefix } from "@/i18n/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

const isProtectedRoute = createRouteMatcher(["learn/(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) {
      req.headers.set("x-app-route", "true");
      await auth.protect();
      return NextResponse.next({ headers: req.headers });
    }

    return intlMiddleware(req);
  }
  // { debug: process.env.NODE_ENV === "development" }
);

export const config = {
  matcher: [
    // "/",
    // "/:locale",
    // "/learn/:path*",

    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
