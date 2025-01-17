"use client"
import BlogsSection from "@/components/BlogsSection";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { content } from "@/constants/content";
import { notFound, useParams } from "next/navigation";
import React from "react";

function page() {
  const {name} = useParams();
  const pageContent = content[name];
  const {heroTitle, heroHighlight, cards} = pageContent;

  if (!pageContent) {
    notFound();
  }
  
  return (
    <section className="ml-16">
      <Hero title={heroTitle} heighlight={heroHighlight} />
      <div className="flex flex-wrap">
        {
          cards.map((card) => {
            return(
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
            />
            )
          })
        }
      </div>
      <BlogsSection />
    </section>
  );
}

export default page;