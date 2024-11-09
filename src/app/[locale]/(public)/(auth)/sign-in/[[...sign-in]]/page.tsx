import ClerkLocalizationProvider from "@/components/providers/ClerkLocalizationProvider";
import { Skeleton } from "@/components/ui/skeleton";
import { locales } from "@/i18n/config";
import { ClerkLoaded, SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export const metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập",
};

type Params = {
  params: Promise<{ locale: string }>;
};

const SignInPage = async ({ params }: Params) => {
  const { locale } = await params;
  return (
    <Suspense fallback={<SkeletonCard />}>
      <ClerkLocalizationProvider locale={locale}>
        <ClerkLoaded>
          <SignIn />
        </ClerkLoaded>
      </ClerkLocalizationProvider>
    </Suspense>
  );
};

const SkeletonCard = () => {
  return (
    <div className="h-[500px] w-[386px] rounded-xl">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
};

export default SignInPage;
