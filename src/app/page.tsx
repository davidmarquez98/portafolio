import Contact from "@/components/Contact";
import BentoDashboard from "@/components/BentoDashboard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <div className="mx-auto max-w-6xl space-y-24 px-4 py-10 sm:px-6 md:space-y-32 lg:px-8">
        <BentoDashboard />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
