"use client"
import BlogsSection from "@/components/BlogsSection";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import SpecialityCard from "@/components/SpecialityCard";
import StatsBox from "@/components/StatsBox";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function page() {

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
        <title>About Us</title>
      </Head>
      <Hero title="our" heighlight="company" />
      <section className="mx-16">
        <Heading title="Who We" heighlight={"Are?"} />
        <p className="text-white my-8">
          Rao Software Solutions stands at the forefront of custom software
          development, transforming intricate enterprise systems and
          streamlining business processes to empower success. With a steadfast
          commitment to collaboration and customer satisfaction, we are your
          trusted partner for all software-related needs. Unlock your potential
          with Rao Software Solutions.
        </p>

        <Heading title="Our" heighlight={"Mission"} />
        <p className="text-white my-8">
          From web and mobile app development to ERP and CRM systems, we provide
          a full suite of solutions.
        </p>

        <Heading title="What We" heighlight={"Offer"} />
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
        <Heading title="Our" heighlight={"Approach"} />
        <p className="text-white my-8">
          We build long-term partnerships by prioritizing effective
          communication, shared visions, and delivering unmatched value.
        </p>
        <div className="flex flex-wrap">
          <Card
            title="Consulting"
            description={
              "Expert guidance for web, mobile, and desktop development using cutting-edge technologies."
            }
            icon={"consulting"}
          />
          <Card
            title="Software Development"
            description={
              "Robust and scalable applications tailored to business requirements.."
            }
            icon={"software"}
          />
        </div>
        <div className="flex flex-wrap">
          <Card
            title="Data Services"
            description={
              "Cloud integration and management solutions with AWS, Google Cloud, and Azure."
            }
            icon={"data"}
          />
          <Card
            title="Cybersecurity"
            description={
              "Protecting digital assets with comprehensive risk management solutions."
            }
            icon={"security"}
          />
        </div>
        <Heading title="Why" heighlight={"Choose Us?"} />
        <div className="my-8">
          <StatsBox />
        </div>
        <div>
          <BlogsSection />
        </div>
      </section>
    </>
  );
}

export default page;
