import React from "react";

export default function Navbar() {
  return (
    <nav
      className="px-7 py-5 flex justify-between items-center bg-background"
      id="navbar"
    >
      <div className="logo text-xl text-white tracking-widest">
        RAOSOFTWARES<span className="text-foreground">.</span>
      </div>
      <ul className="menu flex">
        <li>
          <a
            className="mx-2 text-white text-sm flex items-center font-regular hover:text-foreground"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="mx-2 text-white text-sm flex items-center font-regular hover:text-foreground"
            href=""
          >
            About
          </a>
        </li>
        <li>
          <a
            className="dropdown-link mx-2 relative text-white text-sm flex items-center font-regular hover:text-foreground"
            href=""
          >
            Services{" "}
            <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>{" "}
          <ul className="dropdown absolute text-black bg-white py-3 px-5 b-10 text-left" style={{width: "17rem", left: "0%", top: "170%", visibility: "hidden", opacity: 0}}>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Social Media Marketing</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Product Engineering</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Web & Mobile App Development</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">API Development</a></li>
          </ul>
          </a>
        </li>
        <li>
          <a
            className="dropdown-link mx-2 text-white text-sm flex items-center font-regular hover:text-foreground relative"
            href=""
          >
            Technologies{" "}
            <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>{" "}
            <ul className="dropdown absolute text-black bg-white py-3 px-5 b-10 text-left" style={{width: "17rem", left: "0%", top: "170%", visibility: "hidden", opacity: 0}}>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Flutter</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Laravel</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">React.js</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Python & Swift</a></li>
          </ul>
          </a>
        </li>
        <li>
          <a
            className="dropdown-link mx-2 text-white text-sm flex items-center font-regular hover:text-foreground relative"
            href=""
          >
            Solutions{" "}
            <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>{" "}
            <ul className="dropdown absolute text-black bg-white py-3 px-5 b-10 text-left" style={{width: "17rem", left: "0%", top: "170%", visibility: "hidden", opacity: 0}}>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Customer Relationship Management</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Enterprise Resource Planning</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Inventory Management</a></li>
          </ul>
          </a>
        </li>
        <li>
          <a
            className="dropdown-link mx-2 text-white text-sm flex items-center font-regular hover:text-foreground relative"
            href=""
          >
            Industries{" "}
            <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>{" "}
            <ul className="dropdown absolute text-black bg-white py-3 px-5 b-10 text-left" style={{width: "17rem", left: "0%", top: "170%", visibility: "hidden", opacity: 0}}>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Healthcare</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Education</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Retail</a></li>
            <li className="my-4 border-b pb-2"><a href="" className="text-sm hover:text-foreground">Media & Publishing</a></li>
          </ul>
          </a>
        </li>
        <li>
          <a
            className="mx-2 text-white text-sm flex items-center font-regular hover:text-foreground"
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="border-2 rounded-full cursor-pointer border-foreground p-3">
        <a className="text-foreground font-semibold uppercase text-sm" href="/">
          Schedule Free Consultation
        </a>
      </div>
    </nav>
  );
}
