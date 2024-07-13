import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import { cn } from "@/lib/utils";
import { fonts } from "@/styles/fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="relative scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-300"
    >
      <ClerkLocalizationProvider locale={locale}>
        <body className={cn(fonts, "flex flex-col font-sans")}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <main className="min-h-screen w-screen">{children}</main>;
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </ClerkLocalizationProvider>
    </html>
  );
}
