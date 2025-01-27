import React from "react";
import Heading from "./Heading";
import SpecialityCard from "./SpecialityCard";

function Specialities() {
  return (
    <section>
      <Heading title="Our" heighlight={"Core Specialties"} />
      <div className="flex my-10 flex-wrap justify-center items-center">
        <SpecialityCard
          title={"Consulting"}
          description={
            "Helping businesses innovate with strategic software insights."
          }
          icon={'consulting'}
        />
        <SpecialityCard
          title={"Custom Development"}
          description={"Creating unique, scalable solutions."}
          icon={'development'}
        />
        <SpecialityCard
          title={"Cybersecurity"}
          description={"Safeguarding your business’s digital presence."}
          icon={'security'}
        />
      </div>
    </section>
  );
}

export default Specialities;
