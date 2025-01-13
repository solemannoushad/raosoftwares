import React from 'react'
import Heading from './Heading'
import Card from './Card'

function SolutionsSection() {
  return (
    <div>
      <Heading title={"Solutions"} heighlight={"We Provide"} />
      <h2 className='text-white mt-3 italic'><span className='text-foreground'>" </span>Your Partner in Digital Transformation<span className='text-foreground'> "</span></h2>
      <div className="my-10">
        <div className="flex mr-16 justify-between ">
          <Card
            title={"Social Media Marketing"}
            description={"Strategic campaigns for impactful engagement."}
          />
          <Card title={"Product Engineering"} description={"Comprehensive product development and integration."} />
        </div>
        <div className="flex mr-16 justify-between ">
          <Card title={"Web & Mobile App Development"} description={"Tailored applications that deliver exceptional user experiences."} />
          <Card
            title={"API Development"}
            description={"Enabling seamless system integrations."}
          />
        </div>
      </div>
    </div>
  )
}

export default SolutionsSection
