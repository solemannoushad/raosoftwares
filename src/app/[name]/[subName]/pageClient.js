"use client";
import CustomImage from "@/components/CustomImage";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import SubPageHeading from "@/components/SubPageHeading";
import React, { useEffect } from "react";

export default function PageClient({ name, subName, content }) {



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
    techUsed,
    portffolioData
  } = content;

  return (
    <>
      <section className="md:px-16 px-5 lg:px-20 xl:px-40 2xl:px-60">
        {/* Hero Section */}
        <Hero title={heroTitle} heighlight={heroHighlight} />

        {/* Heading & Description */}
        <div className="flex lg:flex-row flex-col-reverse justify-between pr-10 my-10">
          <div className="lg:w-1/2 w-full pr-8">
          <SubPageHeading heading={heading} subHeading={subHeading} />
            {!portffolioData && (
              <>
                <p className="text-white leading-7 mt-5">{description}</p>
                <p className="text-white leading-7 mt-5">{techUsed}</p>
              </>
            )}
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
          { !portffolioData && <div className="lg:w-1/2 w-full flex items-center justify-center">
            <CustomImage
              className={`${type === "icon" ? "w-48" : "w-full"} object-contain`}
              src={`/${type === "icon" ? "icons" : "images"}/${image}`}
              alt=""
              loading="eager"
              priority={true}
            />
          </div>}
        </div>


        {
          portffolioData && portffolioData.map((el, index) => {
            const {heading, details, pic} = el;
            return(
              <div key={heading} className={`flex ${index %2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col-reverse justify-between pr-10 my-10`}>
              <div className="lg:w-1/2 w-full pr-8 flex flex-col justify-center">
                <Heading title={heading} heighlight={""} />
                <p className="text-white leading-10 mt-5">{details}</p>
              </div>
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <CustomImage
                  className={`${heroTitle === "Mobile Application" ? "w-1/2" : "w-full"} object-contain`}
                  src={`/images/${pic}`}
                  alt=""
                  loading="eager"
                  priority={true}
                />
              </div>
            </div>
            )
          })
        }

        {
          portffolioData && (
            <div className="text-center">
            <p className="text-white leading-7 mt-5">{description}</p>
            <p className="text-white leading-7 mt-5">{techUsed}</p>
            </div>
          )
        }

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