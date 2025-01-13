import React from 'react'

function Button({title, href}) {
  return (
    <a className='text-white cursor-pointer inline-block text-lg font-regular py-4 px-4 rounded-sm bg-foreground align-middle uppercase' href={href}>{title} <span><i className="iconoir-arrow-right align-middle ml-2"></i></span></a>
  )
}

export default Button
