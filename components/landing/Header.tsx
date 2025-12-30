import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="bg-gray-800 opacity-80 h-32  flex items-center justify-center w-full">
      <SectionWrapper className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src={"/avatar.png"}
            alt="portfolio avatar"
            width={75}
            height={75}
            className="rounded-md"
          />
          <h1
            className="font-semibold font-outfit text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Hamed Namazi
          </h1>
        </div>
        <NavMenu />
      </SectionWrapper>
    </header>
  );
}
