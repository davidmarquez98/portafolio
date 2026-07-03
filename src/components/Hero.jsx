import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-between gap-12 px-5 py-20 md:flex-row md:px-8 lg:py-24"
    >
      <div className="w-full max-w-xl text-center md:text-left">
        <p className="text-base font-medium text-cyan-400">Hi There!</p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          I&apos;m David Marquez
        </h1>

        <div className="my-3 inline-flex w-max rounded border border-[#262626] bg-[#1c1c1c] px-3 py-1 text-sm text-gray-300">
          Software Engineer &bull; Java &amp; Cloud Specialist
        </div>

        <p className="mx-auto max-w-md text-lg text-gray-400 md:mx-0">
          Especializado en construir aplicaciones seguras, escalables y de alta
          disponibilidad para el sector Fintech y Bancario.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="#contact"
            className="rounded bg-cyan-500 px-6 py-2 text-center font-semibold text-black transition-colors hover:bg-cyan-600"
          >
            HIRE ME
          </Link>

          <Link
            href="#work"
            className="rounded border border-[#3a3a3a] px-6 py-2 text-center text-white transition-colors hover:bg-[#1c1c1c]"
          >
            VIEW MY WORK
          </Link>
        </div>
      </div>

      <div className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-lg border border-[#262626] bg-[#1c1c1c]">
        <div className="h-24 w-24 rounded-full border border-[#3a3a3a] bg-[#121212]" />
      </div>
    </section>
  );
}
