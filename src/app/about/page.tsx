import AboutComponent from "@/components/about/AboutComponent";
import Services from "@/components/homePage/services/Services";
import Macbook from "@/components/homePage/macbook/Macbook";
import PageTransition from "@/components/layout/PageTransition";
import ProfilPic from "@/components/homePage/ProfilPic";
import { Canvas } from "@react-three/fiber";

export default function page() {
  return (
    <PageTransition>
      <AboutComponent />
    </PageTransition>
  );
}
