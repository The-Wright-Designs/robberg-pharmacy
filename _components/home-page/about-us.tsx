import classNames from "classnames";
import Image from "next/image";
import ButtonLink from "../ui/buttons/button-link";

interface Props {
  cssClasses?: string;
}

export default function AboutUs({ cssClasses }: Props) {
  return (
    <section className={classNames(cssClasses)}>
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="flex flex-col gap-10 w-full">
          <h2 className="text-[40px] font-semibold text-black">About</h2>

          <div className="flex flex-col gap-5">
            <p className="text-subheading text-black">
              Your trusted local pharmacy in Plettenberg Bay
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-paragraph text-black">
                Robberg Pharmacy is part of the Pharmacy at Spar network,
                conveniently{" "}
                <span className="font-bold">
                  located at the Beacon Island Centre
                </span>{" "}
                on Beacon Isle Drive in Plettenberg Bay.
              </p>

              <p className="text-paragraph text-black">
                We combine the personal touch of independent pharmacy care with
                the strength and reliability of the Spar group&apos;s extensive
                network. Our comprehensive pharmaceutical services include{" "}
                <span className="font-bold">free medicine delivery</span>{" "}
                throughout town and{" "}
                <span className="font-bold">after-hours assistance</span> for
                urgent healthcare needs.
              </p>

              <p className="text-paragraph text-black">
                Our team of{" "}
                <span className="font-bold">
                  highly qualified graduate pharmacists
                </span>
                —holding degrees in BPharm, Functional Medicine Health Coaching,
                Pharmacogenomics, and BSc(Hons) Pharmacology—ensures you receive
                expert, evidence-based care.
              </p>

              <p className="text-paragraph text-black">
                We are well-stocked, and provide specialised clinic services,
                including <span className="font-bold">wound care,</span> ear
                syringing,{" "}
                <span className="font-bold">professional baby clinic</span> with
                paediatric vaccines, and{" "}
                <span className="font-bold">full dispensary services</span>.
              </p>
            </div>
          </div>

          <ButtonLink href="#contact" cssClasses="tablet:place-self-start">
            Get In Touch
          </ButtonLink>
        </div>

        <div className="grid gap-10 w-full h-full tablet:gap-5 tablet:grid-cols-2 desktop:grid-cols-1">
          <div className="relative aspect-video w-full h-full rounded-[4px] overflow-hidden desktop:aspect-auto">
            <Image
              src="/images/about-us-1.jpg"
              alt="Robberg Pharmacy, Plettenberg Bay"
              fill
              className="object-cover desktop:h-full desktop:w-full"
            />
          </div>

          <div className="relative aspect-video w-full h-full rounded-[4px] overflow-hidden desktop:aspect-auto">
            <Image
              src="/images/about-us-2.jpg"
              alt="Robberg Pharmacy, Plettenberg Bay"
              fill
              className="object-cover desktop:h-full desktop:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
