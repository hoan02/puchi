import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import Document from "@/components/Document";

export const metadata = {
  title: "",
  description: "",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <Document locale={locale}>
      <ClerkLocalizationProvider locale={locale}>
        <NextIntlClientProvider messages={messages}>
          <main className="min-h-screen w-screen">{children}</main>;
        </NextIntlClientProvider>
      </ClerkLocalizationProvider>
    </Document>
  );
}
