const skills = [
  "+4 años de experiencia en ingeniería de software para sistemas bancarios complejos de alta disponibilidad.",
  "Especialista en ecosistema Java (Spring Boot, Spring WebFlux, Quarkus) y seguridad avanzada (JWT, Spring Security).",
  "Optimización comprobada de rendimiento backend, logrando hasta un 35% de mejora en tiempos de respuesta.",
  "Manejo sólido de arquitecturas basadas en eventos con Apache Kafka e infraestructura Cloud en AWS.",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-5 w-5 shrink-0 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="aspect-[4/5] w-full rounded-xl border border-[#262626] bg-[#1c1c1c]" />

        <div className="text-left">
          <h2 className="mb-4 text-3xl font-bold text-white">ABOUT ME</h2>

          <p className="text-base leading-7 text-gray-400">
            Software Engineer con más de 4 años de experiencia en los sectores
            de banca, fintech y mercado de capitales. Enfocado en la calidad de
            código, resiliencia de infraestructura, optimización de performance
            e integración de herramientas avanzadas de IA (GenAI, Claude Code,
            Codex) para maximizar la eficiencia y velocidad del ciclo de
            desarrollo.
          </p>

          <ul className="mt-8 space-y-5">
            {skills.map((skill) => (
              <li key={skill} className="flex gap-3 text-sm leading-6 text-gray-300">
                <CheckIcon />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
