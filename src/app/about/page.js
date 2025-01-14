import Card from '@/components/Card'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import SpecialityCard from '@/components/SpecialityCard'
import React from 'react'

function page() {
  return (
    <>
        <Hero title="about" />
        <section className="mx-16">
            <Heading title="Who We" heighlight={"Are?"} />
            <p className='text-white my-8'>Rao Software Solutions stands at the forefront of custom software development, transforming intricate enterprise systems and streamlining business processes to empower success. With a steadfast commitment to collaboration and customer satisfaction, we are your trusted partner for all software-related needs. Unlock your potential with Rao Software Solutions.</p>

            <Heading title="Our" heighlight={"Mission"} />
            <p className='text-white my-8'>From web and mobile app development to ERP and CRM systems, we provide a full suite of solutions.</p>

            <Heading title="What We" heighlight={"Offer"} />
            <div className='flex my-10'>
                <SpecialityCard title="Custom Solutions" description={"Expert developers and business analysts create tailored software to meet your unique needs."} />
                <SpecialityCard title="Comprehensive Services" description={"Expert developers and business analysts create tailored software to meet your unique needs."} />
                <SpecialityCard title="Reliable Support" description={"Our ongoing maintenance services keep your systems running smoothly."} />
            </div>
            <Heading title="Our" heighlight={"Approach"} />
            <p className='text-white my-8'>We build long-term partnerships by prioritizing effective communication, shared visions, and delivering unmatched value.</p>
            <div className='flex'>
                <Card title="Consulting" description={"Expert guidance for web, mobile, and desktop development using cutting-edge technologies."} />
                <Card title="Software Development" description={"Robust and scalable applications tailored to business requirements.."} />
            </div>
            <div className='flex'>
                <Card title="Data Services" description={"Cloud integration and management solutions with AWS, Google Cloud, and Azure."} />
                <Card title="Cybersecurity" description={"Protecting digital assets with comprehensive risk management solutions."} />
            </div>
            <Heading title="Why" heighlight={"Choose Us?"} />
        </section>
    </>
  )
}

export default page
