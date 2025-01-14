import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import IndustriesSection from "@/components/IndustriesSection";
import SolutionsSection from "@/components/SolutionsSection";
import Specialities from "@/components/Specialities";
import Technologies from "@/components/Technologies";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <section className="ml-16">
      <HeroBg />
      <AboutSection />
      <Specialities />
      <Technologies />
      <SolutionsSection />
      <TestimonialsSection />
      <BlogsSection />
    </section>
  );
}
