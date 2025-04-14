function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          image: "https://www.thomasbarrial.dev/images/thomasBarrial.webp",
          name: "Thomas Barrial",
          url: "https://www.thomasbarrial.dev/",
          sameAs: [
            "https://github.com/thomasbarrial",
            "http://linkedin.com/in/thomas-barrial-758a6a130/",
          ],
          jobTitle: "Frontend Developer & UI/UX Designer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "WildCodeSchool",
          },
          additionalProperty: {
            "@type": "PropertyValue",
            name: "Specialization",
            value: "Web Development & UI/UX Design",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Freelance or Collaboration",
            email: "contact@thomasbarrial.dev",
            url: "https://www.thomasbarrial.dev/contact",
            availableLanguage: ["English", "French"],
          },
          knowsAbout: [
            "Web Development",
            "UI/UX Design",
            "Next.js",
            "Three.js",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Figma",
            "Framer Motion",
            "GraphQL",
            "Sanity",
            "Node.js",
            "Express",
            "Git",
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Frontend Developer",
            description: "Specialized in Next.js, TypeScript and UI/UX Design.",
          },
        }),
      }}
    />
  );
}

export default StructuredData;
