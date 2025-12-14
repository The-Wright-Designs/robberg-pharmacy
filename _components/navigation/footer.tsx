import Link from "next/link";
import Logo from "@/_components/ui/logo";
import navData from "@/_data/nav-data.json";

const Footer = () => {
  return (
    <footer className="bg-black w-full mt-20">
      <div className="px-5 pt-10 pb-5 flex flex-col gap-5 desktop:max-w-[1280px] desktop:mx-auto desktop:px-[60px] desktop:pt-10 desktop:pb-5">
        <div className="flex flex-col gap-10 items-center desktop:flex-row desktop:justify-between desktop:items-start desktop:gap-0">
          <div className="hidden desktop:flex flex-col gap-3">
            <p className="text-subheading text-white">Navigation</p>
            <nav className="flex flex-col gap-0.5 items-center desktop:items-start">
              {navData.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-paragraph text-white hover:text-white/80"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-10 items-center desktop:items-end desktop:order-2">
            <Logo />
            <p className="text-paragraph text-white text-center desktop:text-right">
              Designed &amp; developed by
              <br />
              <Link
                href="https://thewrightdesigns.co.za"
                className="text-white desktop:hover:text-white/80 ease-in-out duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <p className="text-paragraph text-white flex flex-col w-full items-center tablet:justify-center tablet:flex-row tablet:gap-1">
          © 2025 Robberg Pharmacy
          <span className="hidden tablet:block">|</span>
          <Link
            href="/"
            className="text-white desktop:hover:text-white/80 ease-in-out duration-300"
          >
            www.robbergpharmacy.co.za
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
