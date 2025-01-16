import React from "react";
import Heading from "./Heading";
import Button from "./Button";

function AboutSection() {
  return (
    <div className="flex mt-10" style={{ height: "100vh" }}>
      <div className="about-section-left w-1/2"></div>
      <div className="about-section-right w-1/2">
        <Heading title="Our" heighlight={"Company"} />
        <p className="text-white mt-10 text-justify mr-12">
          A leading development company dedicated to delivering top-quality
          solutions for your business. With a team of skilled and experienced
          web developers, we specialize in creating custom websites that are
          tailored to meet the unique needs and goals of our clients. Whether
          you're looking to build a brand new website from scratch, or you need
          to revamp your existing site, we have the expertise to deliver the
          results you're looking for. Our services include website design and
          development, e-commerce solutions, content management systems, and
          mobile app development, to name a few. With a commitment to excellence
          and customer satisfaction, we strive to exceed our client's
          expectations every step of the way. Let us help you take your online
          presence to the next level. Contact us today to learn more.
        </p>
        <div className="mt-5">
            <Button title="Read More" href={'/about'} />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
