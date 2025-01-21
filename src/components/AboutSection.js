"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Heading from "./Heading"
import Button from "./Button"

gsap.registerPlugin(ScrollTrigger)

function AboutSection() {
  const imgRef = useRef(null)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    const section = sectionRef.current
    const content = contentRef.current

    if (img && section && content) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=250",
          end: "bottom top",
          scrub: true,
        },
      })

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
        },
      ).to(img, {
        y: 50,
      })

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
        },
      )
    }
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col lg:flex-row mt-10 min-h-screen">
      <div className="about-section-left w-full lg:w-1/2 px-4 lg:px-10 overflow-hidden mb-8 lg:mb-0">
        <img ref={imgRef} src="/images/about.jpg" alt="About our company" className="w-full h-auto" />
      </div>
      <div ref={contentRef} className="about-section-right w-full lg:w-1/2 px-4 lg:px-10">
        <Heading title="Our" heighlight="Company" />
        <p className="text-white mt-6 lg:mt-10 text-justify lg:mr-12">
          A leading development company dedicated to delivering top-quality solutions for your business. With a team of
          skilled and experienced web developers, we specialize in creating custom websites that are tailored to meet
          the unique needs and goals of our clients. Whether you're looking to build a brand new website from scratch,
          or you need to revamp your existing site, we have the expertise to deliver the results you're looking for. Our
          services include website design and development, e-commerce solutions, content management systems, and mobile
          app development, to name a few. With a commitment to excellence and customer satisfaction, we strive to exceed
          our client's expectations every step of the way. Let us help you take your online presence to the next level.
          Contact us today to learn more.
        </p>
        <div className="mt-6 lg:mt-8">
          <Button title="Read More" href="/about" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection

