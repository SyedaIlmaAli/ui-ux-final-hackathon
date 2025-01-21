import AboutSection from "@/components/AboutSection";
import ClubJoin from "@/components/ClubJoin";
import DifferentBrand from "@/components/DifferentBrand";
import Hero from "@/components/Hero";
import NewCeramicsComponents from "./pages/[slug]/NewCeramicsComponent";
import PopularProductsPage from "./popular-products/[slug]/PopularProductsPage";

export default function Home() {
  return (
    <div>
      <Hero/>
      <DifferentBrand/>
      <NewCeramicsComponents text="New Ceramics"/>
       <PopularProductsPage text="Our Popular Products"/>
      <ClubJoin/>
      <AboutSection/>
    </div>
  );
}
