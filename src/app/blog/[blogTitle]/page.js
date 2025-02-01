"use client"
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import { blogData } from '@/constants/blogsData';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function blogDetail() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
          document.title = `${title} - Devstella`;
        }, []);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      } , 2000)
    } , [])

    const {blogTitle} = useParams();
    const blogContent = blogData.find((blog) => blog.url === `/blog/${blogTitle}/`);
    const {title, description, image, content} = blogContent;

    if(!blogContent){
      notFound();
    }
    
  return (
    <>
      {loading && <Loading />}
      <div className='md:mx-28 mx-10'>
      <div className='text-center'>

      <Hero title={title} />
      </div>
      <div className='flex flex-col items-center'>
        <img className='w-[600px] object-contain' src={`/images/${image}`} />
        <p className='text-white my-10 text-justify'>{description}</p>
        {content}
      </div>
    </div>
    </>
  )
}

export default blogDetail
