"use client";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import SubPageHeading from "@/components/SubPageHeading";
import React, { useEffect, useState } from "react";

export default function PageClient({ name, subName, content }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.title = `${content.heroTitle} ${content.heroHighlight} - Devstella`;
  }, [content]);

  const {
    heroTitle,
    heroHighlight,
    heading,
    subHeading,
    image,
    description,
    type,
    contents,
  } = content;

  return (
    <>
      {loading && <Loading />}
      <section className="md:px-16 px-5 lg:px-20 xl:px-40 2xl:px-60">
        {/* Hero Section */}
        <Hero title={heroTitle} heighlight={heroHighlight} />

        {/* Heading & Description */}
        <div className="flex lg:flex-row flex-col-reverse justify-between pr-10 my-10">
          <div className="lg:w-1/2 w-full pr-8">
            <SubPageHeading heading={heading} subHeading={subHeading} />
            <p className="text-white leading-7 mt-5">{description}</p>
            {contents &&
              contents.map((c) => (
                <div key={c.heading} className="my-4">
                  <h4 className="text-white text-lg font-medium">{c.heading}</h4>
                  <ul className="text-gray-300 ml-4 list-disc">
                    {c.points?.map((point, index) => (
                      <li key={index} className="my-1 text-white">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              className={`${type === "icon" ? "w-48" : "w-full"} object-contain`}
              src={`/${type === "icon" ? "icons" : "images"}/${image}`}
              alt=""
            />
          </div>
        </div>
        <div className="marquee-container my-20">
        <div className="marquee">
          {content?.tags &&
            [...content.tags, ...content.tags].map((tag, index) => (
              <p
                key={index}
                className="tag text-foreground font-bold text-lg py-2 px-3 mr-3 border border-foreground uppercase mx-2"
              >
                {tag}
              </p>
            ))}
        </div>
      </div>
      </section>
    </>
  );
}
