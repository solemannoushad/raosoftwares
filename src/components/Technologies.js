import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import { content } from "@/constants/content";

const Technologies = () => {
  const cards = content["technologies"].cards;
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
