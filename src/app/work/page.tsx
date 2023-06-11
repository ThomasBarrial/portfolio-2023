import MasqueTest from "@/components/MasqueTest";
import PageTransition from "@/components/layout/PageTransition";
import ProgressBar from "@/components/layout/ProgressBar";

function page() {
  return (
    <>
      <PageTransition>
        <MasqueTest />
      </PageTransition>
    </>
  );
}

export default page;
