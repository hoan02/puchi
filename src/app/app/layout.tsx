import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import Document from "@/components/Document";
import AppNavigationLocaleSwitcher from "./AppNavigationLocaleSwitcher";

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
          <div className="flex">
            <div className="flex min-h-[100vh] w-[270px] shrink-0 flex-col justify-between bg-slate-100 p-8">
              <div className="flex items-center justify-between">
                <AppNavigationLocaleSwitcher />
              </div>
            </div>
            <div className="p-8">{children}</div>
          </div>
        </NextIntlClientProvider>
      </ClerkLocalizationProvider>
    </Document>
  );
}
