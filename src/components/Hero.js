import React from 'react'
import Heading from './Heading'

function Hero({title}) {
  return (
    <div className='h-screen flex items-center justify-center'>
      {/* <h1 className='text-foreground text-4xl font-bold uppercase'>{title}</h1> */}
      <Heading title="Our" heighlight={"Company"} />
    </div>
  )
}

export default Hero
