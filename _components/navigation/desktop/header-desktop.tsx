import Link from "next/link";
import navData from "@/_data/nav-data.json";
import Logo from "@/_components/ui/logo";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames("bg-black py-7 px-[60px] border-white border-b-4 shadow-[0px_4px_4px_rgba(0,0,0,0.15)]", cssClasses)}>
      <div className="flex items-center justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo />
        </Link>

        <nav className="flex gap-3 items-end">
          {navData.map((item) => (
            <Link
              key={item.title}
              className="text-white text-base font-light desktop:hover:text-blue"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default HeaderDesktop;
