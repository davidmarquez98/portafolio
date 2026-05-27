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
  },
  {
    title: "Languages",
    skills: [
      "English (B2+ Proficiency - Fully equipped to collaborate with international, multicultural teams)"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Skills</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          A stack focused on secure, scalable delivery.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700"
          >
            <h3 className="text-lg font-semibold text-zinc-100">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-500/40 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
