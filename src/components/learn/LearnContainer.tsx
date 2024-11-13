import { Card, CardContent } from "@/components/ui/card";

const LearnContainer = () => {
  return (
    <div className="w-full mt-28 lg:mt-20 pb-4 max-lg:flex-col flex gap-4">
      <div className="flex-1">
        <Card className="h-[2000px]">
          <CardContent className="py-4">
            <p>Card Content 1</p>
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-96 w-full">
        <Card className="h-[900px]">
          <CardContent className="py-4">
            <p>Card Content 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnContainer;
