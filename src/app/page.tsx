import AboutSection from "@/components/AboutSection";
import ClubJoin from "@/components/ClubJoin";
import DifferentBrand from "@/components/DifferentBrand";
import Hero from "@/components/Hero";
import NewCeramics from "@/components/NewCeramics";
import OurPopularProducts from "@/components/OurPopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <DifferentBrand/>
      <NewCeramics/>
      <OurPopularProducts/>
      <ClubJoin/>
      <AboutSection/>
    </div>
  );
}
