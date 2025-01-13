import React from 'react'
import Heading from './Heading'
import Card from './Card'

function IndustriesSection() {
  return (
    <div>
      <Heading title={"Industries"} heighlight={"We Serve"} />
      <h2 className='text-white mt-3 italic'><span className='text-foreground'>" </span>Transformative Solutions for Every Sector<span className='text-foreground'> "</span></h2>
      <div className="my-10">
        <div className="flex mr-16 justify-between ">
          <Card
            title={"Healthcare"}
            description={"Revolutionizing patient care with advanced software solutions."}
          />
          <Card title={"Education"} description={"Empowering e-learning with robust platforms."} />
        </div>
        <div className="flex mr-16 justify-between ">
          <Card title={"Retail"} description={"Streamlining e-commerce operations for success."} />
          <Card
            title={"Media & Publishing"}
            description={"Elevating digital and print media strategies."}
          />
        </div>
      </div>
    </div>
  )
}

export default IndustriesSection
