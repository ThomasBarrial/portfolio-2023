"use client";

import AnimUp from "@/components/animated/AnimUp";

import React from "react";
import { useInView } from "react-intersection-observer";
import { SocialMedia } from "../../../../utils/types/types";
import ComeUpText from "@/components/animated/ComeUpText";

interface IProps {
  socialMedia: SocialMedia[];
}

function Footer({ socialMedia }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className="flex w-full flex-col-reverse justify-between px-5 py-10 font-Antonio md:flex-row lg:px-20 "
    >
      <AnimUp className="mt-5 md:mt-0" inView={inView}>
        <div className="flex">
          <p>@edition2023/develop & design by Thomas barrial</p>
        </div>
      </AnimUp>
      <AnimUp inView={inView}>
        <div className="flex justify-between space-x-5 underline">
          {socialMedia.map((item) => {
            return (
              <a className="mx-4" href={item.link} key={item._id}>
                <ComeUpText text={item.name} />
              </a>
            );
          })}
        </div>
      </AnimUp>
    </div>
  );
}

export default Footer;
