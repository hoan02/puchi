import { Separator } from "../ui/separator";
import { LessonButton } from "./lesson-button";

const mockUnitData = {
  numSection: 1,
  numUnit: 1,
  name: "Unit 1: Introduction to React",
  color: "#4ade80",
  isPlaying: true,
  lessons: [
    {
      id: 1,
      name: "Lesson 1: What is React?",
      completed: true,
    },
    {
      id: 2,
      name: "Lesson 2: JSX Basics",
      completed: true,
    },
    {
      id: 3,
      name: "Lesson 3: Components & Props",
      completed: false,
    },
    {
      id: 4,
      name: "Lesson 4: State Management",
      completed: false,
    },
  ],
  activeLesson: {
    id: 3,
  },
  activeLessonPercentage: 45, // Example percentage
};

const Unit = ({ data }) => {
  const {
    numSection,
    numUnit,
    name,
    color,
    isPlaying,
    lessons,
    activeLesson,
    activeLessonPercentage,
  } = data;
  return (
    <div
      className="h-[500px]"
      // style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center">
        <Separator className="w-1/3 h-[3px]" />
        <h2 className="mx-4">{name}</h2>
        <Separator className="w-1/3 h-[3px]" />
      </div>

      <div className="relative flex flex-col items-center">
        {mockUnitData.lessons.map((lesson, i) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={i}
              totalCount={mockUnitData.lessons.length - 1}
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
