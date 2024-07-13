"use client";

import NextImage from "next/image";
import type { Variants } from "framer-motion";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import AnimatedTitle from "@/components/motion/AnimatedTitle";
import {
  AnimatedList,
  AnimatedListItem,
} from "@/components/motion/AnimatedList";

import { languages } from "@/constants/languages";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  hidden: { opacity: 0 },
} satisfies Variants;

const item = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0.4 },
} satisfies Variants;

const Languages = () => {
  const clickChoseLocale = (locale: string) => {
    alert(`You chose ${locale}`);
  };

  return (
    <section className="space-y-20 px-4 py-8 sm:px-[10%] md:py-20">
      <AnimatedTitle>
        <h2 className="heading-section">
          <span className="text-highlight-depth">Multi-language </span>
          support website
        </h2>
      </AnimatedTitle>
      <div className="mx-auto max-w-screen-lg">
        <AnimatedList
          className="flex flex-wrap justify-center gap-2 text-center lg:gap-4"
          variants={list}
        >
          {languages.map(({ flag, title }) => (
            <AnimatedListItem
              key={title}
              className="basis-28 md:basis-40"
              variants={item}
            >
              <Button
                variant="ghost"
                size="lg"
                className="size-full flex-wrap bg-secondary/10 px-0 pb-4 transition active:scale-95 lg:text-base"
                onClick={() => clickChoseLocale(title)}
              >
                <AspectRatio
                  ratio={3 / 2}
                  className="!top-1/2 mx-auto h-1/2 w-1/2 -translate-y-1/2"
                >
                  <NextImage
                    src={`/images/flag/${flag}.svg`}
                    alt={`${title} flag`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <span>{title}</span>
              </Button>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Languages;
