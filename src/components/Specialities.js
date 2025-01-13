import React from 'react'
import Heading from './Heading'
import SpecialityCard from './SpecialityCard'

function Specialities() {
  return (
    <section>
        <Heading title="Our" heighlight={"Core Specialties"} />
        <div className='flex my-10'>
            <SpecialityCard title={"Consulting"} description={"Helping businesses innovate with strategic software insights."} />
            <SpecialityCard title={"Custom Development"} description={"Creating unique, scalable solutions."} />
            <SpecialityCard title={"Cybersecurity"} description={"Safeguarding your business’s digital presence."} />
        </div>
    </section>
  )
}

export default Specialities
