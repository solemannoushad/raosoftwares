import { notFound } from "next/navigation";
import { subContent } from "@/constants/content";
import { removeHyphens } from "@/utils/helper";
import PageClient from "./pageClient";

export async function generateStaticParams() {
  return [
    // Services
    { name: "services", subName: "ai-ml-development" },
    { name: "services", subName: "human-resourcing" },
    { name: "services", subName: "mobile-app-development" },
    { name: "services", subName: "web-app-development" },
    { name: "services", subName: "social-media-marketing" },
    { name: "services", subName: "digital-marketing" },
    { name: "services", subName: "it-consulting" },

    // Technologies
    { name: "technologies", subName: "python" },
    { name: "technologies", subName: "flutter" },
    { name: "technologies", subName: "react" },
    { name: "technologies", subName: "laravel" },
    { name: "technologies", subName: "vue-nuxt" },
    { name: "technologies", subName: "adonis-js" },
    { name: "technologies", subName: "express-js" },
    { name: "technologies", subName: "ionic" },
    { name: "technologies", subName: "kotlin-swift" },
    { name: "technologies", subName: "wordPress-shopify-magento-joomla" },

    // Industries
    { name: "industries", subName: "healthcare" },
    { name: "industries", subName: "education" },
    { name: "industries", subName: "retail" },
    { name: "industries", subName: "media-publishing" },
    { name: "industries", subName: "finance-banking" },
    { name: "industries", subName: "real-estate" },
    { name: "industries", subName: "logistics-supply-chain" },
  ];
}

export default async function Page({ params }) {
  const { name, subName } = await params;
  const content = subContent[name]?.[removeHyphens(subName)];
  
  if (!content) {
    notFound();
  }

  return <PageClient name={name} subName={subName} content={content} />;
}
