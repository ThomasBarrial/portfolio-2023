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
        className={` ${
          inView ? "scale-100" : "scale-[0.95]"
        }  transform transition duration-700 `}
      >
        <Image
          className={``}
          src={urlFor(image).url()}
          alt={image?.alt ? image.alt : "project Image"}
          width={1700}
          height={1000}
        />
      </div>
    </div>
  );
}

export default ProjectImage;
