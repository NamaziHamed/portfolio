import Contact from "@/components/landing/sections/contact";
import FeaturedProjects from "@/components/landing/sections/FeaturedProjects";
import Hero from "@/components/landing/sections/Hero";
import TechStack from "@/components/landing/sections/TechStack";

export default function Home() {
  return (
    <main className="overflow-x-hidden py-4 md:py-8 lg:py-12 flex flex-col gap-7">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
