import StaffCard from "@/_components/home-page/staff/staff-card";
import generalData from "@/_data/general-data.json";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  cssClasses?: string;
}

export default function StaffComponent({ cssClasses }: Props) {
  return (
    <section className={classNames(cssClasses)}>
      <h2 className="text-heading font-semibold text-black mb-10">Staff</h2>

      <div className="grid justify-center gap-10 w-full tablet:grid-cols-2 tablet:justify-items-center desktop:grid-cols-[292px_1fr]">
        {generalData.staff.map((member, index) => (
          <StaffCard
            key={index}
            image={member.image}
            staffName={member.staffName}
            qualifications={member.qualifications}
            bio={member.bio}
            flipImage={
              index === 5 ? false : index === 6 ? true : index % 2 === 1
            }
            cssClasses={classNames({
              "desktop:col-span-2": index < 5,
              "desktop:col-start-2 desktop:row-start-6 desktop:row-span-1":
                index === 5,
            })}
            index={index}
          />
        ))}
        <div className="rounded-[40px] overflow-hidden max-w-[500px] shadow-md bg-white tablet:max-w-[400px] tablet:min-w-[400px] desktop:col-start-1 desktop:row-start-6 desktop:row-span-2 desktop:min-w-auto">
          <div className="relative aspect-[611/1280]">
            <Image
              src="/images/staff/group-staff.jpg"
              alt="Robberg Pharmacy staff"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-5 py-10 flex flex-col gap-3 items-center">
            <h3 className="text-[24px] font-semibold text-black text-center">
              Robberg Pharmacy Staff
            </h3>
            <p>Nov 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
