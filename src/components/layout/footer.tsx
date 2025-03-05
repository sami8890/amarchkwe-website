"use client";

import Link from "next/link";
import {
  Mail,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 relative">
      {/* Gradient accent */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand/About column */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* Logo placeholder - replace with your actual logo */}
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center mr-3">
                <span className="text-white font-semibold">VA</span>
              </div>
              <h3 className="text-xl font-medium text-gray-100">
                Virtual Assistant
              </h3>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Professional virtual assistance services that help modern
              businesses thrive. Focus on growth while I handle the details.
            </p>

            <div className="flex space-x-4 mt-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-violet-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-violet-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-violet-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Customer Support",
                "Administrative Tasks",
                "Content Creation",
                "Email Management",
                "Calendar Organization",
                "Social Media Management",
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-violet-300 text-sm transition-colors flex items-center"
                  >
                    <span className="mr-2 text-xs">•</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-violet-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  claireozoagu@gmail.com, 
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Virtual Assistant. All rights
              reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-500 hover:text-violet-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-violet-300 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-violet-300 text-sm transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}