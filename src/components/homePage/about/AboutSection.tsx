import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import Image from "next/image";

function AboutSection() {
  return (
    <LayoutSection className="flex items-center justify-center">
      <div className="relative h-[90%] w-full bg-red-200 ">
        <Image
          className="object-cover"
          src="/image/aboutMontagne.webp"
          fill
          alt="AboutMe"
        />
      </div>
    </LayoutSection>
  );
}

export default AboutSection;
