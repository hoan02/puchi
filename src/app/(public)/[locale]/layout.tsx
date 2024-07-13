import { ReactNode } from "react";
import { getMessages, getTranslations } from "next-intl/server";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { locales } from "@/lib/config";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";
import "@/styles/globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "PublicLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PublicLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="relative scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-300"
    >
      <body className={cn(fonts, "flex flex-col font-sans")}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <div className="container flex flex-grow flex-col px-0">
              <Header />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
