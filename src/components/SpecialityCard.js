import React from 'react';

function SpecialityCard({ title, description, icon }) {
  return (
    <div
      className="text-white mr-14 border border-gray-700 flex flex-col items-center px-3 py-4 w-1/3 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-800 group"
    >
      {/* Icon */}
      <div className="icon mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-360">
      <img
          className="w-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/${icon}.svg`}
          alt=""
        />
      </div>
      {/* Title */}
      <h1 className="text-foreground font-semibold text-xl mb-2 transition-colors duration-300 ease-in-out">
        {title}
      </h1>
      {/* Description */}
      <p className="text-center transition-colors duration-300 ease-in-out group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

export default SpecialityCard;