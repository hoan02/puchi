import { Card, CardContent } from "@/components/ui/card";
import FlashCardNumber from "../swiper/FlashCardNumber";

const LearnContainer = () => {
  return (
    <div className="w-full mt-20 max-lg:mt-20 max-md:mt-28 max-lg:flex-col flex gap-4 pb-4">
      <div className="flex-1">
        <Card className="min-h-[calc(100%-320px)]">
          <CardContent className="py-10">
            <FlashCardNumber />
          </CardContent>
        </Card>
      </div>

      <div className="lg:w-96 w-full">
        <Card className="">
          <CardContent className="py-4">
            <p>Card Content 2</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnContainer;
