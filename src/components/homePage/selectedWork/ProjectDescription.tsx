"use client";
import React from "react";
import { Project } from "../../../../utils/types/types";

interface IProps {
  project: Project;
}

function ProjectDescription({ project }: IProps) {
  return (
    <div className="flex lg:w-1/2 flex-col phone:flex-row w-full">
      <div className="text-sm lg:text-base phone:w-[60%]">
        <p>
          {new Date(project.date).toLocaleDateString("en-En", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="flex">
          {project.categories.map((c) => {
            return <p key={c._id}>{c.title}/&nbsp;</p>;
          })}
        </div>

        <div className="flex">
          {project.techno.map((t) => {
            return <p key={t._id}>{t.title}/&nbsp;</p>;
          })}
        </div>
      </div>

      {/* <p className=" pl-20 phone:pl-0 phone:w-[40%] mt-5 phone:mt-0 text-sm lg:text-base">
        {project.description}
      </p> */}
    </div>
  );
}

export default ProjectDescription;
