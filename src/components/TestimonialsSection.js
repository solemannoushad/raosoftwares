"use client"

import React, { useState } from "react"
import { testinomials } from "@/constants/testinomials"
import Heading from "./Heading"

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testinomials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testinomials.length) % testinomials.length)
  }

  const setTestimonial = (index) => {
    setCurrent(index)
  }

  const currentTestimonial = testinomials[current]

  return (
    <div className="w-full my-20">
      <Heading title="client" heighlight={"testinomials"} />
      <div className="flex my-10 bg-white w-[95%]">

        <div className="hidden w-1/2 bg-foreground rounded-br-[200px] items-center lg:flex justify-center">
          <h1 className="text-white text-6xl font-medium   px-10 text-center capitalize">What out clients are saying</h1>
        </div>

        <div className="w-full lg:w-1/2 relative p-6 shadow-md text-center py-10 px-20 bg-white">
          {/* Arrows for navigation */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer" onClick={prevTestimonial}>
            <span className="text-5xl text-black hover:text-foreground transition">&larr;</span>
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer" onClick={nextTestimonial}>
            <span className="text-5xl text-black hover:text-foreground transition">&rarr;</span>
          </div>
          {/* Testimonial Content */}
          <div>
            <h3 className="text-2xl font-semibold text-black">
              {currentTestimonial.title}
            </h3>
            <p className="mt-4 text-black italic text-xl">
              "{currentTestimonial.comment}"
            </p>
            <p className="mt-6 font-medium text-black">
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
    </div>
  )
}

export default TestimonialsSection
