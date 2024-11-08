import { getTranslations } from "next-intl/server";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { locales } from "@/i18n/config";

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

type PublicLayoutProps = {
  children: React.ReactNode;
};

export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="container flex flex-grow flex-col px-0">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
