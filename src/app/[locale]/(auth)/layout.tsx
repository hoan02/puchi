import { ClerkLoaded } from "@clerk/nextjs";

import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import "@/styles/clerk.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AuthLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <ClerkLocalizationProvider locale={locale}>
      <ClerkLoaded>
        <div className="m-auto py-10">{children}</div>
      </ClerkLoaded>
    </ClerkLocalizationProvider>
  );
}
