import React from "react";
import { Project } from "../../../utils/types/types";

function StructuredData({ project }: { project: Project }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.name || `Discover the ${project.title} project.`,
          url: `https://www.thomasbarrial.dev/work/${project.slug}`,
          image:
            project.mainImage ||
            "https://www.thomasbarrial.dev/images/default-project.jpg",
          author: {
            "@type": "Person",
            name: "Thomas Barrial",
            url: "https://www.thomasbarrial.dev/",
          },
          datePublished: project.date || "2025-01-01",
          keywords:
            project.techno.join(", ") || "web development, UI/UX design",
          sameAs: [
            "https://github.com/thomasbarrial",
            "http://linkedin.com/in/thomas-barrial-758a6a130/",
          ],
          mainEntityOfPage: `https://www.thomasbarrial.dev/work/${project.slug}`,
        }),
      }}
    />
  );
}

export default StructuredData;
