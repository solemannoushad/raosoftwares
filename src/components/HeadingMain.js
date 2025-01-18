import React from 'react'

function HeadingMain({heading, subHeading}) {
  return (
    <div>
      <h1 className='text-white uppercase text-6xl'>{heading}</h1>
      <h2 className='text-slate-400 uppercase text-6xl'>{subHeading}</h2>
    </div>
  )
}

export default HeadingMain
