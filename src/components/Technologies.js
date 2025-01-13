import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const Technologies = () => {
  return (
    <div>
      <Heading title="Technologies We" heighlight={"Excel In"} />
      <div className="my-10">
        <div className="flex mr-16 justify-between ">
          <Card
            title={"Flutter"}
            description={"Seamless cross-platform applications."}
          />
          <Card title={"Laravel"} description={"Powerful PHP web frameworks."} />
        </div>
        <div className="flex mr-16 justify-between ">
          <Card title={"React.js"} description={"Dynamic user interfaces."} />
          <Card
            title={"Python & Swift"}
            description={"Advanced programming solutions."}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
