import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { ParticleField } from "@/components/ui/ParticleField";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { CV } from "@/components/sections/CV";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <ParticleField />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Experience />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
