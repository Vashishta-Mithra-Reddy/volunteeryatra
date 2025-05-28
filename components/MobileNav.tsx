"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Opportunities",
      href: "/opportunities",
      icon: Home,
    },
    {
      name: "Experiences",
      href: "/experiences",
      icon: Briefcase,
    },
    {
      name: "Become a Host",
      href: "/hostonboarding",
      icon: Users,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ];

  if (pathname !== "/opportunities") {
    return null; // Only show on the /opportunities page
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 md:hidden z-50">
      <nav className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center text-xs font-medium p-2 rounded-md",
                isActive ? "text-custom-dark-green" : "text-gray-500 hover:text-gray-700"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}