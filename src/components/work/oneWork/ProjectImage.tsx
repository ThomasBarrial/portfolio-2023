import React from "react";
import { useInView } from "react-intersection-observer";
import { SanityImage } from "../../../../utils/types/types";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";

function ProjectImage({ image }: { image: SanityImage }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // console.log(inView);
  return (
    <div ref={ref}>
      <div
        className={`relative ${
          inView ? "scale-100" : "scale-[0.95]"
        } mb-10 h-[200px] max-h-[1000px] w-full transform transition duration-700 md:h-[450px] lg:h-[420px] xl:h-[500px] `}
      >
        <Image
          className={`object-cover`}
          src={urlFor(image).url()}
          alt={image?.alt ? image.alt : "project Image"}
          fill
        />
      </div>
    </div>
  );
}

export default ProjectImage;
