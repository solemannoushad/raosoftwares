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
    ctaHighlight,
    type,
    contents,
  } = content;

  // Helper function to highlight text
  const renderHighlightedText = (text, highlights) => {
    if (!text || !highlights) return text;

    // Ensure highlights is an array for consistent handling
    const highlightWords = Array.isArray(highlights)
      ? highlights
      : [highlights];

    // Log inputs for debugging
    console.log("Text:", text);
    console.log("Highlights:", highlightWords);

    // Build a regex dynamically to match all highlight words (case-insensitive)
    const regex = new RegExp(`(${highlightWords.join("|")})`, "gi");
    console.log("Regex:", regex);

    // Split text into parts and wrap matches
    return text.split(regex).map((part, index) =>
      highlightWords.some(
        (word) => word.toLowerCase() === part.toLowerCase()
      ) ? (
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
          <h1 className="text-white text-6xl uppercase">
            {heading} <span className="text-slate-400">{subHeading}</span>{" "}
          </h1>
          <p className="text-white leading-7 mt-5">{description}</p>
          {content?.techUsed && (
            <>
              <h3 className="text-foreground font-semibold mt-8">
                Technologies Used:
              </h3>
              <p className="text-white text-base">{content?.techUsed}</p>
            </>
          )}
          {content?.contents && (
            <>
              {contents.map((c) => {
                return (
                  <div key={c.heading} className="my-4">
                    <h4 className="text-white text-lg font-medium">
                      {c.heading}
                    </h4>
                    <ul className="text-gray-300 ml-4 list-disc">
                      {c.points?.map((point, index) => (
                        <li key={index} className="my-1 text-white">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            className={`${
              type && type === "icon" ? "w-48" : "w-full"
            } object-contain`}
            src={`/${type && type === "icon" ? "icons" : "images"}/${image}`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default page;
