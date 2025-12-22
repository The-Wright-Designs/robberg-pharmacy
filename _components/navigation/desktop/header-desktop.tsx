import Link from "next/link";
import navData from "@/_data/nav-data.json";
import Logo from "@/_components/ui/logo";
import classNames from "classnames";

interface DesktopHeaderProps {
  cssClasses?: string;
}

const HeaderDesktop = ({ cssClasses }: DesktopHeaderProps) => {
  return (
    <div className={classNames(cssClasses)}>
      <div className="flex items-end justify-between">
        <Link href="/" className="hover:opacity-90">
          <Logo />
        </Link>
        <nav className="flex gap-3">
          {navData.map((item) => (
            <Link
              key={item.title}
              className="text-white text-base font-light hover:text-white/75"
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
