"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import StarRating from "./star-rating";
import { ReviewSliderProps } from "@/_types/review-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ReviewSlider({
  cssClasses,
  reviews,
}: ReviewSliderProps) {
  return (
    <div className="relative">
      <div className="overflow-x-hidden">
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          className={cssClasses}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: ".swiper-review-button-prev-custom",
            nextEl: ".swiper-review-button-next-custom",
          }}
          loop
          style={
            {
              "--swiper-pagination-color": "#E00034",
              "--swiper-pagination-bullet-inactive-color": "#E00034",
              "--swiper-pagination-bullet-inactive-opacity": "0.5",
            } as React.CSSProperties
          }
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="flex flex-col gap-3 items-center justify-center text-center px-5 desktop:px-15 min-h-[134px]">
                <StarRating rating={review.rating} />
                <blockquote className="text-paragraph italic">
                  &quot;{review.text}&quot;
                </blockquote>
                <cite className="text-paragraph not-italic">
                  - {review.authorName}
                </cite>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        className="swiper-review-button-prev-custom hidden desktop:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center transition-all duration-300 ease-in-out desktop:hover:cursor-pointer"
        aria-label="Previous slide"
      >
        <CircleChevronLeft className="w-6 h-6 text-black hover:text-red ease-in-out duration-300" />
      </button>
      <button
        className="swiper-review-button-next-custom hidden desktop:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 items-center justify-center transition-all duration-300 ease-in-out desktop:hover:cursor-pointer"
        aria-label="Next slide"
      >
        <CircleChevronRight className="w-6 h-6 text-black hover:text-red ease-in-out duration-300" />
      </button>
    </div>
  );
}
