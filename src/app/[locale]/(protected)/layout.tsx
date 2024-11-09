import { AppSidebar } from "@/components/AppSidebar";
import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ProtectedLayout({
  children,
  params,
}: ProtectedLayoutProps) {
  const { locale } = await params;
  return (
    <ClerkLocalizationProvider locale={locale}>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ClerkLocalizationProvider>
  );
}
