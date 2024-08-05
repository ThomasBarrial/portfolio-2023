"use client";

import React from "react";
import { Project } from "../../../utils/types/types";
import ProjectImage from "./oneWork/ProjectImage";

interface IProps {
  project: Project;
}

function ProjectImages({ project }: IProps) {
  console.log(project);
  return (
    <div className="w-full">
      {project.gallery && (
        <div className={`mt-5 max-w-[150rem] px-5 lg:mt-20 lg:px-20`}>
          {project.gallery.map((image, index) => (
            <div key={index}>
              <ProjectImage image={image} index={index} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectImages;
