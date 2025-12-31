"use client";
import Image from "next/image";
import SectionWrapper from "../miniComponents/SectionWrapper";
import NavMenu from "../miniComponents/NavMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useScrolled } from "@/hooks/useScrolled";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "bg-gray-900/80 border flex  items-center backdrop-blur-sm justify-center w-full transition-all duration-300 ease-in-out fixed top-0 z-50",
        scrolled ? "drop-shadow-md h-26 md:h-18" : "h-38"
      )}
    >
      <SectionWrapper className="w-full flex items-center justify-between flex-col md:flex-row gap-2 ">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src={"/avatar.png"}
            alt="portfolio avatar"
            width={100}
            height={100}
            className={cn(
              "rounded-md object-center object-cover transition-all duration-500 ease-in-out",
              scrolled ? "w-16 h-16 rounded-full" : ""
            )}
          />
          <h1
            className="font-semibold font-outfit text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          >
            <Link
              href={"/"}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Hamed Namazi
            </Link>
          </h1>
        </div>
        <NavMenu />
      </SectionWrapper>
    </header>
  );
}
