import { Analytics } from "@vercel/analytics/next"
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Activities from "@/components/sections/Activities";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Analytics />
      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
    </main>
  );
}
