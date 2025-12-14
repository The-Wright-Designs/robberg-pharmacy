import Image from "next/image";
import classNames from "classnames";

interface LogoProps {
  cssClasses?: string;
}

const Logo = ({ cssClasses }: LogoProps) => {
  return (
    <div className={classNames("flex gap-3 items-center", cssClasses)}>
      <Image
        src="/logo/cross.png"
        alt="Spar Pharmacy logo"
        width={31}
        height={32}
        className="shrink-0"
      />
      <div>
        <h1 className="text-[25px] text-white">Robberg Pharmacy</h1>
        <div className="flex gap-[3px] items-center">
          <span className="text-[8px] font-normal text-white">at</span>
          <Image
            src="/logo/spar.png"
            alt="SPAR logo"
            width={30}
            height={8}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
