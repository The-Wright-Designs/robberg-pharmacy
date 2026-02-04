import HeroComponent from "@/_components/home-page/hero/hero-component";
import AwardBanner from "@/_components/home-page/award-banner";
import AboutUs from "@/_components/home-page/about-us";
import ServicesComponent from "@/_components/home-page/services-component";
import ProductsComponent from "@/_components/home-page/products-component";
import StaffComponent from "@/_components/home-page/staff/staff-component";
import ReviewsComponent from "@/_components/home-page/reviews/reviews-component";
import ContactSectionComponent from "@/_components/home-page/contact/contact-section-component";
import PageWrapper from "@/_lib/utils/page-wrapper";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AwardBanner />
      <PageWrapper cssClasses="flex flex-col gap-15 mt-15">
        <div id="about" className="scroll-mt-24" />
        <AboutUs />
        <div id="services" className="scroll-mt-24" />
        <ServicesComponent />
        <div id="products" className="scroll-mt-24" />
        <ProductsComponent />
        <div id="staff" className="scroll-mt-24" />
        <StaffComponent />
        <div id="reviews" className="scroll-mt-24" />
        <ReviewsComponent />
        <div id="contact" className="scroll-mt-24" />
        <ContactSectionComponent />
      </PageWrapper>
    </div>
  );
}
