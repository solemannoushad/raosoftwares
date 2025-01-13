import React from 'react'

function Card({title, description}) {
  return (
    <div className='cursor-pointer py-7 px-10 bg-background inline-block w-1/2 mr-6 my-6 text-white border border-gray-700'>
      <i className="iconoir-vue-js text-foreground text-6xl"></i>
      <h1 className='uppercase text-lg font-semibold my-2'>{title}</h1>
      <p>{description}</p>
      <button className='mt-4 text-foreground text-lg'>Read more <span><i className="iconoir-arrow-up-right"></i></span></button>
    </div>
  )
}

export default Card
