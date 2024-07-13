import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ReactNode } from "react";
import AppNavigationLocaleSwitcher from "../AppNavigationLocaleSwitcher";
import Document from "@/components/Document";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "next-intl-mixed-routing (app)",
};

export default async function AppLayout({ children }: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <Document locale={locale}>
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
    </Document>
  );
}
