import { fetchGoogleReviews } from "@/_actions/review-actions";
import ReviewSlider from "./review-slider";
import StarRating from "./star-rating";
import ButtonLink from "@/_components/ui/buttons/button-link";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  cssClasses?: string;
}

export default async function ReviewsComponent({ cssClasses }: Props) {
  const { reviews, overallRating, totalReviews } = await fetchGoogleReviews();

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section
      className={classNames(
        "flex flex-col gap-10 items-center w-full mx-auto",
        cssClasses
      )}
    >
      <div className="flex flex-col min-[500px]:flex-row items-start desktop:items-center justify-between w-full desktop:max-w-[1200px] gap-5">
        <h2 className="text-[40px] font-semibold">Reviews</h2>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-semibold">
              {overallRating.toFixed(1)}
            </span>
            <StarRating rating={overallRating} />
            <span className="text-paragraph text-gray-600">
              {totalReviews} reviews
            </span>
          </div>
          <div className="relative h-[18.757px] w-[138px]">
            <Image
              src="/images/powered-by-google.png"
              alt="Powered by Google"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[calc(100vw-60px)] tablet:max-w-[calc(100vw-80px)] desktop:max-w-[1200px] overflow-hidden">
        <ReviewSlider reviews={reviews} />
      </div>

      <ButtonLink
        href={process.env.GOOGLE_REVIEW_URL || "#"}
        target="_blank"
        redButton
        ariaLabel="Leave a review on Google"
      >
        Review Us
      </ButtonLink>
    </section>
  );
}
