import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import BottomNavBar from "@/components/BottomNavbar";
import SidebarLeft from "@/components/SidebarLeft";
import SectionInfo from "@/components/SectionInfo";

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

        <main className="flex-1 ml-0 sm:ml-[84px] lg:ml-60 p-2 md:p-4">
          <div className="xl:hidden">
            <SectionInfo />
          </div>
          {children}
        </main>

        <BottomNavBar />
      </div>
    </ClerkLocalizationProvider>
  );
}
