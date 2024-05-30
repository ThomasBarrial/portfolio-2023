"use client";

import Link from "next/link";
import { Project } from "../../../utils/types/types";
import Image from "next/image";
import urlFor from "../../../sanity/lib/urlFor";
import AnimUp from "../animated/AnimUp";
import { useInView } from "react-intersection-observer";

interface IProps {
  project: Project;
  index: number;
  key: string;
}

function ProjectBulletList({ project, index, key }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="cursor-pointer" ref={ref}>
      <AnimUp
        className={`border-b border-white border-opacity-50 duration-1000 hover:border-opacity-100`}
        inView={inView}
        duration={1.5}
      >
        <Link
          href={`/work/${project.slug.current}`}
          className={`group w-full  p-5`}
          key={key}
        >
          <div className="flex justify-between">
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
          </div>

          <div className="mt-2 flex justify-between space-x-2">
            <div className="flex w-6/12 font-Antonio text-sm">
              {project.categories.map((c) => {
                return (
                  <p className="flex" key={c._id}>
                    <span className="flex">&nbsp;</span>
                    {c.title}&nbsp;/
                  </p>
                );
              })}
            </div>
            <div className="flex w-6/12 items-start justify-end font-Antonio text-sm lg:mr-5">
              <p className="mr-2 hidden opacity-50 md:flex">Completed</p>
              {new Date(project.date).toLocaleDateString("en-En", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </Link>
      </AnimUp>
    </div>
  );
}

export default ProjectBulletList;
