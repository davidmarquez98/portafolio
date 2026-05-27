interface ExperienceItem {
  company: string;
  role: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Banco Macro",
    role: "Software Developer",
    description:
      "Desarrollando soluciones financieras robustas y de alta disponibilidad, liderando la migración y optimización de microservicios críticos en el ecosistema Java/Spring Boot."
  },
  {
    company: "Banco Hipotecario",
    role: "Software Developer",
    description:
      "Implementación de integraciones seguras, arquitecturas reactivas (WebFlux) y flujos de autenticación avanzados bajo estrictos estándares bancarios."
  },
  {
    company: "BYMA (Bolsas y Mercados Argentinos)",
    role: "Software Developer",
    description:
      "Desarrollo de sistemas transaccionales y de backend para el mercado financiero, asegurando baja latencia, escalabilidad y calidad de código controlada por SonarQube."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Experience
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Banking and fintech systems built for reliability.
        </h2>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-[11px] top-2 h-full w-px bg-zinc-800" aria-hidden="true" />
        <div className="space-y-6">
          {experiences.map((experience) => (
            <article key={experience.company} className="relative">
              <div
                className="absolute -left-6 top-6 h-6 w-6 rounded-full border-4 border-zinc-950 bg-cyan-400 shadow-lg shadow-cyan-400/30"
                aria-hidden="true"
              />
              <div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-zinc-100">{experience.company}</h3>
                  <span className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {experience.role}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-zinc-400">{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
