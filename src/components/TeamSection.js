import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import Image from "next/image";

function TeamSection() {
  return (
    <div className="w-full my-24">
      <Heading title={"Meet"} heighlight={"our team"} />
      <div className="flex my-16 items-center justify-center">
        <Image src="/images/team.svg" alt="Devstella Team" width={1000} height={1000} loading="lazy" placeholder="blur" blurDataURL="/images/team.svg" />
        <div className="absolute mb-16">
          <Link
            href={"/contact"}
            className="bg-foreground rounded-full flex px-5 md:px-8 lg:px-11 py-1 md:py-4 items-center justify-center shadow-[0_0_1rem_var(--foreground)] transition-shadow duration-300 hover:shadow-none"
          >
            <img src="/icons/cursor.svg" alt="" />
            <p className="text-white ml-4 text-2xl font-bold">Devs Den</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
