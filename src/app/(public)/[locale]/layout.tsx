import { NextIntlClientProvider } from "next-intl";
import {
  getLocale,
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { locales } from "@/lib/config";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "@/styles/globals.css";
import LazyMotionProvider from "@/components/providers/LazyMotionProvider";

export async function generateMetadata() {
  const t = await getTranslations("PublicLayout");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  setRequestLocale(locale);

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
            <LazyMotionProvider>
              <div className="container flex flex-grow flex-col px-0">
                <Header />
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
              </div>
            </LazyMotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
