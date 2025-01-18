"use client";
import Hero from "@/components/Hero";
import { subContent } from "@/constants/content";
import { removeHyphens } from "@/utils/helper";
import { notFound, useParams } from "next/navigation";
import React from "react";

function page() {
  const { name, subName } = useParams();
  const content = subContent[name]?.[removeHyphens(subName)];
  if (!content) {
    notFound();
  }

  const { 
    heroTitle, 
    heroHighlight, 
    heading, 
    subHeading, 
    image, 
    description, 
    headline, 
    headlineHighlights, 
    points, 
    cta, 
    ctaHighlight 
  } = content;

  // Helper function to highlight text
  const renderHighlightedText = (text, highlights) => {
    if (!text || !highlights) return text;

    // Ensure highlights is an array for consistent handling
    const highlightWords = Array.isArray(highlights) ? highlights : [highlights];

    // Log inputs for debugging
    console.log("Text:", text);
    console.log("Highlights:", highlightWords);

    // Build a regex dynamically to match all highlight words (case-insensitive)
    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    console.log("Regex:", regex);

    // Split text into parts and wrap matches
    return text.split(regex).map((part, index) =>
      highlightWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="text-foreground">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="ml-16">
      {/* Hero Section */}
      <Hero title={heroTitle} heighlight={heroHighlight} />

      {/* Heading & Description */}
      <div className="flex justify-between pr-10 my-10">
        <div className="w-1/2 pr-8">
          <h1 className="text-white text-6xl">
            {heading} <span className="text-slate-400">{subHeading}</span>{" "}
          </h1>
          <p className="text-white leading-7 mt-5">{description}</p>
        </div>
        <div className="w-1/2 flex items-center">
          <img className="w-full object-contain" src={`/images/${image}`} alt="" />
        </div>
      </div>

      {/* Headline, Points, and CTA */}
      <div className="flex my-10">
        {/* Headline and Points */}
        <div className="w-4/6 pr-6">
          <h2 className="text-white text-2xl">
            {renderHighlightedText(headline, headlineHighlights)}
          </h2>
          {points.map((p, index) => (
            <li key={index} className="text-slate-300 my-5 text-lg">
              {p}
            </li>
          ))}
        </div>

        {/* Call to Action */}
        <div className="pr-6 pt-10 w-2/6">
          <div className="text-white capitalize text-xl">
            {renderHighlightedText(cta, ctaHighlight)}
          </div>
          <button className="text-white border border-foreground px-7 py-2 mt-4 flex items-center rounded-full text-lg">
            <p className="uppercase">Let's Talk</p>
            <i className="iconoir-message-text text-foreground ml-4 text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default page;
