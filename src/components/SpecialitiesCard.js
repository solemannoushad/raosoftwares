import React from 'react';

function SpecialitiesCard({ title, icon, href }) {
  return (
    <a
      href={href}
      className="py-7 px-9 mx-4 rounded-lg bg-white inline-flex justify-center items-center flex-col text-black transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gray-100 group"
    >
      {/* Icon */}
      <div className="text-black mb-4 transition-colors duration-300 ease-in-out group-hover:text-foreground">
        {icon}
      </div>
      {/* Title */}
      <p className="text-black text-xl font-medium transition-colors duration-300 ease-in-out group-hover:text-foreground">
        {title}
      </p>
    </a>
  );
}

export default SpecialitiesCard;
