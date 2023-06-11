import AnimUp from "@/components/animated/AnimUp";
import React from "react";
import { Project } from "../../../../utils/types/types";

interface IProps {
  project: Project;
}

function ProjectDetails({ project }: IProps) {
  return (
    <div className="h-20 w-full pt-5 lg:pt-10">
      <AnimUp duration={1.5} y={100}>
        <div className="flex w-full flex-col items-end pb-10 font-Antonio  text-sm md:w-full  lg:flex-row">
          <div className="flex items-center lg:mr-5">
            <p className="mr-2 hidden opacity-50 md:flex">Completed</p>
            {new Date(project.date).toLocaleDateString("en-En", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center lg:mr-5">
            <p className="mr-2 hidden items-center opacity-50 md:flex">Role</p>
            {project.categories.map((c) => {
              return (
                <p className="flex" key={c._id}>
                  <span className="flex">&nbsp;</span>
                  {c.title}&nbsp;/
                </p>
              );
            })}
          </div>
          <div className="flex items-center lg:mr-5">
            <p className="mr-2 hidden opacity-50 md:flex">Technologies</p>
            {project.techno.map((t) => {
              return (
                <p className="flex" key={t._id}>
                  {" "}
                  <span className="flex">&nbsp;</span>
                  {t.title}&nbsp;/
                </p>
              );
            })}
          </div>
        </div>
      </AnimUp>
    </div>
  );
}

export default ProjectDetails;
