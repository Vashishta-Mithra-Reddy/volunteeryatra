"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Opportunities", href: "/opportunities" },
    { label: "Experiences", href: "/experiences" },
  ];

  const isActive = (path: string) => pathname?.includes(path);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-gray-200 font-poppins weight-500">
      <div className="container mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/vylogo.avif"
            alt="VolunteerYatra Logo"
            width={160}
            height={60}
            className="mr-2"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 font-medium ${
                isActive(href) ? "text-black" : "text-gray-600 hover:text-black"
              }`}
            >
              <span>{label}</span>
              {isActive(href) && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFEA35]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center">
          <Link href="/hostonboarding" className="hidden md:flex items-center mr-8">
            Become a Host
          </Link>

          <Link href="/profile" className="hidden md:flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                <span className="text-sm font-bold">U</span>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="ml-4 md:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-4 space-y-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 font-medium ${
                isActive(href) ? "text-black" : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/hostonboarding"
            className="block py-2 font-medium text-gray-600 hover:text-black"
            onClick={() => setMobileOpen(false)}
          >
            Become a Host
          </Link>
          <Link
            href="/profile"
            className="block py-2 font-medium text-gray-600 hover:text-black"
            onClick={() => setMobileOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
