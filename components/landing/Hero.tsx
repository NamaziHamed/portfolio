import { Button } from "../ui/button";
import ScrollDown from "./ScrollDown";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="flex pt-10 flex-col gap-7 min-h-screen w-full items-center justify-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-outfit">
        Fullstack Next.js Engineer
      </h2>
      <p className="text-gray-300 text-sm md:text-base">
        Building scalable web applications with Next.js and React.
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
