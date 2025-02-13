import Link from 'next/link';
import React from 'react';

function SpecialityCard({ title, description, icon, href }) {
  return (
    <div
      className="text-white mr-8 border border-gray-700 flex my-6 flex-col items-center px-3 py-4 max-w-[320px] min-w-[290px] rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-800 group"
    >
      {/* Icon */}
      <div className="icon mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-360">
      <img
          className="w-24 h-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/${icon}.svg`}
          alt=""
        />
      </div>
      {/* Title */}
      <h1 className="text-foreground text-center font-semibold text-xl mb-2 transition-colors duration-300 ease-in-out">
        {title}
      </h1>
      {/* {href && (
        <Link
          href={href || "/"}
          className="mt-4 text-foreground text-base sm:text-lg flex items-center transition-all duration-300 ease-in-out hover:text-white"
        >
          Read more
          <span className="ml-2">
            <i className="iconoir-arrow-up-right"></i>
          </span>
        </Link>
      )} */}
      {/* Description */}
      <p className="text-center transition-colors duration-300 ease-in-out group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

export default SpecialityCard;