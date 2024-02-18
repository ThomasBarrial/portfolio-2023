import AboutComponent from "@/components/about/AboutComponent";
import PageTransition from "@/components/layout/PageTransition";

export default function page() {
  return (
    <PageTransition>
      <div className="hidden-cursor">
        <AboutComponent />
      </div>
    </PageTransition>
  );
}
