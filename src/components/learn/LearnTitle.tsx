import { ArrowLeft, Notebook } from "lucide-react";

import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";

const LearnTitle = (props) => {
  const { numSection, numUnit, name, color } = props.data;

  return (
    <div
      className="p-4 mx-auto max-w-[560px] h-20 rounded-xl flex justify-between items-center"
      style={{ backgroundColor: color }}
    >
      <div className="">
        <Link href="/sections" className="flex gap-2">
          <ArrowLeft className="cursor-pointer" />
          <span className="text-gray-700 dark:text-gray-300 underline underline-offset-2 hover:text-blue-500">
            SECTION {numSection}, UNIT {numUnit}:
          </span>
        </Link>
        <h1 className="mt-2 lg:ml-2 ml-6 text-xl font-bold">{name}</h1>
      </div>

      <Link
        href={`/guidebook?section=${numSection}&unit=${numUnit}`}
        className="items-center"
      >
        <Button variant="immersive">
          <Notebook />
          <span className="ml-2 max-xl:hidden">GUIDEBOOK</span>
        </Button>
      </Link>
    </div>
  );
};

export default LearnTitle;
