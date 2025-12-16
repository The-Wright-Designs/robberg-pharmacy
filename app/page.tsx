import HeroComponent from "@/_components/home-page/hero/hero-component";
import AwardBanner from "@/_components/home-page/award-banner";
import AboutUs from "@/_components/home-page/about-us";
import ServicesComponent from "@/_components/home-page/services-component";
import ProductsComponent from "@/_components/home-page/products-component";
import StaffComponent from "@/_components/home-page/staff/staff-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AwardBanner />
      <PageWrapper cssClasses="grid gap-15 mt-15">
        <AboutUs />
        <ServicesComponent />
        <ProductsComponent />
        <StaffComponent />
      </PageWrapper>
    </div>
  );
}
