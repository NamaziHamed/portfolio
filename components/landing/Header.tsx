"use client";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-gray-900/80 border flex items-center justify-center w-full transition-all duration-300 ease-in-out fixed top-0 z-50",
        scrolled ? "drop-shadow-md h-32" : "h-48"
      )}
    >
      <SectionWrapper className="w-full flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between">
          <Image
            src={"/avatar.png"}
            alt="portfolio avatar"
            width={scrolled ? 75 : 100}
            height={scrolled ? 75 : 100}
            className="rounded-md"
          />
          <h1
            className="font-semibold font-outfit text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          >
            <Link href={"#hero"}>Hamed Namazi</Link>
          </h1>
        </div>
        <NavMenu />
      </SectionWrapper>
    </header>
  );
}
