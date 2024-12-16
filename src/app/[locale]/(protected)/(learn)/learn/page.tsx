"use client";

import LearnTitle from "@/components/learn/LearnTitle";
import Unit from "@/components/learn/Unit";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const colors = [
  "#58CC02", // Green
  "#CE82FF", // Purple
  "#00CD9C", // Teal
  "#1CB0F6", // Blue
  "#FF86D0", // Pink
  "#FF9600", // Orange
  "#FF4B4B", // Red
  "#CC348D", // Magenta
  "#DC8F47", // Gold
];

const unitPlaying = 1;

const data = Array.from({ length: 10 }, (_, index) => ({
  name: `Unit ${index + 1}`,
  numSection: 1,
  numUnit: index + 1,
  color: colors[index % colors.length],
  isPlaying: index + 1 === unitPlaying,
  lessons: [
    { id: 1, name: `Lesson 1: Lesson for Unit ${index + 1}`, completed: false },
    { id: 2, name: `Lesson 2: Another lesson for Unit ${index + 1}`, completed: true },
    { id: 3, name: `Lesson 3: Third lesson for Unit ${index + 1}`, completed: false },
    { id: 4, name: `Lesson 4: Final lesson for Unit ${index + 1}`, completed: false },
  ],
  activeLesson: { id: 3 }, // Example of active lesson
  activeLessonPercentage: 60, // Example percentage
}));


export default function ScrollHighlight() {
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkInterTitle = () => {
      if (stickyRef.current) {
        const stickyElement = stickyRef.current.getBoundingClientRect();

        titlesRef.current.forEach((title, index) => {
          if (title) {
            const titleElement = title.getBoundingClientRect();

            if (
              titleElement.top <= stickyElement.bottom &&
              titleElement.bottom >= stickyElement.top
            ) {
              setCurrentIndex(index);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", checkInterTitle);

    checkInterTitle();

    // Cleanup listener khi component unmount
    return () => {
      window.removeEventListener("scroll", checkInterTitle);
    };
  }, []);

  return (
    <div className="w-full xl:pr-8 pr-0 font-din">
      <div
        ref={stickyRef}
        className="sticky z-50 top-0 pt-4 transition-colors duration-300"
      >
        <LearnTitle data={data[currentIndex]} />
      </div>

      <div className="w-full relative top-8">
        {data.map((title, index) => (
          <div
            key={index}
            ref={(el) => {
              titlesRef.current[index] = el;
            }}
          >
            <Unit data={data[index]} />
          </div>
        ))}
      </div>
      <Card className="p-8 text-center mb-10">
        <Badge variant="secondary" className="uppercase text-gray-100">
          up next
        </Badge>
        <div className="my-4 text-gray-200 text-3xl font-bold">Section 2</div>
        <p className="my-8 mx-auto max-w-[300px] text-gray-600">
          Learn words, phrases, and grammar concepts for basic interactions
        </p>
        <Button className="w-full" variant="highlight">
          Jump here?
        </Button>
      </Card>
    </div>
  );
}
