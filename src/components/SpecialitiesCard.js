import React from 'react'

function SpecialitiesCard({title, icon, href}) {
  return (
    <a href={href} className='py-7 px-9 mx-4 rounded-full bg-white inline-flex justify-center items-center flex-col'>
      {icon}
      <p className='text-black text-xl font-medium'>{title}</p>
    </a>
  )
}

export default SpecialitiesCard
