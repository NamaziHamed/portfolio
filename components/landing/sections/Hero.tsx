
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
        Next.js Developer
      </h2>
      <p className="text-gray-300 text-sm md:text-base max-w-3xl">
        I build production-ready web applications with Next.js and TypeScript.
        Clean architecture, secure authentication, optimized databases, from
        concept to production.
      </p>
<CTAS />
      <ScrollDown />
    </SectionWrapper>
  );
}
