"use client";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import useParallax from "../../../../utils/useParallax";
import Link from "next/link";

function AboutSection() {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, -1400, 250);

  return (
    <LayoutSection className="flex items-center justify-center font-Antonio">
      <div className="relative h-[90%] w-full overflow-hidden">
        <motion.div style={{ y }} className={`w-[105% relative h-[105%] `}>
          <Image
            className={`object-cover `}
            src="/image/aboutMontagne.webp"
            fill
            alt="AboutMe"
            priority
          />
        </motion.div>
        <p className="absolute left-5 top-10 w-8/12 text-sm md:text-base lg:left-10 lg:w-6/12 ">
          I am an enthusiast of extreme sports and what I love about these
          sports is the creative aspect and the fact that each athlete has their
          own identity and style. Over two years ago, my passion for technology
          caught up with me. Since then, I have been training in web
          development, and my current goal is to create websites that reflect
          the values of the sports i pratice: creativity, originality, and
          technical skill.
        </p>
        <h2 className="-bottom-22 absolute bottom-1/2 left-1/2 w-full -translate-x-1/2 translate-y-1/2  text-center font-Humane text-[10rem] leading-[0.9] opacity-10 md:text-[20rem]">
          ABOUT ME
        </h2>
        <Link
          className="group absolute bottom-28 right-5 transform rounded-full bg-white bg-opacity-10 px-4 py-2 mix-blend-difference duration-500 ease-in-out  hover:bg-opacity-80 hover:text-background md:bottom-10 lg:right-10"
          href="/about"
        >
          Learn more about me
        </Link>
      </div>
    </LayoutSection>
  );
}

export default AboutSection;
