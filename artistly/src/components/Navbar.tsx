"use client";

import Link from "next/link";
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
    <nav className="flex justify-between items-center py-4 px-6 border-b bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-purple-600">
        Artistly
      </Link>
      <div className="flex gap-6 text-sm">
        {navItems.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline transition ${
              pathname === href ? "text-purple-700 font-semibold" : "text-gray-700"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
