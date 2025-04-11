import PageTransition from "@/components/layout/PageTransition";
import {
  getAllProject,
  getAllProjectCategories,
  getAllSocialMedia,
} from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import { cache } from "react";
import ProjectList from "@/components/work/ProjectList";
import Indicator from "@/components/work/Indicator";
import Footer from "@/components/layout/footer/Footer";
import List from "@/components/work/List";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

async function page() {
  const projects = await clientFetch(getAllProject);
  const socialMedia = await clientFetch(getAllSocialMedia);
  const categories = await clientFetch(getAllProjectCategories);

  return (
    <main>
      <PageTransition>
        {/* <Indicator projects={projects} /> */}
        {/* <ProjectList projects={projects} socialMedia={socialMedia} /> */}
        <List projects={projects} categories={categories} />
        <Footer socialMedia={socialMedia} />
      </PageTransition>
    </main>
  );
}

export default page;
