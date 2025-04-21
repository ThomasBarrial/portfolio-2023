import { Metadata } from "next";

const globalMetadata: Metadata = {
  title: "Thomas Barrial – Frontend Developer & UI/UX Designer Freelance",
  description:
    "Frontend developer & Designer specialized in Next.js, Three.js, typescript, figma and React. View my projects, skills, and contact information. Based in Montréal, Canada.",
  keywords: [
    "Next.js",
    "Web Developer",
    "Portfolio",
    "Three.js",
    "React",
    "Frontend",
    "Designer",
    "Typescript",
    "Figma",
    "Web Design",
    "Web Development",
    "vue.js",
    "Montreal",
    "Canada",
    "france",
    "Paris",
    "Frontend Developer",
    "Web Designer",
    "freelance developer",
    "freelance designer",
    "freelance web developer",
    "freelance web designer",
    "freelance frontend developer",
    "javascript",
    "UI/UX",
    "ui/ux",
    "UI/UX Designer",
    "html",
    "css",
  ],
  authors: [{ name: "Thomas Barrial" }],
  creator: "Thomas Barrial",
  metadataBase: new URL("https://www.thomasbarrial.dev/"), // replace with your real domain
  openGraph: {
    title: "Thomas Barrial – Frontend Developer & UI/UX Designer Freelance",
    description:
      "Hello, I'm Thomas Barrial, a freelance Frontend web developer & UI/UX Designer. Based in Montréal, Canada.",
    url: "https://www.thomasbarrial.dev/",
    siteName: "Thomas Barrial – Frontend Developer & UI/UX Designer Freelance",
    images: [
      {
        url: "/image/thomasBarrial.webp",
        width: 1200,
        height: 630,
        alt: "Thomas Barrial – Frontend Developer & UI/UX Designer Freelance",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.thomasbarrial.dev/",
  },
};

export default globalMetadata;
