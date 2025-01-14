import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import IndustriesSection from "@/components/IndustriesSection";
import SolutionsSection from "@/components/SolutionsSection";
import Specialities from "@/components/Specialities";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <section className="ml-16">
      <HeroBg />
      <Specialities />
      <Technologies />
      <SolutionsSection />
      <BlogsSection />
    </section>
  );
}
