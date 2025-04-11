import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../../../../utils/types/types";
import urlFor from "../../../../sanity/lib/urlFor";
import { useInView } from "react-intersection-observer";
import AnimUp from "@/components/animated/AnimUp";

interface IProps {
  project: Project;
  index: number;
  key: string;
}

function OneProject({ project, index, key }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`${
        index % 3 === 0 ? "w-full" : "w-full lg:w-1/2"
      } group flex cursor-pointer flex-col items-center border border-white border-opacity-20 p-4 lg:p-10`}
    >
      <Link href={`/work/${project.slug.current}`} key={key}>
        <AnimUp inView={inView} duration={1.2} className="flex justify-between">
          <h2 className="mb-2 font-Antonio text-xl font-bold uppercase">
            {project.name}
          </h2>
          <Image
            className="rotate-12 transform duration-500 group-hover:-rotate-[80deg]"
            src="/Arrow.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </AnimUp>
        <AnimUp inView={inView} duration={2}>
          {/* <div
            className={`relative overflow-hidden ${
              inView ? "scale-100" : "scale-20"
            }  w-full`}
          > */}
          <Image
            className={`transform  object-cover opacity-100 transition duration-700 ease-out hover:scale-[97%] group-hover:opacity-100 lg:opacity-80`}
            src={urlFor(project.mainImage).url()}
            alt={
              project.mainImage?.alt
                ? project.mainImage.alt
                : "Main project Image"
            }
            width={1700}
            height={1000}
          />
          {/* </div> */}
        </AnimUp>

        <div className="mt-2 flex justify-between space-x-2">
          <AnimUp inView={inView} duration={2}>
            <div className="flex w-6/12 font-Antonio text-base">
              {project.categories.map((c) => {
                return (
                  <p className="flex" key={c._id}>
                    <span className="flex">&nbsp;</span>
                    {c.title}&nbsp;/
                  </p>
                );
              })}
            </div>
          </AnimUp>

          <AnimUp
            inView={inView}
            duration={2}
            className="flex w-full items-start justify-end  font-Antonio text-base lg:mr-5"
          >
            <p className="mr-2 hidden opacity-50 md:flex">Completed</p>
            {new Date(project.date).toLocaleDateString("en-En", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </AnimUp>
        </div>
      </Link>
    </div>
  );
}

export default OneProject;
