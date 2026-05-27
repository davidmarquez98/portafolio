import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  { label: "Email", value: "tu-email@example.com", href: "mailto:tu-email@example.com", icon: Mail },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", value: "View GitHub profile", href: "#", icon: Github }
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
              Let&apos;s build reliable software.
            </h2>
            <p className="leading-7 text-zinc-400">
              Available for backend-heavy full stack roles, fintech platforms, and teams that care
              about performance, security, and code quality.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="rounded-2xl border border-neutral-800/80 bg-neutral-950/70 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700"
              >
                <Icon className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold text-zinc-100">{label}</p>
                <p className="mt-1 break-words text-sm text-zinc-400">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
