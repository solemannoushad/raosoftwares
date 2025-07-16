import Link from "next/link"
import CustomImage from "./CustomImage"

function Card({ title, description, icon, href }) {
  return (
    <div className="cursor-pointer py-5 sm:py-7 px-4 sm:px-6 lg:px-10 bg-background inline-block w-full sm:w-[calc(50%-0.5rem)] lg:w-[46%] mb-4 mr-2 lg:mr-10 sm:my-6 text-white border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg group relative overflow-hidden">
      {/* Icon */}
      {icon ? (
        <CustomImage
          className="w-16 sm:w-20 lg:w-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/${icon}.svg`}
          width={150}
          height={150}
        />
      ) : (
        <CustomImage
          className="w-16 sm:w-20 lg:w-24 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          src={`/icons/laravel.svg`}
          width={150}
          height={150}
        />
      )}
      {/* Title */}
      <h1 className="uppercase text-base sm:text-lg font-semibold my-2 transition-colors duration-300 ease-in-out group-hover:text-white">
        {title}
      </h1>
      {/* Description */}
      <p className="text-sm sm:text-base transition-colors duration-300 ease-in-out group-hover:text-white">
        {description.length > 150 ? `${description.substring(0, 150)}...` : description}
      </p>

      {/* Button */}
      {href && (
        <Link
          href={href || "/"}
          className="mt-4 text-foreground text-base sm:text-lg flex items-center transition-all duration-300 ease-in-out hover:text-white"
        >
          Read more
          <span className="ml-2">
            <i className="iconoir-arrow-up-right"></i>
          </span>
        </Link>
      )}
      {/* Hover effect borders */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-foreground transition-all duration-300 ease-in-out group-hover:h-full delay-150"></span>
      <span className="absolute top-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 ease-in-out group-hover:w-full delay-300"></span>
      <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-foreground transition-all duration-300 ease-in-out group-hover:h-full delay-450"></span>
    </div>
  )
}

export default Card

