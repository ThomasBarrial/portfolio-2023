"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Category, Project } from "../../../utils/types/types";
import H1 from "../global/titles/H1";
import OneProject from "../homePage/selectedWork2/OneProject";
import Image from "next/image";
import ProjectBulletList from "./ProjectBulletList";

interface IProps {
  projects: Project[];
  categories: Category[];
}

function List({ projects, categories }: IProps) {
  const [categorySelected, setCategorySelected] = useState<Category>(
    categories[0]
  );
  const [isBulletList, setIsBulletList] = useState(true);

  const filteredProjects = useMemo(() => {
    if (!categorySelected) return projects;
    return projects.filter((project) =>
      project.categories.some((c) => c.title === categorySelected.title)
    );
  }, [categorySelected, projects]);

  const projectCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        counts[category.title] = (counts[category.title] || 0) + 1;
      });
    });
    return counts;
  }, [projects]);

  const onClick = (c: Category) => {
    if (categorySelected !== c) {
      setCategorySelected(c);
    }
  };

  return (
    <div className="w-full max-w-[150rem] px-5  lg:px-20 lg:pt-20">
      <div className="sticky top-0 z-10 flex flex-col justify-between pt-24 mix-blend-difference md:top-24 md:flex-row md:items-end md:pt-0">
        <H1 title="PROJECTS" />
        <div className="flex flex-col items-end  space-x-5 ">
          <div className="relative mb-4 flex w-20 items-center justify-between mix-blend-difference ">
            <div
              className={`absolute  h-8 w-8 ${
                isBulletList ? "translate-x-0 " : "translate-x-[50px] "
              }  transform border border-b-2 border-white duration-500`}
            />
            <button
              className={`${
                isBulletList ? "scale-75 opacity-100" : "scale-100 opacity-50"
              } transform pl-[2px]  duration-500`}
              type="button"
              onClick={() => setIsBulletList(true)}
            >
              <Image
                src="/formatListBulleted.svg"
                alt="arrow"
                width={28}
                height={28}
              />
            </button>
            <button
              className={`${
                !isBulletList ? "scale-75 opacity-100" : "scale-100 opacity-50"
              } transform pl-[2px]  duration-500`}
              type="button"
              onClick={() => setIsBulletList(false)}
            >
              <Image
                src="/formatSquare.svg"
                alt="arrow"
                width={28}
                height={28}
              />
            </button>
          </div>
          <div className="mt-2 flex items-center space-x-5 font-Antonio text-base underline md:mt-0">
            {categories.map((c) => (
              <button onClick={() => onClick(c)} key={c._id}>
                {c.title} ({projectCounts[c.title] || 0})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {isBulletList ? (
          <div className=" mt-5 flex min-h-screen w-full animate-fadeIn flex-col lg:mt-10">
            {filteredProjects.map((project: Project, index) => {
              return (
                <ProjectBulletList
                  index={index}
                  project={project}
                  key={project._id}
                />
              );
            })}
          </div>
        ) : (
          <div className=" mt-5 flex w-full animate-fadeIn flex-col flex-wrap lg:mt-10 lg:flex-row">
            {filteredProjects.map((project: Project, index) => {
              return (
                <OneProject index={index} project={project} key={project._id} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
