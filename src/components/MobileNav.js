"use client"
import Link from "next/link"
import React, { useState, useEffect } from "react"

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Mobile Application Development", href: "/services/mobile-app-development" },
        { name: "Web Application Development", href: "/services/web-app-development" },
        { name: "AI & ML Product Development", href: "/services/ai-ml-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Human Resourcing", href: "/services/human-resourcing" },
        { name: "IT Consulting", href: "/services/it-consulting" },
      ],
    },
    {
      name: "Technologies",
      href: "/technologies",
      dropdown: [
        { name: "Flutter", href: "/technologies/flutter" },
        { name: "Laravel", href: "/technologies/laravel" },
        { name: "Vue.js & Nuxt.js", href: "/technologies/vue-nuxt" },
        { name: "Adonis.js", href: "/technologies/adonis-js" },
        { name: "React.js & React Native", href: "/technologies/react" },
        { name: "Express.js", href: "/technologies/express-js" },
        { name: "Ionic", href: "/technologies/ionic" },
        { name: "Kotlin & Swift", href: "/technologies/kotlin-swift" },
        { name: "Python", href: "/technologies/python" },
        { name: "WordPress, Shopify, Magento, Joomla", href: "/technologies/wordPress-shopify-magento-joomla" },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        { name: "Customer Relationship Management", href: "/solutions/customer-relationship-management" },
        { name: "Enterprise Resource Planning", href: "/solutions/enterprise-resource-planning" },
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
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  } , [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="px-4 py-3 flex justify-between items-center bg-black">
        <div className="logo text-xl text-white tracking-widest">
          <img src="/icons/devstella-logo1.svg" className="w-20" alt="" />
        </div>
        <button onClick={toggleMenu} className="text-white text-2xl z-40">
          <i className={`iconoir-${isMenuOpen ? "xmark" : "menu"}`}></i>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="container mx-auto px-4 pt-16 h-full overflow-y-auto">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2">
                {item.dropdown ? (
                  <div>
                    <Link
                      href={item.href}
                      className="w-full inline text-left text-white text-lg font-semibold flex justify-between items-center"
                    >
                      {item.name}
                      <i
                        onClick={() => toggleDropdown(item.name)}
                        className={`iconoir-nav-arrow-down text-foreground text-lg transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      ></i>
                    </Link>
                    <ul
                      className={`mt-2 ml-4 space-y-2 overflow-hidden transition-max-height duration-300 ease-in-out ${openDropdown === item.name ? "max-h-96" : "max-h-0"}`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={item.href} className="text-white text-lg font-semibold">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 mb-4">
            <Link
              href="/contact"
              className="block w-full text-center bg-foreground text-white font-semibold py-3 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

