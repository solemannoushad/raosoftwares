"use client";
import BlogsSection from "@/components/BlogsSection";
import Card from "@/components/Card";
import HeadingMain from "@/components/HeadingMain";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import React, { useEffect, useState } from "react";

export default function PageClient({ name, pageContent }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${name.charAt(0).toUpperCase()}${name.slice(1)} - Devstella`;
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { heroTitle, heroHighlight, cards, heading, subHeading } = pageContent;

  return (
    <>
      {loading && <Loading />}
      <section className="md:px-16 px-5 lg:px-20 xl:px-40 2xl:px-60">
        <Hero title={heroTitle} heighlight={heroHighlight} />
        <div>
          <HeadingMain heading={heading} subHeading={subHeading} />
        </div>
        <div className="flex flex-wrap">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
            />
          ))}
        </div>
        <div className="my-10 pr-28">{pageContent?.content && pageContent.content}</div>
        <BlogsSection />
      </section>
    </>
  );
}
