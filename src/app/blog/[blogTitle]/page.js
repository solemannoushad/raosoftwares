"use client"
import Hero from '@/components/Hero';
import { blogData } from '@/constants/blogsData';
import { notFound, useParams } from 'next/navigation';
import React from 'react'

function blogDetail() {
    const {blogTitle} = useParams();
    const blogContent = blogData.find((blog) => blog.url === `/blog/${blogTitle}/`);
    const {title, description, image, content} = blogContent;

    if(!blogContent){
      notFound();
    }
    
  return (
    <div className='mx-28'>
      <div className='text-center'>

      <Hero title={title} />
      </div>
      <div className='flex flex-col items-center'>
        <img className='w-[600px] h-[600px] object-contain ' src={`/images/${image}`} />
        <p className='text-white my-10'>{description}</p>
        {content}
      </div>
    </div>
  )
}

export default blogDetail
