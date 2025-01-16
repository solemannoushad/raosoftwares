import BlogsSection from "@/components/BlogsSection";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import React from "react";

function page() {
  return (
    <section className="">
      <Hero title={"our"} heighlight={"services"} />
      <div className="flex ml-16">
        <Card
          title="Consulting"
          description={
            "Expert guidance for web, mobile, and desktop development using cutting-edge technologies."
          }
        />
        <Card
          title="Software Development"
          description={
            "Robust and scalable applications tailored to business requirements.."
          }
        />
      </div>
      <div className="flex">
        <Card
          title="Data Services"
          description={
            "Cloud integration and management solutions with AWS, Google Cloud, and Azure."
          }
        />
        <Card
          title="Cybersecurity"
          description={
            "Protecting digital assets with comprehensive risk management solutions."
          }
        />
      </div>
      <BlogsSection />
    </section>
  );
}

export default page;
