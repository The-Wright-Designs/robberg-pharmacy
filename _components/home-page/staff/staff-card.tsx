"use client";

import Image from "next/image";
import classNames from "classnames";

interface Props {
  image: string;
  staffName: string;
  qualifications: string[];
  bio: string[];
  flipImage?: boolean;
  cssClasses?: string;
  index?: number;
}

export default function StaffCard({
  image,
  staffName,
  qualifications,
  bio,
  flipImage = false,
  cssClasses,
  index,
}: Props) {
  return (
    <div
      className={classNames(
        "rounded-[40px] overflow-hidden shadow-md max-w-[500px] bg-white tablet:max-w-[400px] desktop:max-w-full desktop:flex",
        cssClasses
      )}
    >
      <div
        className={classNames(
          "relative aspect-square w-full desktop:max-w-[331px] desktop:h-full",
          {
            "desktop:order-2": flipImage,
          }
        )}
      >
        <Image
          src={image}
          alt={staffName}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-5 p-[28px]">
        <div
          className={classNames("flex flex-col gap-2 items-start", {
            "desktop:gap-5 desktop:flex-row desktop:items-center": index !== 6,
          })}
        >
          <h3 className="text-subheading font-bold text-black text-nowrap">
            {staffName}
          </h3>

          <div className="flex flex-wrap gap-3 items-start">
            {qualifications.map((qualification, index) => (
              <div
                key={index}
                className="bg-red flex items-center justify-center px-2 py-0.5 rounded-[4px]"
              >
                <p className="text-[14px] font-normal text-white text-nowrap">
                  {qualification}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {bio.map((paragraph, index) => (
            <p key={index} className="text-paragraph text-black">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
