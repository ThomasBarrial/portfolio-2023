import ContentAbout from "@/components/about/ContentAbout";
import HeaderAbout from "@/components/about/HeaderAbout";
import PageTransition from "@/components/layout/PageTransition";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";
import { getAllSocialMedia } from "../../../sanity/lib/queries";
import Footer from "@/components/homePage/footer/Footer";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export default async function page() {
  const socialMedia = await clientFetch(getAllSocialMedia);
  return (
    <PageTransition>
      <HeaderAbout />
      <ContentAbout />
      <Footer socialMedia={socialMedia} />
    </PageTransition>
  );
}
