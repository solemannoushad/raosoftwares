"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Heading({ title, heighlight }) {
  const headingRef = useRef(null)

  const styles = `
    .text-shadow {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  `

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100", // Start animation earlier
            end: "center center+=100", // End animation sooner
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        },
      )
    }
  }, [])

  return (
    <>
      <style>{styles}</style>
      <h1 ref={headingRef} className="text-white text-4xl uppercase opacity-0 text-shadow">
        {title} <span className="text-foreground font-semibold">{heighlight}</span>
      </h1>
    </>
  )
}

export default Heading

