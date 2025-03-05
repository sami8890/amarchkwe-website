"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Virtual Support", href: "/services/#Virtual Support" },
        { name: "Voiceover Services", href: "/services/#voiceover Services" },
        { name: " Public Speaking", href: "/services/#public speaking" },
      ]
    },
    { name: "Testimonials", href: "/testimonials" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State for dropdown on mobile
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  

  const toggleDropdown = (index: number): void => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/claireozoagu/let-s-talk-about-your-need", "_blank");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-zinc-950/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-white font-semibold">A</span>
            </div>
            <span className="font-medium text-gray-100 ">Amarachukwu</span>
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
                  {link.hasDropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                    <div className="py-1 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-violet-900/30 hover:text-violet-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={handleBookCall}
              size="sm"
              className="bg-[#0002AF] hover:bg-violet-700 text-white rounded-full"
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
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-2 text-gray-300 hover:text-violet-300"
                      >
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
                          className="block py-2 text-sm text-gray-400 hover:text-violet-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                onClick={handleBookCall}
                size="sm"
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full mt-4 w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}