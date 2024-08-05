import React from "react";
import { useInView } from "react-intersection-observer";
import { SanityImage } from "../../../../utils/types/types";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import { useScroll, motion } from "framer-motion";
import useParallax from "../../../../utils/useParallax";

function ProjectImage({ image, index }: { image: SanityImage; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  console.log(image.alt, inView);

  return (
    <div className="my-10 h-screen bg-red-200" ref={ref}>
      {/* {index === 0 && (
        <div
          className={`relative mb-10 h-[200px] max-h-[1000px] overflow-hidden lg:h-[700px] lg:w-full`}
        >
          <motion.div style={{ y }} className={`w-[105% relative h-[105%] `}>
            <Image
              className={`object-cover`}
              src={urlFor(image).url()}
              alt={image?.alt ? image.alt : "project Image"}
              fill
            />
          </motion.div>
        </div>
      )} */}

      <div
        className={`relative mb-10 h-[200px] max-h-[600px] w-8/12 transform ${
          index % 2 ? "translate-x-[50%]" : ""
        }  overflow-hidden`}
      >
        <Image
          className={`object-cover ${
            inView
              ? "translate-y-0"
              : "translate-y-300 transform transition duration-500"
          } `}
          src={urlFor(image).url()}
          alt={image?.alt ? image.alt : "project Image"}
          fill
        />
      </div>
    </div>
  );
}

export default ProjectImage;
