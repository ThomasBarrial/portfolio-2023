import PageTransition from "@/components/layout/PageTransition";
import { clientFetch } from "../../../sanity/lib/client";
import { getAllProject } from "../../../sanity/lib/queries";
import { Project } from "../../../utils/types/types";
import Scene from "@/components/work/Scene";
import { Canvas } from "@react-three/fiber";
import Items from "@/components/work/Items";

async function page() {
  const projects = await clientFetch(getAllProject);

  return (
    <main>
      <PageTransition>
        <Scene />
      </PageTransition>
    </main>
  );
}

export default page;
