import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}
