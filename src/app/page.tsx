import MacBook from "@/components/homePage/macbook/Macbook";
import Services from "@/components/homePage/services/Services";
import Header from "@/components/homePage/header/Header";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import {
  getAllPosts,
  getAllProject,
  getAllSocialMedia,
} from "../../sanity/lib/queries";
import SelectedWork from "@/components/homePage/selectedWork/SelectedWork";

import PageTransition from "@/components/layout/PageTransition";
import AboutSection from "@/components/homePage/about/AboutSection";
import Footer from "@/components/homePage/footer/Footer";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const projects = await clientFetch(getAllProject);
  const socialMedia = await clientFetch(getAllSocialMedia);

  return (
    <main>
      <PageTransition>
        <Header />

        <Services />

        {/* <MacBook /> */}

        <SelectedWork socialMedia={socialMedia} projects={projects} />

        {/* <Experience /> */}

        <AboutSection />

        <Footer socialMedia={socialMedia} />
      </PageTransition>
    </main>
  );
}
