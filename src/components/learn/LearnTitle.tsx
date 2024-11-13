import { ArrowLeft, Notebook } from "lucide-react";

import { Button } from "../ui/button";
import { Link } from "@/i18n/routing.public";

const LearnTitle = () => {
  return (
    <div className="flex h-full justify-between items-center font-bold lg:text-xl text-base">
      <div className="flex max-xl:flex-col items-center">
        <Link href="/sections" className="flex gap-2 hover:text-blue-500">
          <ArrowLeft className="cursor-pointer" />
          <span className="text-gray-700 dark:text-gray-300 underline underline-offset-2 hover:text-blue-500">
            SECTION 1, UNIT 1:
          </span>
        </Link>
        <h1 className="lg:ml-2 ml-6">Introduce yourself</h1>
      </div>
      <Link href={`/guidebook/1`} className="items-center">
        <Button  variant="primary">
          <Notebook />
          <span className="ml-2 max-xl:hidden">GUIDEBOOK</span>
        </Button>
      </Link>
    </div>
  );
};

export default LearnTitle;
