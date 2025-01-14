import React from 'react'
import Heading from './Heading'
import BlogCard from './BlogCard'

function BlogsSection() {
  return (
    <div>
      <Heading title="Our" heighlight={"Blogs"} />
      <div className='my-10 flex'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}

export default BlogsSection
