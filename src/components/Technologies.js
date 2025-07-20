
import { useRef, useCallback } from "react"
import { content } from "@/constants/content"
import SpecialityCard from "./SpecialityCard"
import Heading from "./Heading"

const Technologies = () => {
  const cards = content["technologies"].cards
  const containerRef = useRef(null)
  const scrollPositionRef = useRef(0)
  const animationFrameRef = useRef(null)

  const animateScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const scrollWidth = container.scrollWidth
    let newPosition = scrollPositionRef.current + 1
    if (newPosition >= scrollWidth / 2) {
      newPosition = 0
    }
    container.scrollLeft = newPosition
    scrollPositionRef.current = newPosition
    animationFrameRef.current = requestAnimationFrame(animateScroll)
  }, [])

  // Start animation on mount
  const setContainerRef = useCallback((node) => {
    if (containerRef.current) {
      // Clean up previous animation if any
      cancelAnimationFrame(animationFrameRef.current)
    }
    containerRef.current = node
    if (node) {
      animationFrameRef.current = requestAnimationFrame(animateScroll)
    }
  }, [animateScroll])

  // Clean up on unmount
  // This is a workaround since we can't use useEffect
  if (typeof window !== "undefined") {
    if (!window.__tech_scroll_cleanup__) {
      window.__tech_scroll_cleanup__ = []
    }
    window.__tech_scroll_cleanup__.push(() => {
      cancelAnimationFrame(animationFrameRef.current)
    })
  }

  return (
    <>
      <Heading title="Tech We " heighlight={"Excel In"} />
    
    <div className="overflow-hidden my-8">
      <div
        ref={setContainerRef}
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

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    if (window.__tech_scroll_cleanup__) {
      window.__tech_scroll_cleanup__.forEach((fn) => fn())
      window.__tech_scroll_cleanup__ = []
    }
  })
}

export default Technologies

