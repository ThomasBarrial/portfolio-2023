"use client";
import AnimUp from "../../animated/AnimUp";
import { useInView } from "react-intersection-observer";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import Line from "@/components/layout/Line";
import H1 from "@/components/global/titles/H1";
import Image from "next/image";
import { IServices } from "../../../../utils/types/types";
import React, { useEffect } from "react";

interface IProps {
  services: IServices[];
}

function Services({ services }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [sortedArray, setSortedArray] = React.useState<IServices[]>([]);

  useEffect(() => {
    const sorted = [...services].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setSortedArray(sorted);
  }, [services]);

  return (
    <LayoutSection className="flex flex-col items-center justify-center  py-20 lg:flex-row-reverse lg:py-0">
      <div ref={ref}>
        <div className="flex h-full w-full flex-col items-start justify-start  font-Antonio md:flex-row">
          <div className="md:w-4/12">
            <AnimUp className="pt-5" inView={inView} duration={2}>
              <H1 title="MY SERVICES" />
            </AnimUp>
          </div>

          <div className=" mt-10 flex w-full flex-col space-y-10 md:w-8/12">
            {sortedArray.map((s, index) => (
              <AnimUp inView={inView} duration={1.5} className="" key={s.name}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl lg:text-2xl">{s.name}</h3>
                </div>
                <p className="ml-10 mt-5 lg:ml-0">{s.description}</p>
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
