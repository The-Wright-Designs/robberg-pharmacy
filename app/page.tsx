import HeroComponent from "@/_components/home-page/hero/hero-component";
import AwardBanner from "@/_components/home-page/award-banner";
import AboutUs from "@/_components/home-page/about-us";
import ServicesComponent from "@/_components/home-page/services-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AwardBanner />
      <PageWrapper cssClasses="grid gap-15 mt-15">
        <AboutUs cssClasses="px-10" />
        <ServicesComponent />
        <h1>Heading</h1>
        <h3>Subheading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </PageWrapper>
    </div>
  );
}
