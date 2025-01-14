import React from "react";

function BlogCard() {
  return (
    <div className="w-[350px] border cursor-pointer mr-3">
      <img src="/blog1.webp" className="w-full object-cover" alt="" />
      <div className="content bg-white px-8 py-4">
        <div className=" flex items-center">
          <i className="iconoir-calendar text-foreground"></i>
          <p className="text-background ml-3">02 Apr 2023</p>
        </div>
        <div className="title text-background text-lg font-medium my-4 hover:text-foreground">
          Exploring the Benefits of Web 3.0: A Decentralized Futur
        </div>
        <div className="blog-btn">
            <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
