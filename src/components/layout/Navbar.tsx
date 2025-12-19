"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Research Projects", href: "/research-projects" },
  { name: "Publications", href: "/publications" },
  { name: "Apps", href: "/apps" },
  { name: "News", href: "/news" },
  { name: "Research Facilities", href: "/facilities" },
  { name: "Team", href: "/team" },
  { name: "Join Our Lab", href: "/join" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Lab Name / Logo */}
        <Link href="/" className="text-xl font-bold text-blue-200 hover:text-white transition whitespace-nowrap">
          Precision Agriculture Lab
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-base font-medium flex-shrink-0 ml-16">
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
      </div>
    </nav>
  );
}
