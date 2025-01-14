import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      // href: "/services",
      dropdown: [
        { name: "Social Media Marketing", href: "#social-media" },
        { name: "Product Engineering", href: "#product-engineering" },
        { name: "Web & Mobile App Development", href: "#web-dev" },
        { name: "API Development", href: "#api-dev" },
      ],
    },
    {
      name: "Technologies",
      // href: "/technologies",
      dropdown: [
        { name: "Flutter", href: "#flutter" },
        { name: "Laravel", href: "#laravel" },
        { name: "React.js", href: "#react" },
        { name: "Python & Swift", href: "#python-swift" },
      ],
    },
    {
      name: "Solutions",
      // href: "/solutions",
      dropdown: [
        { name: "Customer Relationship Management", href: "#crm" },
        { name: "Enterprise Resource Planning", href: "#erp" },
        { name: "Inventory Management", href: "#inventory" },
      ],
    },
    {
      name: "Industries",
      // href: "/industries",
      dropdown: [
        { name: "Healthcare", href: "#healthcare" },
        { name: "Education", href: "#education" },
        { name: "Retail", href: "#retail" },
        { name: "Media & Publishing", href: "#media" },
      ],
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="px-7 py-5 flex justify-between items-center bg-background"
      id="navbar"
    >
      <div className="logo text-xl text-white tracking-widest">
        RAOSOFTWARES<span className="text-foreground">.</span>
      </div>
      <ul className="menu flex">
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <li key={index} className="relative group">
              <Link
                className="dropdown-link mx-2 text-white text-sm flex items-center font-regular hover:text-foreground"
                href={"#"}
                // onClick={(e) => e.preventDefault()}
              >
                {item.name}{" "}
                <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>
              </Link>
              <ul
                className="dropdown absolute text-black bg-white py-3 px-5 b-10 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"
                style={{ width: "17rem", left: "0%", top: "170%" }}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="my-4 border-b pb-2">
                    <a
                      href={subItem.href}
                      className="text-sm hover:text-foreground"
                    >
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index}>
              <Link
                className="mx-2 text-white text-sm flex items-center font-regular hover:text-foreground"
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="relative group border-2 rounded-full cursor-pointer border-foreground p-3 overflow-hidden">
        <div className="absolute inset-0 bg-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
        <a
          className="relative text-foreground font-semibold uppercase text-sm group-hover:text-white transition-colors duration-300"
          href="/schedule"
        >
          Schedule Free Consultation
        </a>
      </div>
    </nav>
  );
}
