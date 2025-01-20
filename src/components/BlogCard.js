import Link from "next/link";
import React from "react";

function BlogCard({blog}) {
  const {title, image, url} = blog;
  return (
    <div className="min-w-[300px] border border-slate-400 cursor-pointer mr-3 bg-white">
      <img src={`/images/${image}`} className="w-full object-cover h-[200px]" alt="" />
      <div className="content bg-white px-4 py-4 justify-between">
        {/* <div className=" flex items-center">
          <i className="iconoir-calendar text-foreground"></i>
          <p className="text-background ml-3">02 Apr 2023</p>
        </div> */}
        <div className="title text-background text-base font-medium my-4 hover:text-foreground">
          {title}
        </div>
        <div className="blog-btn">
            <Link href={url} className="hover:text-foreground">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
