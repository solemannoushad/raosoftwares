"use client";

import React, { useState } from "react";
import { testinomials } from "@/constants/testinomials";
import Heading from "./Heading";

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testinomials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testinomials.length) % testinomials.length);
  };

  const currentTestimonial = testinomials[current];

  return (
    <div className="w-full my-20">
      <Heading title="client" heighlight={"testinomials"} />
      <div className="relative p-6 border rounded shadow-md text-center py-10 px-20 my-14 mr-16 bg-white">
        {/* Arrows for navigation */}
        <div
          className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer"
          onClick={prevTestimonial}
        >
          <span className="text-5xl text-gray-500 hover:text-foreground transition">
            &larr;
          </span>
        </div>
        <div
          className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
          onClick={nextTestimonial}
        >
          <span className="text-5xl text-gray-500 hover:text-foreground transition">
            &rarr;
          </span>
        </div>
        {/* Testimonial Content */}
        <h3 className="text-2xl font-semibold">{currentTestimonial.title}</h3>
        <p className="mt-4 text-gray-600 italic text-xl">"{currentTestimonial.comment}"</p>
        <p className="mt-6 font-medium text-gray-700">- {currentTestimonial.person}</p>
      <div className="flex justify-center mt-8 space-x-2">
        {testinomials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-foreground" : "bg-gray-300"
            } transition`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      </div>
      {/* Dots for navigation */}
    </div>
  );
}

export default TestimonialsSection;
