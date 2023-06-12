import MacBook from "@/components/homePage/macbook/Macbook";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { getAllPosts, getAllProject } from "../../sanity/lib/queries";
import SelectedWork from "@/components/homePage/selectedWork/SelectedWork";
import Section5 from "@/components/homePage/Section5";
import PageTransition from "@/components/layout/PageTransition";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const projects = await clientFetch(getAllProject);

  return (
    <main>
      <PageTransition>
        <Header />
        <Services />
        <MacBook />
        <SelectedWork projects={projects} />
        <Section5 />
      </PageTransition>
    </main>
  );
}
