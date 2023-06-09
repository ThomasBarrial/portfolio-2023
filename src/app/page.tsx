import MacBook from "@/components/homePage/macbook/Macbook";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";
import Loading from "@/components/layout/Loading";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { getAllPosts, getAllProject } from "../../sanity/lib/queries";
import SelectedWork from "@/components/homePage/selectedWork/SelectedWork";
import Section5 from "@/components/homePage/Section5";

import ProgressBar from "@/components/layout/ProgressBar";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const projects = await clientFetch(getAllProject);

  return (
    <main>
      <ProgressBar />
      <Loading />
      <Header />
      <Services />
      <MacBook />
      {/* <SelectedWork projects={projects} />
      <Section5 /> */}
    </main>
  );
}
