"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function StatsBox() {
  const stats = [
    {
      title: "Projects Delivered",
      stats: "100+",
      value: 100,
    },
    {
      title: "Client Satisfaction",
      stats: "100%",
      value: 100,
    },
    {
      title: "High Positive Reviews",
      stats: "340+",
      value: 340,
    },
    {
      title: "Years of Expertise",
      stats: "10+",
      value: 10,
    },
  ]

  const boxRef = useRef(null)
  const statRefs = useRef([])

  useEffect(() => {
    const box = boxRef.current
    const statElements = statRefs.current

    if (box && statElements.length === stats.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      })

      statElements.forEach((statEl, index) => {
        const countElement = statEl.querySelector("h1")
        const stat = stats[index]

        tl.fromTo(
          countElement,
          { innerText: "0" },
          {
            innerText: stat.value,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: () => {
              if (stat.stats.includes("+")) {
                countElement.innerText += "+"
              } else if (stat.stats.includes("%")) {
                countElement.innerText += "%"
              }
            },
          },
          index * 0.2,
        )
      })
    }
  }, [stats])

  return (
    <div ref={boxRef} className="flex bg-white py-10 px-16 items-start justify-between">
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.title}
            ref={(el) => (statRefs.current[index] = el)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <h1 className="text-4xl font-medium text-black group-hover:text-foreground transition-all duration-300">
              0
            </h1>
            <p className="text-lg font-light text-black">{stat.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default StatsBox

