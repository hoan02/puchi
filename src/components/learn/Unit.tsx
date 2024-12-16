import { Separator } from "../ui/separator";
import { LessonButton } from "./lesson-button";

// Define the interface for the data prop
interface UnitData {
  numSection: number;
  numUnit: number;
  name: string;
  color: string;
  isPlaying: boolean;
  lessons: {
    id: number;
    name: string;
    completed: boolean;
  }[];
  activeLesson: {
    id: number;
  };
  activeLessonPercentage: number;
}

interface UnitProps {
  data: UnitData;
}

const Unit = ({ data }: UnitProps) => {
  const { name, activeLesson, activeLessonPercentage, lessons } = data;

  return (
    <div className="h-[500px]">
      <div className="flex justify-center items-center">
        <Separator className="w-1/3 h-[3px]" />
        <h2 className="mx-4">{name}</h2>
        <Separator className="w-1/3 h-[3px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {lessons.map((lesson, i) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={i} // Pass the index
              totalCount={lessons.length} // Pass the totalCount
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Unit;
