import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/forms/ContactForm";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/layout/footer/Footer";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";
import { getAllSocialMedia } from "../../../sanity/lib/queries";
import ContactInfo from "@/components/contact/ContactInfo";
import globalMetadata from "../../../utils/metaData";
import StructuredData from "@/components/layout/StructuredData";

const clientFetch = cache(client.fetch.bind(client));

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
      <div className="relative mx-auto w-full max-w-[150rem] px-5 pt-20 lg:px-10">
        <ContactHeader />
        <div className="flex flex-col items-start md:flex-row">
          <ContactForm />
          <ContactInfo socialMedia={socialMedia} />
        </div>
      </div>
      <Footer socialMedia={socialMedia} />
    </PageTransition>
  );
}
