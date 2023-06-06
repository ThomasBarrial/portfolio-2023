import React from "react";

import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import { Project } from "../../../../utils/types/types";
import ProjectDescription from "./ProjectDescription";

interface IProps {
  projects: Project[];
}

function SelectedWork({ projects }: IProps) {
  console.log(projects[0].mainImage);

  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  return (
    <div className="h-screen  flex items-start justify-center">
      {projects.map((project, index) => {
        return (
          <div
            className="px-5 relative lg:px-20 pb-30 font-Antonio lg:pt-0 py-44  lg:h-screen flex flex-col justify-start pt-20 md:items-center bg-[#080808] w-screen"
            key={project._id}
          >
            <div className="w-full flex justify-between items-start mt-2">
              <h3 className="font-Humane text-8xl">{displayIndex(index)}</h3>
              <h3 className="w-full text-right text-xl">SELECTED WORK</h3>
            </div>
            <ProjectDescription project={project} />

            <Image
              className="mt-5 lg:mt-0 lg:max-w-5xl"
              src={urlFor(project.mainImage).url()}
              alt={
                project.mainImage?.alt
                  ? project.mainImage.alt
                  : "Main project Image"
              }
              width={1700}
              height={1000}
            />

            <div className=" absolute bottom-0 w-[90%] lg:w-1/2 pt-2">
              <h3 className="font-Humane text-[9rem] lg:text-[15rem] leading-[0.8] uppercase">
                {project.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedWork;
