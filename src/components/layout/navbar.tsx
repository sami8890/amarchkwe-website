"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown, Search, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
    },
    { name: "Testimonials", href: "#testimonials" },
    {
      name: "Contact",
      href: "#contact",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Email",
          href: "mailto:claireozoagu@gmail.com",
          icon: <Mail size={14} className="mr-2" />,
        },
        {
          name: "WhatsApp",
          href: "https://wa.me/2349058014731",
          icon: <Phone size={14} className="mr-2" />,
        },
        {
          name: "Schedule a Call",
          href: "https://calendly.com/claireozoagu/let-s-talk-about-your-need",
          icon: <Calendar size={14} className="mr-2" />,
        },
      ],
    },
  ]

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false) // Close mobile menu if open
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  // State for dropdown on mobile
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const toggleDropdown = (index: number): void => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  const handleBookCall = () => {
    if (typeof window !== "undefined") {
      window.open("https://calendly.com/claireozoagu/let-s-talk-about-your-need", "_blank")
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
        }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-[#0002AF] flex items-center justify-center">
              <span className="text-white font-semibold">VA</span>
            </div>
            <span className="font-medium text-gray-100">Your-VA-Next_Click</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-violet-300 transition-colors duration-200 flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-1 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                          className="px-4 py-2 text-sm text-gray-300 hover:bg-violet-900/30 hover:text-violet-300 flex items-center"
                        >
                          {"icon" in item && item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-violet-300 transition-colors duration-200" aria-label="Search">
              <Search size={18} />
            </button>
            <Button
              onClick={handleBookCall}
              size="sm"
              className="bg-[#0002AF] hover:bg-[#0003FF] text-white rounded-full"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-zinc-900 border-t border-zinc-800"
        >
          <div className="container px-4 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <Link
                      href={link.hasDropdown ? "#" : link.href}
                      className="text-gray-300 hover:text-violet-300 py-2 transition-colors duration-200"
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button onClick={() => toggleDropdown(index)} className="p-2 text-gray-300 hover:text-violet-300">
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && activeDropdown === index && (
                    <div className="ml-4 mt-1 border-l border-zinc-800 pl-4">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                          className=" py-2 text-sm text-gray-400 hover:text-violet-300 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          {"icon" in item && item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Search in mobile menu */}
              <div className="relative mt-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <Button
                onClick={handleBookCall}
                size="sm"
                className="bg-[#0002AF] hover:bg-[#0003FF] text-white rounded-full mt-4 w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

