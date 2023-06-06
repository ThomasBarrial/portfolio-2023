import MacBook from "@/components/homePage/macbook/Macbook";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";
import Loading from "@/components/layout/Loading";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { getAllPosts, getAllProject } from "../../sanity/lib/queries";
import SelectedWork from "@/components/homePage/SelectedWork";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const posts = await clientFetch(getAllPosts);
  const projects = await clientFetch(getAllProject);
  console.log(projects);

  return (
    <main className="flex flex-col items-center justify-center">
      <Loading />
      <Header />

      <div className="z-20 bg-[#050505]">
        <Services />
        <MacBook />
        <SelectedWork />
      </div>
    </main>
  );
}
