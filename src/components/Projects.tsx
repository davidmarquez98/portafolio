import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "High-Availability Banking Microservices",
    description:
      "Designed and implemented secure, reactive backend microservices for financial transactions, optimizing response times by 35% and ensuring strict JWT/Spring Security compliance.",
    technologies: ["Java 21", "Spring WebFlux", "Quarkus", "PostgreSQL", "AWS"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Fintech Event-Driven Architecture",
    description:
      "Built a highly scalable data pipeline using Apache Kafka and MongoDB to handle real-time payment processing and continuous integration with SonarQube quality gates.",
    technologies: ["Spring Boot", "Apache Kafka", "MongoDB", "Docker", "SonarQube"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          Selected engineering work.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-neutral-700"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={project.githubUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-800/80 bg-neutral-950/70 px-4 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 hover:border-neutral-700 hover:text-cyan-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href={project.demoUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-600"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
