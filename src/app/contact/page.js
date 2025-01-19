import ContactForm from '@/components/ContactForm'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import React from 'react'

function page() {

    const icons = [
        {
            name: 'mail',
            text: 'info@raosoftwares.com'
        },
        {
            name: 'phone',
            text: '+123-456-7890'
        },
        {
            name: 'map-pin',
            text: '123 Innovation Drive, Tech City'
        },
    ]

  return (
    <section className="ml-16">
        <Hero title={"Contact"} heighlight={"Us"} />
        <div>
            <Heading title="Let’s Turn Your Vision" heighlight={"into Reality"} />
            <h2 className='text-white mt-3 italic'><span className='text-foreground'>" </span>Share your vision with us and explore tailored solutions that drive success. Connect with Rao Software Solutions today<span className='text-foreground'> "</span></h2>
            <div className='my-10'>
                <ContactForm />
            </div>
            <div className='flex my-8 justify-center'>
                {icons.map((i) => {
                    return(
                        <div key={i.name} className='flex items-center mx-2 cursor-pointer group'>                        
                            <div className='border-2 border-foreground inline-flex items-center justify-normal rounded-full cursor-pointer group-hover:bg-foreground transition-all duration-100'>
                                <i className={`iconoir-${i.name} text-foreground p-2 text-xl transition-all duration-500 group-hover:text-white`}></i>
                            </div>
                            <div className='text-white ml-3 text-sm'>{i.text}</div>
                        </div>
                    )
                }) }
            </div>
        </div>
    </section>
  )
}

export default page
