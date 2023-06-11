"use client";
import { useRef } from "react";
import AnimUp from "../animated/AnimUp";

function Services() {
  const services = ["DEVELOPEMENT", "DESIGN", "3D MOTION"];

  return (
    <div className="relative z-20 flex h-screen w-screen  flex-col items-center justify-center bg-background px-5 lg:flex-row-reverse lg:px-20">
      <div className="flex h-full w-full max-w-5xl flex-col justify-start pl-20 pt-32 font-Antonio  md:pl-52 md:pt-20 lg:pt-32 xl:pl-64 ">
        <AnimUp duration={1}>
          <h3>SERVICES</h3>
        </AnimUp>

        <AnimUp duration={1.5}>
          <p className="mt-2">
            I am an web and mobile developer, capable of creating cutting-edge
            websites and mobile applications using the latest technologies. I am
            passionate about creating innovative digital solutions to help my
            clients achieve their online business goals.
          </p>
        </AnimUp>
      </div>
      <div className="b flex w-full flex-col justify-end font-Humane text-[8rem] leading-[0.75] phone:text-[12rem] md:text-[12rem]">
        <>
          {services.map((service, index) => {
            return (
              <div key={service}>
                <AnimUp className="pt-2" duration={1.5 + index * 0.1}>
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
    </div>
  );
}

export default Services;
