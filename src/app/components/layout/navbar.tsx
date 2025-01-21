import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    const [isScrolled, setIsScrolled] = useState(false); // State for sticky navbar
    const menuRef = useRef(null); // Ref for detecting outside clicks

    // Smooth scroll function
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false); // Close mobile menu after clicking a link
    };

    // Sticky navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
                    : "bg-slate-900/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white text-lg font-bold">
                            YourLogo
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link
                            href="#home"
                            onClick={(e) => handleSmoothScroll(e, "#home")}
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            onClick={(e) => handleSmoothScroll(e, "#services")}
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            onClick={(e) => handleSmoothScroll(e, "#about")}
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, "#contact")}
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/get-started"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="md:hidden bg-slate-900/95 backdrop-blur-sm"
                    ref={menuRef}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="#home"
                            onClick={(e) => handleSmoothScroll(e, "#home")}
                            className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            onClick={(e) => handleSmoothScroll(e, "#services")}
                            className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            onClick={(e) => handleSmoothScroll(e, "#about")}
                            className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, "#contact")}
                            className="block text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;