import { Button } from "../../ui/button";
import ScrollDown from "../miniComponents/ScrollDown";
import SectionWrapper from "../miniComponents/SectionWrapper";

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
      <div className="flex items-center gap-5">
        <Button className="font-semibold" size={"lg"} variant={"default"}>
          Get in touch
        </Button>
        <Button className="" size={"lg"} variant={"outline"}>
          View projects
        </Button>
      </div>
      <ScrollDown />
    </SectionWrapper>
  );
}
