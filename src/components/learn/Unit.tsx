import { Separator } from "../ui/separator";
import LessonButton from "../lesson-button";

interface UnitData {
  numSection: number;
  numUnit: number;
  name: string;
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
  const { numUnit, name, activeLesson, activeLessonPercentage, lessons } = data;
  const color = `var(--unit-${numUnit % 10})`;
  return (
    <div className="h-[520px]">
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
              index={i}
              totalCount={lessons.length}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Unit;
