"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const section = sectionRef.current;
    const content = contentRef.current;

    if (img && section && content) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=20",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.fromTo(
        img,
        {
          x: "-100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      ).to(img, {
        y: 50,
      });

      gsap.fromTo(
        content,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top bottom-=100",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row my-24 min-h-screen justify-center items-center"
    >
      <div className="about-section-left w-full lg:w-1/2 px-4 lg:px-10 overflow-hidden mb-8 lg:mb-0">
        <Image
          ref={imgRef}
          src="/images/about.jpg"
          alt="About Devstella - Software solutions agency"
          className="w-auto h-auto object-contain"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/about.jpg"
        />
      </div>
      <div
        ref={contentRef}
        className="about-section-right w-full lg:w-1/2 px-4 lg:px-10"
      >
        <Heading title="Our" heighlight="Company" />
        <p className="text-white mt-6 lg:mt-10 text-justify text-base">
          Hello! We’re Devstella, and we’re here to help your business shine. At
          Devstella, we believe technology should make life easier and help
          businesses grow—not just for the sake of being "high-tech." We’re a
          team of passionate problem-solvers who love using AI, web development,
          mobile apps, and smart consulting to turn big ideas into real-world
          success stories. Our approach is simple: we listen, we collaborate,
          and we deliver solutions that actually work for you and your users. No
          jargon, no overcomplicated systems—just intuitive, user-friendly
          experiences that make a real difference. But we don’t stop at
          technology. We also connect businesses with the best talent from
          around the world. Whether you’re looking for experts in AI, web
          development, mobile apps, or any IT-related role, our global
          recruiting network ensures you find the perfect fit to drive your
          projects forward. Think of us as your tech partner and talent
          matchmaker, all in one. We care about your goals as much as you do,
          and we’re here to help you achieve them, one step at a time. At
          Devstella we create and carve products that help our users improve
          their lives and deliver solutions that have an impact. We believe in
          staying one step ahead and are contributing to the research in the AGI
          technology after mastering the preliminaries such as Gen AI and
          Agentic AI. Devstella is what you need in this changing world because
          at Devstella we will always be there for you!
        </p>
        <div className="mt-6 lg:mt-8">
          <Button title="Read More" href="/about" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
