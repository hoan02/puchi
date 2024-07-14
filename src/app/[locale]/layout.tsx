import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

import Document from "@/components/Document";
import { locales } from "@/lib/config";
import LazyMotionProvider from "@/components/providers/LazyMotionProvider";

const Header = dynamic(() => import("@/components/landing/Header"));
const Footer = dynamic(() => import("@/components/landing/Footer"));

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
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <Document locale={locale}>
      <NextIntlClientProvider messages={messages}>
        <LazyMotionProvider>
          <div className="container flex flex-grow flex-col px-0">
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </LazyMotionProvider>
      </NextIntlClientProvider>
    </Document>
  );
}
