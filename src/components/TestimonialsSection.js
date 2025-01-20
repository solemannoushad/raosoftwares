"use client"

import React, { useState, useRef, useEffect } from "react"
import { testinomials } from "@/constants/testinomials"
import Heading from "./Heading"
import { gsap } from "gsap"

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const commentRef = useRef(null)
  const personRef = useRef(null)

  const animateContent = (direction) => {
    const xOffset = direction === "next" ? 100 : -100

    gsap
      .timeline()
      .to(contentRef.current, { opacity: 0, x: -xOffset, duration: 0.3 })
      .set(contentRef.current, { x: xOffset })
      .to(contentRef.current, { opacity: 1, x: 0, duration: 0.3 })
      .from(titleRef.current, { y: 20, opacity: 0, duration: 0.2 }, "-=0.1")
      .from(commentRef.current, { y: 20, opacity: 0, duration: 0.2 }, "-=0.1")
      .from(personRef.current, { y: 20, opacity: 0, duration: 0.2 }, "-=0.1")
  }

  const nextTestimonial = () => {
    animateContent("next")
    setCurrent((prev) => (prev + 1) % testinomials.length)
  }

  const prevTestimonial = () => {
    animateContent("prev")
    setCurrent((prev) => (prev - 1 + testinomials.length) % testinomials.length)
  }

  const setTestimonial = (index) => {
    if (index > current) {
      animateContent("next")
    } else if (index < current) {
      animateContent("prev")
    }
    setCurrent(index)
  }

  const currentTestimonial = testinomials[current]

  useEffect(() => {
    gsap.from(contentRef.current, { opacity: 0, y: 50, duration: 0.5 })
  }, [])

  return (
    <div className="w-full my-20">
      <Heading title="client" heighlight={"testinomials"} />
      <div className="relative p-6 rounded shadow-md text-center py-10 px-20 my-14 mr-16 bg-slate-700">
        {/* Arrows for navigation */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer" onClick={prevTestimonial}>
          <span className="text-5xl text-white hover:text-foreground transition">&larr;</span>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" onClick={nextTestimonial}>
          <span className="text-5xl text-white hover:text-foreground transition">&rarr;</span>
        </div>
        {/* Testimonial Content */}
        <div ref={contentRef}>
          <h3 ref={titleRef} className="text-2xl font-semibold text-white">
            {currentTestimonial.title}
          </h3>
          <p ref={commentRef} className="mt-4 text-white italic text-xl">
            "{currentTestimonial.comment}"
          </p>
          <p ref={personRef} className="mt-6 font-medium text-white">
            - {currentTestimonial.person}
          </p>
        </div>
        {/* Dots for navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testinomials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === current ? "bg-foreground" : "bg-gray-300"
              } transition`}
              onClick={() => setTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection

