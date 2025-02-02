import Link from "next/link";
import React from "react";

function BlogCard({ blog }) {
  const { title, image, url, description } = blog;
  return (
    <div className="rounded-xl overflow-hidden flex-row-reverse cursor-pointer mr-3 bg-white flex min-w-[550px] max-w-[550px] h-[350px]">
      <div className="w-[60%] p-2 relative">
        <div className="absolute right-2 bottom-0 w-24 h-10 z-20">
          <Link href={url} className="hover:text-foreground font-medium">
            Explore
          </Link>
        </div>
        <img
          src={`/images/${image}`}
          className="inverted-radius rounded-xl w-full object-cover h-full"
          alt=""
        />
      </div>
      <div className="content bg-white w-[40%]  p-2 flex flex-col justify-end">
        <Link
          href={url}
          className="title text-background text-base font-medium my-4 hover:text-foreground"
        >
          {title}
        </Link>
        {/* <p>{description.length > 180 ? description.slice(0, 180) + "..." : description}</p> */}
        <div className="blog-btn">
            <Link href={url} className="hover:text-foreground">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
