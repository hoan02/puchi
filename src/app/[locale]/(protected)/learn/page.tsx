import SectionInfo from "@/components/SectionInfo";
import { Card, CardContent } from "@/components/ui/card";

const LearnPage = () => {
  return (
    <div className="p-4 gap-4 flex max-md:flex-col">
      <div className="w-full md:hidden">
        <SectionInfo />
      </div>
      <div className="flex-1">learn content</div>
      <div className="w-96 hidden md:flex flex-col gap-4">
        <SectionInfo />
        <Card className="py-4">
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnPage;
