import LearnContainer from "@/components/learn/LearnContainer";
import SectionInfo from "@/components/SectionInfo";

const LearnPage = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 sm:left-[84px] lg:left-60 h-28 md:h-20 border-b-2 bg-background">
        <div className="w-full flex md:flex-row max-md:flex-col p-2 md:p-4">
          <div className="flex-1 md:mr-4 max-md:order-2">bài 1</div>
          <div className="w-full md:w-96 max-md:w-full max-md:order-1">
            <SectionInfo />
          </div>
        </div>
      </div>

      <LearnContainer />
    </div>
  );
};

export default LearnPage;
