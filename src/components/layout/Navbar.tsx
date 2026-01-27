"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/research-projects" },
  { name: "Publications", href: "/publications" },
  { name: "Facilities", href: "/facilities" },
  { name: "Extension", href: "/extension" },
  { name: "Team", href: "/team" },
  { name: "News", href: "/news" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto py-4 sm:py-5 pl-0 pr-4 sm:pr-6">
        <div className="flex justify-between items-center">
          {/* Lab Name / Logo - Left edge */}
          <Link href="/" className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 group">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition whitespace-nowrap">
              Digital and Precision Agriculture Lab
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg font-medium flex-shrink-0 ml-16 pr-6">
            {navItems.map((item) => (
              <li key={item.name} className="whitespace-nowrap">
                <Link
                  href={item.href}
                  className="text-white hover:text-blue-200 transition font-bold uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-200 transition focus:outline-none pr-4 sm:pr-6"
            aria-label="Toggle menu"
          >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-blue-200 transition font-bold uppercase tracking-wide py-2 px-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
