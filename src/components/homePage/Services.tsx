"use client";

import { useInView } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import AnimUp from "../animated/AnimUp";

function Services() {
  const services = ["DEVELOPEMENT", "DESIGN", "3D MOTION"];
  const ref = useRef(null);
  const inView = useInView(ref, {
    // margin: "0px 0px -200px 0px",
  });

  return (
    <div
      ref={ref}
      className="h-screen w-screen relative flex  flex-col lg:flex-row-reverse items-center justify-center px-5 lg:px-20"
    >
      <div className="w-full h-full font-Antonio flex flex-col justify-start lg:pt-32 pt-32 md:pt-20  md:pl-52 xl:pl-64 max-w-5xl pl-20 ">
        {inView && (
          <AnimUp duration={2}>
            <h3>SERVICES</h3>
          </AnimUp>
        )}
        {inView && (
          <AnimUp duration={2.5}>
            <p className="mt-2">
              I am an web and mobile developer, capable of creating cutting-edge
              websites and mobile applications using the latest technologies. I
              am passionate about creating innovative digital solutions to help
              my clients achieve their online business goals.
            </p>
          </AnimUp>
        )}
      </div>
      <div className="b w-full flex flex-col justify-end font-Humane text-[8rem] phone:text-[12rem] md:text-[12rem] leading-[0.75]">
        {inView && (
          <>
            {services.map((service, index) => {
              return (
                <div key={service}>
                  <AnimUp className="pt-2" duration={2 + index * 0.2}>
                    {service}
                  </AnimUp>
                </div>
              );
            })}
          </>
        )}
      </div>

      <div
        className={`hidden lg:flex h-[1px] w-[40%] right-20 bg-white absolute bottom-32`}
      />
    </div>
  );
}

export default Services;
