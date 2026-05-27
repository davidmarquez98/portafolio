export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} David Marquez. All rights reserved.</p>
        <p>Driven by code quality and continuous innovation.</p>
      </div>
    </footer>
  );
}
