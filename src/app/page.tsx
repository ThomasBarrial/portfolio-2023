import Services from "@/components/homePage/services/Services";
import Header from "@/components/homePage/header/Header";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import {
  getAllProject,
  getAllServices,
  getAllSocialMedia,
} from "../../sanity/lib/queries";

import PageTransition from "@/components/layout/PageTransition";
import AboutSection from "@/components/homePage/about/AboutSection";
import Footer from "@/components/homePage/footer/Footer";
import SelectedWork2 from "@/components/homePage/selectedWork2/SelectedWork2";
import Experience from "@/components/homePage/experience/Experience";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const projects = await clientFetch(getAllProject);
  const socialMedia = await clientFetch(getAllSocialMedia);
  const services = await clientFetch(getAllServices);

  return (
    <main>
      <PageTransition>
        <Header />
        <Services services={services} />
        <SelectedWork2 projects={projects} socialMedia={socialMedia} />
        <Experience />
        <AboutSection />
        <Footer socialMedia={socialMedia} />
      </PageTransition>
    </main>
  );
}
