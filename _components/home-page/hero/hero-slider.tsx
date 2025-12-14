"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  data: string[];
}

const HeroSlider = ({ cssClasses, data }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 6000,
      }}
      spaceBetween={12}
      speed={1000}
      modules={[Autoplay, Pagination, EffectFade]}
      className={cssClasses}
      effect="fade"
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide}
            alt={`Robberg Pharmacy - Image ${index + 1}`}
            className="w-full h-full object-cover"
            width={1280}
            height={600}
            loading={index < 1 ? "eager" : "lazy"}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </SwiperSlide>
      ))}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded flex w-[85vw] max-w-[500px] flex-col gap-1 items-center p-5 text-center z-10 tablet:p-10">
        <p className="text-paragraph text-[32px]">Welcome to</p>
        <p className="text-heading font-semibold text-[48px]">
          Robberg Pharmacy
        </p>
        <p className="text-paragraph text-[32px]">Plettenberg Bay</p>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
