import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/create", label: "Create post" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-inherit px-7 py-4 border-b">
      <h1 className="px-3 py-1 bg-black text-white rounded-md">
        <Link href={"/"}>B</Link>
      </h1>

      <nav>
        <ul className="flex gap-x-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
