import HeaderDesktop from "./desktop/header-desktop";
import { HeaderMobile } from "./mobile/header-mobile";

const Header = () => {
  return (
    <header className="top-0 sticky bg-dark-blue z-20">
      <HeaderDesktop cssClasses="hidden desktop:block" />
      <HeaderMobile cssClasses="desktop:hidden border-b border-white" />
    </header>
  );
};

export default Header;
