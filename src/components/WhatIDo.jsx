const services = [
  {
    title: "BACKEND ARCHITECTURE",
    icon: "API",
    description:
      "Diseño y desarrollo de APIs robustas, imperativas y reactivas con Java, Spring Boot y Quarkus.",
  },
  {
    title: "CLOUD & DEVOPS",
    icon: "CI",
    description:
      "Despliegue y escalado de soluciones en AWS (SQS, S3), orquestación en la nube y automatización de pipelines CI/CD.",
  },
  {
    title: "FULLSTACK INTEGRATION",
    icon: "</>",
    description:
      "Construcción de interfaces dinámicas, accesibles y de alto rendimiento utilizando React.js, Vue.js y Tailwind CSS.",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold uppercase text-white sm:text-4xl">
          What I Do
        </h2>
        <div className="mx-auto mt-2 h-0.5 w-12 bg-cyan-500" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-xl border border-[#262626] bg-[#1c1c1c] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
          >
            <div className="mb-7 grid h-14 w-14 place-items-center rounded-lg border border-[#303030] bg-[#121212] text-sm font-bold text-cyan-400 transition-colors duration-300 group-hover:border-cyan-500/50">
              {service.icon}
            </div>

            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              {service.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
