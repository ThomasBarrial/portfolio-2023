import PageTransition from "@/components/layout/PageTransition";
import { clientFetch } from "../../../sanity/lib/client";
import { getAllProject } from "../../../sanity/lib/queries";
import { Project } from "../../../utils/types/types";
import Scene from "@/components/work/Scene";

async function page() {
  const projects = await clientFetch(getAllProject);

  const projectsName = [
    "Project1",
    "Project2",
    "Project3",
    "Project4",
    "Project5",
    "Project1",
    "Project2",
    "Project3",
    "Project4",
    "Project5",
  ];
  return (
    <main>
      <PageTransition>
        <Scene projects={projects} />
        {projectsName.map((project: string, index) => {
          return (
            <section
              className="relative flex h-screen w-screen items-center px-20 font-Humane text-[20rem] uppercase"
              key={index}
            ></section>
          );
        })}
      </PageTransition>
    </main>
  );
}

export default page;
