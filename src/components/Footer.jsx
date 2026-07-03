function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-cyan-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5v9a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0-8.2 5.47a2.75 2.75 0 0 1-3.1 0L2.25 7.5"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-cyan-400"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.94 8.98H3.56V20h3.38V8.98ZM7.16 5.56C7.16 4.5 6.36 3.75 5.28 3.75S3.4 4.5 3.4 5.56c0 1.03.78 1.82 1.84 1.82h.02c1.1 0 1.9-.79 1.9-1.82ZM20.6 13.68c0-3.34-1.78-4.9-4.16-4.9a3.58 3.58 0 0 0-3.24 1.78V8.98H9.82c.04 1.03 0 11.02 0 11.02h3.38v-6.16c0-.33.02-.66.12-.9.26-.66.86-1.34 1.86-1.34 1.31 0 1.84 1 1.84 2.48V20h3.38v-6.32h.2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#121212]">
      <section className="border-y border-[#262626] bg-[#1c1c1c] px-4 py-12 text-center">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
          HAVE A PROJECT IN MIND? LET&apos;S BUILD SOMETHING GREAT TOGETHER.
        </h2>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:davidarielmarquez@outlook.com"
            className="rounded bg-cyan-500 px-6 py-2 text-center font-semibold text-black transition-colors hover:bg-cyan-600"
          >
            HIRE ME
          </a>

          <a
            href="#work"
            className="rounded border border-[#3a3a3a] px-6 py-2 text-center font-semibold text-white transition-colors hover:border-cyan-500/50 hover:bg-[#121212] hover:text-cyan-400"
          >
            VIEW MY WORK
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-white">DAVID MARQUEZ</h3>

          <div className="mt-3 inline-flex w-max rounded border border-[#262626] bg-[#1c1c1c] px-3 py-1 text-sm text-gray-300">
            Software Engineer &bull; Java &amp; Cloud Specialist
          </div>

          <p className="mt-8 text-xs text-gray-500">
            © 2026 David Marquez. All rights reserved.
          </p>
        </div>

        <address className="flex flex-col gap-4 not-italic md:items-end md:text-right">
          <a
            href="mailto:davidarielmarquez@outlook.com"
            className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-cyan-400 md:flex-row-reverse"
          >
            <MailIcon />
            <span>davidarielmarquez@outlook.com</span>
          </a>

          <a
            href="https://linkedin.com/in/davidmarquez-dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-cyan-400 md:flex-row-reverse"
          >
            <LinkedInIcon />
            <span>linkedin.com/in/davidmarquez-dev</span>
          </a>
        </address>
      </section>
    </footer>
  );
}
