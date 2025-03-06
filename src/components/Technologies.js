"use client"

import { useState, useEffect, useRef } from "react"
import { content } from "@/constants/content"
import SpecialityCard from "./SpecialityCard"
import Heading from "./Heading"

const Technologies = () => {
  const cards = content["technologies"].cards
  const containerRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    const clientWidth = container.clientWidth

    const scroll = () => {
      setScrollPosition((prevPosition) => {
        let newPosition = prevPosition + 1
        if (newPosition >= scrollWidth / 2) {
          newPosition = 0
        }
        container.scrollLeft = newPosition
        return newPosition
      })
    }

    const intervalId = setInterval(scroll, 15) // Adjust the interval for smoother/faster scrolling

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Heading title="Tech We " heighlight={"Excel In"} />
    
    <div className="overflow-hidden my-8">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden my-14 transition-all duration-500 ease-linear"
        style={{ width: "200%" }}
      >
        {[...cards, ...cards].map((card, index) => (
          <SpecialityCard key={`${card.title}-${index}`} title={card.title} icon={card.icon} href={card.href} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Technologies

