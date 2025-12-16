import classNames from "classnames";
import Image from "next/image";

interface Props {
  cssClasses?: string;
}

export default function ProductsComponent({ cssClasses }: Props) {
  return (
    <section className={classNames(cssClasses)}>
      <div className="grid gap-10 desktop:grid-cols-2">
        <div className="flex flex-col gap-10 w-full">
          <h2 className="text-[40px] font-semibold text-black">Products</h2>

          <div className="flex flex-col gap-5">
            <p className="text-subheading text-black">
              More than just another Plett pharmacy
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-paragraph text-black">
                At Robberg Pharmacy, we&apos;ve reimagined what a modern
                pharmacy in Plettenberg Bay can be.
              </p>

              <p className="text-paragraph text-black">
                Beyond prescription medications and medical aid support, we
                stock premium beauty products including:
              </p>

              <ul className="list-disc ml-6">
                <li className="text-paragraph text-black">Clarins</li>
                <li className="text-paragraph text-black">Revlon</li>
                <li className="text-paragraph text-black">Bioderma</li>
                <li className="text-paragraph text-black">WOW skincare</li>
                <li className="text-paragraph text-black">Mavala products</li>
              </ul>

              <p className="text-paragraph text-black">
                Our holistic health commitment includes homeopathic products
                from:
              </p>

              <ul className="list-disc ml-6">
                <li className="text-paragraph text-black">Solgar</li>
                <li className="text-paragraph text-black">DNA</li>
                <li className="text-paragraph text-black">Re-Vive</li>
              </ul>

              <p className="text-paragraph text-black">
                Our lifestyle range consists of:
              </p>

              <ul className="list-disc ml-6">
                <li className="text-paragraph text-black">
                  Fitflop &amp; Holster footwear
                </li>
                <li className="text-paragraph text-black">Emthunzini hats</li>
                <li className="text-paragraph text-black">Puzzles Galore</li>
                <li className="text-paragraph text-black">
                  Specialty Sperlari Chocolates &amp; Nougat
                </li>
              </ul>

              <p className="text-paragraph text-black">
                Whether you need expert pharmaceutical care, wound management,
                baby wellness services, or quality health products, Robberg
                Pharmacy combines personalised service with professional
                expertise.
              </p>

              <p className="text-paragraph text-black">
                Visit us at Beacon Island Centre and experience why we&apos;re
                Plettenberg Bay&apos;s pharmacy of choice.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 grid-cols-2 w-full h-full tablet:grid-cols-4 desktop:grid-cols-2 desktop:grid-rows-[1.75fr_1fr]">
          <div className="relative aspect-square w-full h-full">
            <Image
              src="/images/products-1.jpg"
              alt="Robberg Pharmacy Products - Puzzles"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative aspect-square w-full h-full">
            <Image
              src="/images/products-2.jpg"
              alt="Robberg Pharmacy Products - Hats and Accessories"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative aspect-square w-full h-full">
            <Image
              src="/images/products-3.jpg"
              alt="Robberg Pharmacy Products - Chocolates and Nougat"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative aspect-square w-full h-full">
            <Image
              src="/images/products-4.jpg"
              alt="Robberg Pharmacy Products - Skincare"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
