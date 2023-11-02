import React from "react";
import { Slug } from "sanity";
import { client } from "../../../../sanity/lib/client";
import { getOneProject, getProjectsSlug } from "../../../../sanity/lib/queries";
import { Project } from "../../../../utils/types/types";
import PageTransition from "@/components/layout/PageTransition";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs: Slug[] = await client.fetch(getProjectsSlug);
  const slugRoute = slugs.map((slug) => slug.current);

  return slugRoute.map((slug) => ({
    slug,
  }));
}

async function page({ params: { slug } }: Props) {
  console.log(slug);
  const project: Project = await client.fetch(getOneProject, { slug });
  console.log(project);

  return (
    <PageTransition>
      <div className="flex h-screen w-screen items-center justify-center">
        {project.name}
      </div>
    </PageTransition>
  );
}

export default page;
