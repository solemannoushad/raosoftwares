'use client'
import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Technologies from "@/components/Technologies";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {


  return (
    <>
      <section className="md:px-16 px-5 lg:px-20 xl:px-40 2xl:px-60">
        <HeroBg />
        <AboutSection />
        <ServicesSection />
        <Technologies />
        <TeamSection />
        <TestimonialsSection />
        <BlogsSection />
      </section>
    </>
  );
}
