"use client";
import Hero from "@/components/Hero";
import React, { useEffect } from "react";

export default function BlogDetailClient({ blogContent }) {

  useEffect(() => {
    document.title = `${blogContent.title} - Devstella`;
  }, [blogContent]);


  return (
    <>
      <div className="md:mx-28 mx-10 lg:mx-36 xl:mx-52">
        <div className="text-center">
          <Hero title={blogContent.title} />
        </div>
        <div className="flex flex-col">
          <img className="w-[600px] object-contain" src={`/images/${blogContent.image}`} alt={blogContent.title} />
          <p className="text-white my-10 text-justify">{blogContent.content}</p>
        </div>
      </div>
    </>
  );
}