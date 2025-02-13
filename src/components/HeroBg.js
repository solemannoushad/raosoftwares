import React from "react";
import Button from "./Button";

function HeroBg() {
  return (
    <>
      <div className="h-screen text-white flex flex-col justify-center items-center text-center relative z-30 md:px-48">
        <h1 className="text-6xl font-semibold mt-10 text-center capitalize">
          AI for everyone, everywhere, together.
        </h1>
        <p className="my-5 text-xl text-center pr-14">
          Pioneering Next-Gen software Solutions
        </p>
        <div className="mt-8">
          <Button title={"Explore Our Services"} href={"/services"} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen fade z-20"></div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        <video className="w-screen h-full object-cover" autoPlay muted loop>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default HeroBg;
