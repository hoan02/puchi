"use client";

import { useState, useEffect, useRef } from "react";

const sections = Array.from({ length: 20 }, (_, index) => ({
  id: `section-${index + 1}`,
  content: `Content ${index + 1}`,
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
  const [bgColor, setBgColor] = useState(colors[0]);
  const [sectionContent, setSectionContent] = useState("");
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIntersection = () => {
      if (stickyRef.current) {
        const stickyElement = stickyRef.current.getBoundingClientRect();

        sectionsRef.current.forEach((section, index) => {
          if (section) {
            const sectionElement = section.getBoundingClientRect();

            if (
              sectionElement.top <= stickyElement.bottom &&
              sectionElement.bottom >= stickyElement.top
            ) {
              setBgColor(colors[index % colors.length]);
              setSectionContent(sections[index].content);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", checkIntersection);

    checkIntersection();

    // Cleanup listener khi component unmount
    return () => {
      window.removeEventListener("scroll", checkIntersection);
    };
  }, []);

  return (
    <div className="w-full xl:pr-8 pr-0">
      <div
        ref={stickyRef}
        className={`sticky top-4 transition-colors duration-300`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="mt-4 mx-auto max-w-[600px] h-[100px] rounded-xl">
          {sectionContent}
        </div>
      </div>

      <div className="w-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className="h-[500px]"
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
