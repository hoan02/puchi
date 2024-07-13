import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

import ThemeProvider from "@/components/providers/ThemeProvider";
import { fonts } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
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
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
