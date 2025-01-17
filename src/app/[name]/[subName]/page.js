"use client"
import Hero from '@/components/Hero'
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const {name, subName} = useParams();
  return (
    <section>
        <Hero title={subName} />
    </section>
  )
}

export default page
