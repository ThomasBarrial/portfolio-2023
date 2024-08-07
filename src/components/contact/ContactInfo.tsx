"use client";

import React from "react";
import { SocialMedia } from "../../../utils/types/types";
import ComeUpText from "../animated/ComeUpText";
import TimeZoneComponent from "../TimeZoneComponent";
import AnimUp from "../animated/AnimUp";
import { useInView } from "react-intersection-observer";

interface IProps {
  socialMedia: SocialMedia[];
}

function ContactInfo({ socialMedia }: IProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div
      ref={ref}
      className="flex w-full flex-col font-Antonio  md:w-1/4 md:pl-10  lg:pl-20 "
    >
      <div>
        <AnimUp duration={2} inView={inView}>
          <h3 className="bold text-xl  opacity-50">CONTACT DETAILS</h3>
        </AnimUp>
        <div className="mt-5 flex flex-col space-y-1">
          <AnimUp duration={2.2} inView={inView}>
            <p>+33 07 78 02 28 23</p>
          </AnimUp>
          <AnimUp duration={2.4} inView={inView}>
            <p>thomas@gmail.com</p>
          </AnimUp>
          <AnimUp duration={2.6} inView={inView}>
            <p>Location: France</p>
          </AnimUp>
        </div>
      </div>

      <div>
        <AnimUp duration={2} inView={inView}>
          <h3 className="bold mt-10 text-xl opacity-50">SOCIALS</h3>
        </AnimUp>
        <div className="mt-3 flex flex-col space-y-2 underline">
          {socialMedia.map((item) => {
            return (
              <a className="" href={item.link} key={item._id}>
                <AnimUp duration={2.2} inView={inView}>
                  <ComeUpText text={item.name} />
                </AnimUp>
              </a>
            );
          })}
        </div>
      </div>

      <TimeZoneComponent />
    </div>
  );
}

export default ContactInfo;
