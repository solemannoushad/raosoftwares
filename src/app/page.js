import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import IndustriesSection from "@/components/IndustriesSection";
import SolutionsSection from "@/components/SolutionsSection";
import Specialities from "@/components/Specialities";
import Technologies from "@/components/Technologies";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raosoftwares</title>
      </Head>
      <section className="ml-16">
        <HeroBg />
        <AboutSection />
        <Specialities />
        <Technologies />
        <SolutionsSection />
        <TestimonialsSection />
        <BlogsSection />
      </section>
    </>
  );
}
