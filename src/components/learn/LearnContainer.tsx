import { Card, CardContent } from "@/components/ui/card";

const LearnContainer = () => {
  return (
    <div className="mt-28 lg:mt-20 pb-4 max-lg:flex-col flex gap-4">
      <div className="flex-1">
        <Card className="h-[2000px]">
          <CardContent>
            <p>Card Content 1</p>
          </CardContent>
        </Card>
      </div>

      <div className="w-96">
        <Card className="h-[900px]">
          <CardContent>
            <p>Card Content 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnContainer;
