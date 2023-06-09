"use client";
import ComeUpText from "@/components/animated/ComeUpText";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import Link from "next/link";
import { SocialMedia } from "../../../../utils/types/types";
import AnimUp from "@/components/animated/AnimUp";
import { useInView } from "react-intersection-observer";

interface IProps {
  socialMedia: SocialMedia[];
}

function Footer({ socialMedia }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <LayoutSection className="flex flex-col items-center justify-center">
      <h2 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-Humane text-[10rem] leading-[0.8] opacity-5 md:text-[25rem]">{`LET'S WORK`}</h2>
      <div
        ref={ref}
        className="z-10 flex w-6/12 flex-col items-center justify-center  text-center font-Antonio text-2xl uppercase leading-relaxed"
      >
        <AnimUp inView={inView}>
          <p className="mb-10">
            {`What do you think about embarking on a remarkable journey of creation
        together ? WANT TO DISCUSS A NEW PROJECT ?`}
          </p>
        </AnimUp>
        <AnimUp inView={inView}>
          <Link
            className="group flex h-12 w-48 flex-col overflow-hidden rounded-full bg-white py-1  text-background"
            href="/contact"
          >
            <p className="transform transition duration-500 group-hover:-translate-y-10">
              CONTACT ME
            </p>
            <p className="-translate-y-1 transform transition duration-500 group-hover:-translate-y-10">
              CONTACT ME
            </p>
          </Link>
        </AnimUp>
      </div>
      <div className="bpx-5 absolute bottom-10 flex w-full justify-between font-Antonio lg:px-20 ">
        <AnimUp inView={inView}>
          <div className="flex">
            <p>@edition2023/develop & design by Thomas barrial</p>
            <p className="ml-5">credit</p>
          </div>
        </AnimUp>
        <AnimUp inView={inView}>
          <div className="flex underline">
            {socialMedia.map((item) => {
              return (
                <a href={item.link} key={item._id}>
                  <ComeUpText text={item.name} />
                </a>
              );
            })}
          </div>
        </AnimUp>
      </div>
    </LayoutSection>
  );
}

export default Footer;
