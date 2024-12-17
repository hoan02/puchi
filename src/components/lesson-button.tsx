"use client";

import Link from "next/link";
import { Check, Crown, Star, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import AnimatedCircularProgressBar from "./ui/animated-circular-progress-bar";
import { cn } from "@/lib/utils";

type LessonButtonProps = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  color?: string;
};

const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
  color,
}: LessonButtonProps) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;

  if (cycleIndex <= 2) indentationLevel = cycleIndex;
  else if (cycleIndex <= 4) indentationLevel = 4 - cycleIndex;
  else if (cycleIndex <= 6) indentationLevel = 4 - cycleIndex;
  else indentationLevel = cycleIndex - 8;

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;
  const jump = isFirst && percentage === 0;

  const Icon = jump
    ? ChevronsRight
    : isCompleted
    ? Check
    : isLast
    ? Crown
    : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="relative h-[102px] w-[102px]">
            <div
              className="absolute -top-8 z-10 animate-bounce-slow rounded-xl border-2 px-3 py-2.5 font-bold uppercase tracking-wide bg-background/95 whitespace-nowrap"
              style={{
                color,
                left: jump ? "-14px" : "11px",
              }}
            >
              {jump ? "Jump here?" : "Start"}
              <div
                className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent"
                aria-hidden
              />
            </div>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={Number.isNaN(percentage) ? 0 : percentage}
              gaugePrimaryColor="#58CC02"
              gaugeSecondaryColor="#525252"
              className="w-[100px] h-[96px]"
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "immersive"}
                className="w-[70px] h-[68px] border-b-8 hover:translate-y-[1px] hover:border-b-[7px]"
                style={{ backgroundColor: color }}
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                    locked
                      ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                      : "fill-gray-50 text-gray-50",
                    (jump || isCompleted) && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </AnimatedCircularProgressBar>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "secondary"}
            className="w-[70px] h-[70px] border-b-8"
          >
            <Icon
              className={cn(
                "h-10 w-10",
                locked
                  ? "fill-neutral-400 stroke-neutral-400 text-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};

export default LessonButton;
