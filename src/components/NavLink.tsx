"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProp = Readonly<{
  href: string;
  children: React.ReactNode;
}>;

export default function NavLink({ href, children }: NavLinkProp) {
  const path = usePathname();

  return (
    <Link
      className={`${path === href ? "text-inherit" : "text-gray-400"}`}
      href={href}
    >
      {children}
    </Link>
  );
}
