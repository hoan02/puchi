"use client";

import LearnTitle from "@/components/learn/LearnTitle";
import { useState, useEffect, useRef } from "react";

const data = Array.from({ length: 20 }, (_, index) => ({
  name: `Unit ${index + 1}`,
  numSection: 1,
  numUnit: index + 1,
}));

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

export default function ScrollHighlight() {
  const [titleHighlight, setTitleHighlight] = useState({
    numSection: 0,
    numUnit: 0,
    name: "",
    color: colors[0],
  });
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);

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
              const currentTitle = data[index];
              setTitleHighlight({
                numSection: currentTitle.numSection,
                numUnit: currentTitle.numUnit,
                name: currentTitle.name,
                color: colors[index % colors.length],
              });
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
    <div className="w-full xl:pr-8 pr-0">
      <div
        ref={stickyRef}
        className="sticky top-0 pt-4 transition-colors duration-300"
      >
        <LearnTitle
          numSection={titleHighlight.numSection}
          numUnit={titleHighlight.numUnit}
          name={titleHighlight.name}
          color={titleHighlight.color}
        />
      </div>

      <div className="w-full">
        {data.map((title, index) => (
          <div
            key={index}
            ref={(el) => {
              titlesRef.current[index] = el;
            }}
            className="h-[500px]"
          >
            <p className="font-bold text-lg">{title.name}</p>
            <p>Number of Units: {title.numUnit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
