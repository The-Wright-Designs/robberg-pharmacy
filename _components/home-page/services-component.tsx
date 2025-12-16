import classNames from "classnames";
import Image from "next/image";

interface Props {
  cssClasses?: string;
}

export default function ServicesComponent({ cssClasses }: Props) {
  const services = [
    {
      icon: "/icons/dispensary.png",
      title: "Dispensary",
      subtitle: "Graduate pharmacists only",
    },
    {
      icon: "/icons/wound-clinic.png",
      title: "Wound Clinic",
      subtitle: null,
    },
    {
      icon: "/icons/baby-clinic.png",
      title: "Baby Clinic",
      subtitle: "Tuesdays only",
    },
  ];

  return (
    <section
      className={classNames(
        "-mx-5 bg-black py-15 px-5 desktop:px-15 desktop:-mx-10",
        cssClasses
      )}
    >
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-[40px] font-semibold text-white">Services</h2>

        <div className="grid place-items-center w-full tablet:grid-cols-2 desktop:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={classNames(
                "rounded-[40px] h-full overflow-hidden phone:w-[320px] min-[1360px]:w-[363px] desktop:grid grid-cols-2",
                {
                  "tablet:col-span-2 desktop:col-span-1": index === 2,
                }
              )}
            >
              <div className="px-7 py-5 bg-white flex items-center justify-center">
                <div className="h-[100px]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={110}
                    height={80}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>

              <div className="bg-red/80 p-7 h-full flex flex-col items-center desktop:items-start desktop:justify-center">
                <h3 className="text-[20px] font-bold text-white">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-[16px] font-light text-white">
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
