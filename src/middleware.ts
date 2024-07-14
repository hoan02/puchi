import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { defaultLocale, locales, localePrefix, pathnames } from "@/lib/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
});

const isProtectedRoute = createRouteMatcher(["/app(.*)"]);

export default clerkMiddleware(
  (auth, req) => {
    if (isProtectedRoute(req)) {
      req.headers.set("x-app-route", "true");
      auth().protect();
      return NextResponse.next({ headers: req.headers });
    }

    return intlMiddleware(req);
  },
  { debug: process.env.NODE_ENV === "development" }
);

export const config = {
  matcher: [
    "/",
    "/:locale",
    "/app/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
