import Link from 'next/link'
import React from 'react'

function Button({ title, href, onCLick }) {
  return (
    <Link
      className="relative cursor-pointer inline-block text-lg font-medium py-4 px-6 rounded-sm bg-foreground align-middle uppercase overflow-hidden group text-white hover:text-foreground transition-colors duration-300 ease-in-out"
      href={href || ''}
      onClick={onCLick}
    >
      <span className="relative z-10">{title}</span>
      <span className="relative z-10">
        <i className="iconoir-arrow-right align-middle ml-2 group-hover:ml-4 group-hover:text-foreground transition-all duration-300 ease-in-out"></i>
      </span>
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out origin-left z-0"></div>
    </Link>
  )
}

export default Button
