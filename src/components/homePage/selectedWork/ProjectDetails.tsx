import AnimUp from "@/components/animated/AnimUp";
import React from "react";
import { Project, SocialMedia } from "../../../../utils/types/types";
import ComeUpText from "@/components/animated/ComeUpText";

interface IProps {
  project: Project;
  isDesktopClicked: boolean;
}

function ProjectDetails({ project, isDesktopClicked }: IProps) {
  return (
    <div
      className={`mt-5 h-32 w-full transform overflow-hidden pt-10  duration-1000 lg:mt-10`}
    >
      <div
        className={`${
          isDesktopClicked ? "-translate-y-20" : "max-w-5xl -translate-y-10"
        } transform  duration-1000`}
      >
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
      </div>
    </div>
  );
}

export default ProjectDetails;
