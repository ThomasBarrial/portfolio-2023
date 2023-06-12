import MasqueTest from "@/components/MasqueTest";
import PageTransition from "@/components/layout/PageTransition";
import ProgressBar from "@/components/layout/ProgressBar";

function page() {
  return (
    <main>
      <PageTransition>
        <MasqueTest />
      </PageTransition>
    </main>
  );
}

export default page;
