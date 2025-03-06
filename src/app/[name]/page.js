import { notFound } from "next/navigation";
import { content } from "@/constants/content";
import PageClient from "./pageClient";


export async function generateStaticParams() {
  return [
    { name: "services" },
    { name: "technologies" },
    { name: "industries" },
  ];
}

export default async function Page({ params }) {
  const { name } = await params;
  const pageContent = content[name];

  if (!pageContent) {
    notFound();
  }

  return <PageClient name={name} pageContent={pageContent} />;
}
