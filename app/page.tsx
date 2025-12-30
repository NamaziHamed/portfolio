import Hero from "@/components/landing/Hero";
import TechStack from "@/components/landing/TechStack";

export default function Home() {
  return (
    <main className="overflow-x-hidden py-4 md:py-8 lg:py-12 flex flex-col gap-7">
      <Hero />
      <TechStack />
    </main>
  );
}
