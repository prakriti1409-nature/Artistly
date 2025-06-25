"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Artists", href: "/artists" },
    { name: "Onboard", href: "/onboard" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
          <Image
            src="/images/PL.png"
            alt="Artistly Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex list-none items-center space-x-6">
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative no-underline text-sm font-medium px-3 py-2 transition-colors duration-200 ${
                  pathname === href
                    ? "text-purple-700 border-b-2 border-teal-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
