"use client"
import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import Loading from "@/components/Loading";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Technologies from "@/components/Technologies";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Head>
        <title>DevStella</title>
      </Head>
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
