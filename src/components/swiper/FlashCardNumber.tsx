"use client";

import { useRef, useState } from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Volume2 } from "lucide-react";

import { numToWords } from "@/lib/n2words";
import "swiper/css";
import "swiper/css/effect-cards";
import "@/styles/swiper.css";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const FlashCardNumber = () => {
  const params = useParams<{ locale: string }>();
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [autoPlay, setAutoPlay] = useState(false);
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  const handlePlayAudio = (index: number) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].currentTime = 0;
      audioRefs.current[index].play();
    }
  };

  const handleAutoPlayToggle = () => {
    setAutoPlay((prev) => !prev);
  };

  const handleSlideChange = (swiper: any) => {
    if (autoPlay) {
      const activeIndex = swiper.activeIndex;
      if (audioRefs.current[activeIndex]) {
        audioRefs.current[activeIndex].play();
      }
    }
  };

  return (
    <div className="w-full font-din">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[340px]"
        onSlideChange={handleSlideChange}
      >
        {numbers.map((value, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <div className="h-full flex flex-col justify-center items-center">
              <p className="font-bold text-[200px] leading-[200px]">{value}</p>
              <p className="text-3xl">{numToWords(value, "vi")}</p>
              <p className="text-1xl mb-2">
                ({numToWords(value, params.locale)})
              </p>
              <button onClick={() => handlePlayAudio(index)}>
                <Volume2 />
              </button>
              <audio
                ref={(el) => {
                  if (el) {
                    audioRefs.current[index] = el;
                  }
                }}
                src={`https://res.cloudinary.com/cloudinaryhoan/video/upload/f_auto:video,q_auto/v1/audio/numbers/${
                  index + 1
                }`}
                hidden
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Switch
            id="auto-play"
            checked={autoPlay}
            onCheckedChange={handleAutoPlayToggle}
          />
          <Label htmlFor="airplane-mode">Auto play</Label>
        </div>
      </div>
    </div>
  );
};

export default FlashCardNumber;
