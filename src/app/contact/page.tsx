import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/forms/ContactForm";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/layout/footer/Footer";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";
import { getAllSocialMedia } from "../../../sanity/lib/queries";
import ContactInfo from "@/components/contact/ContactInfo";

const clientFetch = cache(client.fetch.bind(client));

export default async function page() {
  const socialMedia = await clientFetch(getAllSocialMedia);
  return (
    <PageTransition>
      <div className="relative w-screen max-w-[150rem] px-5 pt-20 lg:px-20">
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
