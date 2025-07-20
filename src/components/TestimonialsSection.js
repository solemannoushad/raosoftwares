
import React from "react";
import { testinomials } from "@/constants/testinomials";
import Heading from "./Heading";
import TestimonialCard from "./TestinomialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function TestimonialsSection() {

  // Removed useState and useEffect for slidesPerView

  return (
    <div className="w-full my-24">
      <Heading
        title="Don't just take our words for it – "
        heighlight={"Take theirs!"}
      />
      <div className="my-24 flex justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // Use Swiper's breakpoints for responsive slidesPerView
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1000}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testinomials.map((t) => {
            return (
              <SwiperSlide key={t.title}>
                <TestimonialCard
                  name={t.person}
                  title={t.title}
                  imageUrl={t.img}
                  testimonial={t.comment}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSection;
