"use client";
import React from "react";
import ParallaxText from "./ParralaxText";
import AnimUp from "@/components/animated/AnimUp";
import { useInView } from "react-intersection-observer";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <LayoutSection className="flex flex-col  items-end justify-center">
      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-6"
      >
        <ParallaxText baseVelocity={-5}>
          USER EXPERIENCE TECHNOLOGIES PERFOMANCES
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          USER EXPERIENCE TECHNOLOGIES PERFOMANCES
        </ParallaxText>
      </div>
      <div className=" w-10/12 font-Antonio text-xl leading-relaxed phone:w-8/12 md:w-5/12">
        <AnimUp inView={inView}>
          <p>
            A good user experience is vital for online business success. It
            includes easy navigation, aesthetic design, and fast performance,
            which build trust, increase engagement, and drive sales. Using the
            latest technologies ensures compatibility, accessibility,
            development ease, and security, providing innovation and quality.
          </p>
        </AnimUp>
      </div>
      <div
        className={`absolute bottom-32 left-10 h-[1px] w-1/2 bg-white md:left-20 md:w-[40%] `}
      />
    </LayoutSection>
  );
}

export default Experience;
