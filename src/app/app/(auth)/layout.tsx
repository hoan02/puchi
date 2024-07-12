import "@/styles/globals.css";
import ClerkVIProvider from "@/components/providers/ClerkLocalizationProvider";
import { ClerkLoaded } from "@clerk/nextjs";
import { getLocale } from "next-intl/server";

export const metadata = {
  title: "Auth WriterHub",
  description: "Xác thực quản lý người viết truyện",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <ClerkVIProvider locale={locale}>
      <html lang="vi" suppressHydrationWarning>
        <body className="min-h-screen w-screen flex items-center">
          <ClerkLoaded>
            <div className="m-auto py-10">{children}</div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkVIProvider>
  );
}
