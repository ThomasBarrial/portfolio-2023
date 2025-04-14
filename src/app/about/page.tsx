import ContentAbout from "@/components/about/ContentAbout";
import HeaderAbout from "@/components/about/HeaderAbout";
import PageTransition from "@/components/layout/PageTransition";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";
import { getAllSocialMedia } from "../../../sanity/lib/queries";
import Footer from "@/components/homePage/footer/Footer";
import globalMetadata from "../../../utils/metaData";
import StructuredData from "@/components/layout/StructuredData";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

export const metadata = {
  ...globalMetadata,
  title: "Let's work together – Thomas Barrial",
  description:
    "Want to collaborate or start a project together? Contact Thomas Barrial, Frontend Developer & UI/UX Designer based in Montréal, Canada.",
};

export default async function page() {
  const socialMedia = await clientFetch(getAllSocialMedia);
  return (
    <PageTransition>
      <StructuredData />
      <HeaderAbout />
      <ContentAbout />
      <Footer socialMedia={socialMedia} />
    </PageTransition>
  );
}
