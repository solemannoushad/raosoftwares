import { notFound } from "next/navigation";
import { blogData } from "@/constants/blogsData";
import BlogDetailClient from "./blogDetailClient";

export async function generateStaticParams() {
  return [
    { blogTitle: "impact-of-deepseek" },
    { blogTitle: "flutter-app-performance" },
    { blogTitle: "recruitment-and-selection-process" },
    { blogTitle: "start-app-dev" },
  ];
}

export default async function Page({ params }) {
  const { blogTitle } = params;
  console.log(blogTitle);

  const blogContent = blogData.find(
    (blog) => blog.url.replace("/blog/", "").replace("/", "") === blogTitle
  );

  if (!blogContent) {
    notFound();
  }

  return <BlogDetailClient blogContent={blogContent} />;
}