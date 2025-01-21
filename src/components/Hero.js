import React from "react";
import Heading from "./Heading";

function Hero({ title, heighlight }) {
  return (
    <>
      <div className="h-screen flex items-center relative justify-center z-30">
        <Heading title={title} heighlight={heighlight} />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen fade z-20"></div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        <video className="w-screen h-full object-cover" autoPlay muted loop>
          <source src="/hero-bg1.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Hero;
