import { ArrowRight, Github, Globe2, Languages, Linkedin, Mail, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Data",
    skills: [
      "Java (8/17/21)",
      "Spring Boot",
      "Spring WebFlux",
      "Quarkus",
      "Spring Security",
      "JWT",
      "Hibernate",
      "Apache Kafka",
      "MongoDB",
      "Aurora",
      "PostgreSQL",
      "Oracle 21"
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (SQS, S3)", "GCP", "SonarQube", "OpenShift", "Jenkins", "Docker"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Vue.js", "Tailwind CSS"]
  }
];

const quickLinks = [
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Email", href: "mailto:tu-email@example.com", icon: Mail }
];

const bentoCardClass =
  "rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700 md:p-8";

export default function BentoDashboard() {
  return (
    <section id="hero" className="scroll-mt-28 pt-10 md:pt-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className={`${bentoCardClass} md:col-span-2`}>
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="space-y-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                +3 Years Experience
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Software Engineer & Full Stack Developer
                </p>
                <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                  David Marquez
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                  Software Engineer with 3+ years of experience specialized in building secure,
                  scalable, and high-availability applications, with a strong background in the
                  Fintech and Banking sectors.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-600"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-800/80 bg-neutral-950/60 px-5 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700 hover:text-cyan-400"
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
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-neutral-800/80 bg-neutral-950/60 text-zinc-400 transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700 hover:text-cyan-400"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className={bentoCardClass}>
          <div className="flex h-full flex-col justify-between gap-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Performance
            </p>
            <div>
              <p className="bg-gradient-to-br from-cyan-300 to-blue-500 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl">
                35%
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                Achieved up to a 35% improvement in response times.
              </p>
            </div>
          </div>
        </article>

        <article className={bentoCardClass}>
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-300">
              <Languages className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Languages
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
                English B2+ Proficiency
              </h2>
              <p className="leading-7 text-zinc-400">
                Fully equipped to collaborate with international, multicultural teams.
              </p>
            </div>
          </div>
        </article>

        <article id="skills" className={`${bentoCardClass} scroll-mt-28 md:col-span-2`}>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Skills
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
                Secure, scalable, production-ready stack.
              </h2>
            </div>
            <div className="hidden h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-300 sm:grid">
              <Globe2 className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-neutral-800/80 bg-neutral-950/50 p-4 transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700"
              >
                <h3 className="text-sm font-semibold text-zinc-100">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-neutral-800 bg-neutral-950/70 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors duration-300 hover:border-cyan-500/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
