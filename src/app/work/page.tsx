import PageTransition from "@/components/layout/PageTransition";
import { clientFetch } from "../../../sanity/lib/client";
import { getAllProject } from "../../../sanity/lib/queries";
import { Project } from "../../../utils/types/types";
import Scene from "@/components/work/Scene";

async function page() {
  const projects = await clientFetch(getAllProject);
  return (
    <main>
      <PageTransition>
        <Scene projects={projects} />
        {/* {projects.map((project: Project) => {
          return (
            <section
              className="relative flex h-screen w-screen items-center px-20 font-Humane text-[20rem]"
              key={project._id}
            >
              {project.name}
            </section>
          );
        })} */}
      </PageTransition>
    </main>
  );
}

export default page;
