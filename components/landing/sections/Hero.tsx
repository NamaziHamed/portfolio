import { MapPin } from "lucide-react";
import ScrollDown from "../miniComponents/ScrollDown";
import SectionWrapper from "../miniComponents/SectionWrapper";
import CTAS from "../miniComponents/CTAS";

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="flex flex-col gap-7 min-h-screen w-full items-center justify-center text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-outfit">
        Software Developer &amp; IT Engineer
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed">
        I build custom tools for real operational needs, from web apps with
        Next.js and TypeScript to desktop software with Tauri, and I set up the
        infrastructure they run on. I&apos;m also a co-founder of{" "}
        <span className="text-indigo-400">zkPrivada</span>, where I implement
        cryptographic protocols in Rust and Python.
      </p>
      <p className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
        <MapPin className="w-4 h-4" />
        Tabriz, Iran · Open to remote work
      </p>
      <CTAS />
      <ScrollDown />
    </SectionWrapper>
  );
}
