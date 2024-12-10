import SectionInfo from "@/components/SectionInfo";
import RightBarSection from "@/components/sections/RightBarSection";

type LearnLayoutProps = {
  children: React.ReactNode;
};

export default async function LearnLayout({ children }: LearnLayoutProps) {
  return (
    <>
      <div className="xl:hidden">
        <SectionInfo />
      </div>
      <div className="flex justify-center">
        <div className="h-full flex xl:w-[1024px] w-full relative">
          <div className="bg-slate-600 min-w-[300px] absolute left-0 right-0 xl:right-[350px]">
            {children}
          </div>
          <div
            className="max-xl:hidden w-[350px] fixed"
            style={{ right: "calc((100vw - 1276px) / 2)" }}
          >
            <RightBarSection />
          </div>
        </div>
      </div>
    </>
  );
}
