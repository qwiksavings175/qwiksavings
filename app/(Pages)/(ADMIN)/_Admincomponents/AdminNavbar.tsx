"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const aciveStyles = "text-app-main";

  const adminNavlinks = [
    { href: "/admin/create-store", title: "Create Store" },
    { href: "/admin/create-category", title: "Create Category" },
    { href: "/admin/createcoupon", title: "Create Coupon" },
    { href: "/admin/createevent", title: "Create Event" },
    { href: "/admin/createblog", title: "Create Blog" },
    { href: "/admin/createfestival", title: "Create Festival" },
  ];

  return (
    session?.user.role === "admin" && (
      <nav className="sticky left-0 top-16 z-50 flex w-full items-center justify-start gap-x-4 overflow-x-auto border-b border-app-main bg-popover p-4 px-2 text-xs sm:justify-center sm:px-4 sm:text-base lg:top-20">
        {adminNavlinks.map((link, index) => {
          return (
            <Link key={index} href={link.href} className="lg:-translate-x-8">
              <button
                className={`${pathname === link.href ? aciveStyles : ""} transition-all duration-300 ease-linear hover:text-app-main`}
              >
                {link.title}
              </button>
            </Link>
          );
        })}
      </nav>
    )
  );
};

export default AdminNavbar;
