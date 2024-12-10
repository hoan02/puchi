import RightBarSection from "@/components/sections/RightBarSection";

const SectionsPage = () => {
  return (
    <div className="w-full h-full flex gap-4">
      <div className="flex-1 bg-gray-300">
      </div>
      <div className="w-[340px]">
        <RightBarSection />
      </div>
    </div>
  );
};

export default SectionsPage;
