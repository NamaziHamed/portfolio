import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import Experience from "@/components/site/Experience";
import Skills from "@/components/site/Skills";
import Education from "@/components/site/Education";
import Contact from "@/components/site/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
