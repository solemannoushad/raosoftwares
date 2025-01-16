import React from 'react'
import Button from './Button'

function HeroBg() {
  return (
    <>
    <div className='h-screen text-white flex flex-col justify-center pr-80 relative z-30' >
      <h1 className='text-6xl font-semibold mt-10'>Empowering <span className='text-foreground'>Businesses</span> Through Innovation</h1>
      <p className='my-5 text-justify pr-14'>Experience the transformative power of Rao Software Solutions. We specialize in developing custom software that helps businesses thrive in today’s competitive environment. With a focus on collaboration and client satisfaction, we deliver tailored solutions that meet your unique needs.</p>
      <div className='mt-8'>
        <Button title={"Explore Our Services"} />
      </div>
    </div>
    <div className="absolute top-0 left-0 w-full h-screen fade z-20"></div>
    <div className='absolute top-0 left-0 w-screen h-screen z-10'>
    <video className='w-screen h-full object-cover' autoPlay muted loop>
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
    </div>
    </>
  )
}

export default HeroBg