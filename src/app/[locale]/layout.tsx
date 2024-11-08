import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import ThemeProvider from "@/components/providers/ThemeProvider";
import LazyMotionProvider from "@/components/providers/LazyMotionProvider";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Puchi",
  referrer: "origin-when-cross-origin",
  keywords: ["Puchi", "learn vietnamese", "HoanIT", "hoan02"],
  authors: [
    { name: "Hoan" },
    { name: "Hoan", url: "https://www.facebook.com/hoanit02" },
  ],
  creator: "Lê Công Hoan",
  publisher: "Hoan IT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      className="relative scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-300"
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
      </body>
    </html>
  );
}
