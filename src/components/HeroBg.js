import React from 'react'
import Button from './Button'

function HeroBg() {
  return (
    <>
    <div className='h-full text-white my-44 pr-80' >
      <h1 className='text-6xl font-semibold'>Empowering <span className='text-foreground'>Businesses</span> Through Innovation</h1>
      <p className='my-5 text-justify pr-14'>Experience the transformative power of Rao Software Solutions. We specialize in developing custom software that helps businesses thrive in today’s competitive environment. With a focus on collaboration and client satisfaction, we deliver tailored solutions that meet your unique needs.</p>
      <div className='mt-8'>
        <Button title={"Explore Our Services"} />
      </div>
    </div>
    </>
  )
}

export default HeroBg