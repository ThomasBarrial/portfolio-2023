"use client";
import AnimUp from "../../animated/AnimUp";
import { useInView } from "react-intersection-observer";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import H1 from "@/components/global/titles/H1";
import Image from "next/image";
import { IServices } from "../../../../utils/types/types";

interface IProps {
  services: IServices[];
}

function Services({ services }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <LayoutSection className="justify-centern flex flex-col items-center pt-11  lg:flex-row-reverse">
      <div ref={ref}>
        <div className="flex h-full w-full flex-col items-start justify-start  font-Antonio md:flex-row">
          <div className="md:w-4/12">
            <AnimUp className="pt-5" inView={inView} duration={2}>
              <H1 title="MY SERVICES" />
            </AnimUp>
          </div>

          <div className=" flex w-full flex-col md:w-8/12">
            {services.map((s, index) => (
              <AnimUp
                inView={inView}
                duration={0.8}
                className={`${index === 0 ? "mt-0" : "mt-10"}`}
                key={s.name}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">{s.name}</h3>
                  <Image
                    className="mt-5 rotate-12 transform duration-500 group-hover:-rotate-[80deg]"
                    src="/Arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="mt-5">{s.description}</p>
                <div className={`mt-5 h-[1px] w-full bg-white lg:flex`} />
              </AnimUp>
            ))}
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}

export default Services;
