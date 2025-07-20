"use client"

import React, { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

function SubPageHeading({ heading, subHeading }) {
  const headingRef = useRef(null)
  const subHeadingRef = useRef(null)

  useGSAP(() => {
    const headingElement = headingRef.current
    const subHeadingElement = subHeadingRef.current

    if (headingElement && subHeadingElement) {
      // Split text into words and characters
      const splitText = (element) => {
        const words = element.textContent.split(" ")
        element.textContent = ""
        return words.flatMap((word) => {
          const wordSpan = document.createElement("span")
          wordSpan.style.display = "inline-block"
          wordSpan.style.whiteSpace = "nowrap"
          const chars = [...word].map((char) => {
            const charSpan = document.createElement("span")
            charSpan.textContent = char
            charSpan.style.display = "inline-block"
            wordSpan.appendChild(charSpan)
            return charSpan
          })
          element.appendChild(wordSpan)
          element.appendChild(document.createTextNode(" "))
          return chars
        })
      }

      const headingChars = splitText(headingElement)
      const subHeadingChars = splitText(subHeadingElement)

      gsap.set([headingElement, subHeadingElement], { perspective: 400 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingElement,
          start: "top bottom-=200",
          end: "bottom 20%",
          scrub: 2,
          toggleActions: "play none none reverse",
          markers: false
        },
      })

      tl.from(headingChars, {
        duration: 0.5,
        opacity: 1,
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
          opacity: 1,
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
    <div className="flex flex-wrap items-baseline my-10">
      <h1 ref={headingRef} className="text-white text-6xl uppercase mr-4">
        {heading}
      </h1>
      <h2 ref={subHeadingRef} className="text-slate-400 text-6xl uppercase">
        {subHeading}
      </h2>
    </div>
  )
}

export default SubPageHeading

