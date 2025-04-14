import PageTransition from "@/components/layout/PageTransition";
import {
  getAllProject,
  getAllProjectCategories,
  getAllSocialMedia,
} from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import { cache } from "react";
import Footer from "@/components/layout/footer/Footer";
import List from "@/components/work/List";
import globalMetadata from "../../../utils/metaData";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export const metadata = {
  ...globalMetadata,
  title: "My Work – Thomas Barrial",
  description:
    "Discover selected web development and UI/UX design projects by Thomas Barrial. Built with modern frameworks like React, Next.js, and Three.js.",
};

async function page() {
  const projects = await clientFetch(getAllProject);
  const socialMedia = await clientFetch(getAllSocialMedia);
  const categories = await clientFetch(getAllProjectCategories);

  return (
    <main>
      <PageTransition>
        <List projects={projects} categories={categories} />
        <Footer socialMedia={socialMedia} />
      </PageTransition>
    </main>
  );
}

export default page;
