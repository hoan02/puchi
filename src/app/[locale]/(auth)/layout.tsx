import { ReactNode } from "react";

import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import "@/styles/clerk.css";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function AuthLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <ClerkLocalizationProvider locale={locale}>
      <div className="m-auto py-10">{children}</div>
    </ClerkLocalizationProvider>
  );
}
