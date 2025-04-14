import React, { cache } from "react";
import { Slug } from "sanity";
import { client } from "../../../../sanity/lib/client";
import {
  getAllSocialMedia,
  getOneProject,
  getProjectsSlug,
} from "../../../../sanity/lib/queries";
import { Project } from "../../../../utils/types/types";
import PageTransition from "@/components/layout/PageTransition";
import Header from "@/components/work/oneWork/Header";
import Footer from "@/components/homePage/footer/Footer";
import globalMetadata from "../../../../utils/metaData";

const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export const metadata = globalMetadata;

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getProjectsSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

async function page({ params: { slug } }: Props) {
  const project: Project = await client.fetch(getOneProject, { slug });
  const socialMedia = await clientFetch(getAllSocialMedia);

  return (
    <PageTransition value={"WORK"}>
      <Header project={project} />
      <Footer socialMedia={socialMedia} />
    </PageTransition>
  );
}

export default page;
