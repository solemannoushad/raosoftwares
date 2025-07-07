"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Heading({ title, heighlight }) {
  const titleRef = useRef(null)
  const highlightRef = useRef(null)

  const styles = `
    .text-shadow {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  `

  useEffect(() => {
    const titleElement = titleRef.current
    const highlightElement = highlightRef.current

    if (titleElement && highlightElement) {
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

      const titleChars = splitText(titleElement)
      const highlightChars = splitText(highlightElement)

      gsap.set([titleElement, highlightElement], { perspective: 400 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleElement,
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 0.05,
          toggleActions: "play reverse play reverse",
          markers: false
        },
      })

      tl.from(titleChars, {
        duration: 1,
        opacity: 1,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.05,
      }).from(
        highlightChars,
        {
          duration: 1,
          opacity: 1,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: "back",
          stagger: 0.05,
        },
        "-=0.25",
      )
    }
  }, [title, heighlight])

  return (
    <>
      <style>{styles}</style>
      <div className="flex flex-wrap items-baseline mt-5">
        <h1 ref={titleRef} className="text-white text-4xl uppercase text-shadow mr-1">
          {title}
        </h1>
        <h2 ref={highlightRef} className="text-4xl uppercase text-shadow text-foreground font-semibold">
          {heighlight}
        </h2>
      </div>
    </>
  )
}

export default Heading