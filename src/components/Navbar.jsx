import Link from "next/link";

const links = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT ME" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#121212]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5f5f5]"
        >
          DAVID MARQUEZ
        </Link>

        <div className="flex items-center gap-5 text-xs font-semibold text-gray-400 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
