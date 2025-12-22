import classNames from "classnames";

import generalData from "@/_data/general-data.json";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";

interface Props {
  cssClasses?: string;
}

export default function ContactInfoComponent({ cssClasses }: Props) {
  const { address } = generalData.contact;

  return (
    <div className={classNames("flex flex-col gap-10", cssClasses)}>
      <div className="grid gap-7 desktop:gap-5">
        <div className="flex flex-col gap-2 tablet:items-center tablet:flex-row">
          <p className="text-paragraph font-semibold text-black w-[100px] shrink-0">
            Phone:
          </p>
          <ShowPhoneNumber phoneType="main" />
        </div>

        <div className="flex flex-col gap-2 tablet:items-center tablet:flex-row">
          <p className="text-paragraph font-semibold text-black w-[100px] shrink-0">
            After Hours:
          </p>
          <ShowPhoneNumber phoneType="afterHours" />
        </div>

        <div className="flex flex-col gap-2 tablet:items-center tablet:flex-row">
          <p className="text-paragraph font-semibold text-black w-[100px] shrink-0">
            Accounts:
          </p>
          <ShowEmailAddress emailType="accounts" />
        </div>

        <div className="flex flex-col gap-2 tablet:items-center tablet:flex-row">
          <p className="text-paragraph font-semibold text-black w-[100px] shrink-0">
            Dispensary:
          </p>
          <ShowEmailAddress emailType="dispensary" />
          <p className="text-paragraph text-black">
            (Free deliveries around town)
          </p>
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row gap-2 items-start">
        <p className="text-paragraph font-semibold text-black w-[100px] shrink-0">
          Address:
        </p>
        <p className="text-paragraph text-black">{address}</p>
      </div>
    </div>
  );
}
