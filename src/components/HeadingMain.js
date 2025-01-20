"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function HeadingMain({ heading, subHeading }) {
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)

  useEffect(() => {
    const headingElement = headingRef.current
    const subHeadingElement = subHeadingRef.current

    if (headingElement && subHeadingElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingElement,
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })

      tl.fromTo(
        headingElement,
        {
          opacity: 0,
          x: -100,
          rotationY: -45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
        },
      ).fromTo(
        subHeadingElement,
        {
          opacity: 0,
          x: 100,
          rotationY: 45,
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      )
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <h1 ref={headingRef} className="text-white uppercase text-6xl opacity-0">
        {heading}
      </h1>
      <h2 ref={subHeadingRef} className="text-slate-400 uppercase text-6xl opacity-0">
        {subHeading}
      </h2>
    </div>
  )
}

export default HeadingMain

