import MacBook from "@/components/homePage/macbook/Macbook";
import Section4 from "@/components/homePage/Section4";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";
import Loading from "@/components/layout/Loading";
import { cache } from "react";
import { client } from "../../sanity/lib/client";
import { getAllPosts } from "../../sanity/lib/queries";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function Home() {
  const posts = await clientFetch(getAllPosts);

  return (
    <main className="flex flex-col items-center justify-center">
      <Loading />
      <Header />

      <div className="z-20 bg-[#050505]">
        <Services />
        <MacBook />
        <Section4 />
      </div>
    </main>
  );
}
