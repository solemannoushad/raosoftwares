import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Link from 'next/link'

function TeamSection() {
  return (
    <div className='w-full'>
      <Heading title={"Meet"} heighlight={"our team"} />
      <div className='flex my-10 items-center justify-center'>
        <img src='/icons/team.svg' />
        <div className='absolute mb-16'>
        <Link
  href={"/contact"}
  className="bg-foreground rounded-full flex px-2 md:px-5 lg:px-10 py-1 md:py-4 items-center justify-center shadow-[0_0_1rem_var(--foreground)] transition-shadow duration-300 hover:shadow-none"
>
  <img src="/icons/cursor.svg" alt="" />
  <p className="text-white ml-4 text-lg font-bold">Get started for free</p>
</Link>


        </div>
      </div>
    </div>
  )
}

export default TeamSection
