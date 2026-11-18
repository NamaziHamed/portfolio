
import ScrollDown from "../miniComponents/ScrollDown";
import SectionWrapper from "../miniComponents/SectionWrapper";
import CTAS from "../miniComponents/CTAS";

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="flex flex-col gap-7 min-h-screen w-full items-center justify-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-outfit">
        Software & Systems Engineer
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-3xl">
        I build production-ready web applications with Next.js and TypeScript,
        desktop tools with Tauri, and privacy-preserving systems in Rust.
        Co-founder of zkPrivada.
      </p>
      <CTAS />
      <ScrollDown />
    </SectionWrapper>
  );
}
