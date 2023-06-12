"use client";
import { Project } from "../../../../utils/types/types";
import Image from "next/image";
import AnimUp from "@/components/animated/AnimUp";
import urlFor from "../../../../sanity/lib/urlFor";
import ProjectDetails from "./ProjectDetails";
import { useInView } from "react-intersection-observer";

interface IProps {
  project: Project;
  key: string;
}

function OneProject({ project }: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  console.log(inView);
  return (
    <div
      ref={ref}
      key={project._id}
      className="group flex w-screen flex-col items-center justify-center  px-5 py-0  md:h-screen md:py-0 lg:px-20"
    >
      <div className="z-10 flex h-36 w-full translate-y-12 mix-blend-exclusion lg:hidden">
        <AnimUp inView={inView} duration={1.5}>
          <h2 className="flex pt-5 text-left font-Humane text-[10rem] uppercase leading-[0.8] lg:m-0">
            {project.name}
          </h2>
        </AnimUp>
      </div>

      <div className="relative h-[220px] max-h-[600px] w-full max-w-5xl cursor-pointer overflow-hidden phone:h-[400px] md:h-[70%] lg:w-10/12">
        <Image
          className={`object-cover  `}
          src={urlFor(project.mainImage).url()}
          alt={
            project.mainImage?.alt
              ? project.mainImage.alt
              : "Main project Image"
          }
          fill
        />
      </div>

      <ProjectDetails inView={inView} project={project} />
    </div>
  );
}

export default OneProject;
