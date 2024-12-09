"use client";

import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "@/styles/swiper.css";
import { numToWords } from "@/lib/n2words";

const FlashCardNumber = () => {
  const params = useParams<{ locale: string }>();
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="w-full font-din">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]"
      >
        {numbers.map((value, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <div className="h-full flex flex-col justify-center items-center">
              <p className="font-bold text-[200px] leading-[200px]">{value}</p>
              <p className="text-3xl">{numToWords(value, "vi")}</p>
              <p className="text-1xl">({numToWords(value, params.locale)})</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashCardNumber;
