'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomImage from "./CustomImage";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Human Resourcing", href: "/services/human-resourcing" },
        { name: "AI & ML Product Development", href: "/services/ai-ml-development" },
        { name: "Mobile Application Development", href: "/services/mobile-app-development" },
        { name: "Web Application Development", href: "/services/web-app-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ],
    },
    {
      name: "Technologies",
      href: "/technologies",
      dropdown: [
        { name: "Python", href: "/technologies/python" },
        { name: "Flutter", href: "/technologies/flutter" },
        { name: "React.js & React Native", href: "/technologies/react" },
        { name: "Laravel", href: "/technologies/laravel" },
        { name: "Vue.js & Nuxt.js", href: "/technologies/vue-nuxt" },
        { name: "Adonis.js", href: "/technologies/adonis-js" },
        { name: "Express.js", href: "/technologies/express-js" },
        { name: "Ionic", href: "/technologies/ionic" },
        { name: "Kotlin & Swift", href: "/technologies/kotlin-swift" },
        { name: "WordPress, Shopify, Magento, Joomla", href: "/technologies/wordPress-shopify-magento-joomla" },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      dropdown: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Education", href: "/industries/education" },
        { name: "Retail", href: "/industries/retail" },
        { name: "Media & Publishing", href: "/industries/media-publishing" },
        { name: "Finance & Banking", href: "/industries/finance-banking" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`w-full flex justify-center px-7 fixed top-0 z-40 duration-300 ${scrolled ? "bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-[10px] py-5" : "py-7"}`}>
      <nav 
      className=" max-w-7xl mx-auto flex justify-between items-center  w-full "
      id="navbar"
    >
      <Link href={"/"} className="logo text-xl text-white tracking-widest">
        <CustomImage src="/icons/devstella-logo1.svg" className="w-20" alt="Devstella software solutions" width={150} height={150} loading="eager"/>
      </Link>
      <ul className="menu flex">
        {menuItems.map((item, index) =>
          item.dropdown ? (
            <li key={index} className="relative group">
              {/* Separate href for dropdown-link */}
              <Link
                className="dropdown-link mx-2 text-white text-base flex items-center font-regular hover:text-foreground"
                href={item.href}
              >
                {item.name}{" "}
                <i className="iconoir-nav-arrow-down ml-1 text-foreground text-lg"></i>
              </Link>
              <ul
                className="dropdown absolute bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-[10px] rounded-[.475rem] text-white py-3 px-5 b-10 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"
                style={{ width: "17rem", left: "0%", top: "170%" }}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="my-4 border-b border-b-slate-600 pb-2">
                    <Link
                      href={subItem.href}
                      className="text-sm hover:text-foreground"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index}>
              <Link
                className="mx-2 text-white text-base flex items-center font-regular hover:text-foreground"
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
        <Link
          className="relative text-foreground font-semibold uppercase text-xs lg:text-sm group-hover:text-white transition-colors duration-300"
          href="/contact"
        >
          Schedule Free Consultation
        </Link>
      </div>
    </nav>
    </header>
  );
}
