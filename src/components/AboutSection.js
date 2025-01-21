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

  useEffect(() => {
    const img = imgRef.current
    const section = sectionRef.current

    if (img && section) {
      gsap.fromTo(
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
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=250",
            end: "top center",
            scrub: true,
          },
        },
      )

      gsap.to(img, {
        y: 50,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className="flex mt-10" style={{ height: "100vh" }}>
      <div className="about-section-left w-1/2 px-10 overflow-hidden">
        <img ref={imgRef} src="/images/about.jpg" alt="About our company" className="w-full h-auto" />
      </div>
      <div className="about-section-right w-1/2">
        <Heading title="Our" heighlight={"Company"} />
        <p className="text-white mt-10 text-justify mr-12">
          A leading development company dedicated to delivering top-quality solutions for your business. With a team of
          skilled and experienced web developers, we specialize in creating custom websites that are tailored to meet
          the unique needs and goals of our clients. Whether you're looking to build a brand new website from scratch,
          or you need to revamp your existing site, we have the expertise to deliver the results you're looking for. Our
          services include website design and development, e-commerce solutions, content management systems, and mobile
          app development, to name a few. With a commitment to excellence and customer satisfaction, we strive to exceed
          our client's expectations every step of the way. Let us help you take your online presence to the next level.
          Contact us today to learn more.
        </p>
        <div className="mt-5">
          <Button title="Read More" href={"/about"} />
        </div>
      </div>
    </div>
  )
}

export default AboutSection

