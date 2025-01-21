"use client"
import AboutSection from "@/components/AboutSection";
import BlogsSection from "@/components/BlogsSection";
import HeroBg from "@/components/HeroBg";
import IndustriesSection from "@/components/IndustriesSection";
import Loading from "@/components/Loading";
import SolutionsSection from "@/components/SolutionsSection";
import Specialities from "@/components/Specialities";
import Technologies from "@/components/Technologies";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    } , 2000)
  } , [])

  return (
    <>
      {loading && <Loading />}
      <Head>
        <title>DevStella</title>
      </Head>
      <section className="md:ml-16 ml-8">
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
