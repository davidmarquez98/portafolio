const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/75 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#hero" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
            DM
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-zinc-100 sm:block">
            David Marquez
          </span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-zinc-800/80 bg-zinc-900/50 p-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-zinc-800 hover:text-cyan-400 md:px-4 md:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
