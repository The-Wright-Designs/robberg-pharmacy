import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

export default function AwardBanner({ cssClasses }: Props) {
  return (
    <section
      className={classNames(
        "bg-black p-10 flex items-center justify-center max-w-[1280px] mx-auto",
        cssClasses
      )}
    >
      <p className="text-white text-center text-[24px] font-medium">
        Robberg Pharmacy &mdash; Fourth-Year Winner of the Regional Pharmacy of
        the Year Award
      </p>
    </section>
  );
}
