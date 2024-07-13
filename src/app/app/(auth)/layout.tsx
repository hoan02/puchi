import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Auth",
  description: "Xác thực",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <ClerkLocalizationProvider locale={locale}>
      <main className="min-h-screen w-screen flex items-center">
        <div className="m-auto py-10">{children}</div>
      </main>
    </ClerkLocalizationProvider>
  );
}
