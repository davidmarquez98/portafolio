import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Email", href: "mailto:tu-email@example.com", icon: Mail }
];

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-28 pt-10 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            <span>+3 Years Experience</span>
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <span>35% Response Time Optimization</span>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Software Engineer & Full Stack Developer
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
              David Marquez
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              Software Engineer with 3+ years of experience specialized in building secure,
              scalable, and high-availability applications, with a strong background in the
              Fintech and Banking sectors.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-600"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/50 px-5 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500/40 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-zinc-800/80 bg-zinc-900/50 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-cyan-500/40 hover:text-cyan-400"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-zinc-400">Performance impact</p>
              <p className="mt-2 text-4xl font-bold text-cyan-400">35%</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Achieved up to a 35% improvement in response times.
              </p>
            </div>
            <div className="h-px bg-zinc-800" />
            <div>
              <p className="text-sm font-medium text-zinc-400">Delivery methodology</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                I actively integrate GenAI and agentic coding tools to accelerate feature delivery
                and streamline development cycles.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
