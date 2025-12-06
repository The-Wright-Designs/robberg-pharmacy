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
        alt="Pharmacy Cross"
        width={31}
        height={32}
        className="shrink-0"
      />
      <div className="flex flex-col gap-1 items-start justify-end">
        <h1 className="text-[25px] text-white">Robberg Pharmacy</h1>
        <div className="flex gap-1">
          <span className="text-[8px] text-white">at</span>
          <Image src="/logo/spar.png" alt="SPAR" width={38} height={8} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
