import React from 'react'
import Heading from './Heading'
import BlogCard from './BlogCard'
import { blogData } from '@/constants/blogsData'

function BlogsSection() {

  const blogs = blogData;

  return (
    <div className='mb-10 mt-16'>
      <Heading title="Our" heighlight={"Blogs"} />
      <div
        className="my-24 flex overflow-x-scroll scrollbar-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ userSelect: "none" }}
        onMouseDown={e => {
          const container = e.currentTarget;
          let startX = e.pageX - container.offsetLeft;
          let scrollLeft = container.scrollLeft;

          function onMouseMove(ev) {
            const x = ev.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // scroll-fast
            container.scrollLeft = scrollLeft - walk;
          }

          function onMouseUp() {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          }

          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
      >
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
