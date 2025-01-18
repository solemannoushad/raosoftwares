import Link from "next/link";
import React from "react";

function Card({ title, description, icon, href }) {
  return (
    <div className="cursor-pointer py-7 px-10 bg-background inline-block w-[46%] mr-2 my-6 text-white border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg group relative overflow-hidden">
      {/* Icon */}
      {icon ? (
        <img
          className="w-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/${icon}.svg`}
          alt=""
        />
      ) : (
        <img
          className="w-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/laravel.svg`}
          alt=""
        />
      )}
      {/* Title */}
      <h1 className="uppercase text-lg font-semibold my-2 transition-colors duration-300 ease-in-out group-hover:text-white">
        {title}
      </h1>
      {/* Description */}
      <p className="transition-colors duration-300 ease-in-out group-hover:text-white">
        {description}
      </p>
      {/* Button */}
      <Link
        href={href || "/"}
        className="mt-4 text-foreground text-lg flex items-center transition-all duration-300 ease-in-out hover:text-white"
      >
        Read more
        <span className="ml-2">
          <i className="iconoir-arrow-up-right"></i>
        </span>
      </Link>
      {/* ::after hover effect */}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
    </div>
  );
}

export default Card;
