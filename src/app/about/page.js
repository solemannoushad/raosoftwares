"use client";
import BlogsSection from "@/components/BlogsSection";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import SpecialityCard from "@/components/SpecialityCard";
import StatsBox from "@/components/StatsBox";
import React, { useEffect } from "react";

function page() {

  useEffect(() => {
    document.title = "About Us - Devstella";
  }, []);



  return (
    <>
      <Hero title="our" heighlight="company" />
      <section className="md:px-16 px-5 lg:px-20 xl:px-40 2xl:px-60 leading-8">
        <div className="my-16">
          <Heading title="Discover our " heighlight={"story"} />
          <p className="text-white my-8">
            Welcome to Devstella, where innovation meets heart. Our journey began
            not in a boardroom, but around a family dinner table, where a group of
            friends and family, all passionate about technology, dreamt of making
            a difference. We saw the potential of AI to transform lives and
            decided to bring that magic to everyone, everywhere. At Devstella, we
            believe that technology should be accessible and beneficial to all.
            That's why we provide AI solutions tailored to every need and
            format—from mobile apps to websites, desktop software to camera-based
            systems. Our goal is to empower businesses and individuals alike,
            helping them navigate the ever-changing digital landscape with ease
            and confidence. Our approach is deeply rooted in our shared values of
            innovation, excellence, and community. We work closely with our
            clients, understanding their unique challenges and aspirations, to
            deliver customized solutions that truly make a difference. Whether
            you're a startup with a big dream or an established enterprise looking
            to stay ahead, we're here to support you every step of the way. What
            sets us apart is our human touch. We're more than just a tech company;
            we're a family of innovators dedicated to making the world a better
            place, one AI solution at a time. Our story is one of passion,
            collaboration, and a shared vision to bring the magic of AI to
            everyone.
          </p>
        </div>

        <div className="my-16">
          <Heading title="Who We" heighlight={" Are?"} />
          <p className="text-white my-8">
            Devstella Solutions stands at the forefront of custom software
            development, transforming intricate enterprise systems and
            streamlining business processes to empower success. With a steadfast
            commitment to collaboration and customer satisfaction, we are your
            trusted partner for all software-related needs. Unlock your potential
            with Rao Software Solutions.
          </p>
        </div>

        <div className="my-16">
          <Heading title="Devstella" heighlight={" Mission"} />
          <p className="text-white my-8">
          Our mission is to unite through innovation and elevate lives.
          </p>
        </div>

        <div className="my-16">
          <Heading title="How We" heighlight={" Serve"} />
          <div className="flex my-10 flex-wrap">
            <SpecialityCard
              title="Custom Solutions"
              description={
                "Expert developers and business analysts create tailored software to meet your unique needs."
              }
              icon={"solutions"}
            />
            <SpecialityCard
              title="Comprehensive Services"
              description={
                "Expert developers and business analysts create tailored software to meet your unique needs."
              }
              icon={"services"}
            />
            <SpecialityCard
              title="Reliable Support"
              description={
                "Our ongoing maintenance services keep your systems running smoothly."
              }
              icon={"support"}
            />
          </div>
        </div>

        
        <div className="my-16">
          <Heading title="Why" heighlight={"Choose Us?"} />
          <div className="my-8">
            <StatsBox />
          </div>
        </div>
        <div>
          <BlogsSection />
        </div>
      </section>
    </>
  );
}

export default page;
