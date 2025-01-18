"use client";
import React, { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`bg-black z-50 rounded-full fixed bottom-20 right-8 flex items-center justify-center shadow-sm shadow-white hover:shadow-xl transition-all duration-300 ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <i className="iconoir-nav-arrow-up text-2xl font-black text-white p-3"></i>
      </button>
    </div>
  );
}

export default BackToTop;
