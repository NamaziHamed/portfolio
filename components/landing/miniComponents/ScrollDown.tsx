"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useScrolled } from "@/hooks/useScrolled";

export default function ScrollDown() {
  const scrolled = useScrolled();

  return (
    <Button
      variant={"ghost"}
      title="read more"
      className={cn(
        "absolute bottom-10 animate-bounce animation-duration-2000",
        scrolled ? "hidden" : ""
      )}
      asChild
    >
      <Link
        href={"#techs"}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("techs")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className={cn("w-20 h-5")} />
      </Link>
    </Button>
  );
}
