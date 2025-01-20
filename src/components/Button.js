"use client"

import Link from "next/link"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Button({ title, href, onClick }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top bottom-=100", // Start animation earlier
            end: "center center+=100", // End animation sooner
            scrub: 1, // Smooth scrubbing, takes 1 second to catch up to the scrollbar
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <Link
      ref={buttonRef}
      className="relative cursor-pointer inline-block text-lg font-medium py-4 px-6 rounded-sm bg-foreground align-middle uppercase overflow-hidden group text-white hover:text-foreground transition-colors duration-300 ease-in-out opacity-0"
      href={href || ""}
      onClick={onClick}
    >
      <span className="relative z-10">{title}</span>
      <span className="relative z-10">
        <i className="iconoir-arrow-right align-middle ml-2 group-hover:ml-4 group-hover:text-foreground transition-all duration-300 ease-in-out"></i>
      </span>
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-left z-0"></div>
    </Link>
  )
}

export default Button

