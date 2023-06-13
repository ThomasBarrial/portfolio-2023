"use client";
import { useRef } from "react";
import AnimUp from "../../animated/AnimUp";
import { useInView } from "react-intersection-observer";
import layoutSectionClass from "@/components/layout/navbar/utils/layoutSectionClass";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const services = ["DEVELOPEMENT", "DESIGN", "3D MOTION"];

  return (
    <LayoutSection className="flex flex-col items-center justify-center lg:flex-row-reverse">
      <div
        ref={ref}
        className="flex h-full w-full max-w-5xl flex-col justify-start pl-20 pt-32 font-Antonio  md:pl-52 md:pt-20 lg:pt-32 xl:pl-64 "
      >
        <AnimUp inView={inView} duration={1}>
          <h3>SERVICES</h3>
        </AnimUp>

        <AnimUp inView={inView} duration={1.5}>
          <p className="mt-2">
            {` My name is Thomas, and I'm a creative front-end developer and web
            designer. My goal is to showcase products, brands, and projects
            online through innovative, unique, original, and aesthetic user
            experiences. Working with me would allow you to bring your creative
            vision to life online, captivate your target audience, and provide a
            memorable and engaging user experience`}
          </p>
        </AnimUp>
      </div>
      <div className="b flex w-full flex-col justify-end font-Humane text-[8rem] leading-[0.75] phone:text-[12rem] md:text-[12rem]">
        <>
          {services.map((service, index) => {
            return (
              <div key={service}>
                <AnimUp
                  inView={inView}
                  className="pt-2"
                  duration={1.5 + index * 0.1}
                >
                  {service}
                </AnimUp>
              </div>
            );
          })}
        </>
      </div>

      <div
        className={`absolute bottom-32 right-20 hidden h-[1px] w-[40%] bg-white lg:flex`}
      />
    </LayoutSection>
  );
}

export default Services;
