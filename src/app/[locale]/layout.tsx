import { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Partytown } from "@builder.io/partytown/react";

import ThemeProvider from "@/components/providers/ThemeProvider";
import LazyMotionProvider from "@/components/providers/LazyMotionProvider";
import { getBaseUrl } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  generator: "Next.js",
  applicationName: "Puchi",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Puchi",
    "vietnamese",
    "learn vietnamese",
    "HoanIT",
    "hoan02",
    "Viet Nam",
  ],
  authors: [{ name: "Hoan", url: "https://www.facebook.com/hoanit02" }],
  creator: "Lê Công Hoan",
  publisher: "Hoan IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  facebook: {
    appId: "961750142645211",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="relative scrollbar-thin"
    >
      <body
        className={cn(fonts, "flex flex-col font-sans")}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LazyMotionProvider>{children}</LazyMotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SRHPF5QE5Y"
          type="text/partytown"
        />
        <Script
          id="google-analytics"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SRHPF5QE5Y');
            `,
          }}
        />
      </body>
    </html>
  );
}
