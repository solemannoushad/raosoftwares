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
      // Split text into spans
      const splitText = (element) => {
        const text = element.textContent
        element.textContent = ""
        return [...text].map((char) => {
          const span = document.createElement("span")
          span.textContent = char === " " ? "\u00A0" : char
          span.style.display = "inline-block"
          element.appendChild(span)
          return span
        })
      }

      const headingChars = splitText(headingElement)
      const subHeadingChars = splitText(subHeadingElement)

      gsap.set([headingElement, subHeadingElement], { perspective: 400 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingElement,
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      })

      tl.from(headingChars, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      }).from(
        subHeadingChars,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: "back",
          stagger: 0.01,
        },
        "-=0.5",
      )
    }
  }, [heading, subHeading])

  return (
    <div className="overflow-hidden">
      <h1 ref={headingRef} className="text-white uppercase text-6xl">
        {heading}
      </h1>
      <h2 ref={subHeadingRef} className="text-slate-400 uppercase text-6xl">
        {subHeading}
      </h2>
    </div>
  )
}

export default HeadingMain

