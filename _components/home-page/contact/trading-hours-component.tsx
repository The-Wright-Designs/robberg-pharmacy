import generalData from "@/_data/general-data.json";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

export default function TradingHoursComponent({ cssClasses }: Props) {
  return (
    <div className={classNames("flex flex-col gap-7", cssClasses)}>
      <p className="text-subheading font-bold text-black">Trading hours</p>

      <div className="flex flex-col gap-3">
        {generalData.contact.tradingHours.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "grid grid-cols-2 desktop:grid-cols-[340px_1fr] gap-2 items-end pb-3 text-paragraph text-black",
              {
                "border-b border-black/25": item.showBorder,
              }
            )}
          >
            <p>{item.label}</p>
            <p className="">{item.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
