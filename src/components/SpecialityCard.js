import React from 'react'

function SpecialityCard({title, description}) {
  return (
    <div className='text-white mr-14 border flex flex-col items-center px-3 py-4 w-1/3 rounded-md cursor-pointer'>
      <div className="icon">
        <img src="http://localhost:3000/cyber-security.png" style={{width: 120}} alt="" />
      </div>
      <h1 className='text-foreground font-semibold text-xl mb-2'>{title}</h1>
      <p className='text-center'>{description}</p>
    </div>
  )
}

export default SpecialityCard
