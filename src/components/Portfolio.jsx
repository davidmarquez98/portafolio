import projects from "@/data/projects.json";

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl">
          PORTFOLIO
        </h2>
        <div className="mx-auto mt-2 h-0.5 w-12 bg-cyan-500" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-[#262626] bg-[#1c1c1c] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
          >
            <div className="aspect-video w-full rounded-t-xl bg-[#262626]" />

            <div className="p-7">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>

              <p className="my-2 text-sm leading-6 text-gray-400">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={`${project.id}-${technology}`}
                    className="rounded-full border border-cyan-500/20 bg-cyan-950/40 px-2.5 py-1 text-xs text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#3a3a3a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-cyan-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded border border-[#3a3a3a] px-8 py-3 text-sm font-bold text-white transition-colors hover:border-cyan-500/50 hover:bg-[#1c1c1c] hover:text-cyan-400"
        >
          VIEW MY PROJECTS
        </a>
      </div>
    </section>
  );
}
