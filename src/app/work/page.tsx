import MasqueTest from "@/components/MasqueTest";
import PageTransition from "@/components/layout/PageTransition";
import { getAllProject, getAllSocialMedia } from "../../../sanity/lib/queries";
import { client } from "../../../sanity/lib/client";
import { cache } from "react";
import Footer from "@/components/homePage/footer/Footer";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

async function page() {
  const projects = await clientFetch(getAllProject);
  const socialMedia = await clientFetch(getAllSocialMedia);
  return (
    <main>
      <PageTransition>
        <MasqueTest projects={projects} socialMedia={socialMedia} />
        {/* <Footer socialMedia={socialMedia} /> */}
      </PageTransition>
    </main>
  );
}

export default page;
