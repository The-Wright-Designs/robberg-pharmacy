"use client";

import classNames from "classnames";
import ContactInfoComponent from "@/_components/home-page/contact/contact-info-component";
import TradingHoursComponent from "@/_components/home-page/contact/trading-hours-component";
import ContactFormComponent from "@/_components/home-page/contact/contact-form-component";
import MapComponent from "@/_components/home-page/contact/map-component";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface Props {
  cssClasses?: string;
}

export default function ContactSectionComponent({ cssClasses }: Props) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      useRecaptchaNet
    >
      <div className={classNames("flex flex-col gap-15 w-full", cssClasses)}>
        <div className="flex flex-col desktop:flex-row gap-10 w-full">
          <ContactInfoComponent />
          <TradingHoursComponent />
        </div>

        <div className="flex flex-col tablet:flex-row gap-10 w-full">
          <ContactFormComponent />
          <div className="flex-1">
            <MapComponent cssClasses="rounded-md h-full aspect-square tablet:aspect-auto tablet:min-h-[400px]" />
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
