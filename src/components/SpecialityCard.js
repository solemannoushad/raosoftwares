import React from 'react';
import CustomImage from './CustomImage';

function SpecialityCard({ title, description, icon, href }) {
  return (
    <div
      className="text-white mr-8 border border-gray-700 flex my-6 flex-col items-center px-3 py-4 max-w-[320px] min-w-[290px] rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-800 group"
    >
      {/* Icon */}
      <div className="icon mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-360">
        <CustomImage 
          className="w-24 h-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/${icon}.svg`}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      {/* Title */}
      <h1 className="text-foreground text-center font-semibold text-xl mb-2 transition-colors duration-300 ease-in-out">
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