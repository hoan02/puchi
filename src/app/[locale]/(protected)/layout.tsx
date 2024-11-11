import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import BottomNavBar from "@/components/BottomNavbar";
import SidebarLeft from "@/components/SidebarLeft";

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
      <div className="flex flex-col sm:flex-row min-h-screen">
        <SidebarLeft />
        <main className="flex-1 bg-white">{children}</main>
        <BottomNavBar />
      </div>
    </ClerkLocalizationProvider>
  );
}
