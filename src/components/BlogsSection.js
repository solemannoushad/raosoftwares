import React from 'react'
import Heading from './Heading'
import BlogCard from './BlogCard'
import { blogData } from '@/constants/blogsData'

function BlogsSection() {

  const blogs = blogData;

  return (
    <div>
      <Heading title="Our" heighlight={"Blogs"} />
      <div className='mt-10 mb-20 flex overflow-x-scroll scrollbar-hidden'>
        {
          blogs.map((blog) => {
            return(
              <BlogCard key={blog.title} blog={blog} />
            )
          })
        }
      </div>
    </div>
  )
}

export default BlogsSection
