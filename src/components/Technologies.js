import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import { content } from "@/constants/content";
import Link from "next/link";

const Technologies = () => {
  const cards = content["technologies"].cards.slice(0, 4);

  return (
    <div>
      <Heading title="Technologies We" heighlight={"Excel In"} />
      <div className="my-10 flex flex-wrap">
        {cards.map((card) => {
          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
              href={card.href}
            />
          );
        })}
      <h2 className="text-white text-center w-full tracking-wide">BRING THEM TOGETHER AND YOU OVERCOME THE ORDINARY. <Link className="text-foreground" href={'/technologies'}>VIEW MORE TECHNOLOGIES</Link></h2>
      </div>
    </div>
  );
};

export default Technologies;
